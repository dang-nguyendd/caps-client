import React from "react";

import { cloneDeep } from "lodash";
import Link from "next/link";
import { useImmer } from "use-immer";

import { DefaultLoginForm } from "@/constant/auth-page";
import Button from "@/core/button";
import { FormExtension } from "@/core/text-input/type";
import useLogin from "@/hooks/auth/useLogin";

import Input from "../../core/text-input";

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
    <div className="flex w-2/5 flex-col gap-1">
      <div className="mb-[40px] w-full text-center text-3xl font-bold tracking-normal text-blue">
        Login
      </div>
      <Input
        label="Email"
        type="text"
        name="email"
        value={form.email}
        placeHolder="email"
        dataKey="email"
        onChange={_onInputChange}
      />
      <Input
        label="Password"
        type="password"
        name="password"
        value={form.password}
        placeHolder={"password"}
        dataKey="password"
        onChange={_onInputChange}
      />

      <Button onClick={_handleSubmit} mode="primary">
        Login
      </Button>
      <label className="text-xl">
        Did not have an account?{" "}
        <Link href={"/auth/register"}>
          <span className="text-blue">Register</span>
        </Link>
      </label>
    </div>
  );
});

Component.displayName = "LoginForm";

export default Component;
