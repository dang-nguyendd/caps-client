import React, { ReactElement, useState, useEffect } from "react";

import { yupResolver } from "@hookform/resolvers/yup";
import { IconEye, IconEyeClosed } from "@tabler/icons-react";
import axios from "axios";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import * as Yup from "yup";

import BaseButton from "@/components/shared/base/BaseButton";
import BaseInputField from "@/components/shared/base/BaseInputField";
import BaseSelect from "@/components/shared/base/BaseSelect";
import { AUTH_ROUTES } from "@/constants/api";
import { Gender } from "@/types/enum/Gender";
import { HttpResponse } from "@/types/enum/HttpResponse";

interface FormData {
  username?: string;
  password?: string;
  confirmPassword?: string;
  gender: Gender;
  dob?: string;
  phoneNumber?: string;
  email?: string;
}

const defaultValues = {
  username: "",
  password: "",
  confirmPassword: "",
  gender: Gender.MALE,
  dob: "",
  phoneNumber: "",
  email: "",
};

const schema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Please enter at least 3 characters.")
    .max(30, "Please do not enter more than 30 characters.")
    .required("Please enter your username."),
  password: Yup.string()
    .min(8, "Your password is too short.")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Your password must contain 8 characters, one uppercase, one lowercase, one number and one special case character."
    )
    .required("Please enter your password."),
  confirmPassword: Yup.string()
    .required("Please retype your password.")
    .oneOf([Yup.ref("password")], "Your passwords do not match."),
  dob: Yup.date().required("Please enter valid date."),
  phoneNumber: Yup.string()
    .matches(/^\d{10}$/, "Please enter a valid phone.")
    .required("Please enter your phone number."),
  email: Yup.string()
    .email("Please enter a valid email address.")
    .required("Please enter your email address."),
});

const CreateAccount = () => {
  const { t } = useTranslation("signup");
  const [isValid, setIsValid] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [selectedGender, setSelectedGender] = useState<Gender | null>(null);

  const handleGenderChange = (value: Gender) => {
    setSelectedGender(value);
  };

  const {
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    mode: "onBlur",
    defaultValues,
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    setIsValid(Object.keys(errors).length === 0);
  }, [errors, setIsValid]);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword(!showConfirmPassword);

  const onSubmit = async (data: FormData) => {
    try {
      setIsLoading(true);
      const response = await axios.post(AUTH_ROUTES.SIGNUP, data);

      if (
        response.status === HttpResponse.OK ||
        response.status === HttpResponse.CREATED
      ) {
        toast.success(
          `Successfully create your account with email ${data.email}`,
          { theme: "dark" }
        );
      }
    } catch (error: any) {
      if (
        error.response &&
        error.response.status === HttpResponse.INTERNAL_SERVER_ERROR
      ) {
        toast.warning(
          `Your ${error.response.data.message} has been existed, please change to another one`,
          { theme: "dark" }
        );
      } else {
        toast.error(`Error when creating account: ${error}`, { theme: "dark" });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-screen-sm flex flex-col items-center mt-16">
      <h1 className="mb-10 text-4xl font-semibold">
        {t("Create your account")}
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full max-w-md space-y-3">
          <BaseInputField
            inputFor="username"
            inputLabel={t("Username")}
            inputType="text"
            errorMessage={errors.username?.message}
          />

          <div className="relative">
            <BaseInputField
              inputFor="password"
              inputLabel={t("Password")}
              inputType={showPassword ? "text" : "password"}
              errorMessage={errors.password?.message}
            />

            <button
              type="button"
              className="absolute right-2 top-14"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? (
                <IconEye className="w-4 h-4" />
              ) : (
                <IconEyeClosed className="w-4 h-4" />
              )}
            </button>
          </div>

          <div className="relative">
            <BaseInputField
              inputFor="confirmPassword"
              inputLabel={t("Confirm password")}
              inputType={showConfirmPassword ? "text" : "password"}
              errorMessage={errors.confirmPassword?.message}
            />

            <button
              type="button"
              className="absolute right-2 top-12"
              onClick={toggleConfirmPasswordVisibility}
            >
              {showConfirmPassword ? (
                <IconEye className="w-4 h-4" />
              ) : (
                <IconEyeClosed className="w-4 h-4" />
              )}
            </button>
          </div>

          <BaseSelect
            options={Object.values(Gender)}
            onChange={handleGenderChange}
            selectedValue={selectedGender}
            label={t("Gender")}
          />

          <BaseInputField
            inputFor="dob"
            inputLabel={t("Date of birth")}
            inputType="date"
            errorMessage={errors.dob?.message}
          />

          <BaseInputField
            inputFor="email"
            inputLabel={t("Email")}
            inputType="email"
            errorMessage={errors.email?.message}
          />

          <BaseInputField
            inputFor="phoneNumber"
            inputLabel={t("Phone number")}
            inputType="tel"
            errorMessage={errors.phoneNumber?.message}
          />

          <p className="mt-8 text-sm text-gray-600">
            {t(
              "Chat may use your phone number to call or send text messages with information regarding your account."
            )}
          </p>
        </div>
        <div className="flex flex-col pb-4 mt-8 space-y-4">
          <BaseButton
            text={t("Go back")}
            className="bg-white hover:bg-darker-white text-black"
          />
          <BaseButton
            buttonType="submit"
            text={t("Continue")}
            isLoading={isLoading}
            className="bg-custom-black hover:bg-custom-darker-black text-white"
            disabled={!isValid}
          />
        </div>
      </form>
    </div>
  );
};

CreateAccount.getLayout = function noLayout(page: ReactElement) {
  return page;
};

export default CreateAccount;

export async function getServerSideProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["signup"])),
    },
  };
}
