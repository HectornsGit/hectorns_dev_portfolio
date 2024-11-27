/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cwhite: "var(--cwhite)",
        cblack: "var(--cblack)",
        cdarkpurple: "var(--cdarkpurple)",
        clightpurple: "var(--clightpurple)",
        cturquoise: "var(--cturquoise)",
        clightgreen: "var(--clightgreen)",
        cpink: "var(--cpink)",
        clightblue: "var(--clightblue)",
        cyellow: "var(--cyellow)",
      },
      fontFamily: { oswald: "Oswald", redhat: "Red Hat" },
    },
  },
  plugins: [],
};
