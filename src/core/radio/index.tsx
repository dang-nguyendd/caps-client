import * as React from "react";

import { IRadioProps, RadioOption } from "@/core/radio/type";

const Component = React.memo((props: IRadioProps) => {
  const {
    onChange,
    selectedOption,
    options,
    title,
    dataKey,
    type = "radio",
  } = props;

  const handleChange = (option: RadioOption) => {
    if (onChange) {
      onChange(option, { dataKey });
    }
  };

  return (
    <div className="mb-5">
      <div className="mb-2 text-lg font-medium">{title}</div>
      <div className="flex flex-wrap gap-2">
        {options.map((option, index) => (
          <div key={index}>
            <label className="inline-flex items-center cursor-pointer">
              <input
                type={type}
                className="form-radio text-blue-500"
                value={option.value}
                checked={selectedOption === option}
                onChange={() => handleChange(option)}
              />
              <span className="ml-2">{option.label}</span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
});

Component.displayName = "OutlineRadio";

export default Component;
