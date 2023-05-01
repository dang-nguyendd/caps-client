import { ReactNode } from "react";

export interface IProgressStepProps {
  icon: ReactNode;
  label: string;
  active?: boolean;
  isLastStep?: boolean;
}
