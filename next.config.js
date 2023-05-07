const { i18n } = require("./i81n.config");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  i18n,
};

module.exports = nextConfig;
