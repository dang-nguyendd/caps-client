import { MouseEventHandler, ReactElement } from "react";

export interface ISidebarActionButton {
  handleClick: MouseEventHandler<HTMLButtonElement>;
  children: ReactElement;
}
