/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%': { transform: 'rotate(0deg)' },
          '33%': { transform: 'rotate(6deg)' },
          '66%': { transform: 'rotate(12deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        pop: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.3)' },
          '100%': { transform: 'scale(1)' },
        }
      },
      animation: {
        wiggle: 'wiggle 0.5s ease-in-out infinite',
        pop: 'pop 0.2s ease-in-out',
      }
    }
  },
  plugins: [],
}