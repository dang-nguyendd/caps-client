export interface IDropDownMenuProps {
  options: string[];
  onChange: (value: any) => void;
  selectedValue: string;
  label?: string;
}
