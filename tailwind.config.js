/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#12b2a6",
          dark: "#0e8c82", // Darker shade for hover states
        },
        secondary: "#8b5cf6", // Example purple
      }
    },
  },
  plugins: [],
}
