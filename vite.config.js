import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// GitHub Pages 部署时 base 为仓库名
export default defineConfig({
  base: process.env.GITHUB_PAGES === 'true' ? '/urovo-learning/' : '/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  server: {
    port: 5173,
    open: true,
  },
})
