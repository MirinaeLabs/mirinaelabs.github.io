import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://mirinaelabs.github.io",
  base: "/auroraviewer",
  trailingSlash: "always",
  outDir: "./auroraviewer",
  publicDir: "./public",
  build: {
    format: "directory"
  },
  compressHTML: true
});
