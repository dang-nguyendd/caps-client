import { useContext } from "react";

import {
  IconFileExport,
  IconMoon,
  IconSun,
  IconSettings,
  IconLogin,
  IconLogout,
} from "@tabler/icons-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

import AuthContext from "@/components/shared/auth/AuthContext";
import ChatBarContext from "@/components/shared/chatBar/ChatBarContext";
import { ClearConversation } from "@/components/shared/conversation/ClearConversation";
import HomeContext from "@/components/shared/home/HomeContext";
import { Key } from "@/components/shared/settings//Key";
import { Import } from "@/components/shared/settings/Import";
import UserSettingsModal from "@/components/shared/settings/UserSettingsModal";
import { SideBarButton } from "@/components/shared/SideBarButton";
import { Routes } from "@/constants/routes";
import { Language } from "@/types/enum/Language";

export const ChatBarSettings = () => {
  const router = useRouter();
  const { lang } = router.query;

  const { t } = useTranslation("sidebar");

  const {
    state: {
      apiKey,
      isOpenSettings,
      lightMode,
      serverSideApiKeyIsSet,
      conversations,
    },
    dispatch: homeDispatch,
  } = useContext(HomeContext);

  const {
    handleClearConversations,
    handleImportConversations,
    handleExportData,
    handleApiKeyChange,
  } = useContext(ChatBarContext);

  const {
    state: { isAuthenticated },
    handleLogout,
  } = useContext(AuthContext);

  const handleLanguageChange = (selectedLanguage: Language) => {
    const locale = selectedLanguage === Language.ENGLISH ? "en" : "vi";

    router.push(router.pathname, router.asPath, { locale });
  };

  return (
    <div className="flex flex-col items-center space-y-1 border-t border-white/20 pt-1 text-sm">
      {conversations.length > 0 ? (
        <ClearConversation onClearConversations={handleClearConversations} />
      ) : null}

      <Import onImport={handleImportConversations} />

      <SideBarButton
        text={t("Export data")}
        icon={<IconFileExport size={18} />}
        onClick={() => handleExportData()}
      />

      <SideBarButton
        text={lightMode === "light" ? t("Dark mode") : t("Light mode")}
        icon={
          lightMode === "light" ? <IconMoon size={18} /> : <IconSun size={18} />
        }
        onClick={() =>
          homeDispatch({
            field: "lightMode",
            value: lightMode === "light" ? "dark" : "light",
          })
        }
      />

      <SideBarButton
        text={t("Settings")}
        icon={<IconSettings size={18} />}
        onClick={() =>
          homeDispatch({
            field: "isOpenSettings",
            value: !isOpenSettings,
          })
        }
      />

      <UserSettingsModal
        isOpen={isOpenSettings}
        onClose={() =>
          homeDispatch({
            field: "isOpenSettings",
            value: !isOpenSettings,
          })
        }
        onChangeLanguage={(language) => {
          handleLanguageChange(language);
        }}
      />

      {!serverSideApiKeyIsSet ? (
        <Key apiKey={apiKey} onApiKeyChange={handleApiKeyChange} />
      ) : null}

      {!isAuthenticated ? (
        <Link href={Routes.LOGIN.path}>
          <SideBarButton text={t("Log in")} icon={<IconLogin size={18} />} />
        </Link>
      ) : (
        <SideBarButton
          text={t("Log out")}
          icon={<IconLogout size={18} />}
          onClick={() => handleLogout()}
        />
      )}
    </div>
  );
};
