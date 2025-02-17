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
      },
      boxShadow: {
        "custom-light": "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;", // Light shadow
        "custom-dark": "0 10px 15px rgba(0, 0, 0, 0.3)", // Dark shadow
        "neon-blue": "0 0 10px rgba(0, 115, 255, 0.8)", // Neon blue glow
        "inner-soft": "inset 5px 5px 10px rgba(0, 0, 0, 0.2)", // Inner shadow
      },
    },
  },
  plugins: [],
} satisfies Config;
