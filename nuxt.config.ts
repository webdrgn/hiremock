// https://nuxt.com/docs/api/configuration/nuxt-config
import Lara from '@primeuix/themes/lara';

const productionBaseUrl = '/pixel-resume/';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  app: {
    baseURL: productionBaseUrl,
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: `${productionBaseUrl}favicon.svg?v=2` },
        { rel: 'shortcut icon', href: `${productionBaseUrl}favicon.svg?v=2` }
      ]
    }
  },
  modules: [
    '@primevue/nuxt-module'
  ],
  ssr: false,
  primevue: {
    options: {
      theme: {
        preset: Lara
      }
    }
  },
  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
    },
  },
  css: ['primeicons/primeicons.css', '@/assets/css/styles.css']
})
