/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#011640',
        'primary-blue': '#0455BF',
        'secondary-blue': '#035AA6',
        'light-blue': '#0CC8F2',
        'dark-background': '#0D0D0D',
      },
    },
  },
  plugins: [],
};
