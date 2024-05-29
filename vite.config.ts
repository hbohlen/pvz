import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true, // Enable source maps for better debugging in development
    minify: 'esbuild', // Use esbuild for faster builds, tweak as per your preference
  },
  server: {
    port: 3000, // Set a specific port for development (optional)
    strictPort: true, // If the port is occupied, Vite will exit instead of trying another port
    open: true, // Automatically open the app in the browser on server start
  },
  resolve: {
    alias: {
      // Define aliases for imports (if needed)
      '@components': '/src/components',
      '@utils': '/src/utils',
      // More aliases can be added as per the project structure
    },
  },
  esbuild: {
    // Include any necessary esbuild plugin options or settings
  },
});
