import React, { useEffect, useState } from "react";

import dayjs from "dayjs";

import { IConversationListProps } from "@/components/conversation-list/type";
import { ConversationNS } from "@/services/conversation/type";
import Conversation from "@/shared/conversation";

interface IConversationListPropsWithSort extends IConversationListProps {
  sortedConversations: ConversationNS.Conversation[];
}

const Component: React.FC<IConversationListProps> = (
  props: IConversationListProps
) => {
  const {
    getAllConversations,
    conversations,
    setSelectedConversation,
    selectedConversation,
  } = props;
  const [sortedConversations, setSortedConversations] = useState<
    ConversationNS.Conversation[]
  >([]);

  interface ILabel {
    name: string;
    condition: number;
  }

  const conversationLabels: ILabel[] = [
    { name: "Today", condition: 0 },
    { name: "Yesterday", condition: 1 },
    { name: "Last week", condition: 7 },
    { name: "Last two weeks", condition: 14 },
    { name: "Last month", condition: 30 },
    { name: "Last six months", condition: 180 },
    { name: "Last year", condition: 365 },
  ];

  const sortConversationsByCreatedAt = (
    conversations: ConversationNS.Conversation[]
  ) => {
    const sortedByCreatedAt = conversations.sort(
      (a, b) =>
        dayjs(b.createdAt, "ddd, DD MMM YYYY HH:mm:ss [GMT]").valueOf() -
        dayjs(a.createdAt, "ddd, DD MMM YYYY HH:mm:ss [GMT]").valueOf()
    );
    setSortedConversations(sortedByCreatedAt);
  };

  useEffect(() => {
    getAllConversations();
  }, []);

  useEffect(() => {
    if (conversations) {
      sortConversationsByCreatedAt(conversations);
    }
  }, [conversations]);

  const getConversationLabel = (conversation: ConversationNS.Conversation) => {
    const createdAt = dayjs(
      conversation.createdAt,
      "ddd, DD MMM YYYY HH:mm:ss [GMT]"
    );
    const now = dayjs();
    const diffDays = now.diff(createdAt, "days");

    for (let i = 0; i < conversationLabels.length; i++) {
      if (diffDays <= conversationLabels[i].condition) {
        return conversationLabels[i].name;
      }
    }

    return "Long time ago";
  };

  const _onSelectConversation = (item: ConversationNS.Conversation) => {
    setSelectedConversation(item);
  };

  if (!sortedConversations?.length)
    return <div className="font-bold text-gray-300"> Empty Conversation </div>;

  return (
    <div className="mt-4 flex scroll-m-2 flex-col gap-2 overflow-y-scroll border-b-black p-2">
      {sortedConversations.map((conversation) => (
        <div
          key={conversation.id}
          onClick={() => _onSelectConversation(conversation)}
        >
          <div className="mb-2 text-sm text-gray-400">
            {getConversationLabel(conversation)}
          </div>
          <Conversation
            id={conversation.id}
            name={conversation.name}
            chatBotType={conversation.chatBotType}
            createdAt={conversation.createdAt}
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
