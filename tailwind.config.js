export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { backgroundImage: {
      'hero-bg': "url('./assets/Backgroundimg.webp')",
      'portfolio-bg': "url('./assets/Backgroundimg2.webp')"
  },
},
  },
  plugins: [],
};