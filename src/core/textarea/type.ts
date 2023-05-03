import { InputHTMLAttributes } from "react";

export interface ITextareaProps
  extends InputHTMLAttributes<HTMLTextAreaElement> {
  value: string;
  label: string;
}
