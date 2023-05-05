/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",

  ],
  theme: {
    extend: {
      colors: {
        'org-gray': '#555555',
      },
      fontWeight: {
        'med': '550',
      },
      backgroundImage: {
        'org-logo': "url('./assets/images/logo.png')",
      }
    },
  },
  plugins: [],
}

