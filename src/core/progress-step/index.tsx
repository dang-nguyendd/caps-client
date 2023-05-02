import React from "react";

import { IProgressStepProps } from "@/core/progress-step/type";

const Component = React.memo((props: IProgressStepProps) => {
  const { icon, label, active, isLastStep } = props;

  const circleClasses = `w-10 h-10 mx-auto flex items-center rounded-full text-xs  justify-center  ${
    active ? "text-white bg-blue" : "text-black bg-white border-2 border-blue"
  }`;

  const lineClasses = `ml-2 h-1 w-full bg-blue ${active ? "" : "opacity-20"}`;

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div>
        <div className={circleClasses}>{icon}</div>
        <div className="text-center">{label}</div>
      </div>
      {!isLastStep && <div className={lineClasses}></div>}
    </div>
  );
});

Component.displayName = "ProgressStep";

export default Component;
