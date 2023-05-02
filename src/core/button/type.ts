import { ReactNode } from "react";

export interface IButtonProps {
  mode?: "primary" | "secondary";
  icon?: ReactNode;
  size?: "s" | "m" | "l";
  isLoading?: boolean;
  disabled?: boolean;
  children: ReactNode;
  onClick?: () => void;
}
