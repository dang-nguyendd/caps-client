import React, { useState } from "react";

import TextInput from "@/core/text-input";

const Component = () => {
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

  const _handleChangeAge = (value: string) => {
    setAge(value);
  };

  const _handleChangeWeight = (value: string) => {
    setWeight(value);
  };

  const _handleChangeHeight = (value: string) => {
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
        onChange={(value) => _handleChangeAge(value)}
      />
      <TextInput
        value={weight}
        type="text"
        placeHolder="weight in kg"
        label="Weight"
        name="weight"
        onChange={(value) => _handleChangeWeight(value)}
      />
      <TextInput
        value={height}
        type="text"
        placeHolder="height in cm"
        label="Height"
        name="height"
        onChange={(value) => _handleChangeHeight(value)}
      />
    </div>
  );
};

Component.displayName = "HealthFormPersonalInfo";

export default Component;
