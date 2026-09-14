/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'claimm-red': '#E30613',
        'claimm-beige': '#F5F0E8',
        'claimm-dark': '#1A1A1A',
        'claimm-card': '#EEEBE4',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '4px',
        md: '6px',
      },
    },
  },
  plugins: [],
}
