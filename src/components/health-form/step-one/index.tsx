import React, { useState } from "react";

import TextInput from "@/core/text-input";

const Component = () => {
  const [age, setAge] = useState(0);
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);

  const handleChangeAge = (value: number) => {
    setAge(value);
  };

  const handleChangeWeight = (value: number) => {
    setWeight(value);
  };

  const handleChangeHeight = (value: number) => {
    setHeight(value);
  };

  return (
    <div className="mt-5 flex w-full flex-col">
      <TextInput
        value={age}
        type="number"
        placeHolder="age"
        label="Age"
        name="age"
        onChange={(value) => handleChangeAge(value)}
      />
      <TextInput
        value={weight}
        type="number"
        placeHolder="weight in kg"
        label="Weight"
        name="weight"
        onChange={(value) => handleChangeWeight(value)}
      />
      <TextInput
        value={height}
        type="number"
        placeHolder="height in cm"
        label="Height"
        name="height"
        onChange={(value) => handleChangeHeight(value)}
      />
    </div>
  );
};

Component.displayName = "HealthFormStepOne";

export default Component;
