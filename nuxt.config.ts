// https://nuxt.com/docs/api/configuration/nuxt-config
import Lara from '@primeuix/themes/lara';

const productionBaseUrl = '/pixel-resume/';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  app: {
    baseURL: productionBaseUrl,
    pageTransition: { name: 'page', mode: 'out-in' },
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
  css: ['@/assets/css/styles.css']
})
