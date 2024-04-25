/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'green': {
        '50': '#eafff7',
        '100': '#cdfeeb',
        '200': '#a0fadc',
        '300': '#63f2ca',
        '400': '#25e2b3',
        '500': '#00c49a',
        '600': '#00a481',
        '700': '#00836b',
        '800': '#006756',
        '900': '#005548',
        '950': '#00302a',
      },
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    extend: {

    },
  },
  plugins: [],
};
