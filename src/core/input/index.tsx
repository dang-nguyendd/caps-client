import React from "react";

import { IInputProps } from "@/core/input/type";

const Component = React.memo((props: IInputProps) => {
  const {
    value,
    onChange,
    placeHolder,
    disable,
    dataKey,
    type,
    label,
    name,
    errorMessage,
  } = props;
  const _onValueChange = (value: string) => {
    if (onChange) {
      if (dataKey) onChange(value, { dataKey });
      else onChange(value);
    }
  };
  return (
    <div className="space-y-1">
      <label className="text-gray-500 font-medium block mb-2" htmlFor={name}>
        {label}
      </label>
      <input
        className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
        type={type}
        name={name}
        value={value}
        disabled={disable}
        placeholder={placeHolder}
        onChange={(e) => _onValueChange(e.target.value)}
      />
      {errorMessage && (
        <div className="text-red text-sm mt-2">{errorMessage}</div>
      )}
    </div>
  );
});

Component.displayName = "Input";

export default Component;
