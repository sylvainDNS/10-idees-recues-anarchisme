import { defineConfig } from 'astro/config'
import compress from 'astro-compress'

// https://astro.build/config
import mdx from '@astrojs/mdx'

// https://astro.build/config
export default defineConfig({
  base: '/10-idees-recues-anarchisme',
  integrations: [mdx(), compress()],
  vite: {},
})
