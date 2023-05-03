export interface IInputProps {
  required?: true;
  onChange?: (x: string, extension?: FormExtension) => void;
  value: string;
  disable?: boolean;
  placeHolder: string;
  dataKey?: string;
  type?: string;
  label: string;
  name: string;
  errorMessage?: string;
}

export type FormExtension = {
  dataKey: string;
};
