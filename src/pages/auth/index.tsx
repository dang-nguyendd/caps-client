import React from "react";
import withLayout from "@/hoc/withHeaderAndFooter";
import OutlineInput from "@/core/outline-input";
import {useImmer} from "use-immer";

const Component = React.memo(() => {
    const [value, setValue] = useImmer('')
    const [pw, setPw] = useImmer('')
    const _onInputChange = (data: string) => {
            setValue(data)
    }
    return <div>
            <div> Example Login Form </div>
        <OutlineInput value={value} placeHolder={'email'} onChange={_onInputChange}/>
        <OutlineInput value={value} placeHolder={'password'} onChange={_onInputChange}/>
    </div>
})

export default withLayout(Component)