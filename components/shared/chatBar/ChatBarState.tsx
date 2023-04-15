import { Conversation } from "@/types/Chat";

export interface ChatBarInitialState {
  searchTerm: string;
  filteredConversations: Conversation[];
}

export const initialState: ChatBarInitialState = {
  searchTerm: "",
  filteredConversations: [],
};
