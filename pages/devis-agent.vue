<template>
  <div>
    <SEO 
      title="Demande de Devis - Agent de Sécurité"
      description="Obtenez un devis personnalisé pour nos services d'agents de sécurité qualifiés"
    />

    <!-- Hero Section -->
    <section class="relative min-h-[40vh] flex items-center bg-gradient-to-br from-[#111829] via-[#1a2436] to-[#23c55e]/20">
      <div class="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10"></div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        <div class="text-center">
          <span class="inline-flex items-center px-4 py-1.5 bg-[#23c55e]/10 text-[#23c55e] rounded-full text-sm font-semibold mb-6 backdrop-blur-sm border border-[#23c55e]/20">
            <UserGroupIcon class="w-5 h-5 mr-2" />
            Agents Qualifiés
          </span>
          <h1 class="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Demande de Devis Agent de Sécurité
          </h1>
          <p class="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Des agents de sécurité professionnels, formés et certifiés pour répondre à vos besoins
          </p>
        </div>
      </div>
    </section>

    <!-- Formulaire de demande -->
    <section class="relative -mt-20 z-10 pb-24">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100">
          <form @submit.prevent="submitDevisRequest" class="space-y-8">
            <!-- Informations de contact -->
            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-6">Informations de contact</h3>
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
                  <label class="block text-sm font-medium text-gray-700 mb-2">Email *</label>
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
            </div>

            <!-- Besoins en sécurité -->
            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-6">Besoins en sécurité</h3>
              
              <div class="space-y-6">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Type de site à sécuriser *</label>
                  <select 
                    v-model="form.siteType"
                    required
                    class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#23c55e]/50 focus:border-[#23c55e]"
                  >
                    <option value="">Sélectionnez un type</option>
                    <option value="commercial">Site commercial</option>
                    <option value="industrial">Site industriel</option>
                    <option value="residential">Résidentiel</option>
                    <option value="office">Bureaux</option>
                    <option value="event">Événementiel</option>
                    <option value="other">Autre</option>
                  </select>
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Nombre d'agents souhaité *</label>
                  <input 
                    type="number"
                    v-model="form.agentCount"
                    required
                    min="1"
                    class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#23c55e]/50 focus:border-[#23c55e]"
                  />
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Type de service *</label>
                  <div class="space-y-3">
                    <label class="flex items-center">
                      <input type="radio" v-model="form.serviceType" value="24_7" class="text-[#23c55e]" required>
                      <span class="ml-2">Surveillance 24/7</span>
                    </label>
                    <label class="flex items-center">
                      <input type="radio" v-model="form.serviceType" value="day" class="text-[#23c55e]">
                      <span class="ml-2">Surveillance de jour uniquement</span>
                    </label>
                    <label class="flex items-center">
                      <input type="radio" v-model="form.serviceType" value="night" class="text-[#23c55e]">
                      <span class="ml-2">Surveillance de nuit uniquement</span>
                    </label>
                    <label class="flex items-center">
                      <input type="radio" v-model="form.serviceType" value="event" class="text-[#23c55e]">
                      <span class="ml-2">Événementiel</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Compétences spécifiques requises</label>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <label class="flex items-center">
                      <input type="checkbox" v-model="form.skills" value="ssiap" class="text-[#23c55e]">
                      <span class="ml-2">SSIAP</span>
                    </label>
                    <label class="flex items-center">
                      <input type="checkbox" v-model="form.skills" value="firstAid" class="text-[#23c55e]">
                      <span class="ml-2">Premiers secours</span>
                    </label>
                    <label class="flex items-center">
                      <input type="checkbox" v-model="form.skills" value="cyno" class="text-[#23c55e]">
                      <span class="ml-2">Maître-chien</span>
                    </label>
                    <label class="flex items-center">
                      <input type="checkbox" v-model="form.skills" value="weapons" class="text-[#23c55e]">
                      <span class="ml-2">Port d'arme</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <!-- Informations complémentaires -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Informations complémentaires</label>
              <textarea 
                v-model="form.additionalInfo"
                rows="4"
                class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#23c55e]/50 focus:border-[#23c55e]"
                placeholder="Précisez vos besoins spécifiques, contraintes particulières..."
              ></textarea>
            </div>

            <!-- Message de statut -->
            <div v-if="submitStatus.message" :class="[
              'p-4 rounded-xl text-center',
              submitStatus.success ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'
            ]">
              {{ submitStatus.message }}
            </div>

            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full px-8 py-4 bg-[#23c55e] text-white rounded-xl hover:bg-[#1ea550] focus:outline-none focus:ring-4 focus:ring-[#23c55e]/40 transition-all duration-300 font-semibold flex items-center justify-center text-lg shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed mb-4"
            >
              <ArrowPathIcon v-if="isSubmitting" class="w-6 h-6 mr-3 animate-spin" />
              <DocumentCheckIcon v-else class="w-6 h-6 mr-3" />
              {{ isSubmitting ? 'Envoi en cours...' : 'Demander un devis' }}
            </button>

            <!-- Bouton WhatsApp -->
            <button 
              type="button"
              @click="sendWhatsAppMessage"
              :disabled="!isFormValid"
              class="w-full px-8 py-4 bg-[#25D366] hover:bg-[#20BD5C] text-white rounded-xl transition-all duration-300 font-semibold flex items-center justify-center text-lg shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#25D366]"
            >
              <svg class="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Continuer sur WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>

    <!-- Nos avantages -->
    <section class="py-24 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-[#111829]">Pourquoi choisir nos agents ?</h2>
          <p class="mt-4 text-lg text-gray-600">Des professionnels qualifiés et formés pour assurer votre sécurité</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Formation -->
          <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div class="w-12 h-12 bg-[#23c55e]/10 rounded-xl flex items-center justify-center mb-6">
              <AcademicCapIcon class="w-6 h-6 text-[#23c55e]" />
            </div>
            <h3 class="text-xl font-bold text-[#111829] mb-4">Formation Continue</h3>
            <p class="text-gray-600">Nos agents suivent régulièrement des formations pour maintenir leurs compétences à jour</p>
          </div>

          <!-- Expérience -->
          <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div class="w-12 h-12 bg-[#23c55e]/10 rounded-xl flex items-center justify-center mb-6">
              <ClockIcon class="w-6 h-6 text-[#23c55e]" />
            </div>
            <h3 class="text-xl font-bold text-[#111829] mb-4">Expérience Terrain</h3>
            <p class="text-gray-600">Une équipe expérimentée capable de gérer efficacement toutes les situations</p>
          </div>

          <!-- Professionnalisme -->
          <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div class="w-12 h-12 bg-[#23c55e]/10 rounded-xl flex items-center justify-center mb-6">
              <ShieldCheckIcon class="w-6 h-6 text-[#23c55e]" />
            </div>
            <h3 class="text-xl font-bold text-[#111829] mb-4">Professionnalisme</h3>
            <p class="text-gray-600">Des agents rigoureux et professionnels, formés aux meilleures pratiques du secteur</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useSeoMeta } from '@unhead/vue'
import { 
  UserGroupIcon,
  ArrowPathIcon,
  DocumentCheckIcon,
  AcademicCapIcon,
  ClockIcon,
  ShieldCheckIcon
} from '@heroicons/vue/24/solid'

// Définition des métadonnées SEO
useSeoMeta({
  title: 'Demande de Devis - Agent de Sécurité',
  description: 'Obtenez un devis personnalisé pour nos services d\'agents de sécurité qualifiés'
})

const isSubmitting = ref(false)
const submitStatus = ref({
  success: null,
  message: ''
})

const form = ref({
  fullName: '',
  company: '',
  email: '',
  phone: '',
  siteType: '',
  agentCount: 1,
  serviceType: '',
  skills: [],
  additionalInfo: ''
})

const submitDevisRequest = async () => {
  isSubmitting.value = true
  
  try {
    // Envoi du formulaire via l'API
    const response = await fetch('/api/devis-agent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form.value),
    })

    const result = await response.json()
    
    if (result.success) {
      // Réinitialisation du formulaire
      form.value = {
        fullName: '',
        company: '',
        email: '',
        phone: '',
        siteType: '',
        agentCount: 1,
        serviceType: '',
        skills: [],
        additionalInfo: ''
      }
      
      submitStatus.value = {
        success: true,
        message: 'Votre demande de devis a été envoyée avec succès ! Un email de confirmation vous a été envoyé.'
      }
      
      // Redirection vers la page de confirmation
      navigateTo('/devis-agent-confirmation')
      
    } else {
      submitStatus.value = {
        success: false,
        message: result.message || 'Une erreur est survenue. Veuillez réessayer.'
      }
    }
  } catch (error) {
    console.error('Erreur lors de l\'envoi du formulaire:', error)
    submitStatus.value = {
      success: false,
      message: 'Une erreur est survenue. Veuillez réessayer.'
    }
  } finally {
    isSubmitting.value = false
  }
}

// Computed pour vérifier si le formulaire est valide
const isFormValid = computed(() => {
  return form.value.fullName.trim() !== '' &&
         form.value.email.trim() !== '' &&
         form.value.phone.trim() !== '' &&
         form.value.siteType !== '' &&
         form.value.agentCount > 0 &&
         form.value.serviceType !== '';
});

// Fonction pour envoyer un message WhatsApp
const sendWhatsAppMessage = () => {
  // Vérifier si le formulaire est valide
  if (!isFormValid.value) {
    return;
  }

  // Formatage du message
  const message = `Bonjour, je souhaite un devis pour des agents de sécurité avec les détails suivants :\n\n` +
    `*Informations de contact :*\n` +
    `Nom : ${form.value.fullName}\n` +
    `Email : ${form.value.email}\n` +
    `Téléphone : ${form.value.phone}\n` +
    (form.value.company ? `Entreprise : ${form.value.company}\n` : '') +
    `\n*Besoins en sécurité :*\n` +
    `Type de site : ${form.value.siteType}\n` +
    `Nombre d'agents : ${form.value.agentCount}\n` +
    `Type de service : ${form.value.serviceType}\n` +
    (form.value.skills.length > 0 ? `\nCompétences requises : ${form.value.skills.join(', ')}\n` : '') +
    (form.value.additionalInfo ? `\nInformations complémentaires : ${form.value.additionalInfo}` : '');

  // Numéro WhatsApp de l'entreprise
  const phoneNumber = '+221765984214';

  // Création du lien WhatsApp avec le message encodé
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  // Ouvrir WhatsApp dans un nouvel onglet
  window.open(whatsappLink, '_blank');
};
</script> 