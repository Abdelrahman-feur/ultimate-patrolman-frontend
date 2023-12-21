import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      "back-color": "var(--back-color)",
      "nav-color": "#777",
      "btn-primary": "#2B6DE7",
      white: "white",
      "footer-bg": "#0E1422",
      gray: "#777777",
      lightGray: "#C8C8C9",
      popupbackground: "#1C2538",
      red: "#EE4540",
      llGray: "#ADADAD",
      lgray: "#F0F3FA",
      carosuelbg: "#0D1322",
      correct: "#81C73E",
      cardbg: "#1C263E",
    },
    fontFamily: { Poppins: ["poppins"] },
  },
  plugins: [require("daisyui")],
};
export default config;
