import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "main-color": "#000C24",
        "grad-start": "#00588A",
        "grad-via": "#001857",
        "grad-end": "#000C24",
        "sub-color": "#F4F4F4",
        black: "#000C24",
        "origin-blue": "#0038A6",
        "origin-sky-blue": "#8DB3C9",
        "win-color": "#BC0000",
        "lose-color": "#0042C3",
      },
    },
  },
  plugins: [],
};
export default config;
