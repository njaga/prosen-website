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

    <!-- Articles à venir -->
    <section class="py-24 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
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

        <!-- Newsletter Section -->
        <div class="mt-24 bg-[#111829] rounded-3xl p-12 relative overflow-hidden">
          <div class="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10"></div>
          <div class="relative">
            <div class="max-w-2xl mx-auto text-center">
              <h2 class="text-3xl font-bold text-white mb-6">Restez informé</h2>
              <p class="text-gray-300 mb-8">
                Abonnez-vous à notre newsletter pour recevoir nos derniers articles et actualités.
              </p>
              <form class="flex space-x-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Votre adresse email" 
                  class="flex-1 px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-gray-400 focus:outline-none focus:border-[#23c55e]/50"
                >
                <button 
                  type="submit"
                  class="px-6 py-3 bg-[#23c55e] text-white rounded-xl hover:bg-[#1ea550] transition-colors duration-300"
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
import { ClockIcon } from '@heroicons/vue/24/solid'

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
</script>

<style>
.backdrop-blur-sm {
  backdrop-filter: blur(8px);
}
</style>