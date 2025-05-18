<template>
  <div>
    <SEO 
      title="Questionnaire d'Évaluation Détaillée de la Sécurité"
      description="Évaluation approfondie des besoins en sécurité pour votre établissement"
    />

    <!-- Hero Section -->
    <section class="relative min-h-[50vh] flex items-center bg-gradient-to-br from-[#111829] via-[#1a2436] to-[#23c55e]/20">
      <div class="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10"></div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        <div class="text-center">
          <span class="inline-flex items-center px-4 py-1.5 bg-[#23c55e]/10 text-[#23c55e] rounded-full text-sm font-semibold mb-6 backdrop-blur-sm border border-[#23c55e]/20">
            <ClipboardDocumentCheckIcon class="w-5 h-5 mr-2" />
            Évaluation Détaillée
          </span>
          <h1 class="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Questionnaire d'Évaluation Approfondie
          </h1>
          <p class="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Une analyse détaillée pour identifier précisément vos besoins en sécurité et vous proposer des solutions adaptées
          </p>
        </div>
      </div>
    </section>

    <!-- Formulaire d'évaluation -->
    <section class="relative -mt-20 z-10 pb-24">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100">
          <form @submit.prevent="submitEvaluation" class="space-y-12">
            <!-- Progression -->
            <div class="relative">
              <div class="flex justify-between mb-2">
                <span class="text-sm font-medium text-gray-700">Progression</span>
                <span class="text-sm font-medium text-[#23c55e]">{{ currentStep }}/{{ totalSteps }}</span>
              </div>
              <div class="h-2 bg-gray-200 rounded-full">
                <div 
                  class="h-2 bg-[#23c55e] rounded-full transition-all duration-300"
                  :style="{ width: `${(currentStep / totalSteps) * 100}%` }"
                ></div>
              </div>
            </div>

            <!-- Étape 1: Informations générales -->
            <div v-if="currentStep === 1">
              <div class="flex items-center space-x-4 mb-8">
                <div class="p-3.5 bg-[#23c55e]/10 rounded-xl">
                  <BuildingOfficeIcon class="w-8 h-8 text-[#23c55e]" />
                </div>
                <div>
                  <h2 class="text-2xl font-bold text-[#111829]">Informations Établissement</h2>
                  <p class="text-gray-500 mt-1">Détails sur votre organisation et infrastructure</p>
                </div>
              </div>

              <div class="space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Nom de l'établissement</label>
                    <input 
                      type="text"
                      v-model="form.companyName"
                      required
                      class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#23c55e]/50 focus:border-[#23c55e]"
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Secteur d'activité</label>
                    <select 
                      v-model="form.sector"
                      required
                      class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#23c55e]/50 focus:border-[#23c55e]"
                    >
                      <option value="" disabled>Sélectionnez un secteur</option>
                      <option v-for="sector in sectors" :key="sector" :value="sector">{{ sector }}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Adresse complète</label>
                  <textarea 
                    v-model="form.address"
                    rows="3"
                    required
                    class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#23c55e]/50 focus:border-[#23c55e]"
                  ></textarea>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Effectif total</label>
                    <select 
                      v-model="form.employeeCount"
                      required
                      class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#23c55e]/50 focus:border-[#23c55e]"
                    >
                      <option value="" disabled>Sélectionnez une tranche</option>
                      <option value="1-10">1 à 10 employés</option>
                      <option value="11-50">11 à 50 employés</option>
                      <option value="51-200">51 à 200 employés</option>
                      <option value="201-500">201 à 500 employés</option>
                      <option value="500+">Plus de 500 employés</option>
                    </select>
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Surface totale (m²)</label>
                    <input 
                      type="number"
                      v-model="form.surface"
                      required
                      min="0"
                      class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#23c55e]/50 focus:border-[#23c55e]"
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Nombre de bâtiments</label>
                    <input 
                      type="number"
                      v-model="form.buildingCount"
                      required
                      min="1"
                      class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#23c55e]/50 focus:border-[#23c55e]"
                    />
                  </div>
                </div>
              </div>
            </div>

            <!-- Étape 2: Configuration des locaux -->
            <div v-if="currentStep === 2">
              <div class="flex items-center space-x-4 mb-8">
                <div class="p-3.5 bg-[#23c55e]/10 rounded-xl">
                  <HomeModernIcon class="w-8 h-8 text-[#23c55e]" />
                </div>
                <div>
                  <h2 class="text-2xl font-bold text-[#111829]">Configuration des Locaux</h2>
                  <p class="text-gray-500 mt-1">Détails sur l'agencement et les accès</p>
                </div>
              </div>

              <div class="space-y-6">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Type de site</label>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <label class="relative flex cursor-pointer rounded-lg border p-4 focus:outline-none">
                      <input
                        type="radio"
                        v-model="form.siteType"
                        name="siteType"
                        value="standalone"
                        class="sr-only"
                        required
                      />
                      <span class="flex flex-1">
                        <span class="flex flex-col">
                          <span class="block text-sm font-medium text-gray-900">Site indépendant</span>
                          <span class="mt-1 flex items-center text-sm text-gray-500">Bâtiment isolé avec son propre périmètre</span>
                        </span>
                      </span>
                      <CheckCircleIcon 
                        :class="[form.siteType === 'standalone' ? 'text-[#23c55e]' : 'text-gray-300', 'h-5 w-5 ml-3']"
                      />
                    </label>
                    <label class="relative flex cursor-pointer rounded-lg border p-4 focus:outline-none">
                      <input
                        type="radio"
                        v-model="form.siteType"
                        name="siteType"
                        value="shared"
                        class="sr-only"
                        required
                      />
                      <span class="flex flex-1">
                        <span class="flex flex-col">
                          <span class="block text-sm font-medium text-gray-900">Site partagé</span>
                          <span class="mt-1 flex items-center text-sm text-gray-500">Au sein d'un complexe ou centre commercial</span>
                        </span>
                      </span>
                      <CheckCircleIcon 
                        :class="[form.siteType === 'shared' ? 'text-[#23c55e]' : 'text-gray-300', 'h-5 w-5 ml-3']"
                      />
                    </label>
                  </div>
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Points d'accès</label>
                  <div class="space-y-4">
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label class="block text-xs text-gray-500 mb-1">Entrées principales</label>
                        <input 
                          type="number"
                          v-model="form.mainEntrances"
                          required
                          min="0"
                          class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#23c55e]/50 focus:border-[#23c55e]"
                        />
                      </div>
                      <div>
                        <label class="block text-xs text-gray-500 mb-1">Sorties de secours</label>
                        <input 
                          type="number"
                          v-model="form.emergencyExits"
                          required
                          min="0"
                          class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#23c55e]/50 focus:border-[#23c55e]"
                        />
                      </div>
                      <div>
                        <label class="block text-xs text-gray-500 mb-1">Accès véhicules</label>
                        <input 
                          type="number"
                          v-model="form.vehicleAccess"
                          required
                          min="0"
                          class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#23c55e]/50 focus:border-[#23c55e]"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Zones sensibles</label>
                  <div class="space-y-3">
                    <div v-for="zone in sensitiveZones" :key="zone.id" class="flex items-center">
                      <input
                        type="checkbox"
                        :id="zone.id"
                        v-model="form.sensitiveZones"
                        :value="zone.id"
                        class="h-4 w-4 rounded border-gray-300 text-[#23c55e] focus:ring-[#23c55e]"
                      />
                      <label :for="zone.id" class="ml-3">
                        <span class="block text-sm font-medium text-gray-700">{{ zone.name }}</span>
                        <span class="block text-sm text-gray-500">{{ zone.description }}</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Étape 3: Dispositifs existants -->
            <div v-if="currentStep === 3">
              <div class="flex items-center space-x-4 mb-8">
                <div class="p-3.5 bg-[#23c55e]/10 rounded-xl">
                  <ShieldCheckIcon class="w-8 h-8 text-[#23c55e]" />
                </div>
                <div>
                  <h2 class="text-2xl font-bold text-[#111829]">Dispositifs de Sécurité Existants</h2>
                  <p class="text-gray-500 mt-1">État des lieux de vos équipements actuels</p>
                </div>
              </div>

              <div class="space-y-8">
                <div v-for="category in securityDevices" :key="category.id" class="space-y-4">
                  <h3 class="font-medium text-gray-900">{{ category.name }}</h3>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div v-for="device in category.devices" :key="device.id" class="relative flex items-start">
                      <div class="flex h-6 items-center">
                        <input
                          type="checkbox"
                          :id="device.id"
                          v-model="form.existingDevices"
                          :value="device.id"
                          class="h-4 w-4 rounded border-gray-300 text-[#23c55e] focus:ring-[#23c55e]"
                        />
                      </div>
                      <div class="ml-3">
                        <label :for="device.id" class="text-sm font-medium text-gray-700">{{ device.name }}</label>
                        <p class="text-sm text-gray-500">{{ device.description }}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Commentaires sur les dispositifs existants</label>
                  <textarea 
                    v-model="form.securityComments"
                    rows="4"
                    class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#23c55e]/50 focus:border-[#23c55e]"
                    placeholder="Précisez l'état, l'âge ou toute information pertinente sur vos équipements..."
                  ></textarea>
                </div>
              </div>
            </div>

            <!-- Étape 4: Incidents et préoccupations -->
            <div v-if="currentStep === 4">
              <div class="flex items-center space-x-4 mb-8">
                <div class="p-3.5 bg-[#23c55e]/10 rounded-xl">
                  <ExclamationTriangleIcon class="w-8 h-8 text-[#23c55e]" />
                </div>
                <div>
                  <h2 class="text-2xl font-bold text-[#111829]">Historique et Préoccupations</h2>
                  <p class="text-gray-500 mt-1">Incidents passés et risques identifiés</p>
                </div>
              </div>

              <div class="space-y-8">
                <div>
                  <h3 class="text-sm font-medium text-gray-700 mb-4">Incidents survenus ces 12 derniers mois</h3>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div v-for="incident in incidentTypes" :key="incident.id" class="space-y-2">
                      <label :for="incident.id" class="block text-sm font-medium text-gray-700">
                        {{ incident.name }}
                      </label>
                      <select 
                        :id="incident.id"
                        v-model="form.incidents[incident.id]"
                        class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#23c55e]/50 focus:border-[#23c55e]"
                      >
                        <option value="none">Aucun</option>
                        <option value="rare">1-2 fois</option>
                        <option value="occasional">3-5 fois</option>
                        <option value="frequent">Plus de 5 fois</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 class="text-sm font-medium text-gray-700 mb-4">Préoccupations principales</h3>
                  <div class="space-y-3">
                    <div v-for="concern in securityConcerns" :key="concern.id" class="flex items-center">
                      <input
                        type="checkbox"
                        :id="concern.id"
                        v-model="form.concerns"
                        :value="concern.id"
                        class="h-4 w-4 rounded border-gray-300 text-[#23c55e] focus:ring-[#23c55e]"
                      />
                      <label :for="concern.id" class="ml-3">
                        <span class="block text-sm font-medium text-gray-700">{{ concern.name }}</span>
                        <span class="block text-sm text-gray-500">{{ concern.description }}</span>
                      </label>
                    </div>
                  </div>
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Détails supplémentaires</label>
                  <textarea 
                    v-model="form.concernDetails"
                    rows="4"
                    class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#23c55e]/50 focus:border-[#23c55e]"
                    placeholder="Précisez vos préoccupations spécifiques ou tout autre détail pertinent..."
                  ></textarea>
                </div>
              </div>
            </div>

            <!-- Navigation -->
            <div class="flex justify-between pt-6">
              <button
                type="button"
                @click="previousStep"
                :disabled="currentStep === 1"
                class="px-6 py-3 text-gray-700 hover:text-gray-900 font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
              >
                <ArrowLeftIcon class="w-5 h-5 mr-2" />
                Précédent
              </button>
              
              <button
                v-if="currentStep < totalSteps"
                type="button"
                @click="nextStep"
                class="px-6 py-3 bg-[#23c55e] text-white rounded-xl hover:bg-[#1ea550] focus:outline-none focus:ring-2 focus:ring-[#23c55e]/50 font-medium flex items-center"
              >
                Suivant
                <ArrowRightIcon class="w-5 h-5 ml-2" />
              </button>
              
              <button
                v-else
                type="submit"
                :disabled="isSubmitting"
                class="px-6 py-3 bg-[#23c55e] text-white rounded-xl hover:bg-[#1ea550] focus:outline-none focus:ring-2 focus:ring-[#23c55e]/50 disabled:opacity-50 disabled:cursor-not-allowed font-medium flex items-center"
              >
                <ArrowPathIcon v-if="isSubmitting" class="w-5 h-5 mr-2 animate-spin" />
                {{ isSubmitting ? 'Envoi en cours...' : 'Soumettre l\'évaluation' }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { 
  BuildingOfficeIcon, 
  HomeModernIcon,
  ShieldCheckIcon,
  ExclamationTriangleIcon,
  ClipboardDocumentCheckIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowPathIcon,
  CheckCircleIcon
} from '@heroicons/vue/24/solid'

const currentStep = ref(1)
const totalSteps = 4
const isSubmitting = ref(false)

const form = ref({
  // Étape 1
  companyName: '',
  sector: '',
  address: '',
  employeeCount: '',
  surface: '',
  buildingCount: 1,
  
  // Étape 2
  siteType: '',
  mainEntrances: 0,
  emergencyExits: 0,
  vehicleAccess: 0,
  sensitiveZones: [],
  
  // Étape 3
  existingDevices: [],
  securityComments: '',
  
  // Étape 4
  incidents: {},
  concerns: [],
  concernDetails: ''
})

// Données de référence
const sectors = [
  'Banque et Finance',
  'Commerce de Détail',
  'Commerce de Luxe',
  'Industrie',
  'Logistique',
  'Santé',
  'Éducation',
  'Hôtellerie',
  'Bureaux',
  'Administration Publique'
]

const sensitiveZones = [
  {
    id: 'cash',
    name: 'Zone de manipulation d\'espèces',
    description: 'Caisses, coffres, salles de comptage'
  },
  {
    id: 'data',
    name: 'Centre de données',
    description: 'Serveurs, archives numériques'
  },
  {
    id: 'storage',
    name: 'Stockage de valeurs',
    description: 'Marchandises de valeur, équipements sensibles'
  },
  {
    id: 'restricted',
    name: 'Zones à accès restreint',
    description: 'Laboratoires, zones de production sensible'
  },
  {
    id: 'utilities',
    name: 'Locaux techniques',
    description: 'Électricité, climatisation, maintenance'
  }
]

const securityDevices = [
  {
    id: 'video',
    name: 'Vidéosurveillance',
    devices: [
      {
        id: 'cctv_analog',
        name: 'Caméras analogiques',
        description: 'Système de vidéosurveillance traditionnel'
      },
      {
        id: 'cctv_ip',
        name: 'Caméras IP HD',
        description: 'Système numérique haute définition'
      },
      {
        id: 'cctv_thermal',
        name: 'Caméras thermiques',
        description: 'Détection thermique pour zones sensibles'
      },
      {
        id: 'video_analytics',
        name: 'Analyse vidéo',
        description: 'Détection automatique d\'événements'
      }
    ]
  },
  {
    id: 'access',
    name: 'Contrôle d\'accès',
    devices: [
      {
        id: 'access_badges',
        name: 'Lecteurs de badges',
        description: 'Contrôle d\'accès par badge RFID'
      },
      {
        id: 'biometric',
        name: 'Biométrie',
        description: 'Reconnaissance digitale ou faciale'
      },
      {
        id: 'intercom',
        name: 'Interphonie',
        description: 'Communication points d\'accès'
      }
    ]
  },
  {
    id: 'intrusion',
    name: 'Anti-intrusion',
    devices: [
      {
        id: 'alarm_system',
        name: 'Système d\'alarme',
        description: 'Centrale d\'alarme et détecteurs'
      },
      {
        id: 'perimeter',
        name: 'Protection périmétrique',
        description: 'Barrières infrarouges, clôtures détectrices'
      }
    ]
  }
]

const incidentTypes = [
  {
    id: 'theft',
    name: 'Vols',
    description: 'Vols simples ou qualifiés'
  },
  {
    id: 'vandalism',
    name: 'Vandalisme',
    description: 'Dégradations volontaires'
  },
  {
    id: 'intrusion',
    name: 'Intrusions',
    description: 'Tentatives ou intrusions réussies'
  },
  {
    id: 'assault',
    name: 'Agressions',
    description: 'Violences physiques ou verbales'
  }
]

const securityConcerns = [
  {
    id: 'night_security',
    name: 'Sécurité nocturne',
    description: 'Préoccupations liées aux périodes de fermeture'
  },
  {
    id: 'staff_safety',
    name: 'Sécurité du personnel',
    description: 'Protection des employés et conditions de travail'
  },
  {
    id: 'access_control',
    name: 'Contrôle des accès',
    description: 'Gestion des entrées et sorties'
  },
  {
    id: 'data_protection',
    name: 'Protection des données',
    description: 'Sécurité des informations sensibles'
  },
  {
    id: 'emergency_response',
    name: 'Réponse aux urgences',
    description: 'Capacité d\'intervention rapide'
  }
]

// Initialisation des incidents
incidentTypes.forEach(type => {
  form.value.incidents[type.id] = 'none'
})

const nextStep = () => {
  if (currentStep.value < totalSteps) {
    currentStep.value++
  }
}

const previousStep = () => {
  if (currentStep.value > 1) {
    currentStep.value--
  }
}

const submitEvaluation = async () => {
  isSubmitting.value = true
  
  try {
    // Simulation d'envoi à l'API
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Redirection vers une page de confirmation
    navigateTo('/evaluation-confirmation')
  } catch (error) {
    console.error('Erreur lors de la soumission:', error)
  } finally {
    isSubmitting.value = false
  }
}
</script> 