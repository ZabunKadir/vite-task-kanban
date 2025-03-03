import CustomButton from "@/components/common/button";
import UserDropdown from "@/components/common/dropDown";
import { MdManageAccounts } from "react-icons/md";
import { useState } from "react";
import {
  FaUser,
  FaSignOutAlt,
  FaCog,
  FaTag,
  FaTh,
  FaBell,
  FaSearch,
  FaUserCircle,
} from "react-icons/fa";
import { MdOutlineDiamond } from "react-icons/md";

const menuItems = [
  { text: "Çalışmalarınız", to: "#" },
  { text: "Projeler", to: "#" },
  { text: "Filtreler", to: "#" },
  { text: "Gösterge Panoları", to: "#" },
  { text: "Takımlar", to: "#" },
  { text: "Planlar", to: "#" },
  { text: "Uygulamalar", to: "#" },
];

const UserItems = [
  {
    label: "Profil",
    icon: <FaUser className="text-gray-500 dark:text-gray-400" />,
  },
  {
    label: "Hesabınızı yönetin",
    isButton: true,
    icon: (
      <MdManageAccounts
        size={25}
        className="text-gray-500 dark:text-gray-400"
      />
    ),
  },
  {
    label: "Ayarlar",
    isBordered: true,
    icon: <FaCog className="text-gray-500 dark:text-gray-400" />,
  },
  {
    label: "Çıkış Yap",
    icon: <FaSignOutAlt className="text-gray-500 dark:text-gray-400" />,
  },
];

const AuthHeader = () => {
  const [activeMenu, setActiveMenu] = useState("Projeler");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev); // Toggle dropdown menu

  return (
    <header className="flex items-center justify-between text-black dark:text-white px-4 py-2 bg-white dark:bg-gray-900">
      <div className="flex items-center space-x-4">
        <FaTh className="text-xl cursor-pointer md:hidden" />
        <span className="text-xl font-bold">Jira</span>
        {/* Menu for larger screens */}
        <nav className="hidden md:flex space-x-4">
          {menuItems.map((item, index) => (
            <CustomButton
              key={index}
              type="button"
              onClick={() => setActiveMenu(item.text)}
              className={`hover:bg-gray-300 dark:hover:bg-gray-700 ${
                activeMenu === item.text
                  ? "text-blue-400 font-bold"
                  : "text-gray-900 dark:text-gray-300"
              }`}
            >
              {item.text}
            </CustomButton>
          ))}
        </nav>
        {/* Menu for smaller screens (responsive dropdown inside a box) */}
        <div className="md:hidden relative">
          <div
            className="bg-gray-100 p-2 rounded-md cursor-pointer"
            onClick={toggleMenu} // Toggle on click
          >
            <span className="text-sm font-semibold">Çalışmalarım</span>
          </div>
          {isMenuOpen && (
            <div className="mt-2 space-y-2 bg-white shadow-md rounded-md p-4 absolute top-full left-0 w-full z-10">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.to}
                  onClick={() => setActiveMenu(item.text)}
                  className={`block text-gray-900 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 ${
                    activeMenu === item.text ? "text-blue-400 font-bold" : ""
                  }`}
                >
                  {item.text}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div className=" hidden lg:flex items-center space-x-2 border border-purple-500 px-2 py-1 rounded text-purple-500 dark:border-purple-700 dark:text-purple-300">
          <MdOutlineDiamond size={20} />
          <span>30 gün kaldı</span>
        </div>
        <div className="relative hidden md:block">
          <FaSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-300" />
          <input
            type="text"
            placeholder="Ara"
            className="pl-8 pr-2 py-1 rounded border border-gray-500 dark:border-gray-700 placeholder-gray-500 dark:placeholder-gray-300"
          />
        </div>
        <div className="flex items-center space-x-4">
          <FaTag className="cursor-pointer text-gray-500 dark:text-gray-300" />
          <FaBell />
          <UserDropdown items={UserItems} generalIcon={FaBell} />
          <FaCog className="cursor-pointer text-gray-500 dark:text-gray-300" />
          <div className="border rounded-full bg-gray-200 p-1 hover:bg-gray-300">
            <UserDropdown items={UserItems} generalIcon={FaUserCircle} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AuthHeader;
