import classNames from "classnames";
import React from "react";

const Button = ({ onClick, children, disabled }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={classNames(
        "bg-red-400 py-2 px-4 rounded",
        disabled ? "bg-gray-500" : ""
      )}
    >
      {children}
    </button>
  );
};

export default Button;
