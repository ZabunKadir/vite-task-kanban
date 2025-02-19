import { useState } from "react";
import {
  FaGlobe,
  FaClipboardList,
  FaTable,
  FaCode,
  FaCog,
  FaFileAlt,
  FaArchive,
} from "react-icons/fa";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { GoChevronDown, GoChevronRight } from "react-icons/go";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [planningOpen, setPlanningOpen] = useState(false);
  const [developmentOpen, setDevelopmentOpen] = useState(false);

  return (
    <div className="flex">
      <div
        className={`bg-white dark:bg-gray-800 border-r shadow-md h-screen p-4 transition-all duration-300 ${
          isOpen ? "w-64" : "w-0 overflow-hidden"
        } relative`}
      >
        {isOpen && (
          <>
            <div className="flex items-center space-x-2">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5Cc9ObW9301TnmySBzPU2DZ2wAQHZIjCHwA&s"
                alt=""
                className="rounded-full w-6 h-6"
              />
              <div className="flex flex-col">
                <h2 className="text-sm font-bold text-gray-900 dark:text-white">Kanban Projem</h2>
                <span className="text-xs text-gray-400 dark:text-gray-500">Yazılım projesi</span>
              </div>
            </div>

            <p className="text-gray-500 dark:text-gray-300 text-sm mt-4 flex items-center justify-between">
              <span>PLANLAMA</span>
              <button
                onClick={() => setPlanningOpen(!planningOpen)}
                className="text-lg w-5 h-5 rounded-full flex items-center p-1 hover:bg-gray-500 hover:text-white hover:underline dark:hover:bg-gray-700"
              >
                {planningOpen ? (
                  <GoChevronDown size={20} />
                ) : (
                  <GoChevronRight size={20} />
                )}
              </button>
            </p>

            {planningOpen && (
              <div>
                <SidebarItem icon={<FaGlobe />} text="Özet" />
                <SidebarItem
                  icon={<FaClipboardList />}
                  text="Zaman Çizelgesi"
                />
                <SidebarItem icon={<FaTable />} text="Pano" />
              </div>
            )}

            <p className="text-gray-500 dark:text-gray-300 text-sm mt-4 flex items-center justify-between">
              GELİŞTİRME
              <button
                onClick={() => setDevelopmentOpen(!developmentOpen)}
                className="text-lg w-5 h-5 rounded-full flex items-center p-1 hover:bg-gray-500 hover:text-white hover:underline dark:hover:bg-gray-700"
              >
                {developmentOpen ? (
                  <GoChevronDown size={20} />
                ) : (
                  <GoChevronRight size={20} />
                )}
              </button>
            </p>

            {developmentOpen && (
              <div>
                <SidebarItem icon={<FaCode />} text="Kod" />
              </div>
            )}
          </>
        )}

        <hr className="mt-4 border-gray-300 dark:border-gray-700" />
        {/* Sidebar items always visible when isOpen is true */}
        {isOpen && (
          <>
            <SidebarItem icon={<FaFileAlt />} text="Proje Sayfaları" />
            <SidebarItem icon={<FaCog />} text="Proje Ayarları" />
            <SidebarItem
              icon={<FaArchive />}
              text="Arşivlenen Konular"
              badge="YENİ"
            />
          </>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="absolute right-[-14px] top-1/4 transform bg-gray-200 dark:bg-gray-700 p-2 rounded-full shadow-md border border-gray-300 dark:border-gray-600"
        >
          {isOpen ? (
            <IoChevronBack className="text-xl text-gray-600 dark:text-gray-300" />
          ) : (
            <IoChevronForward className="text-xl text-gray-600 dark:text-gray-300" />
          )}
        </button>
      </div>
    </div>
  );
};

const SidebarItem = ({ icon, text, active, badge }) => (
  <div
    className={`flex items-center space-x-2 p-2 rounded-md cursor-pointer ${
      active
        ? "bg-blue-100 text-blue-600 font-bold dark:bg-blue-600 dark:text-white"
        : "hover:bg-gray-100 dark:hover:bg-gray-700"
    }`}
  >
    <span className="text-lg">{icon}</span>
    <span className="text-sm text-gray-900 dark:text-gray-300">{text}</span>
    {badge && (
      <span className="ml-auto text-xs text-purple-500 bg-purple-100 px-2 py-0.5 rounded dark:bg-purple-600 dark:text-purple-200">
        {badge}
      </span>
    )}
  </div>
);

export default Sidebar;
