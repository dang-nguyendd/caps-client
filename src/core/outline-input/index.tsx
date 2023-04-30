import {Input} from '@mui/material';
import React from "react";
import {FormExtension, IOutlineInputProps} from "@/core/outline-input/type";

const Component = React.memo((props: IOutlineInputProps) => {
    const {value, onChange, placeHolder, disable} = props
    const _onValueChange = (value: string) => {
        if (onChange) onChange(value)
    }
    return <Input value={value} disabled={disable} placeholder={placeHolder}
                  onChange={e => _onValueChange(e.target.value)}/>
})

export default Component