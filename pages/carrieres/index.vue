<template>
  <!-- Bannière principale -->
  <section class="relative bg-gradient-to-br from-[#111829] to-[#1f2937] py-24">
    <div class="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10"></div>
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div class="text-center">
        <h1 class="text-4xl font-bold text-white mb-4">Rejoignez l'équipe PROSEN</h1>
        <p class="text-xl text-gray-300 max-w-2xl mx-auto">Ensemble, construisons un avenir plus sûr. Découvrez nos opportunités et développez votre carrière dans un environnement innovant et dynamique.</p>
      </div>
    </div>
  </section>

  <!-- Pourquoi nous rejoindre -->
  <section class="py-16 bg-gray-50">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-[#111829] mb-4">Pourquoi nous rejoindre ?</h2>
        <p class="text-gray-600 max-w-2xl mx-auto">Découvrez les avantages de faire partie de l'équipe PROSEN et comment nous investissons dans le développement professionnel de nos collaborateurs.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Formation continue -->
        <div 
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :enter="{ opacity: 1, y: 0, delay: 200 }"
          class="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
        >
          <div class="p-3 bg-blue-100 rounded-lg w-fit mb-4">
            <AcademicCapIcon class="w-6 h-6 text-blue-600" />
          </div>
          <h3 class="text-xl font-semibold text-[#111829] mb-2">Formation continue</h3>
          <p class="text-gray-600">Accédez à des programmes de formation réguliers pour développer vos compétences et rester à la pointe de votre domaine.</p>
        </div>

        <!-- Évolution de carrière -->
        <div 
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :enter="{ opacity: 1, y: 0, delay: 400 }"
          class="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
        >
          <div class="p-3 bg-green-100 rounded-lg w-fit mb-4">
            <ChartBarIcon class="w-6 h-6 text-green-600" />
          </div>
          <h3 class="text-xl font-semibold text-[#111829] mb-2">Évolution de carrière</h3>
          <p class="text-gray-600">Bénéficiez d'opportunités d'évolution interne et d'un accompagnement personnalisé dans votre développement professionnel.</p>
        </div>

        <!-- Équipe soudée -->
        <div 
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :enter="{ opacity: 1, y: 0, delay: 600 }"
          class="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
        >
          <div class="p-3 bg-purple-100 rounded-lg w-fit mb-4">
            <UserGroupIcon class="w-6 h-6 text-purple-600" />
          </div>
          <h3 class="text-xl font-semibold text-[#111829] mb-2">Équipe soudée</h3>
          <p class="text-gray-600">Rejoignez une équipe dynamique et bienveillante, où l'entraide et le partage d'expérience sont des valeurs essentielles.</p>
        </div>
      </div>

      <!-- Avantages sociaux -->
      <div class="mt-16">
        <h3 class="text-2xl font-bold text-[#111829] mb-8 text-center">Nos avantages sociaux</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div 
            v-motion
            :initial="{ opacity: 0, x: -50 }"
            :enter="{ opacity: 1, x: 0 }"
            class="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm"
          >
            <div class="p-2 bg-[#23c55e]/10 rounded-lg">
              <CurrencyDollarIcon class="w-6 h-6 text-[#23c55e]" />
            </div>
            <div>
              <h4 class="font-semibold text-[#111829]">Rémunération attractive</h4>
              <p class="text-gray-600 text-sm mt-1">Salaire compétitif avec primes et avantages selon performance</p>
            </div>
          </div>

          <div 
            v-motion
            :initial="{ opacity: 0, x: 50 }"
            :enter="{ opacity: 1, x: 0 }"
            class="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm"
          >
            <div class="p-2 bg-[#23c55e]/10 rounded-lg">
              <ShieldCheckIcon class="w-6 h-6 text-[#23c55e]" />
            </div>
            <div>
              <h4 class="font-semibold text-[#111829]">Protection sociale</h4>
              <p class="text-gray-600 text-sm mt-1">Mutuelle d'entreprise et prévoyance avantageuses</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Postes recherchés -->
  <section class="py-16 bg-white">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <div class="flex items-center justify-center space-x-4 mb-4">
          <div class="p-3 bg-[#23c55e]/10 rounded-xl">
            <BriefcaseIcon class="w-8 h-8 text-[#23c55e]" />
          </div>
          <h2 class="text-3xl font-bold text-[#111829]">Nos offres d'emploi</h2>
        </div>
        <p class="text-gray-600 max-w-2xl mx-auto">Découvrez les opportunités d'emploi chez PROSEN et rejoignez une équipe passionnée par la sécurité et le service client</p>
      </div>
      
      <!-- Filtres par catégorie -->
      <div class="flex flex-wrap justify-center gap-3 mb-8">
        <button 
          v-for="cat in categories" 
          :key="cat.value"
          @click="filtrerParCategorie(cat.value)"
          :class="[
            'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300',
            categorieActive === cat.value 
              ? 'bg-[#23c55e] text-white shadow-md shadow-[#23c55e]/20' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-sm'
          ]"
        >
          {{ cat.label }}
        </button>
      </div>

      <!-- Indicateur de chargement -->
      <div v-if="isLoading" class="flex justify-center items-center py-12">
        <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#23c55e]"></div>
      </div>
      
      <!-- Message si aucune offre n'est disponible -->
      <div 
        v-else-if="emplois.length === 0" 
        class="text-center py-16 bg-gray-50 rounded-2xl border border-gray-100"
      >
        <div class="max-w-md mx-auto">
          <DocumentTextIcon class="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 class="text-xl font-semibold text-gray-800 mb-4">
            Aucune offre disponible pour le moment
          </h3>
          <p class="text-gray-600 mb-8">
            Nous n'avons pas d'offre correspondant à vos critères actuellement, mais vous pouvez envoyer une candidature spontanée ci-dessous.
          </p>
          <a 
            href="#candidature" 
            class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-[#23c55e] hover:bg-[#1ea550] transition-colors shadow-lg shadow-[#23c55e]/20 hover:shadow-xl hover:shadow-[#23c55e]/30"
          >
            Candidature spontanée
            <ArrowDownIcon class="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>

      <!-- Liste des offres d'emploi -->
      <div 
        v-else 
        class="grid gap-6"
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :enter="{ opacity: 1, y: 0 }"
      >
        <div 
          v-for="emploi in emplois" 
          :key="emploi.id"
          class="bg-white rounded-xl overflow-hidden group hover:shadow-xl transition-all duration-300 border border-gray-100"
        >
          <div class="bg-gray-50 px-6 py-4 border-b border-gray-100 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
            <div>
              <h3 class="text-xl font-semibold text-[#111829] group-hover:text-[#23c55e] transition-colors">
                {{ emploi.titre }}
              </h3>
              <span class="text-sm text-gray-500 mt-1 block">
                Publié le {{ formatDate(emploi.date) }}
              </span>
            </div>
            <div class="flex flex-wrap gap-2">
              <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                {{ getTypeContratLabel(emploi.type_contrat) }}
              </span>
              <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                {{ getCategorieLabel(emploi.categorie) }}
              </span>
            </div>
          </div>
          <div class="p-6">
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                <MapPinIcon class="w-4 h-4 mr-1" />
                {{ emploi.lieu }}
              </span>
              <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                <ClockIcon class="w-4 h-4 mr-1" />
                {{ getExperienceLabel(emploi.experience) }}
              </span>
            </div>
            
            <p class="text-gray-600 mb-6">{{ emploi.resume }}</p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div 
                v-for="(avantage, index) in getAvantages(emploi)" 
                :key="index"
                class="flex items-center text-gray-700"
              >
                <CheckCircleIcon class="w-5 h-5 text-[#23c55e] mr-2 flex-shrink-0" />
                <span>{{ avantage.Avantage }}</span>
              </div>
            </div>
            
            <div class="flex flex-wrap gap-2 mb-4">
              <span v-if="emploi.salaire" class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                <CurrencyDollarIcon class="w-4 h-4 mr-1" />
                {{ formatSalaire(emploi.salaire) }} FCFA/mois
              </span>
              <span v-for="(competence, index) in emploi.competences" :key="index" class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                <AcademicCapIcon class="w-4 h-4 mr-1" />
                {{ competence.Competence }}
              </span>
            </div>
            
            <div class="flex flex-col sm:flex-row gap-3 justify-end">
              <NuxtLink 
                :to="`/carrieres/${emploi.slug}`" 
                class="inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-sm font-medium rounded-lg text-white bg-[#23c55e] hover:bg-[#1ea550] transition-colors shadow-lg shadow-[#23c55e]/20 hover:shadow-xl hover:shadow-[#23c55e]/30"
              >
                Voir l'offre
                <EyeIcon class="w-4 h-4 ml-2" />
              </NuxtLink>
              <a 
                href="#candidature" 
                class="inline-flex items-center justify-center px-6 py-2.5 border border-[#23c55e] text-sm font-medium rounded-lg text-[#23c55e] bg-white hover:bg-[#23c55e]/5 transition-colors"
                @click="preselectionnerOffre(emploi)"
              >
                Postuler maintenant
                <ArrowRightIcon class="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Formulaire de candidature -->
  <section id="candidature" class="py-16 bg-gray-50">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <div class="flex items-center justify-center space-x-4 mb-4">
          <div class="p-3 bg-[#23c55e]/10 rounded-xl">
            <UserPlusIcon class="w-8 h-8 text-[#23c55e]" />
          </div>
          <h2 class="text-3xl font-bold text-[#111829]">Postuler chez PROSEN</h2>
        </div>
        <p class="text-gray-600 max-w-2xl mx-auto">
          Envoyez-nous votre candidature en remplissant le formulaire ci-dessous. Notre équipe RH vous recontactera dans les plus brefs délais.
        </p>
      </div>

      <div class="max-w-2xl mx-auto">
        <form @submit.prevent="soumettreFormulaire" class="space-y-6">
          <div class="bg-white rounded-xl shadow-sm p-6 space-y-6">
            <!-- Informations personnelles -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label for="firstName" class="block text-sm font-medium text-gray-700 mb-1">
                  Prénom *
                </label>
                <input
                  type="text"
                  id="firstName"
                  v-model="form.firstName"
                  required
                  class="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#23c55e]/20 focus:border-[#23c55e] transition-colors"
                  placeholder="Votre prénom"
                />
              </div>
              <div>
                <label for="lastName" class="block text-sm font-medium text-gray-700 mb-1">
                  Nom *
                </label>
                <input
                  type="text"
                  id="lastName"
                  v-model="form.lastName"
                  required
                  class="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#23c55e]/20 focus:border-[#23c55e] transition-colors"
                  placeholder="Votre nom"
                />
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  v-model="form.email"
                  required
                  class="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#23c55e]/20 focus:border-[#23c55e] transition-colors"
                  placeholder="votre.email@exemple.com"
                />
              </div>
              <div>
                <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">
                  Téléphone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  v-model="form.phone"
                  required
                  class="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#23c55e]/20 focus:border-[#23c55e] transition-colors"
                  placeholder="Votre numéro de téléphone"
                />
              </div>
            </div>

            <!-- Informations professionnelles -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label for="position" class="block text-sm font-medium text-gray-700 mb-1">
                  Poste souhaité *
                </label>
                <select
                  id="position"
                  v-model="form.position"
                  required
                  class="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#23c55e]/20 focus:border-[#23c55e] transition-colors"
                >
                  <option value="">Sélectionnez un poste</option>
                  <option v-for="pos in positions" :key="pos.value" :value="pos.value">
                    {{ pos.label }}
                  </option>
                </select>
              </div>
              <div>
                <label for="experience" class="block text-sm font-medium text-gray-700 mb-1">
                  Années d'expérience *
                </label>
                <select
                  id="experience"
                  v-model="form.experience"
                  required
                  class="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#23c55e]/20 focus:border-[#23c55e] transition-colors"
                >
                  <option value="">Sélectionnez votre expérience</option>
                  <option value="debutant">Débutant</option>
                  <option value="1-2">1-2 ans</option>
                  <option value="3-5">3-5 ans</option>
                  <option value="5+">Plus de 5 ans</option>
                </select>
              </div>
            </div>

            <div>
              <label for="message" class="block text-sm font-medium text-gray-700 mb-1">
                Message *
              </label>
              <textarea
                id="message"
                v-model="form.message"
                rows="4"
                required
                class="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#23c55e]/20 focus:border-[#23c55e] transition-colors"
                placeholder="Présentez-vous et expliquez votre motivation"
              ></textarea>
            </div>

            <!-- Upload CV -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                CV (PDF, DOC, DOCX) *
              </label>
              <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-[#23c55e] transition-colors">
                <div class="space-y-1 text-center">
                  <PaperClipIcon class="mx-auto h-12 w-12 text-gray-400" />
                  <div class="flex text-sm text-gray-600">
                    <label
                      for="cv-upload"
                      class="relative cursor-pointer rounded-md font-medium text-[#23c55e] hover:text-[#1ea550] focus-within:outline-none"
                    >
                      <span>Télécharger un fichier</span>
                      <input
                        id="cv-upload"
                        ref="fileInput"
                        type="file"
                        class="sr-only"
                        @change="handleFileUpload"
                        accept=".pdf,.doc,.docx"
                        required
                      />
                    </label>
                    <p class="pl-1">ou glisser-déposer</p>
                  </div>
                  <p class="text-xs text-gray-500">
                    {{ fileLabel }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Message de statut -->
          <div v-if="submitStatus.message" :class="[
            'p-4 rounded-lg text-center',
            submitStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          ]">
            {{ submitStatus.message }}
          </div>

          <!-- Bouton de soumission -->
          <div class="flex justify-center">
            <button
              type="submit"
              :disabled="isSubmitting"
              class="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-[#23c55e] hover:bg-[#1ea550] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#23c55e] transition-colors shadow-lg shadow-[#23c55e]/20 hover:shadow-xl hover:shadow-[#23c55e]/30 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <SpinnerIcon v-if="isSubmitting" class="animate-spin -ml-1 mr-2 h-5 w-5" />
              {{ isSubmitting ? 'Envoi en cours...' : 'Envoyer ma candidature' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
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
  ArrowDownIcon,
  EyeIcon,
  PaperClipIcon,
  MapPinIcon,
  ClockIcon,
  UserPlusIcon
} from '@heroicons/vue/24/solid'
import { useNuxtApp } from '#app'
import SpinnerIcon from '~/components/SpinnerIcon.vue'

const { $analytics } = useNuxtApp()

// Gestion des offres d'emploi
const emplois = ref([]);
const isLoading = ref(true);
const categorieActive = ref('all');

// Liste des catégories d'emploi
const categories = [
  { value: 'all', label: 'Tous les postes' },
  { value: 'agent', label: 'Agents de sécurité' },
  { value: 'technicien', label: 'Techniciens de surface' },
  { value: 'superviseur', label: 'Superviseurs' },
  { value: 'administratif', label: 'Postes administratifs' },
  { value: 'technique', label: 'Techniciens sécurité' },
  { value: 'autre', label: 'Autres postes' }
];

// Formulaire de candidature
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

// Liste des postes pour le formulaire
const positions = [
  { value: 'agent', label: 'Agent de sécurité' },
  { value: 'technicien', label: 'Technicien de surface' },
  { value: 'superviseur', label: 'Superviseur' },
  { value: 'administratif', label: 'Poste administratif' },
  { value: 'technique', label: 'Technicien sécurité électronique' },
  { value: 'autre', label: 'Autre poste' }
];

// Charger les offres d'emploi
const chargerEmplois = async (categorie = 'all') => {
  try {
    isLoading.value = true;
    const response = await $fetch('/images/emplois 20250407-01722.json');
    
    if (Array.isArray(response)) {
      emplois.value = response.filter(emploi => {
        if (categorie === 'all') return true;
        return emploi.categorie === categorie;
      });
      console.log('Emplois chargés:', emplois.value.length);
    } else {
      console.error('Format de réponse invalide');
      emplois.value = [];
    }
  } catch (error) {
    console.error('Erreur lors du chargement des emplois:', error);
    emplois.value = [];
  } finally {
    isLoading.value = false;
  }
};

// Filtrer par catégorie
const filtrerParCategorie = (categorie) => {
  categorieActive.value = categorie;
  chargerEmplois(categorie);
};

// Formatage des dates
const formatDate = (dateString) => {
  if (!dateString) return '';
  
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return dateString;
  
  return new Intl.DateTimeFormat('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
};

// Formatage du salaire
const formatSalaire = (salaire) => {
  if (!salaire) return '';
  return new Intl.NumberFormat('fr-FR').format(salaire);
};

// Récupérer les avantages d'une offre
const getAvantages = (emploi) => {
  if (!emploi.avantages) return [];
  return Array.isArray(emploi.avantages) ? emploi.avantages : [];
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
  return types[value?.toLowerCase()] || value;
};

const getExperienceLabel = (value) => {
  const experiences = {
    'debutant': 'Débutant accepté',
    '1-2': '1-2 ans',
    '3-5': '3-5 ans',
    '5+': 'Plus de 5 ans'
  };
  return experiences[value?.toLowerCase()] || value;
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
  return categories[value?.toLowerCase()] || value;
};

// Présélectionner une offre dans le formulaire
const preselectionnerOffre = (emploi) => {
  form.value.position = emploi.categorie || '';
  form.value.experience = emploi.experience || '';
  setTimeout(() => {
    document.getElementById('candidature')?.scrollIntoView({ behavior: 'smooth' });
  }, 100);
};

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

// Charger les offres d'emploi au chargement de la page
onMounted(() => {
  chargerEmplois();
});
</script> 