export interface IInputProps {
  required?: true;
  onChange?: (x: any, extension?: FormExtension) => void;
  value: any;
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
