// components/Logo.js

import { Link } from "react-router";

const Logo = ({ width = 150, height = 150 }) => {
  return (
    <Link to="/" className="inline-block">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Meta_Inc._logo.jpg"
        alt="Logo"
        width={width}
        height={height}
        className="flex-shrink-0 cursor-pointer"
      />
    </Link>
  );
};

export default Logo;
