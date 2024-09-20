/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        rdbryPrimary: {
          100: "rgba(249, 59, 29, 1)",
          200: "rgba(223, 48, 20, 1)",
        },
        rdbryShade: {
          50: "rgba(243, 243, 243, 1)",
          100: "rgba(2, 21, 38, 0.5)",
          200: "rgba(128, 138, 147, 1)",
        },
        rdbrySuccess: "rgba(69, 168, 73, 1)",
        rdbryError: "rgba(249, 59, 29, 1)",
        rdbryBorder: {
          50: "rgba(219, 219, 219, 1)",
          100: "rgba(103, 110, 118, 1)",
        },
        rdbryBackdrop: "rgba(2, 21, 38, 0.34)",
        rdbryText: {
          50: "rgba(255, 255, 255, 1)",
          100: "rgba(103, 110, 118, 1)",
          150: "rgba(53, 68, 81, 1)",
          200: "rgba(45, 54, 72, 1)",
          225: "rgba(26, 26, 31, 1)",
          250: "rgba(2, 21, 38, 0.7)",
          300: "rgba(2, 21, 38, 1)",
        },
      },
      fontFamily: {
        sans: ["MyFont", "sans-serif"],
        helve: ["Helvetica"],
      },
      fontWeight: {
        regular: 400,
        medium: 500,
        bold: 700,
      },
    },
  },
  plugins: [
    ({ addUtilities, theme }) => {
      addUtilities({
        ".filter-chip": {
          border: `1px solid ${theme("colors.rdbryBorder")}`,
          "border-radius": "15px",
          width: "fit-content",
          height: "29px",
          padding: "6px 10px",
        },
        ".tag-chip": {
          width: "90px",
          color: theme("colors.rdbryText.100"),
          "background-color": theme("colors.rdbryShade.100"),
          "border-radius": "15px",
          "line-height": "14.4px",
          padding: "6px 0",
          "text-align": "center",
          "font-size": "12px",
          "letter-spacing": "0.04em",
          "font-style": "normal",
        },
        ".card-details-text": {
          "line-height": "19px",
          "font-size": "16px",
          "letter-spacing": "0.04em",
          "font-style": "normal",
          "font-weight": theme("fontWeight.regular"),
        },
        ".custom-radio-button": {
          appearance: "none",
          width: "16px",
          height: "16px",
          border: "1px solid black",
          "border-radius": "50%",
          outline: "none",
          position: "relative",
        },
      });
    },
  ],
};
