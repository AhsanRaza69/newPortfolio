/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      
      boxShadow: {
        'borders': 'inset 21px 21px 19px #181a1d, inset -21px -21px 19px #202225',
      },
      colors: {
        webred: "#ff014f",
        webColor: "#212428",
        darkcolor: "#878e99",
        // webgray :"##c4afde"
      },
  },
  screens: {
  'xss': '320',
  'xs': '375px',
  'sm': '565px',
   'md': '756px',
   'lg': '1320px',
   'xl': '1920px',

  }
  },
  plugins: [],
};
