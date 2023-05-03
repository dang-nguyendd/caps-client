import React, { useState } from "react";

import TextInput from "@/core/text-input";

const Component = () => {
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

  const handleChangeAge = (value: string) => {
    setAge(value);
  };

  const handleChangeWeight = (value: string) => {
    setWeight(value);
  };

  const handleChangeHeight = (value: string) => {
    setHeight(value);
  };

  return (
    <div className="mt-5 flex w-full flex-col">
      <TextInput
        value={age}
        type="text"
        placeHolder="age"
        label="Age"
        name="age"
        onChange={(value) => handleChangeAge(value)}
      />
      <TextInput
        value={weight}
        type="text"
        placeHolder="weight in kg"
        label="Weight"
        name="weight"
        onChange={(value) => handleChangeWeight(value)}
      />
      <TextInput
        value={height}
        type="text"
        placeHolder="height in cm"
        label="Height"
        name="height"
        onChange={(value) => handleChangeHeight(value)}
      />
    </div>
  );
};

Component.displayName = "HealthFormPersonalInfo";

export default Component;
