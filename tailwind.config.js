/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "ibmMono": "IBM Plex Mono"
      },
      screens: {
        sm: '430px'
      }
    },
  },
  plugins: [],
}