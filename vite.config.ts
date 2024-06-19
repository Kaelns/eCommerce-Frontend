/// <reference types="vitest/config" />
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import path from 'path';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';
import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill';
import { defineConfig } from 'vite';

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
      '@components': `${path.resolve(__dirname, './src/components/')}`,
      _stream_duplex: 'rollup-plugin-node-polyfills/polyfills/readable-stream/duplex',
      _stream_passthrough: 'rollup-plugin-node-polyfills/polyfills/readable-stream/passthrough',
      _stream_readable: 'rollup-plugin-node-polyfills/polyfills/readable-stream/readable',
      _stream_transform: 'rollup-plugin-node-polyfills/polyfills/readable-stream/transform',
      _stream_writable: 'rollup-plugin-node-polyfills/polyfills/readable-stream/writable',
      string_decoder: 'rollup-plugin-node-polyfills/polyfills/string-decoder',
      querystring: 'rollup-plugin-node-polyfills/polyfills/qs',
      constants: 'rollup-plugin-node-polyfills/polyfills/constants',
      punycode: 'rollup-plugin-node-polyfills/polyfills/punycode',
      console: 'rollup-plugin-node-polyfills/polyfills/console',
      assert: 'rollup-plugin-node-polyfills/polyfills/assert',
      domain: 'rollup-plugin-node-polyfills/polyfills/domain',
      events: 'rollup-plugin-node-polyfills/polyfills/events',
      timers: 'rollup-plugin-node-polyfills/polyfills/timers',
      stream: 'rollup-plugin-node-polyfills/polyfills/stream',
      https: 'rollup-plugin-node-polyfills/polyfills/http',
      http: 'rollup-plugin-node-polyfills/polyfills/http',
      path: 'rollup-plugin-node-polyfills/polyfills/path',
      zlib: 'rollup-plugin-node-polyfills/polyfills/zlib',
      tty: 'rollup-plugin-node-polyfills/polyfills/tty',
      url: 'rollup-plugin-node-polyfills/polyfills/url',
      os: 'rollup-plugin-node-polyfills/polyfills/os',
      vm: 'rollup-plugin-node-polyfills/polyfills/vm'
    }
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: 'window'
      },
      plugins: [
        NodeGlobalsPolyfillPlugin({
          process: true,
          buffer: true
        }),
        NodeModulesPolyfillPlugin()
      ]
    }
  },
  build: {
    rollupOptions: {
      plugins: [nodePolyfills()]
    }
  }
});
