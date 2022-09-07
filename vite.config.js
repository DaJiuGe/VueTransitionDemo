import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  server: {
    port: 3000
  },
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue']
    })
  ]
})
