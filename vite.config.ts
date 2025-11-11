import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  root: "./client",
  publicDir: "../public",
  server: {
    host: "::",
    port: 8080,
    fs: {
      allow: [".", "../shared"],
      deny: [".env", ".env.*", "*.{crt,pem}", "**/.git/**", "../server/**"],
    },
  },
  build: {
    outDir: "../dist/spa",
    emptyOutDir: true,
  },
  plugins: [react(), mode === "development" ? expressPlugin() : undefined].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client"),
      "@shared": path.resolve(__dirname, "./shared"),
    },
  },
}));

function expressPlugin(): Plugin {
  return {
    name: "express-plugin",
    apply: "serve", // Only apply during development (serve mode)
    async configureServer(server) {
      try {
        // Dynamic import only in dev mode
        const { createServer } = await import("./server/index.js");
        const app = createServer();
        server.middlewares.use(app);
      } catch (error) {
        console.warn("Express server not available in this environment");
      }
    },
  };
}
