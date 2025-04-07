<template>
  <!-- Réduire la hauteur pour mobile -->
  <section class="relative min-h-[90vh] md:min-h-screen overflow-x-hidden">
    <!-- Image de fond avec effet parallaxe -->
    <div class="absolute inset-0 w-full h-full">
      <img
        src="/images/security-background.jpg" 
        alt="Security Background"
        class="w-full h-full object-cover"
      />
      <!-- Superposition avec dégradé -->
      <div class="absolute inset-0 bg-gradient-to-r from-[#111829]/95 to-[#111829]/80"></div>
    </div>

    <!-- Ajuster les marges verticales pour mobile -->
    <div class="relative min-h-[90vh] md:min-h-screen flex items-center overflow-hidden py-12 md:py-0">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <!-- Ajouter des classes pour gérer le responsive -->
        <div class="grid md:grid-cols-2 gap-6 md:gap-12 items-center mx-auto">
          <!-- Texte à gauche avec espacement réduit sur mobile -->
          <div class="text-left">
            <div 
              v-motion
              :initial="{ opacity: 0, y: 20 }"
              :enter="{ opacity: 1, y: 0 }"
              class="inline-block px-3 py-1 bg-[#23c55e]/20 text-[#23c55e] rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-6"
            >
              #1 en Sécurité au Sénégal
            </div>
            <h1 
              v-motion
              :initial="{ opacity: 0, y: 40 }"
              :enter="{ opacity: 1, y: 0, transition: { delay: 200 } }"
              class="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-3 sm:mb-6 leading-tight"
            >
              Votre Partenaire<br/>
              <span class="text-[#23c55e]">Sécurité Privée</span> de Confiance
            </h1>
            <p 
              v-motion
              :initial="{ opacity: 0 }"
              :enter="{ opacity: 1, transition: { delay: 400 } }"
              class="text-base sm:text-xl text-gray-300 mb-5 sm:mb-8 max-w-xl"
            >
              Solutions de sécurité innovantes et sur mesure pour protéger ce qui compte le plus pour vous.
            </p>
            <div 
              v-motion
              :initial="{ opacity: 0, y: 20 }"
              :enter="{ opacity: 1, y: 0, transition: { delay: 600 } }"
              class="flex flex-wrap gap-3 sm:gap-4"
            >
              <NuxtLink
                to="/devis"
                class="inline-flex items-center px-5 sm:px-8 py-3 sm:py-4 rounded-lg bg-[#23c55e] text-white hover:bg-[#1ea550] transition-colors text-sm sm:text-base"
              >
                <span>Demander un devis</span>
                <IconArrowRight class="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
              </NuxtLink>
              <NuxtLink
                to="/services"
                class="inline-flex items-center px-5 sm:px-8 py-3 sm:py-4 rounded-lg border-2 border-white text-white hover:bg-white hover:text-[#111829] transition-colors text-sm sm:text-base"
              >
                <span>Nos services</span>
                <IconShield class="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
              </NuxtLink>
            </div>
          </div>

          <!-- Rendre les stats visibles sur mobile mais plus compactes -->
          <div 
            v-motion
            :initial="{ opacity: 0, x: 50 }"
            :enter="{ opacity: 1, x: 0, transition: { delay: 800 } }"
            class="grid grid-cols-2 gap-2 sm:gap-4 md:gap-6 w-full mt-6 md:mt-0"
          >
            <div 
              v-for="(stat, index) in stats" 
              :key="index"
              class="bg-white/10 backdrop-blur-lg rounded-lg p-3 sm:p-6 text-center"
            >
              <div class="text-2xl sm:text-4xl font-bold text-[#23c55e] mb-1 sm:mb-2">{{ stat.value }}</div>
              <div class="text-xs sm:text-sm text-gray-300">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2">
      <div 
        class="animate-bounce w-4 h-4 sm:w-6 sm:h-6 border-2 border-white border-t-0 border-l-0 rotate-45 -translate-y-2"
      ></div>
    </div>
  </section>
</template>

<script setup>
import { ArrowRightIcon as IconArrowRight, ShieldCheckIcon as IconShield } from '@heroicons/vue/24/outline'

const stats = [
  {
    value: '5+',
    label: "Années d'expertise"
  },
  {
    value: '50+',
    label: 'Clients satisfaits'
  },
  {
    value: '24/7',
    label: 'Support client'
  },
  {
    value: '200+',
    label: 'Agents qualifiés'
  }
]
</script>

<style scoped>
.backdrop-blur-lg {
  backdrop-filter: blur(8px);
}

/* Ajouter des styles pour gérer le overflow */
::-webkit-scrollbar {
  display: none;
}

* {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>