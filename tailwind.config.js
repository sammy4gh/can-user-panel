module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },

    fontFamily: {
      body: ["Mulish", "sans-serif"],
      display: ["Roboto", "sans-serif"],
    },
    extend: {
      boxShadow: {
        '3xl': '0px 4px 10px rgba(0, 0, 0, 0.25)',
      },
      colors: {
        red: "#FF2E63",
        green: "#006241",
        dark: "#212325",
        "dark-light": "#91919F",
        white: "#FFFFFF",
        "off-white": "#C6CDE0",
        light: "#F1F1FA",
        grey: "#555555",
        "grey-light": "#999999",
        black: "#000000",
        blue: "#4177FF",
        "deep-blue": "#3E66FB",
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      fontSize: {
        xs: ".65rem",
        sm: ".75rem",
        tiny: ".875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": [
          "3.57rem",
          {
            lineHeight: "65px",
          },
        ],
        "6xl": "4rem",
        "7xl": "5rem",
      },
    },
  },
  plugins: [],
};
