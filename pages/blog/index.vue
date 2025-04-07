<template>
  <div>
    <!-- Hero Section -->
    <section class="relative py-24 bg-[#111829] overflow-hidden">
      <div class="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10"></div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div 
          class="text-center"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0 }"
        >
          <span class="inline-block px-4 py-1 bg-[#23c55e]/20 text-[#23c55e] rounded-full text-sm font-semibold mb-6">
            Blog PROSEN
          </span>
          <h1 class="text-5xl font-bold text-white mb-6">Nos Articles & Actualités</h1>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">
            Découvrez nos dernières nouvelles, conseils et insights sur la sécurité et les services professionnels.
          </p>
        </div>
      </div>
    </section>

    <!-- Articles depuis Directus -->
    <section class="py-24 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Indicateur de chargement -->
        <div v-if="isLoading" class="flex justify-center items-center py-12">
          <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#23c55e]"></div>
        </div>
        
        <!-- Message si aucun article n'est disponible -->
        <div v-else-if="articles.length === 0" class="text-center py-16">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">Aucun article pour le moment</h2>
          <p class="text-gray-600 max-w-xl mx-auto mb-8">
            Nous préparons du contenu intéressant pour vous. Revenez bientôt pour découvrir nos articles sur la sécurité et les services professionnels.
          </p>
          
          <!-- Afficher les articles à venir seulement si pas d'articles disponibles -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div 
              v-for="(article, index) in upcomingArticles" 
              :key="index"
              v-motion
              :initial="{ opacity: 0, y: 20 }"
              :visible="{ 
                opacity: 1, 
                y: 0,
                transition: {
                  delay: index * 200,
                  duration: 500
                }
              }"
              class="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 group hover:border-[#23c55e]/30 transition-all duration-300"
            >
              <div class="h-48 bg-gray-200 relative overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-b from-transparent to-[#111829]/50"></div>
                <img :src="article.image" alt="" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
              </div>
              <div class="p-6">
                <div class="flex items-center space-x-2 mb-4">
                  <span class="px-3 py-1 bg-[#23c55e]/10 text-[#23c55e] rounded-full text-sm font-medium">
                    {{ article.category }}
                  </span>
                  <span class="text-gray-500 text-sm">{{ article.date }}</span>
                </div>
                <h3 class="text-xl font-semibold text-[#111829] mb-3 group-hover:text-[#23c55e] transition-colors">
                  {{ article.title }}
                </h3>
                <p class="text-gray-600 mb-4">{{ article.excerpt }}</p>
                <div class="flex items-center text-[#23c55e] font-medium">
                  <span>Bientôt disponible</span>
                  <ClockIcon class="w-5 h-5 ml-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Liste des articles disponibles -->
        <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div 
            v-for="(article, index) in articles" 
            :key="article.id"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visible="{ 
              opacity: 1, 
              y: 0,
              transition: {
                delay: index * 200,
                duration: 500
              }
            }"
            class="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 group hover:border-[#23c55e]/30 transition-all duration-300"
          >
            <div class="h-48 bg-gray-200 relative overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-b from-transparent to-[#111829]/50"></div>
              <img :src="article.image" :alt="article.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
            </div>
            <div class="p-6">
              <div class="flex items-center space-x-2 mb-4">
                <span class="px-3 py-1 bg-[#23c55e]/10 text-[#23c55e] rounded-full text-sm font-medium">
                  {{ article.category }}
                </span>
                <span class="text-gray-500 text-sm">{{ article.formatted_date || formatDate(article.date) }}</span>
              </div>
              <h3 class="text-xl font-semibold text-[#111829] mb-3 group-hover:text-[#23c55e] transition-colors">
                {{ article.title }}
              </h3>
              <p class="text-gray-600 mb-4">{{ article.excerpt }}</p>
              <NuxtLink 
                :to="`/blog/${article.slug}`" 
                class="inline-flex items-center text-[#23c55e] font-medium hover:text-[#1ea550] transition-colors"
              >
                Lire l'article
                <ArrowRightIcon class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Newsletter Section -->
        <div class="mt-24 bg-[#111829] rounded-3xl p-6 md:p-12 relative overflow-hidden">
          <div class="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10"></div>
          <div class="relative">
            <div class="max-w-2xl mx-auto text-center">
              <h2 class="text-3xl font-bold text-white mb-6">Restez informé</h2>
              <p class="text-gray-300 mb-8">
                Abonnez-vous à notre newsletter pour recevoir nos derniers articles et actualités.
              </p>
              <form class="flex flex-col sm:flex-row gap-4 sm:space-x-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Votre adresse email" 
                  class="flex-1 px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-gray-400 focus:outline-none focus:border-[#23c55e]/50"
                >
                <button 
                  type="submit"
                  class="px-6 py-3 bg-[#23c55e] text-white rounded-xl hover:bg-[#1ea550] transition-colors duration-300 whitespace-nowrap"
                >
                  S'abonner
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { ClockIcon, ArrowRightIcon } from '@heroicons/vue/24/solid'

// Articles à venir (affichés seulement si aucun article disponible)
const upcomingArticles = [
  {
    title: "Les dernières tendances en matière de sécurité en 2024",
    excerpt: "Découvrez les innovations et technologies qui façonnent l'avenir de la sécurité professionnelle.",
    category: "Tendances",
    date: "Bientôt",
    image: "/images/blog/security-trends.jpg"
  },
  {
    title: "Comment choisir son système de vidéosurveillance",
    excerpt: "Guide complet pour sélectionner le système de vidéosurveillance adapté à vos besoins.",
    category: "Guide",
    date: "Bientôt",
    image: "/images/blog/video-surveillance.webp"
  },
  {
    title: "La sécurité événementielle : nos conseils d'experts",
    excerpt: "Tout ce que vous devez savoir pour sécuriser vos événements professionnels.",
    category: "Conseils",
    date: "Bientôt",
    image: "/images/blog/event-security.jpg"
  }
]

// Articles récupérés depuis Directus
const articles = ref([])
const isLoading = ref(true)
const loadError = ref(null)

// Formater une date si elle n'est pas déjà formatée
const formatDate = (dateString) => {
  if (!dateString) return ''
  
  const date = new Date(dateString)
  if (isNaN(date.getTime())) return dateString
  
  return date.toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

// Récupérer les articles depuis l'API
onMounted(async () => {
  try {
    isLoading.value = true
    loadError.value = null
    
    const response = await $fetch('/api/blog/articles', {
      method: 'GET',
      headers: {
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache'
      }
    })
    
    if (response.success) {
      console.log('Articles récupérés avec succès:', response.articles.length)
      articles.value = response.articles
    } else {
      console.error('Erreur lors de la récupération des articles:', response)
      loadError.value = 'Impossible de charger les articles'
    }
  } catch (error) {
    console.error('Erreur lors du chargement des articles:', error)
    loadError.value = 'Erreur de connexion au serveur'
  } finally {
    isLoading.value = false
  }
})
</script>

<style>
.backdrop-blur-sm {
  backdrop-filter: blur(8px);
}
</style>