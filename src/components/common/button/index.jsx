import { Button } from "@/components/ui/button";
import classNames from "classnames";

const CustomButton = ({
  type = "button",
  buttonClass,
  disabled,
  loading,
  children,
  onClick,
  variant,
  ...props
}) => {
  return (
    <Button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classNames(
        "btn",
        disabled && "opacity-50 !cursor-not-allowed",
        loading && "opacity-75 !cursor-not-allowed",
        buttonClass
      )}
      {...props}
    >
      {children ?? "Button"}
    </Button>
  );
};

export default CustomButton;
