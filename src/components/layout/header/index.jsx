import MobileMenu from "./mobilMenu"; // Mobil menü componentini import edin
import CustomLink from "@/components/common/customLink";
import Logo from "../logo";
import { useTranslation } from "react-i18next"; 
import CustomButton from "@/components/common/button";
import { useState, useEffect } from "react"; // useState ve useEffect import et

const navLinks = [
  { title: "About", link: "#" },
  { title: "Solutions", link: "/solutions" },
];

const Header = () => {
  const { t, i18n } = useTranslation();
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false); // Dil menüsünün açık/kapalı durumunu tutacak state

  // Sayfa yüklenirken önceki dil tercihini kontrol et ve uygun dili seç
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "tr";
    if (savedLanguage && i18n.language !== savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang); // Yeni dili localStorage'a kaydet
    setLanguageMenuOpen(false); // Dil değiştirildiğinde menüyü kapat
  };

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
        <div className="relative">
            {/* Dil Seç butonu */}
            <CustomButton onClick={() => setLanguageMenuOpen(!languageMenuOpen)}>
              {i18n.language === "tr" ? t("Türkçe") : t("English")}
            </CustomButton>

            {/* Dil seçeneklerini göster */}
            {languageMenuOpen && (
              <div className="absolute border-transparent space-x-2  flex  overflow-hidden top-full bg-white dark:bg-gray-800 border  dark:border-gray-700  ">
                <CustomButton className="bg-black text-white" onClick={() => changeLanguage("en")}>
                  🇬🇧 {t("english")}
                </CustomButton>
                <CustomButton className="bg-red-600 text-white" onClick={() => changeLanguage("tr")}>
                  🇹🇷 {t("turkish")}
                </CustomButton>
              </div>
            )}
          </div>
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
         
        </div>
        <div className="md:hidden">
          <MobileMenu links={navLinks} />
        </div>
      </div>
    </header>
  );
};

export default Header;
