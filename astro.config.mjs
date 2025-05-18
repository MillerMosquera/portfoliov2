// @ts-check
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import svgr from 'vite-plugin-svgr';


// https://astro.build/config
export default defineConfig({
  output: 'server',
  prefetch: true,
  vite: {
    plugins: [tailwindcss(), svgr()],
  },
  experimental: {
    svg: true
  },
  site: 'https://miller-mosquera.vercel.app/',
});