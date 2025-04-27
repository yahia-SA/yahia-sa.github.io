/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: 'var(--primary-light)',
          dark: 'var(--primary-dark)',
        },
        secondary: {
          light: 'var(--secondary-light)',
          dark: 'var(--secondary-dark)',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        arabic: ['Cairo', 'sans-serif'],
      },
      boxShadow: {
        'custom-light': '0 0 20px rgba(0, 0, 0, 0.1)',
        'custom-dark': '0 0 20px rgba(255, 255, 255, 0.1)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'fadeIn': 'fadeIn 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
}