<template>
  <div>
    <SEO 
      :title="emploi ? emploi.titre : 'Offre d\'emploi'"
      :description="emploi ? emploi.resume : 'Consultez cette offre d\'emploi chez PROSEN et rejoignez notre équipe.'"
    />
    
    <!-- Chargement -->
    <div v-if="isLoading" class="min-h-screen flex justify-center items-center py-20">
      <div class="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#23c55e]"></div>
    </div>

    <!-- Erreur -->
    <div v-else-if="loadError || !emploi" class="min-h-screen py-24 bg-gray-50">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16">
        <h1 class="text-3xl font-bold text-gray-800 mb-6">Offre d'emploi non trouvée</h1>
        <p class="text-gray-600 mb-8">
          L'offre d'emploi que vous recherchez n'est pas disponible ou n'existe pas.
        </p>
        <NuxtLink 
          to="/carrieres" 
          class="inline-flex items-center px-6 py-3 bg-[#23c55e] text-white rounded-xl hover:bg-[#1ea550] transition-colors"
        >
          <ArrowLeftIcon class="w-5 h-5 mr-2" />
          Voir toutes nos offres
        </NuxtLink>
      </div>
    </div>

    <!-- Détail de l'offre d'emploi -->
    <div v-else class="bg-gray-50 min-h-screen">
      <!-- Hero Section -->
      <section class="relative py-24 bg-[#111829] overflow-hidden">
        <div class="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10"></div>
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div 
            class="text-center"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0 }"
          >
            <NuxtLink 
              to="/carrieres"
              class="inline-flex items-center px-4 py-1.5 bg-white/10 text-white rounded-full text-sm font-medium backdrop-blur-sm mb-6 hover:bg-white/20 transition-colors"
            >
              <ArrowLeftIcon class="w-4 h-4 mr-2" />
              Retour aux offres
            </NuxtLink>
            <h1 class="text-4xl md:text-5xl font-bold text-white mb-6">{{ emploi.titre }}</h1>
            <p class="text-xl text-gray-300 max-w-3xl mx-auto">
              {{ emploi.resume }}
            </p>
            
            <div class="flex flex-wrap justify-center gap-3 mt-8">
              <span class="inline-flex items-center px-3 py-1 bg-white/10 text-white rounded-lg text-sm backdrop-blur-sm">
                <BriefcaseIcon class="w-4 h-4 mr-2" />
                {{ getTypeContratLabel(emploi.type_contrat) }}
              </span>
              <span class="inline-flex items-center px-3 py-1 bg-white/10 text-white rounded-lg text-sm backdrop-blur-sm">
                <MapPinIcon class="w-4 h-4 mr-2" />
                {{ emploi.lieu }}
              </span>
              <span class="inline-flex items-center px-3 py-1 bg-white/10 text-white rounded-lg text-sm backdrop-blur-sm">
                <ClockIcon class="w-4 h-4 mr-2" />
                {{ getExperienceLabel(emploi.experience) }}
              </span>
              <span class="inline-flex items-center px-3 py-1 bg-white/10 text-white rounded-lg text-sm backdrop-blur-sm">
                <CalendarIcon class="w-4 h-4 mr-2" />
                Publié le {{ formatDate(emploi.date) }}
              </span>
              <span v-if="emploi.salaire" class="inline-flex items-center px-3 py-1 bg-white/10 text-white rounded-lg text-sm backdrop-blur-sm">
                <CurrencyDollarIcon class="w-4 h-4 mr-2" />
                {{ formatSalaire(emploi.salaire) }} FCFA/mois
              </span>
            </div>
          </div>
        </div>
      </section>

      <!-- Contenu de l'offre -->
      <section class="py-16">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Détails de l'offre -->
            <div class="md:col-span-2">
              <div 
                class="bg-white rounded-2xl shadow-lg p-8 mb-8"
                v-motion
                :initial="{ opacity: 0, y: 20 }"
                :enter="{ opacity: 1, y: 0, delay: 300 }"
              >
                <h2 class="text-2xl font-bold text-[#111829] mb-6 pb-4 border-b border-gray-100">
                  Description du poste
                </h2>
                <div 
                  class="prose prose-lg max-w-none prose-headings:text-[#111829] prose-p:text-gray-700 prose-a:text-[#23c55e] prose-a:no-underline hover:prose-a:text-[#1ea550] prose-a:transition-colors article"
                  v-html="emploi.description"
                ></div>
              </div>

              <!-- Avantages -->
              <div v-if="emploi.avantages && emploi.avantages.length > 0"
                class="bg-white rounded-2xl shadow-lg p-8 mb-8"
                v-motion
                :initial="{ opacity: 0, y: 20 }"
                :enter="{ opacity: 1, y: 0, delay: 350 }"
              >
                <h2 class="text-2xl font-bold text-[#111829] mb-6">
                  Avantages
                </h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div 
                    v-for="(avantage, index) in formattedAvantages" 
                    :key="index"
                    class="flex items-center"
                  >
                    <CheckCircleIcon class="w-5 h-5 text-[#23c55e] mr-2 flex-shrink-0" />
                    <span class="text-gray-700">{{ avantage }}</span>
                  </div>
                </div>
              </div>

              <!-- Compétences -->
              <div v-if="emploi.competences && emploi.competences.length > 0"
                class="bg-white rounded-2xl shadow-lg p-8 mb-8"
                v-motion
                :initial="{ opacity: 0, y: 20 }"
                :enter="{ opacity: 1, y: 0, delay: 400 }"
              >
                <h2 class="text-2xl font-bold text-[#111829] mb-6">
                  Compétences requises
                </h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div 
                    v-for="(competence, index) in formattedCompetences" 
                    :key="index"
                    class="flex items-center"
                  >
                    <AcademicCapIcon class="w-5 h-5 text-[#23c55e] mr-2 flex-shrink-0" />
                    <span class="text-gray-700">{{ competence }}</span>
                  </div>
                </div>
              </div>

              <div 
                class="bg-white rounded-2xl shadow-lg p-8"
                v-motion
                :initial="{ opacity: 0, y: 20 }"
                :enter="{ opacity: 1, y: 0, delay: 400 }"
              >
                <h2 class="text-2xl font-bold text-[#111829] mb-6">
                  Postuler à cette offre
                </h2>
                
                <!-- Affichage du message de statut -->
                <div v-if="submitStatus.message" 
                    :class="[
                      'p-4 rounded-xl mb-6', 
                      submitStatus.success ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'
                    ]">
                  {{ submitStatus.message }}
                </div>
                
                <form @submit.prevent="handleSubmit" class="space-y-6">
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
                      <span class="mr-2">{{ isSubmitting ? 'Envoi en cours...' : 'Postuler à cette offre' }}</span>
                      <ArrowRightIcon v-if="!isSubmitting" class="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                      <SpinnerIcon v-else class="w-5 h-5 animate-spin" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
            
            <!-- Informations complémentaires -->
            <div>
              <div 
                class="bg-white rounded-2xl shadow-lg p-6 mb-6"
                v-motion
                :initial="{ opacity: 0, y: 20 }"
                :enter="{ opacity: 1, y: 0, delay: 200 }"
              >
                <h3 class="text-lg font-semibold text-[#111829] mb-4 pb-2 border-b border-gray-100">
                  Informations sur le poste
                </h3>
                <ul class="space-y-3">
                  <li class="flex">
                    <BriefcaseIcon class="w-5 h-5 text-[#23c55e] mr-3 flex-shrink-0" />
                    <div>
                      <span class="text-sm text-gray-500">Type de contrat</span>
                      <p class="text-gray-800 font-medium">{{ getTypeContratLabel(emploi.type_contrat) }}</p>
                    </div>
                  </li>
                  <li class="flex">
                    <MapPinIcon class="w-5 h-5 text-[#23c55e] mr-3 flex-shrink-0" />
                    <div>
                      <span class="text-sm text-gray-500">Localisation</span>
                      <p class="text-gray-800 font-medium">{{ emploi.lieu }}</p>
                    </div>
                  </li>
                  <li class="flex">
                    <UserIcon class="w-5 h-5 text-[#23c55e] mr-3 flex-shrink-0" />
                    <div>
                      <span class="text-sm text-gray-500">Catégorie</span>
                      <p class="text-gray-800 font-medium">{{ emploi.categorie_label || getCategorieLabel(emploi.categorie) }}</p>
                    </div>
                  </li>
                  <li class="flex">
                    <ClockIcon class="w-5 h-5 text-[#23c55e] mr-3 flex-shrink-0" />
                    <div>
                      <span class="text-sm text-gray-500">Expérience requise</span>
                      <p class="text-gray-800 font-medium">{{ getExperienceLabel(emploi.experience) }}</p>
                    </div>
                  </li>
                  <li v-if="emploi.salaire" class="flex">
                    <CurrencyDollarIcon class="w-5 h-5 text-[#23c55e] mr-3 flex-shrink-0" />
                    <div>
                      <span class="text-sm text-gray-500">Rémunération</span>
                      <p class="text-gray-800 font-medium">{{ formatSalaire(emploi.salaire) }}</p>
                    </div>
                  </li>
                  <li v-if="emploi.date_limite" class="flex">
                    <CalendarIcon class="w-5 h-5 text-[#23c55e] mr-3 flex-shrink-0" />
                    <div>
                      <span class="text-sm text-gray-500">Date limite</span>
                      <p class="text-gray-800 font-medium">{{ formatDate(emploi.date_limite) }}</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div 
                v-if="hasAvantages"
                class="bg-white rounded-2xl shadow-lg p-6 mb-6"
                v-motion
                :initial="{ opacity: 0, y: 20 }"
                :enter="{ opacity: 1, y: 0, delay: 250 }"
              >
                <h3 class="text-lg font-semibold text-[#111829] mb-4 pb-2 border-b border-gray-100">
                  Avantages
                </h3>
                <ul class="space-y-2">
                  <li 
                    v-for="(avantage, index) in formattedAvantages" 
                    :key="index"
                    class="flex items-start"
                  >
                    <CheckCircleIcon class="w-5 h-5 text-[#23c55e] mr-2 mt-0.5" />
                    <span class="text-gray-700">{{ avantage }}</span>
                  </li>
                </ul>
              </div>
              
              <div 
                v-if="hasCompetences"
                class="bg-white rounded-2xl shadow-lg p-6"
                v-motion
                :initial="{ opacity: 0, y: 20 }"
                :enter="{ opacity: 1, y: 0, delay: 300 }"
              >
                <h3 class="text-lg font-semibold text-[#111829] mb-4 pb-2 border-b border-gray-100">
                  Compétences requises
                </h3>
                <ul class="space-y-2">
                  <li 
                    v-for="(competence, index) in formattedCompetences" 
                    :key="index"
                    class="flex items-start"
                  >
                    <AcademicCapIcon class="w-5 h-5 text-[#23c55e] mr-2 mt-0.5" />
                    <span class="text-gray-700">{{ competence }}</span>
                  </li>
                </ul>
              </div>
              
              <div class="mt-6">
                <NuxtLink
                  to="/carrieres"
                  class="inline-flex items-center w-full justify-center px-4 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors"
                >
                  <ArrowLeftIcon class="w-5 h-5 mr-2" />
                  Voir toutes nos offres
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { 
  ArrowLeftIcon, 
  ArrowRightIcon, 
  BriefcaseIcon, 
  MapPinIcon, 
  ClockIcon, 
  CalendarIcon,
  CheckCircleIcon,
  UserIcon,
  CurrencyDollarIcon,
  AcademicCapIcon,
  PaperClipIcon
} from '@heroicons/vue/24/solid'
import SpinnerIcon from '~/components/SpinnerIcon.vue'

const route = useRoute()
const router = useRouter()
const emploi = ref(null)
const isLoading = ref(true)
const loadError = ref(false)

// Formulaire de candidature
const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  message: '',
  cv: null
});

const fileInput = ref(null);
const fileLabel = ref('Sélectionner un fichier');
const isSubmitting = ref(false);
const submitStatus = ref({
  success: null,
  message: ''
});

// Computed properties pour les avantages et compétences
const hasAvantages = computed(() => {
  return formattedAvantages.value.length > 0;
});

const hasCompetences = computed(() => {
  return formattedCompetences.value.length > 0;
});

const formattedAvantages = computed(() => {
  if (!emploi.value?.avantages) return [];
  return emploi.value.avantages.map(a => typeof a === 'object' ? a.Avantage : a);
});

const formattedCompetences = computed(() => {
  if (!emploi.value?.competences) return [];
  return emploi.value.competences.map(c => typeof c === 'object' ? c.Competence : c);
});

// Formatage des dates
const formatDate = (dateString) => {
  if (!dateString) return '';
  
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return dateString;
  
  return date.toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

// Fonctions utilitaires pour les labels
const getTypeContratLabel = (value) => {
  const types = {
    'cdi': 'CDI',
    'cdd': 'CDD',
    'stage': 'Stage',
    'alternance': 'Alternance',
    'freelance': 'Freelance'
  };
  return types[value] || value;
};

const getExperienceLabel = (value) => {
  const experiences = {
    'debutant': 'Débutant accepté',
    '1-2': '1-2 ans',
    '3-5': '3-5 ans',
    '5+': 'Plus de 5 ans'
  };
  return experiences[value] || value;
};

const getCategorieLabel = (value) => {
  const categories = {
    'agent': 'Agent de sécurité',
    'technicien': 'Technicien de surface',
    'superviseur': 'Superviseur',
    'administratif': 'Administratif',
    'technique': 'Technique',
    'autre': 'Autre'
  };
  return categories[value] || value;
};

// Gestion du fichier CV
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

// Soumission du formulaire
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
    formData.append('position', emploi.value.categorie || '');
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
      window.scrollTo({ top: 0, behavior: 'smooth' });
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

// Récupérer les détails de l'offre d'emploi
onMounted(async () => {
  try {
    isLoading.value = true;
    loadError.value = null;
    
    const slug = route.params.slug;
    if (!slug) {
      loadError.value = 'Identifiant de l\'offre non spécifié';
      return;
    }
    
    // Charger le fichier JSON directement
    const response = await $fetch('/images/emplois 20250407-01722.json');
    
    if (Array.isArray(response)) {
      const offre = response.find(e => e.slug === slug);
      if (offre) {
        console.log('Offre d\'emploi trouvée:', offre.titre);
        emploi.value = offre;
        
        // Mise à jour du titre de la page
        if (emploi.value.titre) {
          document.title = `${emploi.value.titre} - Carrières PROSEN`;
        }
      } else {
        console.error('Offre non trouvée pour le slug:', slug);
        loadError.value = 'Offre d\'emploi non trouvée';
      }
    } else {
      console.error('Format de données invalide');
      loadError.value = 'Erreur lors du chargement des données';
    }
  } catch (error) {
    console.error('Erreur lors du chargement de l\'offre:', error);
    loadError.value = 'Erreur de connexion au serveur';
  } finally {
    isLoading.value = false;
  }
});

// Amélioration du formatage du salaire
const formatSalaire = (salaire) => {
  if (!salaire) return 'Non spécifié';
  return new Intl.NumberFormat('fr-FR').format(salaire);
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