import React, { KeyboardEvent, useEffect, useRef } from "react";

import { useImmer } from "use-immer";

import { IMessageListProps } from "@/components/message-list/type";
import ChatMessage from "@/core/chat-message";
import MessageInput from "@/core/message-input";
import useMessage from "@/hooks/message/useMessage";
import { MessageNS } from "@/services/message/type";
import { closeSocket, getSocket, initSocket } from "@/socket";

const MessageList: React.FC<IMessageListProps> = ({
  selectedConversation,
  dataTourOne,
  dataTourTwo,
}) => {
  const { getAllMessages, messages, setMessages } = useMessage();
  const [message, setMessage] = useImmer<string>("");
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (selectedConversation && selectedConversation.id)
      getAllMessages({ conversationId: selectedConversation.id });
  }, [selectedConversation]);

  useEffect(() => {
    initSocket();

    const socket = getSocket();

    if (socket) {
      socket.on("message", (message: MessageNS.Message) => {
        setMessages(message);
      });
    }

    return () => {
      closeSocket();
    };
  }, []);

  const _scrollToBottom = () => {
    if (messagesEndRef && messagesEndRef.current) {
      const dom = messagesEndRef.current as HTMLDivElement;
      dom.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    _scrollToBottom();
  }, [messages[messages.length - 1]]);

  const _handleSend = () => {
    const socket = getSocket();
    if (socket && selectedConversation && selectedConversation.id) {
      socket.emit("message", {
        conversationId: selectedConversation.id,
        content: message,
        sender: MessageNS.SenderType.USER,
      });
      _clearMessage();
    }
  };

  const _handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      _handleSend();
    }
  };

  const _clearMessage = () => {
    setMessage("");
  };

  const _onValueChange = (message: string) => {
    setMessage(message);
  };

  return (
    <>
      <div className="flex flex-auto flex-col overflow-y-scroll border-l border-gray-800">
        <div data-tour={dataTourOne} className="flex-1  p-4">
          {messages.map((message, index) => (
            <ChatMessage
              key={index}
              conservationId={message.id}
              content={message.content}
              senderType={message.sender}
            />
          ))}
          <div ref={messagesEndRef}></div>
          {messages &&
          messages.length &&
          messages[messages.length - 1].sender === MessageNS.SenderType.USER ? (
            <div className="text-white">The chat advisor is typing...</div>
          ) : null}
        </div>
      </div>

      <MessageInput
        dataTourTwo={dataTourTwo}
        message={message}
        handleKeyDown={_handleKeyDown}
        onValueChange={_onValueChange}
        handleSend={_handleSend}
      />
    </>
  );
};

MessageList.displayName = "MessageList";

export default MessageList;
