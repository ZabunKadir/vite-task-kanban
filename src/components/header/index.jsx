import MobileMenu from "./mobilmenu"; // Mobil menü componentini import edin
import Logo from "../logo";
import CustomLink from "../link";
import { CustomButton } from "../button";
import { FaBeer } from "react-icons/fa";

const navLinks = [
  {
    title: "About",
    link: "#",
  },
  {
    title: "Solutions",
    link: "#",
  },
];
const Header = () => {
  return (
    <header className="w-full flex border-b border-gray-200 px-4 md:px-20 py-6">
      <div className="flex items-center justify-between w-full">
        <div className="flex-shrink-0">
          <Logo width={90} height={60} />
        </div>

        <div className="hidden md:flex items-center gap-6 mx-4">
          {navLinks.map((item, index) => {
            return (
              <CustomLink key={index} to={item.link}>
                {item.title}
              </CustomLink>
            );
          })}
        </div>

        <div className="hidden md:flex space-x-4">
          <CustomLink to="/signup">
            <CustomButton>Sign Up</CustomButton>
          </CustomLink>
          <CustomLink to="/login">
            <CustomButton
              buttonClass={
                "text-primary-main bg-white shadow-none border border-transparent hover:border hover:border-primary-main"
              }
            >
              Sign In
            </CustomButton>
          </CustomLink>
        </div>

        {/* Mobil Menü */}
        <div className="md:hidden">
          <MobileMenu links={navLinks} />
        </div>
      </div>
    </header>
  );
};

export default Header;
