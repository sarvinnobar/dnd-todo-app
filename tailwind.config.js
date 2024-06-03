/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "300px",
      },
      backgroundImage: {
        "abstract-circle": "url('/src/assets/img/multiple-orange.jpg')",
      },
      zIndex: {
        1: "1",
      },
      width: {
        column: "18.299vw",
      },
    },
    plugins: [],
  },
};
