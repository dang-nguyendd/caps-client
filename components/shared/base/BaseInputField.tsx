import React from "react";

interface BaseInputFieldProps {
  inputFor: string;
  inputLabel: string;
  inputType: string;
  value?: string;
  errorMessage?: string | null;
  onChange?: (value: string) => void;
}

const BaseInputField: React.FC<BaseInputFieldProps> = ({
  inputFor,
  inputLabel,
  inputType,
  value,
  errorMessage,
  onChange,
}) => {
  return (
    <div className="space-y-1">
      <label
        className="text-gray-500 dark:text-white font-medium block mb-2"
        htmlFor={inputFor}
      >
        {inputLabel}
      </label>
      <input
        className="w-full border border-gray-300 dark:bg-gray-800 dark:text-white p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
        type={inputType}
        name={inputFor}
        id={inputFor}
        value={value}
        onChange={(event) => onChange && onChange(event.target.value)}
      />
      {errorMessage && (
        <div className="text-red text-sm mt-2">{errorMessage}</div>
      )}
    </div>
  );
};

export default BaseInputField;
