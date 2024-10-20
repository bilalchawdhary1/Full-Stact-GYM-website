import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // Adjust this based on where you're hosting the app
  plugins: [react()],
})
