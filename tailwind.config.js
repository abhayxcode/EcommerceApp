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
      // => @media (max-width: 660px) },
    },
    extend: {
      boxShadow: {
        cart: "0px 3px 15px rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [],
};
