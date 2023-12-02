import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vercelServerless from '@astrojs/vercel/serverless';
import icon from 'astro-icon';


// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon()],
  site: "https://IonelaCristinaNistor.github.io/",
  output: 'hybrid',
  adapter: vercelServerless()
});