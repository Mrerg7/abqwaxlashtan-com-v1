import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://abqwaxlashtan.com',
  output: 'static',
  trailingSlash: 'always',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap({
      filter: (page) => !page.includes('/404'),
      changefreq: 'weekly',
      serialize(item) {
        const url = item.url;
        if (url.endsWith('abqwaxlashtan.com/') || url.endsWith('abqwaxlashtan.com')) {
          item.priority = 1.0;
        } else if (url.includes('/insights/') && url.split('/').filter(Boolean).length <= 2) {
          item.priority = 0.8;
        } else if (url.includes('/insights/')) {
          item.priority = 0.7;
        } else {
          item.priority = 0.6;
        }
        item.lastmod = new Date().toISOString();
        return item;
      },
    }),
  ],
});
