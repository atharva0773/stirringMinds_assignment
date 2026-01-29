import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#EAEFEF",
        surface: "#BFC9D1",
        primary: "#25343F",
        accent: "#FF9B51",
      },
    },
  },
  plugins: [],
};

export default config;
