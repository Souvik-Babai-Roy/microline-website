import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import sitemap from "vite-plugin-sitemap";

export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: "https://www.microlineindia.in",
      dynamicRoutes: [
        "/",
        "/about",
        "/products",
        "/services",
        "/applications",
        "/achievements",
        "/resources",
        "/contact"
      ],
    }),
  ],
});