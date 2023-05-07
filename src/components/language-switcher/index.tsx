import React, { useState } from "react";

import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

import { Language } from "@/components/language-switcher/type";

const LanguageSwitcher: React.FC = () => {
  const { locale } = useRouter();
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(
    locale as Language
  );

  const { i18n } = useTranslation();

  const handleLanguageChange = (language: Language) => {
    setSelectedLanguage(language);
    i18n.changeLanguage(language);
  };

  return (
    <div className="flex items-center">
      <button
        className={`mr-2 rounded-lg p-2 ${
          selectedLanguage === "en"
            ? "bg-blue text-white"
            : "bg-white text-black"
        }`}
        onClick={() => handleLanguageChange("en")}
      >
        English
      </button>
      <button
        className={`rounded-lg p-2 ${
          selectedLanguage === "vi"
            ? "bg-blue text-white"
            : "bg-white text-black"
        }`}
        onClick={() => handleLanguageChange("vi")}
      >
        Vietnamese
      </button>
    </div>
  );
};

export default LanguageSwitcher;
