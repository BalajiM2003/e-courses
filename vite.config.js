import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({

  plugins: [react()],
  base: "/e-courses/",
  build: {
    outDir: 'build', // Output directory for GitHub Pages
  },
})
