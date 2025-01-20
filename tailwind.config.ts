import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-ibm-plex-sans)', 'sans-serif'],
        allerta: ['var(--font-allerta-stencil)', 'serif'],
      },
      backgroundImage: {
        gradient: "url('/static/background.png')",
      },
      colors: {
        purple: {
          951: 'rgba(79,70,229,1)',
        },
        gray: {
          951: 'hsla(0,0%,100%,0.4);',
          952: '#373b64',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
