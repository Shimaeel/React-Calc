/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ], theme: {
    extend: {
      backgroundImage: {
        'custom-banner': "url('./src/Assets/bannerFirst.svg')",
      },
    },
  },
  plugins: [],
}

