<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Spinner de chargement global -->
    <div 
      v-if="loading" 
      class="fixed inset-0 z-[100] flex items-center justify-center bg-white/80 backdrop-blur-sm"
    >
      <div class="flex flex-col items-center">
        <div class="relative">
          <img src="/images/Logo-Prosen-Securite.png" alt="Prosen" class="w-24 h-24 object-contain mb-2" />
          <div class="absolute inset-0 w-full h-full border-4 border-[#23c55e] border-t-transparent rounded-full animate-spin"></div>
        </div>
        <p class="mt-4 text-lg font-medium text-gray-700">Chargement...</p>
      </div>
    </div>

    <NuxtLayout>
      <ClientOnly>
        <NuxtPage />
      </ClientOnly>
    </NuxtLayout>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const loading = ref(true)
const router = useRouter()

onMounted(() => {
  // Masquer le spinner une fois que la page initiale est chargée
  loading.value = false
  
  // Ajouter les écouteurs d'événements pour les changements de route
  router.beforeEach((to, from, next) => {
    loading.value = true
    next()
  })

  router.afterEach(() => {
    // Délai court pour éviter un flash du spinner sur les transitions rapides
    setTimeout(() => {
      loading.value = false
    }, 200)
  })
})
</script>

<style>
.animate-spin {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>