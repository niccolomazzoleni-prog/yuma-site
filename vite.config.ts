import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base: su GitHub Pages il sito vive sotto /yuma-site/, in locale sotto /.
// Impostato via variabile d'ambiente dal workflow di deploy.
export default defineConfig({
  base: process.env.VITE_BASE ?? "/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
