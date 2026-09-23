import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base: su GitHub Pages il sito vive sotto /yuma-site/, in locale sotto /.
// Impostato via variabile d'ambiente dal workflow di deploy.
export default defineConfig({
  base: process.env.VITE_BASE ?? "/",
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
        projects: path.resolve(__dirname, "projects/index.html"),
        clientInterface: path.resolve(__dirname, "client-interface/index.html"),
        v2: path.resolve(__dirname, "v2/index.html"),
        explore: path.resolve(__dirname, "explore/index.html"),
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
