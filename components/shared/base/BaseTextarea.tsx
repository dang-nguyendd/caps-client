import React, { InputHTMLAttributes } from "react";

type BaseTextAreaProps = InputHTMLAttributes<HTMLTextAreaElement> & {
  inputFor: string;
  inputLabel: string;
};

const BaseTextArea: React.FC<BaseTextAreaProps> = ({
  inputFor,
  inputLabel,
  ...rest
}) => {
  return (
    <div className="flex flex-col w-full mb-4">
      <label htmlFor={inputFor} className="text-gray-500 font-medium mb-2">
        {inputLabel}
      </label>
      <textarea
        id={inputFor}
        name={inputFor}
        rows={4}
        className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
        {...rest}
      />
    </div>
  );
};

export default BaseTextArea;
