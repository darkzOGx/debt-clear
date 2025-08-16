import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: true,
    port: 3000,
    open: true
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx', '.json']
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
  build: {
    sourcemap: false,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Vendor chunks
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) {
              return 'react-vendor';
            }
            if (id.includes('framer-motion')) {
              return 'animation-vendor';
            }
            if (id.includes('lucide-react')) {
              return 'icons-vendor';
            }
            return 'vendor';
          }
          
          // Split blog pages into smaller chunks
          if (id.includes('/blog/')) {
            if (id.includes('OrangeCounty') || id.includes('DebtSettlement')) {
              return 'blog-debt-settlement';
            }
            if (id.includes('Tax') || id.includes('Legal')) {
              return 'blog-tax-legal';
            }
            if (id.includes('Homestead') || id.includes('Property')) {
              return 'blog-property';
            }
            return 'blog-general';
          }
          
          // City pages chunk  
          if (id.includes('DebtSettlement.jsx') && !id.includes('OrangeCountyHub')) {
            return 'city-pages';
          }
          
          // Components chunk
          if (id.includes('/components/')) {
            return 'components';
          }
        },
      },
    },
    chunkSizeWarningLimit: 500,
    cssCodeSplit: true,
    assetsInlineLimit: 4096,
    target: 'es2015',
  }
}) 