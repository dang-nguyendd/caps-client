import React, { ReactElement, useState } from "react";

import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { toast } from "react-toastify";

import BaseButton from "@/components/shared/base/BaseButton";
import BaseInputField from "@/components/shared/base/BaseInputField";
import { AUTH_ROUTES, createAxiosInstance } from "@/constants/api";
import { Routes } from "@/constants/routes";
import { HttpResponse } from "@/types/enum/HttpResponse";

const Login = () => {
  const { t } = useTranslation("login");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const axiosInstance = createAxiosInstance();

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const formData = new FormData(event.currentTarget);
      const response = await axiosInstance.post(AUTH_ROUTES.LOGIN, {
        email: formData.get("email"),
        password: formData.get("password"),
      });

      if (
        response.status === HttpResponse.OK ||
        response.status === HttpResponse.CREATED
      ) {
        toast.success(`Signed in successfully!`, { theme: "dark" });
        await router.push(Routes.HOME.path);
      }
    } catch (error: any) {
      if (
        error.response &&
        error.response.status === HttpResponse.WRONG_CREDENTIAL
      ) {
        toast.error(`Your email or password was wrong, please try again`, {
          theme: "dark",
        });
      } else {
        toast.error(`Error loging in: ${error}`, { theme: "dark" });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen px-4 bg-white sm:px-8 md:px-16">
      <div className="w-full max-w-md px-6 py-10 mx-auto">
        <h1 className="mb-12 text-2xl font-bold text-black text-center">
          {t("Sign in to Chat")}
        </h1>
        <form onSubmit={handleLogin}>
          <BaseInputField
            inputLabel={t("Email")}
            inputFor="email"
            inputType="text"
          />
          <BaseInputField
            inputLabel={t("Password")}
            inputFor="password"
            inputType="password"
          />

          <button className="mt-12 text-sm font-medium text-custom-blue">
            {t("Forgot password?")}
          </button>

          <div className="flex flex-col pb-4 mt-8 space-y-4 w-full">
            <BaseButton
              text={t("Sign in")}
              className="bg-custom-black hover:bg-custom-darker-black text-white"
              isLoading={isLoading}
              buttonType="submit"
            />
            <Link href={Routes.SIGN_UP.path}>
              <BaseButton
                text={t("Go back")}
                className="bg-white hover:bg-darker-white text-black"
              />
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

Login.getLayout = function noLayout(page: ReactElement) {
  return page;
};

export default Login;

export async function getServerSideProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["login"])),
    },
  };
}
