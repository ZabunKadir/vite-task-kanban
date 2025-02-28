import  { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CustomDatePicker = ({
  selectedDate,
  onChange,
  placeholder,
  format = "dd/MM/yyyy HH:mm",
  className,
  reset = false,  // Varsayılan olarak reset true
}) => {
  const [date, setDate] = useState(selectedDate || new Date()); // Başlangıçta geçerli tarih ve saat

  useEffect(() => {
    if (reset) {
      setDate(new Date()); // Bileşen sıfırlanabilir, reset true olduğunda yeni bir tarih
    }
  }, [reset]);

  const handleChange = (newDate) => {
    setDate(newDate);
    if (onChange) {
      onChange(newDate); 
    }
  };

  return (
    <DatePicker
      selected={date}
      onChange={handleChange}
      dateFormat={format}
      placeholderText={placeholder}
      showTimeSelect
      timeFormat="HH:mm"
      timeIntervals={60}  
      className={`border p-2 rounded bg-white dark:bg-gray-800 ${className}`}
    />
  );
};

export default CustomDatePicker;
