/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    theme: {
      extend: {
        boxShadow: {
          'custom': '-3.5px -7px 0 0 #bbbbbb, 2.5px 6.125px 0 0 #bbbbbb, -3.5px 6.125px 0 0 #bbbbbb, 2.5px -7px 0 0 #bbbbbb'
        },
      },
    },
  },
  plugins: [],
}