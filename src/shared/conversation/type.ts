export interface IConversation {
  id: string;
  name: string;
  model: OpenAIModel | Gpt4AllModel;
}

export interface IConversationProps {
  conversation: IConversation;
}

export interface Model {
  id: string;
  name: string;
  maxLength: number;
  tokenLimit: number;
}

export interface OpenAIModel extends Model {}

export interface Gpt4AllModel extends Model {}

export const DefaultConversation: IConversation = {
  id: "",
  name: "",
  model: {
    id: "",
    name: "",
    maxLength: 0,
    tokenLimit: 0,
  },
};
