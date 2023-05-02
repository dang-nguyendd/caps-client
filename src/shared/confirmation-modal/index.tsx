import React from "react";

import {
  IconCheck,
  IconExclamationMark,
  IconInfoSmall,
} from "@tabler/icons-react";
import Modal from "react-modal";

import Button from "@/core/button";
import { IConfirmationModalProps } from "@/shared/confirmation-modal/type";

const Component = React.memo((props: IConfirmationModalProps) => {
  const getConfirmationModalTypeStyle = (type: string) => {
    switch (type) {
      case "success":
        return {
          color: "green",
        };
      case "warning":
        return {
          color: "yellow",
        };
      case "error":
        return {
          color: "red",
        };
      case "info":
        return {
          color: "blue",
        };
      default:
        return {
          color: "gray",
        };
    }
  };

  const {
    type,
    isOpen,
    onClose,
    title,
    description,
    primaryButtonText,
    secondaryButtonText,
    onPrimaryButtonClick,
    onSecondaryButtonClick,
    secondButton = false,
  } = props;

  const { color } = getConfirmationModalTypeStyle(type);

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

  const getConfirmationModalIcon = () => {
    switch (type) {
      case "success":
        return <IconCheck color={color} />;
      case "warning":
        return <IconExclamationMark color={color} />;
      case "error":
        return <IconExclamationMark color={color} />;
      case "info":
        return <IconInfoSmall color={color} />;
      default:
        return null;
    }
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} style={customStyles}>
      <div className="flex w-full items-center justify-center">
        <div
          className={`mb-2 flex h-16 w-16 items-center justify-center rounded-full border-2`}
          style={{ borderColor: color }}
        >
          {getConfirmationModalIcon()}
        </div>
      </div>
      <div className={`mt-2 text-center`} style={{ color: color }}>
        {type}
      </div>
      <h2 className="mb-2 text-lg font-bold">{title}</h2>
      <p className="mb-4">{description}</p>
      <div className="flex justify-end ">
        {secondButton && (
          <Button onClick={onSecondaryButtonClick} mode="secondary">
            {secondaryButtonText}
          </Button>
        )}
        <div className="ml-5">
          <Button onClick={onPrimaryButtonClick} mode="primary">
            {primaryButtonText}
          </Button>
        </div>
      </div>
    </Modal>
  );
});

Component.displayName = "ConfirmationModal";

export default Component;