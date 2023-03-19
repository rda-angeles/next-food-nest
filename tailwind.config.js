/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "c-primary": "#006F60",
        "c-secondary": "#01907E",
        "c-tertiary": "#919190",
        "c-quarternary": "#3A3A3B",
        "c-quinary": "#62d2a2",
      },

      fontFamily: {
        "f-primary": "'Poppins', sans-serif",
      },

      gridTemplateColumns:{
        fluid: "repeat(auto-fit, minmax(20rem, 1fr))",
      }
    },
  },
  plugins: [],
};
