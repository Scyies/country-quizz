/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.tsx'],
  theme: {
    extend: {
      backgroundImage: {
        bgImage: 'url("/background.png")',
      },
      gridTemplateColumns: {
        alternative: '1fr, 3fr, 1fr',
      },
      colors: {
        white: '#f2f2f2',
        blue: {
          900: '#2f527b',
          800: '#1d355d',
          500: '#6066d0',
        },
        yellow: {
          500: '#f9a826',
        },
        red: {
          500: '#ea8282',
        },
        green: {
          500: '#60bf88',
        },
      },
    },
  },
  plugins: [],
};
