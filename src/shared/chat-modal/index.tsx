import React, { useState } from "react";

import Modal from "react-modal";
import { IconX } from "@tabler/icons-react";

import { IChatModalProps } from "@/shared/chat-modal/type";
import Button from "@/core/button";

const Component = React.memo((props: IChatModalProps) => {
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
      <h2 className="text-xl font-bold text-white mb-4">Create a new chat</h2>
      <div className="mb-4">
        <label htmlFor="chatName" className="sr-only">
          Chat Name
        </label>
        <input
          id="chatName"
          type="text"
          placeholder="Enter chat name"
          value={name}
          onChange={handleNameChange}
          className="w-full bg-gray-800 text-white border border-white/20 rounded-lg py-2 px-4 mb-4"
        />
      </div>
      <div className="flex justify-end pr-2">
        <Button mode="secondary" onClick={handleCancelClick}>
          Cancel
        </Button>
        <div className="ml-5">
          <Button mode="primary" onClick={handleSaveClick}>
            Save
          </Button>
        </div>
      </div>
    </Modal>
  );
});

Component.displayName = "ChatModal";

export default Component;
