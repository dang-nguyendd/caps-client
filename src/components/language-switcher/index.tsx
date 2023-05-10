import React, { useMemo } from "react";

import { useRouter } from "next/router";

import locales from "@/components/language-switcher/locales.json";
import { LocalStorageService } from "@/services/local-storage";

const LanguageSwitcher: React.FC = () => {
  const router = useRouter();

  const _handleChangeLanguage = (lang: string) => () => {
    const localStorageService = LocalStorageService.getInstance();
    const { pathname, asPath, query } = router;

    if (router.locale === lang) return;

    router.replace({ pathname, query }, asPath, {
      locale: lang,
      shallow: true,
    });

    localStorageService.setItem("NEXT_LOCALE", lang);
  };

  const currentLocale = useMemo(
    () => locales.find(({ locale }) => router.locale === locale),
    [router.locale]
  );

  return (
    <div className="flex items-center">
      {locales.map(({ name, locale }) => (
        <button
          key={locale}
          className={`rounded-lg p-2 ${
            currentLocale?.locale === locale
              ? "bg-blue text-white"
              : "bg-white text-black"
          }`}
          onClick={_handleChangeLanguage(locale)}
        >
          {name}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
