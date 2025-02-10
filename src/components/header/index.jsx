import MobileMenu from "./mobilmenu"; // Mobil menü componentini import edin
import Logo from "../logo";
import { ThemeContext } from "@/context/themecontext";
import CustomLink from "../link";
import { CustomButton } from "../button";
import { FaMoon } from "react-icons/fa";
import { IoMdSunny } from "react-icons/io";
import { useContext } from "react";
import ThemeToggle from "./themetoglle";

const navLinks = [
  { title: "About", link: "#" },
  { title: "Solutions", link: "#" },
];

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="w-full flex border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 md:px-20 py-6 transition-colors duration-300">
      <div className="flex items-center justify-between w-full">
        <div className="flex-shrink-0">
          <Logo width={90} height={60} />
        </div>
        <div className="hidden md:flex items-center gap-6 mx-4">
          {navLinks.map((item, index) => (
            <CustomLink key={index} to={item.link} className="text-gray-900 dark:text-gray-100">
              {item.title}
            </CustomLink>
          ))}
        </div>
        <div className="hidden md:flex space-x-4">
          <CustomLink to="/signup">
            <CustomButton className="bg-primary-main text-white dark:bg-gray-700 dark:text-white">
              Sign Up
            </CustomButton>
          </CustomLink>
          <CustomLink to="/login">
            <CustomButton className="text-primary-main bg-white border border-transparent hover:border-primary-main dark:bg-gray-700 dark:text-gray-200 dark:border-gray-500">
              Sign In
            </CustomButton>
          </CustomLink>
          <div className="space-x-5">
          <ThemeToggle /> 
          </div>
        </div>
        <div className="md:hidden">
          <MobileMenu links={navLinks} />
        </div>
      </div>
    </header>
  );
};

export default Header;
