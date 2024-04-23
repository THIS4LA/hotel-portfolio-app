/** @type {import('tailwindcss').UserConfig} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0D9276",
        secondary: "#BBE2EC",
        tertiary: "#FFF6E9",
        quaternary: "#40A2E3",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        NavBar: ["ui-serif", "Georgia"],
        mono: ["ui-monospace", "SFMono-Regular"],
        display: ["Oswald", "Oswald"],
        body: ["Open Sans"]
      }
    },
  },
  plugins: [],
};
