import { Conversation } from "@/types/Chat";
import { FolderInterface } from "@/types/Folder";
import { PluginKey } from "@/types/Plugin";
import { Prompt } from "@/types/Prompt";

export interface LocalStorage {
  apiKey: string;
  conversationHistory: Conversation[];
  selectedConversation: Conversation;
  theme: "light" | "dark";
  folders: FolderInterface[];
  prompts: Prompt[];
  showChatBar: boolean;
  showPromptBar: boolean;
  pluginKeys: PluginKey[];
}
