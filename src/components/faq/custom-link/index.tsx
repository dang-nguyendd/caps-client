import React from "react";

import Link from "next/link";

import { ICustomLinkProps } from "@/components/faq/custom-link/type";

const Component = (props: ICustomLinkProps) => {
  const { href, children } = props;
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return (
      <Link href={href} legacyBehavior>
        <a {...props}>{children}</a>
      </Link>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

Component.displayName = "CustomLink";
export default Component;
