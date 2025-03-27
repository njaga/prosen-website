<template>
  <div>
    <SEO 
      :title="product ? product.name : 'Détails du produit'"
      :description="product ? product.description : 'Détails du produit de sécurité'"
    />
    <div class="min-h-screen bg-gray-50 py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Fil d'Ariane -->
        <nav class="flex mb-8 text-sm">
          <NuxtLink to="/" class="text-gray-500 hover:text-[#23c55e]">Accueil</NuxtLink>
          <span class="mx-2 text-gray-400">/</span>
          <NuxtLink to="/boutique" class="text-gray-500 hover:text-[#23c55e]">Boutique</NuxtLink>
          <span class="mx-2 text-gray-400">/</span>
          <span class="text-[#23c55e] font-medium">{{ product ? product.name : 'Chargement...' }}</span>
        </nav>

        <div v-if="!product" class="flex justify-center items-center py-20">
          <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#23c55e]"></div>
        </div>

        <div v-else class="bg-white rounded-xl shadow-md overflow-hidden">
          <div class="md:flex">
            <!-- Image du produit -->
            <div class="md:w-1/2">
              <div class="relative h-72 sm:h-80 md:h-full">
                <img :src="product.image" :alt="product.name" class="w-full h-full object-cover object-center" />
                <div v-if="!product.inStock" class="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Rupture de stock
                </div>
                <div v-else-if="product.isNew" class="absolute top-4 left-4 bg-white text-[#23c55e] text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                  Nouveau
                </div>
              </div>
            </div>

            <!-- Informations du produit -->
            <div class="md:w-1/2 p-6 md:p-8">
              <h1 class="text-xl sm:text-2xl font-bold text-[#111829] mb-2">{{ product.name }}</h1>
              <div class="inline-block bg-[#23c55e]/10 text-[#23c55e] px-3 py-1.5 rounded-full text-sm font-semibold mb-4 md:mb-6">Prix sur devis</div>

              <div class="border-t border-gray-200 pt-4 md:pt-6 mb-4 md:mb-6">
                <p class="text-gray-700 mb-4 md:mb-6 text-sm sm:text-base">{{ product.description }}</p>

                <div class="flex items-center mb-3 md:mb-6">
                  <span class="mr-2 font-medium text-gray-700 text-sm sm:text-base">Disponibilité:</span>
                  <span v-if="product.inStock" class="text-green-600 flex items-center text-sm sm:text-base">
                    <CheckCircleIcon class="w-4 h-4 sm:w-5 sm:h-5 mr-1" /> En stock
                  </span>
                  <span v-else class="text-red-600 flex items-center text-sm sm:text-base">
                    <XCircleIcon class="w-4 h-4 sm:w-5 sm:h-5 mr-1" /> Rupture de stock
                  </span>
                </div>

                <div class="mb-4 md:mb-6">
                  <span class="font-medium text-gray-700 text-sm sm:text-base">Catégorie:</span>
                  <span class="ml-2 text-gray-600 text-sm sm:text-base">{{ getCategoryName(product.category) }}</span>
                </div>
              </div>

              <button 
                @click="openOrderModal(product)"
                class="w-full bg-[#23c55e] hover:bg-[#1ea550] text-white py-3 px-6 rounded-xl font-medium transition-colors"
                :disabled="!product.inStock"
                :class="{'opacity-50 cursor-not-allowed': !product.inStock}"
              >
                <ShoppingCartIcon class="w-5 h-5 inline-block mr-2" />
                Demander un devis
              </button>

              <div class="mt-4 md:mt-6 text-gray-500 text-xs sm:text-sm">
                <p>Notre équipe commerciale vous contactera pour vous proposer un devis personnalisé.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Produits similaires -->
        <div class="mt-12 md:mt-16">
          <h2 class="text-xl sm:text-2xl font-bold text-[#111829] mb-6 md:mb-8">Produits similaires</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            <div 
              v-for="relatedProduct in relatedProducts" 
              :key="relatedProduct.id"
              class="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group"
            >
              <div class="aspect-w-1 aspect-h-1 relative">
                <img :src="relatedProduct.image" :alt="relatedProduct.name" class="w-full h-48 object-cover object-center group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div class="p-4 sm:p-5">
                <div class="flex justify-between items-start">
                  <h3 class="text-base sm:text-lg font-semibold text-[#111829] mb-2 group-hover:text-[#23c55e] transition-colors">{{ relatedProduct.name }}</h3>
                  <span class="text-[#23c55e] text-xs sm:text-sm font-medium px-2 py-1 bg-[#23c55e]/10 rounded ml-2 flex-shrink-0">Sur devis</span>
                </div>
                <div class="flex flex-wrap sm:flex-nowrap justify-between items-center gap-2 mt-4">
                  <NuxtLink 
                    :to="`/boutique/${relatedProduct.id}`" 
                    class="text-[#23c55e] hover:text-[#1ea550] text-sm font-medium"
                  >
                    Détails
                  </NuxtLink>
                  <button 
                    @click="openOrderModal(relatedProduct)"
                    class="bg-[#23c55e] hover:bg-[#1ea550] text-white py-2 px-3 sm:px-4 rounded-lg text-xs sm:text-sm font-medium transition-colors w-full sm:w-auto mt-2 sm:mt-0"
                    :disabled="!relatedProduct.inStock"
                    :class="{'opacity-50 cursor-not-allowed': !relatedProduct.inStock}"
                  >
                    Demander un devis
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal de commande (même que dans index.vue) -->
    <transition name="fade">
      <div v-if="showOrderModal" class="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div class="absolute inset-0 bg-black opacity-50" @click="showOrderModal = false"></div>
        <div class="relative bg-white rounded-xl shadow-2xl max-w-lg w-full mx-auto p-4 sm:p-6 z-10 max-h-[90vh] overflow-y-auto">
          <div class="flex justify-between items-start mb-4">
            <h3 class="text-lg sm:text-xl font-bold text-[#111829]">Demande de devis : {{ selectedProduct?.name }}</h3>
            <button @click="showOrderModal = false" class="text-gray-400 hover:text-gray-500">
              <XMarkIcon class="w-6 h-6" />
            </button>
          </div>

          <div v-if="submitStatus.message" 
               :class="[
                 'p-4 rounded-xl mb-6', 
                 submitStatus.success ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'
               ]">
            {{ submitStatus.message }}
          </div>

          <form @submit.prevent="submitOrder" class="space-y-4">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div class="col-span-1 sm:col-span-2">
                <label for="quantity" class="block text-sm font-medium text-gray-700 mb-2">Quantité</label>
                <input 
                  type="number" 
                  id="quantity" 
                  v-model="orderForm.quantity" 
                  min="1"
                  class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-[#23c55e] focus:border-[#23c55e]"
                  required
                />
              </div>
              
              <div>
                <label for="name" class="block text-sm font-medium text-gray-700 mb-2">Nom</label>
                <input 
                  type="text" 
                  id="name" 
                  v-model="orderForm.name" 
                  class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-[#23c55e] focus:border-[#23c55e]"
                  required
                />
              </div>
              
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  v-model="orderForm.email" 
                  class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-[#23c55e] focus:border-[#23c55e]"
                  required
                />
              </div>
              
              <div>
                <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">Téléphone</label>
                <input 
                  type="tel" 
                  id="phone" 
                  v-model="orderForm.phone" 
                  class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-[#23c55e] focus:border-[#23c55e]"
                  required
                />
              </div>
              
              <div>
                <label for="company" class="block text-sm font-medium text-gray-700 mb-2">Entreprise (optionnel)</label>
                <input 
                  type="text" 
                  id="company" 
                  v-model="orderForm.company" 
                  class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-[#23c55e] focus:border-[#23c55e]"
                />
              </div>
              
              <div class="col-span-1 sm:col-span-2">
                <label for="message" class="block text-sm font-medium text-gray-700 mb-2">Message (optionnel)</label>
                <textarea 
                  id="message" 
                  v-model="orderForm.message" 
                  rows="3"
                  class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-[#23c55e] focus:border-[#23c55e]"
                ></textarea>
              </div>
            </div>
            
            <div class="pt-2">
              <button 
                type="submit"
                class="w-full py-3 px-4 bg-[#23c55e] hover:bg-[#1ea550] text-white font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                :disabled="isSubmitting"
              >
                <span v-if="isSubmitting" class="flex items-center justify-center">
                  <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Traitement en cours...
                </span>
                <span v-else>Envoyer la demande</span>
              </button>
            </div>
          </form>

          <p class="mt-4 text-sm text-gray-500">
            Notre équipe commerciale vous contactera dans les plus brefs délais avec un devis personnalisé.
          </p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { 
  ShoppingCartIcon,
  XMarkIcon,
  CheckCircleIcon,
  XCircleIcon
} from '@heroicons/vue/24/solid'
import { useNuxtApp } from '#app'

const { $analytics } = useNuxtApp()
const route = useRoute()

// État
const product = ref(null)
const showOrderModal = ref(false)
const selectedProduct = ref(null)
const isSubmitting = ref(false)
const submitStatus = ref({
  success: null,
  message: ''
})

// Formulaire de commande
const orderForm = ref({
  name: '',
  email: '',
  phone: '',
  company: '',
  quantity: 1,
  message: ''
})

// Produits fictifs (identiques à ceux de index.vue)
const allProducts = ref([
  {
    id: 1,
    name: "Casque de sécurité premium",
    description: "Casque de protection robuste avec aération, idéal pour les chantiers de construction. Conçu selon les normes de sécurité les plus strictes, ce casque offre une protection supérieure contre les chutes d'objets et les impacts. Sa coque en ABS de haute qualité assure durabilité et résistance, tandis que son système d'aération innovant garde la tête au frais même lors des journées chaudes.",
    price: 12500,
    category: "epi",
    image: "/images/boutique/casque.avif",
    inStock: true,
    isNew: true
  },
  {
    id: 2,
    name: "Gilet haute visibilité",
    description: "Gilet réfléchissant conforme aux normes de sécurité pour une visibilité optimale. Équipé de bandes réfléchissantes 3M, ce gilet assure une visibilité maximale dans toutes les conditions de luminosité. Fabriqué en tissu respirant et léger, il offre un confort optimal même lors d'une utilisation prolongée. Idéal pour les travailleurs de chantier, les agents de circulation et toute personne travaillant en extérieur.",
    price: 8500,
    category: "epi",
    image: "/images/boutique/gilet.avif",
    inStock: true,
    isNew: false
  },
  {
    id: 3,
    name: "Détecteur de fumée intelligent",
    description: "Détecteur connecté avec alarme puissante et notification sur smartphone. Ce détecteur de dernière génération utilise une technologie avancée pour détecter rapidement la présence de fumée. En cas d'alerte, il déclenche une alarme de 85 dB et envoie immédiatement une notification sur votre smartphone, même lorsque vous êtes absent. Installation facile et batterie longue durée pour une tranquillité d'esprit maximale.",
    price: 25000,
    category: "incendie",
    image: "/images/boutique/detecteur.jpg",
    inStock: true,
    isNew: true
  },
  {
    id: 4,
    name: "Caméra de surveillance HD",
    description: "Caméra 1080p avec vision nocturne et détection de mouvement avancée. Cette caméra de surveillance haute définition capture des images d'une clarté exceptionnelle de jour comme de nuit grâce à sa technologie infrarouge. Dotée d'un système intelligent de détection de mouvement, elle vous alerte immédiatement en cas d'activité suspecte. Compatible avec les principaux systèmes domotiques, son installation est simple et rapide.",
    price: 85000,
    category: "electronique",
    image: "/images/boutique/camera.jpg",
    inStock: true,
    isNew: false
  },
  {
    id: 5,
    name: "Extincteur à poudre 6kg",
    description: "Extincteur polyvalent pour feux de classe A, B et C avec support mural inclus. Cet extincteur à poudre ABC est efficace contre les feux de solides, de liquides et de gaz. Son fonctionnement simple et intuitif permet une utilisation rapide en cas d'urgence. Livré avec un support mural robuste et un manomètre pour vérifier facilement la pression. Conforme aux normes de sécurité en vigueur.",
    price: 45000,
    category: "incendie",
    image: "/images/boutique/extincteur.avif",
    inStock: true,
    isNew: false
  },
  {
    id: 6,
    name: "Gants de protection anti-coupure",
    description: "Gants résistants aux coupures et aux perforations, adaptés aux travaux de précision. Fabriqués avec des fibres haute performance et un revêtement en polyuréthane, ces gants offrent une protection optimale contre les coupures tout en préservant la dextérité. Leur design ergonomique assure un confort optimal même lors d'une utilisation prolongée. Idéaux pour les travaux nécessitant une manipulation d'objets tranchants.",
    price: 7500,
    category: "epi",
    image: "/images/boutique/gants.avif",
    inStock: true,
    isNew: false
  },
  {
    id: 7,
    name: "Système d'alarme sans fil",
    description: "Kit complet avec centrale, détecteurs de mouvement et sirènes pour protection résidentielle. Ce système d'alarme sans fil de dernière génération offre une protection complète pour votre domicile ou votre entreprise. Le kit comprend une centrale, des détecteurs de mouvement, des contacts de porte/fenêtre et une sirène puissante. Contrôlable via smartphone, il vous permet de surveiller votre propriété à distance en toute simplicité.",
    price: 195000,
    category: "electronique",
    image: "/images/boutique/detecteur-fumee.webp",
    inStock: false,
    isNew: false
  },
  {
    id: 8,
    name: "Chaussures de sécurité S3",
    description: "Chaussures avec embout acier, semelle anti-perforation et absorption d'énergie au talon. Ces chaussures de sécurité haut de gamme répondent aux normes S3, offrant une protection complète pour les environnements de travail exigeants. Leur embout en acier protège contre les chutes d'objets, tandis que la semelle anti-perforation prévient les blessures causées par les objets pointus. Le design ergonomique et les matériaux respirants assurent un confort optimal toute la journée.",
    price: 32000,
    category: "epi",
    image: "/images/boutique/chaussures.avif",
    inStock: true,
    isNew: true
  },
  {
    id: 9,
    name: "Kit de premiers secours",
    description: "Mallette complète avec équipements essentiels pour situations d'urgence. Ce kit de premiers secours contient tous les éléments nécessaires pour répondre efficacement aux situations d'urgence: bandages, compresses, ciseaux, gants, couverture de survie, etc. La mallette robuste et étanche protège son contenu et permet un transport facile. Indispensable pour les entreprises, les véhicules et les domiciles.",
    price: 18500,
    category: "incendie",
    image: "/images/boutique/kit-secours.jpg",
    inStock: true,
    isNew: false
  }
])

// Récupérer le produit en fonction de l'ID
onMounted(() => {
  const productId = parseInt(route.params.id)
  product.value = allProducts.value.find(p => p.id === productId)
  
  // Si le produit n'existe pas, rediriger vers la boutique
  if (!product.value) {
    navigateTo('/boutique')
  }
})

// Obtenir les produits similaires
const relatedProducts = computed(() => {
  if (!product.value) return []
  
  return allProducts.value
    .filter(p => p.category === product.value.category && p.id !== product.value.id)
    .slice(0, 4)
})

// Obtenir le nom de la catégorie
const getCategoryName = (categoryId) => {
  const categories = {
    'epi': 'Équipements de Protection',
    'incendie': 'Sécurité Incendie',
    'electronique': 'Sécurité Électronique'
  }
  return categories[categoryId] || categoryId
}

// Formater le prix
const formatPrice = (price) => {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'XOF',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price)
}

// Ouvrir le modal de commande
const openOrderModal = (prod) => {
  selectedProduct.value = prod
  showOrderModal.value = true
  
  // Réinitialiser le formulaire
  orderForm.value = {
    name: '',
    email: '',
    phone: '',
    company: '',
    quantity: 1,
    message: ''
  }
  
  submitStatus.value = {
    success: null,
    message: ''
  }
}

// Soumettre la commande
const submitOrder = async () => {
  isSubmitting.value = true
  submitStatus.value = { success: null, message: '' }
  
  try {
    const response = await fetch('/api/boutique/order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        product: {
          id: selectedProduct.value.id,
          name: selectedProduct.value.name,
        },
        ...orderForm.value
      }),
    })

    const result = await response.json()
    
    if (result.success) {
      submitStatus.value = {
        success: true,
        message: 'Votre demande a été envoyée avec succès ! Notre équipe commerciale vous contactera dans les plus brefs délais.'
      }
      
      // Réinitialiser le formulaire après succès
      orderForm.value = {
        name: '',
        email: '',
        phone: '',
        company: '',
        quantity: 1,
        message: ''
      }
      
      // Suivre l'événement de soumission réussie
      if ($analytics) {
        $analytics.trackEvent('Boutique', 'Commande', selectedProduct.value.name, 1)
      }
      
      // Fermer le modal après 3 secondes
      setTimeout(() => {
        showOrderModal.value = false
      }, 3000)
    } else {
      submitStatus.value = {
        success: false,
        message: result.message || 'Une erreur est survenue. Veuillez réessayer.'
      }
    }
  } catch (error) {
    console.error('Erreur lors de l\'envoi de la commande:', error)
    submitStatus.value = {
      success: false,
      message: 'Une erreur est survenue. Veuillez réessayer.'
    }
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.aspect-w-1 {
  position: relative;
  padding-bottom: 100%;
}

.aspect-w-1 > * {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

@media (max-width: 768px) {
  .aspect-w-1 {
    padding-bottom: 75%;
  }
}
</style> 