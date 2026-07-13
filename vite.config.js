import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    // Raise the warning threshold — we know about the videos/images in public
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        // Split vendor libs into their own chunk so they can be cached independently
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // Heavy animation/UI libraries get their own chunk
            if (id.includes('framer-motion')) return 'framer-motion';
            if (id.includes('react-icons')) return 'react-icons';
            if (id.includes('lucide-react')) return 'lucide';
            // Everything else from node_modules → vendor chunk
            return 'vendor';
          }
        },
      },
    },
  },
});
