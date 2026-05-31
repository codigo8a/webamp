import { defineConfig } from "vite";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import nodePolyfills from "rollup-plugin-polyfill-node";

export default defineConfig({
  build: {
    outDir: "../dist/demo-site",
    chunkSizeWarningLimit: 2500,
  },
  root: "demo",
  server: {
    fs: {
      allow: [".."],
    },
  },
  assetsInclude: ["**/*.wsz", "**/*.mp3"],
  optimizeDeps: {
    include: ["winamp-eqf"],
  },
  plugins: [
    nodeResolve({
      browser: true,
      preferBuiltins: false,
      dedupe: ["react", "react-dom"],
    }),
    nodePolyfills(),
    commonjs(),
  ],
});
