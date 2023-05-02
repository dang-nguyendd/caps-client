import axios from "@/axios";
import { ConversationNS } from "@/services/conversation/type";

export default class ConversationService {
  static createNewConversation = (data: ConversationNS.ConversationRequest) => {
    return axios.post("/conversation", data);
  };
}
