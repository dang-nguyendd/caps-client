import React, { useState } from "react";

import { cloneDeep } from "lodash";
import Link from "next/link";
import { useImmer } from "use-immer";
import * as yup from "yup";

import {
  DefaultGenderOption,
  GenderOptions,
} from "@/components/register-form/constant";
import { DefaultRegisterForm } from "@/constant/auth-page";
import Button from "@/core/button";
import Option from "@/core/select-option";
import { SelectOption } from "@/core/select-option/type";
import TextInput from "@/core/text-input";
import { FormExtension } from "@/core/text-input/type";
import useRegister from "@/hooks/auth/useRegister";
import useDevice from "@/hooks/useDevice";
import { showToast } from "@/utils/toast";

const Component = React.memo(() => {
  const { isDesktop } = useDevice();
  const [form, setForm] = useImmer(DefaultRegisterForm);
  const [selectedGender, setSelectedGender] =
    useImmer<SelectOption>(DefaultGenderOption);
  const { register } = useRegister();

  const _onInputChange = (value: string, extension?: FormExtension): void => {
    const { dataKey } = extension!;
    const temp = cloneDeep(form);
    switch (dataKey) {
      case "email":
        temp.email = value;
        clearErrorMessage("email"); // Clear the error message for the email field
        break;
      case "password":
        temp.password = value;
        clearErrorMessage("password"); // Clear the error message for the password field
        break;
      case "confirmPassword":
        temp.confirmPassword = value;
        clearErrorMessage("confirmPassword"); // Clear the error message for the confirmPassword field
        break;
      case "name":
        temp.name = value;
        clearErrorMessage("name"); // Clear the error message for the name field
        break;
    }
    setForm(temp);
  };

  const clearErrorMessage = (field: string): void => {
    setErrorMessages((prevErrorMessages) => {
      const newErrorMessages = { ...prevErrorMessages };
      delete newErrorMessages[field]; // Remove the error message for the specified field
      return newErrorMessages;
    });
  };

  interface ErrorMessages {
    [key: string]: string;
  }
  const [errorMessages, setErrorMessages] = useState<ErrorMessages>({});

  const schema = yup.object().shape({
    name: yup
      .string()
      .test("word-count", "Name should be between 1 and 100 words", (value) => {
        if (!value) {
          return false; // Fail validation if the value is empty or undefined
        }
        const words = value.trim().split(/\s+/); // Split the value into words
        const isNumberFormat = /^\d+$/.test(value); // Check if the value is in number format
        return words.length >= 1 && words.length <= 100 && !isNumberFormat; // Check word count and number format
      }),
    email: yup
      .string()
      .required("Email is required")
      .email("Invalid email format"),
    password: yup
      .string()
      .required("Password is required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
        "Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character"
      )
      .min(8, "Password must be at least 8 characters")
      .max(20, "Password must be at most 20 characters"),
    confirmPassword: yup
      .string()
      .required("Confirm password is required")
      .oneOf([yup.ref("password"), ""], "Passwords must match"),
  });

  const _handleSubmitForm = () => {
    schema
      .validate(form, { abortEarly: false })
      .then(async (validatedData) => {
        register(form);
      })
      .catch((validationErrors) => {
        // Form data is invalid, handle the validation errors
        console.error("Validation errors:", validationErrors);

        const newErrorMessages: ErrorMessages = {}; // Create a new object to store the error messages

        // Extract error messages for each field
        const errorMessages: { [key: string]: string } = {}; // Define the type of errorMessages

        validationErrors.inner.forEach((error: any) => {
          newErrorMessages[error.path] = error.message; // Store the error message for each field
        });

        setErrorMessages(newErrorMessages); // Update the error messages state variable
      });
  };

  const _onChangeSelectOption = (
    option: SelectOption,
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
    <div
      className={
        isDesktop ? "flex w-2/5 flex-col gap-4" : "flex w-full flex-col gap-1"
      }
    >
      <div className="mb-[40px] w-full text-center text-3xl font-bold tracking-normal text-blue">
        Register
      </div>
      <TextInput
        label="Full name"
        type="text"
        value={form.name}
        errorMessage={errorMessages.name || ""}
        name="fullName"
        placeHolder="full name"
        dataKey="name"
        onChange={_onInputChange}
      />
      <TextInput
        label="Email"
        type="text"
        name="email"
        value={form.email}
        errorMessage={errorMessages.email || ""}
        placeHolder="email"
        dataKey="email"
        onChange={_onInputChange}
      />
      <TextInput
        label="Password"
        type="password"
        name="password"
        value={form.password}
        errorMessage={errorMessages.password || ""}
        placeHolder="password"
        dataKey="password"
        onChange={_onInputChange}
      />
      <TextInput
        label="Confirm password"
        type="password"
        name="confirmPassword"
        value={form.confirmPassword}
        errorMessage={errorMessages.confirmPassword || ""}
        placeHolder="retype your password"
        dataKey="confirmPassword"
        onChange={_onInputChange}
      />
      <Option
        onChange={_onChangeSelectOption}
        dataKey="gender"
        selectedOption={selectedGender}
        options={GenderOptions}
        title="Gender"
      />
      <Button onClick={_handleSubmitForm} mode="primary">
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
