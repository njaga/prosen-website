<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    default: '/images/og-image.jpg'
  },
  url: {
    type: String,
    default: ''
  }
})

// Récupération de l'URL courante
const route = useRoute()
const baseUrl = 'https://prosen.sn'
const currentUrl = `${baseUrl}${props.url || route.path}`

// Configuration des meta tags
useSeoMeta({
  title: `${props.title} | PROSEN Sécurité`,
  ogTitle: props.title,
  description: props.description,
  ogDescription: props.description,
  ogImage: `${baseUrl}${props.image}`,
  twitterCard: 'summary_large_image',
  twitterTitle: props.title,
  twitterDescription: props.description,
  twitterImage: `${baseUrl}${props.image}`,
  ogUrl: currentUrl,
  canonical: currentUrl
})
</script>

<template>
  <!-- Ce composant ne rend rien visuellement mais configure les métadonnées SEO -->
</template>