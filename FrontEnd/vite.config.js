import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Output folder for production build
    sourcemap: true, // Optional: generate source maps
  },
});
