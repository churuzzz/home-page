/** @type {import('tailwindcss').Config} */
export default {
  content: [
	"./index.html",
	"./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'steel_blue-100':'#689cca',
        'steel_blue-200':'#3e7cb1',
        'steel_blue-300':'#305f88',
        'steel_blue-400':'#1b354b',
        'steel_blue-500':'#0b151e',

      }
    },
  },
  plugins: [],
}

