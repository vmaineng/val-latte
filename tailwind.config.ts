import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        floatUp: {
          '0%': {
            bottom: '-50px',
            opacity: '0',
            transform: 'translateX(0) rotate(0deg) scale(1)',
          },
          '10%': {
            opacity: '1',
          },
          '50%': {
            opacity: '1',
            transform: 'translateX(calc(var(--tw-translate-x, 0) * 0.5)) rotate(180deg) scale(1.1)',
          },
          '90%': {
            opacity: '0.8',
          },
          '100%': {
            bottom: '110vh',
            opacity: '0',
            transform: 'translateX(var(--tw-translate-x, 50px)) rotate(360deg) scale(0.8)',
          },
        },
        fadeIn: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        floatUp: 'floatUp forwards',
        fadeIn: 'fadeIn 0.5s ease-out',
      },
    },
  },
  plugins: [],
};

export default config;