import { useState, useEffect } from "react";

const Checkbox = ({ label, name, onCheck }) => {
  const [isChecked, setIsChecked] = useState(false);

  // LocalStorage'dan checkbox durumunu al
  useEffect(() => {
    const storedValue = localStorage.getItem(name);
    if (storedValue !== null) {
      setIsChecked(JSON.parse(storedValue));
    }
  }, [name]);

  const handleChange = (e) => {
    const checked = e.target.checked;
    setIsChecked(checked);
    localStorage.setItem(name, JSON.stringify(checked)); // Durumu localStorage'a kaydet
    onCheck(name, checked); // Durumu parent component'e bildir
  };

  return (
    <div className="flex items-center space-x-2">
      <input
        type="checkbox"
        id={name}
        name={name}
        checked={isChecked}
        onChange={handleChange}
        className="text-blue-500 focus:ring-0"
      />
      <label htmlFor={name} className="text-sm text-gray-900 dark:text-gray-100">
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
