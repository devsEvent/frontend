/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: ["iranyekan"],
      colors: {
        dark: "#131313",
        primary: "#684FFF",
        "primary-2": "#B871FE",
        secondary: "#F1F1F1",
        "secondary-transparent": "#FFFFFF15",
        "secondary-2": "#F9F9F9",
        tomato: "#DC3545",
      },
    },
  },
  plugins: [],
};
