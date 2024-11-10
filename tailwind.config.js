/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'cyber-blue': '#00f6ff',
        'cyber-pink': '#ff00ff',
        'cyber-dark': '#0a0a1f',
        'cyber-darker': '#050514',
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'gradient': 'gradient 8s linear infinite',
        'spotlight': 'spotlight 2s ease infinite',
        'spin-slow': 'spin 15s linear infinite',
        'spin-slow-reverse': 'spin 12s linear infinite reverse',
        'scan': 'scan 2s linear infinite',
        'scan-horizontal': 'scan-horizontal 2s linear infinite',
        'border-flow': 'border-flow 2s linear infinite',
        'pulse-delay-100': 'pulse 2s infinite 100ms',
        'pulse-delay-200': 'pulse 2s infinite 200ms',
      },
      keyframes: {
        glow: {
          '0%': { textShadow: '0 0 10px #00f6ff, 0 0 20px #00f6ff' },
          '100%': { textShadow: '0 0 20px #00f6ff, 0 0 30px #00f6ff' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        spotlight: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        'scan-horizontal': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'border-flow': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      boxShadow: {
        'glow': '0 0 10px rgba(0,246,255,0.5)',
      },
      backgroundImage: {
        'scan-lines': 'linear-gradient(to bottom, transparent 50%, rgba(0, 246, 255, 0.05) 50%)',
      },
      utilities: {
        '.scrollbar-hide': {
          /* IE and Edge */
          '-ms-overflow-style': 'none',
          /* Firefox */
          'scrollbar-width': 'none',
          /* Safari and Chrome */
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        }
      }
    },
  },
  plugins: [],
};