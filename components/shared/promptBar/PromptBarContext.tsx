import { Dispatch, createContext } from "react";

import { ActionType } from "@/hooks/useCreateReducer";
import { PromptbarInitialState, Prompt } from "@/types/Prompt";

export interface PromptBarContextProps {
  state: PromptbarInitialState;
  dispatch: Dispatch<ActionType<PromptbarInitialState>>;
  handleCreatePrompt: () => void;
  handleDeletePrompt: (prompt: Prompt) => void;
  handleUpdatePrompt: (prompt: Prompt) => void;
}

const PromptBarContext = createContext<PromptBarContextProps>(undefined!);

export default PromptBarContext;
