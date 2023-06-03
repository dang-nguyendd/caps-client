import React from "react";

export interface IHeadingProps {
  children?: React.ReactNode;
}

export interface IHeading {
  H1: React.FC<IHeadingProps>;
  H2: React.FC<IHeadingProps>;
}
