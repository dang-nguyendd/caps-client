import { IProgressStepProps } from "@/core/progress-step/type";

export interface IProgressBarProps {
  steps: IProgressStepProps[];
  currentStep: number;
  isLastStep?: boolean;
}
