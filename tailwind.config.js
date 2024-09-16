/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
      "./src/components/contents/**/*.{html,js,jsx}",
      "./src/components/**/*.{html,js,jsx}",
      "./src/**/*.{html,js, jsx}"
    ],
    theme: {
      extend: {
        colors: {
          "bg-white-200": "#e2e8f0"
        }
      },
    },
    plugins: [],
  }