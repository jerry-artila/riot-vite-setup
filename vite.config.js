import { defineConfig } from 'vite'
import riot from 'rollup-plugin-riot'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    riot(), 
    tailwindcss()
  ],
  build: { 
    minify: 'esbuild',
    target: 'esnext'
  }
})