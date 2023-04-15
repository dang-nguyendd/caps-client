import { Dispatch, createContext } from "react";

import { ChatBarInitialState } from "@/components/shared/chatBar/ChatBarState";
import { ActionType } from "@/hooks/useCreateReducer";
import { Conversation } from "@/types/Chat";
import { SupportedExportFormats } from "@/types/Export";
import { PluginKey } from "@/types/Plugin";

export interface ChatBarContextProps {
  state: ChatBarInitialState;
  dispatch: Dispatch<ActionType<ChatBarInitialState>>;
  handleDeleteConversation: (conversation: Conversation) => void;
  handleClearConversations: () => void;
  handleExportData: () => void;
  handleImportConversations: (data: SupportedExportFormats) => void;
  handlePluginKeyChange: (pluginKey: PluginKey) => void;
  handleClearPluginKey: (pluginKey: PluginKey) => void;
  handleApiKeyChange: (apiKey: string) => void;
}

const ChatBarContext = createContext<ChatBarContextProps>(undefined!);

export default ChatBarContext;
