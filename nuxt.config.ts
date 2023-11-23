// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  app: {
    head: {
      bodyAttrs: {
        class: 'h-full bg-gray-800',
      },
      htmlAttrs: {
        class: 'h-full',
      },
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  devtools: {
    enabled: false,
  }
})
