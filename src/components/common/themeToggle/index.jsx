import { useContext } from "react";
import { ThemeContext } from "@/context/themeContext";

import { FaMoon } from "react-icons/fa";
import { IoMdSunny } from "react-icons/io";
import CustomButton from "../button";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <CustomButton
      onClick={toggleTheme}
      className="bg-gray-200 dark:bg-gray-700 w-[36px] h-[36px] p-2 rounded-full transition-all duration-300"
    >
      {theme === "dark" ? (
        <FaMoon className="text-yellow-400 text-xl" />
      ) : (
        <IoMdSunny className="text-gray-900 dark:text-gray-100 text-xl" />
      )}
    </CustomButton>
  );
};

export default ThemeToggle;
