/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#b8b5d1", // Lighter, more readable gray-purple
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f5f5f7", // Softer white
        "text-primary": "#ffffff", // Pure white for main text
        "text-secondary": "#c8c6d9", // Lighter secondary text
        "text-muted": "#9d9bb3", // Muted text for less important info
        "accent-purple": "#a78bfa", // Softer purple accent
        "accent-blue": "#60a5fa", // Softer blue accent
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
