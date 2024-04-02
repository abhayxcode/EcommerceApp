/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      md: { max: "1024px" },
      // => @media (min-width: 768px and max-width: 1023px) { ... }},
      sm: { max: "768px" },
      // => @media (min-width: 0px and max-width: 767px) { ... }},
    },
    extend: {
      boxShadow: {
        cart: "0px 3px 15px rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [],
};
