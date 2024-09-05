import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: "./src/main.tsx",
      },
      external: ["**/*.test.tsx", "**/*.test.ts,**/*.test.jsx", "**/*.test.js"],
    },
  },
});
