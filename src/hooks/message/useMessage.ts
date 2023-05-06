import { useContext, useState } from "react";

import { LoadingContext } from "@/contexts/loading-context";
import MessageService from "@/services/message";
import { MessageNS } from "@/services/message/type";
import { showToast } from "@/utils/toast";

type MessageResult = {
  getAllMessages: (conversationId: number) => void;
  messages: MessageNS.Messages;
  setMessages: (messages: MessageNS.Message) => void;
};

const useMessage = (): MessageResult => {
  const [messages, setMessages] = useState<MessageNS.Messages>([]);
  const { setLoading } = useContext(LoadingContext);

  const _handleSetMessage = (newMessage: MessageNS.Message) => {
    setMessages((prev) => [...prev, newMessage]);
  };

  const getAllMessages = async ({
    conversationId,
  }: MessageNS.GetMessageReq) => {
    setLoading(true);
    console.log({conversationId})
    try {
      const response = await MessageService.getAllMessages({conversationId});
      setMessages(response);
    } catch (error) {
      console.log('error', error)
      showToast("error", "Could not fetch conversations");
    }
    setLoading(false);
  };

  return {
    getAllMessages,
    messages,
    setMessages: _handleSetMessage,
  };
};

export default useMessage;
