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
      titleTemplate: '%s | PROSEN Sécurité',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'PROSEN, votre partenaire de confiance en sécurité professionnelle. Services de gardiennage, surveillance, protection et sécurité électronique.' },
        { name: 'format-detection', content: 'telephone=no' },
        // OpenGraph
        { property: 'og:site_name', content: 'PROSEN Sécurité' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://prosen.sn' },
        { property: 'og:title', content: 'PROSEN - Solutions de Sécurité Professionnelle' },
        { property: 'og:description', content: 'Solutions de sécurité complètes pour entreprises et particuliers. Gardiennage, surveillance, protection rapprochée et plus.' },
        { property: 'og:image', content: '/images/og-image.jpg' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@prosensecurity' },
        { name: 'twitter:title', content: 'PROSEN - Solutions de Sécurité Professionnelle' },
        { name: 'twitter:description', content: 'Solutions de sécurité complètes pour entreprises et particuliers.' },
        { name: 'twitter:image', content: '/images/twitter-card.jpg' },
        // Thème et couleurs
        { name: 'theme-color', content: '#23c55e' }
      ],
      link: [
        // Favicon
        { rel: 'icon', type: 'image/x-icon', href: '/images/logo.ico' },
        // Favicons différentes tailles
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/images/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/images/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/images/favicon-16x16.png' },
        // Manifest
        { rel: 'manifest', href: '/site.webmanifest' }
      ],
      htmlAttrs: {
        lang: 'fr',
        dir: 'ltr'
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
    //'/careers': { redirect: '/' }
  },

  compatibilityDate: '2025-03-13',

  // Ajoutez ces paramètres pour améliorer l'hydratation
  nitro: {
    compressPublicAssets: true,
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
        '/about',
        '/services',
        '/devis',
        '/contact',
        '/privacy',
        '/terms',
        '/careers',
      ]
    },
    output: {
      dir: '.output',
      publicDir: '.output/public'
    }
  }
})