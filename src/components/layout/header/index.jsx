import MobileMenu from "./mobilMenu"; // Mobil menü componentini import edin
import CustomLink from "@/components/common/customLink";
import CustomButton from "@/components/common/button";
import ThemeToggle from "@/components/common/themeToggle";
import Logo from "../logo";
import { GoItalic } from "react-icons/go";

const navLinks = [
  { title: "About", link: "#" },
  { title: "Solutions", link: "/solutions" },
];

const Header = () => {
  return (
    <header className="w-full flex border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 md:px-20 py-6 transition-colors">
      <div className="flex items-center justify-between w-full">
        <div className="flex-shrink-0">
          <Logo width={90} height={60} />
        </div>
        <div className="hidden md:flex items-center gap-6 mx-4">
          {navLinks.map((item, index) => (
            <CustomLink
              key={index}
              to={item.link}
              className="text-gray-900 dark:text-gray-100"
            >
              {item.title}
            </CustomLink>
          ))}
        </div>
        <div className="hidden md:flex space-x-4 items-center">
          <div className="flex justify-center items-center space-x-2 min-w-max">
            <CustomLink
              to="/login"
              className="border border-transparent hover:border-gray-400 p-2 rounded-md min-h-[36px] !h-[36px] hover:text-primary-light"
            >
              Sign In
            </CustomLink>
            <span className="text-[32px] leading-none mb-2">|</span>

            <CustomLink
              to="/signup"
              className="btn px-4 min-h-[36px] !h-[36px] hover:no-underline hover:text-white hover:bg-primary-main/90 shadow"
            >
              Sign Up
            </CustomLink>
          </div>

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
