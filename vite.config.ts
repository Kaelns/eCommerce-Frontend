import path from 'path';
import svgr from 'vite-plugin-svgr';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import type { ViteUserConfig } from 'vitest/config';

declare module 'vite' {
  export interface IUserConfig {
    test: ViteUserConfig['test'];
  }
}

export default defineConfig({
  plugins: [react(), svgr()],
  test: {
    globals: true,
    include: ['./src/**/*.test.tsx'],
    environment: 'jsdom',
    setupFiles: ['./src/__tests__/setup.tsx'],
    pool: 'forks',
    coverage: {
      provider: 'v8'
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@styles': path.resolve(__dirname, './src/styles'),
      '@components': `${path.resolve(__dirname, './src/components/')}`
    }
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: 'globalThis'
      }
    }
  }
});
