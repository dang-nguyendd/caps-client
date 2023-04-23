import React from "react";

import Spinner from "@/components/shared/base/BaseSpinner";

interface BaseButtonProps {
  buttonType?: "button" | "submit" | "reset" | undefined;

  text: string;
  className: string;
  disabled?: boolean;
  onClick?: () => void;
  isLoading?: boolean;
}

const BaseButton: React.FC<BaseButtonProps> = ({
  buttonType,
  text,
  className,
  disabled,
  onClick,
  isLoading,
}) => {
  return (
    <button
      type={buttonType}
      className={`h-12 mb-4 border border-custom-black border-solid rounded-full w-full ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {isLoading ? <Spinner /> : text}
    </button>
  );
};

export default BaseButton;
