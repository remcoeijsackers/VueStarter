/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{html,js}",
    "./src/components/*.{js,ts,jsx,tsx,vue}",
    "./src/views/*.{js,ts,jsx,tsx,vue}",
    "./src/views/inline/*.{js,ts,jsx,tsx,vue}",
    "./src/components/content/*.{js,ts,jsx,tsx,vue}",
    "./src/components/article/*.{js,ts,jsx,tsx,vue}",
    "./src/components/card/*.{js,ts,jsx,tsx,vue}",
    "./src/components/core/*.{js,ts,jsx,tsx,vue}",
    "./src/components/posts/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {},
  }
}
