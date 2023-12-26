import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/dante_landing/', // this is for GithubPages
  plugins: [react()]
})
