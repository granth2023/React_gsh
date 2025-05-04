module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}", "./public/index.html"],
  darkMode: "media",
  theme: {
    extend: {
      keyframes: {
        slowspin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        updown: {
          "0%": { transform: "translateY(-5px)" },
          "50%": { transform: "translateY(15px)" },
          "100%": { transform: "translateY(-5px)" },
        },
      },
      animation: {
        slowspin: "slowspin 20s linear infinite",
        updown: "updown 2s ease-in-out infinite alternate",
      },
      fontFamily: {
        //roadway: ["roadway", "sans-serif"],
        courier: ['"Courier New"', 'Courier', 'monospace'],
        gothic: ["gothic", "serif"],
        SnellRoundhand: ["Snell Roundhand", "serif"],
        "SnellRoundhand-Bold": ["Snell Roundhand Bold", "serif"],
      },
      fontWeight: {
        regular: 400,
        bold: 700,
      },
    },
  },
  plugins: [],
};
