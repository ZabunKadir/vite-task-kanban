import classNames from "classnames";
import { Link } from "react-router-dom";

const CustomLink = ({
  children,
  className = "",
  to,
  rel,
  target,
  ...props
}) => {
  return (
    <Link
      {...props}
      to={to}
      target={target}
      ref={rel}
      className={classNames(
        "flex items-center min-w-max font-medium hover:underline transition-color duration-300 hover:text-gray-400",
        className
      )}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
