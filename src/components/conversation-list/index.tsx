import React, { useContext, useEffect } from "react";

import { useImmer } from "use-immer";

import { ConversationNS } from "@/services/conversation/type";
import Conversation from "@/shared/conversation";
import { DefaultConversation } from "@/shared/conversation/type";
import {IConversationList} from "@/components/conversation-list/type";
import useMessage from "@/hooks/message";

export const ConversationList: React.FC = (props: IConversationList) => {
  const {getAllConversations, conversations, setSelectedConversation, selectedConversation} = props
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
export default ConversationList;
