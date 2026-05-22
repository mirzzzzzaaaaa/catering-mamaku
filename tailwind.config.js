/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mamaku: {
          cream: '#fdfbf7',
          orange: '#d97706',
          green: '#15803d',
          brown: '#78350f',
          white: '#ffffff',
          dark: '#1e293b'
        }
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      }
    }
  },
  plugins: [],
}
