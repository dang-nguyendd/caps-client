import { Dispatch, createContext } from "react";

import { ActionType } from "@/hooks/useCreateReducer";
import { PromptBarInitialState, Prompt } from "@/types/Prompt";

export interface PromptBarContextProps {
  state: PromptBarInitialState;
  dispatch: Dispatch<ActionType<PromptBarInitialState>>;
  handleCreatePrompt: () => void;
  handleDeletePrompt: (prompt: Prompt) => void;
  handleUpdatePrompt: (prompt: Prompt) => void;
}

const PromptBarContext = createContext<PromptBarContextProps>(undefined!);

export default PromptBarContext;
