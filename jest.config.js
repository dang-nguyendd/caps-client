const path = require("path");

const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./src",
});

/** @type {import('jest').Config} */
const customJestConfig = {
  moduleDirectories: ["node_modules", path.join(__dirname, "src")],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  testMatch: ["src/__tests__/**/*.[t]s?(x)", "**/?(*.)+(spec|test).[t]s?(x)"],
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!**/*.d.ts",
    "!**/node_modules/**",
  ],
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
};
module.exports = createJestConfig(customJestConfig);
