import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const useCustomDomain = false;

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: useCustomDomain ? '/' : '/MyPW'
});
