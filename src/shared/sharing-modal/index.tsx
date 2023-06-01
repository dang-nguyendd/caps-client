import React from "react";

import { IconLink, IconX } from "@tabler/icons-react";
import Modal from "react-modal";

import { ISharingModalProps } from "@/shared/sharing-modal/type";

const Component: React.FC<ISharingModalProps> = ({
  isOpen,
  closeModal,
  title,
  description,
  conversationName,
  updatedAt,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      overlayClassName="overlay"
    >
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">{title}</h2>
        <button onClick={closeModal}>
          <IconX size={20} />
        </button>
      </div>
      <hr className="my-4" />
      <p className="mb-4 text-sm">{description}</p>
      <div className="border-y py-4">
        <div className="mb-2 flex items-center">
          <span className="text-sm font-medium">{conversationName}</span>
          <span className="ml-auto text-xs text-gray-500">{updatedAt}</span>
        </div>
        <hr className="my-2" />
        {/* Content of the conversation */}
      </div>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-sm">Copy Link</span>
        <IconLink size={18} />
      </div>
    </Modal>
  );
};

Component.displayName = "SharingModal";
export default Component;
