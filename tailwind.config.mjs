/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      backgroundImage: {
        'radial-top': 'radial-gradient(circle at top center, rgba(10, 20, 50, 0.5) 0%, rgba(5, 10, 30, 0.3) 20%, rgba(0, 0, 10, 0.1) 40%, rgba(0, 0, 0, 1) 70%)',
      },
      animation: {
        'ping': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      keyframes: {
        ping: {
          '0%': { transform: 'scale(0.95)', opacity: '0.8' },
          '70%': { transform: 'scale(1.3)', opacity: '0' },
          '100%': { transform: 'scale(0.95)', opacity: '0' },
        }
      }
    },
  },
  plugins: [],
};