import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true, // Enable source maps for production builds
    minify: 'esbuild', // Use esbuild for faster builds, tweak as per your preference
  },
  server: {
    port: 3000, // Set a specific port for development (optional)
    strictPort: true, // If the port is occupied, Vite will exit instead of trying another port
    open: true, // Automatically open the app in the browser on server start
  },
  resolve: {
    alias: {
      '@assets': '/src/assets',
      '@components': '/src/components',
      '@ecs': '/src/ecs',
      '@hooks': '/src/hooks',
      '@scenes': '/src/scenes',
      '@styles': '/src/styles',
      '@utils': '/src/utils',
    },
  },
  esbuild: {
    sourcemap: true, // Ensure esbuild generates source maps
  },
});
