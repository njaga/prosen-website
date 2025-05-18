<template>
  <div>
    <SEO 
      title="Évaluation Professionnelle des Risques Sécuritaires"
      description="Analyse approfondie et évaluation experte des risques sécuritaires pour votre entreprise par des professionnels de la sécurité privée"
    />
    <!-- Hero Section -->
    <section class="relative min-h-[70vh] flex items-center bg-gradient-to-br from-[#111829] via-[#1a2436] to-[#23c55e]/20">
      <div class="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10"></div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        <div class="text-center" v-motion :initial="{ opacity: 0, y: 20 }" :enter="{
          opacity: 1,
          y: 0,
          transition: {
            duration: 800,
            ease: 'easeOut'
          }
        }">
          <span
            class="inline-flex items-center px-4 py-1.5 bg-[#23c55e]/10 text-[#23c55e] rounded-full text-sm font-semibold mb-6 backdrop-blur-sm border border-[#23c55e]/20">
            <span class="w-2 h-2 rounded-full bg-[#23c55e] mr-2"></span>
            Expertise en Sécurité Privée
          </span>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Évaluation Professionnelle des Risques
          </h1>
          <p class="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Bénéficiez de notre expertise en sécurité privée pour une analyse approfondie des risques et vulnérabilités de votre établissement
          </p>
        </div>
      </div>
    </section>

    <!-- Formulaire d'Évaluation -->
    <section class="relative -mt-20 z-10 pb-24">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100">
          <form @submit.prevent="evaluerRisques" class="space-y-10">
            <!-- Informations Générales -->
            <div class="space-y-6">
              <div class="flex items-center space-x-4 mb-8">
                <div class="p-3.5 bg-[#23c55e]/10 rounded-xl shadow-sm">
                  <BuildingOfficeIcon class="w-9 h-9 text-[#23c55e]" />
                </div>
                <div>
                  <h2 class="text-2xl sm:text-3xl font-bold text-[#111829]">Informations Établissement</h2>
                  <p class="text-gray-500 mt-1.5 text-sm sm:text-base">Données essentielles pour une analyse précise des risques.</p>
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                <div>
                  <label for="region" class="block text-sm font-medium text-gray-700 mb-2">Région</label>
                  <select id="region" v-model="form.region" class="w-full px-4 py-3.5 rounded-xl border border-gray-300 focus:border-[#23c55e] focus:ring-2 focus:ring-[#23c55e]/50 transition-shadow" required>
                    <option value="" disabled>Sélectionnez une région</option>
                    <option v-for="region in regionsList" :key="region" :value="region">{{ region }}</option>
                  </select>
                </div>

                <div>
                  <label for="commune" class="block text-sm font-medium text-gray-700 mb-2">Commune</label>
                  <select id="commune" v-model="form.commune" class="w-full px-4 py-3.5 rounded-xl border border-gray-300 focus:border-[#23c55e] focus:ring-2 focus:ring-[#23c55e]/50 transition-shadow" :disabled="!form.region" required>
                    <option value="" disabled>Sélectionnez une commune</option>
                    <option v-if="!form.region" value="" disabled>Veuillez d'abord choisir une région</option>
                    <option v-for="commune in communes" :key="commune" :value="commune">{{ commune }}</option>
                  </select>
                </div>

                <div>
                  <label for="secteur" class="block text-sm font-medium text-gray-700 mb-2">Type d'Établissement / Secteur</label>
                  <select id="secteur" v-model="form.secteur" class="w-full px-4 py-3.5 rounded-xl border border-gray-300 focus:border-[#23c55e] focus:ring-2 focus:ring-[#23c55e]/50 transition-shadow" required>
                    <option value="" disabled>Sélectionnez le type d'établissement</option>
                    <option v-for="secteur_item in secteurs" :key="secteur_item" :value="secteur_item">{{ secteur_item }}</option>
                  </select>
                </div>

                <div>
                  <label for="surface" class="block text-sm font-medium text-gray-700 mb-2">Surface Approximative (m²)</label>
                  <select id="surface" v-model="form.surface" class="w-full px-4 py-3.5 rounded-xl border border-gray-300 focus:border-[#23c55e] focus:ring-2 focus:ring-[#23c55e]/50 transition-shadow" required>
                    <option value="" disabled>Sélectionnez la surface</option>
                    <option value="small">Moins de 500 m²</option>
                    <option value="medium">500 - 2000 m²</option>
                    <option value="large">2000 - 5000 m²</option>
                    <option value="xlarge">Plus de 5000 m²</option>
                  </select>
                </div>
              </div>
            </div>

            <!-- Facteurs de Risque -->
            <div class="space-y-6 pt-6 border-t border-gray-200">
              <div class="flex items-center space-x-4 mb-8">
                <div class="p-3.5 bg-[#23c55e]/10 rounded-xl shadow-sm">
                  <ShieldExclamationIcon class="w-9 h-9 text-[#23c55e]" />
                </div>
                <div>
                  <h2 class="text-2xl sm:text-3xl font-bold text-[#111829]">Facteurs de Risque</h2>
                  <p class="text-gray-500 mt-1.5 text-sm sm:text-base">Évaluation des vulnérabilités potentielles de votre site.</p>
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                <div>
                  <label for="activite" class="block text-sm font-medium text-gray-700 mb-2">Niveau d'Activité Quotidien</label>
                  <select id="activite" v-model="form.activite" class="w-full px-4 py-3.5 rounded-xl border border-gray-300 focus:border-[#23c55e] focus:ring-2 focus:ring-[#23c55e]/50 transition-shadow" required>
                    <option value="" disabled>Sélectionnez le niveau d'activité</option>
                    <option value="low">Faible (ex: < 50 personnes/jour)</option>
                    <option value="medium">Moyen (ex: 50-200 personnes/jour)</option>
                    <option value="high">Élevé (ex: > 200 personnes/jour)</option>
                  </select>
                </div>

                <div>
                  <label for="horaires" class="block text-sm font-medium text-gray-700 mb-2">Horaires d'Activité Principaux</label>
                  <select id="horaires" v-model="form.horaires" class="w-full px-4 py-3.5 rounded-xl border border-gray-300 focus:border-[#23c55e] focus:ring-2 focus:ring-[#23c55e]/50 transition-shadow" required>
                    <option value="" disabled>Sélectionnez les horaires</option>
                    <option value="day">Journée (ex: 8h-18h)</option>
                    <option value="extended">Horaires étendus (ex: 6h-22h)</option>
                    <option value="24h">24h/24 et 7j/7</option>
                  </select>
                </div>

                <div>
                  <label for="valeurs" class="block text-sm font-medium text-gray-700 mb-2">Valeurs des Biens à Protéger</label>
                  <select id="valeurs" v-model="form.valeurs" class="w-full px-4 py-3.5 rounded-xl border border-gray-300 focus:border-[#23c55e] focus:ring-2 focus:ring-[#23c55e]/50 transition-shadow" required>
                    <option value="" disabled>Sélectionnez le type de valeurs</option>
                    <option value="low">Faible valeur (ex: matériel de bureau standard)</option>
                    <option value="medium">Valeur moyenne (ex: stock commercial courant)</option>
                    <option value="high">Haute valeur (ex: équipements spécialisés, stock de luxe)</option>
                    <option value="critical">Valeur critique (ex: données sensibles, espèces importantes)</option>
                  </select>
                </div>

                <div>
                  <label for="incidents" class="block text-sm font-medium text-gray-700 mb-2">Historique d'Incidents de Sécurité</label>
                  <select id="incidents" v-model="form.incidents" class="w-full px-4 py-3.5 rounded-xl border border-gray-300 focus:border-[#23c55e] focus:ring-2 focus:ring-[#23c55e]/50 transition-shadow" required>
                    <option value="" disabled>Sélectionnez la fréquence</option>
                    <option value="none">Aucun incident connu</option>
                    <option value="rare">Incidents rares (ex: moins d'1 par an)</option>
                    <option value="occasional">Incidents occasionnels (ex: quelques-uns par an)</option>
                    <option value="frequent">Incidents fréquents (ex: plusieurs par trimestre)</option>
                  </select>
                </div>
              </div>
            </div>

            <button 
              type="submit" 
              :disabled="isLoading"
              class="w-full px-8 py-4 bg-[#23c55e] text-white rounded-xl hover:bg-[#1ea550] focus:outline-none focus:ring-4 focus:ring-[#23c55e]/40 transition-all duration-300 font-semibold flex items-center justify-center text-lg shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed">
              <ArrowPathIcon v-if="isLoading" class="w-6 h-6 mr-3 animate-spin" />
              <ShieldCheckIcon v-else class="w-6 h-6 mr-3" />
              {{ isLoading ? 'Analyse en cours...' : 'Lancer l\'Analyse de Sécurité' }}
            </button>
          </form>
        </div>
      </div>
    </section>

    <!-- Informations Région -->
    <section v-if="form.region && showResults && !isLoading" class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RegionInfo :region="form.region" />
      </div>
    </section>

    <!-- Résultats de l'Évaluation -->
    <section v-if="showResults && !isLoading" id="results" class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="mb-10">
          <h2 class="text-3xl font-bold text-[#111829] mb-3">Rapport de Sécurité: {{ form.secteur }}</h2>
          <div class="flex items-center space-x-2">
            <MapPinIcon class="w-5 h-5 text-gray-500" />
            <p class="text-lg text-gray-700">Région: {{ form.region }}</p>
          </div>
          <div class="flex items-center mt-2 space-x-2">
            <ExclamationCircleIcon class="w-5 h-5" :class="getThreatLevelColor" />
            <p class="text-lg font-medium" :class="getThreatLevelColor">
              Niveau de menace: {{ threatLevel }}
            </p>
          </div>
          <p class="mt-4 text-gray-600 max-w-4xl">
            Analyse de sécurité pour un site standard du secteur {{ form.secteur }} dans la région de {{ form.region }}. 
            Le niveau de menace actuel est {{ threatLevel.toLowerCase() }}.
          </p>

          <!-- Boutons d'action -->
          <div class="mt-6 flex flex-col sm:flex-row gap-4">
            <NuxtLink
              to="/devis-agent"
              class="inline-flex items-center px-6 py-3 bg-[#23c55e] text-white rounded-xl hover:bg-[#1ea550] transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              <UserGroupIcon class="w-5 h-5 mr-2" />
              Demander un Agent de Sécurité
            </NuxtLink>
            <NuxtLink
              to="/audit-securite"
              class="inline-flex items-center px-6 py-3 bg-white text-[#111829] border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              <ClipboardDocumentCheckIcon class="w-5 h-5 mr-2" />
              Demander un Audit Complet
            </NuxtLink>
          </div>
        </div>

        <!-- Layout en deux colonnes -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Colonne de gauche - Score et données critiques -->
          <div class="lg:col-span-1 space-y-6">
            <!-- Score de Sécurité -->
            <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div class="flex items-center space-x-4 mb-4">
                <div class="p-3 bg-[#23c55e]/10 rounded-xl">
                  <ChartBarIcon class="w-6 h-6 text-[#23c55e]" />
                </div>
                <h3 class="text-xl font-bold text-[#111829]">Score de Sécurité</h3>
              </div>
              <div class="text-center py-6">
                <div class="text-6xl font-bold mb-2" :class="getScoreColor">{{ (securityScore / 10).toFixed(1) }}</div>
                <p class="text-gray-600">Basé sur le niveau de menace et les vulnérabilités identifiées</p>
              </div>
            </div>

            <!-- Recommandations Prioritaires -->
            <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div class="flex items-center space-x-4 mb-4">
                <div class="p-3 bg-[#23c55e]/10 rounded-xl">
                  <BoltIcon class="w-6 h-6 text-[#23c55e]" />
                </div>
                <h3 class="text-xl font-bold text-[#111829]">Actions Prioritaires</h3>
              </div>
              <ul class="space-y-4">
                <li v-for="(solution, index) in prioritySolutions" :key="index" class="flex items-start">
                  <div class="bg-[#23c55e]/10 p-2 rounded-lg mr-3 mt-0.5">
                    <LightBulbIcon class="w-5 h-5 text-[#23c55e]" />
                  </div>
                  <div>
                    <p class="text-gray-800 font-medium">{{ solution.title }}</p>
                    <div class="flex items-center mt-1 space-x-3">
                      <span class="text-sm bg-gray-100 px-2 py-1 rounded-md text-gray-700">
                        Difficulté: {{ solution.difficulty }}/5
                      </span>
                      <span class="text-sm bg-[#23c55e]/10 px-2 py-1 rounded-md text-[#23c55e] font-medium">
                        Impact: {{ solution.impact }}
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <!-- Colonne principale - Indicateurs détaillés -->
          <div class="lg:col-span-2 space-y-6">
            <!-- Indicateurs de Vulnérabilité -->
            <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div class="flex items-center space-x-4 mb-6">
                <div class="p-3 bg-[#23c55e]/10 rounded-xl">
                  <ShieldExclamationIcon class="w-6 h-6 text-[#23c55e]" />
                </div>
                <div>
                  <h3 class="text-xl font-bold text-[#111829]">Indicateurs de Vulnérabilité</h3>
                  <p class="text-gray-500 text-sm">Considérations générales adaptées au secteur {{ form.secteur }}</p>
                </div>
              </div>
              
              <!-- Liste des indicateurs -->
              <div class="space-y-6">
                <div v-for="(indicator, index) in securityIndicators" :key="index" 
                     class="border border-gray-100 rounded-xl p-5 hover:shadow-md transition-shadow">
                  <div class="flex flex-wrap justify-between items-start">
                    <div class="mb-3">
                      <h4 class="font-semibold text-[#111829] text-lg">{{ indicator.name }}</h4>
                      <div class="flex items-center mt-1">
                        <Badge :color="getRiskLevelColor(indicator.level)" class="mr-2">{{ indicator.level }}</Badge>
                        <span class="text-gray-500 text-sm">Facteur de risque: {{ indicator.riskFactor }}%</span>
                      </div>
                    </div>
                    <span class="text-sm text-gray-500">Pondération: {{ indicator.weight }}%</span>
                  </div>
                  
                  <p class="text-gray-600 my-3 text-sm">{{ indicator.description }}</p>
                  
                  <div class="mt-4">
                    <div class="text-xs font-medium text-gray-500 uppercase mb-1">Impact</div>
                    <p class="text-gray-700 text-sm">{{ indicator.impact }}</p>
                  </div>
                  
                  <div v-if="indicator.observations" class="mt-4">
                    <div class="text-xs font-medium text-gray-500 uppercase mb-1">Observations habituelles</div>
                    <p class="text-gray-700 text-sm">{{ indicator.observations }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Indicateur de chargement pour la section résultat -->
    <section v-if="isLoading" class="py-16 bg-gray-50 flex justify-center items-center min-h-[50vh]">
      <div class="text-center">
        <ArrowPathIcon class="w-12 h-12 text-[#23c55e] animate-spin mx-auto" />
        <p class="mt-4 text-xl font-semibold text-gray-700">Génération de votre rapport de sécurité...</p>
        <p class="text-gray-500">Cela peut prendre quelques instants.</p>
      </div>
    </section>

    <!-- Modal Audit -->
    <AuditModal :is-open="showAuditModal" @close="showAuditModal = false" />

    <!-- Comment ça fonctionne -->
    <section class="py-24 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-[#111829]">Comment fonctionne notre outil ?</h2>
          <p class="mt-4 text-lg text-gray-600">Notre approche méthodique pour une évaluation précise de vos besoins en sécurité</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Collecte de données -->
          <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div class="w-12 h-12 bg-[#23c55e]/10 rounded-xl flex items-center justify-center mb-6">
              <DocumentMagnifyingGlassIcon class="w-6 h-6 text-[#23c55e]" />
            </div>
            <h3 class="text-xl font-bold text-[#111829] mb-4">Collecte de Données</h3>
            <ul class="space-y-3 text-gray-600">
              <li class="flex items-start">
                <CheckCircleIcon class="w-5 h-5 text-[#23c55e] mt-0.5 mr-2 flex-shrink-0" />
                <span>Analyse du secteur d'activité</span>
              </li>
              <li class="flex items-start">
                <CheckCircleIcon class="w-5 h-5 text-[#23c55e] mt-0.5 mr-2 flex-shrink-0" />
                <span>Évaluation de la zone géographique</span>
              </li>
              <li class="flex items-start">
                <CheckCircleIcon class="w-5 h-5 text-[#23c55e] mt-0.5 mr-2 flex-shrink-0" />
                <span>Identification des risques spécifiques</span>
              </li>
            </ul>
          </div>

          <!-- Analyse contextuelle -->
          <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div class="w-12 h-12 bg-[#23c55e]/10 rounded-xl flex items-center justify-center mb-6">
              <ChartBarIcon class="w-6 h-6 text-[#23c55e]" />
            </div>
            <h3 class="text-xl font-bold text-[#111829] mb-4">Analyse Contextuelle</h3>
            <ul class="space-y-3 text-gray-600">
              <li class="flex items-start">
                <CheckCircleIcon class="w-5 h-5 text-[#23c55e] mt-0.5 mr-2 flex-shrink-0" />
                <span>Évaluation des statistiques locales</span>
              </li>
              <li class="flex items-start">
                <CheckCircleIcon class="w-5 h-5 text-[#23c55e] mt-0.5 mr-2 flex-shrink-0" />
                <span>Analyse des incidents passés</span>
              </li>
              <li class="flex items-start">
                <CheckCircleIcon class="w-5 h-5 text-[#23c55e] mt-0.5 mr-2 flex-shrink-0" />
                <span>Étude des vulnérabilités potentielles</span>
              </li>
            </ul>
          </div>

          <!-- Recommandations -->
          <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div class="w-12 h-12 bg-[#23c55e]/10 rounded-xl flex items-center justify-center mb-6">
              <LightBulbIcon class="w-6 h-6 text-[#23c55e]" />
            </div>
            <h3 class="text-xl font-bold text-[#111829] mb-4">Solutions Personnalisées</h3>
            <ul class="space-y-3 text-gray-600">
              <li class="flex items-start">
                <CheckCircleIcon class="w-5 h-5 text-[#23c55e] mt-0.5 mr-2 flex-shrink-0" />
                <span>Services de sécurité adaptés</span>
              </li>
              <li class="flex items-start">
                <CheckCircleIcon class="w-5 h-5 text-[#23c55e] mt-0.5 mr-2 flex-shrink-0" />
                <span>Équipements et produits recommandés</span>
              </li>
              <li class="flex items-start">
                <CheckCircleIcon class="w-5 h-5 text-[#23c55e] mt-0.5 mr-2 flex-shrink-0" />
                <span>Plan d'action priorisé et chiffré</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, h, defineComponent, watch } from 'vue'
import {
  MapPinIcon,
  ChartBarIcon,
  ShieldExclamationIcon,
  ExclamationTriangleIcon,
  WrenchIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  BuildingOfficeIcon,
  ShieldCheckIcon,
  ExclamationCircleIcon,
  BoltIcon,
  LightBulbIcon,
  WrenchScrewdriverIcon,
  ScaleIcon,
  VideoCameraIcon,
  BellAlertIcon,
  IdentificationIcon,
  AcademicCapIcon,
  ArrowUturnRightIcon,
  BanknotesIcon,
  LockClosedIcon,
  ArrowPathIcon,
  ClipboardDocumentCheckIcon,
  UserGroupIcon,
  DocumentMagnifyingGlassIcon
} from '@heroicons/vue/24/solid'
import { useRegionsStore } from '~/stores/regions'
import RegionInfo from '~/components/evaluation/RegionInfo.vue'
import AuditModal from '~/components/evaluation/AuditModal.vue'

const regionsStore = useRegionsStore()
const showAuditModal = ref(false)

const regionsList = computed(() => regionsStore.getRegionsList)
const communes = computed(() => regionsStore.getRegionCommunes(form.value.region))

// Données des formulaires
const form = ref({
  region: '',
  commune: '',
  secteur: '',
  surface: '',
  activite: '',
  horaires: '',
  valeurs: '',
  incidents: ''
})

// États
const showResults = ref(false)
const isLoading = ref(false)
const securityScore = ref(0)
const vulnerabilities = ref([])
const solutions = ref([])
const detailedReport = ref('')
const residualRisk = ref('')
const threatLevel = ref('')
const residualRiskLevel = ref('')

// Réinitialiser la commune si la région change
watch(() => form.value.region, () => {
  form.value.commune = ''
})

const secteurs = [
  'Établissement Bancaire',
  'Commerce de Luxe',
  'Grande Distribution',
  'Site Industriel',
  'Établissement de Santé',
  'Centre d\'Affaires',
  'Entrepôt Logistique',
  'Administration Publique',
  'Établissement Hôtelier',
  'Centre Commercial'
]

// Composant Badge pour les statuts
const Badge = defineComponent({
  props: {
    color: { type: String, default: 'gray' }
  },
  setup(props, { slots }) {
    const colorClasses = {
      red: 'bg-red-100 text-red-800',
      amber: 'bg-amber-100 text-amber-800',
      green: 'bg-green-100 text-green-800',
      gray: 'bg-gray-100 text-gray-800'
    }

    return () => h('span', {
      class: `inline-flex px-2.5 py-0.5 rounded-md text-sm font-medium ${colorClasses[props.color] || colorClasses.gray}`
    }, slots.default && slots.default())
  }
})

// Fonctions pour les couleurs d'affichage
const getScoreColor = computed(() => {
  if (securityScore.value >= 70) return 'text-green-600'
  if (securityScore.value >= 50) return 'text-amber-500'
  return 'text-red-600'
})

const getThreatLevelColor = computed(() => {
  if (threatLevel.value === 'Faible') return 'text-green-600'
  if (threatLevel.value === 'Modéré') return 'text-amber-500'
  return 'text-red-600'
})

const getResidualRiskColor = computed(() => {
  if (residualRiskLevel.value === 'Faible') return 'green'
  if (residualRiskLevel.value === 'Modéré') return 'amber'
  return 'red'
})

const getRiskLevelColor = (level) => {
  if (level === 'Faible') return 'green'
  if (level === 'Modéré') return 'amber'
  return 'red'
}

// Calculer les solutions prioritaires
const prioritySolutions = computed(() => {
  return solutions.value
    .filter(sol => sol.impact === 'Très fort')
    .sort((a, b) => a.difficulty - b.difficulty)
    .slice(0, 3)
})

// Indicateurs de sécurité détaillés
const securityIndicators = ref([])

// Message basé sur le score
const getScoreMessage = computed(() => {
  if (securityScore.value >= 80) return 'Excellent niveau de sécurité'
  if (securityScore.value >= 60) return 'Bon niveau avec quelques points d\'amélioration'
  if (securityScore.value >= 40) return 'Niveau moyen nécessitant des actions'
  return 'Niveau critique requérant une intervention rapide'
})

// Fonction d'évaluation des risques améliorée
const evaluerRisques = async () => {
  isLoading.value = true
  showResults.value = false

  await new Promise(resolve => setTimeout(resolve, 1500))

  let baseScore = calculateBaseScore()
  let modifiers = calculateModifiers()
  securityScore.value = Math.min(100, Math.max(0, baseScore + modifiers))

  threatLevel.value = determineThreatLevel()

  securityIndicators.value = generateSecurityIndicators()
  
  vulnerabilities.value = generateDetailedVulnerabilities()
  solutions.value = generateDetailedSolutions()
  
  generateComprehensiveReport()
  
  isLoading.value = false
  showResults.value = true
  
  setTimeout(() => {
    const resultsElement = document.querySelector('#results')
    if (resultsElement) {
      resultsElement.scrollIntoView({ behavior: 'smooth' })
    }
  }, 100)
}

const determineThreatLevel = () => {
  if (securityScore.value < 40) return 'Critique'
  if (securityScore.value < 60) return 'Élevé'
  if (securityScore.value < 75) return 'Modéré'
  return 'Faible'
}

const calculateBaseScore = () => {
  let score = 70

  const riskFactors = {
    activite: { low: 5, medium: 0, high: -5 },
    horaires: { day: 5, extended: 0, '24h': -5 },
    valeurs: { low: 5, medium: 0, high: -5, critical: -10 },
    incidents: { none: 10, rare: 5, occasional: -5, frequent: -10 }
  }

  Object.entries(riskFactors).forEach(([factor, values]) => {
    score += values[form.value[factor]] || 0
  })

  return score
}

const calculateModifiers = () => {
  let modifier = 0

  const surfaceModifiers = {
    small: 5,
    medium: 0,
    large: -5,
    xlarge: -10
  }

  modifier += surfaceModifiers[form.value.surface] || 0

  if (form.value.region === 'Dakar' && form.value.secteur === 'Commerce de Luxe') {
    modifier -= 10
  }
  else if (form.value.region === 'Dakar') {
    modifier -= 5
  }

  return modifier
}

const generateSecurityIndicators = () => {
  const indicators = []
  
  indicators.push({
    name: 'Risque régional',
    level: determineLevelForRegion(),
    riskFactor: determineThreatFactorForRegion(),
    weight: 25,
    description: 'Taux de criminalité local, instabilité sociale, accès aux services d\'urgence',
    impact: 'Affecte le niveau global de vigilance et les mesures de sécurité requises',
    observations: getRegionalObservation()
  })
  
  indicators.push({
    name: 'Isolement du site',
    level: determineLevelForSize(),
    riskFactor: form.value.surface === 'small' ? 35 : form.value.surface === 'medium' ? 50 : 75,
    weight: 20,
    description: 'Proximité des centres urbains, facilité d\'accès pour les interventions d\'urgence',
    impact: 'Influence le temps de réponse des forces de l\'ordre et services d\'urgence',
    observations: getSectorObservation('isolement')
  })
  
  indicators.push({
    name: 'Exposition aux liquidités',
    level: determineLevelForValue(),
    riskFactor: form.value.valeurs === 'low' ? 30 : form.value.valeurs === 'medium' ? 50 : form.value.valeurs === 'high' ? 70 : 85,
    weight: 20,
    description: 'Montants en espèces manipulés, présence de biens de valeur et sécurisation',
    impact: 'Détermine l\'attractivité de la cible pour les actes malveillants',
    observations: getSectorObservation('exposition')
  })
  
  indicators.push({
    name: 'Contrôle d\'accès',
    level: 'Faible',
    riskFactor: 85,
    weight: 15,
    description: 'Systèmes de contrôle, points d\'entrée et zones sécurisées',
    impact: 'Limite les intrusions et compartimente les zones sensibles',
    observations: getSectorObservation('acces')
  })
  
  indicators.push({
    name: 'Volume de passage',
    level: form.value.activite === 'low' ? 'Faible' : form.value.activite === 'medium' ? 'Modéré' : 'Élevé',
    riskFactor: form.value.activite === 'low' ? 25 : form.value.activite === 'medium' ? 50 : 85,
    weight: 10,
    description: 'Fréquentation quotidienne et niveau d\'activité nocturne',
    impact: 'Affecte la capacité de détection des comportements suspects',
    observations: getActivityObservation()
  })
  
  indicators.push({
    name: 'Historique des incidents',
    level: form.value.incidents === 'none' ? 'Faible' : form.value.incidents === 'rare' ? 'Faible' : form.value.incidents === 'occasional' ? 'Modéré' : 'Élevé',
    riskFactor: form.value.incidents === 'none' ? 20 : form.value.incidents === 'rare' ? 35 : form.value.incidents === 'occasional' ? 60 : 80,
    weight: 5,
    description: 'Incidents passés, protocoles d\'urgence et formation du personnel',
    impact: 'Indique la probabilité de récurrence et les vulnérabilités connues',
    observations: 'Majoritairement des vols dans les espaces communs. Formation du personnel souvent insuffisante face aux incidents de sécurité.'
  })
  
  indicators.push({
    name: 'Gestion des consommables sensibles',
    level: 'Faible',
    riskFactor: 20,
    weight: 5,
    description: 'Niveau de fragmentation dans la gestion des équipements critiques',
    impact: 'Influence la sécurité des données et matériels sensibles',
    observations: 'Gestion parfois fragmentée des consommables entre différents services, créant des zones de vulnérabilité dans le suivi des stocks sensibles.'
  })
  
  return indicators
}

const determineLevelForRegion = () => {
  const highRiskRegions = ['Dakar', 'Saint-Louis', 'Ziguinchor']
  const mediumRiskRegions = ['Thiès', 'Diourbel', 'Kaolack']
  
  if (highRiskRegions.includes(form.value.region)) return 'Élevé'
  if (mediumRiskRegions.includes(form.value.region)) return 'Modéré'
  return 'Faible'
}

const determineThreatFactorForRegion = () => {
  const highRiskRegions = ['Dakar', 'Saint-Louis', 'Ziguinchor']
  const mediumRiskRegions = ['Thiès', 'Diourbel', 'Kaolack']
  
  if (highRiskRegions.includes(form.value.region)) return 75
  if (mediumRiskRegions.includes(form.value.region)) return 50
  return 30
}

const determineLevelForSize = () => {
  if (form.value.surface === 'small') return 'Faible'
  if (form.value.surface === 'medium') return 'Modéré'
  return 'Élevé'
}

const determineLevelForValue = () => {
  if (form.value.valeurs === 'low') return 'Faible'
  if (form.value.valeurs === 'medium') return 'Modéré'
  if (form.value.valeurs === 'high') return 'Élevé'
  return 'Critique'
}

const getRegionalObservation = () => {
  const regionObservations = {
    'Dakar': 'Zone urbaine dense avec taux de criminalité élevé, présence accrue des forces de l\'ordre mais temps d\'intervention variable selon les quartiers.',
    'Thiès': 'Zone semi-urbaine avec criminalité modérée, forces de l\'ordre présentes mais délai d\'intervention parfois long.',
    'Diourbel': 'Zone fortement influencée par les activités religieuses, criminalité généralement faible mais surveillance limitée.'
  }
  
  return regionObservations[form.value.region] || 'Caractéristiques variables selon les communes, nécessite une analyse approfondie.'
}

const getSectorObservation = (type) => {
  if (form.value.secteur === 'Établissement Bancaire') {
    if (type === 'isolement') return 'Généralement situés dans des zones urbaines accessibles, mais avec des vulnérabilités liées aux heures d\'ouverture et fermeture.'
    if (type === 'exposition') return 'Manipulation quotidienne de grandes quantités d\'espèces, avec des pics prévisibles lors des livraisons.'
    if (type === 'acces') return 'Zones publiques et privées clairement délimitées, mais points critiques: sas d\'entrée, guichets et chambres fortes.'
  }
  
  if (form.value.secteur === 'Commerce de Luxe') {
    if (type === 'isolement') return 'Souvent implantés dans des zones commerciales prisées avec forte visibilité, vulnérables pendant les périodes de fermeture.'
    if (type === 'exposition') return 'Présence permanente de produits de haute valeur en vitrine et en stock, cibles privilégiées pour vols et cambriolages.'
    if (type === 'acces') return 'Espaces de vente accessibles au public avec faible contrôle d\'entrée. Réserves souvent insuffisamment sécurisées.'
  }
  
  if (form.value.secteur === 'Établissement Hôtelier') {
    if (type === 'isolement') return 'Généralement implantés en zones touristiques ou urbaines fréquentées, peu isolées mais exposées aux risques liés à l\'affluence touristique.'
    if (type === 'exposition') return 'Manipulation quotidienne d\'espèces à la réception et dans les points de vente internes, avec des pointes d\'activité prévisibles.'
    if (type === 'acces') return 'Accès public étendu avec peu de restrictions. Points critiques: accès aux étages, locaux techniques et stockage souvent mal contrôlés.'
  }
  
  return 'Caractéristiques variables selon l\'établissement, nécessite une analyse approfondie.'
}

const getActivityObservation = () => {
  if (form.value.activite === 'high') {
    return 'Flux constant de personnes rendant difficile l\'identification des individus suspects. Nécessite des protocoles de surveillance adaptés.'
  }
  if (form.value.activite === 'medium') {
    return 'Activité modérée permettant un certain niveau de contrôle visuel, mais nécessitant des mesures complémentaires pendant les heures de pointe.'
  }
  return 'Faible fréquentation facilitant la détection d\'individus suspects, mais pouvant rendre le site plus vulnérable en l\'absence de témoins.'
}

const generateDetailedVulnerabilities = () => {
  const vulnerabilities = []
  
  const sectorVulnerabilities = {
    'Établissement Bancaire': [
      'Risque élevé d\'attaque à main armée',
      'Vulnérabilité des points d\'accès multiples',
      'Exposition lors des transferts de fonds',
      'Risque d\'agression du personnel en contact avec la clientèle'
    ],
    'Commerce de Luxe': [
      'Risque de vol qualifié',
      'Vulnérabilité des vitrines d\'exposition',
      'Cibles privilégiées pour les cambriolages nocturnes',
      'Risque de braquage pendant les heures d\'ouverture'
    ],
    'Grande Distribution': [
      'Flux important de visiteurs difficile à contrôler',
      'Zones de stockage vulnérables',
      'Risque de vol à l\'étalage',
      'Vulnérabilité lors des transferts de fonds'
    ],
    'Établissement Hôtelier': [
      'Accès aux chambres insuffisamment contrôlé',
      'Manipulation d\'espèces à la réception',
      'Gestion des clés et badges d\'accès souvent défaillante',
      'Stockage des objets de valeur des clients'
    ]
  }

  vulnerabilities.push(...(sectorVulnerabilities[form.value.secteur] || []))

  if (form.value.horaires === '24h') {
    vulnerabilities.push(
      'Exposition accrue pendant les heures creuses',
      'Nécessité de rotation des équipes de sécurité'
    )
  }

  if (form.value.surface === 'xlarge') {
    vulnerabilities.push(
      'Difficulté de surveillance périmétrique complète',
      'Multiplicité des points d\'accès à sécuriser'
    )
  }

  return vulnerabilities
}

const securityDevices = [
  {
    id: 'video',
    name: 'Vidéosurveillance',
    devices: [
      {
        id: 'cctv_ip',
        name: 'Caméras IP HD',
        description: 'Système de vidéosurveillance professionnel haute définition avec analyse vidéo'
      },
      {
        id: 'cctv_thermal',
        name: 'Caméras thermiques',
        description: 'Détection thermique pour surveillance périmétrique'
      },
      {
        id: 'video_analytics',
        name: 'Analyse vidéo intelligente',
        description: 'Détection automatique d\'intrusion et analyse comportementale'
      },
      {
        id: 'remote_monitoring',
        name: 'Télésurveillance',
        description: 'Surveillance à distance 24/7 par nos opérateurs qualifiés'
      }
    ]
  },
  {
    id: 'access',
    name: 'Contrôle d\'accès',
    devices: [
      {
        id: 'access_badges',
        name: 'Contrôle d\'accès RFID',
        description: 'Gestion des accès par badges avec traçabilité complète'
      },
      {
        id: 'biometric',
        name: 'Contrôle biométrique',
        description: 'Reconnaissance digitale et faciale pour zones sensibles'
      },
      {
        id: 'visitor_management',
        name: 'Gestion des visiteurs',
        description: 'Système intégré de gestion des accès temporaires'
      }
    ]
  },
  {
    id: 'intrusion',
    name: 'Protection périmétrique',
    devices: [
      {
        id: 'electric_fence',
        name: 'Clôture électrique',
        description: 'Système de clôture électrique avec détection d\'intrusion'
      },
      {
        id: 'perimeter_detection',
        name: 'Détection périmétrique',
        description: 'Barrières infrarouges et détection périmétrique avancée'
      },
      {
        id: 'alarm_system',
        name: 'Centrale d\'alarme',
        description: 'Système d\'alarme professionnel avec vérification vidéo'
      }
    ]
  },
  {
    id: 'fire_safety',
    name: 'Sécurité incendie',
    devices: [
      {
        id: 'fire_detection',
        name: 'Détection incendie',
        description: 'Système de détection incendie aux normes en vigueur'
      },
      {
        id: 'emergency_lighting',
        name: 'Éclairage de sécurité',
        description: 'Système d\'éclairage de sécurité et balisage'
      },
      {
        id: 'fire_equipment',
        name: 'Équipements incendie',
        description: 'Fourniture et maintenance des équipements de lutte contre l\'incendie'
      }
    ]
  },
  {
    id: 'physical_security',
    name: 'Gardiennage',
    devices: [
      {
        id: 'security_guards',
        name: 'Agents de sécurité',
        description: 'Agents qualifiés et formés selon vos besoins spécifiques'
      },
      {
        id: 'mobile_patrol',
        name: 'Rondes mobiles',
        description: 'Service de rondes et d\'intervention sur alarme'
      },
      {
        id: 'reception_security',
        name: 'Accueil sécurité',
        description: 'Personnel formé pour l\'accueil et la sécurité'
      }
    ]
  }
]

const generateDetailedSolutions = () => {
  const allSolutions = [
    {
      title: 'Audit de sécurité complet',
      description: 'Évaluation professionnelle des vulnérabilités et proposition de solutions adaptées',
      difficulty: 1,
      impact: 'Très fort',
      icon: 'ClipboardDocumentCheckIcon'
    },
    {
      title: 'Gardiennage professionnel',
      description: 'Mise en place d\'une équipe d\'agents qualifiés avec procédures spécifiques à votre site',
      difficulty: 2,
      impact: 'Très fort',
      icon: 'ShieldCheckIcon'
    },
    {
      title: 'Sécurisation périmétrique',
      description: 'Installation de clôtures électriques et systèmes de détection périmétrique',
      difficulty: 3,
      impact: 'Très fort',
      icon: 'BoltIcon'
    },
    {
      title: 'Vidéoprotection intelligente',
      description: 'Déploiement de caméras HD avec analyse vidéo et télésurveillance 24/7',
      difficulty: 3,
      impact: 'Très fort',
      icon: 'VideoCameraIcon'
    },
    {
      title: 'Contrôle d\'accès intégré',
      description: 'Solution complète de contrôle d\'accès avec badges RFID et biométrie',
      difficulty: 2,
      impact: 'Fort',
      icon: 'IdentificationIcon'
    },
    {
      title: 'Protection anti-intrusion',
      description: 'Système d\'alarme professionnel avec vérification vidéo et intervention',
      difficulty: 2,
      impact: 'Fort',
      icon: 'BellAlertIcon'
    },
    {
      title: 'Sécurité incendie',
      description: 'Installation et maintenance des équipements de détection et protection incendie',
      difficulty: 2,
      impact: 'Très fort',
      icon: 'FireIcon'
    },
    {
      title: 'Formation sécurité',
      description: 'Formation du personnel (SSIAP, secourisme, sécurité) et exercices pratiques',
      difficulty: 2,
      impact: 'Fort',
      icon: 'AcademicCapIcon'
    },
    {
      title: 'Sécurité événementielle',
      description: 'Protection professionnelle pour vos événements corporatifs et manifestations publiques',
      difficulty: 2,
      impact: 'Fort',
      icon: 'UserGroupIcon'
    },
    {
      title: 'Protection rapprochée',
      description: 'Services d\'agents qualifiés pour la protection de personnes et biens de valeur',
      difficulty: 1,
      impact: 'Très fort',
      icon: 'ShieldCheckIcon'
    },
    {
      title: 'Système d\'interphonie',
      description: 'Installation de systèmes d\'interphonie adaptés pour sécuriser les points d\'accès',
      difficulty: 2,
      impact: 'Moyen',
      icon: 'IdentificationIcon'
    },
    {
      title: 'Nettoyage professionnel',
      description: 'Services d\'entretien et de maintenance pour des espaces sécurisés et bien entretenus',
      difficulty: 1,
      impact: 'Moyen',
      icon: 'WrenchScrewdriverIcon'
    },
    {
      title: 'Équipements de protection',
      description: 'Fourniture d\'EPI et de matériels de sécurité conformes aux normes en vigueur',
      difficulty: 1,
      impact: 'Fort',
      icon: 'ShieldCheckIcon'
    },
    {
      title: 'Formation incendie',
      description: 'Formation aux techniques de prévention et d\'extinction des incendies',
      difficulty: 2,
      impact: 'Très fort',
      icon: 'AcademicCapIcon'
    },
    {
      title: 'Formation SST',
      description: 'Formation Sauveteur Secouriste du Travail pour votre personnel',
      difficulty: 2,
      impact: 'Fort',
      icon: 'AcademicCapIcon'
    },
    {
      title: 'Formation EPI',
      description: 'Formation de vos Équipes de Première Intervention pour une réaction efficace',
      difficulty: 2,
      impact: 'Fort',
      icon: 'AcademicCapIcon'
    }
  ]

  // Sélection des solutions basée sur le secteur
  let selectedSolutionsTitles = []
  
  // Solutions de base pour tous les secteurs
  selectedSolutionsTitles.push('Audit de sécurité complet')

  // Sélection spécifique par secteur
  switch (form.value.secteur) {
    case 'Établissement Bancaire':
      selectedSolutionsTitles.push(
        'Gardiennage professionnel',
        'Vidéoprotection intelligente',
        'Contrôle d\'accès intégré',
        'Protection rapprochée'
      )
      break
    case 'Commerce de Luxe':
      selectedSolutionsTitles.push(
        'Vidéoprotection intelligente',
        'Protection anti-intrusion',
        'Gardiennage professionnel',
        'Système d\'interphonie'
      )
      break
    case 'Grande Distribution':
      selectedSolutionsTitles.push(
        'Vidéoprotection intelligente',
        'Protection anti-intrusion',
        'Sécurité incendie',
        'Nettoyage professionnel'
      )
      break
    case 'Site Industriel':
      selectedSolutionsTitles.push(
        'Sécurisation périmétrique',
        'Contrôle d\'accès intégré',
        'Sécurité incendie',
        'Équipements de protection'
      )
      break
    case 'Établissement de Santé':
      selectedSolutionsTitles.push(
        'Contrôle d\'accès intégré',
        'Gardiennage professionnel',
        'Formation sécurité',
        'Formation SST'
      )
      break
    case 'Centre d\'Affaires':
      selectedSolutionsTitles.push(
        'Contrôle d\'accès intégré',
        'Vidéoprotection intelligente',
        'Nettoyage professionnel',
        'Formation EPI'
      )
      break
    case 'Entrepôt Logistique':
      selectedSolutionsTitles.push(
        'Sécurisation périmétrique',
        'Système d\'alarme professionnel',
        'Vidéoprotection intelligente',
        'Équipements de protection'
      )
      break
    case 'Administration Publique':
      selectedSolutionsTitles.push(
        'Gardiennage professionnel',
        'Contrôle d\'accès intégré',
        'Sécurité incendie',
        'Formation incendie'
      )
      break
    case 'Établissement Hôtelier':
      selectedSolutionsTitles.push(
        'Vidéoprotection intelligente',
        'Contrôle d\'accès intégré', 
        'Gardiennage professionnel',
        'Nettoyage professionnel'
      )
      break
    case 'Centre Commercial':
      selectedSolutionsTitles.push(
        'Sécurité événementielle',
        'Vidéoprotection intelligente',
        'Gardiennage professionnel',
        'Sécurité incendie'
      )
      break
    default:
      selectedSolutionsTitles.push(
        'Gardiennage professionnel',
        'Vidéoprotection intelligente',
        'Protection anti-intrusion'
      )
  }

  // Ajout de solutions basées sur les facteurs de risque
  if (form.value.valeurs === 'critical' || form.value.valeurs === 'high') {
    selectedSolutionsTitles.push('Sécurisation périmétrique', 'Protection rapprochée')
  }
  
  if (form.value.horaires === '24h') {
    selectedSolutionsTitles.push('Gardiennage professionnel', 'Vidéoprotection intelligente')
  }

  if (form.value.surface === 'xlarge' || form.value.surface === 'large') {
    selectedSolutionsTitles.push('Vidéoprotection intelligente', 'Sécurisation périmétrique')
  }

  if (form.value.incidents === 'frequent' || form.value.incidents === 'occasional') {
    selectedSolutionsTitles.push('Formation sécurité', 'Équipements de protection')
  }

  // Filtrer les solutions uniques
  selectedSolutionsTitles = [...new Set(selectedSolutionsTitles)]

  // Sélectionner les solutions correspondantes
  const selectedSolutions = allSolutions.filter(solution => 
    selectedSolutionsTitles.includes(solution.title)
  )

  // Trier par impact et difficulté
  return selectedSolutions.sort((a, b) => {
    if (a.impact === b.impact) {
      return a.difficulty - b.difficulty
    }
    return a.impact === 'Très fort' ? -1 : 1
  }).slice(0, 4) // Limiter à 4 solutions prioritaires
}

const generateComprehensiveReport = () => {
  if (securityScore.value < 40) {
    residualRiskLevel.value = 'Élevé'
    residualRisk.value = 'Même après application des mesures recommandées, un risque significatif subsistera. Une refonte complète de la stratégie de sécurité est nécessaire, avec intervention d\'experts et audits réguliers.'
  } else if (securityScore.value < 60) {
    residualRiskLevel.value = 'Modéré'
    residualRisk.value = 'L\'application des moyens de mitigation réduira le risque, mais une vigilance reste nécessaire. Des contrôles périodiques et une mise à jour des procédures sont recommandés.'
  } else {
    residualRiskLevel.value = 'Faible'
    residualRisk.value = 'Après mise en place des mesures recommandées, le risque résiduel sera minimal. Un programme de maintenance préventive et d\'audits annuels sera suffisant pour maintenir ce niveau de sécurité.'
  }

  detailedReport.value = `Notre analyse approfondie révèle un niveau de risque ${
    securityScore.value < 50 ? 'critique' : securityScore.value < 70 ? 'significatif' : 'modéré'
  } pour votre établissement ${form.value.secteur}. 

L'évaluation prend en compte la typologie de votre activité, la configuration des lieux, ainsi que les facteurs de risque spécifiques à votre secteur d'activité. ${
    form.value.incidents !== 'none' ? 
    'L\'historique d\'incidents signalés constitue un indicateur important dans notre évaluation.' : 
    'L\'absence d\'incidents historiques est un facteur positif, mais ne doit pas conduire à un relâchement de la vigilance.'
  }

Nos recommandations s'appuient sur les meilleures pratiques du secteur de la sécurité privée et sur notre expertise approfondie dans la protection des ${form.value.secteur}.`
}

const startDetailedEvaluation = () => {
  navigateTo('/evaluation-detaillee')
}

const openAuditModal = () => {
  showAuditModal.value = true
}

const navigateToAudit = () => {
  navigateTo({
    path: '/audit-securite',
    query: {
      sector: form.value.secteur,
      region: form.value.region,
      commune: form.value.commune
    }
  })
}
</script>