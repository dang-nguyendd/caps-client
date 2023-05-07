import { useRouter } from "next/router";

import en from "public/locales/en";
import vi from "public/locales/vi";

const useTrans = () => {
  const { locale } = useRouter();

  const trans = locale === "en" ? en : vi;

  return trans;
};

export default useTrans;
