import React from "react";

import { IconX } from "@tabler/icons-react";
import Modal from "react-modal";

import Button from "@/core/button";
import { IConversationModalProps } from "@/shared/conversation-modal/type";

const Component = React.memo((props: IConversationModalProps) => {
  const {
    isOpen,
    name,
    handleNameChange,
    onClose,
    handleCancelClick,
    handleSaveClick,
  } = props;

  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      zIndex: 100,
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      width: "500px",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#1F2937",
      border: "none",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.4)",
      borderRadius: "8px",
      padding: "24px",
    },
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} style={customStyles}>
      <div className="flex justify-end">
        <button onClick={onClose} className="text-white">
          <IconX />
        </button>
      </div>
      <h2 className="mb-4 text-xl font-bold text-white">
        Create a new conversation
      </h2>
      <div className="mb-4">
        <input
          id="conversation"
          type="text"
          placeholder="Enter conversation name"
          value={name}
          onChange={handleNameChange}
          className="w-full rounded-md border border-gray-700 bg-gray-700 py-2 pl-3 pr-10 text-gray-200 transition duration-300 ease-in focus:border-gray-700 focus:bg-gray-900 focus:shadow-md focus:outline-none"
        />
      </div>
      <div className="flex justify-end pr-2">
        <div className="ml-5">
          <Button mode="secondary" onClick={handleCancelClick}>
            Cancel
          </Button>
        </div>
        <div className="ml-5">
          <Button mode="primary" onClick={handleSaveClick}>
            Save
          </Button>
        </div>
      </div>
    </Modal>
  );
});

Component.displayName = "ConversationModal";

export default Component;
