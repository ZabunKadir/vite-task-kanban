import { Button } from "@/components/ui/button";
import classNames from "classnames";

export function ButtonComp({
  type,
  buttonClass,
  disabled,
  loading,
  children,
  onClick,
  variant,
  ...props
}) {
  return (
    <Button
      {...props}
      onClick={onClick}
      disabled={disabled}
      className={classNames(
        "min-h-[40px] h-[40px] min-w-max text-white bg-primary-main hover:cursor-pointer",
        disabled && "opacity-50 !cursor-not-allowed",
        loading && "opacity-75 !cursor-not-allowed",
        buttonClass
      )}
    >
      {children ?? "Button"}
    </Button>
  );
}
