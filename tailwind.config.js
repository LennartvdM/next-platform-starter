/**  tailwind.config.js  – adds `portrait:` & `landscape:` variants */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: { extend: {} },
  plugins: [
    function ({ addVariant }) {
      addVariant('portrait',  '@media (orientation: portrait)');
      addVariant('landscape', '@media (orientation: landscape)');
    },
  ],
};
