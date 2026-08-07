import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { compression } from 'vite-plugin-compression2'

export default defineConfig({
  plugins: [
    react(),
    // Pre-generate .br/.gz variants at build time so hosts that serve pre-compressed
    // files (Netlify, Cloudflare Pages, most static hosts) don't have to compress on
    // every request. No-op if the host ignores them — purely additive output files.
    compression({ algorithm: 'brotliCompress', exclude: [/\.(png|webp|jpe?g|svg)$/i] }),
    compression({ algorithm: 'gzip', exclude: [/\.(png|webp|jpe?g|svg)$/i] }),
  ],
  server: {
    port: 3000,
    open: true
  },
  build: {
    rollupOptions: {
      output: {
        // Split large, rarely-changing vendor libraries into their own cacheable
        // chunks instead of one monolithic bundle — improves first-load performance
        // and lets browsers cache them independently of app-code changes.
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-motion': ['framer-motion'],
          'vendor-swiper': ['swiper'],
          'vendor-i18n': ['i18next', 'react-i18next'],
        },
      },
    },
  },
})
