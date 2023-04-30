import React, { ReactNode } from "react";

export interface IOutlineButtonProps {
  mode?: "save" | "default";
  icon?: ReactNode;
  size?: "s" | "m" | "l";
  disabled?: boolean;
  children: ReactNode;
  onClick?: () => void;
}
