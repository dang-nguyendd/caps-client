module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: true,
  theme: {
    extend: {
      backgroundColor: {
        primary: "#f97316",
        white: "#ffffff",
      },
      textColor: {
        black: "#000000",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss-animate")],
};
