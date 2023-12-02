/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      backgroundImage: {
        'footer-bg': "url('footer-bg.jpg')",
      },
      animation: {
        jump: 'jump 2s infinite',
        wiggle: 'wiggle 1s ease-in-out infinite',
        pulse: 'pulse 3s infinite',
        rotate: 'rotate-y 3s',
        hero: 'jump infinite 5s ease-in',
      },
      keyframes: {
        jump: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(0)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
        fontFamily: {
          serif: ['ui-serif', 'Cambria'],
        },
      },
    },
  },
  daisyui: {
    themes: ['coffee'],
  },
  plugins: [require('daisyui')],
};
