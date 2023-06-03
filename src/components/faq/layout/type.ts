import React from "react";

export interface ILayoutProps {
  children: React.ReactNode;
  meta: { author: string; title: string; slug: string; topics: string[] };
}
