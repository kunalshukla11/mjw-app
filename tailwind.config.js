/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-mantine-color-scheme="dark"]'],
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  corePlugins: {},
  theme: {
    extend: {},
  },
  plugins: [],
};
