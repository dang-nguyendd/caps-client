import React from "react";

import { cloneDeep } from "lodash";
import Link from "next/link";
import { useImmer } from "use-immer";

import {
  DefaultGenderOption,
  GenderOptions,
} from "@/components/register-form/constant";
import { DefaultRegisterForm } from "@/constant/auth-page";
import Button from "@/core/button";
import Input from "@/core/input";
import { FormExtension } from "@/core/input/type";
import Radio from "@/core/radio";
import { RadioOption } from "@/core/radio/type";
import useRegister from "@/hooks/auth/useRegister";

const Component = React.memo(() => {
  const [form, setForm] = useImmer(DefaultRegisterForm);
  const [selectedGender, setSelectedGender] =
    useImmer<RadioOption>(DefaultGenderOption);
  const { register } = useRegister();

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
      case "confirmPassword":
        temp.confirmPassword = value;
        break;
      case "name":
        temp.name = value;
    }
    setForm(temp);
  };

  const _handleSubmit = () => {
    register(form);
    // setForm(DefaultRegisterForm);
  };

  const _onChangeRadioOption = (
    option: RadioOption,
    extension?: FormExtension
  ) => {
    const { dataKey } = extension!;
    const temp = cloneDeep(form);
    setSelectedGender(option);
    switch (dataKey) {
      case "gender":
        temp.gender = option.value;
    }
    setForm(temp);
  };

  return (
    <div className="flex flex-col w-2/5 gap-1">
      <div className="text-blue text-center w-full tracking-normal font-bold text-3xl mb-[40px]">
        Register
      </div>
      <Input
        label="Full name"
        type="text"
        value={form.name}
        name="fullName"
        placeHolder="full name"
        dataKey="name"
        onChange={_onInputChange}
      />
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
        placeHolder="password"
        dataKey="password"
        onChange={_onInputChange}
      />
      <Input
        label="Confirm password"
        type="password"
        name="confirmPassword"
        value={form.confirmPassword}
        placeHolder="retype your password"
        dataKey="confirmPassword"
        onChange={_onInputChange}
      />
      <Radio
        onChange={_onChangeRadioOption}
        dataKey="gender"
        selectedOption={selectedGender}
        options={GenderOptions}
        title="Gender"
      />

      <Button onClick={_handleSubmit} mode="primary">
        Register
      </Button>
      <label className="text-xl">
        Already have account?{" "}
        <Link href={"/auth/login"}>
          <span className="text-blue">Sign in</span>
        </Link>
      </label>
    </div>
  );
});

Component.displayName = "RegisterForm";

export default Component;
