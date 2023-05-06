export namespace MessageNS {
  export type Message = {
    id: number;
    content: string;
    sender: SenderType;
  };

  export type Messages = Message[];

  export type GetMessageReq = {
    conversationId: number;
  };

  export enum SenderType {
    USER = "user",
    CHATBOT = "chatbot",
  }
}
