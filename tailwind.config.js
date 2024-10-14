/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
   extend: {
      boxShadow: {
        'custom': '0px 0px 7.06px 0px rgba(0, 0, 0, 0.12)',
      },
      screens: {
        'xs':'344px',
        'sm': '750px',
        'md': '850px',
        'lg': '1430px',
           
      },
  },
},
  plugins: [],
}

