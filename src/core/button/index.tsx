import React, { useMemo } from "react";

import { IButtonProps } from "@/core/button/type";
const Component = React.memo((props: IButtonProps) => {
  const { children, disabled, onClick, mode, size = "m" } = props;

  const colorClass = useMemo(() => {
    if (mode === "primary") {
      return "bg-blue-500 hover:bg-blue-600";
    }
    return "bg-gray-500 hover:bg-gray-600";
  }, [mode]);

  const sizeClass = useMemo(() => {
    switch (size) {
      case "s":
        return "h-8 text-sm px-4";
      case "l":
        return "h-16 text-xl px-6";
      default:
        return "h-12 text-base px-5";
    }
  }, [size]);

  const _onClick = () => {
    if (onClick) onClick();
  };

  return (
    <button
      disabled={disabled}
      className={`border border-black border-solid rounded-md w-full text-white ${colorClass} ${sizeClass}`}
      onClick={_onClick}
    >
      {children}
    </button>
  );
});

Component.displayName = "Button";

export default Component;
