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
                        <div class="w-full md:w-64 flex-shrink-0 relative">
                            <div class="bg-white rounded-xl shadow-md p-6 hidden md:block sticky-filter" v-motion
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

                                <!-- Catégories -->
                                <div class="mb-6">
                                    <h4 class="font-medium text-gray-700 mb-2">Catégories</h4>
                                    <div class="space-y-2">
                                        <label class="flex items-center space-x-2 text-sm text-gray-600">
                                            <input type="radio" v-model="activeCategory" value="all"
                                                class="text-[#23c55e] focus:ring-[#23c55e]">
                                            <span>Tous les produits</span>
                                        </label>
                                        <label class="flex items-center space-x-2 text-sm text-gray-600">
                                            <input type="radio" v-model="activeCategory" value="epi"
                                                class="text-[#23c55e] focus:ring-[#23c55e]">
                                            <span>Équipements de Protection</span>
                                        </label>
                                        <label class="flex items-center space-x-2 text-sm text-gray-600">
                                            <input type="radio" v-model="activeCategory" value="incendie"
                                                class="text-[#23c55e] focus:ring-[#23c55e]">
                                            <span>Sécurité Incendie</span>
                                        </label>
                                        <label class="flex items-center space-x-2 text-sm text-gray-600">
                                            <input type="radio" v-model="activeCategory" value="electronique"
                                                class="text-[#23c55e] focus:ring-[#23c55e]">
                                            <span>Sécurité Électronique</span>
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

                                <!-- Caractéristiques -->
                                <div class="mb-6">
                                    <h4 class="font-medium text-gray-700 mb-2">Caractéristiques</h4>
                                    <div class="space-y-2">
                                        <label class="flex items-center space-x-2 text-sm text-gray-600">
                                            <input type="checkbox" v-model="features" value="nouveau"
                                                class="rounded text-[#23c55e] focus:ring-[#23c55e]">
                                            <span>Nouveautés</span>
                                        </label>
                                        <label class="flex items-center space-x-2 text-sm text-gray-600">
                                            <input type="checkbox" v-model="features" value="certification"
                                                class="rounded text-[#23c55e] focus:ring-[#23c55e]">
                                            <span>Produits certifiés</span>
                                        </label>
                                        <label class="flex items-center space-x-2 text-sm text-gray-600">
                                            <input type="checkbox" v-model="features" value="connecte"
                                                class="rounded text-[#23c55e] focus:ring-[#23c55e]">
                                            <span>Produits connectés</span>
                                        </label>
                                    </div>
                                </div>

                                <!-- Type d'utilisation -->
                                <div class="mb-6">
                                    <h4 class="font-medium text-gray-700 mb-2">Utilisation</h4>
                                    <div class="space-y-2">
                                        <label class="flex items-center space-x-2 text-sm text-gray-600">
                                            <input type="checkbox" v-model="usageTypes" value="interieur"
                                                class="rounded text-[#23c55e] focus:ring-[#23c55e]">
                                            <span>Intérieur</span>
                                        </label>
                                        <label class="flex items-center space-x-2 text-sm text-gray-600">
                                            <input type="checkbox" v-model="usageTypes" value="exterieur"
                                                class="rounded text-[#23c55e] focus:ring-[#23c55e]">
                                            <span>Extérieur</span>
                                        </label>
                                        <label class="flex items-center space-x-2 text-sm text-gray-600">
                                            <input type="checkbox" v-model="usageTypes" value="professionnel"
                                                class="rounded text-[#23c55e] focus:ring-[#23c55e]">
                                            <span>Usage professionnel</span>
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

                        <!-- Filtres (Version mobile) -->
                        <div class="md:hidden w-full bg-white rounded-xl shadow-md p-6 mb-6" v-motion
                            :initial="{ opacity: 0, x: -20 }" :enter="{ opacity: 1, x: 0 }">
                            <div class="flex justify-between items-center mb-4">
                                <h3 class="text-lg font-semibold text-[#111829]">Filtres</h3>
                                <button @click="toggleMobileFilters" class="text-gray-500 hover:text-gray-700">
                                    <template v-if="showMobileFilters">
                                        <span class="sr-only">Fermer les filtres</span>
                                        <ChevronUpIcon class="w-5 h-5" />
                                    </template>
                                    <template v-else>
                                        <span class="sr-only">Ouvrir les filtres</span>
                                        <ChevronDownIcon class="w-5 h-5" />
                                    </template>
                                </button>
                            </div>

                            <div v-if="showMobileFilters">
                                <!-- Recherche -->
                                <div class="mb-6">
                                    <label for="search-mobile"
                                        class="block text-sm font-medium text-gray-700 mb-2">Recherche</label>
                                    <div class="relative">
                                        <input type="text" id="search-mobile" v-model="searchQuery"
                                            placeholder="Nom du produit..."
                                            class="w-full pl-10 pr-3 py-2 rounded-lg border border-gray-300 focus:ring-[#23c55e] focus:border-[#23c55e]" />
                                        <MagnifyingGlassIcon
                                            class="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                                    </div>
                                </div>

                                <!-- Catégories -->
                                <div class="mb-6">
                                    <h4 class="font-medium text-gray-700 mb-2">Catégories</h4>
                                    <div class="space-y-2">
                                        <label class="flex items-center space-x-2 text-sm text-gray-600">
                                            <input type="radio" v-model="activeCategory" value="all"
                                                class="text-[#23c55e] focus:ring-[#23c55e]">
                                            <span>Tous les produits</span>
                                        </label>
                                        <label class="flex items-center space-x-2 text-sm text-gray-600">
                                            <input type="radio" v-model="activeCategory" value="epi"
                                                class="text-[#23c55e] focus:ring-[#23c55e]">
                                            <span>Équipements de Protection</span>
                                        </label>
                                        <label class="flex items-center space-x-2 text-sm text-gray-600">
                                            <input type="radio" v-model="activeCategory" value="incendie"
                                                class="text-[#23c55e] focus:ring-[#23c55e]">
                                            <span>Sécurité Incendie</span>
                                        </label>
                                        <label class="flex items-center space-x-2 text-sm text-gray-600">
                                            <input type="radio" v-model="activeCategory" value="electronique"
                                                class="text-[#23c55e] focus:ring-[#23c55e]">
                                            <span>Sécurité Électronique</span>
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

                                <!-- Caractéristiques -->
                                <div class="mb-6">
                                    <h4 class="font-medium text-gray-700 mb-2">Caractéristiques</h4>
                                    <div class="space-y-2">
                                        <label class="flex items-center space-x-2 text-sm text-gray-600">
                                            <input type="checkbox" v-model="features" value="nouveau"
                                                class="rounded text-[#23c55e] focus:ring-[#23c55e]">
                                            <span>Nouveautés</span>
                                        </label>
                                        <label class="flex items-center space-x-2 text-sm text-gray-600">
                                            <input type="checkbox" v-model="features" value="certification"
                                                class="rounded text-[#23c55e] focus:ring-[#23c55e]">
                                            <span>Produits certifiés</span>
                                        </label>
                                        <label class="flex items-center space-x-2 text-sm text-gray-600">
                                            <input type="checkbox" v-model="features" value="connecte"
                                                class="rounded text-[#23c55e] focus:ring-[#23c55e]">
                                            <span>Produits connectés</span>
                                        </label>
                                    </div>
                                </div>

                                <!-- Type d'utilisation -->
                                <div class="mb-6">
                                    <h4 class="font-medium text-gray-700 mb-2">Utilisation</h4>
                                    <div class="space-y-2">
                                        <label class="flex items-center space-x-2 text-sm text-gray-600">
                                            <input type="checkbox" v-model="usageTypes" value="interieur"
                                                class="rounded text-[#23c55e] focus:ring-[#23c55e]">
                                            <span>Intérieur</span>
                                        </label>
                                        <label class="flex items-center space-x-2 text-sm text-gray-600">
                                            <input type="checkbox" v-model="usageTypes" value="exterieur"
                                                class="rounded text-[#23c55e] focus:ring-[#23c55e]">
                                            <span>Extérieur</span>
                                        </label>
                                        <label class="flex items-center space-x-2 text-sm text-gray-600">
                                            <input type="checkbox" v-model="usageTypes" value="professionnel"
                                                class="rounded text-[#23c55e] focus:ring-[#23c55e]">
                                            <span>Usage professionnel</span>
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
                        <div class="flex-1 pb-16">
                            <div v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0 }"
                                class="mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                                <h2 class="text-2xl font-bold text-[#111829]">
                                    {{activeCategory === 'all' ? 'Tous les produits' : categories.find(c => c.id ===
                                        activeCategory)?.name}}
                                </h2>
                                <div class="flex items-center space-x-2 w-full sm:w-auto">
                                    <span class="text-sm text-gray-500">Trier par:</span>
                                    <select v-model="sortBy"
                                        class="py-1 px-2 border border-gray-300 rounded-lg text-sm focus:ring-[#23c55e] focus:border-[#23c55e] w-full sm:w-auto">
                                        <option value="featured">Recommandés</option>
                                        <option value="name-asc">Nom (A-Z)</option>
                                        <option value="name-desc">Nom (Z-A)</option>
                                    </select>
                                </div>
                            </div>

                            <!-- Grille de produits -->
                            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                                <div v-for="(product, index) in paginatedProducts" :key="product.id" v-motion
                                    :initial="{ opacity: 0, scale: 0.95 }"
                                    :enter="{ opacity: 1, scale: 1, transition: { delay: index * 50 } }"
                                    class="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group">
                                    <div class="relative h-48">
                                        <ImageWithFallback 
                                            :src="product.image" 
                                            :alt="product.name"
                                            class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" 
                                        />
                                        <div v-if="product.isNew"
                                            class="absolute top-2 right-2 bg-white text-[#23c55e] text-xs font-bold px-2 py-1 rounded shadow-sm">
                                            Nouveau
                                        </div>
                                        <div v-if="!product.inStock"
                                            class="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                                            Rupture de stock
                                        </div>
                                    </div>
                                    <div class="p-4 sm:p-5">
                                        <div class="flex justify-between items-start">
                                            <h3
                                                class="text-base sm:text-lg font-semibold text-[#111829] mb-2 group-hover:text-[#23c55e] transition-colors">
                                                {{ product.name }}</h3>
                                            <span
                                                class="text-[#23c55e] text-xs sm:text-sm font-medium px-2 py-1 bg-[#23c55e]/10 rounded ml-2 flex-shrink-0">Sur
                                                devis</span>
                                        </div>
                                        <p class="text-gray-600 text-sm mb-4 line-clamp-2" v-html="product.short_description"></p>
                                        <div class="flex flex-wrap sm:flex-nowrap justify-between items-center gap-2">
                                            <NuxtLink :to="`/boutique/${product.id}`"
                                                class="text-[#23c55e] hover:text-[#1ea550] text-sm font-medium">
                                                Détails
                                            </NuxtLink>
                                            <button @click="openOrderModal(product)"
                                                class="bg-[#23c55e] hover:bg-[#1ea550] text-white py-2 px-3 sm:px-4 rounded-lg text-xs sm:text-sm font-medium transition-colors w-full sm:w-auto mt-2 sm:mt-0"
                                                :disabled="!product.inStock"
                                                :class="{ 'opacity-50 cursor-not-allowed': !product.inStock }">
                                                Demander un devis
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Pagination -->
                            <div v-if="totalPages > 1" class="mt-8 flex justify-center space-x-2">
                                <button 
                                    @click="changePage(currentPage - 1)" 
                                    :disabled="currentPage === 1"
                                    class="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    Précédent
                                </button>
                                <button 
                                    v-for="page in totalPages" 
                                    :key="page"
                                    @click="changePage(page)"
                                    class="px-4 py-2 rounded-lg border"
                                    :class="page === currentPage ? 'bg-[#23c55e] text-white border-[#23c55e]' : 'border-gray-300 text-gray-700 hover:bg-gray-50'"
                                >
                                    {{ page }}
                                </button>
                                <button 
                                    @click="changePage(currentPage + 1)" 
                                    :disabled="currentPage === totalPages"
                                    class="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    Suivant
                                </button>
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

                    <!-- Avantages -->
            <section class="py-12 bg-white">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <!-- Livraison -->
                        <div class="flex items-start space-x-4" v-motion :initial="{ opacity: 0, x: -20 }" :visible="{ opacity: 1, x: 0 }">
                            <div class="flex-shrink-0">
                                <div class="w-12 h-12 rounded-full bg-[#23c55e]/10 flex items-center justify-center">
                                    <TruckIcon class="w-6 h-6 text-[#23c55e]" />
                                </div>
                            </div>
                            <div>
                                <h3 class="text-lg font-semibold text-[#111829] mb-2">Livraison Gratuite</h3>
                                <p class="text-gray-600">À partir de 50 000 FCFA d'achat sur toute la Côte d'Ivoire</p>
                            </div>
                        </div>

                        <!-- Qualité -->
                        <div class="flex items-start space-x-4" v-motion :initial="{ opacity: 0, x: -20 }" :visible="{ opacity: 1, x: 0, transition: { delay: 200 } }">
                            <div class="flex-shrink-0">
                                <div class="w-12 h-12 rounded-full bg-[#23c55e]/10 flex items-center justify-center">
                                    <ShieldCheckIcon class="w-6 h-6 text-[#23c55e]" />
                                </div>
                            </div>
                            <div>
                                <h3 class="text-lg font-semibold text-[#111829] mb-2">Qualité Garantie</h3>
                                <p class="text-gray-600">Produits certifiés et garantis conformes aux normes</p>
                            </div>
                        </div>

                        <!-- Service Client -->
                        <div class="flex items-start space-x-4" v-motion :initial="{ opacity: 0, x: -20 }" :visible="{ opacity: 1, x: 0, transition: { delay: 400 } }">
                            <div class="flex-shrink-0">
                                <div class="w-12 h-12 rounded-full bg-[#23c55e]/10 flex items-center justify-center">
                                    <ChatBubbleLeftRightIcon class="w-6 h-6 text-[#23c55e]" />
                                </div>
                            </div>
                            <div>
                                <h3 class="text-lg font-semibold text-[#111829] mb-2">Service Client 24/7</h3>
                                <p class="text-gray-600">Une équipe dédiée à votre écoute pour vous conseiller</p>
                            </div>
                        </div>

                        <!-- Paiement -->
                        <div class="flex items-start space-x-4" v-motion :initial="{ opacity: 0, x: -20 }" :visible="{ opacity: 1, x: 0, transition: { delay: 600 } }">
                            <div class="flex-shrink-0">
                                <div class="w-12 h-12 rounded-full bg-[#23c55e]/10 flex items-center justify-center">
                                    <CreditCardIcon class="w-6 h-6 text-[#23c55e]" />
                                </div>
                            </div>
                            <div>
                                <h3 class="text-lg font-semibold text-[#111829] mb-2">Paiement Sécurisé</h3>
                                <p class="text-gray-600">Transactions sécurisées et paiement à la livraison</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
                </div>
            </section>
        </div>

        <!-- Modal de commande -->
        <transition name="fade">
            <div v-if="showOrderModal" class="fixed inset-0 z-50 flex items-center justify-center p-4">
                <div class="absolute inset-0 bg-black opacity-50" @click="showOrderModal = false"></div>
                <div
                    class="relative bg-white rounded-xl shadow-2xl max-w-lg w-full mx-auto p-4 sm:p-6 z-10 max-h-[90vh] overflow-y-auto">
                    <div class="flex justify-between items-start mb-4">
                        <h3 class="text-lg sm:text-xl font-bold text-[#111829]">Demande de devis : {{
                            selectedProduct?.name }}</h3>
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
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div class="col-span-1 sm:col-span-2">
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

                            <div class="col-span-1 sm:col-span-2">
                                <label for="message" class="block text-sm font-medium text-gray-700 mb-2">Message
                                    (optionnel)</label>
                                <textarea id="message" v-model="orderForm.message" rows="3"
                                    class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-[#23c55e] focus:border-[#23c55e]"></textarea>
                            </div>
                        </div>

                        <div class="pt-2">
                            <button 
                                type="submit"
                                class="w-full py-3 px-4 bg-[#23c55e] hover:bg-[#1ea550] text-white font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed mb-3"
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

                            <!-- Bouton WhatsApp -->
                            <button 
                                type="button"
                                @click="sendWhatsAppMessage"
                                :disabled="!isFormValid"
                                class="w-full py-3 px-4 bg-[#25D366] hover:bg-[#20BD5C] text-white font-medium rounded-lg transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#25D366]"
                            >
                                <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                                </svg>
                                Continuer sur WhatsApp
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
import { ref, computed, watch, onMounted, nextTick } from 'vue'
import {
    MagnifyingGlassIcon,
    FaceFrownIcon,
    XMarkIcon,
    ShieldCheckIcon,
    FireIcon,
    CameraIcon,
    ChevronUpIcon,
    ChevronDownIcon,
    TruckIcon,
    ChatBubbleLeftRightIcon,
    CreditCardIcon
} from '@heroicons/vue/24/solid'
import { useNuxtApp } from '#app'
import ImageWithFallback from '~/components/ImageWithFallback.vue'

const { $analytics } = useNuxtApp()

// État pour les filtres mobiles
const showMobileFilters = ref(true);

// Fonction pour afficher/masquer les filtres sur mobile
const toggleMobileFilters = () => {
    showMobileFilters.value = !showMobileFilters.value;
};

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
const showInStock = ref(false)
const features = ref([])
const usageTypes = ref([])
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

// Produits fictifs (ajout de données par défaut pour éviter l'écran vide)
const products = ref([
    {
        id: 1,
    name: "Kit d'intervention incendie",
    description: "<p>Chargement en cours...</p>",
    short_description: "Chargement en cours...",
    price: 0,
        category: "incendie",
    image: "/images/placeholder-product.png",
        inStock: true,
    isNew: false,
    features: [{"text":"Chargement..."}]
  }
])

// Variable pour suivre l'état du chargement
const isLoading = ref(true)
const loadError = ref(false)

// Ajouter ces variables dans la section script setup
const currentPage = ref(1)
const productsPerPage = 6

// Modifier le computed filteredProducts pour inclure la pagination
const paginatedProducts = computed(() => {
    const start = (currentPage.value - 1) * productsPerPage
    const end = start + productsPerPage
    return filteredProducts.value.slice(start, end)
})

const totalPages = computed(() => {
    return Math.ceil(filteredProducts.value.length / productsPerPage)
})

const changePage = (page) => {
    currentPage.value = page
    window.scrollTo({ top: 0, behavior: 'smooth' })
}

// Fonction pour récupérer les produits depuis l'API
const fetchProducts = async (forceRefresh = false) => {
    console.log(`Fetching products for category: ${activeCategory.value}`);
    isLoading.value = true;
    loadError.value = false;
    
    try {
        // Préparation des paramètres de l'API
        const apiEndpoint = '/api/boutique/products';
        const apiParams = {};
        
        // N'ajouter la catégorie que si elle n'est pas 'all'
        if (activeCategory.value !== 'all') {
            apiParams.category = activeCategory.value;
        }
        
        // Force un refraîchissement en ajoutant un timestamp
        if (forceRefresh) {
            apiParams._t = Date.now();
        }
        
        console.log('API request params:', apiParams);
        
        // Utiliser $fetch au lieu de useFetch pour plus de contrôle
        const response = await $fetch(apiEndpoint, {
            method: 'GET',
            params: apiParams,
            headers: {
              'Cache-Control': 'no-cache',
              'Pragma': 'no-cache'
            },
        });
        
        console.log('API response received directly:', response);
        
        if (response && response.success) {
            console.log(`Received ${response.products.length} products from API (source: ${response.source || 'unknown'})`);
            
            if (response.products.length === 0) {
                console.warn('No products returned from API');
                // Garder le produit de chargement si aucun produit n'est retourné
                return;
            }
            
            // Traitement des produits reçus
            products.value = response.products.map(product => {
                console.log(`Processing product in component: ${product.name} (${product.id})`);
                
                // Vérifier l'image
                if (!product.image || product.image === '') {
                    console.warn(`No image for product ${product.id}, using placeholder`);
                    product.image = '/images/placeholder-product.png';
                } else {
                    console.log(`Product ${product.id} image: ${product.image}`);
                }
                
                return product;
            });
        } else {
            console.error('Error in API response:', response);
            loadError.value = true;
        }
    } catch (error) {
        console.error('Exception during product fetch:', error);
        loadError.value = true;
    } finally {
        isLoading.value = false;
    }
};

// Initialisation immédiate au setup
activeCategory.value = 'all'; // Forcer la catégorie par défaut dès le début
nextTick(() => {
    fetchProducts(true); // Forcer un rafraîchissement complet
});

// S'assurer que fetchProducts est appelé lors du chargement initial
onMounted(() => {
    console.log('Component mounted, refreshing products...');
    // Réinitialisation et rechargement
    activeCategory.value = 'all';
    fetchProducts(true);
});

// S'assurer que les produits sont mis à jour lors du changement de catégorie
watch(activeCategory, (newCategory) => {
    console.log(`Category changed to ${newCategory}, refreshing products...`);
    fetchProducts();
});

// Filtrer les produits
const filteredProducts = computed(() => {
    // Si aucun produit n'est chargé ou en cas d'erreur, afficher le produit de chargement/erreur
    if (products.value.length === 0 || loadError.value) {
        return loadError.value ? [{
            id: 999,
            name: "Erreur de chargement",
            description: "<p>Impossible de charger les produits. Veuillez réessayer plus tard.</p>",
            short_description: "Erreur de chargement",
            price: 0,
            category: "all",
            image: "/images/placeholder-product.png",
            inStock: false,
            isNew: false,
            features: [{"text":"Erreur"}]
        }] : [{
            id: 999,
            name: "Chargement des produits...",
            description: "<p>Veuillez patienter pendant le chargement des produits.</p>",
            short_description: "Chargement en cours...",
            price: 0,
            category: "all",
            image: "/images/placeholder-product.png",
            inStock: true,
            isNew: false,
            features: [{"text":"Chargement..."}]
        }];
    }
    
    let result = [...products.value];

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

    // Filtrer par caractéristiques
    if (features.value.length > 0) {
        result = result.filter(product => {
            const hasNewFeature = features.value.includes('nouveau') ? product.isNew : true;
            const hasCertification = features.value.includes('certification') ?
                product.description.toLowerCase().includes('certifi') ||
                product.description.toLowerCase().includes('norme') : true;
            const isConnected = features.value.includes('connecte') ?
                product.description.toLowerCase().includes('connect') ||
                product.description.toLowerCase().includes('smartphone') ||
                product.description.toLowerCase().includes('application') : true;

            return hasNewFeature && hasCertification && isConnected;
        });
    }

    // Filtrer par type d'utilisation
    if (usageTypes.value.length > 0) {
        result = result.filter(product => {
            const isInterior = usageTypes.value.includes('interieur') ?
                product.description.toLowerCase().includes('intérieur') ||
                product.category === 'incendie' ||
                product.category === 'electronique' : true;

            const isExterior = usageTypes.value.includes('exterieur') ?
                product.description.toLowerCase().includes('extérieur') ||
                product.category === 'epi' : true;

            const isProfessional = usageTypes.value.includes('professionnel') ?
                product.description.toLowerCase().includes('professionnel') ||
                product.description.toLowerCase().includes('travail') ||
                product.category === 'epi' : true;

            return isInterior && isExterior && isProfessional;
        });
    }

    // Trier les produits
    switch (sortBy.value) {
        case 'name-asc':
            result.sort((a, b) => a.name.localeCompare(b.name))
            break
        case 'name-desc':
            result.sort((a, b) => b.name.localeCompare(a.name))
            break
        case 'featured':
        default:
            // Les produits nouveaux en premier, puis par ordre alphabétique
            result.sort((a, b) => {
                if (a.isNew && !b.isNew) return -1
                if (!a.isNew && b.isNew) return 1
                return a.name.localeCompare(b.name)
            })
    }

    return result
})

// Réinitialiser les filtres
const resetFilters = () => {
    activeCategory.value = 'all'
    searchQuery.value = ''
    showInStock.value = false
    features.value = []
    usageTypes.value = []
    sortBy.value = 'featured'
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

// Ajouter après la définition des computed
watch([activeCategory, searchQuery, showInStock, sortBy], () => {
    currentPage.value = 1
})

// Dans la section script, ajouter la fonction sendWhatsAppMessage
const sendWhatsAppMessage = () => {
    // Vérifier si le formulaire est valide
    if (!isFormValid.value) {
        return;
    }
    
    // Formatage du message
    const message = `Bonjour, je souhaite avoir un devis pour le produit suivant :\n\n` +
        `*${selectedProduct.value.name}*\n` +
        `Quantité : ${orderForm.value.quantity}\n\n` +
        `Mes coordonnées :\n` +
        `Nom : ${orderForm.value.name}\n` +
        `Email : ${orderForm.value.email}\n` +
        `Téléphone : ${orderForm.value.phone}\n` +
        (orderForm.value.company ? `Entreprise : ${orderForm.value.company}\n` : '') +
        (orderForm.value.message ? `\nMessage : ${orderForm.value.message}` : '');

    // Numéro WhatsApp de l'entreprise (à remplacer par le vrai numéro)
    const phoneNumber = '+2250700000000';

    // Création du lien WhatsApp avec le message encodé
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Ouvrir WhatsApp dans un nouvel onglet
    window.open(whatsappLink, '_blank');

    // Suivre l'événement dans Analytics
    if ($analytics) {
        $analytics.trackEvent('Boutique', 'Devis WhatsApp', selectedProduct.value.name, 1);
    }
}

// Computed pour vérifier si le formulaire est valide
const isFormValid = computed(() => {
    return orderForm.value.name.trim() !== '' &&
           orderForm.value.email.trim() !== '' &&
           orderForm.value.phone.trim() !== '' &&
           orderForm.value.quantity > 0;
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

/* Styles spécifiques pour la sidebar fixe */
@media (min-width: 768px) {
    .sticky-filter {
        position: sticky !important;
        top: 100px !important;
        max-height: calc(100vh - 120px) !important;
        min-height: 800px !important;
        overflow-y: auto !important;
        z-index: 10;
        scrollbar-width: thin;
        padding-bottom: 2rem !important;
    }
    
    /* Style pour la scrollbar */
    .sticky-filter::-webkit-scrollbar {
        width: 4px;
    }
    
    .sticky-filter::-webkit-scrollbar-track {
        background: #f1f1f1;
        border-radius: 10px;
    }
    
    .sticky-filter::-webkit-scrollbar-thumb {
        background: #c5c5c5;
        border-radius: 10px;
    }
    
    .sticky-filter::-webkit-scrollbar-thumb:hover {
        background: #23c55e;
    }
}
</style>