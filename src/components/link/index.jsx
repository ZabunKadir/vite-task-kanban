import classNames from "classnames";
import { Link } from "react-router-dom";

const CustomLink = ({ children, href, rel, target, ...props }) => {
  return (
    <Link
      {...props}
      href={href}
      target={target}
      ref={rel}
      className={classNames(
        " font-medium hover:underline transition-color duration-300 hover:text-gray-400",
        props.className
      )}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
