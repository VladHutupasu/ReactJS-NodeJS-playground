import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  root: "src/apps/search-recipes",
  build: {
    outDir: "dist/search-recipes",
  },
  publicDir: "../../../public",
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
