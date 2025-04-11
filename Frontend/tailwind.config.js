const flowbite = require("flowbite-react/tailwind");

module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,tsx}",
    flowbite.content()
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "Helvetica", "Arial", "Lucida", "sans-serif"],
      },
      colors: {
        primary: "#00b2ff",
      },
      keyframes: {
        fadeTop: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeTop: 'fadeTop 1s cubic-bezier(.77,0,.175,1) both',
      },
    },
  },
  plugins: [
    flowbite.plugin()
  ],
}
