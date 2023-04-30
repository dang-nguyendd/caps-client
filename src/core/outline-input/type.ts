export interface IOutlineInputProps {
  onChange?: (x: string, extension?: FormExtension) => void;
  value: string;
  disable?: boolean;
  placeHolder: string;
  dataKey?: string;
  type?: string;
}

export type FormExtension = {
  dataKey: string;
};
