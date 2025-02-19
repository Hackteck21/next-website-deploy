import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customBlue: "#336aea",
        customBrown: "#808287",
        cutomBorder: "#282534",
        cutomBorder2: "#80848c",
        cutomText: "#222",
        borderLight: "#e4e7ec",
      },
      boxShadow: {
        customeBrow: "0 10px 60px rgba(0, 0, 0, 0.1)",
      },
      padding: {
        70: "70px !important",
      },
      margin: {
        20: "-20px !important",
      },
    },
  },
  plugins: [],
} satisfies Config;
