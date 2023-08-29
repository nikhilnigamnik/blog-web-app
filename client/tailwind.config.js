/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        boxShadow: "0 0 50px 0 rgba(29, 35, 58, 0.1)",
        bgPrimary: "#F7F8FB",
        bgSecondary: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
