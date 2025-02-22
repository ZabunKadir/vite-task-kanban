import { Button } from "@/components/ui/button";
import classNames from "classnames";

const CustomButton = ({
  type = "button",
  buttonClass,
  disabled,
  loading,
  children,
  onClick,
  variant = "default", // Varsayılan olarak normal buton
  ...props
}) => {
  return (
    <Button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={classNames(
        "px-4 py-2 rounded-lg transition duration-300",
        "flex items-center justify-center gap-2",
        disabled && "opacity-50 !cursor-not-allowed",
        loading && "opacity-75 !cursor-not-allowed",
        {
          "bg-red-600 text-white hover:bg-red-700": variant === "error",
          "bg-green-600 text-white hover:bg-green-700": variant === "success",
          "bg-yellow-500 text-white hover:bg-yellow-600": variant === "warning",
          "bg-blue-600 text-white hover:bg-blue-700": variant === "info",
          "bg-gray-600 text-white hover:bg-gray-700": variant === "default",
        },
        buttonClass
      )}
      {...props}
    >
      {children ?? "Button"}
    </Button>
  );
};

export default CustomButton;
