/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "welcome-1": "url('/images/slide/slider-bg-4.jpg')",
        "welcome-2": "url('/images/slide/slider-bg-3.jpg')",
        "welcome-3": "url('/images/slide/welcome-3.jpg')",
      },
      width: {
        "2px": "2px",
        68: "270px",
        400: "400px",
        450: "450px",
        500: "500px",
        550: "550px",
        600: "600px",
        700: "700px",
      },
      height: {
        68: "270px",
        400: "400px",
        450: "450px",
        500: "500px",
        550: "550px",
        600: "600px",
        700: "700px",
      },
      colors: {
        "web-yellow": "#FFC30C",
        "web-blue": "rgb(30 58 138)",
      },
      fontSize: {
        xxs: "10px",
      },
    },
  },
  plugins: [],
};
