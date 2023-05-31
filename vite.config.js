import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import reactRefresh from '@vitejs/plugin-react-refresh'
import vitePluginSass from 'vite-plugin-sass';
import path from 'path'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), vitePluginSass(), reactRefresh()],
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, 'src'),
      '@style': path.resolve(__dirname, 'src/style'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@layouts': path.resolve(__dirname, 'src/layouts'),
      '@assets': path.resolve(__dirname, 'public/assets'),
    },
  },
});
