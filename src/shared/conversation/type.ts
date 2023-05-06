import { ConversationNS } from "@/services/conversation/type";

import ChatbotType = ConversationNS.ChatbotType;

export interface IConversation {
  id: number;
  name: string;
  chatBotType: ConversationNS.ChatbotType;
}

export interface IConversationProps extends IConversation {
  conversation: IConversation;
  selected: boolean;
}

export const DefaultConversation: IConversation = {
  id: 0,
  name: "",
  chatBotType: ChatbotType.DUMMY,
};
