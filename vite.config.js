import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Enable React's fast refresh for development
      jsxRuntime: 'automatic',
      babel: {
        // Ensure that React files are processed correctly
        plugins: [
        ],
      },
    }),
  ],
  optimizeDeps: {
    include: [
      '@radix-ui/react-portal',
      '@radix-ui/react-tooltip',
      '@radix-ui/react-dismissable-layer',
      '@radix-ui/react-popper',
      '@radix-ui/react-presence',
    ],
  },
  build: {
    rollupOptions: {
      // Ensure proper handling of ESM dependencies
      output: {
        manualChunks: {
          radix: [
            '@radix-ui/react-portal',
            '@radix-ui/react-tooltip',
            '@radix-ui/react-dismissable-layer',
            '@radix-ui/react-popper',
            '@radix-ui/react-presence',
          ],
        },
      },
    },
  },
});
