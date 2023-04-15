import { OpenAIModel } from "@/types/Openai";

export interface Prompt {
  id: string;
  name: string;
  description: string;
  content: string;
  model: OpenAIModel;
  folderId: string | null;
}

export interface PromptBarInitialState {
  searchTerm: string;
  filteredPrompts: Prompt[];
}

export const initialState: PromptBarInitialState = {
  searchTerm: "",
  filteredPrompts: [],
};
