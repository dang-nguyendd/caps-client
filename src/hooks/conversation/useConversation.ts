import { useContext, useState } from "react";

import { ConversationContext } from "@/contexts/conversation-context";
import { LoadingContext } from "@/contexts/loading-context";
import ConversationService from "@/services/conversation";
import { ConversationNS } from "@/services/conversation/type";
import { showToast } from "@/utils/toast";

type ConversationResult = {
  getAllConversations: () => void;
  createNewConversation: (
    name: string,
    chatBotType: ConversationNS.ChatbotType
  ) => void;
  conversations: ConversationNS.Conversation[];
  selectedConversation: ConversationNS.Conversation;
  setSelectedConversation: (x: ConversationNS.Conversation) => void;
};

const useConversation = () => {
  const [conversations, setConversations] = useState<
    ConversationNS.Conversation[]
  >([]);
  const { setLoading } = useContext(LoadingContext);
  const { selectedConversation, setSelectedConversation } =
    useContext(ConversationContext);
  const createNewConversation = async (
    name: string,
    chatBotType: ConversationNS.ChatbotType
  ) => {
    setLoading(true);
    try {
      const newConversation: ConversationNS.Conversation =
        await ConversationService.createNewConversation({
          name,
          chatBotType,
        });
      setConversations((prev) => [...prev, newConversation]);
      showToast("success", "Create new conversation successfully!");

      if (!selectedConversation) {
        setSelectedConversation(null);
      }
    } catch (error) {
      showToast("error", "Failed to get conversations");
    }
    setLoading(false);
  };

  const getAllConversations = async () => {
    setLoading(true);
    try {
      const response = await ConversationService.getAllConversation();
      setConversations(response);
    } catch (error) {
      showToast("error", "Could not fetch conversations");
    }
    setLoading(false);
  };

  return {
    createNewConversation,
    getAllConversations,
    conversations,
    setSelectedConversation,
    selectedConversation,
  } as ConversationResult;
};

export default useConversation;
