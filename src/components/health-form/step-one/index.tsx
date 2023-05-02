import React from "react";

import TextInput from "@/core/text-input";

const Component = React.memo(() => {
  return (
    <div className="mt-5 flex w-2/5 flex-col">
      <TextInput
        value={""}
        type="number"
        placeHolder="age"
        label="Age"
        name="age"
      />
      <TextInput
        value={""}
        type="number"
        placeHolder="weight in kg"
        label="Weight"
        name="weight"
      />
      <TextInput
        value={""}
        type="number"
        placeHolder="height in cm"
        label="Height"
        name="height"
      />
    </div>
  );
});

Component.displayName = "HealthFormStepOne";

export default Component;
