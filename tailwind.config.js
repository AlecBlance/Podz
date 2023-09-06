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
      height: {
        screen: ["100vh /* fallback for Opera, IE and etc. */", "100dvh"],
      },
      backgroundImage: {
        "library-header":
          "url('https://res.cloudinary.com/devbqyiud/image/upload/c_scale,w_900/v1693966926/Muzica/m9nt7okn6puz637edagy.jpg')",
      },
    },
  },
  plugins: [],
};
