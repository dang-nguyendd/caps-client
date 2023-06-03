import CustomLink from "@/components/faq/custom-link";
import { Heading } from "@/components/faq/heading";
import Paragraph from "@/components/faq/paragraph";
import Pre from "@/components/faq/pre";

export const components = {
  h1: Heading.H1,
  h2: Heading.H2,
  p: Paragraph,
  a: CustomLink,
  pre: Pre,
};
