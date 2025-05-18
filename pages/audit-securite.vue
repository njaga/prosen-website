<template>
  <div>
    <SEO 
      title="Demande d'Audit de Sécurité"
      description="Planifiez un audit de sécurité personnalisé pour votre établissement"
    />

    <!-- Hero Section -->
    <section class="relative min-h-[40vh] flex items-center bg-gradient-to-br from-[#111829] via-[#1a2436] to-[#23c55e]/20">
      <div class="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10"></div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        <div class="text-center">
          <span class="inline-flex items-center px-4 py-1.5 bg-[#23c55e]/10 text-[#23c55e] rounded-full text-sm font-semibold mb-6 backdrop-blur-sm border border-[#23c55e]/20">
            <ClipboardDocumentCheckIcon class="w-5 h-5 mr-2" />
            Audit Professionnel
          </span>
          <h1 class="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Demande d'Audit de Sécurité
          </h1>
          <p class="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Planifiez un audit sur site pour une évaluation approfondie de vos besoins en sécurité
          </p>
        </div>
      </div>
    </section>

    <!-- Formulaire de demande -->
    <section class="relative -mt-20 z-10 pb-24">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100">
          <form @submit.prevent="submitAuditRequest" class="space-y-8">
            <div v-if="sectorInfo" class="bg-[#23c55e]/5 rounded-xl p-6 mb-8">
              <p class="text-gray-700">
                Demande d'audit pour le secteur <span class="font-semibold">{{ sectorInfo.sector }}</span> 
                dans la région de <span class="font-semibold">{{ sectorInfo.region }}</span>
                {{ sectorInfo.commune ? `, commune de ${sectorInfo.commune}` : '' }}
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Nom complet *</label>
                <input 
                  type="text"
                  v-model="form.fullName"
                  required
                  class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#23c55e]/50 focus:border-[#23c55e]"
                />
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Entreprise</label>
                <input 
                  type="text"
                  v-model="form.company"
                  class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#23c55e]/50 focus:border-[#23c55e]"
                />
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Email professionnel *</label>
                <input 
                  type="email"
                  v-model="form.email"
                  required
                  class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#23c55e]/50 focus:border-[#23c55e]"
                />
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Téléphone *</label>
                <input 
                  type="tel"
                  v-model="form.phone"
                  required
                  class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#23c55e]/50 focus:border-[#23c55e]"
                />
              </div>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Date souhaitée pour l'audit *</label>
              <input 
                type="date"
                v-model="form.preferredDate"
                required
                min="2024-03-01"
                class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#23c55e]/50 focus:border-[#23c55e]"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Commentaires ou besoins spécifiques</label>
              <textarea 
                v-model="form.comments"
                rows="4"
                class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#23c55e]/50 focus:border-[#23c55e]"
                placeholder="Précisez vos besoins particuliers ou toute information utile pour l'audit..."
              ></textarea>
            </div>

            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full px-8 py-4 bg-[#23c55e] text-white rounded-xl hover:bg-[#1ea550] focus:outline-none focus:ring-4 focus:ring-[#23c55e]/40 transition-all duration-300 font-semibold flex items-center justify-center text-lg shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <ArrowPathIcon v-if="isSubmitting" class="w-6 h-6 mr-3 animate-spin" />
              <ClipboardDocumentCheckIcon v-else class="w-6 h-6 mr-3" />
              {{ isSubmitting ? 'Envoi en cours...' : 'Demander un audit' }}
            </button>
          </form>
        </div>
      </div>
    </section>

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
            <h3 class="text-xl font-bold text-[#111829] mb-4">Recommandations</h3>
            <ul class="space-y-3 text-gray-600">
              <li class="flex items-start">
                <CheckCircleIcon class="w-5 h-5 text-[#23c55e] mt-0.5 mr-2 flex-shrink-0" />
                <span>Solutions personnalisées</span>
              </li>
              <li class="flex items-start">
                <CheckCircleIcon class="w-5 h-5 text-[#23c55e] mt-0.5 mr-2 flex-shrink-0" />
                <span>Priorisation des actions</span>
              </li>
              <li class="flex items-start">
                <CheckCircleIcon class="w-5 h-5 text-[#23c55e] mt-0.5 mr-2 flex-shrink-0" />
                <span>Plan d'action détaillé</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { 
  ClipboardDocumentCheckIcon,
  ArrowPathIcon,
  DocumentMagnifyingGlassIcon,
  ChartBarIcon,
  LightBulbIcon,
  CheckCircleIcon
} from '@heroicons/vue/24/solid'

const route = useRoute()
const isSubmitting = ref(false)

const sectorInfo = ref({
  sector: route.query.sector || null,
  region: route.query.region || null,
  commune: route.query.commune || null
})

const form = ref({
  fullName: '',
  company: '',
  email: '',
  phone: '',
  preferredDate: '',
  comments: ''
})

const submitAuditRequest = async () => {
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