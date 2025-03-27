<template>
    <div>
        <SEO title="Boutique Sécurité"
            description="Découvrez notre sélection d'équipements de protection individuelle (EPI), matériels de sécurité incendie et solutions électroniques professionnelles." />
        <div class="min-h-screen bg-gray-50">
            <!-- Hero Section -->
            <section class="relative py-32 bg-gradient-to-br from-[#111829] to-[#1a2436] overflow-hidden">
                <div class="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10"></div>
                <div class="absolute inset-0 bg-gradient-to-t from-[#111829] to-transparent"></div>
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div class="text-center" v-motion :initial="{ opacity: 0, y: 20 }" :enter="{
                        opacity: 1,
                        y: 0,
                        transition: {
                            duration: 800,
                            ease: 'easeOut'
                        }
                    }">
                        <span
                            class="inline-flex items-center px-4 py-1.5 bg-[#23c55e]/10 text-[#23c55e] rounded-full text-sm font-semibold mb-6 backdrop-blur-sm border border-[#23c55e]/20">
                            <span class="w-2 h-2 rounded-full bg-[#23c55e] mr-2"></span>
                            Équipements
                        </span>
                        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                            Notre Boutique
                        </h1>
                        <p class="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                            Des équipements de sécurité professionnels pour protéger vos collaborateurs et vos locaux
                        </p>
                    </div>
                </div>
            </section>

            <!-- Catégories -->
            <section class="py-16 bg-gray-50">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="text-center mb-12">
                        <h2 class="text-3xl font-bold text-[#111829] mb-4">Nos Catégories de Produits</h2>
                        <p class="text-gray-600 max-w-3xl mx-auto">
                            Découvrez notre gamme complète d'équipements de sécurité professionnels pour répondre à tous
                            vos besoins
                        </p>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <!-- Catégorie EPI -->
                        <div class="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl" v-motion
                            :initial="{ opacity: 0, y: 20 }"
                            :visible="{ opacity: 1, y: 0, transition: { delay: 200 } }">
                            <div class="aspect-w-16 aspect-h-9">
                                <img src="/images/boutique/category-epi.jpg"
                                    alt="Équipements de Protection Individuelle" class="w-full h-full object-cover" />
                                <div
                                    class="absolute inset-0 bg-gradient-to-t from-[#111829] to-transparent opacity-80 group-hover:opacity-90 transition-opacity">
                                </div>
                            </div>
                            <div class="absolute inset-0 flex flex-col items-center justify-center p-5 text-center">
                                <h3 class="text-2xl font-bold text-white mb-2">Équipements de Protection</h3>
                                <p class="text-gray-200 mb-6 max-w-xs">Protégez votre personnel avec nos équipements de
                                    sécurité certifiés</p>
                                <button @click="filterProducts('epi')"
                                    class="px-6 py-2 bg-white text-[#111829] rounded-lg hover:bg-[#23c55e] hover:text-white transition-colors">
                                    Découvrir
                                </button>
                            </div>
                        </div>

                        <!-- Catégorie Incendie -->
                        <div class="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl" v-motion
                            :initial="{ opacity: 0, y: 20 }"
                            :visible="{ opacity: 1, y: 0, transition: { delay: 400 } }">
                            <div class="aspect-w-16 aspect-h-9">
                                <img src="/images/boutique/category-incendie.jpeg" alt="Sécurité Incendie"
                                    class="w-full h-full object-cover" />
                                <div
                                    class="absolute inset-0 bg-gradient-to-t from-[#111829] to-transparent opacity-80 group-hover:opacity-90 transition-opacity">
                                </div>
                            </div>
                            <div class="absolute inset-0 flex flex-col items-center justify-center p-5 text-center">
                                <h3 class="text-2xl font-bold text-white mb-2">Sécurité Incendie</h3>
                                <p class="text-gray-200 mb-6 max-w-xs">Équipements de lutte contre l'incendie et de
                                    prévention</p>
                                <button @click="filterProducts('incendie')"
                                    class="px-6 py-2 bg-white text-[#111829] rounded-lg hover:bg-[#23c55e] hover:text-white transition-colors">
                                    Découvrir
                                </button>
                            </div>
                        </div>

                        <!-- Catégorie Électronique -->
                        <div class="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl" v-motion
                            :initial="{ opacity: 0, y: 20 }"
                            :visible="{ opacity: 1, y: 0, transition: { delay: 600 } }">
                            <div class="aspect-w-16 aspect-h-9">
                                <img src="/images/boutique/category-electronique.jpg" alt="Sécurité Électronique"
                                    class="w-full h-full object-cover" />
                                <div
                                    class="absolute inset-0 bg-gradient-to-t from-[#111829] to-transparent opacity-80 group-hover:opacity-90 transition-opacity">
                                </div>
                            </div>
                            <div class="absolute inset-0 flex flex-col items-center justify-center p-5 text-center">
                                <h3 class="text-2xl font-bold text-white mb-2">Sécurité Électronique</h3>
                                <p class="text-gray-200 mb-6 max-w-xs">Systèmes de surveillance et équipements de
                                    détection avancés</p>
                                <button @click="filterProducts('electronique')"
                                    class="px-6 py-2 bg-white text-[#111829] rounded-lg hover:bg-[#23c55e] hover:text-white transition-colors">
                                    Découvrir
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Filtres et produits -->
            <section class="py-12">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex flex-col md:flex-row gap-8">
                        <!-- Filtres -->
                        <div class="w-full md:w-64 flex-shrink-0">
                            <div class="bg-white rounded-xl shadow-md p-6 sticky top-24" v-motion
                                :initial="{ opacity: 0, x: -20 }" :enter="{ opacity: 1, x: 0 }">
                                <h3 class="text-lg font-semibold text-[#111829] mb-4">Filtres</h3>

                                <!-- Recherche -->
                                <div class="mb-6">
                                    <label for="search"
                                        class="block text-sm font-medium text-gray-700 mb-2">Recherche</label>
                                    <div class="relative">
                                        <input type="text" id="search" v-model="searchQuery"
                                            placeholder="Nom du produit..."
                                            class="w-full pl-10 pr-3 py-2 rounded-lg border border-gray-300 focus:ring-[#23c55e] focus:border-[#23c55e]" />
                                        <MagnifyingGlassIcon
                                            class="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                                    </div>
                                </div>

                                <!-- Prix -->
                                <div class="mb-6">
                                    <h4 class="font-medium text-gray-700 mb-2">Gamme de prix</h4>
                                    <div class="space-y-2">
                                        <label class="flex items-center space-x-2 text-sm text-gray-600">
                                            <input type="checkbox" v-model="priceRanges" value="0-50000"
                                                class="rounded text-[#23c55e] focus:ring-[#23c55e]">
                                            <span>0 - 50 000 FCFA</span>
                                        </label>
                                        <label class="flex items-center space-x-2 text-sm text-gray-600">
                                            <input type="checkbox" v-model="priceRanges" value="50000-100000"
                                                class="rounded text-[#23c55e] focus:ring-[#23c55e]">
                                            <span>50 000 - 100 000 FCFA</span>
                                        </label>
                                        <label class="flex items-center space-x-2 text-sm text-gray-600">
                                            <input type="checkbox" v-model="priceRanges" value="100000-200000"
                                                class="rounded text-[#23c55e] focus:ring-[#23c55e]">
                                            <span>100 000 - 200 000 FCFA</span>
                                        </label>
                                        <label class="flex items-center space-x-2 text-sm text-gray-600">
                                            <input type="checkbox" v-model="priceRanges" value="200000+"
                                                class="rounded text-[#23c55e] focus:ring-[#23c55e]">
                                            <span>200 000+ FCFA</span>
                                        </label>
                                    </div>
                                </div>

                                <!-- Disponibilité -->
                                <div class="mb-6">
                                    <h4 class="font-medium text-gray-700 mb-2">Disponibilité</h4>
                                    <div class="space-y-2">
                                        <label class="flex items-center space-x-2 text-sm text-gray-600">
                                            <input type="checkbox" v-model="showInStock"
                                                class="rounded text-[#23c55e] focus:ring-[#23c55e]">
                                            <span>En stock uniquement</span>
                                        </label>
                                    </div>
                                </div>

                                <!-- Bouton pour réinitialiser les filtres -->
                                <button @click="resetFilters"
                                    class="w-full py-2 px-4 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors text-sm font-medium">
                                    Réinitialiser les filtres
                                </button>
                            </div>
                        </div>

                        <!-- Liste des produits -->
                        <div class="flex-1">
                            <div v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0 }"
                                class="mb-6 flex items-center justify-between">
                                <h2 class="text-2xl font-bold text-[#111829]">
                                    {{activeCategory === 'all' ? 'Tous les produits' : categories.find(c => c.id ===
                                    activeCategory)?.name }}
                                </h2>
                                <div class="flex items-center space-x-2">
                                    <span class="text-sm text-gray-500">Trier par:</span>
                                    <select v-model="sortBy"
                                        class="py-1 px-2 border border-gray-300 rounded-lg text-sm focus:ring-[#23c55e] focus:border-[#23c55e]">
                                        <option value="featured">Recommandés</option>
                                        <option value="price-asc">Prix croissant</option>
                                        <option value="price-desc">Prix décroissant</option>
                                        <option value="name-asc">Nom (A-Z)</option>
                                        <option value="name-desc">Nom (Z-A)</option>
                                    </select>
                                </div>
                            </div>

                            <!-- Grille de produits -->
                            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                <div v-for="(product, index) in filteredProducts" :key="product.id" v-motion
                                    :initial="{ opacity: 0, scale: 0.95 }"
                                    :enter="{ opacity: 1, scale: 1, transition: { delay: index * 50 } }"
                                    class="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group">
                                    <div class="relative h-48">
                                        <img :src="product.image" :alt="product.name"
                                            class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" />
                                        <div v-if="product.isNew"
                                            class="absolute top-2 right-2 bg-white text-[#23c55e] text-xs font-bold px-2 py-1 rounded shadow-sm">
                                            Nouveau
                                        </div>
                                        <div v-if="!product.inStock"
                                            class="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                                            Rupture de stock
                                        </div>
                                    </div>
                                    <div class="p-5">
                                        <div class="flex justify-between items-start">
                                            <h3
                                                class="text-lg font-semibold text-[#111829] mb-2 group-hover:text-[#23c55e] transition-colors">
                                                {{ product.name }}</h3>
                                            <span
                                                class="text-[#23c55e] text-sm font-medium px-2 py-1 bg-[#23c55e]/10 rounded">Sur
                                                devis</span>
                                        </div>
                                        <p class="text-gray-600 text-sm mb-4 line-clamp-2">{{ product.description }}</p>
                                        <div class="flex justify-between items-center">
                                            <NuxtLink :to="`/boutique/${product.id}`"
                                                class="text-[#23c55e] hover:text-[#1ea550] text-sm font-medium">
                                                Détails
                                            </NuxtLink>
                                            <button @click="openOrderModal(product)"
                                                class="bg-[#23c55e] hover:bg-[#1ea550] text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors"
                                                :disabled="!product.inStock"
                                                :class="{ 'opacity-50 cursor-not-allowed': !product.inStock }">
                                                Demander un devis
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Message si aucun produit ne correspond aux filtres -->
                            <div v-if="filteredProducts.length === 0" class="py-12 text-center">
                                <div
                                    class="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <FaceFrownIcon class="w-8 h-8 text-gray-400" />
                                </div>
                                <h3 class="text-lg font-medium text-gray-800 mb-2">Aucun produit trouvé</h3>
                                <p class="text-gray-500">Essayez de modifier vos filtres ou votre recherche.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

        <!-- Modal de commande -->
        <transition name="fade">
            <div v-if="showOrderModal" class="fixed inset-0 z-50 flex items-center justify-center p-4">
                <div class="absolute inset-0 bg-black opacity-50" @click="showOrderModal = false"></div>
                <div class="relative bg-white rounded-xl shadow-2xl max-w-lg w-full mx-auto p-6 z-10">
                    <div class="flex justify-between items-start mb-4">
                        <h3 class="text-xl font-bold text-[#111829]">Demande de devis : {{ selectedProduct?.name }}</h3>
                        <button @click="showOrderModal = false" class="text-gray-400 hover:text-gray-500">
                            <XMarkIcon class="w-6 h-6" />
                        </button>
                    </div>

                    <div v-if="submitStatus.message" :class="[
                        'p-4 rounded-xl mb-6',
                        submitStatus.success ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'
                    ]">
                        {{ submitStatus.message }}
                    </div>

                    <form @submit.prevent="submitOrder" class="space-y-4">
                        <div class="grid grid-cols-2 gap-4">
                            <div class="col-span-2">
                                <label for="quantity"
                                    class="block text-sm font-medium text-gray-700 mb-2">Quantité</label>
                                <input type="number" id="quantity" v-model="orderForm.quantity" min="1"
                                    class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-[#23c55e] focus:border-[#23c55e]"
                                    required />
                            </div>

                            <div>
                                <label for="name" class="block text-sm font-medium text-gray-700 mb-2">Nom</label>
                                <input type="text" id="name" v-model="orderForm.name"
                                    class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-[#23c55e] focus:border-[#23c55e]"
                                    required />
                            </div>

                            <div>
                                <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                <input type="email" id="email" v-model="orderForm.email"
                                    class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-[#23c55e] focus:border-[#23c55e]"
                                    required />
                            </div>

                            <div>
                                <label for="phone"
                                    class="block text-sm font-medium text-gray-700 mb-2">Téléphone</label>
                                <input type="tel" id="phone" v-model="orderForm.phone"
                                    class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-[#23c55e] focus:border-[#23c55e]"
                                    required />
                            </div>

                            <div>
                                <label for="company" class="block text-sm font-medium text-gray-700 mb-2">Entreprise
                                    (optionnel)</label>
                                <input type="text" id="company" v-model="orderForm.company"
                                    class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-[#23c55e] focus:border-[#23c55e]" />
                            </div>

                            <div class="col-span-2">
                                <label for="message" class="block text-sm font-medium text-gray-700 mb-2">Message
                                    (optionnel)</label>
                                <textarea id="message" v-model="orderForm.message" rows="3"
                                    class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-[#23c55e] focus:border-[#23c55e]"></textarea>
                            </div>
                        </div>

                        <div class="pt-2">
                            <button type="submit"
                                class="w-full py-3 px-4 bg-[#23c55e] hover:bg-[#1ea550] text-white font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                :disabled="isSubmitting">
                                <span v-if="isSubmitting" class="flex items-center justify-center">
                                    <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                            stroke-width="4"></circle>
                                        <path class="opacity-75" fill="currentColor"
                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                                        </path>
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
import { ref, computed, watch } from 'vue'
import {
    MagnifyingGlassIcon,
    FaceFrownIcon,
    XMarkIcon,
    ShieldCheckIcon,
    FireIcon,
    CameraIcon
} from '@heroicons/vue/24/solid'
import { useNuxtApp } from '#app'

const { $analytics } = useNuxtApp()

// Catégories
const categories = [
    { id: 'all', name: 'Tous les produits', icon: 'MagnifyingGlassIcon', count: 18 },
    { id: 'epi', name: 'Équipements de Protection', icon: ShieldCheckIcon, count: 8 },
    { id: 'incendie', name: 'Sécurité Incendie', icon: FireIcon, count: 5 },
    { id: 'electronique', name: 'Sécurité Électronique', icon: CameraIcon, count: 5 }
]

// État
const activeCategory = ref('all')
const searchQuery = ref('')
const priceRanges = ref([])
const showInStock = ref(false)
const sortBy = ref('featured')
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

// Produits fictifs
const products = ref([
    {
        id: 1,
        name: "Casque de sécurité premium",
        description: "Casque de protection robuste avec aération, idéal pour les chantiers de construction.",
        price: 12500,
        category: "epi",
        image: "/images/boutique/casque.avif",
        inStock: true,
        isNew: true
    },
    {
        id: 2,
        name: "Gilet haute visibilité",
        description: "Gilet réfléchissant conforme aux normes de sécurité pour une visibilité optimale.",
        price: 8500,
        category: "epi",
        image: "/images/boutique/gilet.avif",
        inStock: true,
        isNew: false
    },
    {
        id: 3,
        name
        : "Extincteur CO2 5kg",
        description: "Extincteur à dioxyde de carbone pour feux de classe B et C, idéal pour les bureaux et les cuisines.",
        price: 45000,
        category: "incendie",
        image: "/images/boutique/extincteurs.jpg",
        inStock: true,
        isNew: false
    },
    {
        id: 4,
        name: "Détecteur de fumée",
        description: "Détecteur de fumée autonome avec alarme sonore et visuelle pour une sécurité accrue.",
        price: 15000,
        category: "incendie",
        image: "/images/boutique/detecteur-fumee.webp",
        inStock: true,
        isNew: false
    },
    {
        id: 5,
        name: "Caméra de surveillance IP",
        description: "Caméra de sécurité connectée avec vision nocturne et détection de mouvement.",
        price: 95000,
        category: "electronique",
        image: "/images/boutique/camera.jpg",
        inStock: true,
        isNew: true
    },
    {
        id: 6,
        name: "Gants de protection anti-coupure",
        description: "Gants résistants aux coupures et aux perforations, adaptés aux travaux de précision.",
        price: 7500,
        category: "epi",
        image: "/images/boutique/gants.avif",
        inStock: true,
        isNew: false
    },
    {
        id: 8,
        name: "Chaussures de sécurité S3",
        description: "Chaussures avec embout acier, semelle anti-perforation et absorption d'énergie au talon.",
        price: 32000,
        category: "epi",
        image: "/images/boutique/chaussures.avif",
        inStock: true,
        isNew: true
    }
])

// Filtrer les produits
const filteredProducts = computed(() => {
    let result = [...products.value]

    // Filtrer par catégorie
    if (activeCategory.value !== 'all') {
        result = result.filter(product => product.category === activeCategory.value)
    }

    // Filtrer par recherche
    if (searchQuery.value) {
        const query = searchQuery.value.toLowerCase()
        result = result.filter(product =>
            product.name.toLowerCase().includes(query) ||
            product.description.toLowerCase().includes(query)
        )
    }

    // Filtrer par disponibilité
    if (showInStock.value) {
        result = result.filter(product => product.inStock)
    }

    // Filtrer par gamme de prix
    if (priceRanges.value.length > 0) {
        result = result.filter(product => {
            return priceRanges.value.some(range => {
                if (range === '0-50000') return product.price >= 0 && product.price < 50000
                if (range === '50000-100000') return product.price >= 50000 && product.price < 100000
                if (range === '100000-200000') return product.price >= 100000 && product.price < 200000
                if (range === '200000+') return product.price >= 200000
                return false
            })
        })
    }

    // Trier les produits
    switch (sortBy.value) {
        case 'price-asc':
            result.sort((a, b) => a.price - b.price)
            break
        case 'price-desc':
            result.sort((a, b) => b.price - a.price)
            break
        case 'name-asc':
            result.sort((a, b) => a.name.localeCompare(b.name))
            break
        case 'name-desc':
            result.sort((a, b) => b.name.localeCompare(a.name))
            break
        case 'featured':
        default:
            // Les produits nouveaux en premier, puis par ordre de prix décroissant
            result.sort((a, b) => {
                if (a.isNew && !b.isNew) return -1
                if (!a.isNew && b.isNew) return 1
                return b.price - a.price
            })
    }

    return result
})

// Réinitialiser les filtres
const resetFilters = () => {
    activeCategory.value = 'all'
    searchQuery.value = ''
    priceRanges.value = []
    showInStock.value = false
    sortBy.value = 'featured'
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
const openOrderModal = (product) => {
    selectedProduct.value = product
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

// Fonction pour filtrer les produits par catégorie
const filterProducts = (category) => {
    activeCategory.value = category;

    // Faire défiler jusqu'à la section des produits
    setTimeout(() => {
        const productsSection = document.querySelector('.py-12');
        if (productsSection) {
            productsSection.scrollIntoView({ behavior: 'smooth' });
        }
    }, 100);
}

// Ajouter cette fonction pour voir si le support de la propriété currentPage existe
// et éviter l'erreur observée dans le code actuel
watch(activeCategory, (newCategory) => {
    console.log(`Catégorie sélectionnée: ${newCategory}`);
    // Suivre l'événement de changement de catégorie
    if ($analytics) {
        $analytics.trackEvent('Boutique', 'Filtre', `Catégorie: ${newCategory}`, 1);
    }
});
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

.aspect-w-16 {
    position: relative;
    padding-bottom: 56.25%;
    /* 16:9 */
}

.aspect-w-16>* {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}

.line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>