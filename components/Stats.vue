<template>
  <section class="py-12 bg-[#111829] text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div 
          v-for="(stat, index) in stats" 
          :key="index"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: index * 100 } }"
          class="relative"
        >
          <div class="text-4xl font-bold text-[#23c55e] mb-2">{{ stat.value }}</div>
          <div class="text-sm text-gray-300">{{ stat.label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { animations } from '~/utils/animations'

const stats = [
  { value: '5+', label: "Années d'expérience" },
  { value: '50+', label: 'Clients Satisfaits' },
  { value: '200+', label: 'Agents Qualifiés' },
  { value: '24/7', label: 'Support Client' }
]
</script>