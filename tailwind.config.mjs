/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#faf6f1',
          100: '#f3e8db',
          200: '#e6d0b5',
          300: '#d4b189',
          400: '#c39264',
          500: '#b57b4a',
          600: '#9a633c',
          700: '#7d4e33',
          800: '#66412e',
          900: '#553828',
          950: '#2e1c14',
        },
        accent: {
          50: '#f6f7f9',
          100: '#eceef2',
          200: '#d5dae3',
          300: '#b0b9ca',
          400: '#8593ab',
          500: '#667690',
          600: '#515e77',
          700: '#434d60',
          800: '#3a4251',
          900: '#333946',
          950: '#22262f',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
