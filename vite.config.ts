import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import svgLoader from "vite-svg-loader";
import { createStyleImportPlugin } from "vite-plugin-style-import";
import configCompressPlugin from "./config/plugin/compress";

// https://vitejs.dev/config/
export default defineConfig(async () => ({
  plugins: [
    vue(),
    svgLoader({ svgoConfig: {} }),
    createStyleImportPlugin({
      libs: [
        {
          libraryName: "@arco-design/web-vue",
          esModule: true,
          resolveStyle: (name) => {
            // css
            return `@arco-design/web-vue/es/${name}/style/css.js`;
            // less
            return `@arco-design/web-vue/es/${name}/style/index.js`;
          },
        },
      ],
    }),
    configCompressPlugin("gzip"),
  ],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: resolve(__dirname, "./src"),
      },
      {
        find: "assets",
        replacement: resolve(__dirname, "./src/assets"),
      },
      {
        find: "vue-i18n",
        replacement: "vue-i18n/dist/vue-i18n.cjs.js", // Resolve the i18n warning issue
      },
      {
        find: "vue",
        replacement: "vue/dist/vue.esm-bundler.js", // compile template
      },
    ],
    extensions: [".ts", ".js"],
  },
  define: {
    "process.env": {},
  },
  // Vite options tailored for Tauri development and only applied in `tauri dev` or `tauri build`
  // prevent vite from obscuring rust errors
  clearScreen: false,
  // tauri expects a fixed port, fail if that port is not available
  server: {
    port: 1420,
    strictPort: true,
  },
  // to make use of `TAURI_DEBUG` and other env variables
  // https://tauri.studio/v1/api/config#buildconfig.beforedevcommand
  envPrefix: ["VITE_", "TAURI_"],
  build: {
    // Tauri supports es2021
    target: process.env.TAURI_PLATFORM == "windows" ? "chrome105" : "safari13",
    // don't minify for debug builds
    minify: !process.env.TAURI_DEBUG ? "esbuild" : false,
    // produce sourcemaps for debug builds
    sourcemap: !!process.env.TAURI_DEBUG,
  },
}));
