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
        "c-primary": "#1fab89",
        "c-secondary": "#62d2a2",
        "c-tertiary": "#9df3c4",
        "c-quarternary": "#d7fbe8",
      },

      fontFamily: {
        "f-primary": "'Poppins', sans-serif",
      },
    },
  },
  plugins: [],
};
