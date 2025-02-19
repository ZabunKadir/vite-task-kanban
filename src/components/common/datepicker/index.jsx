

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const CustomDatePicker = ({ selectedDate, onChange, placeholder, className }) => {
  return (
    <DatePicker
      selected={selectedDate}
      onChange={onChange}
      placeholderText={placeholder}
      className={`border p-2 rounded ${className}`} 
    />
  )
}

export default CustomDatePicker
