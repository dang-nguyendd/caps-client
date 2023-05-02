export interface IDropDownMenuProps {
  options: string[];
  onChange: (value: string) => void;
  selectedValue: string;
  label?: string;
}
