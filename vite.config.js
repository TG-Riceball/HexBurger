import path from "path";
import { defineConfig } from "vite";
import pugPlugin from "vite-plugin-pug";

const options = { pretty: true }; // FIXME: pug pretty is deprecated!
const locals = { name: "My Pug" };
const { resolve } = require("path");

export default defineConfig({
  root: path.resolve(__dirname, "src"),
  plugins: [pugPlugin(options, locals)],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  build: {
    outDir: path.resolve(__dirname, "dist"),
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, "src/index.html"),
        store: path.resolve(__dirname, "src/store.html"),
        login: path.resolve(__dirname, "src/login.html"),
        register: path.resolve(__dirname, "src/register.html"),
      },
    },
  },
});
