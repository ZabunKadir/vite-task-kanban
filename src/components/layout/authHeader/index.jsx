import React, { useState } from "react";
import {
  FaUserCircle,
  FaCog,
  FaQuestionCircle,
  FaTag,
  FaTh,
  FaSearch,
} from "react-icons/fa";
import { CustomButton } from "../../common/button";
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

const UserHeader = () => {
  const [activeMenu, setActiveMenu] = useState("Projeler");
  return (
    <header className="flex items-center justify-between text-black px-4 py-2">
      <div className="flex items-center space-x-4">
        <FaTh className="text-xl cursor-pointer" />
        <span className="text-xl font-bold">Jira</span>
        <nav className="hidden md:flex space-x-4">
          {menuItems.map((item, index) => (
            <CustomButton
              key={index}
              onClick={() => setActiveMenu(item.text)}
              className={` hover:bg-gray-300 ${
                activeMenu === item.text ? "text-blue-400 font-bold" : ""
              }`}
            >
              {item.text}
            </CustomButton>
          ))}
          <CustomButton>Oluştur</CustomButton>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2 border border-purple-500 px-2 py-1 rounded text-purple-500">
          <MdOutlineDiamond size={20} />
          <span>30 gün kaldı</span>
        </div>
        <div className="relative">
          <FaSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            placeholder="Ara"
            className="pl-8 pr-2 py-1 rounded border border-gray-500 placeholder-gray-500"
          />
        </div>
        <FaTag className="cursor-pointer " />
        <FaQuestionCircle className="cursor-pointer  " />
        <FaCog className="cursor-pointer" />
        <FaUserCircle className="text-xl cursor-pointer" />
      </div>
    </header>
  );
};

export default UserHeader;
