import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://IonelaCristinaNistor.github.io",
  integrations: [tailwind(), mdx()],
  output: "server"
});