import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: '#050816',
          soft: '#080B14',
          raised: '#0C1020',
        },
        ink: {
          DEFAULT: '#F6F8FC',
          soft: '#A5AEC4',
          muted: '#727C93',
          faint: '#4A5268',
        },
        accent: {
          DEFAULT: '#4F7CFF',
          soft: '#7FA0FF',
          deep: '#2E5AE0',
        },
        violet: {
          DEFAULT: '#7C5CFF',
          soft: '#A08CFF',
        },
        hairline: 'rgba(255,255,255,0.08)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '7.5xl': ['5.25rem', { lineHeight: '1', letterSpacing: '-0.035em' }],
      },
      maxWidth: {
        shell: '1200px',
        prose: '46rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        card: '0 1px 0 0 rgba(255,255,255,0.05) inset, 0 20px 50px -20px rgba(0,0,0,0.8)',
        lift: '0 1px 0 0 rgba(255,255,255,0.07) inset, 0 40px 80px -30px rgba(0,0,0,0.9)',
        glow: '0 0 0 1px rgba(79,124,255,0.22), 0 24px 60px -24px rgba(79,124,255,0.55)',
        panel: '0 60px 140px -40px rgba(0,0,0,0.95), 0 0 0 1px rgba(255,255,255,0.06)',
      },
      backgroundImage: {
        'sheen': 'linear-gradient(180deg, rgba(255,255,255,0.055) 0%, rgba(255,255,255,0.015) 45%, rgba(255,255,255,0) 100%)',
        'accent-line': 'linear-gradient(90deg, transparent, rgba(79,124,255,0.55), rgba(124,92,255,0.55), transparent)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate3d(0,0,0)' },
          '50%': { transform: 'translate3d(0,-14px,0)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translate3d(0,0,0)' },
          '50%': { transform: 'translate3d(0,-8px,0)' },
        },
        drift: {
          '0%, 100%': { transform: 'translate3d(0,0,0) scale(1)' },
          '50%': { transform: 'translate3d(2%,-3%,0) scale(1.06)' },
        },
        sweep: {
          '0%': { transform: 'translateX(-120%)' },
          '100%': { transform: 'translateX(220%)' },
        },
        pulseRing: {
          '0%': { transform: 'scale(0.82)', opacity: '0.55' },
          '70%': { transform: 'scale(1.25)', opacity: '0' },
          '100%': { transform: 'scale(1.25)', opacity: '0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        barRise: {
          '0%': { transform: 'scaleY(0.15)' },
          '100%': { transform: 'scaleY(1)' },
        },
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        'float-slow': 'floatSlow 9s ease-in-out infinite',
        drift: 'drift 18s ease-in-out infinite',
        sweep: 'sweep 3.5s ease-in-out infinite',
        'pulse-ring': 'pulseRing 3s cubic-bezier(0.4,0,0.2,1) infinite',
        marquee: 'marquee 42s linear infinite',
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
