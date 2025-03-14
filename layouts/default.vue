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
              v-for="item in menuItems" 
              :key="item.path"
              :to="item.path"
              class="relative group px-3 py-2 text-gray-700 hover:text-[#23c55e] transition-colors duration-200"
            >
              <span>{{ item.name }}</span>
              <span class="absolute bottom-0 left-0 w-full h-0.5 bg-[#23c55e] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
            </NuxtLink>
            <NuxtLink
              to="/contact"
              class="px-6 py-2.5 bg-[#23c55e] text-white rounded-lg hover:bg-[#1ea550] transition-colors duration-200"
            >
              Nous Contacter
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
              @click="isMenuOpen = false"
            >
              {{ item.name }}
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
            <p class="text-gray-400 text-sm">
              © {{ new Date().getFullYear() }} PROSEN. Tous droits réservés.
            </p>
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
  PhoneIcon
} from '@heroicons/vue/24/outline'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { 
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram 
} from '@fortawesome/free-brands-svg-icons'

const isMenuOpen = ref(false)

const menuItems = [
  { name: 'Accueil', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'À propos', path: '/about' },
  { name: 'Blog', path: '/blog' }
]

const footerLinks = [
  { name: 'Nos Services', path: '/services' },
  { name: 'À Propos', path: '/about' },
  { name: 'Carrières', path: '/careers' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' }
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
</script>

<style scoped>
.backdrop-blur-lg {
  backdrop-filter: blur(12px);
}
</style>