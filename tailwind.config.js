/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        barlow: ["barlow", "sans-serif"],
        fraucesBold: ["frauces-bold", "sans-serif"],
        fraucesBlack: ["frauces-black", "sans-serif"],
      },
      colors: {
        "soft-red": "hsl(7, 99%, 70%)",
        "dark-yellow": "hsl(51, 100%, 49%)",
        "dark-blue": "hsl(198, 62%, 26%)",
        "dark-cyan1": "hsl(167, 40%, 24%)",
        "dark-cyan2": "hsl(168, 34%, 61%)",
        "dark-cyan3": "hsl(168, 34%, 41%)",
        "desaturated-blue": "hsl(212, 27%, 19%)",
        "grayish-blue1": "hsl(213, 9%, 39%)",
        "grayish-blue2": "hsl(232, 10%, 55%)",
        "grayish-blue3": "hsl(210, 4%, 67%)",
      },
      backgroundImage: {
        headerMobile: "url('../images/mobile/image-header.jpg')",
        headerDesktop: "url('../images/desktop/image-header.jpg')",
        graphicMobile: "url('../images/mobile/image-graphic-design.jpg')",
        photographyMobile: "url('../images/mobile/image-photography.jpg')",
        graiphicDesktop: "url('../images/desktop/image-graphic-design.jpg')",
        photographyDesktop: "url('../images/desktop/image-photography.jpg')",
      },
      screens: {
        "3xl": "1440px",
      },
    },
  },
  plugins: [],
};
