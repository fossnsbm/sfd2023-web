import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      black: "#010101",
      white: "#ffffff",
      gray: "#8A939E",
      yellow: "#00000",
      green: "#6ABD44",
      gradient: {
        yellow: "#F8CD37",
        green: "#6ABD44",
      },
    },
  },
  extend: {
    fontFamily: {
      mono: ['"Roboto Mono"'],
    },
  },
  plugins: [],
};
export default config;
