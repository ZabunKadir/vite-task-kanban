import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CustomDatePicker = ({
  selectedDate,
  onChange,
  placeholder,
  format = "dd/MM/YYYY",
  className,
}) => {
  return (
    <DatePicker
      selected={selectedDate}
      onChange={onChange}
      dateFormat={format}
      placeholderText={placeholder}
      className={`border p-2 rounded bg-white dark:bg-gray-800 ${className}`}
    />
  );
};

export default CustomDatePicker;
