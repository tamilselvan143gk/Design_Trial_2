/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js}",
  ],
  theme: {
    extend: {
      colors: {
        'white-smoke': '#f5f5f5',
        'gray-tundora': '#4e4e4e',
        'maily-blue': '#0078ff'
      }
    },
  },
  plugins: [],
}