/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        linen: '#F5F0E8',
        cream: '#FDFAF4',
        sage: '#5C7A5E',
        forest: '#2D4A2F',
        terra: '#C4714A',
        cool: '#8A9BAD',
        text: '#2C2416',
        'text-soft': '#7A6E5F',
        amber: '#F5E6C8',
        alt: '#EEE8DC',
      },
      fontFamily: {
        display: ['Lora', 'Georgia', 'serif'],
        hand: ['Caveat', 'cursive'],
        body: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        card: '14px',
        pill: '999px',
      },
      boxShadow: {
        soft: '0 4px 16px rgba(44, 36, 22, 0.08)',
        card: '0 2px 8px rgba(44, 36, 22, 0.06)',
      },
      transitionDuration: {
        soft: '350ms',
      },
    },
  },
  plugins: [],
}
