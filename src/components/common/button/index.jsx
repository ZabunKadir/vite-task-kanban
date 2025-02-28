import { Button } from "@/components/ui/button";
import classNames from "classnames";

const CustomButton = ({
  type = "button",
  buttonClass = "",
  disabled,
  loading,
  children,
  onClick,
  variant = "primary",
  ...props
}) => {
  return (
    <Button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={classNames(
        "px-4 py-2 transition-color duration-300 flex items-center justify-center gap-2",
        disabled && "opacity-50 !cursor-not-allowed",
        loading && "opacity-75 !cursor-not-allowed",
        {
          "bg-error text-white hover:bg-error-light": variant === "error",
          "bg-success text-white  hover:bg-success-light":
            variant === "success",
          "bg-warning text-white hover:bg-warning-light": variant === "warning",
          "bg-info text-white hover:bg-info-light": variant === "info",
          "bg-primary-main text-white hover:bg-primary-light":
            variant === "primary",
          "bg-secondary-main text-white hover:bg-secondary-light":
            variant === "secondary",
        },
        buttonClass // Kullanıcının eklediği ekstra sınıflar burada ekleniyor
      )}
      {...props}
    >
      {children ?? "Button"}
    </Button>
  );
};

export default CustomButton;
