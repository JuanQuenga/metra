/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      animation: {
        rainbow: "rainbow 15s ease infinite",
      },
      keyframes: {
        rainbow: {
          "0%": {
            "background-size": "600% 600%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "600% 600%",
            "background-position": "right center",
          },
          "100%": {
            "background-size": "600% 600%",
            "background-position": "left center",
          },
        },
      },
      fontFamily: {
        metra: ["Monoton", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        rainbow:
          "linear-gradient(90deg,#e11d48 0%,#ea580c 20%,#ca8a04 40%,#16a34a 60%,#2563eb 80%,#7c3aed 100%)",
      },
    },
  },
  plugins: [],
};
