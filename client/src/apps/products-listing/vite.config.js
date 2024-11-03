import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  root: "src/apps/products-listing",
  build: {
    outDir: "dist/products-listing",
  },
  publicDir: "../../../public",
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
