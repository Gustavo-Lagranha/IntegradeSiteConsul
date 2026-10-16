/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#048ba8",
          light: "#08a9cc",
          dark: "#036f87",
          deep: "#02495c",
        },
      },
    },
  },
  plugins: [],
};
