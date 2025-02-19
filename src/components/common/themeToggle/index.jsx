import { useContext } from "react";
import { ThemeContext } from "@/context/themeContext";
import { FaMoon } from "react-icons/fa";
import { IoMdSunny } from "react-icons/io";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      onClick={toggleTheme}
      className="relative w-14 h-8 rounded-full bg-gray-200 dark:bg-gray-700 cursor-pointer transition-all duration-300"
    >
      <div
        className={`absolute top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white dark:bg-gray-900 flex items-center justify-center transition-all duration-300 ${
          theme === "dark" ? "translate-x-7" : "translate-x-1"
        }`}
      >
        {theme === "dark" ? (
          <FaMoon className="text-yellow-400 text-base" />
        ) : (
          <IoMdSunny className="text-orange-400 text-base" />
        )}
      </div>
    </div>
  );
};

export default ThemeToggle;