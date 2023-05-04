/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // colors: {
      //   background: "#141E30",
      //   redPrimary: "#FF004D",
      //   header: "#151624",
      // },
      // backgroundImage: {
      //   noiseRPT: "url('/noiseRPT.png')",
      //   backgroundImg: "url('/backgroundUlt.png')",
      // },
      // animation: {
      //   "spin-slow": "spin 5s linear infinite",
      //   fade: "fadeIn 3.7s ease-in-out",
      //   fadeTwo: "fadeIn 3.2s ease-in-out",
      //   fadeThree: "fadeIn 2s ease-in-out",
      //   textFadeOne: "fadetext 0.5s ease-in-out",
      //   textFadeTwo: "fadetext 4s ease-in-out",
      // },
      // keyframes: (theme) => ({
      //   fadeIn: {
      //     "0%": { opacity: 0 },
      //     "90%": { opacity: 0 },
      //     "100%": { opacity: 1 },
      //   },
      //   fadetext: {
      //     "0%": { opacity: 0 },
      //     "100%": { opacity: 1 },
      //   },
      // }),
    },
  },
  plugins: [],
};

module.exports = config;
