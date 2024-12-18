/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {

    extend: {
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
        'mine': {
          '50': '#f7f8f8',
          '100': '#eeeef0',
          '200': '#d9dade',
          '300': '#b8bac1',
          '400': '#91949f',
          '500': '#747783',
          '600': '#5e616b',
          '700': '#4d4f57',
          '800': '#42434a',
          '900': '#34353a',
          '950': '#26272b',
        },

      }
    },
  },
  plugins: [],
};
