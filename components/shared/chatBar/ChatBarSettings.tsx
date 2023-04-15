import { useContext } from "react";

import {
  IconFileExport,
  IconMoon,
  IconSun,
  IconSettings,
  IconLogin,
  IconLogout,
} from "@tabler/icons-react";
import { useTranslation } from "next-i18next";

import AuthContext from "@/components/shared/auth/AuthContext";
import ChatBarContext from "@/components/shared/chatBar/ChatBarContext";
import { ClearConversation } from "@/components/shared/conversation/ClearConversation";
import HomeContext from "@/components/shared/home/HomeContext";
import { PluginKeys } from "@/components/shared/plugin/PluginKeys";
import { Key } from "@/components/shared/settings//Key";
import { Import } from "@/components/shared/settings/Import";
import { SideBarButton } from "@/components/shared/SideBarButton";
import UserSettingsModal from "@/components/shared/settings/UserSettingsModal";
import { Language } from "@/types/enum/Language";

export const ChatBarSettings = () => {
  const { t } = useTranslation("sidebar");

  const {
    state: {
      apiKey,
      isOpenSettings,
      lightMode,
      serverSideApiKeyIsSet,
      serverSidePluginKeysSet,
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
    handleLogin,
    handleLogout,
  } = useContext(AuthContext);

  const switchLanguage = (language: Language) => {};

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
          switchLanguage(language);
        }}
      />

      {!serverSideApiKeyIsSet ? (
        <Key apiKey={apiKey} onApiKeyChange={handleApiKeyChange} />
      ) : null}

      {!serverSidePluginKeysSet ? <PluginKeys /> : null}

      {!isAuthenticated ? (
        <SideBarButton
          text={t("Log in")}
          icon={<IconLogin size={18} />}
          onClick={() => handleLogin("", "")}
        />
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
