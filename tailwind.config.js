/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
   darkMode: 'media',
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./components/**/*.{html,tsx,js}",
    "public/*.html",
  ],
  theme: {
    screens: {
      xs: "670px",
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
