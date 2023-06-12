/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "mi-color": "#3a0000",
      },
      animation: {
        "slide-in-right": "slide-in-right 2s ease-out forwards",
        "slide-in-right4s": "slide-in-right 4s ease-out forwards",
        "slide-in-right5s": "slide-in-right 5s ease-out forwards",
      },
      keyframes: {
        "slide-in-right": {
          "0%": {
            transform: "translateX(-60%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [],
};
