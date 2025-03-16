import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en.json";
import tr from "./locales/tr.json";

const savedLanguage = localStorage.getItem("language") || "en"; // Kullanıcının seçtiği dil saklanır

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      en: { translation: en },
      tr: { translation: tr },
    },
    lng: savedLanguage, 
    fallbackLng: "tr", 
    interpolation: { escapeValue: false },
  });

export default i18n;
