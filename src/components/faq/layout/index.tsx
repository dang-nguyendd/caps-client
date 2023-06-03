import React from "react";

import { MDXProvider } from "@mdx-js/react";
import Head from "next/head";

import { components } from "@/components/faq/layout/constant";
import { ILayoutProps } from "@/components/faq/layout/type";

const Component = ({ children, ...props }: ILayoutProps) => {
  return (
    <MDXProvider components={components}>
      <Head>
        <title>{props.meta.title}</title>
        <meta name="description" content={props.meta.title} />
      </Head>
      {children}
    </MDXProvider>
  );
};

Component.displayName = "Layout";
export default Component;
