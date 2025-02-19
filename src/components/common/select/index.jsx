import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
    SelectGroup,
    SelectLabel,
  } from "@/components/ui/select";
  import { cn } from "@/lib/utils";
  
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
          <SelectTrigger className={cn(
            "w-full", 
            error && "border-destructive focus:ring-destructive", 
            className
          )}>
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
  
          <SelectContent>
            {options.map((option) => {
              // Grup varsa
              if (option.group) {
                return (
                  <SelectGroup key={option.group}>
                    <SelectLabel>{option.group}</SelectLabel>
                    {option.options.map((item) => (
                      <SelectItem key={item.value} value={item.value}>
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                );
              }
              
              // Tekil seçenekler
              return (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
  
        {error && <span className="text-sm text-destructive">{error}</span>}
      </div>
    );
  };
  
  export default CustomSelect;