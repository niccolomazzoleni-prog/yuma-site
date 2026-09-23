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
        v3: path.resolve(__dirname, "v3/index.html"),
        v3client: path.resolve(__dirname, "v3/client-interface/index.html"),
        storia: path.resolve(__dirname, "storia/index.html"),
        schede: path.resolve(__dirname, "schede/index.html"),
        processo: path.resolve(__dirname, "processo/index.html"),
        avvio: path.resolve(__dirname, "avvio/index.html"),
        problema: path.resolve(__dirname, "problema/index.html"),
        ruoli: path.resolve(__dirname, "ruoli/index.html"),
        sistemi: path.resolve(__dirname, "sistemi/index.html"),
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
