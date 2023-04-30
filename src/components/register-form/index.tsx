import React from "react";

import { cloneDeep } from "lodash";
import Link from "next/link";
import { useImmer } from "use-immer";

import {
  DefaultGenderOption,
  GenderOptions,
} from "@/components/register-form/constant";
import { DefaultRegisterForm } from "@/constant/auth-page";
import OutlineButton from "@/core/outline-button";
import OutlineInput from "@/core/outline-input";
import { FormExtension } from "@/core/outline-input/type";
import OutlineRadio from "@/core/outline-radio";
import { RadioOption } from "@/core/outline-radio/type";
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
    <div className="flex flex-col w-1/5 gap-1">
      <div className="text-blue-800 text-center w-full">
        {" "}
        Example Register Form
      </div>
      <OutlineInput
        value={form.name}
        placeHolder={"Full Name"}
        dataKey="name"
        onChange={_onInputChange}
      />
      <OutlineInput
        value={form.email}
        placeHolder={"email"}
        dataKey="email"
        onChange={_onInputChange}
      />
      <OutlineInput
        type="password"
        value={form.password}
        placeHolder={"Password"}
        dataKey="password"
        onChange={_onInputChange}
      />
      <OutlineInput
        type="password"
        value={form.confirmPassword}
        placeHolder={"Confirm your password"}
        dataKey="confirmPassword"
        onChange={_onInputChange}
      />
      <OutlineRadio
        onChange={_onChangeRadioOption}
        dataKey="gender"
        selectedOption={selectedGender}
        options={GenderOptions}
        title="Gender"
      />
      <Link href={"/auth"}>
        <p className="text-blue-800 text-center w-full"> Go to login</p>
      </Link>
      <OutlineButton onClick={_handleSubmit}> Register </OutlineButton>
    </div>
  );
});

export default Component;
