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
    target: 'es2020',
    cssCodeSplit: true,
    assetsInlineLimit: 4096,
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      output: {
        // HTTP/2 optimized chunking strategy
        manualChunks(id) {
          // Core vendor chunks - smaller for HTTP/2 multiplexing
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'react-vendor';
            }
            if (id.includes('react-router')) {
              return 'router-vendor';
            }
            if (id.includes('framer-motion')) {
              return 'animation-vendor';
            }
            if (id.includes('lucide-react')) {
              return 'icons-vendor';
            }
            if (id.includes('react-helmet')) {
              return 'seo-vendor';
            }
            return 'vendor';
          }
          
          // SEO components for HTTP/2 parallel loading
          if (id.includes('/seo/')) {
            return 'seo-components';
          }
          
          // Blog chunks - optimized for HTTP/2
          if (id.includes('/blog/')) {
            if (id.includes('OrangeCounty') || id.includes('DebtSettlement')) {
              return 'blog-debt-settlement';
            }
            if (id.includes('Tax') || id.includes('Legal')) {
              return 'blog-tax-legal';
            }
            if (id.includes('Credit') || id.includes('Medical')) {
              return 'blog-debt-types';
            }
            return 'blog-general';
          }
          
          // City pages - separate chunk for parallel loading
          if (id.includes('DebtSettlement.jsx') && !id.includes('OrangeCountyHub')) {
            return 'city-pages';
          }
          
          // UI components chunk
          if (id.includes('/ui/')) {
            return 'ui-components';
          }
          
          // Other components
          if (id.includes('/components/')) {
            return 'components';
          }
        },
        // HTTP/2 friendly file naming
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      },
    },
  }
}) 