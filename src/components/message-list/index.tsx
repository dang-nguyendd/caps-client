import React, { useEffect, useRef } from "react";

import { IconSend } from "@tabler/icons-react";
import { useImmer } from "use-immer";

import { IMessageListProps } from "@/components/message-list/type";
import ChatMessage from "@/core/chat-message";
import useMessage from "@/hooks/message/useMessage";
import { MessageNS } from "@/services/message/type";
import { closeSocket, getSocket, initSocket } from "@/socket";

const Component: React.FC<IMessageListProps> = ({ selectedConversation }) => {
  const { getAllMessages, messages, setMessages } = useMessage();
  const [message, setMessage] = useImmer<string>("");
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const _clearMessage = () => {
    setMessage("");
  };

  const _onValueChange = (message: string) => {
    setMessage(message);
  };

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

  const _handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      _handleSend();
    }
  };

  return (
    <section className="flex flex-auto flex-col border-l border-gray-800">
      <div className="flex-1 overflow-y-scroll p-4">
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
      <div className="flex-none">
        <div className="flex flex-row items-center p-4">
          <div className="relative grow">
            <input
              className="w-full rounded-full border border-gray-800 bg-gray-800 py-2 pl-3 pr-10 text-gray-200 transition duration-300 ease-in focus:border-gray-700 focus:bg-gray-900 focus:shadow-md focus:outline-none"
              value={message}
              onChange={(e) => _onValueChange(e.target.value)}
              onKeyDown={(e) => _handleKeyDown(e)}
              placeholder="Ask anything (Shift-Enter for new line, Enter to send)"
            />
          </div>
          <button
            type="button"
            className="mx-2 flex h-6 w-6 shrink-0 text-blue hover:text-blue focus:outline-none"
            onClick={message ? _handleSend : () => {}}
          >
            <IconSend color="white" />
          </button>
        </div>
      </div>
    </section>
  );
};

Component.displayName = "MessageList";

export default Component;
