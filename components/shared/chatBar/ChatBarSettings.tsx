import { useContext } from "react";

import { IconFileExport, IconMoon, IconSun } from "@tabler/icons-react";
import { useTranslation } from "next-i18next";

import ChatBarContext from "@/components/shared/chatBar/ChatBarContext";
import { ClearConversation } from "@/components/shared/conversation/ClearConversation";
import HomeContext from "@/components/shared/home/HomeContext";
import { PluginKeys } from "@/components/shared/plugin/PluginKeys";
import { Key } from "@/components/shared/settings//Key";
import { Import } from "@/components/shared/settings/Import";
import { SideBarButton } from "@/components/shared/SideBarButton";

export const ChatBarSettings = () => {
  const { t } = useTranslation("sidebar");

  const {
    state: {
      apiKey,
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

      {!serverSideApiKeyIsSet ? (
        <Key apiKey={apiKey} onApiKeyChange={handleApiKeyChange} />
      ) : null}

      {!serverSidePluginKeysSet ? <PluginKeys /> : null}
    </div>
  );
};
