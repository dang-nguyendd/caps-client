import { ReactElement } from "react";

import {
  IconBrandFacebook,
  IconBrandGoogle,
  IconBrandTwitter,
} from "@tabler/icons-react";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import BaseButton from "@/components/shared/base/BaseButton";
import { Routes } from "@/constants/routes";

interface LoginButton {
  children: any;
  label: string;
  backgroundColor?: string;
}

const Signup = () => {
  const { t } = useTranslation("signup");

  return (
    <div className="flex justify-center items-center text-center min-h-[100vh]">
      <div className="flex gap-7 flex-col w-[inherit]">
        <h2 className="tracking-normal font-bold text-3xl mb-[40px]">
          {t("Join chat")}
        </h2>

        <SignupButton label={t("Sign in with Facebook")}>
          <IconBrandFacebook className="w-4 h-4" />
        </SignupButton>

        <SignupButton
          label={t("Sign in with Google")}
          backgroundColor="#ea4335"
        >
          <IconBrandGoogle className="w-4 h-4" />
        </SignupButton>

        <SignupButton
          label={t("Sign in with Twitter")}
          backgroundColor="#0077b5"
        >
          <IconBrandTwitter className="w-4 h-4" />
        </SignupButton>

        <div className="inline-flex items-center justify-center w-full">
          <hr className="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
          <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">
            {t("or")}
          </span>
        </div>
        <Link href={Routes.CREATE_ACCOUNT.path}>
          <BaseButton
            text={t("Create account")}
            className="bg-custom-black hover:bg-custom-darker-black text-white"
          />
        </Link>

        <label className="text-xl">
          {t("Already have account?")}{" "}
          <Link href={Routes.SIGN_IN.path}>
            <span className="text-custom-blue">{t("Sign in")}</span>
          </Link>
        </label>
      </div>
    </div>
  );
};

export default Signup;

const SignupButton = ({
  children,
  label,
  backgroundColor = "#1877f2",
}: LoginButton) => {
  return (
    <div
      className="flex leading-[30px] gap-4 w-[20rem] pl-[50px]
                border-solid border-[1px] border-black rounded-[120px] py-2"
    >
      <button
        type="button"
        data-te-ripple-init=""
        data-te-ripple-color="light"
        className="inline-block px-2 py-2 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
        style={{ backgroundColor: backgroundColor, borderRadius: "50%" }}
      >
        {children}
      </button>
      <label>{label}</label>
    </div>
  );
};

Signup.getLayout = function noLayout(page: ReactElement) {
  return page;
};

export async function getServerSideProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["signup"])),
    },
  };
}
