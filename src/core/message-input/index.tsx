import React from "react";

import { IconSend } from "@tabler/icons-react";

import { IMessageInputProps } from "@/core/message-input/type";

const Component: React.FC<IMessageInputProps> = ({
  dataTourTwo,
  message,
  onValueChange,
  handleSend,
  handleKeyDown,
}) => {
  return (
    <div className="flex-none">
      <div className="flex flex-row items-center p-4">
        <div className="relative grow">
          <input
            data-tour={dataTourTwo}
            className="w-full rounded-full border border-gray-800 bg-gray-800 py-2 pl-3 pr-10 text-gray-200 transition duration-300 ease-in focus:border-gray-700 focus:bg-gray-900 focus:shadow-md focus:outline-none"
            value={message}
            onChange={(e) => onValueChange(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask anything (Shift-Enter for new line, Enter to send)"
          />
        </div>
        <button
          type="button"
          className="mx-2 flex h-6 w-6 shrink-0 text-blue hover:text-blue focus:outline-none"
          onClick={message ? handleSend : () => {}}
        >
          <IconSend color="white" />
        </button>
      </div>
    </div>
  );
};
Component.displayName = "MessageInput";
export default Component;
