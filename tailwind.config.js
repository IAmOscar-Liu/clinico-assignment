/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Arial", "sans-serif"], // Set Arial as the default sans-serif font
      },
      colors: {
        primary: {
          DEFAULT: "rgba(4, 84, 148, 1)",
          disabled: "rgba(132, 169, 205, 1)",
        },
        secondary: {
          DEFAULT: "rgba(239, 239, 239, 1)",
        },
        highlight: {
          root: "rgba(255, 229, 154, 1)",
          direct: "rgba(183, 215, 168, 1)",
          indirect: "rgba(239, 239, 239, 1)",
        },
      },
    },
  },
  plugins: [],
};
