import { SitemapStream, streamToPromise } from 'sitemap'
import { defineEventHandler } from 'h3'

export default defineEventHandler(async (event) => {
  // Créer un nouveau flux sitemap
  const sitemap = new SitemapStream({
    hostname: 'https://prosen.sn'
  })

  // Routes statiques
  const staticRoutes = [
    '/',
    '/about',
    '/services',
    '/devis',
    '/contact',
    '/privacy',
    '/terms',
    '/carrieres',
    '/boutique',
    '/blog'
  ]

  // Routes des services
  const serviceRoutes = [
    '/services/surveillance-gardiennage',
    '/services/securite-electronique',
    '/services/protection-rapprochee',
    '/services/nettoyage-professionnel',
    '/services/securite-incendie',
    '/services/transport-valeurs',
    '/services/formations',
    '/services/conseil-securite'
  ]

  // Ajouter les routes statiques
  staticRoutes.forEach((route) => {
    sitemap.write({
      url: route,
      changefreq: 'weekly',
      priority: route === '/' ? 1.0 : 0.8
    })
  })

  // Ajouter les routes de services
  serviceRoutes.forEach((route) => {
    sitemap.write({
      url: route,
      changefreq: 'weekly',
      priority: 0.8
    })
  })

  // Fermer le flux
  sitemap.end()

  // Convertir le flux en chaîne
  const xml = await streamToPromise(sitemap)

  // Définir les en-têtes de réponse
  event.node.res.setHeader('Content-Type', 'application/xml')
  return xml.toString()
}) 