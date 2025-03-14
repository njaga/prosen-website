<template>
  <div>
    <!-- Hero Section -->
    <section class="relative py-32 mb-16 bg-[#111829]">
      <div class="absolute inset-0">
        <img 
          src="/images/about-hero.jpg" 
          alt="PROSEN Sécurité" 
          class="w-full h-full object-cover opacity-20"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-[#111829] to-[#111829]/80"></div>
      </div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :enter="{ opacity: 1, y: 0 }"
          class="text-5xl font-bold text-white mb-6"
        >
          À Propos de PROSEN
        </h1>
        <p 
          v-motion
          :initial="{ opacity: 0 }"
          :enter="{ opacity: 1, transition: { delay: 200 } }"
          class="text-xl text-gray-300 max-w-3xl mx-auto"
        >
          Leader dans le domaine de la sécurité privée au Sénégal, nous assurons la protection de vos biens et de vos personnes avec professionnalisme et engagement.
        </p>
      </div>
    </section>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Notre Histoire avec image -->
      <div 
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :enter="{ opacity: 1, y: 0 }"
        class="grid md:grid-cols-2 gap-12 items-center mb-24"
      >
        <div class="relative">
          <div class="absolute -inset-4 bg-[#23c55e]/10 rounded-xl transform rotate-3"></div>
          <img 
            src="/images/about-company.jpeg" 
            alt="PROSEN Histoire" 
            class="relative rounded-lg shadow-xl"
          />
        </div>
        <div>
          <h2 class="text-3xl font-bold mb-6 text-[#111829]">Notre Histoire</h2>
          <div class="prose prose-lg text-gray-600">
            <p>Établie au Sénégal, PROSEN s'est forgée une solide réputation dans le secteur de la sécurité privée. Notre engagement envers l'excellence et notre approche innovante nous ont permis de devenir un partenaire de confiance pour de nombreuses entreprises et organisations à travers le pays.</p>
            <p class="mt-4">Notre succès repose sur notre capacité à comprendre les enjeux de sécurité spécifiques à chaque client et à proposer des solutions adaptées, soutenues par une équipe hautement qualifiée et des équipements de pointe.</p>
          </div>
        </div>
      </div>

      <!-- Notre Savoir-faire -->
      <section class="py-24 bg-gradient-to-b from-white to-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <span class="text-[#23c55e] font-semibold text-sm uppercase tracking-wider">Nos Services</span>
            <h2 class="text-4xl font-bold text-[#111829] mt-4 mb-6">Des solutions de sécurité complètes adaptées à vos besoins spécifiques</h2>
            <p class="text-gray-600 max-w-3xl mx-auto">Découvrez notre gamme complète de services de sécurité professionnels</p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div 
              v-for="(service, index) in displayedServices" 
              :key="service.title"
              v-motion
              :initial="{ opacity: 0, y: 50 }"
              :enter="{ opacity: 1, y: 0, transition: { delay: index * 100 } }"
              class="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 hover:border-[#23c55e]/30"
            >
              <div class="w-16 h-16 bg-[#23c55e]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#23c55e]/20 transition-colors">
                <component 
                  :is="service.icon" 
                  class="w-8 h-8 text-[#23c55e]"
                />
              </div>
              
              <h3 class="text-xl font-semibold mb-4 text-[#111829]">{{ service.title }}</h3>
              <p class="text-gray-600 mb-6">{{ service.description }}</p>
              
              <ul class="space-y-3">
                <li 
                  v-for="(feature, featureIndex) in service.features" 
                  :key="featureIndex"
                  class="flex items-start space-x-3"
                >
                  <CheckCircleIcon class="w-5 h-5 text-[#23c55e] mt-0.5 flex-shrink-0" />
                  <span class="text-gray-700">{{ feature }}</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Bouton Voir plus -->
          <div class="text-center">
            <button
              @click="showAllServices = !showAllServices"
              class="group inline-flex items-center px-6 py-3 rounded-xl bg-white border-2 border-[#23c55e] text-[#23c55e] hover:bg-[#23c55e] hover:text-white transition-all duration-300 font-medium"
            >
              <span class="mr-2">{{ showAllServices ? 'Voir moins' : 'Voir plus de services' }}</span>
              <ChevronDownIcon 
                v-if="!showAllServices"
                class="w-5 h-5 transform transition-transform duration-300 group-hover:translate-y-0.5" 
              />
              <ChevronUpIcon
                v-else
                class="w-5 h-5 transform transition-transform duration-300 group-hover:-translate-y-0.5"
              />
            </button>
          </div>
        </div>
      </section>

      <!-- Domaines d'intervention avec images -->
      <div class="mb-24">
        <div class="text-center mb-16">
          <span class="text-[#23c55e] font-semibold text-sm uppercase tracking-wider">Nos secteurs</span>
          <h2 class="text-4xl font-bold text-[#111829] mt-4">Domaines d'intervention</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div 
            v-for="(domain, index) in domains" 
            :key="index"
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: index * 200 } }"
            class="group relative overflow-hidden rounded-xl"
          >
            <div class="aspect-w-4 aspect-h-3">
              <img 
                :src="`/images/domain-${index + 1}.jpg`" 
                :alt="domain.title"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-[#111829] via-[#111829]/60 to-transparent opacity-90"></div>
            </div>
            <div class="absolute bottom-0 left-0 right-0 p-6">
              <h3 class="text-xl font-semibold text-white mb-4">{{ domain.title }}</h3>
              <ul class="space-y-2">
                <li 
                  v-for="(item, itemIndex) in domain.items" 
                  :key="itemIndex"
                  class="flex items-center text-gray-300"
                >
                  <ArrowSmallRightIcon class="w-4 h-4 text-[#23c55e] mr-2" />
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div> <!-- Fermeture du div.max-w-7xl mx-auto -->

    <!-- CTA Section - déplacé hors du conteneur principal -->
    <section class="relative bg-[#23c55e] overflow-hidden">
      <div class="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10"></div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
        <div 
          class="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20"
          v-motion
          :initial="{ opacity: 0, scale: 0.95 }"
          :enter="{ 
            opacity: 1, 
            scale: 1,
            transition: {
              duration: 500
            }
          }"
        >
          <div class="text-center">
            <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
              Besoin d'une Solution de Sécurité sur Mesure ?
            </h2>
            <p class="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contactez nos experts pour une évaluation gratuite de vos besoins en sécurité
            </p>
            <div class="flex flex-wrap gap-4 justify-center">
              <NuxtLink
                to="/devis"
                class="group inline-flex items-center px-8 py-4 rounded-xl bg-white text-[#111829] hover:bg-gray-100 transition-all duration-300"
              >
                <span class="font-semibold">Obtenir un Devis Gratuit</span>
                <ArrowRightIcon class="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-1" />
              </NuxtLink>
              <NuxtLink
                to="/services"
                class="group inline-flex items-center px-8 py-4 rounded-xl border-2 border-white text-white hover:bg-white hover:text-[#111829] transition-all duration-300"
              >
                <span class="font-semibold">En savoir plus</span>
                <ArrowRightIcon class="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-1" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { 
  ShieldCheckIcon,
  CameraIcon,
  UserGroupIcon,
  SparklesIcon,
  FireIcon,
  TruckIcon,
  AcademicCapIcon,
  ClipboardDocumentCheckIcon,
  ShieldExclamationIcon,
  CheckCircleIcon,
  ArrowSmallRightIcon,
  BuildingOfficeIcon,
  HomeIcon,
  ShoppingBagIcon,
  CogIcon,
  ChevronUpIcon,
  ChevronDownIcon
} from '@heroicons/vue/24/solid'
import { ref } from 'vue'

// Ajout de la ref pour gérer l'affichage
const showAllServices = ref(false)

// Computed pour filtrer les services
const displayedServices = computed(() => {
  return showAllServices.value ? services : services.slice(0, 3)
})

const approaches = [
  {
    title: "Analyse Personnalisée",
    description: "Nous évaluons vos besoins spécifiques pour proposer des solutions sur mesure adaptées à votre contexte.",
    icon: ShieldCheckIcon
  },
  {
    title: "Personnel Qualifié",
    description: "Notre équipe est rigoureusement sélectionnée et formée pour garantir un service professionnel.",
    icon: UserGroupIcon
  },
  {
    title: "Solutions Innovantes",
    description: "Nous intégrons les dernières technologies pour optimiser la sécurité de nos clients.",
    icon: CogIcon
  }
]

const expertises = [
  {
    title: "Surveillance Physique",
    description: "Nos agents de sécurité hautement qualifiés assurent une protection optimale de vos sites.",
    points: [
      "Personnel formé et certifié",
      "Surveillance 24/7",
      "Rondes et contrôles",
      "Gestion des accès"
    ]
  },
  {
    title: "Sécurité Électronique",
    description: "Des solutions technologiques avancées pour une sécurité renforcée.",
    points: [
      "Vidéosurveillance HD",
      "Contrôle d'accès biométrique",
      "Systèmes d'alarme",
      "Télésurveillance"
    ]
  },
  {
    title: "Protection Rapprochée",
    description: "Une protection personnalisée assurée par des professionnels d'élite.",
    points: [
      "Gardes du corps qualifiés",
      "Escortes VIP",
      "Protection événementielle",
      "Évaluation des risques"
    ]
  },
  {
    title: "Gestion des Risques",
    description: "Une approche proactive pour anticiper et gérer les menaces.",
    points: [
      "Audit de sécurité",
      "Plans d'urgence",
      "Formation du personnel",
      "Veille sécuritaire"
    ]
  }
]

const domains = [
  {
    title: "Secteur Tertiaire",
    icon: BuildingOfficeIcon,
    items: [
      "Immeubles de bureaux",
      "Centres commerciaux",
      "Établissements bancaires",
      "Hôtels et restaurants"
    ]
  },
  {
    title: "Secteur Résidentiel",
    icon: HomeIcon,
    items: [
      "Résidences privées",
      "Complexes résidentiels",
      "Immeubles d'habitation",
      "Quartiers sécurisés"
    ]
  },
  {
    title: "Secteur Commercial",
    icon: ShoppingBagIcon,
    items: [
      "Commerces de détail",
      "Entrepôts logistiques",
      "Sites industriels",
      "Zones d'activités"
    ]
  }
]

const services = [
  {
    title: "Surveillance & Gardiennage",
    description: "Votre sécurité assurée 24/7 par des professionnels dévoués",
    icon: ShieldCheckIcon,
    features: [
      "Agents de sécurité formés",
      "Patrouilles mobiles",
      "Maîtres-chiens"
    ]
  },
  {
    title: "Sécurité Électronique",
    description: "La technologie de pointe au service de votre protection",
    icon: CameraIcon,
    features: [
      "Vidéosurveillance",
      "Contrôle d'accès",
      "Alarmes intrusion"
    ]
  },
  {
    title: "Protection Rapprochée",
    description: "Une protection personnalisée pour votre tranquillité d'esprit",
    icon: UserGroupIcon,
    features: [
      "Gardes du corps",
      "Escortes VIP",
      "Sécurité événementielle"
    ]
  },
  {
    title: "Nettoyage Professionnel",
    description: "Services de nettoyage complets pour vos locaux",
    icon: SparklesIcon,
    features: [
      "Nettoyage bureaux",
      "Entretien industriel",
      "Désinfection"
    ]
  },
  {
    title: "Équipements de Protection",
    description: "Fourniture d'EPI et matériel de sécurité",
    icon: ShieldExclamationIcon,
    features: [
      "EPI",
      "Matériel de sécurité",
      "Équipements incendie"
    ]
  },
  {
    title: "Sécurité Incendie",
    description: "Solutions complètes de protection incendie",
    icon: FireIcon,
    features: [
      "Détection incendie",
      "Extincteurs",
      "Plans d'évacuation"
    ]
  },
  {
    title: "Conseil en Sécurité",
    description: "Expertise pour optimiser votre stratégie de sécurité",
    icon: ClipboardDocumentCheckIcon,
    features: [
      "Audits de sécurité",
      "Plans de sécurité",
      "Formation du personnel"
    ]
  },
  {
    title: "Transport de Valeurs",
    description: "Vos biens précieux acheminés en toute sécurité",
    icon: TruckIcon,
    features: [
      "Convoyage sécurisé",
      "Véhicules blindés",
      "Protection optimale"
    ]
  },
  {
    title: "Formations",
    description: "Renforcez les compétences de votre équipe",
    icon: AcademicCapIcon,
    features: [
      "Formation sécurité",
      "SST",
      "Prévention incendie"
    ]
  }
]
</script>