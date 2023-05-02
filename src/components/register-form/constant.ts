import { RadioOption, RadioOptions } from "@/core/radio/type";

export const GenderOptions: RadioOptions = [
  { label: "Male", value: "male" },
  { label: "Female", value: "female" },
  { label: "Other", value: "other" },
];

export const DefaultGenderOption: RadioOption = GenderOptions[0];
