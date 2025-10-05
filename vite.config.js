import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Use relative base so built asset URLs work behind Vercel rewrites
export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})


