import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "320px",
      sm: "768px",
      md: "1024px",
      lg: "1440px",
      xl: "1536px",
    },
    extend: {
      colors: {
        // Logo Colors
        white: "#FFFFFF",
        primary1: "#000000",
        primary2: "#FFBB00",

        // Primary Button Colors
        lightYellow: "#FFCF4B",
        darkYellow: "#27AE60",

        // Secondary Button Colors
        lightGrey: "#F9F9F9",
        darkGrey: "#CEC6C6",

        // Text Colors
        textMain: "#263238",
        textSecondary: "#65624C",

        // Greys
        grey1: "#333333",
        grey2: "#4F4F4F",
        grey3: "#828282",
        grey4: "#B7B6B8",
        grey5: "#E0E0E0",

        // Background and Foreground Colors
        background: "#f9faff",
        foreground: "#171717", // Adjusted for dark mode compatibility
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        h1: "58px",
        h2: "36px",
        h3: "24px",
        h4: "20px",
        h5: "18px",
        h6: "16px",
      },
      lineHeight: {
        heading: "1.1", // For headings
      },
    },
  },
  plugins: [],
} satisfies Config;
