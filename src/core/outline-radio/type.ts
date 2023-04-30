export type IOutlineRadioProps = {
    onChange: (x: RadioOption, extension?: FormExtension) => void;
    selectedOption: RadioOption;
    options: RadioOptions
    title: string
    dataKey: string
    type?: 'radio' | 'checkbox'
}

export type RadioOption = {
    label: string;
    value: string;
}

export type RadioOptions = RadioOption[]


export type FormExtension = {
    dataKey: string
}