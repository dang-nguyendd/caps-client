import { useCallback, useContext, useEffect } from "react";

import { useTranslation } from "next-i18next";
import { v4 as uuidv4 } from "uuid";

import ChatBarContext from "@/components/shared/chatBar/ChatBarContext";
import { ChatBarSettings } from "@/components/shared/chatBar/ChatBarSettings";
import {
  ChatBarInitialState,
  initialState,
} from "@/components/shared/chatBar/ChatBarState";
import { ChatFolders } from "@/components/shared/chatBar/ChatFolders";
import { Conversations } from "@/components/shared/conversation/Conversations";
import HomeContext from "@/components/shared/home/HomeContext";
import SideBar from "@/components/shared/navigation/SideBar";
import { useCreateReducer } from "@/hooks/useCreateReducer";
import { Conversation } from "@/types/Chat";
import { LatestExportFormat, SupportedExportFormats } from "@/types/Export";
import { OpenAIModels } from "@/types/Openai";
import { PluginKey } from "@/types/Plugin";
import { DEFAULT_SYSTEM_PROMPT, DEFAULT_TEMPERATURE } from "@/utils/app/const";
import { saveConversation, saveConversations } from "@/utils/app/conversation";
import { saveFolders } from "@/utils/app/folders";
import { exportData, importData } from "@/utils/app/importExport";

export const ChatBar = () => {
  const { t } = useTranslation("sidebar");

  const chatBarContextValue = useCreateReducer<ChatBarInitialState>({
    initialState,
  });

  const {
    state: { conversations, showChatBar, defaultModelId, folders, pluginKeys },
    dispatch: homeDispatch,
    handleCreateFolder,
    handleNewConversation,
    handleUpdateConversation,
  } = useContext(HomeContext);

  const {
    state: { searchTerm, filteredConversations },
    dispatch: chatDispatch,
  } = chatBarContextValue;

  const handleApiKeyChange = useCallback(
    (apiKey: string) => {
      homeDispatch({ field: "apiKey", value: apiKey });

      localStorage.setItem("apiKey", apiKey);
    },
    [homeDispatch]
  );

  const handlePluginKeyChange = (pluginKey: PluginKey) => {
    if (pluginKeys.some((key) => key.pluginId === pluginKey.pluginId)) {
      const updatedPluginKeys = pluginKeys.map((key) => {
        if (key.pluginId === pluginKey.pluginId) {
          return pluginKey;
        }

        return key;
      });

      homeDispatch({ field: "pluginKeys", value: updatedPluginKeys });

      localStorage.setItem("pluginKeys", JSON.stringify(updatedPluginKeys));
    } else {
      homeDispatch({ field: "pluginKeys", value: [...pluginKeys, pluginKey] });

      localStorage.setItem(
        "pluginKeys",
        JSON.stringify([...pluginKeys, pluginKey])
      );
    }
  };

  const handleClearPluginKey = (pluginKey: PluginKey) => {
    const updatedPluginKeys = pluginKeys.filter(
      (key) => key.pluginId !== pluginKey.pluginId
    );

    if (updatedPluginKeys.length === 0) {
      homeDispatch({ field: "pluginKeys", value: [] });
      localStorage.removeItem("pluginKeys");
      return;
    }

    homeDispatch({ field: "pluginKeys", value: updatedPluginKeys });

    localStorage.setItem("pluginKeys", JSON.stringify(updatedPluginKeys));
  };

  const handleExportData = () => {
    exportData();
  };

  const handleImportConversations = (data: SupportedExportFormats) => {
    const { history, folders, prompts }: LatestExportFormat = importData(data);
    homeDispatch({ field: "conversations", value: history });
    homeDispatch({
      field: "selectedConversation",
      value: history[history.length - 1],
    });
    homeDispatch({ field: "folders", value: folders });
    homeDispatch({ field: "prompts", value: prompts });

    window.location.reload();
  };

  const handleClearConversations = () => {
    defaultModelId &&
      homeDispatch({
        field: "selectedConversation",
        value: {
          id: uuidv4(),
          name: "New conversation",
          messages: [],
          model: OpenAIModels[defaultModelId],
          prompt: DEFAULT_SYSTEM_PROMPT,
          temperature: DEFAULT_TEMPERATURE,
          folderId: null,
        },
      });

    homeDispatch({ field: "conversations", value: [] });

    localStorage.removeItem("conversationHistory");
    localStorage.removeItem("selectedConversation");

    const updatedFolders = folders.filter((f) => f.type !== "chat");

    homeDispatch({ field: "folders", value: updatedFolders });
    saveFolders(updatedFolders);
  };

  const handleDeleteConversation = (conversation: Conversation) => {
    const updatedConversations = conversations.filter(
      (c) => c.id !== conversation.id
    );

    homeDispatch({ field: "conversations", value: updatedConversations });
    chatDispatch({ field: "searchTerm", value: "" });
    saveConversations(updatedConversations);

    if (updatedConversations.length > 0) {
      homeDispatch({
        field: "selectedConversation",
        value: updatedConversations[updatedConversations.length - 1],
      });

      saveConversation(updatedConversations[updatedConversations.length - 1]);
    } else {
      defaultModelId &&
        homeDispatch({
          field: "selectedConversation",
          value: {
            id: uuidv4(),
            name: "New conversation",
            messages: [],
            model: OpenAIModels[defaultModelId],
            prompt: DEFAULT_SYSTEM_PROMPT,
            temperature: DEFAULT_TEMPERATURE,
            folderId: null,
          },
        });

      localStorage.removeItem("selectedConversation");
    }
  };

  const handleToggleChatBar = () => {
    homeDispatch({ field: "showChatBar", value: !showChatBar });
    localStorage.setItem("showChatBar", JSON.stringify(!showChatBar));
  };

  const handleDrop = (e: any) => {
    if (e.dataTransfer) {
      const conversation = JSON.parse(e.dataTransfer.getData("conversation"));
      handleUpdateConversation(conversation, { key: "folderId", value: 0 });
      chatDispatch({ field: "searchTerm", value: "" });
      e.target.style.background = "none";
    }
  };

  useEffect(() => {
    if (searchTerm) {
      chatDispatch({
        field: "filteredConversations",
        value: conversations.filter((conversation) => {
          const searchable =
            conversation.name.toLocaleLowerCase() +
            " " +
            conversation.messages.map((message) => message.content).join(" ");
          return searchable.toLowerCase().includes(searchTerm.toLowerCase());
        }),
      });
    } else {
      chatDispatch({
        field: "filteredConversations",
        value: conversations,
      });
    }
  }, [searchTerm, conversations]);

  return (
    <ChatBarContext.Provider
      value={{
        ...chatBarContextValue,
        handleDeleteConversation,
        handleClearConversations,
        handleImportConversations,
        handleExportData,
        handlePluginKeyChange,
        handleClearPluginKey,
        handleApiKeyChange,
      }}
    >
      <SideBar<Conversation>
        side={"left"}
        isOpen={showChatBar}
        addItemButtonTitle={t("New chat")}
        itemComponent={<Conversations conversations={filteredConversations} />}
        folderComponent={<ChatFolders searchTerm={searchTerm} />}
        items={filteredConversations}
        searchTerm={searchTerm}
        handleSearchTerm={(searchTerm: string) =>
          chatDispatch({ field: "searchTerm", value: searchTerm })
        }
        toggleOpen={handleToggleChatBar}
        handleCreateItem={handleNewConversation}
        handleCreateFolder={() => handleCreateFolder(t("New folder"), "chat")}
        handleDrop={handleDrop}
        footerComponent={<ChatBarSettings />}
      />
    </ChatBarContext.Provider>
  );
};
