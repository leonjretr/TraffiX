/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        main: "#282A3E",
        mainShade: "#383A57",
        sandish: "#38E4AE",
        wheat:"#F6E2B6"
      },
      fontFamily:{
        niceFont:['Lora'],
        niceFontSec:['Merriweather'],
        poppinsFont:['Poppins'],
      }
    },
  },
  plugins: [],
}

// EFCC80 F2D492