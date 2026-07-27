import colors from 'tailwindcss/colors'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#050816',
        panel: '#0B1120',
        indigo: { ...colors.indigo, DEFAULT: '#6366F1' },
        violet: { ...colors.violet, DEFAULT: '#8B5CF6' },
        cyan: { ...colors.cyan, DEFAULT: '#06B6D4' },
      },
      fontFamily: { display: ['Poppins', 'sans-serif'], body: ['Inter', 'sans-serif'] },
      boxShadow: { glow: '0 0 42px rgba(99,102,241,.28)', card: '0 24px 60px rgba(0,0,0,.22)' },
      backgroundImage: { grid: 'linear-gradient(rgba(148,163,184,.07) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,.07) 1px, transparent 1px)' }
    }
  },
  plugins: []
}
