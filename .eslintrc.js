module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  plugins: ["@typescript-eslint", "prettier"],
  extends: ["prettier", "next/core-web-vitals", "next"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        htmlWhitespaceSensitivity: "css",
        semi: true,
        endOfLine: "auto",
        singleQuote: false,
      },
    ],
  },
};
