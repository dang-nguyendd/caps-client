import React from "react";

import {
  IconCheck,
  IconExclamationMark,
  IconInfoSmall,
} from "@tabler/icons-react";
import Modal from "react-modal";

import Button from "@/core/button";
import { CustomStyle } from "@/shared/confirmation-modal/constant";
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
    <Modal isOpen={isOpen} onRequestClose={onClose} style={CustomStyle}>
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
      <h2 className="my-5 text-lg font-bold text-white">{title}</h2>
      <p className="mb-5 text-white">{description}</p>
      <div className="flex justify-end">
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
