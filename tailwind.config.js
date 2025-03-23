/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}","./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: '#000000', 
        secondary: '#1a1a1a', 
        light: {
          100: '#F8EDE3  ', 
          200: '#FF8C42', 
          300: 'white', 
        },
        dark: {
          100: '#262626', 
          200: 'black', 
          300: '#181818      ',
          400: '#481E14',
        },
        accent: '#ff6600', 
      },
    },
  },
  plugins: [],
};
