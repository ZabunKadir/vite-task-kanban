import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext"; 
import { CustomButton } from "../button"; 
import { FaMoon } from "react-icons/fa";
import { IoMdSunny } from "react-icons/io";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <CustomButton
      onClick={toggleTheme}
      className="bg-gray-200 dark:bg-gray-700 p-2 rounded-full transition-all"
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
