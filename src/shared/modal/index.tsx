import React from "react";

import Modal from "react-modal";

import { IModalProps } from "@/shared/modal/type";

const Component = React.memo((props: IModalProps) => {
  const {
    isOpen,
    onClose,
    title,
    description,
    primaryButtonText,
    secondaryButtonText,
    onPrimaryButtonClick,
    onSecondaryButtonClick,
    secondButton = true,
  } = props;
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="modal"
      overlayClassName="modal-overlay"
    >
      <div className="modal-content">
        <h2 className="modal-title">{title}</h2>
        <p className="modal-description">{description}</p>
        <div className="modal-buttons">
          <button
            onClick={onPrimaryButtonClick}
            className="modal-button primary"
          >
            {primaryButtonText}
          </button>
          {secondButton && (
            <button
              onClick={onSecondaryButtonClick}
              className="modal-button secondary"
            >
              {secondaryButtonText}
            </button>
          )}
        </div>
      </div>
    </Modal>
  );
});

Component.displayName = "Modal";

export default Component;
