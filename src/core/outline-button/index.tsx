import React, { useMemo } from "react";

import Button from "@mui/material/Button";

import { IOutlineButtonProps } from "@/core/outline-button/type";
const Component = React.memo((props: IOutlineButtonProps) => {
  const { children, disabled, onClick, mode } = props;

  const colorClass = useMemo(() => {
    if (mode === "save") return "blue";
    return "gray";
  }, [mode]);

  const _onClick = () => {
    if (onClick) onClick();
  };

  return (
    <Button
      disabled={disabled}
      className={`btn bg-blue-600 text-white hover:bg-blue-500`}
      onClick={_onClick}
    >
      {" "}
      {children}{" "}
    </Button>
  );
});

export default Component;
