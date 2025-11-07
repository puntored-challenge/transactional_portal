import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://ec2-13-222-134-242.compute-1.amazonaws.com:8080',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
