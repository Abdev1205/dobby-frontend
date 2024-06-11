/** @type {import('tailwindcss').Config} */
module.exports = {
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
      fontFamily: {
        rubik: ["var(--font-rubik)"],
        nunito: ["var(--font-nunito-sans)"]
      },
      colors: {
        primary: "#FFCC33",
        bgPrimary: "#1E1B24",
        bgSecondary: "#23202A",
        textPrimary: "#FFFFFF",
        textSecondary: "#C2C6DD",
        borderPrimary: "#2E2F31",
      },
    },
  },
  plugins: [],
};
