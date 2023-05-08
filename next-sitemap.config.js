const siteUrl =
  process.env.SITE_URL || "https://main.d2vjjvrpmy45q5.amplifyapp.com/";

/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl,
  generateRobotsTxt: true,
  changefreq: "weekly",
};

module.exports = config;
