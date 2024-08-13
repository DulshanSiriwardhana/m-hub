/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        maxWidth: {
          boundary: '1920px'
        },
        colors: {
          dark: '#000000',
          neardark: '#CF0A0A',
          nearlight: '#DC5F00',
          light: '#EEEEEE'
        },
        screens: {
          "special": "2150px",
        }
        
      },
    },
    plugins: [],
  }