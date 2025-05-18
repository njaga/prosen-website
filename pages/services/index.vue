<template>
  <div>
    <SEO 
      title="Nos Services"
      description="Découvrez notre gamme complète de services de sécurité professionnels : gardiennage, surveillance, protection rapprochée et plus encore."
    />
    <!-- Hero Section -->
    <section class="relative min-h-[70vh] flex items-center bg-[#111829]">
      <div class="absolute inset-0">
        <img 
          src="/images/services-hero.jpg" 
          alt="Services PROSEN" 
          class="w-full h-full object-cover opacity-20"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-[#111829] via-[#111829]/90 to-[#111829]/80"></div>
      </div>
      <div class="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div class="max-w-3xl mx-auto text-center md:text-left">
          <span 
            v-motion
            :initial="{ opacity: 0, x: -20 }"
            :enter="{ opacity: 1, x: 0 }"
            class="inline-block px-4 py-1.5 bg-[#23c55e]/20 text-[#23c55e] rounded-full text-sm font-semibold mb-6"
          >
            Solutions de Sécurité Professionnelles
          </span>
          <h1 
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 200 } }"
            class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
          >
            Des services de sécurité
            <span class="block md:inline text-[#23c55e]">sur mesure</span> 
            pour votre entreprise
          </h1>
          <p 
            v-motion
            :initial="{ opacity: 0 }"
            :enter="{ opacity: 1, transition: { delay: 400 } }"
            class="text-base md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto md:mx-0"
          >
            Découvrez notre gamme complète de solutions adaptées à vos besoins spécifiques
          </p>
          <div 
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 600 } }"
            class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <a 
              href="#services" 
              class="w-full sm:w-auto inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-[#23c55e] text-white rounded-xl hover:bg-[#1ea550] transition-colors"
            >
              <span class="font-semibold">Découvrir nos services</span>
              <ArrowDownIcon class="w-5 h-5 ml-2" />
            </a>
            <NuxtLink 
              to="/contact" 
              class="w-full sm:w-auto inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 border-2 border-white text-white rounded-xl hover:bg-white hover:text-[#111829] transition-colors"
            >
              <span class="font-semibold">Nous contacter</span>
              <ArrowRightIcon class="w-5 h-5 ml-2" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Statistiques -->
    <section class="py-12 bg-gradient-to-b from-[#111829] to-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div 
            v-for="(stat, index) in stats"
            :key="index"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visible="{ 
              opacity: 1, 
              y: 0,
              transition: {
                delay: index * 200,
                duration: 500
              }
            }"
            class="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 transform hover:-translate-y-1 transition-all duration-300"
          >
            <div class="text-center">
              <div class="font-bold text-4xl text-[#23c55e] mb-2">{{ stat.value }}</div>
              <div class="text-gray-600 font-medium">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Nos Services -->
    <section id="services" class="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <span class="text-[#23c55e] font-semibold text-sm uppercase tracking-wider">Nos Services</span>
          <h2 class="text-4xl font-bold text-[#111829] mt-4 mb-6">Solutions de Sécurité Complètes</h2>
          <p class="text-gray-600 max-w-3xl mx-auto">
            Chaque service est conçu pour répondre aux normes les plus strictes et s'adapter à vos besoins spécifiques
          </p>
        </div>

        <!-- Modification de la section des services -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="(service, index) in services"
            :key="service.slug"
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :enter="{ opacity: 1, y: 0 }"
            :delay="index * 100"
            class="group relative"
          >
            <NuxtLink :to="`/services/${service.slug}`">
              <div class="bg-white rounded-2xl p-8 shadow-lg transition-all duration-300 group-hover:shadow-xl border border-gray-100 group-hover:border-[#23c55e]/30 h-full">
                <div class="relative">
                  <div class="w-16 h-16 bg-[#23c55e]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#23c55e]/20 transition-colors">
                    <component :is="service.icon" class="w-8 h-8 text-[#23c55e]" />
                  </div>
                  <span v-if="service.is24_7" class="absolute top-0 right-0 bg-[#23c55e]/10 text-[#23c55e] text-sm font-semibold py-1 px-3 rounded-full">
                    24/7
                  </span>
                </div>
                <h3 class="text-xl font-bold text-[#111829] mb-4 group-hover:text-[#23c55e] transition-colors">
                  {{ service.title }}
                </h3>
                <p class="text-gray-600 mb-6">{{ service.description }}</p>
                <div class="flex items-center text-[#23c55e] font-semibold mt-auto">
                  En savoir plus
                  <ArrowRightIcon class="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Pourquoi nous choisir -->
    <section class="py-24 bg-[#111829] relative overflow-hidden">
      <div class="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10"></div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div class="text-center mb-16">
          <span class="text-[#23c55e] font-semibold text-sm uppercase tracking-wider">Nos Avantages</span>
          <h2 class="text-4xl font-bold text-white mt-4 mb-6">Pourquoi Choisir PROSEN ?</h2>
        </div>

        <!-- Section Avantages -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div 
            v-for="(advantage, index) in advantages"
            :key="index"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visible="{ 
              opacity: 1, 
              y: 0,
              transition: {
                delay: index * 200,
                duration: 500
              }
            }"
            class="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          >
            <component :is="advantage.icon" class="w-12 h-12 text-[#23c55e] mb-6" />
            <h3 class="text-xl font-semibold text-white mb-4">{{ advantage.title }}</h3>
            <p class="text-gray-300">{{ advantage.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Processus -->
    <section class="py-24 bg-gradient-to-b from-white to-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <span class="text-[#23c55e] font-semibold text-sm uppercase tracking-wider">Notre Approche</span>
          <h2 class="text-4xl font-bold text-[#111829] mt-4 mb-6">Comment nous travaillons</h2>
        </div>

        <div class="relative">
          <div class="absolute top-1/2 left-0 right-0 h-0.5 bg-[#23c55e]/20 -translate-y-1/2 hidden md:block"></div>
          <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div 
              v-for="(step, index) in process"
              :key="index"
              v-motion
              :initial="{ opacity: 0, y: 20 }"
              :visible="{ 
                opacity: 1, 
                y: 0,
                transition: {
                  delay: index * 200,
                  duration: 500
                }
              }"
              class="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              <div class="absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#23c55e] text-white flex items-center justify-center font-bold text-xl">
                {{ index + 1 }}
              </div>
              <h3 class="text-xl font-semibold text-[#111829] mb-4 mt-4 text-center">{{ step.title }}</h3>
              <p class="text-gray-600 text-center">{{ step.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="py-24 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <span class="text-[#23c55e] font-semibold text-sm uppercase tracking-wider">FAQ</span>
          <h2 class="text-4xl font-bold text-[#111829] mt-4 mb-6">Questions Fréquentes</h2>
          <p class="text-gray-600 max-w-3xl mx-auto">
            Retrouvez les réponses aux questions les plus fréquemment posées sur nos services
          </p>
        </div>

        <div class="max-w-3xl mx-auto">
          <div v-for="(item, index) in faq" :key="index"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visible="{ 
              opacity: 1, 
              y: 0,
              transition: {
                delay: index * 100,
                duration: 500
              }
            }"
            class="mb-4">
            <button
              @click="toggleFaq(index)"
              class="w-full flex justify-between items-center p-6 bg-white rounded-xl border border-gray-100 hover:border-[#23c55e]/30 transition-colors"
            >
              <span class="text-lg font-semibold text-[#111829]">{{ item.question }}</span>
              <svg
                :class="item.isOpen ? 'rotate-180' : ''"
                class="w-5 h-5 text-[#23c55e] transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              v-show="item.isOpen"
              class="p-6 bg-white border border-t-0 border-gray-100 rounded-b-xl"
            >
              <p class="text-gray-600">{{ item.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="bg-[#23c55e] py-24 relative overflow-hidden">
      <div class="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10"></div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div 
          class="bg-white/10 backdrop-blur-sm rounded-2xl p-12 border border-white/20"
          v-motion
          :initial="{ opacity: 0, scale: 0.95 }"
          :enter="{ opacity: 1, scale: 1 }"
        >
          <div class="text-center">
            <h2 class="text-4xl font-bold text-white mb-6">Prêt à Sécuriser Votre Entreprise ?</h2>
            <p class="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
              Contactez nos experts pour une évaluation gratuite de vos besoins en sécurité
            </p>
            <div class="flex flex-wrap gap-4 justify-center">
              <NuxtLink
                to="/devis"
                class="inline-flex items-center px-8 py-4 bg-white text-[#111829] rounded-xl hover:bg-gray-100 transition-colors"
              >
                <span class="font-semibold">Obtenir un Devis Gratuit</span>
                <ArrowRightIcon class="w-5 h-5 ml-2" />
              </NuxtLink>
              <a
                href="tel:+221338590000"
                class="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-xl hover:bg-white hover:text-[#111829] transition-colors"
              >
                <PhoneIcon class="w-5 h-5 mr-2" />
                <span class="font-semibold">+221 33 843 46 33</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { 
  ArrowRightIcon,
  ArrowDownIcon,
  PhoneIcon,
  ShieldCheckIcon,
  CameraIcon,
  UserGroupIcon,
  SparklesIcon,
  FireIcon,
  TruckIcon,
  AcademicCapIcon,
  ClipboardDocumentCheckIcon,
  ClockIcon,
  UserIcon,
  CheckBadgeIcon
} from '@heroicons/vue/24/solid'

// Importez onMounted pour gérer le chargement initial
import { onMounted, ref } from 'vue'

// Ajoutez cette partie pour gérer le chargement initial
onMounted(() => {
  // Force le rendu après le montage du composant
  nextTick(() => {
    document.documentElement.style.display = 'revert'
  })
})

// Statistiques
const stats = [
  { 
    value: '5+', 
    label: "Années d'expérience",
  },
  { 
    value: '50+', 
    label: 'Clients satisfaits',
  },
  { 
    value: '200+', 
    label: 'Agents formés',
  },
  { 
    value: '24/7', 
    label: 'Support client',
  }
]

// Services (existants)
const services = [
  {
    title: "Surveillance & Gardiennage",
    slug: "surveillance-gardiennage",
    description: "Services de sécurité professionnels 24/7 avec agents formés et patrouilles mobiles.",
    icon: ShieldCheckIcon,
    is24_7: true
  },
  {
    title: "Sécurité Électronique",
    slug: "securite-electronique",
    description: "Solutions de vidéosurveillance, contrôle d'accès et systèmes d'alarme de pointe.",
    icon: CameraIcon
  },
  {
    title: "Protection Rapprochée",
    slug: "protection-rapprochee",
    description: "Services de protection personnalisés pour les VIP et événements spéciaux.",
    icon: UserGroupIcon
  },
  {
    title: "Sécurité Événementielle",
    slug: "securite-evenementielle",
    description: "Solutions complètes pour la sécurité des concerts, cérémonies et événements sportifs.",
    icon: UserGroupIcon
  },
  {
    title: "Nettoyage Professionnel",
    slug: "nettoyage-professionnel",
    description: "Services complets de nettoyage et d'entretien pour tous types de locaux.",
    icon: SparklesIcon
  },
  {
    title: "Sécurité Incendie",
    slug: "securite-incendie",
    description: "Solutions complètes de protection contre les incendies.",
    icon: FireIcon
  },
  {
    title: "Équipements de Protection",
    slug: "equipements-protection",
    description: "Vente et installation d'équipements de protection individuelle et collective.",
    icon: ShieldCheckIcon
  },
  {
    title: "Transport de Valeurs",
    slug: "transport-valeurs",
    description: "Services sécurisés de transport de fonds et de valeurs.",
    icon: TruckIcon
  },
  {
    title: "Formations",
    slug: "formations",
    description: "Programmes de formation professionnelle en sécurité et prévention.",
    icon: AcademicCapIcon
  },
  {
    title: "Conseil en Sécurité",
    slug: "conseil-securite",
    description: "Services de conseil et d'audit pour optimiser votre sécurité.",
    icon: ClipboardDocumentCheckIcon
  },
  {
    title: "Cybersécurité",
    slug: "cybersecurite",
    description: "Protection de vos systèmes informatiques et données sensibles contre les cybermenaces.",
    icon: ShieldCheckIcon
  },
  {
    title: "Géolocalisation de Véhicules",
    slug: "geolocalisation-vehicules",
    description: "Suivi en temps réel et gestion de votre flotte de véhicules.",
    icon: TruckIcon
  }
]

// Avantages
const advantages = [
  {
    icon: ClockIcon,
    title: 'Service 24/7',
    description: 'Une équipe disponible en permanence pour répondre à vos besoins de sécurité.'
  },
  {
    icon: UserIcon,
    title: 'Personnel Qualifié',
    description: 'Des agents rigoureusement sélectionnés et formés aux meilleures pratiques.'
  },
  {
    icon: CheckBadgeIcon,
    title: 'Solutions Sur Mesure',
    description: 'Des services personnalisés adaptés à vos exigences spécifiques.'
  }
]

// Processus
const process = [
  {
    title: 'Évaluation',
    description: 'Analyse détaillée de vos besoins et de votre environnement'
  },
  {
    title: 'Proposition',
    description: 'Solution personnalisée adaptée à vos exigences'
  },
  {
    title: 'Déploiement',
    description: 'Mise en place rapide et professionnelle des services'
  },
  {
    title: 'Suivi',
    description: 'Supervision continue et ajustements si nécessaire'
  }
]

// FAQ
const faq = ref([
  {
    question: "Quels sont vos délais d'intervention ?",
    answer: "Nous garantissons une intervention rapide 24h/24 et 7j/7. Pour les urgences, notre équipe peut être sur place en moins de 30 minutes dans la région de Dakar.",
    isOpen: false
  },
  {
    question: "Comment sont formés vos agents de sécurité ?",
    answer: "Nos agents suivent un programme de formation rigoureux incluant la sécurité physique, la gestion des conflits, les premiers secours et les procédures d'urgence. Ils sont régulièrement évalués et suivent des formations continues.",
    isOpen: false
  },
  {
    question: "Proposez-vous des devis gratuits ?",
    answer: "Oui, nous proposons des devis gratuits et personnalisés après une évaluation détaillée de vos besoins en sécurité. Notre équipe se déplace sur site pour une analyse complète.",
    isOpen: false
  },
  {
    question: "Quelles zones géographiques couvrez-vous ?",
    answer: "Nous intervenons principalement dans la région de Dakar et ses environs. Nous pouvons également déployer nos services dans d'autres régions du Sénégal sur demande.",
    isOpen: false
  },
  {
    question: "Vos services sont-ils assurés ?",
    answer: "Oui, tous nos services sont couverts par une assurance professionnelle complète pour garantir une protection optimale de nos clients.",
    isOpen: false
  }
])

// Fonction pour toggler l'état d'ouverture d'une FAQ
function toggleFaq(index) {
  faq.value[index].isOpen = !faq.value[index].isOpen;
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>