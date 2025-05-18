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

        <!-- Message d'erreur -->
        <div v-if="error" class="bg-red-50 border border-red-200 rounded-xl p-6 mb-8">
          <div class="flex items-start">
            <div class="flex-shrink-0">
              <XCircleIcon class="h-6 w-6 text-red-600" />
            </div>
            <div class="ml-3">
              <h3 class="text-lg font-medium text-red-800">Erreur</h3>
              <p class="mt-2 text-red-700">{{ error }}</p>
              <div class="mt-4">
                <NuxtLink to="/boutique" class="text-red-800 hover:text-red-600 font-medium">
                  Retourner à la boutique
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>

        <div v-if="!product && !error" class="flex justify-center items-center py-20">
          <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#23c55e]"></div>
        </div>

        <div v-else class="bg-white rounded-xl shadow-md overflow-hidden">
          <div class="md:flex">
            <!-- Image du produit -->
            <div class="md:w-1/2">
              <div class="relative h-72 sm:h-80 md:h-full">
                <ImageWithFallback 
                  :src="product.image" 
                  :alt="product.name" 
                  class="w-full h-full object-cover object-center" 
                />
                <div v-if="product.inStock === false" class="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Rupture de stock
                </div>
                <div v-else-if="product.isNew === true" class="absolute top-4 left-4 bg-white text-[#23c55e] text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                  Nouveau
                </div>
              </div>
            </div>

            <!-- Informations du produit -->
            <div class="md:w-1/2 p-6 md:p-8">
              <h1 class="text-xl sm:text-2xl font-bold text-[#111829] mb-2">{{ product.name }}</h1>
              <div class="inline-block bg-[#23c55e]/10 text-[#23c55e] px-3 py-1.5 rounded-full text-sm font-semibold mb-4 md:mb-6">Prix sur devis</div>

              <div class="border-t border-gray-200 pt-4 md:pt-6 mb-4 md:mb-6">
                <div class="text-gray-700 mb-4 md:mb-6 text-sm sm:text-base description-content" v-html="product.description"></div>

                <div class="flex items-center mb-3 md:mb-6">
                  <span class="mr-2 font-medium text-gray-700 text-sm sm:text-base">Disponibilité:</span>
                  <span v-if="product.inStock !== false" class="text-green-600 flex items-center text-sm sm:text-base">
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
                
                <!-- Caractéristiques du produit -->
                <div v-if="product.features && product.features.length > 0" class="mb-4 md:mb-6">
                  <span class="font-medium text-gray-700 block mb-2 text-sm sm:text-base">Caractéristiques:</span>
                  <ul class="list-disc list-inside space-y-1 text-gray-600 text-sm sm:text-base pl-2">
                    <li v-for="(feature, index) in product.features" :key="index" class="flex items-start">
                      <span class="inline-block w-2 h-2 rounded-full bg-[#23c55e] mt-1.5 mr-2 flex-shrink-0"></span>
                      <span>{{ getFeatureText(feature) }}</span>
                    </li>
                  </ul>
                </div>
              </div>

              <button 
                @click="openOrderModal(product)"
                class="w-full bg-[#23c55e] hover:bg-[#1ea550] text-white py-3 px-6 rounded-xl font-medium transition-colors"
                :disabled="product.inStock === false"
                :class="{'opacity-50 cursor-not-allowed': product.inStock === false}"
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

                <!-- Avantages -->
                <div class="mt-12 md:mt-16">
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

        <!-- Produits similaires -->
        <div v-if="relatedProducts.length > 0" class="mt-12 md:mt-16">
          <h2 class="text-xl sm:text-2xl font-bold text-[#111829] mb-6 md:mb-8">Produits similaires</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            <div 
              v-for="relatedProduct in relatedProducts" 
              :key="relatedProduct.id"
              class="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group"
            >
              <div class="aspect-w-1 aspect-h-1 relative">
                <ImageWithFallback 
                  :src="relatedProduct.image" 
                  :alt="relatedProduct.name"
                  class="w-full h-48 object-cover object-center group-hover:scale-105 transition-transform duration-500" 
                />
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
                    :disabled="relatedProduct.inStock === false"
                    :class="{'opacity-50 cursor-not-allowed': relatedProduct.inStock === false}"
                  >
                    Demander un devis
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>


        <!-- Message quand aucun produit similaire n'est disponible -->
        <div v-else-if="product && allProducts.length > 0" class="mt-12 md:mt-16">
          <h2 class="text-xl sm:text-2xl font-bold text-[#111829] mb-4">Produits similaires</h2>
          <div class="bg-gray-50 rounded-xl p-6 text-center">
            <p class="text-gray-600">Aucun produit similaire n'est disponible pour le moment.</p>
            <NuxtLink to="/boutique" class="inline-block mt-4 text-[#23c55e] hover:text-[#1ea550] font-medium">
              Retourner à la boutique
            </NuxtLink>
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
import { ref, computed, onMounted, nextTick, watch } from 'vue'
import { useRoute } from 'vue-router'
import { 
  ShoppingCartIcon,
  XMarkIcon,
  CheckCircleIcon,
  XCircleIcon,
  TruckIcon,
  ShieldCheckIcon,
  ChatBubbleLeftRightIcon,
  CreditCardIcon
} from '@heroicons/vue/24/solid'
import { useNuxtApp } from '#app'
import ImageWithFallback from '~/components/ImageWithFallback.vue'

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
const error = ref(null)

// Formulaire de commande
const orderForm = ref({
  name: '',
  email: '',
  phone: '',
  company: '',
  quantity: 1,
  message: ''
})

// Remplacer le code existant des produits statiques par la récupération depuis l'API
const allProducts = ref([])

// Fonction pour récupérer un produit par son ID
const fetchProduct = async (id) => {
  try {
    error.value = null;
    console.log(`Tentative de récupération du produit ${id}`);
    
    // Utiliser $fetch au lieu de useFetch pour un meilleur contrôle
    const response = await $fetch(`/api/boutique/product/${id}`, {
      method: 'GET',
      // Éviter le cache
      headers: {
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache'
      }
    });
    
    if (!response || !response.success) {
      error.value = response?.message || 'Produit non trouvé';
      product.value = null;
      return;
    }
    
    if (response && response.success) {
      console.log('Produit récupéré avec succès:', response.product);
      
      // Déboguer l'objet produit reçu
      const debugProduct = (prod) => {
        console.log('=== DÉBOGAGE PRODUIT ===');
        console.log('ID:', prod.id);
        console.log('Nom:', prod.name);
        console.log('Description:', prod.description?.substring(0, 30) + '...');
        console.log('Catégorie:', prod.category);
        console.log('Image:', prod.image);
        console.log('inStock:', prod.inStock, typeof prod.inStock);
        console.log('isNew:', prod.isNew, typeof prod.isNew);
        console.log('Features:', prod.features);
        console.log('=== FIN DÉBOGAGE ===');
      };
      
      // Assurez-vous que toutes les propriétés requises existent
      const productData = {
        id: response.product.id,
        name: response.product.name || 'Produit sans nom',
        description: response.product.description || 'Aucune description disponible',
        short_description: response.product.short_description || '',
        price: response.product.price || 0,
        category: response.product.category || 'epi',
        inStock: response.product.inStock === false ? false : true, // Par défaut en stock si non spécifié
        isNew: response.product.isNew === true ? true : false, // Par défaut pas nouveau si non spécifié
        features: processFeatures(response.product.features),
        image: response.product.image || '/images/placeholder-product.png'
      };
      
      // Fonction pour traiter les caractéristiques du produit
      function processFeatures(features) {
        console.log('Traitement des caractéristiques:', features);
        
        // Si pas de caractéristiques, retourner un tableau vide
        if (!features) return [];
        
        // Si c'est déjà un tableau, le retourner tel quel
        if (Array.isArray(features)) return features;
        
        // Si c'est une chaîne JSON, tenter de la parser
        if (typeof features === 'string') {
          try {
            const parsedFeatures = JSON.parse(features);
            console.log('Caractéristiques parsées:', parsedFeatures);
            
            // Si c'est un objet au format {"Caracteristique":"Valeur"}
            if (typeof parsedFeatures === 'object' && !Array.isArray(parsedFeatures)) {
              return Object.entries(parsedFeatures).map(([key, value]) => {
                // Si la clé est "text", "name" ou "value", utiliser directement l'objet
                if (key === 'text' || key === 'name' || key === 'value') {
                  return { text: value };
                }
                // Si la clé est "Caracteristique", n'utiliser que la valeur
                if (key === 'Caracteristique' || key.toLowerCase() === 'caracteristique') {
                  return { text: value };
                }
                // Sinon créer un objet avec le texte formaté "Clé: Valeur"
                return { text: `${key}: ${value}` };
              });
            }
            
            return Array.isArray(parsedFeatures) ? parsedFeatures : [parsedFeatures];
          } catch (e) {
            console.warn('Erreur de parsing des caractéristiques:', e);
            return [{ text: features }];
          }
        }
        
        // Si c'est un objet au format {"Caracteristique":"Valeur"}
        if (typeof features === 'object' && !Array.isArray(features)) {
          return Object.entries(features).map(([key, value]) => {
            // Si la clé est "text", "name" ou "value", utiliser directement l'objet
            if (key === 'text' || key === 'name' || key === 'value') {
              return { text: value };
            }
            // Si la clé est "Caracteristique", n'utiliser que la valeur
            if (key === 'Caracteristique' || key.toLowerCase() === 'caracteristique') {
              return { text: value };
            }
            // Sinon créer un objet avec le texte formaté "Clé: Valeur"
            return { text: `${key}: ${value}` };
          });
        }
        
        // Par défaut, retourner un tableau vide
        return [];
      }
      
      // Déboguer avant et après le traitement de l'image
      debugProduct(response.product);
      
      // Traitement de l'image pour être compatible avec Directus
      if (productData.image) {
        // Vérifier le format d'image
        console.log("Type d'image reçu:", typeof productData.image, productData.image);
        
        // Si l'image est une chaîne simple sans http ou /
        if (typeof productData.image === 'string' && 
            !productData.image.startsWith('http') && 
            !productData.image.startsWith('/')) {
          // C'est probablement un ID d'image Directus
          const directusUrl = import.meta.env.VITE_DIRECTUS_URL || 'http://localhost:8055';
          productData.image = `${directusUrl}/assets/${productData.image}`;
          console.log('Image Directus formatée:', productData.image);
        }
        // Si l'image est un objet avec une propriété id
        else if (typeof productData.image === 'object' && productData.image.id) {
          const directusUrl = import.meta.env.VITE_DIRECTUS_URL || 'http://localhost:8055';
          productData.image = `${directusUrl}/assets/${productData.image.id}`;
          console.log('Image Directus formatée à partir de l\'objet:', productData.image);
        }
      }
      
      product.value = productData;
      debugProduct(productData);
    } else {
      console.warn('Produit non trouvé ou erreur:', response);
      navigateTo('/boutique');
    }
  } catch (error) {
    console.error(`Erreur lors de la récupération du produit ${id}:`, error);
    navigateTo('/boutique');
  }
};

// Fonction pour récupérer tous les produits (pour les produits similaires)
const fetchAllProducts = async () => {
  try {
    console.log('Tentative de récupération de tous les produits');
    
    // Utiliser $fetch au lieu de useFetch pour un meilleur contrôle
    const response = await $fetch('/api/boutique/products', {
      method: 'GET',
      // Éviter le cache
      headers: {
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache'
      }
    });
    
    if (response && response.success) {
      console.log(`${response.products.length} produits récupérés avec succès`);
      allProducts.value = response.products;
    } else {
      console.warn('Erreur lors de la récupération des produits:', response);
      allProducts.value = [];
    }
  } catch (error) {
    console.error('Erreur lors de la récupération des produits:', error);
    allProducts.value = [];
  }
};

// Récupérer le produit en fonction de l'ID
onMounted(async () => {
  try {
    const productId = route.params.id;
    
    if (!productId) {
      console.error('Aucun ID de produit trouvé dans les paramètres de route');
      return navigateTo('/boutique');
    }
    
    // Récupérer le produit et les produits similaires
    await Promise.all([
      fetchProduct(productId),
      fetchAllProducts()
    ]);
    
    // Lancer un avertissement si le produit n'a pas été chargé
    await nextTick();
  if (!product.value) {
      console.warn('Le produit n\'a pas pu être chargé même après fetchProduct');
    }
  } catch (error) {
    console.error('Erreur lors du chargement initial du produit:', error);
    navigateTo('/boutique');
  }
});

// Surveiller les changements d'ID dans la route pour recharger le produit si nécessaire
watch(() => route.params.id, async (newId, oldId) => {
  if (newId && newId !== oldId) {
    console.log(`L'ID du produit a changé: ${oldId} -> ${newId}`);
    await fetchProduct(newId);
  }
});

// Obtenir les produits similaires
const relatedProducts = computed(() => {
  if (!product.value) return [];
  
  // Si aucun produit n'est disponible, retourner un tableau vide
  if (allProducts.value.length === 0) return [];
  
  // Filtrer d'abord par catégorie si disponible
  let similar = [];
  
  // 1. Essayer d'abord de trouver des produits de la même catégorie
  if (product.value.category) {
    similar = allProducts.value.filter(p => 
      p.category && 
      p.category === product.value.category && 
      p.id !== product.value.id
    );
  }
  
  // 2. Si nous n'avons pas assez de produits similaires, ajouter d'autres produits
  if (similar.length < 4) {
    const otherProducts = allProducts.value.filter(p => 
      p.id !== product.value.id && 
      !similar.some(s => s.id === p.id)
    );
    
    // Ajouter ces produits jusqu'à ce que nous ayons 4 produits au total
    similar = [...similar, ...otherProducts].slice(0, 4);
  } else {
    // Limiter à 4 produits
    similar = similar.slice(0, 4);
  }
  
  return similar;
});

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

// Récupérer le texte d'une caractéristique
const getFeatureText = (feature) => {
  if (!feature) return '';
  
  if (typeof feature === 'string') return feature;
  
  if (typeof feature === 'object') {
    if (feature.text) return feature.text;
    if (feature.name) return feature.name;
    if (feature.value) return feature.value;
    
    // Vérifier s'il s'agit d'une paire clé-valeur
    const entries = Object.entries(feature);
    if (entries.length === 1) {
      const [key, value] = entries[0];
      // Si la clé est "Caracteristique", n'utiliser que la valeur
      if (key === 'Caracteristique' || key.toLowerCase() === 'caracteristique') {
        return value;
      }
      if (key !== 'text' && key !== 'name' && key !== 'value') {
        return `${key}: ${value}`;
      }
    }
    
    // Si aucune propriété connue n'est trouvée, tenter une conversion JSON
    try {
      return JSON.stringify(feature);
    } catch (e) {
      return 'Caractéristique';
    }
  }
  
  return String(feature);
}

// Computed pour vérifier si le formulaire est valide
const isFormValid = computed(() => {
  return orderForm.value.name.trim() !== '' &&
         orderForm.value.email.trim() !== '' &&
         orderForm.value.phone.trim() !== '' &&
         orderForm.value.quantity > 0;
});

// Modifier la fonction sendWhatsAppMessage pour vérifier la validité
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

    // Numéro WhatsApp de l'entreprise
    const phoneNumber = '+221765984214';

    // Création du lien WhatsApp avec le message encodé
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Ouvrir WhatsApp dans un nouvel onglet
    window.open(whatsappLink, '_blank');

    // Suivre l'événement dans Analytics
    if ($analytics) {
        $analytics.trackEvent('Boutique', 'Devis WhatsApp', selectedProduct.value.name, 1);
    }

    // Fermer le modal après l'envoi
    showOrderModal.value = false;
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

/* Styles pour le contenu de la description */
:deep(.description-content) {
  /* Styles pour les listes */
  ul {
    list-style-type: disc;
    margin-left: 1.5rem;
    margin-bottom: 1rem;
  }
  
  ol {
    list-style-type: decimal;
    margin-left: 1.5rem;
    margin-bottom: 1rem;
  }
  
  li {
    margin-bottom: 0.5rem;
  }
  
  /* Styles pour les paragraphes */
  p {
    margin-bottom: 1rem;
  }
  
  /* Styles pour les titres */
  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    margin-top: 1.5rem;
    margin-bottom: 0.75rem;
  }
  
  /* Mise en évidence */
  strong, b {
    font-weight: 600;
  }
  
  em, i {
    font-style: italic;
  }
}
</style> 