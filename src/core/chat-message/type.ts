export interface IChatMessageProps {
  conservationId: number;
  content: string;
  senderType: SenderType;
}

export type SenderType = "chatbot" | "user";
