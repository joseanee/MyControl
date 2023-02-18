// vite.config.ts
import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import macrosPlugin from "vite-plugin-babel-macros"
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    reactRefresh(),
    macrosPlugin(),
  ],
});
