<template>
  <div>
    <SEO 
      title="Contact"
      description="Contactez PROSEN pour toutes vos questions sur nos services de sécurité. Notre équipe est à votre écoute pour vous accompagner."
    />
    <div class="min-h-screen bg-gray-50">
      <!-- Hero Section améliorée -->
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
              Contact
            </span>
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              Contactez-nous
            </h1>
            <p class="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Notre équipe est à votre disposition <span class="text-[#23c55e] font-semibold">24h/24 et 7j/7</span> pour répondre à vos besoins
            </p>
          </div>
        </div>
      </section>

      <!-- Contact Section améliorée -->
      <section class="relative -mt-20 z-10 pb-24">
        <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <!-- Informations de contact -->
            <div class="lg:col-span-1">
              <div 
                v-motion
                :initial="{ opacity: 0, x: -50 }"
                :enter="{ 
                  opacity: 1, 
                  x: 0,
                  transition: {
                    duration: 800,
                    ease: 'easeOut'
                  }
                }"
                class="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border border-gray-100/50 backdrop-blur-sm"
              >
                <div class="space-y-8">
                  <div>
                    <h2 class="text-2xl font-bold text-[#111829] mb-6">Nos Coordonnées</h2>
                    <p class="text-gray-600">N'hésitez pas à nous contacter pour toute demande</p>
                  </div>

                  <div class="space-y-6">
                    <div class="flex items-center space-x-4">
                      <div class="flex-shrink-0 w-12 h-12 bg-[#23c55e]/10 rounded-xl flex items-center justify-center">
                        <MapPinIcon class="w-6 h-6 text-[#23c55e]" />
                      </div>
                      <div>
                        <h3 class="font-semibold text-gray-900">Adresse</h3>
                        <p class="text-gray-600 mt-1">Immeuble Ellipse, rue 1 X D Pav Usina, Point E, Dakar - Sénégal</p>
                      </div>
                    </div>

                    <div class="flex items-center space-x-4">
                      <div class="flex-shrink-0 w-12 h-12 bg-[#23c55e]/10 rounded-xl flex items-center justify-center">
                        <EnvelopeIcon class="w-6 h-6 text-[#23c55e]" />
                      </div>
                      <div>
                        <h3 class="font-semibold text-gray-900">Email</h3>
                        <a href="mailto:contact@prosen.sn" class="text-[#23c55e] hover:text-[#1ea550] mt-1">
                          contact@prosen.sn
                        </a>
                      </div>
                    </div>

                    <div class="flex items-center space-x-4">
                      <div class="flex-shrink-0 w-12 h-12 bg-[#23c55e]/10 rounded-xl flex items-center justify-center">
                        <PhoneIcon class="w-6 h-6 text-[#23c55e]" />
                      </div>
                      <div>
                        <h3 class="font-semibold text-gray-900">Téléphone</h3>
                        <a href="tel:+221338434633" class="text-[#23c55e] hover:text-[#1ea550] mt-1">
                          +221 33 843 46 33
                        </a>
                      </div>
                    </div>

                    <div class="flex items-center space-x-4">
                      <div class="flex-shrink-0 w-12 h-12 bg-[#23c55e]/10 rounded-xl flex items-center justify-center">
                        <ClockIcon class="w-6 h-6 text-[#23c55e]" />
                      </div>
                      <div>
                        <h3 class="font-semibold text-gray-900">Disponibilité</h3>
                        <p class="text-gray-600 mt-1">24h/24, 7j/7</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Formulaire de contact -->
            <div class="lg:col-span-2">
              <div 
                v-motion
                :initial="{ opacity: 0, x: 50 }"
                :enter="{ 
                  opacity: 1, 
                  x: 0,
                  transition: {
                    duration: 800,
                    ease: 'easeOut'
                  }
                }"
                class="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border border-gray-100/50 backdrop-blur-sm"
              >
                <div class="mb-8">
                  <h2 class="text-2xl font-bold text-[#111829] mb-4">Envoyez-nous un message</h2>
                  <p class="text-gray-600">Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs
                    délais</p>
                </div>

                <form @submit.prevent="handleSubmit" class="space-y-6">
                  <!-- Affichage du message de statut -->
                  <div v-if="submitStatus.message" 
                       :class="[
                         'p-4 rounded-xl mb-4', 
                         submitStatus.success ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'
                       ]">
                    {{ submitStatus.message }}
                  </div>
                  
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label for="name" class="block text-sm font-medium text-gray-700 mb-2">Nom complet</label>
                      <input type="text" id="name" v-model="form.name"
                        class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#23c55e] focus:ring-[#23c55e] transition-colors"
                        required />
                    </div>

                    <div>
                      <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input type="email" id="email" v-model="form.email"
                        class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#23c55e] focus:ring-[#23c55e] transition-colors"
                        required />
                    </div>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">Téléphone</label>
                      <input type="tel" id="phone" v-model="form.phone"
                        class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#23c55e] focus:ring-[#23c55e] transition-colors" />
                    </div>

                    <div>
                      <label for="service" class="block text-sm font-medium text-gray-700 mb-2">Service</label>
                      <select id="service" v-model="form.service"
                        class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#23c55e] focus:ring-[#23c55e] transition-colors">
                        <option value="">Sélectionnez un service</option>
                        <option v-for="service in services" :key="service.value" :value="service.value">
                          {{ service.label }}
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label for="message" class="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea id="message" v-model="form.message" rows="6"
                      class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#23c55e] focus:ring-[#23c55e] transition-colors"
                      required></textarea>
                  </div>

                  <div class="flex justify-end">
                    <button
                      type="submit"
                      class="group inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-xl text-white bg-gradient-to-r from-[#23c55e] to-[#1ea550] hover:from-[#1ea550] hover:to-[#23c55e] transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#23c55e] shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                      :disabled="isSubmitting"
                    >
                      <span class="mr-2">{{ isSubmitting ? 'Envoi en cours...' : 'Envoyer le message' }}</span>
                      <ArrowRightIcon v-if="!isSubmitting" class="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                      <SpinnerIcon v-else class="w-5 h-5 animate-spin" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { navigateTo } from '#app'
import {
  MapPinIcon,
  EnvelopeIcon,
  PhoneIcon,
  ClockIcon,
  ArrowRightIcon
} from '@heroicons/vue/24/solid'

import SpinnerIcon from '~/components/SpinnerIcon.vue'
import { useNuxtApp } from '#app'

const { $analytics } = useNuxtApp()

const form = ref({
  name: '',
  email: '',
  phone: '',
  service: '',
  message: ''
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

const handleSubmit = async () => {
  isSubmitting.value = true;
  submitStatus.value = { success: null, message: '' };

  try {
    // Envoi du formulaire via l'API SendGrid
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form.value),
    });

    const result = await response.json();
    
    if (result.success) {
      // Réinitialisation du formulaire en cas de succès
      form.value = {
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      };
      
      submitStatus.value = {
        success: true,
        message: 'Votre message a été envoyé avec succès !'
      };
      
      // Suivre l'événement de soumission réussie
      if ($analytics) {
        $analytics.trackEvent('Formulaire', 'Soumission', 'Contact', 1);
      }

      // Redirection vers la page de confirmation
      navigateTo('/contact-confirmation');
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
</script>

<style>
.backdrop-blur-sm {
  backdrop-filter: blur(8px);
}

/* Animation du spinner */
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.animate-spin {
  animation: spin 1s linear infinite;
}
</style>