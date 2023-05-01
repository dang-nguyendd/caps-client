import React, { useState } from "react";

import { IconUser, IconStethoscope, IconDots } from "@tabler/icons-react";

import StepOne from "@/components/health-form/step-one";
import StepThree from "@/components/health-form/step-three";
import StepTwo from "@/components/health-form/step-two";
import Button from "@/core/button";
import withLayout from "@/hoc/withLayout";
import ProgressBar from "@/shared/progress-bar";
import { FormStep } from "@/types/enum/FormStep";

const Component = React.memo(() => {
  const [currentStep, setCurrentStep] = useState(FormStep.StepOne);

  const steps = [
    { icon: <IconUser />, label: "Personal Details" },
    { icon: <IconStethoscope />, label: "Health Record" },
    { icon: <IconDots />, label: "Other information" },
  ];

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <ProgressBar
        steps={steps}
        currentStep={currentStep}
        isLastStep={currentStep === steps.length - 1}
      />
      <div className="flex w-full flex-col items-center justify-center">
        {currentStep === FormStep.StepOne && <StepOne />}
        {currentStep === FormStep.StepTwo && <StepTwo />}
        {currentStep === FormStep.StepThree && <StepThree />}
        <div className="mt-8 flex w-2/5 justify-between">
          <div className="cursor-pointer text-gray-600 hover:text-black">
            Skip for now
          </div>
          <div className="flex justify-end">
            <Button onClick={() => {}} mode="primary">
              Continue
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
});

Component.displayName = "HealthFormPage";

export default withLayout(Component);
