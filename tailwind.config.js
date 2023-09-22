/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "gray-secondary": "#F1F3F5",
      "gray-primary": "#868E96",
      "gray-darker": "#343A40",

      "cyan-secondary": "#15AABF",
      "cyan-primary": "#C5F6FA",

      "red-secondary": "#FA5252",
      "red-primary": "#FFE3E3",

      "teal-secondary": "#C3FAE8",
      "teal-primary": "#12B886",

      "pink-secondary": "#FFDEEB",
      "pink-primary": "#E64980",

      "brand-secondary": "#C2F7FA",
      "brand-primary": "#208D8E",

      "grape-secondary": "#F3D9FA",
      "grape-primary": "#BE4BDB",

      "green-secondary": "#D3F9D8",
      "green-primary": "#40C057",

      "violet-secondary": "#E5DBFF",
      "violet-primary": "#7950F2",

      "lime-secondary": "#E9FAC8",
      "lime-primary": "#82C91E",

      "indigo-secondary": "#DBE4FF",
      "indigo-primary": "#4C6EF5",

      "yellow-secondary": "#FFF3BF",
      "yellow-primary": "#FAB005",

      "blue-secondary": "#D0EBFF",
      "blue-primary": "#228BE6",

      "orange-secondary": "#FFE8CC",
      "orange-primary": "#FD7E14",

      three: "rgba(0,0,0,0)",
      one: "#118C80",
      two: "#4AB7D8",
      white: "#FFFFFF",
      black: "#1E1E1E",
      br: "rgba(170, 170, 170, 1)",
      btn: "#208D8E",
    },
    fontSize: {
      "heading-l": "32pt",
      "heading-m": "28pt",
      "heading-s": "24pt",
      "heading-xs": "20pt",

      "body-xl": "24pt",
      "body-l": "20pt",
      "body-m": "16pt",
      "body-s": "14pt",
      "body-xs": "12pt",

      "bold-xl": "24pt",
      "bold-l": "20pt",
      "bold-m": "16pt",
      "bold-s": "14pt",
      "bold-xs": "12pt",
    },
    fontFamily: {
      IranYekan: ["IranYekan"],
    },
    spacing: {
      xs: "0.5rem",
      s: "1rem",
      m: "1.5rem",
      l: "2rem",
      xl: "2.5rem",
    },
    extend: {},
  },
  plugins: [],
};
