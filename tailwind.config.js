/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bgImage': "url('/public/stageimg.jpg')",
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
   'md': '1080px',
   'lg': '1440px',
  }
  },
  plugins: [],
};
