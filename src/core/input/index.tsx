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
    <div className="mb-5 space-y-1">
      <label className="mb-2 block font-medium text-blue" htmlFor={name}>
        {label}
      </label>
      <input
        className="w-full rounded-lg border border-gray-300 p-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue"
        type={type}
        name={name}
        value={value}
        disabled={disable}
        placeholder={placeHolder}
        onChange={(e) => _onValueChange(e.target.value)}
      />
      {errorMessage && (
        <div className="mt-2 text-sm text-red">{errorMessage}</div>
      )}
    </div>
  );
});

Component.displayName = "Input";

export default Component;
