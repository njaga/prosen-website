<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-50 to-white">
    <!-- Hero Section -->
    <section class="relative py-24 bg-[#111829] overflow-hidden">
      <div class="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10"></div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div 
          v-if="service"
          class="text-center"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0 }"
        >
          <span class="inline-block px-4 py-1 bg-[#23c55e]/20 text-[#23c55e] rounded-full text-sm font-semibold mb-6">
            Nos Services
          </span>
          <h1 class="text-5xl font-bold text-white mb-6">{{ service.title }}</h1>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">{{ service.description }}</p>
        </div>
      </div>
    </section>

    <!-- Contenu Principal -->
    <section class="py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div v-if="service">
          <!-- Caractéristiques -->
          <div class="mb-24">
            <h2 class="text-3xl font-bold text-[#111829] text-center mb-16">
              Nos Prestations
              <div class="w-20 h-1 bg-[#23c55e] mx-auto mt-4"></div>
            </h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div 
                v-for="(feature, index) in service.features" 
                :key="feature"
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
                class="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:border-[#23c55e]/30 transition-all duration-300"
              >
                <div class="w-12 h-12 bg-[#23c55e]/10 rounded-xl flex items-center justify-center mb-4">
                  <CheckIcon class="w-6 h-6 text-[#23c55e]" />
                </div>
                <p class="text-gray-700 font-medium">{{ feature }}</p>
              </div>
            </div>
          </div>

          <!-- Avantages -->
          <div class="bg-[#111829] rounded-3xl p-12 relative overflow-hidden">
            <div class="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10"></div>
            <div class="relative">
              <h2 class="text-3xl font-bold text-white text-center mb-16">
                Pourquoi Choisir PROSEN ?
                <div class="w-20 h-1 bg-[#23c55e] mx-auto mt-4"></div>
              </h2>
              
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
                  <div class="w-16 h-16 bg-[#23c55e]/20 rounded-2xl flex items-center justify-center mb-6">
                    <component :is="advantage.icon" class="w-8 h-8 text-[#23c55e]" />
                  </div>
                  <h3 class="text-xl font-semibold text-white mb-4">{{ advantage.title }}</h3>
                  <p class="text-gray-300">{{ advantage.description }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- CTA -->
          <div class="mt-24 text-center">
            <NuxtLink
              to="/devis"
              class="inline-flex items-center px-8 py-4 bg-[#23c55e] text-white rounded-xl hover:bg-[#1ea550] transition-colors"
            >
              <span class="font-semibold">Demander un devis gratuit</span>
              <ArrowRightIcon class="w-5 h-5 ml-2" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ArrowRightIcon, CheckIcon, TrophyIcon, ClockIcon, ShieldCheckIcon } from '@heroicons/vue/24/solid'

const route = useRoute();

const services = {
  'surveillance-gardiennage': {
    title: 'Surveillance & Gardiennage',
    description: 'PROSEN assure votre sécurité 24h/24 et 7j/7 avec des professionnels hautement qualifiés et des solutions adaptées à vos besoins spécifiques.',
    features: [
      'Agents de sécurité formés et certifiés',
      'Patrouilles mobiles régulières',
      'Maîtres-chiens professionnels',
      'Contrôle des accès',
      'Surveillance des sites sensibles',
      'Intervention sur alarme',
      'Rondes de sécurité',
      'Gestion des situations d\'urgence'
    ]
  },
  'securite-electronique': {
    title: 'Sécurité Électronique',
    description: 'Nos solutions de sécurité électronique utilisent les technologies les plus avancées pour assurer une protection optimale de vos locaux et de vos biens.',
    features: [
      'Systèmes de vidéosurveillance HD',
      'Contrôle d\'accès biométrique',
      'Alarmes anti-intrusion',
      'Détection périmétrique',
      'Télésurveillance 24/7',
      'Systèmes d\'interphonie',
      'Gestion centralisée',
      'Maintenance préventive'
    ]
  },
  'protection-rapprochee': {
    title: 'Protection Rapprochée',
    description: 'Service de protection personnalisé assuré par des agents d\'élite pour garantir votre sécurité dans toutes les situations.',
    features: [
      'Gardes du corps qualifiés',
      'Escortes VIP',
      'Sécurité événementielle',
      'Protection lors des déplacements',
      'Évaluation des risques',
      'Plans de protection personnalisés',
      'Équipe d\'intervention rapide',
      'Formation en self-défense'
    ]
  },
  'nettoyage-professionnel': {
    title: 'Nettoyage Professionnel',
    description: 'Services de nettoyage complets pour maintenir vos locaux dans un état impeccable.',
    features: [
      'Nettoyage de bureaux',
      'Entretien industriel',
      'Désinfection des locaux',
      'Nettoyage des vitres',
      'Entretien des sols',
      'Nettoyage après chantier',
      'Services sur mesure',
      'Produits écologiques'
    ]
  },
  'equipements-protection': {
    title: 'Équipements de Protection',
    description: 'Fourniture d\'équipements de protection individuelle et de matériel de sécurité professionnel.',
    features: [
      'EPI homologués',
      'Matériel de sécurité',
      'Équipements incendie',
      'Vêtements de travail',
      'Équipements spécialisés',
      'Conseil en équipement',
      'Stock permanent',
      'Livraison rapide'
    ]
  },
  'securite-incendie': {
    title: 'Sécurité Incendie',
    description: 'Solutions complètes de protection contre les incendies pour assurer la sécurité de vos locaux.',
    features: [
      'Détection incendie',
      'Installation d\'extincteurs',
      'Plans d\'évacuation',
      'Formation incendie',
      'Maintenance préventive',
      'Audit de sécurité',
      'Conformité aux normes',
      'Intervention 24/7'
    ]
  },
  'conseil-securite': {
    title: 'Conseil en Sécurité',
    description: 'Expertise professionnelle pour optimiser votre stratégie de sécurité.',
    features: [
      'Audits de sécurité',
      'Plans de sécurité',
      'Formation du personnel',
      'Évaluation des risques',
      'Conseil en conformité',
      'Gestion de crise',
      'Procédures de sécurité',
      'Accompagnement personnalisé'
    ]
  },
  'transport-valeurs': {
    title: 'Transport de Valeurs',
    description: 'Services sécurisés de transport de fonds et de valeurs avec des véhicules blindés.',
    features: [
      'Transport de fonds',
      'Convoyage sécurisé',
      'Véhicules blindés',
      'Équipes spécialisées',
      'Traçabilité GPS',
      'Assurance transport',
      'Solutions sur mesure',
      'Couverture nationale'
    ]
  }
};

const service = services[route.params.slug];

// Mise à jour des avantages avec des icônes
const advantages = [
  {
    title: "Expertise",
    description: "Plus de 5 ans d'expérience dans la sécurité professionnelle au Sénégal",
    icon: TrophyIcon
  },
  {
    title: "Service 24/7",
    description: "Une équipe disponible en permanence et une intervention rapide garantie",
    icon: ClockIcon
  },
  {
    title: "Qualité Certifiée",
    description: "Personnel hautement qualifié et équipements de dernière génération",
    icon: ShieldCheckIcon
  }
]
</script>

<style>
.backdrop-blur-sm {
  backdrop-filter: blur(8px);
}
</style>