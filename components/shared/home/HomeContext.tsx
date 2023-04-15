import { Dispatch, createContext } from "react";

import { HomeInitialState } from "@/components/shared/home/HomeState";
import { ActionType } from "@/hooks/useCreateReducer";
import { Conversation } from "@/types/Chat";
import { KeyValuePair } from "@/types/Data";
import { FolderType } from "@/types/Folder";

export interface HomeContextProps {
  state: HomeInitialState;
  dispatch: Dispatch<ActionType<HomeInitialState>>;
  handleNewConversation: () => void;
  handleCreateFolder: (name: string, type: FolderType) => void;
  handleDeleteFolder: (folderId: string) => void;
  handleUpdateFolder: (folderId: string, name: string) => void;
  handleSelectConversation: (conversation: Conversation) => void;
  handleDeleteAccount?: () => void;
  handleChangeLanguage?: () => void;
  handleOpenSettings?: () => void;
  handleUpdateConversation: (
    conversation: Conversation,
    data: KeyValuePair
  ) => void;
}

const HomeContext = createContext<HomeContextProps>(undefined!);

export default HomeContext;
