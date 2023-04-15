import { Prompt } from "@/types/Prompt";

export interface PromptBarInitialState {
  searchTerm: string;
  filteredPrompts: Prompt[];
}

export const initialState: PromptBarInitialState = {
  searchTerm: "",
  filteredPrompts: [],
};
