import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    fs: {
      allow: [
        'C:/Users/user/.cursor/projects/c-Users-user-mine/assets',
        'C:/Users/user/mine/mine',
      ],
    },
  },
})
