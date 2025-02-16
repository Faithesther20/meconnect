/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ["./app/**/*.{js,jsx,ts,tsx}"
  content: ["./app/**/*.{js,jsx,ts,tsx}","./components/**/*.{js,jsx,ts,tsx}"],// Ensure the correct path
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "##F3F3F3",
        secondary: {
          DEFAULT: "#C40001",
          // 100: "#FF9001",
          // 200: "#FF8E01",
        },
        padding:{
          'sm':'10px'
        }
        // black: {
        //   DEFAULT: "#000",
        //   100: "#1E1E2D",
        //   200: "#232533",
        // },
        // gray: {
        //   100: "#CDCDE0",
        // },
      },
    }
  },
  plugins: [],
}

