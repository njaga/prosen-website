<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8 text-center">
      <div>
        <h2 class="mt-6 text-3xl font-extrabold text-gray-900">
          {{ error.statusCode === 404 ? 'Page non trouvée' : 'Une erreur est survenue' }}
        </h2>
        <p class="mt-2 text-sm text-gray-600">
          {{ error.message }}
        </p>
      </div>
      <div>
        <button
          @click="handleError"
          class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-[#23c55e] hover:bg-[#1ea550]"
        >
          Retour à l'accueil
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const error = useError()

const handleError = () => {
  clearError({ redirect: '/' })
}
</script>