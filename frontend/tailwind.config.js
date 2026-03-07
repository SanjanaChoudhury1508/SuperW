/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        charcoal: "#1A1A1A",
        peach: "#F7C6B6",
        lavender: "#A59CC6",
        offwhite: "#F2F2F2",
        rosegold: "#E6B7B0",
        babyPink: "#F8E6EC",
        mint: "#CFE8DF",
        sage: "#CFE3D8",
        calmBlue: "#C7D7E5",
        alertRed: "#F87171",
        safeGreen: "#6EE7B7"
      }
    }
  },
  plugins: [],
};