<template>
  <div class="min-h-screen flex flex-col">
    <!-- Header avec effet de verre -->
    <header class="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
      <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-20">
          <!-- Logo -->
          <div class="flex-shrink-0">
            <NuxtLink to="/" class="flex items-center space-x-3">
              <img src="/images/logo.png" alt="PROSEN" class="h-10 w-auto" />
              <span class="text-2xl font-bold bg-gradient-to-r from-[#111829] to-[#23c55e] bg-clip-text text-transparent">
                PROSEN
              </span>
            </NuxtLink>
          </div>

          <!-- Navigation desktop -->
          <div class="hidden md:flex items-center space-x-8">
            <NuxtLink 
              to="/"
              class="relative group px-3 py-2 text-gray-700 hover:text-[#23c55e] transition-colors duration-200"
              :class="{ 'text-[#23c55e]': $route.path === '/' }"
            >
              <span>Accueil</span>
              <span 
                class="absolute bottom-0 left-0 w-full h-0.5 bg-[#23c55e] transform transition-transform duration-200"
                :class="$route.path === '/' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'"
              ></span>
            </NuxtLink>
            
            <div class="relative group">
              <button
                @mouseenter="showServicesMenu = true"
                @mouseleave="showServicesMenu = false"
                class="relative group px-3 py-2 text-gray-700 hover:text-[#23c55e] transition-colors duration-200 flex items-center"
                :class="{ 'text-[#23c55e]': $route.path.startsWith('/services') }"
              >
                <span>Nos Services</span>
                <span 
                  class="absolute bottom-0 left-0 w-full h-0.5 bg-[#23c55e] transform transition-transform duration-200"
                  :class="$route.path.startsWith('/services') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'"
                ></span>
              </button>
              
              <!-- Dropdown Menu -->
              <div 
                v-show="showServicesMenu"
                @mouseenter="showServicesMenu = true"
                @mouseleave="showServicesMenu = false"
                class="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 w-[600px] bg-white rounded-xl shadow-xl border border-gray-100 z-50 overflow-hidden transition-all duration-300"
              >
                <div class="grid grid-cols-2 gap-4 p-6">
                  <!-- Colonne 1 -->
                  <div>
                    <NuxtLink 
                      to="/services/surveillance-gardiennage" 
                      class="flex items-start p-3 rounded-lg hover:bg-gray-50"
                    >
                      <div class="flex-shrink-0 w-10 h-10 bg-[#23c55e]/10 rounded-lg flex items-center justify-center">
                        <ShieldCheckIcon class="w-6 h-6 text-[#23c55e]" />
                      </div>
                      <div class="ml-4">
                        <h3 class="text-base font-medium text-gray-900">Surveillance & Gardiennage</h3>
                        <p class="mt-1 text-sm text-gray-500 line-clamp-1">Sécurité physique 24/7 par des agents qualifiés</p>
                      </div>
                    </NuxtLink>
                    
                    <NuxtLink 
                      to="/services/securite-electronique" 
                      class="flex items-start p-3 rounded-lg hover:bg-gray-50"
                    >
                      <div class="flex-shrink-0 w-10 h-10 bg-[#23c55e]/10 rounded-lg flex items-center justify-center">
                        <CameraIcon class="w-6 h-6 text-[#23c55e]" />
                      </div>
                      <div class="ml-4">
                        <h3 class="text-base font-medium text-gray-900">Sécurité Électronique</h3>
                        <p class="mt-1 text-sm text-gray-500 line-clamp-1">Vidéosurveillance et systèmes d'alarme</p>
                      </div>
                    </NuxtLink>
                    
                    <NuxtLink 
                      to="/services/protection-rapprochee" 
                      class="flex items-start p-3 rounded-lg hover:bg-gray-50"
                    >
                      <div class="flex-shrink-0 w-10 h-10 bg-[#23c55e]/10 rounded-lg flex items-center justify-center">
                        <UserGroupIcon class="w-6 h-6 text-[#23c55e]" />
                      </div>
                      <div class="ml-4">
                        <h3 class="text-base font-medium text-gray-900">Protection Rapprochée</h3>
                        <p class="mt-1 text-sm text-gray-500 line-clamp-1">Services de protection personnelle et VIP</p>
                      </div>
                    </NuxtLink>
                  </div>
                  
                  <!-- Colonne 2 -->
                  <div>
                    <NuxtLink 
                      to="/services/nettoyage-professionnel" 
                      class="flex items-start p-3 rounded-lg hover:bg-gray-50"
                    >
                      <div class="flex-shrink-0 w-10 h-10 bg-[#23c55e]/10 rounded-lg flex items-center justify-center">
                        <SparklesIcon class="w-6 h-6 text-[#23c55e]" />
                      </div>
                      <div class="ml-4">
                        <h3 class="text-base font-medium text-gray-900">Nettoyage Professionnel</h3>
                        <p class="mt-1 text-sm text-gray-500 line-clamp-1">Services complets d'entretien et nettoyage</p>
                      </div>
                    </NuxtLink>
                    
                    <NuxtLink 
                      to="/services/securite-incendie" 
                      class="flex items-start p-3 rounded-lg hover:bg-gray-50"
                    >
                      <div class="flex-shrink-0 w-10 h-10 bg-[#23c55e]/10 rounded-lg flex items-center justify-center">
                        <FireIcon class="w-6 h-6 text-[#23c55e]" />
                      </div>
                      <div class="ml-4">
                        <h3 class="text-base font-medium text-gray-900">Sécurité Incendie</h3>
                        <p class="mt-1 text-sm text-gray-500 line-clamp-1">Prévention et équipements anti-incendie</p>
                      </div>
                    </NuxtLink>
                    
                    <NuxtLink 
                      to="/services/transport-valeurs" 
                      class="flex items-start p-3 rounded-lg hover:bg-gray-50"
                    >
                      <div class="flex-shrink-0 w-10 h-10 bg-[#23c55e]/10 rounded-lg flex items-center justify-center">
                        <TruckIcon class="w-6 h-6 text-[#23c55e]" />
                      </div>
                      <div class="ml-4">
                        <h3 class="text-base font-medium text-gray-900">Transport de Valeurs</h3>
                        <p class="mt-1 text-sm text-gray-500 line-clamp-1">Convoyage sécurisé de biens de valeur</p>
                      </div>
                    </NuxtLink>
                  </div>
                </div>
                
                <!-- Lien "Voir tous les services" -->
                <div class="bg-gray-50 px-6 py-3 flex justify-center">
                  <NuxtLink 
                    to="/services" 
                    class="text-[#23c55e] font-medium hover:text-[#1ea550] flex items-center"
                  >
                    Voir tous nos services
                    <ArrowRightIcon class="w-4 h-4 ml-1" />
                  </NuxtLink>
                </div>
              </div>
            </div>
            
            <NuxtLink 
              to="/boutique"
              class="relative group px-3 py-2 text-gray-700 hover:text-[#23c55e] transition-colors duration-200"
              :class="{ 'text-[#23c55e]': $route.path.startsWith('/boutique') }"
            >
              <span>Boutique</span>
              <span 
                class="absolute bottom-0 left-0 w-full h-0.5 bg-[#23c55e] transform transition-transform duration-200"
                :class="$route.path.startsWith('/boutique') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'"
              ></span>
            </NuxtLink>
            
            <NuxtLink 
              to="/about"
              class="relative group px-3 py-2 text-gray-700 hover:text-[#23c55e] transition-colors duration-200"
              :class="{ 'text-[#23c55e]': $route.path === '/about' }"
            >
              <span>À propos</span>
              <span 
                class="absolute bottom-0 left-0 w-full h-0.5 bg-[#23c55e] transform transition-transform duration-200"
                :class="$route.path === '/about' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'"
              ></span>
            </NuxtLink>
            
            <NuxtLink
              to="/contact"
              class="relative group px-3 py-2 text-gray-700 hover:text-[#23c55e] transition-colors duration-200"
              :class="{ 'text-[#23c55e]': $route.path === '/contact' }"
            >
              <span>Contact</span>
              <span 
                class="absolute bottom-0 left-0 w-full h-0.5 bg-[#23c55e] transform transition-transform duration-200"
                :class="$route.path === '/contact' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'"
              ></span>
            </NuxtLink>
            
            <NuxtLink
              to="/devis"
              class="px-6 py-2.5 bg-[#23c55e] text-white rounded-lg hover:bg-[#1ea550] transition-colors duration-200"
              :class="{ 'bg-[#1ea550]': $route.path === '/devis' }"
            >
              Demander un devis
            </NuxtLink>
          </div>

          <!-- Bouton menu mobile -->
          <button 
            @click="isMenuOpen = !isMenuOpen"
            class="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            <Bars3Icon v-if="!isMenuOpen" class="h-6 w-6 text-gray-600" />
            <XMarkIcon v-else class="h-6 w-6 text-gray-600" />
          </button>
        </div>

        <!-- Menu mobile -->
        <div 
          v-show="isMenuOpen"
          class="md:hidden py-4"
        >
          <div class="flex flex-col space-y-4">
            <NuxtLink 
              v-for="item in menuItems" 
              :key="item.path"
              :to="item.path"
              class="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
              :class="{ 'bg-gray-100 text-[#23c55e]': $route.path === item.path }"
              @click="isMenuOpen = false"
            >
              {{ item.name }}
            </NuxtLink>
            
            <!-- Menu services déroulant pour mobile -->
            <div>
              <button 
                @click="mobileServicesOpen = !mobileServicesOpen" 
                class="flex items-center justify-between w-full px-4 py-3 text-left text-gray-700 hover:text-[#23c55e] hover:bg-gray-50"
                :class="{ 'text-[#23c55e]': $route.path.startsWith('/services') }"
              >
                <span>Nos Services</span>
                <span>
                  <ChevronDownIcon v-if="!mobileServicesOpen" class="w-5 h-5" />
                  <ChevronUpIcon v-else class="w-5 h-5" />
                </span>
              </button>

              <div v-show="mobileServicesOpen" class="pl-4">
                <NuxtLink 
                  v-for="service in services" 
                  :key="service.path" 
                  :to="service.path"
                  class="flex items-center px-4 py-2 text-gray-600 hover:text-[#23c55e]"
                  @click="isMenuOpen = false; mobileServicesOpen = false"
                >
                  <component :is="service.icon" class="w-5 h-5 mr-3 text-[#23c55e]" />
                  <span>{{ service.name }}</span>
                </NuxtLink>
              </div>
            </div>
            
            <NuxtLink 
              to="/contact"
              class="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
              :class="{ 'bg-gray-100 text-[#23c55e]': $route.path === '/contact' }"
              @click="isMenuOpen = false"
            >
              Contact
            </NuxtLink>
            
            <NuxtLink
              to="/devis"
              class="px-4 py-2 bg-[#23c55e] text-white rounded-lg hover:bg-[#1ea550]"
              :class="{ 'bg-[#1ea550]': $route.path === '/devis' }"
              @click="isMenuOpen = false"
            >
              Demander un devis
            </NuxtLink>
          </div>
        </div>
      </nav>
    </header>

    <main class="flex-grow">
      <slot />
    </main>

    <!-- Footer moderne -->
    <footer class="bg-[#111829] text-white">
      <!-- Section principale -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
          <!-- Logo et description -->
          <div class="col-span-1 md:col-span-2">
            <h3 class="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-[#23c55e] bg-clip-text text-transparent">PROSEN</h3>
            <p class="text-gray-400 mb-6 max-w-md">Solutions Professionnelles Sénégalaises - Leader de la sécurité privée au Sénégal depuis plus de 5 ans.</p>
            <div class="flex space-x-4">
              <a v-for="social in socials" 
                 :key="social.name"
                 :href="social.url"
                 class="p-2 bg-white/10 rounded-lg hover:bg-[#23c55e] transition-colors duration-200"
              >
                <font-awesome-icon 
                  :icon="social.icon" 
                  class="h-5 w-5 text-white" 
                />
              </a>
            </div>
          </div>

          <!-- Liens rapides -->
          <div>
            <h4 class="text-lg font-semibold mb-4">Liens Rapides</h4>
            <ul class="space-y-3">
              <li v-for="item in footerLinks" :key="item.path">
                <NuxtLink :to="item.path" class="text-gray-400 hover:text-[#23c55e] transition-colors duration-200">
                  {{ item.name }}
                </NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Contact -->
          <div>
            <h4 class="text-lg font-semibold mb-4">Contact</h4>
            <ul class="space-y-3">
              <li class="flex items-start space-x-3">
                <MapPinIcon class="w-5 h-5 text-[#23c55e] flex-shrink-0 mt-1" />
                <span class="text-gray-400">Immeuble Ellipse, rue 1 X D Pav Usina, Point E, Dakar - Sénégal</span>
              </li>
              <li class="flex items-start space-x-3">
                <EnvelopeIcon class="w-5 h-5 text-[#23c55e] flex-shrink-0 mt-1" />
                <span class="text-gray-400">contact@prosen.sn</span>
              </li>
              <li class="flex items-start space-x-3">
                <PhoneIcon class="w-5 h-5 text-[#23c55e] flex-shrink-0 mt-1" />
                <span class="text-gray-400">+221 33 843 46 33</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Barre de copyright -->
      <div class="border-t border-white/10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div class="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-3">
            <p class="text-gray-400 text-sm">
              © {{ new Date().getFullYear() }} PROSEN. Tous droits réservés.
            </p>
              <p class="text-gray-400 text-sm flex items-center">
                <span class="hidden md:inline mx-2">|</span>
                Développé par <a href="https://kamit.tech" target="_blank" rel="noopener" class="text-[#23c55e] hover:text-[#1ea550] ml-1 transition-colors">Kamit</a>
              </p>
            </div>
            <div class="flex space-x-6 text-sm">
              <NuxtLink to="/privacy" class="text-gray-400 hover:text-[#23c55e]">Politique de confidentialité</NuxtLink>
              <NuxtLink to="/terms" class="text-gray-400 hover:text-[#23c55e]">Conditions d'utilisation</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { 
  Bars3Icon, 
  XMarkIcon,
  MapPinIcon,
  EnvelopeIcon,
  PhoneIcon,
  ChevronDownIcon,
  ArrowRightIcon,
  ShieldCheckIcon,
  CameraIcon,
  UserGroupIcon,
  SparklesIcon,
  FireIcon,
  TruckIcon,
  ChevronUpIcon
} from '@heroicons/vue/24/outline'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { 
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram 
} from '@fortawesome/free-brands-svg-icons'

const isMenuOpen = ref(false)
const showServicesMenu = ref(false)
const mobileServicesOpen = ref(false)

const menuItems = [
  { name: 'Accueil', path: '/' },
  { name: 'À propos', path: '/about' },
  { name: 'Blog', path: '/blog' },
  { name: 'Boutique', path: '/boutique' },
  { name: 'Carrières', path: '/carrieres' }
]

const footerLinks = [
  { name: 'Nos Services', path: '/services' },
  { name: 'À Propos', path: '/about' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
  { name: 'Boutique', path: '/boutique' },
  { name: 'Carrières', path: '/carrieres' }
]

const socials = [
  { 
    name: 'Facebook', 
    url: 'https://facebook.com', 
    icon: faFacebookF
  },
  { 
    name: 'Twitter', 
    url: 'https://twitter.com', 
    icon: faTwitter
  },
  { 
    name: 'LinkedIn', 
    url: 'https://linkedin.com', 
    icon: faLinkedinIn
  },
  { 
    name: 'Instagram', 
    url: 'https://instagram.com', 
    icon: faInstagram
  }
]

// Liste des services pour le menu mobile - alignée avec la page services
const services = [
  { name: 'Surveillance & Gardiennage', path: '/services/surveillance-gardiennage', icon: ShieldCheckIcon },
  { name: 'Sécurité Électronique', path: '/services/securite-electronique', icon: CameraIcon },
  { name: 'Protection Rapprochée', path: '/services/protection-rapprochee', icon: UserGroupIcon },
  { name: 'Nettoyage Professionnel', path: '/services/nettoyage-professionnel', icon: SparklesIcon },
  { name: 'Sécurité Incendie', path: '/services/securite-incendie', icon: FireIcon },
  { name: 'Transport de Valeurs', path: '/services/transport-valeurs', icon: TruckIcon }
]
</script>

<style scoped>
.backdrop-blur-lg {
  backdrop-filter: blur(12px);
}

.line-clamp-1 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>