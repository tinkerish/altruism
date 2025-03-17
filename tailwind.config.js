/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust according to your file types
  ],
  theme: {
    extend: {
      screens: {
        'xsm': '540px',
        'xxsm': '480px',
        'xxxsm': '360px',
        'xxxxsm': '240px',
        'xlg': '896px',
        'xxl': "1160px" 
      },
      keyframes: {
        customPulse: {
            '0%': { transform: 'scale(0.8)' },
            '100%': { transform: 'scale(1)' },
        },
        elongateSpin: {
          "0%": {
            transform: "rotate(0deg)",
            strokeDasharray: "0 360"
          },
          "50%": {
            transform: "rotate(180deg)",
            strokeDasharray: "180 360" /* Elongating the segment */
          },
          "100%": {
            transform: "rotate(360deg)",
            strokeDasharray: "360 360" /* Full circle */
          }
        }
      },
      animation: {
        customPulse: 'customPulse 1s infinite linear alternate',
        customAnimatePulse: "custom-pulse 2s ease-in-out", /* 1s duration, ease-in-out easing, 1 iteration */
        customSpin: "elongateSpin 2s linear infinite",
      },
      backgroundImage:{
        'custom-bg': 'url("/src/assets/food.png")'
      },
      fontFamily:{
        'merri':['Merriweather', 'serif'],
        'itim':["Itim", "serif"],
        'garamond':["Cormorant Garamond", "serif"],
      }
    },
  },
  plugins: [],
}
