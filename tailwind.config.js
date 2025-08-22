const themeData = require("./src/dataJsons/themes.json");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    // Dynamically include all theme classes from themes.json
    ...Object.values(themeData.themeClasses).flatMap((cls) =>
      cls.split(/\s+/) // split on spaces to catch each utility
    ),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}