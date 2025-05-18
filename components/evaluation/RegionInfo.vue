<template>
  <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
    <div class="flex items-center space-x-4 mb-6">
      <div class="p-3 bg-[#23c55e]/10 rounded-xl">
        <MapPinIcon class="w-6 h-6 text-[#23c55e]" />
      </div>
      <div>
        <h3 class="text-xl font-bold text-[#111829]">À propos de {{ region }}</h3>
        <p class="text-gray-500 text-sm">Informations et statistiques de sécurité</p>
      </div>
    </div>

    <div class="space-y-6">
      <!-- Statistiques clés -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="bg-gray-50 rounded-xl p-4">
          <div class="text-sm text-gray-500 mb-1">Population</div>
          <div class="text-2xl font-bold text-[#111829]">{{ formatNumber(regionData.population) }}</div>
        </div>
        <div class="bg-gray-50 rounded-xl p-4">
          <div class="text-sm text-gray-500 mb-1">Taux de criminalité</div>
          <div class="text-2xl font-bold" :class="getCrimeRateColor">{{ regionData.crimeRate }}</div>
        </div>
        <div class="bg-gray-50 rounded-xl p-4">
          <div class="text-sm text-gray-500 mb-1">Temps d'intervention</div>
          <div class="text-2xl font-bold text-[#111829]">{{ regionData.responseTime }}</div>
        </div>
      </div>

      <!-- Description générale -->
      <div>
        <h4 class="font-medium text-gray-900 mb-2">Aperçu général</h4>
        <p class="text-gray-600">{{ regionData.securityDescription }}</p>
      </div>

      <!-- Risques spécifiques -->
      <div>
        <h4 class="font-medium text-gray-900 mb-3">Risques spécifiques à la région</h4>
        <div class="space-y-2">
          <div v-for="(risk, index) in getFormattedRisks" :key="index" 
               class="flex items-start space-x-3 bg-gray-50 p-3 rounded-lg">
            <ExclamationTriangleIcon class="w-5 h-5 text-amber-500 mt-0.5" />
            <div>
              <p class="font-medium text-gray-900">{{ risk.title }}</p>
              <p class="text-sm text-gray-600">{{ risk.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Forces de l'ordre -->
      <div v-if="regionData.lawEnforcement && regionData.lawEnforcement.length > 0">
        <h4 class="font-medium text-gray-900 mb-3">Présence des forces de l'ordre</h4>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div v-for="(force, index) in regionData.lawEnforcement" :key="index" 
               class="flex items-center space-x-3 bg-gray-50 p-3 rounded-lg">
            <div class="p-2 bg-[#23c55e]/10 rounded-lg">
              <ShieldCheckIcon class="w-5 h-5 text-[#23c55e]" />
            </div>
            <div>
              <p class="font-medium text-gray-900">{{ force.type }}</p>
              <p class="text-sm text-gray-600">{{ force.units }} unités</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Recommandations spécifiques -->
      <div v-if="regionData.recommendations && regionData.recommendations.length > 0">
        <h4 class="font-medium text-gray-900 mb-3">Recommandations spécifiques</h4>
        <div class="space-y-3">
          <div v-for="(rec, index) in regionData.recommendations" :key="index" 
               class="flex items-start space-x-3">
            <div class="p-1.5 bg-[#23c55e]/10 rounded-lg mt-0.5">
              <CheckCircleIcon class="w-4 h-4 text-[#23c55e]" />
            </div>
            <p class="text-gray-600">{{ rec }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { MapPinIcon, ExclamationTriangleIcon, ShieldCheckIcon, CheckCircleIcon } from '@heroicons/vue/24/solid'
import { useRegionsStore } from '~/stores/regions'

const props = defineProps({
  region: {
    type: String,
    required: true
  }
})

const regionsStore = useRegionsStore()

// Données des forces de l'ordre et recommandations par défaut
const defaultLawEnforcement = {
  'Dakar': [
    { type: 'Police nationale', units: 45 },
    { type: 'Gendarmerie', units: 28 },
    { type: 'Police municipale', units: 15 }
  ],
  'Thiès': [
    { type: 'Police nationale', units: 25 },
    { type: 'Gendarmerie', units: 35 }
  ],
  'Saint-Louis': [
    { type: 'Police nationale', units: 20 },
    { type: 'Gendarmerie', units: 18 },
    { type: 'Police municipale', units: 10 }
  ]
}

const defaultRecommendations = {
  'Dakar': [
    'Renforcement des systèmes de vidéosurveillance dans les zones commerciales',
    'Mise en place de protocoles spécifiques pour les heures de pointe',
    'Formation du personnel aux risques urbains spécifiques',
    'Coordination étroite avec les forces de l\'ordre locales'
  ],
  'Thiès': [
    'Installation de systèmes d\'alarme périmétrique',
    'Renforcement de l\'éclairage des sites isolés',
    'Mise en place de patrouilles mobiles'
  ]
}

const regionData = computed(() => {
  // Récupérer les données de la région depuis le store
  const storeRegion = regionsStore.getRegionById(props.region.toLowerCase().replace(/\s+/g, '-'))
  
  if (storeRegion) {
    return {
      ...storeRegion,
      lawEnforcement: defaultLawEnforcement[props.region] || [],
      recommendations: defaultRecommendations[props.region] || generateRecommendations(storeRegion)
    }
  }
  
  return {
    name: props.region,
    population: 'N/A',
    crimeRate: 'Non disponible',
    responseTime: 'N/A',
    securityDescription: 'Données non disponibles pour cette région.',
    specificRisks: [],
    lawEnforcement: [],
    recommendations: []
  }
})

const getFormattedRisks = computed(() => {
  if (!regionData.value.specificRisks) return []
  
  return regionData.value.specificRisks.map(risk => {
    if (typeof risk === 'string') {
      return {
        title: risk,
        description: getRiskDescription(risk)
      }
    }
    return risk
  })
})

// Générer des descriptions pour les risques lorsqu'ils sont simples
function getRiskDescription(risk) {
  const descriptions = {
    'Sécurité minière': 'Risques liés aux sites d\'extraction et activités minières',
    'Protection environnementale': 'Surveillance et préservation des zones naturelles sensibles',
    'Sécurité forestière': 'Protection contre la déforestation illégale et les feux de forêt',
    'Sécurité rurale': 'Sécurisation des zones agricoles et des communautés isolées',
    'Sécurité fluviale': 'Surveillance des voies navigables et prévention des accidents',
    'Surveillance transfrontalière': 'Contrôle des mouvements aux frontières et prévention du trafic'
  }
  
  return descriptions[risk] || 'Nécessite une attention particulière dans cette région'
}

// Générer des recommandations par défaut basées sur les risques spécifiques
function generateRecommendations(region) {
  const recommendations = []
  
  if (region.specificRisks.includes('Sécurité minière')) {
    recommendations.push('Mise en place de protocoles de sécurité spécifiques aux sites miniers')
  }
  
  if (region.specificRisks.includes('Protection environnementale')) {
    recommendations.push('Surveillance renforcée des zones naturelles protégées')
  }
  
  if (region.specificRisks.includes('Sécurité forestière')) {
    recommendations.push('Déploiement de systèmes de détection précoce des feux')
  }
  
  if (region.crimeRate === 'Modéré' || region.crimeRate === 'Élevé') {
    recommendations.push('Installation de systèmes de vidéosurveillance dans les zones à risque')
  }
  
  if (recommendations.length === 0) {
    recommendations.push('Évaluation régulière des risques spécifiques à la région')
  }
  
  return recommendations
}

const getCrimeRateColor = computed(() => {
  const rate = regionData.value.crimeRate
  if (rate === 'Très faible' || rate === 'Faible') return 'text-green-600'
  if (rate === 'Faible à modéré' || rate === 'Modéré') return 'text-amber-500'
  if (rate === 'Élevé' || rate === 'Critique') return 'text-red-600'
  return 'text-gray-700'
})

const formatNumber = (number) => {
  if (!number || isNaN(number)) return 'N/A'
  return new Intl.NumberFormat('fr-FR').format(number)
}
</script> 