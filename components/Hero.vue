<template>
  <section class="relative min-h-screen">
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

    <!-- Contenu principal -->
    <div class="relative min-h-screen flex items-center">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <!-- Texte à gauche -->
          <div class="text-left">
            <div 
              v-motion
              :initial="{ opacity: 0, y: 20 }"
              :enter="{ opacity: 1, y: 0 }"
              class="inline-block px-4 py-1 bg-[#23c55e]/20 text-[#23c55e] rounded-full text-sm font-semibold mb-6"
            >
              #1 en Sécurité au Sénégal
            </div>
            <h1 
              v-motion
              :initial="{ opacity: 0, y: 40 }"
              :enter="{ opacity: 1, y: 0, transition: { delay: 200 } }"
              class="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Votre Partenaire<br/>
              <span class="text-[#23c55e]">Sécurité</span> Privée de Confiance
            </h1>
            <p 
              v-motion
              :initial="{ opacity: 0 }"
              :enter="{ opacity: 1, transition: { delay: 400 } }"
              class="text-xl text-gray-300 mb-8 max-w-xl"
            >
              Solutions de sécurité innovantes et sur mesure pour protéger ce qui compte le plus pour vous.
            </p>
            <div 
              v-motion
              :initial="{ opacity: 0, y: 20 }"
              :enter="{ opacity: 1, y: 0, transition: { delay: 600 } }"
              class="flex flex-wrap gap-4"
            >
              <NuxtLink
                to="/devis"
                class="inline-flex items-center px-8 py-4 rounded-lg bg-[#23c55e] text-white hover:bg-[#1ea550] transition-colors"
              >
                <span>Demander un devis</span>
                <IconArrowRight class="w-5 h-5 ml-2" />
              </NuxtLink>
              <NuxtLink
                to="/services"
                class="inline-flex items-center px-8 py-4 rounded-lg border-2 border-white text-white hover:bg-white hover:text-[#111829] transition-colors"
              >
                <span>Nos services</span>
                <IconShield class="w-5 h-5 ml-2" />
              </NuxtLink>
            </div>
          </div>

          <!-- Stats à droite -->
          <div 
            v-motion
            :initial="{ opacity: 0, x: 50 }"
            :enter="{ opacity: 1, x: 0, transition: { delay: 800 } }"
            class="hidden md:grid grid-cols-2 gap-6"
          >
            <div 
              v-for="(stat, index) in stats" 
              :key="index"
              class="bg-white/10 backdrop-blur-lg rounded-lg p-6 text-center"
            >
              <div class="text-4xl font-bold text-[#23c55e] mb-2">{{ stat.value }}</div>
              <div class="text-sm text-gray-300">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2">
      <div 
        class="animate-bounce w-6 h-6 border-2 border-white border-t-0 border-l-0 rotate-45 -translate-y-2"
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
</style>