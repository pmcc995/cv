import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { copyFileSync } from "node:fs";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Build into docs/ so the repo can publish GitHub Pages from the `docs` folder
  // Set base to the project site path so static asset URLs include `/cv/`.
  base: "/cv/",
  build: {
    outDir: "docs",
    emptyOutDir: true,
  },
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    {
      name: "github-pages-404",
      apply: "build",
      closeBundle() {
        copyFileSync(path.resolve(__dirname, "docs/index.html"), path.resolve(__dirname, "docs/404.html"));
      },
    },
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
