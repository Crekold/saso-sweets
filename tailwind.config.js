/** @type {import('tailwindcss').Config} */
export default {
  content: [ './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',],
  theme: {
    extend: {fontFamily: {
      sans: ['Pacifico', 'cursive'],
      pacifico: ['Pacifico', 'cursive'],
    },
    colors: {
      brandLightGreen: '#E7EEC4',
      brandTeal: '#66C0B6',
      brandPink: '#DB8CBB',
      brandYellow: '#FCBC08',
      brandGreen: '#9DC86D',
    },
  },
  },
  plugins: [],
}

