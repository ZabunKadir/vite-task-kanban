import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectGroup,
  SelectLabel,
} from "@/components/ui/select";
import classNames from "classnames";

const CustomSelect = ({
  options = [],
  placeholder = "Seçim yapın",
  className,
  onChange,
  value,
  disabled,
  error,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <Select onValueChange={onChange} value={value} disabled={disabled}>
        <SelectTrigger
          className={classNames(
            "w-full",
            error && "border-error focus:ring-error",
            className
          )}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>

        <SelectContent>
          {options.map((option, index) => {
            // is group
            if (option.group) {
              return (
                <SelectGroup key={index}>
                  <SelectLabel>{option.group}</SelectLabel>
                  {option.options.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              );
            }

            // is single
            return (
              <SelectItem key={index} value={option.value}>
                {option.label}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>

      {error && <span className="text-sm text-error">{error}</span>}
    </div>
  );
};

export default CustomSelect;
