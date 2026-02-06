//tailwind.config.ts

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        inpsyte: {
          navy: "#0B2A55",
          teal: "#56C4BE",
          tealDark: "#2AA9A2",
          slate: "#5B6675",
          fog: "#F5F7FA",
        },
        tealy: "#56C4BE",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
