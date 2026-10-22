import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const projectRoot = fileURLToPath(new URL(".", import.meta.url));
const sourceRoot = resolve(projectRoot, "src");

export default defineConfig({
  root: sourceRoot,
  base: "./",
  plugins: [react()],
  publicDir: resolve(projectRoot, "public"),
  build: {
    outDir: resolve(projectRoot, "dist"),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        home: resolve(sourceRoot, "index.html"),
        services: resolve(sourceRoot, "services.html"),
        results: resolve(sourceRoot, "results.html"),
        story: resolve(sourceRoot, "story.html"),
        faqs: resolve(sourceRoot, "faqs.html"),
        contact: resolve(sourceRoot, "contact.html"),
        terms: resolve(sourceRoot, "terms.html"),
        privacy: resolve(sourceRoot, "privacy.html"),
      },
    },
  },
});
