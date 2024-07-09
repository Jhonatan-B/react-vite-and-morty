import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://Jhonatan-B.github.io/react-vite-and-morty/",
  plugins: [react()],
})
