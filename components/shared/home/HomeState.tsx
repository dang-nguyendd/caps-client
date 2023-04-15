import { Conversation, Message } from "@/types/Chat";
import { Language } from "@/types/enum/Language";
import { ErrorMessage } from "@/types/Error";
import { FolderInterface } from "@/types/Folder";
import { OpenAIModel, OpenAIModelID } from "@/types/Openai";
import { PluginKey } from "@/types/Plugin";
import { Prompt } from "@/types/Prompt";

export interface HomeInitialState {
  apiKey: string;
  isOpenSettings: boolean;
  pluginKeys: PluginKey[];
  loading: boolean;
  lightMode: "light" | "dark";
  language: Language;
  messageIsStreaming: boolean;
  modelError: ErrorMessage | null;
  models: OpenAIModel[];
  folders: FolderInterface[];
  conversations: Conversation[];
  selectedConversation: Conversation | undefined;
  currentMessage: Message | undefined;
  prompts: Prompt[];
  temperature: number;
  showChatBar: boolean;
  showPromptBar: boolean;
  currentFolder: FolderInterface | undefined;
  messageError: boolean;
  searchTerm: string;
  defaultModelId: OpenAIModelID | undefined;
  serverSideApiKeyIsSet: boolean;
  serverSidePluginKeysSet: boolean;
}

export const initialState: HomeInitialState = {
  apiKey: "",
  isOpenSettings: false,
  loading: false,
  pluginKeys: [],
  lightMode: "dark",
  language: Language.ENGLISH,
  messageIsStreaming: false,
  modelError: null,
  models: [],
  folders: [],
  conversations: [],
  selectedConversation: undefined,
  currentMessage: undefined,
  prompts: [],
  temperature: 1,
  showPromptBar: true,
  showChatBar: true,
  currentFolder: undefined,
  messageError: false,
  searchTerm: "",
  defaultModelId: undefined,
  serverSideApiKeyIsSet: false,
  serverSidePluginKeysSet: false,
};
