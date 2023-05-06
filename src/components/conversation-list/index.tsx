import React, { useEffect } from "react";

import { IConversationListProps } from "@/components/conversation-list/type";
import { ConversationNS } from "@/services/conversation/type";
import Conversation from "@/shared/conversation";

const Component: React.FC<IConversationListProps> = ({
  getAllConversations,
  conversations,
  setSelectedConversation,
  selectedConversation,
}) => {
export const ConversationList: React.FC<IConversationList> = (
  props: IConversationList
) => {
  const {
    getAllConversations,
    conversations,
    setSelectedConversation,
    selectedConversation,
  } = props;
  const _onSelectConversation = (item: ConversationNS.Conversation) => {
    setSelectedConversation(item);
  };

  useEffect(() => {
    getAllConversations();
  }, []);

  if (!conversations)
    return <div className="font-bold text-gray-300"> Empty Conversation </div>;

  return (
    <div className="mt-4 flex scroll-m-2 flex-col gap-2 overflow-y-scroll border-b-amber-100">
      {conversations.map((conversation) => (
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

Component.displayName = "ConversationList";
export default Component;
