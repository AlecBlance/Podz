/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "custom-manrope": "Manrope",
      },
      colors: {
        "custom-vibrant-blue": "#1B6AE3",
        "custom-neutrals-offwhite": "#FFF9EF",
        "custom-card-artist": "#898989",
      },
    },
  },
  plugins: [],
};
