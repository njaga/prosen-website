<template>
  <div>
    <!-- Chargement -->
    <div v-if="isLoading" class="min-h-screen flex justify-center items-center py-20">
      <div class="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#23c55e]"></div>
    </div>

    <!-- Erreur -->
    <div v-else-if="loadError || !article" class="min-h-screen py-24 bg-gray-50">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16">
        <h1 class="text-3xl font-bold text-gray-800 mb-6">Article non trouvé</h1>
        <p class="text-gray-600 mb-8">
          L'article que vous recherchez n'est pas disponible ou n'existe pas.
        </p>
        <NuxtLink 
          to="/blog" 
          class="inline-flex items-center px-6 py-3 bg-[#23c55e] text-white rounded-xl hover:bg-[#1ea550] transition-colors"
        >
          <ArrowLeftIcon class="w-5 h-5 mr-2" />
          Retour aux articles
        </NuxtLink>
      </div>
    </div>

    <!-- Article complet -->
    <div v-else>
      <!-- Hero de l'article -->
      <section class="relative py-24 bg-[#111829] overflow-hidden">
        <div class="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10"></div>
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div 
            class="text-center"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0 }"
          >
            <div class="flex items-center justify-center flex-wrap gap-3 mb-6">
              <!-- Affichage des catégories multiples -->
              <span 
                v-for="(cat, index) in formattedCategories" 
                :key="index"
                class="inline-block px-4 py-1 bg-[#23c55e]/20 text-[#23c55e] rounded-full text-sm font-semibold"
              >
                {{ cat }}
              </span>
              <span class="text-gray-400 text-sm">{{ article.formatted_date || formatDate(article.date) }}</span>
            </div>
            <h1 class="text-4xl sm:text-5xl font-bold text-white mb-6">{{ article.title }}</h1>
            <p v-if="article.excerpt" class="text-xl text-gray-300 max-w-3xl mx-auto">
              {{ article.excerpt }}
            </p>
            <div class="mt-8 text-sm text-gray-400">
              Par {{ article.author || 'Équipe PROSEN' }}
            </div>
          </div>
        </div>
      </section>

      <!-- Contenu de l'article -->
      <section class="py-16 bg-white">
        <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <!-- Image principale -->
          <div class="mb-12 rounded-xl overflow-hidden shadow-lg">
            <img :src="articleImage" :alt="article.title" class="w-full h-auto" />
          </div>
          
          <!-- Contenu HTML -->
          <div 
            class="prose prose-lg max-w-none prose-headings:text-[#111829] prose-p:text-gray-700 prose-a:text-[#23c55e] prose-a:no-underline hover:prose-a:text-[#1ea550] prose-a:transition-colors article"
            v-html="article.content"
          ></div>

          <!-- Navigation et partage -->
          <div class="mt-16 pt-8 border-t border-gray-200 flex justify-between items-center">
            <NuxtLink 
              to="/blog" 
              class="inline-flex items-center text-[#23c55e] font-medium hover:text-[#1ea550] transition-colors"
            >
              <ArrowLeftIcon class="w-5 h-5 mr-2" />
              Retour aux articles
            </NuxtLink>
            
            <div class="flex space-x-3">
              <a 
                :href="'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(currentPageUrl)" 
                target="_blank"
                rel="noopener noreferrer"
                class="text-gray-500 hover:text-[#23c55e] transition-colors"
                @click.prevent="shareOnFacebook"
              >
                <span class="sr-only">Partager sur Facebook</span>
                <!-- Icône Facebook -->
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path>
                </svg>
              </a>
              <a 
                :href="'https://twitter.com/intent/tweet?text=' + encodeURIComponent(article.title) + '&url=' + encodeURIComponent(currentPageUrl)" 
                target="_blank"
                rel="noopener noreferrer"
                class="text-gray-500 hover:text-[#23c55e] transition-colors"
                @click.prevent="shareOnTwitter"
              >
                <span class="sr-only">Partager sur Twitter</span>
                <!-- Icône Twitter/X -->
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a 
                :href="'https://www.linkedin.com/sharing/share-offsite/?url=' + encodeURIComponent(currentPageUrl)" 
                target="_blank"
                rel="noopener noreferrer"
                class="text-gray-500 hover:text-[#23c55e] transition-colors"
                @click.prevent="shareOnLinkedIn"
              >
                <span class="sr-only">Partager sur LinkedIn</span>
                <!-- Icône LinkedIn -->
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill-rule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clip-rule="evenodd"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Articles liés -->
      <section v-if="hasRelatedArticles" class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl font-bold text-[#111829] mb-12 text-center">Articles similaires</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div 
              v-for="(relatedArticle, index) in relatedArticles" 
              :key="relatedArticle.id || index"
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
                <img :src="getRelatedArticleImage(relatedArticle)" :alt="relatedArticle.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
              </div>
              <div class="p-6">
                <div class="flex items-center flex-wrap gap-2 mb-4">
                  <!-- Support des catégories multiples pour les articles liés -->
                  <span 
                    v-for="(cat, idx) in getRelatedArticleCategories(relatedArticle)" 
                    :key="idx" 
                    class="px-3 py-1 bg-[#23c55e]/10 text-[#23c55e] rounded-full text-sm font-medium"
                  >
                    {{ cat }}
                  </span>
                  <span class="text-gray-500 text-sm">{{ relatedArticle.formatted_date || formatDate(relatedArticle.date) }}</span>
                </div>
                <h3 class="text-xl font-semibold text-[#111829] mb-3 group-hover:text-[#23c55e] transition-colors">
                  {{ relatedArticle.title }}
                </h3>
                <p class="text-gray-600 mb-4">{{ relatedArticle.excerpt }}</p>
                <NuxtLink 
                  :to="`/blog/${relatedArticle.slug}`" 
                  class="inline-flex items-center text-[#23c55e] font-medium hover:text-[#1ea550] transition-colors"
                >
                  Lire l'article
                  <ArrowRightIcon class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/vue/24/solid'

const route = useRoute()
const article = ref(null)
const isLoading = ref(true)
const loadError = ref(null)

// URL actuelle pour le partage
const currentPageUrl = computed(() => {
  if (typeof window !== 'undefined') {
    return window.location.href;
  }
  return '';
})

// Formater les catégories
const formattedCategories = computed(() => {
  if (!article.value || !article.value.category) return [];
  
  // Si c'est un tableau, l'utiliser directement
  if (Array.isArray(article.value.category)) {
    return article.value.category.map(cat => {
      // Capitaliser la première lettre
      if (typeof cat === 'string') {
        return cat.charAt(0).toUpperCase() + cat.slice(1);
      }
      return cat;
    });
  }
  
  // Si c'est une chaîne, essayer de la parser si c'est du JSON
  if (typeof article.value.category === 'string') {
    try {
      if (article.value.category.startsWith('[') || article.value.category.startsWith('{')) {
        const parsed = JSON.parse(article.value.category);
        return Array.isArray(parsed) ? parsed : [parsed];
      }
      return [article.value.category];
    } catch (e) {
      return [article.value.category];
    }
  }
  
  return [];
})

// Calculer l'URL de l'image
const articleImage = computed(() => {
  if (!article.value || !article.value.image) return '/images/placeholder.jpg'
  
  // Vérifier si l'image est un ID ou une URL complète
  if (typeof article.value.image === 'string' && (article.value.image.startsWith('http') || article.value.image.startsWith('/'))) {
    return article.value.image
  }
  
  // Si c'est un ID, construire l'URL vers l'API Directus
  return `/api/assets/${article.value.image}`
})

// Vérifier s'il y a des articles liés valides
const hasRelatedArticles = computed(() => {
  return Array.isArray(article.value?.related_articles) && 
         article.value.related_articles.length > 0 &&
         article.value.related_articles.some(article => article && article.id);
})

// Filtrer les articles liés valides
const relatedArticles = computed(() => {
  if (!hasRelatedArticles.value) return [];
  return article.value.related_articles.filter(article => article && article.id);
})

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

// Fonctions de partage social
const shareOnFacebook = () => {
  const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentPageUrl.value)}`;
  window.open(url, '_blank', 'width=600,height=400');
}

const shareOnTwitter = () => {
  const text = article.value ? article.value.title : 'Article PROSEN';
  const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(currentPageUrl.value)}`;
  window.open(url, '_blank', 'width=600,height=400');
}

const shareOnLinkedIn = () => {
  const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentPageUrl.value)}`;
  window.open(url, '_blank', 'width=600,height=400');
}

// Récupérer les catégories d'un article lié (avec support format tableau)
const getRelatedArticleCategories = (relatedArticle) => {
  if (!relatedArticle || !relatedArticle.category) return []
  
  // Si c'est déjà un tableau, le retourner
  if (Array.isArray(relatedArticle.category)) {
    return relatedArticle.category.map(cat => {
      // Capitaliser la première lettre
      if (typeof cat === 'string') {
        return cat.charAt(0).toUpperCase() + cat.slice(1);
      }
      return cat;
    });
  }
  
  // Si c'est une chaîne, essayer de la parser si c'est du JSON
  if (typeof relatedArticle.category === 'string') {
    try {
      if (relatedArticle.category.startsWith('[') || relatedArticle.category.startsWith('{')) {
        const parsed = JSON.parse(relatedArticle.category);
        return Array.isArray(parsed) ? parsed : [parsed];
      }
      return [relatedArticle.category];
    } catch (e) {
      return [relatedArticle.category];
    }
  }
  
  return [];
}

// Récupérer l'URL d'image d'un article lié
const getRelatedArticleImage = (relatedArticle) => {
  if (!relatedArticle || !relatedArticle.image) return '/images/placeholder.jpg'
  
  if (typeof relatedArticle.image === 'string' && (relatedArticle.image.startsWith('http') || relatedArticle.image.startsWith('/'))) {
    return relatedArticle.image
  }
  
  return `/api/assets/${relatedArticle.image}`
}

// Récupérer l'article depuis l'API
onMounted(async () => {
  try {
    isLoading.value = true
    loadError.value = null
    
    const slug = route.params.slug
    if (!slug) {
      loadError.value = 'Slug non spécifié'
      return
    }
    
    const response = await $fetch(`/api/blog/article/${slug}`, {
      method: 'GET',
      headers: {
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache'
      }
    })
    
    if (response.success && response.article) {
      console.log('Article récupéré avec succès:', response.article.title)
      article.value = response.article
      
      // Mise à jour du titre de la page
      if (article.value.title) {
        document.title = `${article.value.title} - Blog PROSEN`
      }
    } else {
      console.error('Erreur lors de la récupération de l\'article:', response)
      loadError.value = response.message || 'Article non trouvé'
    }
  } catch (error) {
    console.error('Erreur lors du chargement de l\'article:', error)
    loadError.value = 'Erreur de connexion au serveur'
  } finally {
    isLoading.value = false
  }
})
</script>

<style>
/* Styles pour le contenu de l'article (WYSIWYG) */
.prose img {
  border-radius: 0.5rem;
  margin: 2rem 0;
}

.prose h2 {
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.prose h3 {
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
  font-weight: 600;
}

.prose ul, .prose ol {
  margin-left: 1.5rem;
  margin-bottom: 1.5rem;
}

.prose ul {
  list-style-type: disc;
}

.prose ol {
  list-style-type: decimal;
}

.prose li {
  margin-bottom: 0.5rem;
  padding-left: 0.5rem;
}

/* Styles spécifiques pour les listes personnalisées */
.prose ul li.checklist,
.prose ul li.infolist {
  list-style-type: none;
  position: relative;
  padding-left: 1.75rem;
}

.prose ul li.checklist::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #23c55e;
  font-weight: bold;
}

.prose ul li.infolist::before {
  content: 'ℹ';
  position: absolute;
  left: 0;
  color: #3b82f6;
  font-weight: bold;
}

.prose blockquote {
  border-left: 4px solid #23c55e;
  padding-left: 1rem;
  font-style: italic;
  color: #6b7280;
}

/* Adaptation du style pour le mode mobile */
@media (max-width: 640px) {
  .prose ul, .prose ol {
    margin-left: 1rem;
  }
  
  .prose li {
    padding-left: 0.25rem;
  }
}
</style> 