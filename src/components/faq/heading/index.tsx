import React from "react";

import { IHeading } from "@/components/faq/heading/type";

export const Heading: IHeading = {
  H1: ({ children }) => <h1 className="text-2xl font-bold">{children}</h1>,
  H2: ({ children }) => <h2 className="text-xl font-bold">{children}</h2>,
};
