<template>
  <div>
    <Hero />

    <!-- Services Vedettes -->
    <section class="py-24 bg-gradient-to-b from-white to-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <span class="text-[#23c55e] font-semibold text-sm uppercase tracking-wider">Nos Solutions</span>
          <h2 class="text-4xl font-bold text-[#111829] mt-4 mb-6">Nos Services Premium</h2>
          <p class="text-gray-600 max-w-2xl mx-auto text-lg">Des solutions de sécurité adaptées à vos besoins
            spécifiques, servies par des professionnels expérimentés.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="(service, index) in featuredServices" :key="service.title" 
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :enter="{ 
              opacity: 1, 
              y: 0,
              transition: {
                delay: index * 200,
                duration: 500
              }
            }"
            class="p-8 rounded-2xl bg-white hover:shadow-2xl transition-all duration-300 border border-gray-100">
            <div class="w-12 h-12 bg-[#23c55e]/10 rounded-lg flex items-center justify-center mb-6">
              <component :is="service.icon" class="w-6 h-6 text-[#23c55e]" />
            </div>
            <h3 class="text-xl font-semibold mb-4 text-[#111829]">{{ service.title }}</h3>
            <p class="text-gray-600 mb-6">{{ service.description }}</p>
            <ul class="space-y-3">
              <li v-for="feature in service.features" :key="feature" class="flex items-center text-gray-700">
                <CheckCircleIcon class="w-5 h-5 text-[#23c55e] mr-3 flex-shrink-0" />
                {{ feature }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Pourquoi nous choisir -->
    <section class="py-24 bg-[#111829] relative overflow-hidden">
      <div class="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5"></div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div class="text-center mb-16">
          <span class="text-[#23c55e] font-semibold text-sm uppercase tracking-wider">Nos Avantages</span>
          <h2 class="text-4xl font-bold text-white mt-4 mb-6">Pourquoi Choisir PROSEN ?</h2>
          <p class="text-gray-300 max-w-2xl mx-auto text-lg">Une expertise reconnue dans le domaine de la sécurité au
            Sénégal</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div v-for="(feature, index) in features" :key="index" v-motion-slide-up :delay="index * 100"
            class="relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#23c55e]/30 transition-colors">
            <div
              class="w-16 h-16 mx-auto mb-6 bg-[#23c55e] rounded-2xl flex items-center justify-center transform -translate-y-12">
              <component :is="feature.icon" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold mb-4 text-white">{{ feature.title }}</h3>
            <p class="text-gray-300">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Tous nos services -->
    <section class="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <span class="text-[#23c55e] font-semibold text-sm uppercase tracking-wider">Notre Catalogue</span>
          <h2 class="text-4xl font-bold text-[#111829] mt-4 mb-6">Tous nos Services</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div v-for="(category, index) in serviceCategories" :key="index" v-motion-slide-up :delay="index * 100"
            class="p-6 rounded-2xl bg-white border border-gray-100 hover:border-[#23c55e]/30 transition-colors">
            <div class="flex items-center mb-4">
              <component :is="category.icon" class="w-6 h-6 text-[#23c55e] mr-3" />
              <h3 class="text-lg font-semibold text-[#111829]">{{ category.title }}</h3>
            </div>
            <div class="border-b border-gray-100 mb-4"></div>
            <ul class="space-y-3">
              <li v-for="service in category.services" :key="service" class="flex items-center text-gray-600">
                <ArrowSmallRightIcon class="w-4 h-4 text-[#23c55e] mr-2 flex-shrink-0" />
                {{ service }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="py-24 bg-[#23c55e] relative overflow-hidden">
      <div class="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10"></div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div class="text-center">
          <h2 class="text-4xl font-bold text-white mb-6">Prêt à Sécuriser Votre Entreprise ?</h2>
          <p class="text-white/90 mb-12 max-w-2xl mx-auto text-lg">
            Contactez-nous dès aujourd'hui pour une consultation gratuite et découvrez comment nous pouvons protéger vos
            intérêts.
          </p>
          <div class="flex flex-wrap gap-4 justify-center">
            <NuxtLink to="/devis"
              class="inline-flex items-center px-8 py-4 rounded-xl bg-white text-[#111829] hover:bg-gray-100 transition-colors">
              <span class="font-semibold">Obtenir un Devis Gratuit</span>
              <ArrowRightIcon class="w-5 h-5 ml-2" />
            </NuxtLink>
            <NuxtLink to="/services"
              class="inline-flex items-center px-8 py-4 rounded-xl border-2 border-white text-white hover:bg-white hover:text-[#111829] transition-colors">
              <span class="font-semibold">En savoir plus</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import {
  CheckCircleIcon,
  ArrowRightIcon,
  ArrowSmallRightIcon,
  ShieldCheckIcon,
  ClockIcon,
  CogIcon,
  BuildingOfficeIcon,
  FireIcon,
  AcademicCapIcon
} from '@heroicons/vue/24/solid'

// Services vedettes avec icônes et descriptions complètes
const featuredServices = [
  {
    title: "Surveillance & Gardiennage",
    description: "Votre sécurité assurée 24/7 par des professionnels dévoués",
    features: [
      "Agents de sécurité formés",
      "Patrouilles mobiles",
      "Maîtres-chiens"
    ],
    icon: ShieldCheckIcon
  },
  {
    title: "Sécurité Électronique",
    description: "La technologie de pointe au service de votre protection",
    features: [
      "Vidéosurveillance",
      "Contrôle d'accès",
      "Alarmes intrusion"
    ],
    icon: CogIcon
  },
  {
    title: "Protection Rapprochée",
    description: "Une protection personnalisée pour votre tranquillité d'esprit",
    features: [
      "Gardes du corps",
      "Escortes VIP",
      "Sécurité événementielle"
    ],
    icon: ShieldCheckIcon
  }
];

const serviceCategories = [
  {
    title: "Nettoyage Professionnel",
    services: [
      "Nettoyage bureaux",
      "Entretien industriel",
      "Désinfection"
    ],
    icon: BuildingOfficeIcon
  },
  {
    title: "Équipements de Protection",
    services: [
      "EPI",
      "Matériel de sécurité",
      "Équipements incendie"
    ],
    icon: ShieldCheckIcon
  },
  {
    title: "Sécurité Incendie",
    services: [
      "Détection incendie",
      "Extincteurs",
      "Plans d'évacuation"
    ],
    icon: FireIcon
  },
  {
    title: "Conseil & Formation",
    services: [
      "Audits de sécurité",
      "Formation sécurité",
      "Certification"
    ],
    icon: AcademicCapIcon
  }
];

const features = [
  {
    title: 'Expertise Reconnue',
    description: '5 ans d\'expérience dans la sécurité professionnelle',
    icon: ShieldCheckIcon
  },
  {
    title: 'Service 24/7',
    description: 'Une équipe disponible jour et nuit pour votre sécurité',
    icon: ClockIcon
  },
  {
    title: 'Solutions Sur Mesure',
    description: 'Des services adaptés à vos besoins spécifiques',
    icon: CogIcon
  }
];
</script>

<style>
.backdrop-blur-sm {
  backdrop-filter: blur(8px);
}
</style>