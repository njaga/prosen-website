<template>
  <div class="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
    <div class="flex items-center space-x-4 mb-8">
      <div class="p-3.5 bg-[#23c55e]/10 rounded-xl">
        <MapPinIcon class="w-8 h-8 text-[#23c55e]" />
      </div>
      <div>
        <h2 class="text-2xl font-bold text-[#111829]">{{ regionData.name }}</h2>
        <p class="text-gray-500 mt-1">Informations régionales détaillées</p>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Statistiques clés -->
      <div class="bg-gray-50 rounded-xl p-6">
        <h3 class="text-lg font-semibold text-[#111829] mb-4">Statistiques Clés</h3>
        <div class="space-y-4">
          <div>
            <div class="text-sm text-gray-500">Population</div>
            <div class="text-lg font-medium">{{ formatNumber(regionData.population) }}</div>
          </div>
          <div>
            <div class="text-sm text-gray-500">Taux de criminalité</div>
            <div class="text-lg font-medium" :class="getCrimeRateColor">{{ regionData.crimeRate }}</div>
          </div>
          <div>
            <div class="text-sm text-gray-500">Temps de réponse moyen</div>
            <div class="text-lg font-medium">{{ regionData.responseTime }}</div>
          </div>
        </div>
      </div>

      <!-- Villes principales -->
      <div class="bg-gray-50 rounded-xl p-6">
        <h3 class="text-lg font-semibold text-[#111829] mb-4">Villes Principales</h3>
        <ul class="space-y-2">
          <li v-for="city in regionData.mainCities" :key="city" class="flex items-center">
            <BuildingOfficeIcon class="w-4 h-4 text-gray-400 mr-2" />
            <span>{{ city }}</span>
          </li>
        </ul>
      </div>

      <!-- Risques spécifiques -->
      <div class="bg-gray-50 rounded-xl p-6">
        <h3 class="text-lg font-semibold text-[#111829] mb-4">Risques Spécifiques</h3>
        <ul class="space-y-2">
          <li v-for="risk in regionData.specificRisks" :key="risk" class="flex items-center">
            <ExclamationTriangleIcon class="w-4 h-4 text-yellow-500 mr-2" />
            <span>{{ risk }}</span>
          </li>
        </ul>
      </div>
    </div>

    <!-- Description de sécurité -->
    <div class="mt-6 bg-gray-50 rounded-xl p-6">
      <h3 class="text-lg font-semibold text-[#111829] mb-4">Analyse de Sécurité</h3>
      <p class="text-gray-700">{{ regionData.securityDescription }}</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRegionsStore } from '~/stores/regions'
import { 
  MapPinIcon,
  BuildingOfficeIcon,
  ExclamationTriangleIcon
} from '@heroicons/vue/24/outline'

const props = defineProps({
  region: {
    type: String,
    required: true
  }
})

const regionsStore = useRegionsStore()

const regionData = computed(() => {
  return regionsStore.getRegionById(props.region.toLowerCase().replace(/\s+/g, '-')) || {
    name: props.region,
    population: 0,
    crimeRate: 'Non disponible',
    responseTime: 'Non disponible',
    mainCities: [],
    specificRisks: [],
    securityDescription: 'Informations non disponibles pour cette région.'
  }
})

const getCrimeRateColor = computed(() => {
  switch (regionData.value.crimeRate.toLowerCase()) {
    case 'très faible':
      return 'text-green-600'
    case 'faible':
      return 'text-green-500'
    case 'faible à modéré':
      return 'text-yellow-500'
    case 'modéré':
      return 'text-yellow-600'
    case 'élevé':
      return 'text-red-500'
    default:
      return 'text-gray-500'
  }
})

const formatNumber = (number) => {
  return new Intl.NumberFormat('fr-FR').format(number)
}
</script> 