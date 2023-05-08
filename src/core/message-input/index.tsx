import React, { useState } from "react";

import { IconSend, IconHeartbeat } from "@tabler/icons-react";

import { IMessageInputProps } from "@/core/message-input/type";
import HealthStatusPopupModal from "@/shared/health-status-popup-modal";

const Component: React.FC<IMessageInputProps> = ({
  dataTourTwo,
  message,
  onValueChange,
  handleSend,
  handleKeyDown,
}) => {
  const [isHealthStatusModalOpen, setIsHealthStatusPopupModalOpen] =
    useState<boolean>(false);

  const _handleOpenModal = () => {
    setIsHealthStatusPopupModalOpen(true);
  };

  const _handleCloseModal = () => {
    setIsHealthStatusPopupModalOpen(false);
  };

  const _handleSubmit = () => {};

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
        <button
          type="button"
          className="mx-2 flex h-6 w-6 shrink-0 text-blue hover:text-blue focus:outline-none"
          onClick={_handleOpenModal}
        >
          <IconHeartbeat color="white" />
        </button>
        <HealthStatusPopupModal
          isOpen={isHealthStatusModalOpen}
          onRequestClose={_handleCloseModal}
          onSubmit={_handleSubmit}
        />
      </div>
    </div>
  );
};
Component.displayName = "MessageInput";
export default Component;
