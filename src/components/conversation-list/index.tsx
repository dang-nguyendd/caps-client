import React, { useContext, useEffect } from "react";

import { useImmer } from "use-immer";

import useConversation from "@/hooks/conversation/useConversation";
import { ConversationNS } from "@/services/conversation/type";
import Conversation from "@/shared/conversation";
import { DefaultConversation } from "@/shared/conversation/type";

export const ConversationList: React.FC = () => {
  const [selectedConversation, setSelectedConversation] =
    useImmer<ConversationNS.Conversation>(DefaultConversation);
  const { getAllConversations, conversations } = useConversation();
  const [localConversations, setLocalConversations] = useImmer<
    ConversationNS.Conversation[]
  >([]);
  const _onSelectConversation = (item: ConversationNS.Conversation) => {
    setSelectedConversation(item);
  };

  useEffect(() => {
    getAllConversations();
  }, []);

  useEffect(() => {
    if (conversations && conversations.length && !selectedConversation) {
      setSelectedConversation(conversations[0]);
    }
  }, [conversations]);

  useEffect(() => {
    if (conversations) setLocalConversations(conversations);
  }, [conversations]);

  if (!localConversations)
    return <div className="font-bold text-gray-300"> Empty Conversation </div>;

  return (
    <div className="mt-4 flex scroll-m-2 flex-col gap-2 overflow-y-scroll border-b-amber-100">
      {localConversations.map((conversation) => (
        <div
          key={conversation.id}
          onClick={() => _onSelectConversation(conversation)}
        >
          <Conversation
            id={conversation.id}
            name={conversation.name}
            chatBotType={conversation.chatBotType}
            conversation={conversation}
            selected={selectedConversation?.id === conversation?.id}
          />
        </div>
      ))}
    </div>
  );
};
export default ConversationList;
