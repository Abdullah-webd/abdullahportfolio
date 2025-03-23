import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  
  plugins: [react(),tailwindcss(),],
  build: {
    chunkSizeWarningLimit: 1600, // Increase the size limit (default is 500)
  },
})
