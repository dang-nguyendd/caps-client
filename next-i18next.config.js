module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: ["vi"],
  },
  localePath:
    typeof window === "undefined"
      ? require("path").resolve("./public/locales")
      : "/public/locales",
};
