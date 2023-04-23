import React from "react";

interface BaseSelectProps {
  options: any[];
  onChange: (value: any) => void;
  selectedValue: any;
  label: string;
}

const BaseSelect: React.FC<BaseSelectProps> = ({
  options,
  onChange,
  selectedValue,
  label,
}) => {
  return (
    <div className="space-y-1">
      <label className="text-gray-500 font-medium block mb-2"> {label}</label>
      <select
        className="w-full rounded-lg p-2 text-gray-800 font-medium border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        value={selectedValue}
        onChange={(event) => onChange(event.target.value)}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default BaseSelect;
