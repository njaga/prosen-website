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

            <div class="flex justify-end pt-6">
              <button
                type="submit"
                class="group inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-xl text-white bg-gradient-to-r from-[#23c55e] to-[#1ea550] hover:from-[#1ea550] hover:to-[#23c55e] transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#23c55e] shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                :disabled="isSubmitting"
              >
                <span class="mr-2">{{ isSubmitting ? 'Envoi en cours...' : 'Demander un devis' }}</span>
                <ArrowRightIcon v-if="!isSubmitting" class="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                <SpinnerIcon v-else class="w-5 h-5 animate-spin" />
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
  UserIcon,
  ShieldCheckIcon,
  ArrowRightIcon
} from '@heroicons/vue/24/solid'

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
  
  try {
    // Simulation d'envoi du formulaire
    await new Promise(resolve => setTimeout(resolve, 1500));
    
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
    
    alert('Votre demande de devis a été envoyée avec succès ! Nous vous contacterons dans les plus brefs délais.');
  } catch (error) {
    alert('Une erreur est survenue. Veuillez réessayer.');
  } finally {
    isSubmitting.value = false;
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