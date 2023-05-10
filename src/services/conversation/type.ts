export namespace ConversationNS {
  export enum ChatbotType {
    DUMMY = "gpt-3",
    SMART = "gpt-4-all",
  }

  export type Conversation = {
    id: number;
    name: string;
    chatBotType: ChatbotType;
    createdAt: string;
  };

  export type CreateConversationRequest = {
    name: string;
    chatBotType: ChatbotType;
  };

  //  response
  export type ConversationsResponse = Conversation[];
}
