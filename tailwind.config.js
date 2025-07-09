/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        md: "769px",
        xl: "1221px",
      },
      fontFamily: {
        sans: ["Arial", "Helvetica", "sans-serif"],
      },
      colors: {
        background: "rgba(var(--background))",
        color: "rgba(var(--color))",
      },
    },
  },
  plugins: [],
}
