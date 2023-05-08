import React, { useState } from "react";

import { useRouter } from "next/router";
import Joyride, { CallBackProps } from "react-joyride";

import { options } from "@/components/onboarding-tutorial/constant";
import { IOnboardingStepProps } from "@/components/onboarding-tutorial/type";

const Component: React.FC<IOnboardingStepProps> = ({ steps }) => {
  const [run, setRun] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);
  const router = useRouter();

  const handleJoyrideCallback = (data: CallBackProps) => {
    const { action, index, status, type } = data;

    if (status === "finished" || status === "skipped") {
      setRun(false);
      setStepIndex(0);
    }

    if (type === "step:after" && action === "next") {
      setStepIndex(index + 1);
    }

    if (type === "step:after" && action === "prev") {
      setStepIndex(index - 1);
    }

    if (action === "skip" || action === "close") {
      setRun(false);
      setStepIndex(0);
    }
  };

  // TODO: it should be modified to only run when user login the first time
  const shouldRun = router.pathname === "/";

  return (
    <Joyride
      continuous
      scrollToFirstStep
      showProgress
      showSkipButton
      steps={steps}
      run={shouldRun}
      stepIndex={stepIndex}
      callback={handleJoyrideCallback}
      styles={{
        options: options,
        buttonClose: {
          display: "none",
        },
      }}
      locale={{
        back: "Back",
        close: "Close",
        last: "Finish",
        next: "Next",
        skip: "Skip",
      }}
      disableOverlayClose
      disableScrollParentFix
      disableCloseOnEsc
    />
  );
};

Component.displayName = "OnboardingTutorial";

export default Component;
