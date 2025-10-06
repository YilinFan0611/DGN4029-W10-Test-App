module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}" , "./src/app/**/*.{js,ts,jsx,tsx,mdx}" , "./src/components/**/*.{js,ts,jsx,tsx,mdx}" , "./src/pages/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-robotoCondensed)", "var(--font-amaticSC)", "var(--font-notoSerifHK)", "cursive", "ui-sans-serif", "system-ui", "Segoe UI", "Roboto", "Helvetica", "Arial", "Apple Color Emoji", "Segoe UI Emoji"],
      },
    },
  },
  plugins: [],
};


