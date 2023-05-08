import React from "react";

import { ITextareaProps } from "@/core/textarea/type";

const Component = React.memo((props: ITextareaProps) => {
  const { value, label, onChange } = props;
  return (
    <div className="mb-4 flex w-full flex-col">
      <label htmlFor={value} className="mb-2 font-medium text-blue">
        {label}
      </label>
      <textarea
        id={value}
        name={value}
        value={value}
        rows={4}
        className="w-full rounded-lg border border-gray-300 p-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue"
        onChange={(e) => (onChange ? onChange(e.target.value) : null)}
      />
    </div>
  );
});
Component.displayName = "Textarea";
export default Component;
