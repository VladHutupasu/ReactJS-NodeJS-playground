import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  root: "src/apps/todo-app",
  build: {
    outDir: "dist/todo-app",
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
