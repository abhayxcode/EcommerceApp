/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "2xl": { max: "1440px" },
      xl: { max: "1280px" },
      lg: { max: "1100px" },
      md: { max: "768px" },
      sm: { max: "540px" },
    },

    extend: {
      boxShadow: {
        cart: "0px 3px 15px rgba(0, 0, 0, 0.2)",
      },
      colors: {
        primary: "#66A2E4",
        // primary: "#265e55",
        // "primary-light": "#4f9d91",
        "primary-light": "#5f5690",
      },
    },
  },
  plugins: [],
};
