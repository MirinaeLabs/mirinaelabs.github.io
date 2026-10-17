import { defineConfig } from "astro/config";

export default defineConfig({
  site: process.env.SITE_URL || "https://mirinaelabs.com",
  base: "/auroraviewer",
  trailingSlash: "always",
  outDir: "./auroraviewer",
  publicDir: "./public",
  build: {
    format: "directory"
  },
  compressHTML: true
});
