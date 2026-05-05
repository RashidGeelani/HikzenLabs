import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    proxy: {
      '/api/sheet': {
        target: 'https://script.google.com',
        changeOrigin: true,
        followRedirects: true,
        rewrite: (path) =>
          path.replace(
            /^\/api\/sheet/,
            '/macros/s/AKfycby8JvG6ori9vhDBo3_XPhyv7XdfxLXe9BXy9e9IyrAbwYiIRazsbf8zYiQaMfN2nfdN/exec'
          ),
      },
    },
  },
})