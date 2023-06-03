import React from "react";

import Image from "next/image";

import { IResponsiveImageProps } from "@/components/faq/responsive-image/type";

const Component: React.FC<IResponsiveImageProps> = ({ alt, ...props }) => (
  <Image
    alt={alt}
    sizes="100vw"
    style={{ width: "100%", height: "auto" }}
    {...props}
  />
);

Component.displayName = "ResponsiveImage";
export default Component;
