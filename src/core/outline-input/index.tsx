import React from "react";

import { Input } from "@mui/material";

import { IOutlineInputProps } from "@/core/outline-input/type";

const Component = React.memo((props: IOutlineInputProps) => {
  const { value, onChange, placeHolder, disable, dataKey, type } = props;
  const _onValueChange = (value: string) => {
    if (onChange) {
      if (dataKey) onChange(value, { dataKey });
      else onChange(value);
    }
  };
  return (
    <Input
      type={type}
      value={value}
      disabled={disable}
      placeholder={placeHolder}
      onChange={(e) => _onValueChange(e.target.value)}
    />
  );
});

export default Component;
