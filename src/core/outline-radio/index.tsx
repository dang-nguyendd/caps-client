import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import {IOutlineRadioProps} from "@/core/outline-radio/type";
import {useEffect} from "react";
import {Checkbox} from "@mui/material";

const Component = React.memo((props: IOutlineRadioProps) => {
        const {onChange, selectedOption, options, title, dataKey, type = 'radio'} = props
        const _handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            const selected = (event.target as HTMLInputElement).value;
            const option = options.find(opt => opt.value === selected);
            if (option && dataKey) {
                onChange(option, {dataKey})
            }
        };

        useEffect(() => {
            if (options && options.length) onChange(options[0], {dataKey})
        }, [options])

        return (
            <FormControl>
                <FormLabel id="demo-controlled-radio-buttons-group">{title}</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={selectedOption.value}
                    onChange={_handleChange}
                >
                    {options.map(option => {
                        return <FormControlLabel value={option.value} control={type === 'radio' ? <Radio/> : <Checkbox/>}
                                                 label={option.label}/>
                    })}
                </RadioGroup>
            </FormControl>
        );
    }
)

export default Component