/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{html,js,jsx}",
    "./src/components/**/*.{html,js,jsx}",
    "./src/components/**/**/*.{html,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        "huawei-red": "#C7000B",
        "huawei-red-hover": "#D64A49",
      },
    },
  },
  plugins: [],
};
