import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()], // Use the React plugin for Vite
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
      '@assets': '/src/assets', // Alias for assets directory
      '@components': '/src/components', // Alias for components directory
      '@ecs': '/src/ecs', // Alias for ECS directory
      '@hooks': '/src/hooks', // Alias for hooks directory
      '@scenes': '/src/scenes', // Alias for scenes directory
      '@styles': '/src/styles', // Alias for styles directory
      '@utils': '/src/utils', // Alias for utils directory
    },
  },
  esbuild: {
    sourcemap: true, // Ensure esbuild generates source maps
  },
});
