/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        main: "#1B1725",
        mainShade: "#3B3545",
        addShade: "#372F4B",
        sandish: "#8C7EA0",
        wheat:"#F6E2B6",
        greenNew:"#37897A",
        bgNew:"#292929",
        bgNewShade:"#1B1B1B",
        grayNew:"#8FB6B0",
      },
      fontFamily:{
        niceFont:['Lora'],
        niceFontSec:['Merriweather'],
        poppinsFont:['Poppins'],
      },
      screens:{
        'mob1': '385px',
        'mob2': '450px',
        'mob3': '540px'
      },
      spacing: {
        '100': '28rem',
        '110': '36rem',
        '90': '22rem',
        '18': '4.5rem',
      }
    },
  },
  plugins: [],
}

// EFCC80 F2D492 sandish #38E4AE main #282A3E mainShade #383A57
// MAIN - 1B1725