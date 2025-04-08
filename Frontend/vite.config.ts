import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' 

export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    https: {
      key: './localhost.key',
      cert: './localhost.crt',
    },
    host: 'localhost',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), 
    },
  },
})
