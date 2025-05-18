<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section class="relative py-32 bg-gradient-to-br from-[#111829] to-[#1a2436] overflow-hidden">
      <div class="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10"></div>
      <div class="absolute inset-0 bg-gradient-to-t from-[#111829] to-transparent"></div>
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div 
          class="text-center"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ 
            opacity: 1, 
            y: 0,
            transition: {
              duration: 800,
              ease: 'easeOut'
            }
          }"
        >
          <span class="inline-flex items-center px-4 py-1.5 bg-[#23c55e]/10 text-[#23c55e] rounded-full text-sm font-semibold mb-6 backdrop-blur-sm border border-[#23c55e]/20">
            <span class="w-2 h-2 rounded-full bg-[#23c55e] mr-2"></span>
            Devis
          </span>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Demande de Devis
          </h1>
          <p class="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Recevez une offre personnalisée adaptée à vos besoins de sécurité
          </p>
        </div>
      </div>
    </section>

    <!-- Formulaire Section -->
    <section class="relative -mt-20 z-10 pb-24">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :enter="{ opacity: 1, y: 0 }"
          class="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border border-gray-100/50 backdrop-blur-sm"
        >
          <!-- Affichage du message de statut -->
          <div v-if="submitStatus.message" 
               :class="[
                 'p-4 rounded-xl mb-6', 
                 submitStatus.success ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'
               ]">
            {{ submitStatus.message }}
          </div>
          
          <form @submit.prevent="handleSubmit" class="space-y-8">
            <!-- Informations personnelles -->
            <div class="space-y-6">
              <div class="flex items-center space-x-4 mb-6">
                <div class="p-3 bg-[#23c55e]/10 rounded-xl">
                  <UserIcon class="w-8 h-8 text-[#23c55e]" />
                </div>
                <div>
                  <h2 class="text-2xl font-bold text-[#111829]">Informations personnelles</h2>
                  <p class="text-gray-500 mt-1">Vos coordonnées de contact</p>
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label for="firstName" class="block text-sm font-medium text-gray-700 mb-2">Prénom</label>
                  <input type="text" id="firstName" v-model="form.firstName"
                    class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#23c55e] focus:ring-[#23c55e] transition-colors"
                    required
                  />
                </div>

                <div>
                  <label for="lastName" class="block text-sm font-medium text-gray-700 mb-2">Nom</label>
                  <input type="text" id="lastName" v-model="form.lastName"
                    class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#23c55e] focus:ring-[#23c55e] transition-colors"
                    required
                  />
                </div>

                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input type="email" id="email" v-model="form.email"
                    class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#23c55e] focus:ring-[#23c55e] transition-colors"
                    required
                  />
                </div>

                <div>
                  <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">Téléphone</label>
                  <input type="tel" id="phone" v-model="form.phone"
                    class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#23c55e] focus:ring-[#23c55e] transition-colors"
                    required
                  />
                </div>

                <div class="md:col-span-2">
                  <label for="company" class="block text-sm font-medium text-gray-700 mb-2">Entreprise (optionnel)</label>
                  <input type="text" id="company" v-model="form.company"
                    class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#23c55e] focus:ring-[#23c55e] transition-colors"
                  />
                </div>
              </div>
            </div>

            <!-- Détails du service -->
            <div class="space-y-6">
              <div class="flex items-center space-x-4 mb-6">
                <div class="p-3 bg-[#23c55e]/10 rounded-xl">
                  <ShieldCheckIcon class="w-8 h-8 text-[#23c55e]" />
                </div>
                <div>
                  <h2 class="text-2xl font-bold text-[#111829]">Détails du service</h2>
                  <p class="text-gray-500 mt-1">Informations sur vos besoins</p>
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label for="service" class="block text-sm font-medium text-gray-700 mb-2">Service souhaité</label>
                  <select id="service" v-model="form.service"
                    class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#23c55e] focus:ring-[#23c55e] transition-colors"
                    required
                  >
                    <option value="">Sélectionnez un service</option>
                    <option v-for="service in services" :key="service.value" :value="service.value">
                      {{ service.label }}
                    </option>
                  </select>
                </div>

                <div>
                  <label for="type" class="block text-sm font-medium text-gray-700 mb-2">Type de site</label>
                  <select id="type" v-model="form.siteType"
                    class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#23c55e] focus:ring-[#23c55e] transition-colors"
                    required
                  >
                    <option value="">Sélectionnez le type de site</option>
                    <option v-for="type in siteTypes" :key="type.value" :value="type.value">
                      {{ type.label }}
                    </option>
                  </select>
                </div>

                <div>
                  <label for="surface" class="block text-sm font-medium text-gray-700 mb-2">Surface approximative (m²)</label>
                  <input type="number" id="surface" v-model="form.surface"
                    class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#23c55e] focus:ring-[#23c55e] transition-colors"
                    required
                  />
                </div>

                <div>
                  <label for="schedule" class="block text-sm font-medium text-gray-700 mb-2">Horaires souhaités</label>
                  <select id="schedule" v-model="form.schedule"
                    class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#23c55e] focus:ring-[#23c55e] transition-colors"
                    required
                  >
                    <option value="">Sélectionnez les horaires</option>
                    <option v-for="schedule in schedules" :key="schedule.value" :value="schedule.value">
                      {{ schedule.label }}
                    </option>
                  </select>
                </div>

                <div class="md:col-span-2">
                  <label for="details" class="block text-sm font-medium text-gray-700 mb-2">Description détaillée</label>
                  <textarea id="details" v-model="form.details" rows="4"
                    class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#23c55e] focus:ring-[#23c55e] transition-colors"
                    required
                  ></textarea>
                </div>
              </div>
            </div>

            <div class="flex justify-end pt-6 space-x-4">
              <button
                type="submit"
                class="group inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-xl text-white bg-gradient-to-r from-[#23c55e] to-[#1ea550] hover:from-[#1ea550] hover:to-[#23c55e] transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#23c55e] shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                :disabled="isSubmitting"
              >
                <span class="mr-2">{{ isSubmitting ? 'Envoi en cours...' : 'Demander un devis' }}</span>
                <ArrowRightIcon v-if="!isSubmitting" class="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                <SpinnerIcon v-else class="w-5 h-5 animate-spin" />
              </button>

              <!-- Bouton WhatsApp -->
              <button 
                type="button"
                @click="sendWhatsAppMessage"
                :disabled="!isFormValid"
                class="group inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-xl text-white bg-[#25D366] hover:bg-[#20BD5C] transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366] shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#25D366]"
              >
                <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span>Continuer sur WhatsApp</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import {
  UserIcon,
  ShieldCheckIcon,
  ArrowRightIcon
} from '@heroicons/vue/24/solid'
import { useNuxtApp } from '#app'

const { $analytics } = useNuxtApp()

const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  company: '',
  service: '',
  siteType: '',
  surface: '',
  schedule: '',
  startDate: '',
  details: ''
});

const isSubmitting = ref(false);
const submitStatus = ref({
  success: null,
  message: ''
});

const services = [
  { value: 'surveillance', label: 'Surveillance & Gardiennage' },
  { value: 'electronique', label: 'Sécurité Électronique' },
  { value: 'protection', label: 'Protection Rapprochée' },
  { value: 'nettoyage', label: 'Nettoyage Professionnel' },
  { value: 'equipements', label: 'Équipements de Protection' },
  { value: 'incendie', label: 'Sécurité Incendie' },
  { value: 'conseil', label: 'Conseil en Sécurité' },
  { value: 'transport', label: 'Transport de Valeurs' }
];

const siteTypes = [
  { value: 'bureau', label: 'Bureaux' },
  { value: 'commerce', label: 'Commerce' },
  { value: 'industrie', label: 'Site industriel' },
  { value: 'residence', label: 'Résidence' },
  { value: 'chantier', label: 'Chantier' },
  { value: 'autre', label: 'Autre' }
];

const schedules = [
  { value: '24-7', label: '24h/24 - 7j/7' },
  { value: 'jour', label: 'Horaires de jour (8h-20h)' },
  { value: 'nuit', label: 'Horaires de nuit (20h-8h)' },
  { value: 'personnalise', label: 'Horaires personnalisés' }
];

const handleSubmit = async () => {
  isSubmitting.value = true;
  submitStatus.value = { success: null, message: '' };
  
  try {
    // Envoi du formulaire via l'API
    const response = await fetch('/api/devis', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form.value),
    });

    const result = await response.json();
    
    if (result.success) {
      // Réinitialisation du formulaire
      form.value = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        siteType: '',
        surface: '',
        schedule: '',
        startDate: '',
        details: ''
      };
      
      submitStatus.value = {
        success: true,
        message: 'Votre demande de devis a été envoyée avec succès ! Nous vous contacterons dans les plus brefs délais.'
      };
      
      // Faire défiler vers le haut pour voir la notification
      window.scrollTo({ top: 0, behavior: 'smooth' });
      
      // Suivre l'événement de soumission réussie
      if ($analytics) {
        $analytics.trackEvent('Formulaire', 'Soumission', 'Devis', 1);
      }
    } else {
      submitStatus.value = {
        success: false,
        message: result.message || 'Une erreur est survenue. Veuillez réessayer.'
      };
    }
  } catch (error) {
    console.error('Erreur lors de l\'envoi du formulaire:', error);
    submitStatus.value = {
      success: false,
      message: 'Une erreur est survenue. Veuillez réessayer.'
    };
  } finally {
    isSubmitting.value = false;
  }
};

// Computed pour vérifier si le formulaire est valide
const isFormValid = computed(() => {
  return form.value.firstName.trim() !== '' &&
         form.value.lastName.trim() !== '' &&
         form.value.email.trim() !== '' &&
         form.value.phone.trim() !== '' &&
         form.value.service !== '' &&
         form.value.siteType !== '' &&
         form.value.surface > 0 &&
         form.value.schedule !== '';
});

// Fonction pour envoyer un message WhatsApp
const sendWhatsAppMessage = () => {
  // Vérifier si le formulaire est valide
  if (!isFormValid.value) {
    return;
  }

  // Formatage du message
  const message = `Bonjour, je souhaite un devis avec les détails suivants :\n\n` +
    `*Informations de contact :*\n` +
    `Nom : ${form.value.firstName} ${form.value.lastName}\n` +
    `Email : ${form.value.email}\n` +
    `Téléphone : ${form.value.phone}\n` +
    (form.value.company ? `Entreprise : ${form.value.company}\n` : '') +
    `\n*Détails du service :*\n` +
    `Service : ${services.find(s => s.value === form.value.service)?.label}\n` +
    `Type de site : ${siteTypes.find(t => t.value === form.value.siteType)?.label}\n` +
    `Surface : ${form.value.surface} m²\n` +
    `Horaires : ${schedules.find(s => s.value === form.value.schedule)?.label}\n` +
    (form.value.details ? `\nDescription détaillée : ${form.value.details}` : '');

  // Numéro WhatsApp de l'entreprise
  const phoneNumber = '+221765984214';

  // Création du lien WhatsApp avec le message encodé
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  // Ouvrir WhatsApp dans un nouvel onglet
  window.open(whatsappLink, '_blank');

  // Suivre l'événement dans Analytics
  if ($analytics) {
    $analytics.trackEvent('Formulaire', 'WhatsApp', 'Devis', 1);
  }
};
</script>

<style>
.backdrop-blur-sm {
  backdrop-filter: blur(8px);
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.animate-spin {
  animation: spin 1s linear infinite;
}
</style>