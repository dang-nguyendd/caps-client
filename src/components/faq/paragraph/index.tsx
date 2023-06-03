import React from "react";

import { IParagraphProps } from "@/components/faq/paragraph/type";

const Component: React.FC<IParagraphProps> = ({ children }) => {
  return <p className="my-4 text-base text-gray-700">{children}</p>;
};

Component.displayName = "Paragraph";
export default Component;
