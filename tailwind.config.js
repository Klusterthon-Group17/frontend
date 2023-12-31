/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        Primary_main: '#03989E',
        Primary_light: '#56BABE',
        Primary_lighter: '#B1DFE1',
        Primary_dark: '#026C70',
        Primary_darker: '#014042',
        Text_main: '#FCFCFC',
        Text_dark: '#B0B0B0',
        Text_gold: '#DE9244',
        Red: '#FF4D4D',
        Dark: '#181818',
        Body: '#f5f5f5',
        Body_light: '#A6A6A6',
      },
    },
  },
  plugins: [],
};
