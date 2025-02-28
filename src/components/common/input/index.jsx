import classNames from "classnames";

const InputField = ({
  value,
  label,
  type = "text",
  error,
  name,
  id,
  containerClass = "",
  labelClass = "",
  inputClass = "",
  onChange,
  onBlur,
  ...props
}) => {
  return (
    <div
      className={classNames("flex flex-col w-full space-y-1", containerClass)}
    >
      {label && (
        <label
          htmlFor={name}
          className={classNames(
            "flex w-full text-sm font-medium text-gray-900 dark:text-gray-100 ml-1",
            labelClass
          )}
        >
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        className={classNames(
          "w-full border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-main dark:bg-gray-800 dark:text-white",
          error && "!border-error focus:!ring-0",
          inputClass
        )}
        {...props}
      />
      {error && <span className="text-red-500 text-sm ">{error}</span>}
    </div>
  );
};

export default InputField;
