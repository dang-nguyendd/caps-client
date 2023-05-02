export interface IConversation {
  id: string;
  name: string;
  messages: Message[];
  model: OpenAIModel | Gpt4ForAllModel;
}

export interface IConversationProps {
  conversation: IConversation;
}

export interface Message {
  role: Role;
  content: string;
}

export type Role = "assistant" | "user";

export interface Model {
  id: string;
  name: string;
  maxLength: number;
  tokenLimit: number;
}

export interface OpenAIModel extends Model {}

export interface Gpt4ForAllModel extends Model {}

export const DefaultConversation: IConversation = {
  id: "",
  name: "",
  messages: [],
  model: {
    id: "",
    name: "",
    maxLength: 0,
    tokenLimit: 0,
  },
};
