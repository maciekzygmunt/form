/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0694cc',
        secondary: '#003973',
        tertiary: '#2bb7e2',
      },
    },
  },
  plugins: [],
};
