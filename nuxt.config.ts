// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,

  build: {
    transpile: [
      '@heroicons/vue',
      '@fortawesome/vue-fontawesome',
      '@fortawesome/fontawesome-svg-core',
      '@fortawesome/free-brands-svg-icons'
    ]
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/motion/nuxt'
  ],

  app: {
    head: {
      title: 'PROSEN - Sécurité Professionnelle',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      // Ajoutez cette ligne pour s'assurer que les styles sont chargés correctement
      htmlAttrs: {
        lang: 'fr'
      }
    }
  },

  motion: {
    directives: {
      'default': {
        initial: { opacity: 0, y: 20 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: {
            duration: 500
          }
        }
      },
      'slide-up': {
        initial: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
      }
    },
    plugins: {
      directives: true
    }
  },

  experimental: {
    payloadExtraction: false,
    renderJsonPayloads: true,
    viewTransition: true
  },

  routeRules: {
    // '/blog': { redirect: '/' }, // Commentez ou supprimez cette ligne
    '/careers': { redirect: '/' }
  },

  compatibilityDate: '2025-03-13',

  // Ajoutez ces paramètres pour améliorer l'hydratation
  nitro: {
    compressPublicAssets: true,
    prerender: {
      crawlLinks: true,
      routes: ['/']
    }
  }
})