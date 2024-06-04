// vite.config.ts
import { nodePolyfills } from "file:///C:/Users/user/Documents/final2/e-commerce/node_modules/vite-plugin-node-polyfills/dist/index.js";
import path from "path";
import react from "file:///C:/Users/user/Documents/final2/e-commerce/node_modules/@vitejs/plugin-react/dist/index.mjs";
import svgr from "file:///C:/Users/user/Documents/final2/e-commerce/node_modules/vite-plugin-svgr/dist/index.js";
import { NodeGlobalsPolyfillPlugin } from "file:///C:/Users/user/Documents/final2/e-commerce/node_modules/@esbuild-plugins/node-globals-polyfill/dist/index.js";
import { NodeModulesPolyfillPlugin } from "file:///C:/Users/user/Documents/final2/e-commerce/node_modules/@esbuild-plugins/node-modules-polyfill/dist/index.js";
import { defineConfig } from "file:///C:/Users/user/Documents/final2/e-commerce/node_modules/vite/dist/node/index.js";
var __vite_injected_original_dirname = "C:\\Users\\user\\Documents\\final2\\e-commerce";
var vite_config_default = defineConfig({
  plugins: [react(), svgr()],
  test: {
    globals: true,
    include: ["./src/**/*.test.tsx"],
    environment: "jsdom",
    setupFiles: ["./src/__tests__/setup.tsx"]
  },
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src/"),
      "@pages": path.resolve(__vite_injected_original_dirname, "./src/pages"),
      "@styles": path.resolve(__vite_injected_original_dirname, "./src/styles"),
      "@components": `${path.resolve(__vite_injected_original_dirname, "./src/components/")}`,
      _stream_duplex: "rollup-plugin-node-polyfills/polyfills/readable-stream/duplex",
      _stream_passthrough: "rollup-plugin-node-polyfills/polyfills/readable-stream/passthrough",
      _stream_readable: "rollup-plugin-node-polyfills/polyfills/readable-stream/readable",
      _stream_transform: "rollup-plugin-node-polyfills/polyfills/readable-stream/transform",
      _stream_writable: "rollup-plugin-node-polyfills/polyfills/readable-stream/writable",
      string_decoder: "rollup-plugin-node-polyfills/polyfills/string-decoder",
      querystring: "rollup-plugin-node-polyfills/polyfills/qs",
      constants: "rollup-plugin-node-polyfills/polyfills/constants",
      punycode: "rollup-plugin-node-polyfills/polyfills/punycode",
      console: "rollup-plugin-node-polyfills/polyfills/console",
      assert: "rollup-plugin-node-polyfills/polyfills/assert",
      domain: "rollup-plugin-node-polyfills/polyfills/domain",
      events: "rollup-plugin-node-polyfills/polyfills/events",
      timers: "rollup-plugin-node-polyfills/polyfills/timers",
      stream: "rollup-plugin-node-polyfills/polyfills/stream",
      https: "rollup-plugin-node-polyfills/polyfills/http",
      http: "rollup-plugin-node-polyfills/polyfills/http",
      path: "rollup-plugin-node-polyfills/polyfills/path",
      zlib: "rollup-plugin-node-polyfills/polyfills/zlib",
      tty: "rollup-plugin-node-polyfills/polyfills/tty",
      url: "rollup-plugin-node-polyfills/polyfills/url",
      os: "rollup-plugin-node-polyfills/polyfills/os",
      vm: "rollup-plugin-node-polyfills/polyfills/vm"
    }
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: "window"
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
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFx1c2VyXFxcXERvY3VtZW50c1xcXFxmaW5hbDJcXFxcZS1jb21tZXJjZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcdXNlclxcXFxEb2N1bWVudHNcXFxcZmluYWwyXFxcXGUtY29tbWVyY2VcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL3VzZXIvRG9jdW1lbnRzL2ZpbmFsMi9lLWNvbW1lcmNlL3ZpdGUuY29uZmlnLnRzXCI7Ly8vIDxyZWZlcmVuY2UgdHlwZXM9XCJ2aXRlc3QvY29uZmlnXCIgLz5cclxuaW1wb3J0IHsgbm9kZVBvbHlmaWxscyB9IGZyb20gJ3ZpdGUtcGx1Z2luLW5vZGUtcG9seWZpbGxzJztcclxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XHJcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XHJcbmltcG9ydCBzdmdyIGZyb20gJ3ZpdGUtcGx1Z2luLXN2Z3InO1xyXG5pbXBvcnQgeyBOb2RlR2xvYmFsc1BvbHlmaWxsUGx1Z2luIH0gZnJvbSAnQGVzYnVpbGQtcGx1Z2lucy9ub2RlLWdsb2JhbHMtcG9seWZpbGwnO1xyXG5pbXBvcnQgeyBOb2RlTW9kdWxlc1BvbHlmaWxsUGx1Z2luIH0gZnJvbSAnQGVzYnVpbGQtcGx1Z2lucy9ub2RlLW1vZHVsZXMtcG9seWZpbGwnO1xyXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgcGx1Z2luczogW3JlYWN0KCksIHN2Z3IoKV0sXHJcbiAgdGVzdDoge1xyXG4gICAgZ2xvYmFsczogdHJ1ZSxcclxuICAgIGluY2x1ZGU6IFsnLi9zcmMvKiovKi50ZXN0LnRzeCddLFxyXG4gICAgZW52aXJvbm1lbnQ6ICdqc2RvbScsXHJcbiAgICBzZXR1cEZpbGVzOiBbJy4vc3JjL19fdGVzdHNfXy9zZXR1cC50c3gnXVxyXG4gIH0sXHJcbiAgcmVzb2x2ZToge1xyXG4gICAgYWxpYXM6IHtcclxuICAgICAgJ0AnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMvJyksXHJcbiAgICAgICdAcGFnZXMnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMvcGFnZXMnKSxcclxuICAgICAgJ0BzdHlsZXMnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMvc3R5bGVzJyksXHJcbiAgICAgICdAY29tcG9uZW50cyc6IGAke3BhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYy9jb21wb25lbnRzLycpfWAsXHJcbiAgICAgIF9zdHJlYW1fZHVwbGV4OiAncm9sbHVwLXBsdWdpbi1ub2RlLXBvbHlmaWxscy9wb2x5ZmlsbHMvcmVhZGFibGUtc3RyZWFtL2R1cGxleCcsXHJcbiAgICAgIF9zdHJlYW1fcGFzc3Rocm91Z2g6ICdyb2xsdXAtcGx1Z2luLW5vZGUtcG9seWZpbGxzL3BvbHlmaWxscy9yZWFkYWJsZS1zdHJlYW0vcGFzc3Rocm91Z2gnLFxyXG4gICAgICBfc3RyZWFtX3JlYWRhYmxlOiAncm9sbHVwLXBsdWdpbi1ub2RlLXBvbHlmaWxscy9wb2x5ZmlsbHMvcmVhZGFibGUtc3RyZWFtL3JlYWRhYmxlJyxcclxuICAgICAgX3N0cmVhbV90cmFuc2Zvcm06ICdyb2xsdXAtcGx1Z2luLW5vZGUtcG9seWZpbGxzL3BvbHlmaWxscy9yZWFkYWJsZS1zdHJlYW0vdHJhbnNmb3JtJyxcclxuICAgICAgX3N0cmVhbV93cml0YWJsZTogJ3JvbGx1cC1wbHVnaW4tbm9kZS1wb2x5ZmlsbHMvcG9seWZpbGxzL3JlYWRhYmxlLXN0cmVhbS93cml0YWJsZScsXHJcbiAgICAgIHN0cmluZ19kZWNvZGVyOiAncm9sbHVwLXBsdWdpbi1ub2RlLXBvbHlmaWxscy9wb2x5ZmlsbHMvc3RyaW5nLWRlY29kZXInLFxyXG4gICAgICBxdWVyeXN0cmluZzogJ3JvbGx1cC1wbHVnaW4tbm9kZS1wb2x5ZmlsbHMvcG9seWZpbGxzL3FzJyxcclxuICAgICAgY29uc3RhbnRzOiAncm9sbHVwLXBsdWdpbi1ub2RlLXBvbHlmaWxscy9wb2x5ZmlsbHMvY29uc3RhbnRzJyxcclxuICAgICAgcHVueWNvZGU6ICdyb2xsdXAtcGx1Z2luLW5vZGUtcG9seWZpbGxzL3BvbHlmaWxscy9wdW55Y29kZScsXHJcbiAgICAgIGNvbnNvbGU6ICdyb2xsdXAtcGx1Z2luLW5vZGUtcG9seWZpbGxzL3BvbHlmaWxscy9jb25zb2xlJyxcclxuICAgICAgYXNzZXJ0OiAncm9sbHVwLXBsdWdpbi1ub2RlLXBvbHlmaWxscy9wb2x5ZmlsbHMvYXNzZXJ0JyxcclxuICAgICAgZG9tYWluOiAncm9sbHVwLXBsdWdpbi1ub2RlLXBvbHlmaWxscy9wb2x5ZmlsbHMvZG9tYWluJyxcclxuICAgICAgZXZlbnRzOiAncm9sbHVwLXBsdWdpbi1ub2RlLXBvbHlmaWxscy9wb2x5ZmlsbHMvZXZlbnRzJyxcclxuICAgICAgdGltZXJzOiAncm9sbHVwLXBsdWdpbi1ub2RlLXBvbHlmaWxscy9wb2x5ZmlsbHMvdGltZXJzJyxcclxuICAgICAgc3RyZWFtOiAncm9sbHVwLXBsdWdpbi1ub2RlLXBvbHlmaWxscy9wb2x5ZmlsbHMvc3RyZWFtJyxcclxuICAgICAgaHR0cHM6ICdyb2xsdXAtcGx1Z2luLW5vZGUtcG9seWZpbGxzL3BvbHlmaWxscy9odHRwJyxcclxuICAgICAgaHR0cDogJ3JvbGx1cC1wbHVnaW4tbm9kZS1wb2x5ZmlsbHMvcG9seWZpbGxzL2h0dHAnLFxyXG4gICAgICBwYXRoOiAncm9sbHVwLXBsdWdpbi1ub2RlLXBvbHlmaWxscy9wb2x5ZmlsbHMvcGF0aCcsXHJcbiAgICAgIHpsaWI6ICdyb2xsdXAtcGx1Z2luLW5vZGUtcG9seWZpbGxzL3BvbHlmaWxscy96bGliJyxcclxuICAgICAgdHR5OiAncm9sbHVwLXBsdWdpbi1ub2RlLXBvbHlmaWxscy9wb2x5ZmlsbHMvdHR5JyxcclxuICAgICAgdXJsOiAncm9sbHVwLXBsdWdpbi1ub2RlLXBvbHlmaWxscy9wb2x5ZmlsbHMvdXJsJyxcclxuICAgICAgb3M6ICdyb2xsdXAtcGx1Z2luLW5vZGUtcG9seWZpbGxzL3BvbHlmaWxscy9vcycsXHJcbiAgICAgIHZtOiAncm9sbHVwLXBsdWdpbi1ub2RlLXBvbHlmaWxscy9wb2x5ZmlsbHMvdm0nXHJcbiAgICB9XHJcbiAgfSxcclxuICBvcHRpbWl6ZURlcHM6IHtcclxuICAgIGVzYnVpbGRPcHRpb25zOiB7XHJcbiAgICAgIGRlZmluZToge1xyXG4gICAgICAgIGdsb2JhbDogJ3dpbmRvdydcclxuICAgICAgfSxcclxuICAgICAgcGx1Z2luczogW1xyXG4gICAgICAgIE5vZGVHbG9iYWxzUG9seWZpbGxQbHVnaW4oe1xyXG4gICAgICAgICAgcHJvY2VzczogdHJ1ZSxcclxuICAgICAgICAgIGJ1ZmZlcjogdHJ1ZVxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIE5vZGVNb2R1bGVzUG9seWZpbGxQbHVnaW4oKVxyXG4gICAgICBdXHJcbiAgICB9XHJcbiAgfSxcclxuICBidWlsZDoge1xyXG4gICAgcm9sbHVwT3B0aW9uczoge1xyXG4gICAgICBwbHVnaW5zOiBbbm9kZVBvbHlmaWxscygpXVxyXG4gICAgfVxyXG4gIH1cclxufSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFDQSxTQUFTLHFCQUFxQjtBQUM5QixPQUFPLFVBQVU7QUFDakIsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sVUFBVTtBQUNqQixTQUFTLGlDQUFpQztBQUMxQyxTQUFTLGlDQUFpQztBQUMxQyxTQUFTLG9CQUFvQjtBQVA3QixJQUFNLG1DQUFtQztBQVN6QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztBQUFBLEVBQ3pCLE1BQU07QUFBQSxJQUNKLFNBQVM7QUFBQSxJQUNULFNBQVMsQ0FBQyxxQkFBcUI7QUFBQSxJQUMvQixhQUFhO0FBQUEsSUFDYixZQUFZLENBQUMsMkJBQTJCO0FBQUEsRUFDMUM7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssS0FBSyxRQUFRLGtDQUFXLFFBQVE7QUFBQSxNQUNyQyxVQUFVLEtBQUssUUFBUSxrQ0FBVyxhQUFhO0FBQUEsTUFDL0MsV0FBVyxLQUFLLFFBQVEsa0NBQVcsY0FBYztBQUFBLE1BQ2pELGVBQWUsR0FBRyxLQUFLLFFBQVEsa0NBQVcsbUJBQW1CLENBQUM7QUFBQSxNQUM5RCxnQkFBZ0I7QUFBQSxNQUNoQixxQkFBcUI7QUFBQSxNQUNyQixrQkFBa0I7QUFBQSxNQUNsQixtQkFBbUI7QUFBQSxNQUNuQixrQkFBa0I7QUFBQSxNQUNsQixnQkFBZ0I7QUFBQSxNQUNoQixhQUFhO0FBQUEsTUFDYixXQUFXO0FBQUEsTUFDWCxVQUFVO0FBQUEsTUFDVixTQUFTO0FBQUEsTUFDVCxRQUFRO0FBQUEsTUFDUixRQUFRO0FBQUEsTUFDUixRQUFRO0FBQUEsTUFDUixRQUFRO0FBQUEsTUFDUixRQUFRO0FBQUEsTUFDUixPQUFPO0FBQUEsTUFDUCxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixLQUFLO0FBQUEsTUFDTCxLQUFLO0FBQUEsTUFDTCxJQUFJO0FBQUEsTUFDSixJQUFJO0FBQUEsSUFDTjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLGNBQWM7QUFBQSxJQUNaLGdCQUFnQjtBQUFBLE1BQ2QsUUFBUTtBQUFBLFFBQ04sUUFBUTtBQUFBLE1BQ1Y7QUFBQSxNQUNBLFNBQVM7QUFBQSxRQUNQLDBCQUEwQjtBQUFBLFVBQ3hCLFNBQVM7QUFBQSxVQUNULFFBQVE7QUFBQSxRQUNWLENBQUM7QUFBQSxRQUNELDBCQUEwQjtBQUFBLE1BQzVCO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLGVBQWU7QUFBQSxNQUNiLFNBQVMsQ0FBQyxjQUFjLENBQUM7QUFBQSxJQUMzQjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
