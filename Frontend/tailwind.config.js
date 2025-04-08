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
    },
  },
  plugins: [
    flowbite.plugin()
  ],
}
