/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  screens: {
    'sm': '640px',   // Small devices (landscape phones, 576px and up)
    'md': '768px',   // Medium devices (tablets, 768px and up)
    'lg': '1024px',  // Large devices (desktops, 1024px and up)
    'xl': '1280px',  // Extra large devices (large desktops, 1280px and up)
  },
}

