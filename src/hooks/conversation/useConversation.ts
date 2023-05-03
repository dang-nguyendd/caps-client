import {useContext, useState} from "react";
import {showToast} from "@/utils/toast";
import {LoadingContext} from "@/contexts/loading-context";
import {ConversationNS} from "@/services/conversation/type";
import ConversationService from "@/services/conversation";

type ConversationResult = {
  getConversation: () => void;
  createNewConversation: (name: string, chatBotType: ConversationNS.ChatbotType) => void;
  conversations: ConversationNS.Conversation[]
};

const useConversation = () => {
  const [conversations, setConversations] = useState<ConversationNS.Conversation[]>([]);
  const {setLoading} = useContext(LoadingContext)

  const createNewConversation = async (name: string, chatBotType: ConversationNS.ChatbotType) => {
    setLoading(true)
    try {
      await ConversationService.createNewConversation({
        name,
        chatBotType
      })
      await getAllConversations()
      showToast('success', 'Create new conversation successfully!')
    } catch (error){
      showToast('error', 'Fail to get conversations')
    }
    setLoading(false)
  }

  const getAllConversations = async () => {
    setLoading(true)
    try {
      const response = await ConversationService.getAllConversation()
      setConversations(response);
    } catch (error){
      showToast('error', 'Could not fetch conversations')
    }
    setLoading(false)
  }

  return {createNewConversation, getAllConversations, conversations} as ConversationResult;
};

export default useConversation;
