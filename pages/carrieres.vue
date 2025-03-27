<template>
  <div>
    <SEO 
      title="Carrières"
      description="Rejoignez l'équipe PROSEN et développez votre carrière dans la sécurité professionnelle. Découvrez nos offres d'emploi et postulez dès maintenant."
    />
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
              Carrières
            </span>
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              Rejoignez notre équipe
            </h1>
            <p class="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Développez votre carrière au sein d'une entreprise leader dans le secteur de la sécurité
            </p>
          </div>
        </div>
      </section>

      <!-- Pourquoi nous rejoindre -->
      <section class="relative -mt-20 z-10 pb-16">
        <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :enter="{ opacity: 1, y: 0 }"
            class="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border border-gray-100/50 backdrop-blur-sm"
          >
            <div class="flex items-center space-x-4 mb-6">
              <div class="p-3 bg-[#23c55e]/10 rounded-xl">
                <StarIcon class="w-8 h-8 text-[#23c55e]" />
              </div>
              <div>
                <h2 class="text-2xl font-bold text-[#111829]">Pourquoi nous rejoindre ?</h2>
                <p class="text-gray-500 mt-1">Les avantages de travailler chez PROSEN</p>
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div class="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div class="w-12 h-12 bg-[#23c55e]/10 rounded-xl flex items-center justify-center mb-4">
                  <AcademicCapIcon class="w-6 h-6 text-[#23c55e]" />
                </div>
                <h3 class="text-lg font-semibold text-[#111829] mb-2">Formation continue</h3>
                <p class="text-gray-600">Nous investissons dans le développement professionnel de nos employés avec des formations régulières.</p>
              </div>

              <div class="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div class="w-12 h-12 bg-[#23c55e]/10 rounded-xl flex items-center justify-center mb-4">
                  <ChartBarIcon class="w-6 h-6 text-[#23c55e]" />
                </div>
                <h3 class="text-lg font-semibold text-[#111829] mb-2">Évolution de carrière</h3>
                <p class="text-gray-600">Des opportunités d'avancement et de progression au sein de notre entreprise en pleine croissance.</p>
              </div>

              <div class="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div class="w-12 h-12 bg-[#23c55e]/10 rounded-xl flex items-center justify-center mb-4">
                  <UserGroupIcon class="w-6 h-6 text-[#23c55e]" />
                </div>
                <h3 class="text-lg font-semibold text-[#111829] mb-2">Équipe solidaire</h3>
                <p class="text-gray-600">Rejoignez une équipe soudée où l'entraide et le respect sont des valeurs fondamentales.</p>
              </div>

              <div class="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div class="w-12 h-12 bg-[#23c55e]/10 rounded-xl flex items-center justify-center mb-4">
                  <BriefcaseIcon class="w-6 h-6 text-[#23c55e]" />
                </div>
                <h3 class="text-lg font-semibold text-[#111829] mb-2">Stabilité professionnelle</h3>
                <p class="text-gray-600">Une entreprise établie offrant des emplois stables et des contrats à long terme.</p>
              </div>

              <div class="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div class="w-12 h-12 bg-[#23c55e]/10 rounded-xl flex items-center justify-center mb-4">
                  <ShieldCheckIcon class="w-6 h-6 text-[#23c55e]" />
                </div>
                <h3 class="text-lg font-semibold text-[#111829] mb-2">Équipements modernes</h3>
                <p class="text-gray-600">Accès aux technologies et équipements de pointe pour exercer votre métier dans les meilleures conditions.</p>
              </div>

              <div class="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div class="w-12 h-12 bg-[#23c55e]/10 rounded-xl flex items-center justify-center mb-4">
                  <CurrencyDollarIcon class="w-6 h-6 text-[#23c55e]" />
                </div>
                <h3 class="text-lg font-semibold text-[#111829] mb-2">Rémunération compétitive</h3>
                <p class="text-gray-600">Des salaires attractifs et des avantages sociaux adaptés à votre poste et à votre expérience.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Postes recherchés -->
      <section class="py-16">
        <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :enter="{ opacity: 1, y: 0 }"
            class="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border border-gray-100/50 backdrop-blur-sm"
          >
            <div class="flex items-center space-x-4 mb-6">
              <div class="p-3 bg-[#23c55e]/10 rounded-xl">
                <BriefcaseIcon class="w-8 h-8 text-[#23c55e]" />
              </div>
              <div>
                <h2 class="text-2xl font-bold text-[#111829]">Nos postes fréquemment recherchés</h2>
                <p class="text-gray-500 mt-1">Découvrez les opportunités d'emploi chez PROSEN</p>
              </div>
            </div>

            <div class="space-y-6 mt-8">
              <div class="border border-gray-200 rounded-xl overflow-hidden">
                <div class="bg-gray-50 px-6 py-4 border-b border-gray-200">
                  <h3 class="text-lg font-semibold text-[#111829]">Agent de sécurité</h3>
                </div>
                <div class="p-6">
                  <p class="text-gray-600 mb-4">Nous recherchons régulièrement des agents de sécurité pour assurer la surveillance et la protection de nos sites clients.</p>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div class="flex items-center">
                      <CheckCircleIcon class="w-5 h-5 text-[#23c55e] mr-2" />
                      <span class="text-gray-700">Formation assurée</span>
                    </div>
                    <div class="flex items-center">
                      <CheckCircleIcon class="w-5 h-5 text-[#23c55e] mr-2" />
                      <span class="text-gray-700">Horaires flexibles</span>
                    </div>
                    <div class="flex items-center">
                      <CheckCircleIcon class="w-5 h-5 text-[#23c55e] mr-2" />
                      <span class="text-gray-700">Possibilité d'évolution</span>
                    </div>
                    <div class="flex items-center">
                      <CheckCircleIcon class="w-5 h-5 text-[#23c55e] mr-2" />
                      <span class="text-gray-700">Sites variés</span>
                    </div>
                  </div>
                  <div class="flex justify-end">
                    <a href="#candidature" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-[#23c55e] hover:bg-[#1ea550] transition-colors">
                      Postuler maintenant
                      <ArrowRightIcon class="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </div>
              </div>

              <div class="border border-gray-200 rounded-xl overflow-hidden">
                <div class="bg-gray-50 px-6 py-4 border-b border-gray-200">
                  <h3 class="text-lg font-semibold text-[#111829]">Technicien de surface</h3>
                </div>
                <div class="p-6">
                  <p class="text-gray-600 mb-4">Nous recrutons des techniciens de surface pour assurer le nettoyage et l'entretien des locaux de nos clients.</p>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div class="flex items-center">
                      <CheckCircleIcon class="w-5 h-5 text-[#23c55e] mr-2" />
                      <span class="text-gray-700">Matériel professionnel fourni</span>
                    </div>
                    <div class="flex items-center">
                      <CheckCircleIcon class="w-5 h-5 text-[#23c55e] mr-2" />
                      <span class="text-gray-700">Formation aux techniques</span>
                    </div>
                    <div class="flex items-center">
                      <CheckCircleIcon class="w-5 h-5 text-[#23c55e] mr-2" />
                      <span class="text-gray-700">Contrats stables</span>
                    </div>
                    <div class="flex items-center">
                      <CheckCircleIcon class="w-5 h-5 text-[#23c55e] mr-2" />
                      <span class="text-gray-700">Environnements variés</span>
                    </div>
                  </div>
                  <div class="flex justify-end">
                    <a href="#candidature" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-[#23c55e] hover:bg-[#1ea550] transition-colors">
                      Postuler maintenant
                      <ArrowRightIcon class="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </div>
              </div>

              <div class="border border-gray-200 rounded-xl overflow-hidden">
                <div class="bg-gray-50 px-6 py-4 border-b border-gray-200">
                  <h3 class="text-lg font-semibold text-[#111829]">Superviseur</h3>
                </div>
                <div class="p-6">
                  <p class="text-gray-600 mb-4">Nous cherchons des superviseurs expérimentés pour coordonner nos équipes sur le terrain et assurer la qualité de nos services.</p>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div class="flex items-center">
                      <CheckCircleIcon class="w-5 h-5 text-[#23c55e] mr-2" />
                      <span class="text-gray-700">Responsabilités importantes</span>
                    </div>
                    <div class="flex items-center">
                      <CheckCircleIcon class="w-5 h-5 text-[#23c55e] mr-2" />
                      <span class="text-gray-700">Rémunération attractive</span>
                    </div>
                    <div class="flex items-center">
                      <CheckCircleIcon class="w-5 h-5 text-[#23c55e] mr-2" />
                      <span class="text-gray-700">Formation en management</span>
                    </div>
                    <div class="flex items-center">
                      <CheckCircleIcon class="w-5 h-5 text-[#23c55e] mr-2" />
                      <span class="text-gray-700">Évolution vers des postes de direction</span>
                    </div>
                  </div>
                  <div class="flex justify-end">
                    <a href="#candidature" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-[#23c55e] hover:bg-[#1ea550] transition-colors">
                      Postuler maintenant
                      <ArrowRightIcon class="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Formulaire de candidature -->
      <section id="candidature" class="py-16 bg-gray-50">
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
            
            <div class="flex items-center space-x-4 mb-6">
              <div class="p-3 bg-[#23c55e]/10 rounded-xl">
                <DocumentTextIcon class="w-8 h-8 text-[#23c55e]" />
              </div>
              <div>
                <h2 class="text-2xl font-bold text-[#111829]">Candidature spontanée</h2>
                <p class="text-gray-500 mt-1">Envoyez-nous votre CV et rejoignez notre équipe</p>
              </div>
            </div>

            <form @submit.prevent="handleSubmit" class="space-y-6 mt-8">
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

                <div>
                  <label for="position" class="block text-sm font-medium text-gray-700 mb-2">Poste recherché</label>
                  <select id="position" v-model="form.position"
                    class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#23c55e] focus:ring-[#23c55e] transition-colors"
                    required
                  >
                    <option value="">Sélectionnez un poste</option>
                    <option v-for="position in positions" :key="position.value" :value="position.value">
                      {{ position.label }}
                    </option>
                  </select>
                </div>

                <div>
                  <label for="experience" class="block text-sm font-medium text-gray-700 mb-2">Années d'expérience</label>
                  <select id="experience" v-model="form.experience"
                    class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#23c55e] focus:ring-[#23c55e] transition-colors"
                    required
                  >
                    <option value="">Sélectionnez votre expérience</option>
                    <option value="debutant">Débutant</option>
                    <option value="1-2">1-2 ans</option>
                    <option value="3-5">3-5 ans</option>
                    <option value="5+">Plus de 5 ans</option>
                  </select>
                </div>

                <div class="md:col-span-2">
                  <label for="message" class="block text-sm font-medium text-gray-700 mb-2">Message / Lettre de motivation</label>
                  <textarea id="message" v-model="form.message" rows="4"
                    class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#23c55e] focus:ring-[#23c55e] transition-colors"
                    required
                  ></textarea>
                </div>

                <div class="md:col-span-2">
                  <label for="cv" class="block text-sm font-medium text-gray-700 mb-2">CV (PDF, Word, max 5MB)</label>
                  <div class="flex items-center space-x-4">
                    <label class="flex-1 flex items-center justify-center px-4 py-3 border border-gray-300 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors">
                      <input type="file" id="cv" ref="fileInput" @change="handleFileChange" accept=".pdf,.doc,.docx" class="sr-only" required />
                      <PaperClipIcon class="w-5 h-5 text-gray-500 mr-2" />
                      <span class="text-gray-500">{{ fileLabel }}</span>
                    </label>
                  </div>
                </div>
              </div>

              <div class="flex justify-end pt-6">
                <button
                  type="submit"
                  class="group inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-xl text-white bg-gradient-to-r from-[#23c55e] to-[#1ea550] hover:from-[#1ea550] hover:to-[#23c55e] transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#23c55e] shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  :disabled="isSubmitting"
                >
                  <span class="mr-2">{{ isSubmitting ? 'Envoi en cours...' : 'Envoyer ma candidature' }}</span>
                  <ArrowRightIcon v-if="!isSubmitting" class="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                  <SpinnerIcon v-else class="w-5 h-5 animate-spin" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  StarIcon,
  AcademicCapIcon,
  ChartBarIcon,
  UserGroupIcon,
  BriefcaseIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  CheckCircleIcon,
  DocumentTextIcon,
  ArrowRightIcon,
  PaperClipIcon
} from '@heroicons/vue/24/solid'
import { useNuxtApp } from '#app'
import SpinnerIcon from '~/components/SpinnerIcon.vue'

const { $analytics } = useNuxtApp()

const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  position: '',
  experience: '',
  message: '',
  cv: null
});

const fileInput = ref(null);
const fileLabel = ref('Choisir un fichier');
const isSubmitting = ref(false);
const submitStatus = ref({
  success: null,
  message: ''
});

const positions = [
  { value: 'agent', label: 'Agent de sécurité' },
  { value: 'technicien', label: 'Technicien de surface' },
  { value: 'superviseur', label: 'Superviseur' },
  { value: 'administratif', label: 'Poste administratif' },
  { value: 'technique', label: 'Technicien sécurité électronique' },
  { value: 'autre', label: 'Autre poste' }
];

const handleFileChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    form.value.cv = file;
    fileLabel.value = file.name;
    
    // Vérification de la taille du fichier (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert('Le fichier est trop volumineux. Veuillez choisir un fichier de moins de 5MB.');
      form.value.cv = null;
      fileLabel.value = 'Choisir un fichier';
      fileInput.value.value = '';
    }
  } else {
    form.value.cv = null;
    fileLabel.value = 'Choisir un fichier';
  }
};

const handleSubmit = async () => {
  isSubmitting.value = true;
  submitStatus.value = { success: null, message: '' };
  
  try {
    // Création d'un FormData pour envoyer le fichier
    const formData = new FormData();
    formData.append('firstName', form.value.firstName);
    formData.append('lastName', form.value.lastName);
    formData.append('email', form.value.email);
    formData.append('phone', form.value.phone);
    formData.append('position', form.value.position);
    formData.append('experience', form.value.experience);
    formData.append('message', form.value.message);
    
    if (form.value.cv) {
      formData.append('cv', form.value.cv);
    }
    
    // Envoi du formulaire via l'API
    const response = await fetch('/api/carrieres', {
      method: 'POST',
      body: formData,
    });

    const result = await response.json();
    
    if (result.success) {
      // Réinitialisation du formulaire
      form.value = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        position: '',
        experience: '',
        message: '',
        cv: null
      };
      fileLabel.value = 'Choisir un fichier';
      if (fileInput.value) {
        fileInput.value.value = '';
      }
      
      submitStatus.value = {
        success: true,
        message: 'Votre candidature a été envoyée avec succès ! Nous l\'examinerons et vous contacterons dans les plus brefs délais.'
      };
      
      // Faire défiler vers le haut pour voir la notification
      window.scrollTo({ top: document.getElementById('candidature').offsetTop - 100, behavior: 'smooth' });
      
      // Suivre l'événement de soumission réussie
      if ($analytics) {
        $analytics.trackEvent('Formulaire', 'Soumission', 'Candidature', 1);
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