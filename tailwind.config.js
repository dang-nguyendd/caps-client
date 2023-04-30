module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      backgroundColor: {
        'primary': '#f97316',
        'white': '#ffffff',
      },
      textColor: {
        'black': '#000000',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}