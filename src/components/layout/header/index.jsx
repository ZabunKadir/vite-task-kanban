import MobileMenu from "./mobilMenu"; // Mobil menü componentini import edin
import CustomLink from "@/components/common/customLink";
import CustomButton from "@/components/common/button";
import ThemeToggle from "@/components/common/themeToggle";
import Logo from "../logo";

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
          <CustomLink
            to="/signup"
            className="btn px-4 hover:no-underline hover:text-white hover:bg-primary-main/90 shadow"
          >
            Sign Up
          </CustomLink>

          <CustomButton className="text-primary-main bg-white border border-transparent hover:border-primary-main dark:bg-gray-700 dark:text-gray-200 dark:border-gray-500">
            <CustomLink to="/login">Sign In</CustomLink>
          </CustomButton>

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
