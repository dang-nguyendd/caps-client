import React, { useState } from "react";

import StepOne from "@/components/health-form/step-one";
import StepTwo from "@/components/health-form/step-two";
import Button from "@/core/button";
import withLayout from "@/hoc/withLayout";
import { FormStep } from "@/types/enum/form-step";

const Component = React.memo(() => {
  const [currentStep, setCurrentStep] = useState(FormStep.STEP_ONE);

  return (
    <div className="mt-5 flex min-h-screen flex-col items-center justify-center py-5">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-center">
        {currentStep === FormStep.STEP_ONE && <StepOne />}
        {currentStep === FormStep.STEP_TWO && <StepTwo />}
        <div className="mt-10 flex w-full flex-col items-center justify-between sm:flex-row">
          <div className="mb-2 cursor-pointer text-gray-600 hover:text-black sm:mb-0">
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
