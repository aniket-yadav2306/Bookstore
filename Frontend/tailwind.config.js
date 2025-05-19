/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,html}", // adjust as needed
  ],
  darkMode:"class",
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"], // or your custom themes
    defaultTheme: "light",     // 👈 sets light as the default
  },
};
