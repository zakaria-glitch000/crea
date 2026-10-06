/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Sora', 'Inter', 'sans-serif'],
      },
      colors: {
        ink: {
          950: '#FFFFFF',
          900: '#F7F9FC',
          800: '#FFFFFF',
          700: '#F1F5F9',
          600: '#E2E8F0',
          500: '#64748B',
        },
        brand: {
          50: '#EEF6FF',
          100: '#D9EBFF',
          200: '#BCD9FF',
          300: '#8EC1FF',
          400: '#599DFF',
          500: '#2E7BFF',
          600: '#175EE0',
          700: '#1348B8',
          800: '#163C95',
          900: '#173778',
        },
        accent: {
          400: '#22D3EE',
          500: '#06B6D4',
          600: '#0891B2',
        },
      },
      fontSize: {
        '5xl': ['3.5rem', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        '6xl': ['4.5rem', { lineHeight: '1.02', letterSpacing: '-0.03em' }],
        '7xl': ['5.5rem', { lineHeight: '1.0', letterSpacing: '-0.04em' }],
      },
      animation: {
        'marquee': 'marquee 35s linear infinite',
        'float-slow': 'floatSlow 8s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.7' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
    },
  },
  plugins: [],
};
