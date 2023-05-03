export type ISelectOptionProps = {
  onChange: (x: SelectOption, extension?: FormExtension) => void;
  selectedOption: SelectOption;
  options: SelectOptions;
  title: string;
  dataKey: string;
  type?: "radio" | "checkbox";
};

export type SelectOption = {
  label: string;
  value: string;
};

export type SelectOptions = SelectOption[];

export type FormExtension = {
  dataKey: string;
};
