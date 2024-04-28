/** @type {import('tailwindcss').UserConfig} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#388E3C",
        secondary: "#8BC34A",
        tertiary: "#DDEEDF",
        quaternary: "#F2F9F1",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        NavBar: ["ui-serif", "Georgia"],
        mono: ["ui-monospace", "SFMono-Regular"],
        display: ["Oswald", "Oswald"],
        body: ["Open Sans"]
      },
    },
  },
  plugins: [],
};
