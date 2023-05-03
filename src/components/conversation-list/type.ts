import {ConversationNS} from "@/services/conversation/type";

export interface IConversationList {
    conversations: ConversationNS.Conversation[];
    getAllConversations: () => void;
    selectedConversation: ConversationNS.Conversation;
    setSelectedConversation: (x: ConversationNS.Conversation) => void;

}