import {defineConfig} from "vite";

export default defineConfig({
  build: {
    outDir: "production",
    rollupOptions: {
      /**
       * Secara default jika tidak punya vite.config.js maka ketika build hanya index.html saja
       * Jika buat config vite.config.js dan buat input build selain index.html maka akan di build juga
       * Build : npx vite build
       * Run vite : npx vite
       * Run vite preview : npx vite preview
       */
      input: {
        index: "index.html",
        blog: "blog.html",
        contact: "other/contact.html",
      },
    },
  },
  server: {
    port: 3000,
  },
});
