import React from "react";

import ProgressStep from "@/core/progress-step";
import { IProgressBarProps } from "@/shared/progress-bar/type";

const Component = React.memo((props: IProgressBarProps) => {
  const { steps, currentStep, isLastStep } = props;
  return (
    <div className="flex w-2/5 items-center justify-center space-x-4">
      {steps.map((step, index) => (
        <ProgressStep
          key={step.label}
          icon={step.icon}
          label={step.label}
          active={index === currentStep}
          isLastStep={isLastStep && index === steps.length}
        />
      ))}
    </div>
  );
});

Component.displayName = "ProgressBar";
export default Component;
