import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "my-dark-green": "#004D61",
        "my-light-green": "#E4EDE3",
        "my-green": "#47A138",
        "my-red": "#FF5031",
        "my-blue": "#004D61",
        "my-gray": "#767676",
        "my-gray-box": "#CBCBCB",
        "my-light-gray": "#F8F8F8",
      },
      container: {
        screens: {
          sm: "360px",
          md: "720px",
          lg: "1200px",
        },
        padding: {
          sm: "1.5rem",
          md: "5rem",
          lg: "1.5rem",
        },
      },
    },
    screens: {
      sm: "360px",
      md: "720px",
      lg: "1200px",
      xl: "1920px",
    },
  },
  plugins: [],
};
export default config;
