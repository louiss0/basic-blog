import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";
import sitemap from "@astrojs/sitemap";
import remarkDirective from "remark-directive";
import remarkHtmlDirectives from "remark-html-directives";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  experimental: {
    contentCollections: true,
    errorOverlay: true,
  },
  markdown: {
    extendDefaultPlugins: true,
    remarkPlugins: [remarkDirective, remarkHtmlDirectives],
  },
  integrations: [
    mdx({ extendPlugins: true }),
    sitemap(),
    vue({ jsx: { enableObjectSlots: true } }),
    tailwind(),
  ],
});
