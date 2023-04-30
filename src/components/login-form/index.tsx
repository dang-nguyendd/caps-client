import React from "react";

import { cloneDeep } from "lodash";
import Link from "next/link";
import { useImmer } from "use-immer";

import { DefaultLoginForm } from "@/constant/auth-page";
import { FormExtension } from "@/core/input/type";
import useLogin from "@/hooks/auth/useLogin";

import OutlineButton from "../../core/button";
import OutlineInput from "../../core/input";

const Component = React.memo(() => {
  const [form, setForm] = useImmer(DefaultLoginForm);
  const { login, data, isLoading } = useLogin();

  const _onInputChange = (value: string, extension?: FormExtension) => {
    const { dataKey } = extension!;
    const temp = cloneDeep(form);
    switch (dataKey) {
      case "email":
        temp.email = value;
        break;
      case "password":
        temp.password = value;
        break;
    }
    setForm(temp);
  };

  const _handleSubmit = () => {
    login(form);
    setForm(DefaultLoginForm);
  };

  return (
    <div className="flex flex-col w-1/5 gap-1">
      <div className="text-blue-800 text-center w-full">Login</div>
      <OutlineInput
        label="Email"
        type="text"
        name="email"
        value={form.email}
        placeHolder="email"
        dataKey="email"
        onChange={_onInputChange}
      />
      <OutlineInput
        label="Password"
        type="password"
        name="password"
        value={form.password}
        placeHolder={"password"}
        dataKey="password"
        onChange={_onInputChange}
      />
      <Link href={"/auth/register"}>
        <p className="text-blue-800 text-center w-full"> Go to register</p>
      </Link>
      <OutlineButton onClick={_handleSubmit} mode="primary">
        Login
      </OutlineButton>
    </div>
  );
});

Component.displayName = "LoginForm";

export default Component;
