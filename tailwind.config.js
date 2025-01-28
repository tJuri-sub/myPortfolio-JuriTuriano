/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "portfolio-primary": "#293249",
        "portfolio-secondary": "#69656f",
        "portfolio-accent": "#aca1a1",
        "portfolio-highlight": "#ded2cf",
        "portfolio-light": "#ffffff",
        "portfolio-dark": "#121212",
      },
      fontFamily: {
        quicksand: "Quicksand",
      },
    },
  },
  plugins: [],
};
