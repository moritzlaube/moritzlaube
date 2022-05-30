import { defineConfig } from "astro/config";

import svelte from "@astrojs/svelte";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  publicDir: "./static",
  outDir: "./public",
  integrations: [svelte(), sitemap()],
});
