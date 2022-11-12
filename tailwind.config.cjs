/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      animation: {
        rainbow: "rainbow 15s ease",
      },
      keyframes: {
        rainbow: {
          "0%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "center center",
          },
          "100%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
      fontFamily: {
        metra: ["Monoton", "sans-serif"],
        antonio: ["Antonio", "sans-serif"],
      },
      backgroundImage: {
        abstract:
          "url('https://static.vecteezy.com/system/resources/previews/007/229/317/original/rainbow-gradient-banner-free-vector.jpg')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        rainbowGradient:
          "linear-gradient(90deg,#e11d48 0%,#ea580c 20%,#ca8a04 40%,#16a34a 60%,#2563eb 80%,#7c3aed 100%)",
        rainbow:
          "linear-gradient(to right, red, red 16%, orange 16%, orange 32%, yellow 32%, yellow 48%, green 48%, green 64%, blue 64%, blue 80%, purple 80%, purple)",
      },
    },
  },
  plugins: [],
};
