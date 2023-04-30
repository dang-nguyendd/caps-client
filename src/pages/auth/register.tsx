import React from "react";
import withLayout from "@/hoc/withHeaderAndFooter";
import OutlineInput from "@/core/outline-input";
import {useImmer} from "use-immer";
import {DefaultLoginForm, DefaultRegisterForm} from "@/constant/auth-page";
import {FormExtension} from "@/core/outline-input/type";
import {cloneDeep} from 'lodash'
import OutlineButton from "@/core/outline-button";
import useLogin from "@/hooks/auth/useLogin";
import Link from "next/link";
import {Typography} from "@mui/material";
import useRegister from "@/hooks/auth/useRegister";

const Component = React.memo(() => {
    const [form, setForm] = useImmer(DefaultRegisterForm);
    const {register, data, isLoading} = useRegister()

    const _onInputChange = (value: string, extension?: FormExtension) => {
        const {dataKey} = extension!;
        const temp = cloneDeep(form)
        switch (dataKey) {
            case 'email':
                temp.email = value;
                break;
            case 'password':
                temp.password = value;
                break;
            case 'confirmPassword':
                temp.confirmPassword = value;
                break;
            case 'name':
                temp.name = value
        }
        setForm(temp)
    }

    const _handleSubmit = () => {
        register(form);
        setForm(DefaultRegisterForm);
    }


    return <div className='flex flex-col w-1/5 gap-1'>
        <div> Example Login Form</div>
        <OutlineInput value={form.email} placeHolder={'email'} dataKey='email' onChange={_onInputChange}/>
        <OutlineInput type='password' value={form.password} placeHolder={'Password'} dataKey='password'
                      onChange={_onInputChange}/>
        <OutlineInput type='password' value={form.password} placeHolder={'Confirm your password'}
                      dataKey='confirmPassword' onChange={_onInputChange}/>

        <Link href={'/auth/register'}>
            <Typography> Hi </Typography>
        </Link>
        <OutlineButton onClick={_handleSubmit}> Submit </OutlineButton>
    </div>
})

export default withLayout(Component)


