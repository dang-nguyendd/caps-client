import React, { createContext, useContext, useEffect, useState } from "react";

import { ConversationNS } from "@/services/conversation/type";

type ContextProps = {
  selectedConversation: ConversationNS.Conversation | null;
  setSelectedConversation: React.Dispatch<
    React.SetStateAction<ConversationNS.Conversation | null>
  >;
};

export const ConversationContext = createContext<ContextProps>({
  selectedConversation: null,
  setSelectedConversation: () => {},
});

type ConversationProviderProps = {
  children: React.ReactNode;
};

export const ConversationProvider: React.FC<ConversationProviderProps> = ({
  children,
}) => {
  const [selectedConversation, setSelectedConversation] =
    useState<ConversationNS.Conversation | null>(null);

  useEffect(() => {
    const storedConversation = localStorage.getItem("selectedConversation");
    if (storedConversation) {
      setSelectedConversation(JSON.parse(storedConversation));
    }
  }, []);

  useEffect(() => {
    if (selectedConversation) {
      localStorage.setItem(
        "selectedConversation",
        JSON.stringify(selectedConversation)
      );
    }
  }, [selectedConversation]);

  return (
    <ConversationContext.Provider
      value={{ selectedConversation, setSelectedConversation }}
    >
      {children}
    </ConversationContext.Provider>
  );
};
