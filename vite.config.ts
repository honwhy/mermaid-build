import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { nodePolyfills } from 'vite-plugin-node-polyfills'
// import process from 'node:process'

// https://vite.dev/config/
export default defineConfig({
  // define: { process },
  plugins: [
    vue(),
    nodePolyfills({
      include: [`path`, `util`, `timers`, `stream`, `fs`],
      overrides: {
        // Since `fs` is not supported in browsers, we can use the `memfs` package to polyfill it.
        // fs: 'memfs',
      },
    }),
  ],
  build: {
    rollupOptions: {
      // https://cn.rollupjs.org/configuration-options/
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/mermaid')) {
            return 'mermaid'
          }
          if (id.includes('html-to-image')) {
            return 'html-to-image'
          }
          if (id.includes('reading-time')) {
            return 'reading-time'
          }
          if (id.includes('node_modules')) {
            return 'vendor'
          }
          return null
        }
      }
    },
  },
})
