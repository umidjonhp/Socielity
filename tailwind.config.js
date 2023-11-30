/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          xl: "1360px",
        },
      },
      colors: {
        white: {
          default: "#F6F7FD",
          1: "#FAFCFF",
          2: "#F6F7FD0,",
          3: "#E6E6E6",
          4: "#FFF"
        },
        color3: {
          default: "#666666",
          1:  "#474747",
          2: "#CACACA",
          3: "#8C8C8C",
          4: "#E6E6E6",
        },
        blue: {
          default: "#4579CB",
        },
      },
      fontFamily: {
        "segoe-ui": "Segoe UI",
      },
    },
  },
  plugins: [],
};
