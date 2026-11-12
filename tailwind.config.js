/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Fraunces"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        parchment: '#FAF5EB',
        terracotta: '#C84B31',
        cobalt: '#1E3A5F',
        saffron: '#E8A838',
        olive: '#4A6B4E',
      },
    },
  },
  plugins: [],
};
