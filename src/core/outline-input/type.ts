export interface IOutlineInputProps {
    onChange?: (x: string, extension?: FormExtension | null) => void;
    value: string;
    disable?: boolean;
    placeHolder: string
}

export type FormExtension = {
    dataKey: string
}