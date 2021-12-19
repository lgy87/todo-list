/* eslint-env node */

import react from "@vitejs/plugin-react"
import { builtinModules } from "module"
import { join } from "path"
import { chrome } from "../../.electron-vendors.cache.json"

const PACKAGE_ROOT = __dirname

/**
 * @type {import("vite").UserConfig}
 * @see https://vitejs.dev/config/
 */
const config = {
  mode: process.env.MODE,
  root: PACKAGE_ROOT,
  resolve: {
    alias: {
      "/@/": join(PACKAGE_ROOT, "src") + "/",
    },
  },
  plugins: [react()],
  base: "",
  server: {
    fs: {
      strict: true,
    },
  },
  build: {
    sourcemap: true,
    target: `chrome${chrome}`,
    polyfillDynamicImport: false,
    outDir: "dist",
    assetsDir: ".",
    rollupOptions: {
      external: [...builtinModules],
    },
    emptyOutDir: true,
    brotliSize: false,
  },
}

export default config
