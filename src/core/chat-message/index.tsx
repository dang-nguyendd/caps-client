import React from "react";

import { IChatMessageProps } from "@/core/chat-message/type";

const Component = React.memo((props: IChatMessageProps) => {
  const { conservationId, content, senderType } = props;

  const containerClasses = {
    chatbot: "justify-start",
    user: "items-center flex-row-reverse",
  };

  const messageClasses = {
    chatbot: "bg-gray-800 rounded-3xl  text-gray-200",
    user: "bg-blue rounded-3xl text-white",
  };

  const containerClass = containerClasses[senderType];
  const messageClass = messageClasses[senderType];

  return (
    <div
      className={`mt-5 grid grid-flow-row gap-2 text-sm text-gray-700  ${containerClass}`}
    >
      <div className={`group flex ${containerClass}`}>
        <p
          className={`max-w-xs px-6 py-3 lg:max-w-md ${messageClass}`}
          style={{ wordBreak: "break-word" }}
        >
          {content}
        </p>
      </div>
    </div>
  );
});

Component.displayName = "ChatMessage";

export default Component;
