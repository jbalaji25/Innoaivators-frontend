import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'
import viteCompression from 'vite-plugin-compression'
import { visualizer } from 'rollup-plugin-visualizer'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
  plugins: [
    react(),
    // Gzip compression
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
      threshold: 10240, // Only compress files larger than 10kb
      deleteOriginFile: false,
    }),
    // Brotli compression (better compression ratio)
    viteCompression({
      algorithm: 'brotliCompress',
      ext: '.br',
      threshold: 10240,
      deleteOriginFile: false,
    }),
    // Bundle analyzer (only in analyze mode)
    visualizer({
      open: false,
      filename: 'dist/stats.html',
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  assetsInclude: ['**/*.mp4', '**/*.webm', '**/*.ogg'],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    // Enable CSS code splitting
    cssCodeSplit: true,

    // Chunk size warnings
    chunkSizeWarningLimit: 1000,

    // Optimize dependencies
    commonjsOptions: {
      include: [/node_modules/],
    },

    rollupOptions: {
      output: {
        // Manual chunk splitting for better caching
        manualChunks: (id) => {
          // Vendor chunks
          if (id.includes('node_modules')) {
            // React and related libraries
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) {
              return 'vendor-react';
            }
            // Framer Motion
            if (id.includes('framer-motion')) {
              return 'vendor-framer';
            }
            // Three.js and OGL
            if (id.includes('three') || id.includes('ogl') || id.includes('postprocessing')) {
              return 'vendor-3d';
            }
            // Lottie
            if (id.includes('lottie')) {
              return 'vendor-lottie';
            }
            // Other vendors
            return 'vendor-misc';
          }

          // Component chunks
          if (id.includes('/src/components/')) {
            if (id.includes('Galaxy')) {
              return 'component-galaxy';
            }
            if (id.includes('ThreeDScrollTrigger')) {
              return 'component-scroll';
            }
            return 'components';
          }

          // Page chunks (already lazy loaded, but this ensures proper naming)
          if (id.includes('/src/pages/')) {
            const pageName = id.split('/pages/')[1]?.split('.')[0];
            if (pageName) {
              return `page-${pageName.toLowerCase()}`;
            }
          }
        },

        // Asset file naming
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name?.split('.') || [];
          const ext = info[info.length - 1];

          if (/\.(png|jpe?g|svg|gif|webp|avif)$/i.test(assetInfo.name || '')) {
            return 'assets/images/[name]-[hash][extname]';
          }
          if (/\.(woff2?|eot|ttf|otf)$/i.test(assetInfo.name || '')) {
            return 'assets/fonts/[name]-[hash][extname]';
          }
          if (/\.(mp4|webm|ogg)$/i.test(assetInfo.name || '')) {
            return 'assets/videos/[name]-[hash][extname]';
          }
          if (/\.json$/i.test(assetInfo.name || '')) {
            return 'assets/data/[name]-[hash][extname]';
          }

          return 'assets/[name]-[hash][extname]';
        },

        // Chunk file naming
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js',
      },
    },

    // Minification options
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs in production
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug'],
      },
    },

    // Source maps for debugging (disable in production for smaller builds)
    sourcemap: false,

    // Asset inlining threshold (10kb)
    assetsInlineLimit: 10240,
  },

  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
      },
    },
  },

  // Optimize deps
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
    exclude: ['@vite/client', '@vite/env'],
  },
})
