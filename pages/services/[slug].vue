<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-50 to-white">
    <SEO 
      :title="service.title"
      :description="service.description"
      :image="service.image || '/images/og-image.jpg'"
    />
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
          <!-- Présentation détaillée -->
          <div class="mb-24">
            <div class="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 class="text-3xl font-bold text-[#111829] mb-6">
                    À propos de ce service
                    <div class="w-20 h-1 bg-[#23c55e] mt-4"></div>
                  </h2>
                  <div class="prose prose-lg max-w-none text-gray-700">
                    <p class="mb-4" v-html="service.detailedDescription"></p>
                    <p v-if="service.additionalInfo" v-html="service.additionalInfo"></p>
                  </div>
                  
                  <div v-if="service.keyPoints" class="mt-8">
                    <h3 class="text-xl font-semibold text-[#111829] mb-4">Points clés</h3>
                    <ul class="space-y-3">
                      <li v-for="point in service.keyPoints" :key="point" class="flex items-start">
                        <CheckCircleIcon class="w-6 h-6 text-[#23c55e] shrink-0 mr-3 mt-0.5" />
                        <span class="text-gray-700">{{ point }}</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="relative rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    :src="service.image || `/images/services/${route.params.slug}.jpg`" 
                    :alt="service.title" 
                    class="w-full h-full object-cover"
                    onerror="this.src='/images/services/default-service.jpg'"
                  />
                </div>
              </div>
            </div>
          </div>
          
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

          <!-- Processus -->
          <div v-if="service.process" class="mb-24">
            <h2 class="text-3xl font-bold text-[#111829] text-center mb-16">
              Notre Processus
              <div class="w-20 h-1 bg-[#23c55e] mx-auto mt-4"></div>
            </h2>
            
            <div class="relative">
              <div class="absolute top-1/2 left-0 right-0 h-0.5 bg-[#23c55e]/20 -translate-y-1/2 hidden md:block"></div>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div 
                  v-for="(step, index) in service.process"
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

          <!-- Secteurs d'application -->
          <div v-if="service.sectors" class="mb-24">
            <h2 class="text-3xl font-bold text-[#111829] text-center mb-16">
              Secteurs d'Application
              <div class="w-20 h-1 bg-[#23c55e] mx-auto mt-4"></div>
            </h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div 
                v-for="(sector, index) in service.sectors" 
                :key="sector.name"
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
                class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <component :is="sector.icon" class="w-12 h-12 text-[#23c55e] mb-6" />
                <h3 class="text-xl font-semibold text-[#111829] mb-4">{{ sector.name }}</h3>
                <p class="text-gray-600">{{ sector.description }}</p>
              </div>
            </div>
          </div>

          <!-- FAQ spécifique au service -->
          <div v-if="serviceFaq.length > 0" class="mb-24">
            <h2 class="text-3xl font-bold text-[#111829] text-center mb-16">
              Questions Fréquentes
              <div class="w-20 h-1 bg-[#23c55e] mx-auto mt-4"></div>
            </h2>
            
            <div class="max-w-3xl mx-auto">
              <div v-for="(item, index) in serviceFaq" :key="index"
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

          <!-- Avantages -->
          <div class="bg-[#111829] rounded-3xl p-12 relative overflow-hidden mb-24">
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
          <div class="text-center">
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
import { 
  ArrowRightIcon, 
  CheckIcon, 
  TrophyIcon, 
  ClockIcon, 
  ShieldCheckIcon, 
  CheckCircleIcon,
  BuildingOfficeIcon,
  HomeIcon,
  ShoppingBagIcon,
  BriefcaseIcon,
  UserGroupIcon,
  AcademicCapIcon,
  FireIcon,
  TruckIcon
} from '@heroicons/vue/24/solid'
import { ref, computed } from 'vue'

const route = useRoute();

// Services enrichis avec plus de détails
const services = {
  'surveillance-gardiennage': {
    title: 'Surveillance & Gardiennage',
    description: 'PROSEN assure votre sécurité 24h/24 et 7j/7 avec des professionnels hautement qualifiés et des solutions adaptées à vos besoins spécifiques.',
    detailedDescription: 'Notre service de surveillance et gardiennage offre une protection optimale pour vos locaux et vos biens. Nos agents de sécurité, rigoureusement sélectionnés et formés, veillent en permanence sur votre site pour prévenir les intrusions, les vols et tout type d\'incident.',
    additionalInfo: 'PROSEN dispose d\'une équipe mobile d\'intervention rapide prête à se déployer en cas d\'urgence. Nous adaptons nos services à vos exigences spécifiques et établissons des protocoles de sécurité sur mesure pour chaque client.',
    keyPoints: [
      'Protection 24h/24 et 7j/7',
      'Personnel formé et certifié',
      'Intervention rapide en cas d\'urgence',
      'Rapports de surveillance détaillés',
      'Solutions adaptées à tous types de sites'
    ],
    features: [
      'Agents de sécurité formés et certifiés',
      'Patrouilles mobiles régulières',
      'Maîtres-chiens professionnels',
      'Contrôle des accès',
      'Surveillance des sites sensibles',
      'Intervention sur alarme',
      'Rondes de sécurité',
      'Gestion des situations d\'urgence'
    ],
    process: [
      {
        title: 'Évaluation',
        description: 'Analyse détaillée de votre site et de vos besoins spécifiques'
      },
      {
        title: 'Planification',
        description: 'Élaboration d\'un plan de sécurité personnalisé'
      },
      {
        title: 'Déploiement',
        description: 'Mise en place des agents et des mesures de sécurité'
      }
    ],
    sectors: [
      {
        name: 'Bureaux et Commerces',
        description: 'Protection optimale pour les immeubles de bureaux et surfaces commerciales',
        icon: BuildingOfficeIcon
      },
      {
        name: 'Secteur Résidentiel',
        description: 'Sécurisation des résidences privées et des complexes résidentiels',
        icon: HomeIcon
      },
      {
        name: 'Sites Industriels',
        description: 'Surveillance spécialisée pour les zones industrielles et entrepôts',
        icon: BriefcaseIcon
      }
    ],
    faq: [
      {
        question: 'Quelles sont les qualifications de vos agents ?',
        answer: 'Tous nos agents sont rigoureusement sélectionnés, formés et certifiés selon les normes en vigueur. Ils bénéficient également de formations continues en techniques de surveillance, gestion des conflits et premiers secours.',
        isOpen: false
      },
      {
        question: 'Comment assurez-vous la continuité du service ?',
        answer: 'Notre système de roulement d\'équipes garantit une présence constante. En cas d\'absence imprévue, nous disposons d\'agents remplaçants prêts à intervenir rapidement pour assurer la continuité du service sans interruption.',
        isOpen: false
      },
      {
        question: 'Proposez-vous des solutions temporaires pour des événements ?',
        answer: 'Oui, nous offrons des services de sécurité temporaires pour tous types d\'événements : conférences, expositions, concerts, événements sportifs, etc. Nous adaptons notre dispositif en fonction de la nature et de l\'envergure de votre événement.',
        isOpen: false
      }
    ]
  },
  'securite-electronique': {
    title: 'Sécurité Électronique',
    description: 'Nos solutions de sécurité électronique utilisent les technologies les plus avancées pour assurer une protection optimale de vos locaux et de vos biens.',
    detailedDescription: 'Notre service de sécurité électronique propose des systèmes de haute technologie adaptés à vos besoins. De la vidéosurveillance au contrôle d\'accès, en passant par les alarmes anti-intrusion, nous concevons et installons des solutions complètes pour protéger efficacement vos locaux.',
    additionalInfo: 'Nos équipements sont sélectionnés parmi les meilleures marques du marché et nos techniciens sont formés aux dernières innovations. Nous assurons également la maintenance régulière de vos installations pour garantir leur bon fonctionnement dans la durée.',
    keyPoints: [
      'Systèmes personnalisés selon vos besoins',
      'Technologies de pointe',
      'Installation professionnelle',
      'Maintenance régulière',
      'Mise à niveau possible des systèmes existants'
    ],
    features: [
      'Systèmes de vidéosurveillance HD',
      'Contrôle d\'accès biométrique',
      'Alarmes anti-intrusion',
      'Détection périmétrique',
      'Télésurveillance 24/7',
      'Systèmes d\'interphonie',
      'Gestion centralisée',
      'Maintenance préventive'
    ],
    process: [
      {
        title: 'Audit',
        description: 'Analyse de votre site et évaluation de vos besoins spécifiques'
      },
      {
        title: 'Conception',
        description: 'Élaboration d\'une solution personnalisée et adaptée'
      },
      {
        title: 'Installation',
        description: 'Mise en place et configuration des équipements par nos techniciens'
      }
    ],
    sectors: [
      {
        name: 'Commerce & Distribution',
        description: 'Solutions de sécurité électronique adaptées aux magasins et centres commerciaux',
        icon: ShoppingBagIcon
      },
      {
        name: 'Banques & Finances',
        description: 'Systèmes de haute sécurité pour les établissements financiers',
        icon: BuildingOfficeIcon
      },
      {
        name: 'Résidences & Copropriétés',
        description: 'Protection électronique pour les espaces résidentiels collectifs et privés',
        icon: HomeIcon
      }
    ],
    faq: [
      {
        question: 'Quelle est la durée de vie moyenne de vos systèmes ?',
        answer: 'La durée de vie de nos systèmes varie selon les équipements, mais elle est généralement de 5 à 10 ans. Avec un entretien régulier, certains composants peuvent fonctionner plus longtemps. Nous proposons des contrats de maintenance pour optimiser la longévité de vos installations.',
        isOpen: false
      },
      {
        question: 'Vos systèmes sont-ils compatibles avec mes équipements existants ?',
        answer: 'Dans la plupart des cas, nous pouvons intégrer nos solutions à vos systèmes existants. Notre équipe technique évaluera vos installations actuelles et vous proposera les meilleures options d\'intégration ou de mise à niveau si nécessaire.',
        isOpen: false
      },
      {
        question: 'Proposez-vous une formation pour l\'utilisation des systèmes ?',
        answer: 'Oui, nous formons systématiquement vos équipes à l\'utilisation des systèmes installés. Des sessions de formation supplémentaires peuvent être organisées en cas de rotation du personnel ou pour approfondir certains aspects.',
        isOpen: false
      }
    ]
  },
  'protection-rapprochee': {
    title: 'Protection Rapprochée',
    description: 'Service de protection personnalisé assuré par des agents d\'élite pour garantir votre sécurité dans toutes les situations.',
    detailedDescription: 'Notre service de protection rapprochée est assuré par des agents d\'élite spécialement formés pour garantir la sécurité des personnalités, dirigeants d\'entreprise et VIP. Nous assurons une protection discrète mais efficace, adaptée à chaque situation et niveau de risque.',
    additionalInfo: 'Nos équipes réalisent en amont une analyse des risques et élaborent un plan de protection sur mesure. La discrétion, le professionnalisme et la réactivité sont au cœur de notre approche.',
    keyPoints: [
      'Agents d\'élite spécialement formés',
      'Évaluation préalable des risques',
      'Plans de protection personnalisés',
      'Discrétion et professionnalisme',
      'Couverture nationale et internationale'
    ],
    features: [
      'Gardes du corps qualifiés',
      'Escortes VIP',
      'Sécurité événementielle',
      'Protection lors des déplacements',
      'Évaluation des risques',
      'Plans de protection personnalisés',
      'Équipe d\'intervention rapide',
      'Formation en self-défense'
    ],
    process: [
      {
        title: 'Évaluation',
        description: 'Analyse des risques et des besoins spécifiques'
      },
      {
        title: 'Planification',
        description: 'Élaboration d\'un plan de protection adapté'
      },
      {
        title: 'Exécution',
        description: 'Mise en œuvre discrète et efficace du dispositif'
      }
    ],
    sectors: [
      {
        name: 'Personnalités & VIP',
        description: 'Protection discrète et professionnelle pour les personnalités publiques',
        icon: UserGroupIcon
      },
      {
        name: 'Entreprises & Dirigeants',
        description: 'Solutions de sécurité pour les dirigeants et cadres d\'entreprise',
        icon: BriefcaseIcon
      },
      {
        name: 'Événements Spéciaux',
        description: 'Dispositifs de protection pour conférences, cérémonies et événements privés',
        icon: AcademicCapIcon
      }
    ],
    faq: [
      {
        question: 'Comment sont sélectionnés vos agents de protection ?',
        answer: 'Nos agents de protection rapprochée sont rigoureusement sélectionnés, souvent issus des forces spéciales, de la police ou de l\'armée. Ils suivent une formation continue et spécialisée en protection rapprochée, gestion de crise, self-défense avancée et premiers secours.',
        isOpen: false
      },
      {
        question: 'Proposez-vous des services à l\'international ?',
        answer: 'Oui, nous pouvons assurer des missions de protection à l\'international. Notre équipe dispose des certifications nécessaires et travaille en collaboration avec des partenaires locaux pour garantir une protection optimale partout dans le monde.',
        isOpen: false
      },
      {
        question: 'Quelle est votre approche en cas de menace identifiée ?',
        answer: 'Notre protocole comprend une évaluation permanente des risques, des procédures d\'évacuation planifiées à l\'avance et une coordination avec les autorités locales si nécessaire. Nos agents sont formés pour réagir rapidement tout en maintenant le plus grand calme.',
        isOpen: false
      }
    ]
  },
  'nettoyage-professionnel': {
    title: 'Nettoyage Professionnel',
    description: 'Services de nettoyage complets pour maintenir vos locaux dans un état impeccable.',
    detailedDescription: 'Notre service de nettoyage professionnel répond aux exigences les plus strictes en matière d\'hygiène et de propreté. Nos équipes interviennent dans tous types de locaux pour assurer un environnement de travail sain et agréable.',
    additionalInfo: 'Nous utilisons des produits et des techniques respectueux de l\'environnement. Notre personnel est formé aux protocoles d\'hygiène spécifiques à chaque secteur d\'activité, notamment dans les environnements sensibles comme les établissements de santé.',
    keyPoints: [
      'Équipes formées et expérimentées',
      'Produits écologiques certifiés',
      'Interventions régulières ou ponctuelles',
      'Adaptation à vos horaires',
      'Respect des normes d\'hygiène'
    ],
    features: [
      'Nettoyage de bureaux',
      'Entretien industriel',
      'Désinfection des locaux',
      'Nettoyage des vitres',
      'Entretien des sols',
      'Nettoyage après chantier',
      'Services sur mesure',
      'Produits écologiques'
    ],
    process: [
      {
        title: 'Évaluation',
        description: 'Analyse de vos locaux et définition de vos besoins'
      },
      {
        title: 'Planification',
        description: 'Élaboration d\'un planning d\'intervention adapté'
      },
      {
        title: 'Exécution',
        description: 'Mise en œuvre des prestations par nos équipes qualifiées'
      }
    ],
    sectors: [
      {
        name: 'Bureaux & Administrations',
        description: 'Services de nettoyage adaptés aux espaces de travail et administrations',
        icon: BuildingOfficeIcon
      },
      {
        name: 'Commerces & Hôtellerie',
        description: 'Solutions de propreté pour les espaces commerciaux et hôteliers',
        icon: ShoppingBagIcon
      },
      {
        name: 'Industrie & Santé',
        description: 'Nettoyage spécialisé pour sites industriels et établissements de santé',
        icon: BriefcaseIcon
      }
    ],
    faq: [
      {
        question: 'Utilisez-vous des produits écologiques ?',
        answer: 'Oui, nous privilégions l\'utilisation de produits écologiques certifiés qui garantissent un nettoyage efficace tout en respectant l\'environnement et la santé des occupants. Nous pouvons adapter nos produits selon vos exigences spécifiques.',
        isOpen: false
      },
      {
        question: 'Pouvez-vous intervenir en dehors des heures de bureau ?',
        answer: 'Absolument, nous adaptons nos horaires d\'intervention à votre activité. Nos équipes peuvent intervenir tôt le matin, en soirée, la nuit ou le week-end afin de ne pas perturber votre activité professionnelle.',
        isOpen: false
      },
      {
        question: 'Proposez-vous des interventions ponctuelles ?',
        answer: 'Oui, nous proposons des interventions ponctuelles pour des besoins spécifiques comme le nettoyage après travaux, la remise en état de locaux, ou des événements particuliers. Nous établissons un devis adapté à chaque situation.',
        isOpen: false
      }
    ]
  },
  'equipements-protection': {
    title: 'Équipements de Protection',
    description: 'Fourniture d\'équipements de protection individuelle et de matériel de sécurité professionnel.',
    detailedDescription: 'PROSEN vous propose une gamme complète d\'équipements de protection individuelle (EPI) et de matériel de sécurité professionnel. Nous sélectionnons les meilleurs produits répondant aux normes en vigueur pour garantir la sécurité optimale de vos équipes et de vos installations.',
    additionalInfo: 'Notre équipe de conseillers vous accompagne dans la sélection des équipements adaptés à vos besoins spécifiques. Nous assurons également la formation à l\'utilisation correcte des EPI et proposons un service de maintenance pour certains équipements.',
    keyPoints: [
      'Équipements conformes aux normes',
      'Large gamme de produits',
      'Conseil personnalisé',
      'Stock permanent',
      'Livraison rapide'
    ],
    features: [
      'EPI homologués',
      'Matériel de sécurité',
      'Équipements incendie',
      'Vêtements de travail',
      'Équipements spécialisés',
      'Conseil en équipement',
      'Stock permanent',
      'Livraison rapide'
    ],
    process: [
      {
        title: 'Consultation',
        description: 'Analyse de vos besoins et des risques spécifiques'
      },
      {
        title: 'Sélection',
        description: 'Choix des équipements adaptés à votre activité'
      },
      {
        title: 'Livraison',
        description: 'Approvisionnement rapide et formation à l\'utilisation'
      }
    ],
    sectors: [
      {
        name: 'Construction & BTP',
        description: 'Équipements de protection pour les chantiers et travaux publics',
        icon: BriefcaseIcon
      },
      {
        name: 'Industrie & Manufacture',
        description: 'Solutions de protection adaptées aux environnements industriels',
        icon: BuildingOfficeIcon
      },
      {
        name: 'Sécurité & Gardiennage',
        description: 'Matériel professionnel pour les agents de sécurité',
        icon: ShieldCheckIcon
      }
    ],
    faq: [
      {
        question: 'Vos équipements sont-ils certifiés ?',
        answer: 'Oui, tous nos équipements sont certifiés et conformes aux normes de sécurité en vigueur. Nous fournissons systématiquement les certificats de conformité et les fiches techniques des produits.',
        isOpen: false
      },
      {
        question: 'Proposez-vous des équipements personnalisés ?',
        answer: 'Oui, nous pouvons personnaliser certains équipements, notamment les vêtements de travail, avec votre logo d\'entreprise. Nous proposons également des solutions sur mesure pour des besoins spécifiques.',
        isOpen: false
      },
      {
        question: 'Quel est le délai de livraison ?',
        answer: 'Pour les équipements en stock, la livraison s\'effectue généralement sous 24 à 48 heures. Pour les commandes spéciales ou les équipements personnalisés, le délai varie en fonction des spécificités mais nous vous communiquons toujours un calendrier précis.',
        isOpen: false
      }
    ]
  },
  'securite-evenementielle': {
    title: 'Sécurité Événementielle',
    description: 'Solutions de sécurité complètes pour vos événements : concerts, cérémonies, compétitions sportives et manifestations professionnelles.',
    detailedDescription: 'Notre service de sécurité événementielle assure la protection de tout type d\'événement, qu\'il s\'agisse de concerts, cérémonies, événements sportifs ou manifestations culturelles. Nous déployons des dispositifs adaptés à l\'envergure et à la nature de chaque événement.',
    additionalInfo: 'Nos équipes sont spécialement formées à la gestion des foules et aux procédures d\'évacuation d\'urgence. Nous travaillons en étroite collaboration avec les organisateurs et les autorités locales pour garantir le bon déroulement de votre événement.',
    keyPoints: [
      'Analyse préalable des risques',
      'Personnel qualifié et expérimenté',
      'Coordination avec les autorités',
      'Gestion des accès et contrôle des foules',
      'Dispositifs adaptés à tout type d\'événement'
    ],
    features: [
      'Sécurisation de concerts',
      'Protection de cérémonies officielles',
      'Sécurité d\'événements sportifs',
      'Contrôle d\'accès et fouilles',
      'Gestion des VIP',
      'Coordination PC sécurité',
      'Agents d\'accueil et d\'orientation',
      'Intervention d\'urgence'
    ],
    process: [
      {
        title: 'Évaluation',
        description: 'Analyse du site et des risques spécifiques à l\'événement'
      },
      {
        title: 'Planification',
        description: 'Élaboration d\'un dispositif de sécurité personnalisé'
      },
      {
        title: 'Déploiement',
        description: 'Mise en place des équipes et coordination sur site'
      }
    ],
    sectors: [
      {
        name: 'Événements Culturels',
        description: 'Concerts, festivals, expositions et événements culturels',
        icon: UserGroupIcon
      },
      {
        name: 'Événements Sportifs',
        description: 'Compétitions sportives, tournois et manifestations sportives',
        icon: BriefcaseIcon
      },
      {
        name: 'Cérémonies & Conférences',
        description: 'Cérémonies officielles, conférences et séminaires professionnels',
        icon: AcademicCapIcon
      }
    ],
    faq: [
      {
        question: 'Comment déterminez-vous le nombre d\'agents nécessaires ?',
        answer: 'Nous évaluons le nombre d\'agents en fonction de plusieurs critères : nombre de participants, type d\'événement, configuration du site, analyse des risques spécifiques et exigences réglementaires. Nous proposons toujours un dispositif optimal qui garantit la sécurité sans être surdimensionné.',
        isOpen: false
      },
      {
        question: 'Pouvez-vous gérer des événements de grande envergure ?',
        answer: 'Oui, nous avons l\'expertise et les ressources nécessaires pour sécuriser des événements de grande envergure. Nous pouvons mobiliser rapidement des équipes importantes et coordonner des dispositifs complexes en collaboration avec les autorités locales.',
        isOpen: false
      },
      {
        question: 'Proposez-vous des agents en tenue civile ?',
        answer: 'Oui, selon la nature de l\'événement, nous pouvons déployer des agents en tenue civile pour une présence discrète mais efficace, particulièrement adaptée aux événements VIP ou aux cérémonies officielles qui nécessitent de la discrétion.',
        isOpen: false
      }
    ]
  },
  'formations': {
    title: 'Formations',
    description: 'Programmes de formation professionnelle en sécurité et prévention des risques pour vos équipes.',
    detailedDescription: 'Notre centre de formation propose des programmes complets et certifiants dans les domaines de la sécurité, de la prévention incendie, du secourisme et de la gestion des risques. Nos formations sont dispensées par des professionnels expérimentés et adaptées à tous les niveaux.',
    additionalInfo: 'Toutes nos formations répondent aux exigences réglementaires en vigueur et peuvent être organisées dans vos locaux ou dans notre centre de formation équipé de matériel pédagogique performant.',
    keyPoints: [
      'Formations certifiantes reconnues',
      'Formateurs professionnels expérimentés',
      'Programmes adaptés à vos besoins spécifiques',
      'Formations pratiques et théoriques',
      'Suivi et évaluation des compétences'
    ],
    features: [
      'SSIAP 1, 2 et 3',
      'Manipulation d\'extincteurs',
      'Formation SST (Sauveteur Secouriste du Travail)',
      'Prévention incendie',
      'Évacuation et gestion de crise',
      'Habilitations électriques',
      'Gestion des risques professionnels',
      'Formations sur mesure'
    ],
    process: [
      {
        title: 'Identification',
        description: 'Analyse de vos besoins et définition des objectifs pédagogiques'
      },
      {
        title: 'Planification',
        description: 'Organisation des sessions et préparation du matériel pédagogique'
      },
      {
        title: 'Formation',
        description: 'Dispensation du programme par nos formateurs certifiés'
      }
    ],
    sectors: [
      {
        name: 'Sécurité Incendie',
        description: 'Formations SSIAP, manipulation d\'extincteurs et évacuation',
        icon: FireIcon
      },
      {
        name: 'Secourisme',
        description: 'Formations aux premiers secours et SST en milieu professionnel',
        icon: ShieldCheckIcon
      },
      {
        name: 'Prévention des Risques',
        description: 'Gestion des risques professionnels et habilitations spécifiques',
        icon: AcademicCapIcon
      }
    ],
    faq: [
      {
        question: 'Vos formations sont-elles certifiantes ?',
        answer: 'Oui, nos formations débouchent sur des certifications reconnues officiellement. Nous sommes agréés pour délivrer des attestations et certificats conformes aux réglementations en vigueur dans chaque domaine de formation.',
        isOpen: false
      },
      {
        question: 'Quelle est la durée moyenne d\'une formation ?',
        answer: 'La durée varie selon le type de formation : de quelques heures pour une initiation à la manipulation d\'extincteurs, à plusieurs semaines pour les formations SSIAP. Nous proposons également des cycles de formation adaptés à vos contraintes organisationnelles.',
        isOpen: false
      },
      {
        question: 'Peut-on organiser des formations dans nos locaux ?',
        answer: 'Absolument, nous proposons des formations intra-entreprise directement dans vos locaux, avec tout le matériel pédagogique nécessaire. Cette formule permet de former plusieurs collaborateurs simultanément et d\'adapter le contenu à votre environnement spécifique.',
        isOpen: false
      }
    ]
  },
  'securite-incendie': {
    title: 'Sécurité Incendie',
    description: 'Solutions complètes de protection contre les incendies pour assurer la sécurité de vos locaux.',
    detailedDescription: 'Notre service de sécurité incendie propose des solutions complètes pour protéger vos locaux et votre personnel contre les risques d\'incendie. De l\'installation des systèmes de détection à la formation de vos équipes, nous assurons une protection optimale conforme aux réglementations en vigueur.',
    additionalInfo: 'Nos experts réalisent des audits de sécurité pour identifier les risques potentiels et proposer des mesures adaptées. Nous assurons également la maintenance régulière de vos équipements pour garantir leur bon fonctionnement en cas d\'urgence.',
    keyPoints: [
      'Solutions conformes aux normes',
      'Équipements de qualité professionnelle',
      'Formation du personnel',
      'Maintenance préventive',
      'Intervention rapide'
    ],
    features: [
      'Détection incendie',
      'Installation d\'extincteurs',
      'Plans d\'évacuation',
      'Formation incendie',
      'Maintenance préventive',
      'Audit de sécurité',
      'Conformité aux normes',
      'Intervention 24/7'
    ],
    process: [
      {
        title: 'Audit',
        description: 'Évaluation des risques et vérification de la conformité'
      },
      {
        title: 'Installation',
        description: 'Mise en place des équipements et systèmes nécessaires'
      },
      {
        title: 'Formation',
        description: 'Sensibilisation et formation du personnel aux risques incendie'
      }
    ],
    sectors: [
      {
        name: 'ERP & IGH',
        description: 'Solutions spécifiques pour établissements recevant du public et immeubles de grande hauteur',
        icon: BuildingOfficeIcon
      },
      {
        name: 'Industrie & Entrepôts',
        description: 'Protection adaptée aux risques spécifiques des sites industriels',
        icon: BriefcaseIcon
      },
      {
        name: 'Hôtellerie & Restauration',
        description: 'Systèmes conformes aux réglementations du secteur hôtelier',
        icon: HomeIcon
      }
    ],
    faq: [
      {
        question: 'Quelle est la fréquence recommandée pour la vérification des équipements ?',
        answer: 'La réglementation impose une vérification annuelle des équipements de sécurité incendie. Cependant, nous recommandons des contrôles semestriels pour garantir un niveau optimal de sécurité et assurer le bon fonctionnement de tous les dispositifs.',
        isOpen: false
      },
      {
        question: 'Proposez-vous des formations pour nos équipes ?',
        answer: 'Oui, nous dispensons des formations adaptées à votre activité : utilisation des extincteurs, évacuation, gestion des situations d\'urgence. Ces formations peuvent être organisées dans vos locaux et adaptées à vos contraintes d\'organisation.',
        isOpen: false
      },
      {
        question: 'Comment se déroule un audit de sécurité incendie ?',
        answer: 'L\'audit comprend l\'inspection des locaux, la vérification des équipements existants, l\'analyse des risques spécifiques à votre activité et l\'évaluation de la conformité aux réglementations en vigueur. Un rapport détaillé avec recommandations vous est ensuite présenté.',
        isOpen: false
      }
    ]
  },
  'conseil-securite': {
    title: 'Conseil en Sécurité',
    description: 'Expertise professionnelle pour optimiser votre stratégie de sécurité.',
    detailedDescription: 'Notre service de conseil en sécurité vous accompagne dans l\'élaboration et l\'optimisation de votre stratégie de protection. Nos experts analysent vos vulnérabilités, évaluent les risques et vous proposent des solutions adaptées à votre contexte spécifique.',
    additionalInfo: 'Nous intervenons aussi bien en amont pour la conception de systèmes de sécurité qu\'en phase d\'audit pour améliorer vos dispositifs existants. Notre approche est globale et prend en compte l\'ensemble des facteurs humains, techniques et organisationnels.',
    keyPoints: [
      'Expertise multidisciplinaire',
      'Analyse de risques approfondie',
      'Recommandations personnalisées',
      'Suivi de mise en œuvre',
      'Veille réglementaire'
    ],
    features: [
      'Audits de sécurité',
      'Plans de sécurité',
      'Formation du personnel',
      'Évaluation des risques',
      'Conseil en conformité',
      'Gestion de crise',
      'Procédures de sécurité',
      'Accompagnement personnalisé'
    ],
    process: [
      {
        title: 'Diagnostic',
        description: 'Analyse approfondie de votre situation et identification des risques'
      },
      {
        title: 'Recommandations',
        description: 'Élaboration de solutions adaptées à vos enjeux spécifiques'
      },
      {
        title: 'Accompagnement',
        description: 'Suivi de la mise en œuvre et ajustements si nécessaire'
      }
    ],
    sectors: [
      {
        name: 'Entreprises & Organisations',
        description: 'Conseil stratégique pour la sécurité globale des organisations',
        icon: BriefcaseIcon
      },
      {
        name: 'Événements & Manifestations',
        description: 'Expertise pour la sécurisation d\'événements publics et privés',
        icon: UserGroupIcon
      },
      {
        name: 'Sites Sensibles',
        description: 'Solutions spécifiques pour les infrastructures critiques',
        icon: BuildingOfficeIcon
      }
    ],
    faq: [
      {
        question: 'Quelle est votre approche méthodologique ?',
        answer: 'Notre méthodologie repose sur une approche systémique qui prend en compte tous les aspects de la sécurité : humain, organisationnel, technique et environnemental. Nous commençons par une phase d\'audit approfondie avant de proposer des recommandations adaptées à votre contexte spécifique.',
        isOpen: false
      },
      {
        question: 'Comment garantissez-vous la confidentialité des informations ?',
        answer: 'Nous signons systématiquement des accords de confidentialité avant toute mission. Nos consultants sont formés à la gestion des informations sensibles et nous disposons de protocoles stricts concernant le stockage et le partage des données.',
        isOpen: false
      },
      {
        question: 'Quel est le délai moyen pour réaliser un audit complet ?',
        answer: 'La durée d\'un audit varie selon la taille et la complexité de votre organisation, généralement entre 2 et 4 semaines. Le rapport final est généralement remis dans les 10 jours suivant la fin de la phase d\'audit sur site.',
        isOpen: false
      }
    ]
  },
  'transport-valeurs': {
    title: 'Transport de Valeurs',
    description: 'Services sécurisés de transport de fonds et de valeurs avec des véhicules blindés.',
    detailedDescription: 'Notre service de transport de valeurs assure l\'acheminement sécurisé de vos fonds, documents sensibles et objets de valeur. Nous disposons de véhicules blindés et d\'équipes hautement qualifiées pour garantir la sécurité maximale de vos biens durant le transport.',
    additionalInfo: 'Chaque mission fait l\'objet d\'une planification rigoureuse avec analyse des itinéraires et des risques potentiels. Nos équipes sont formées aux procédures d\'urgence et nos véhicules sont équipés des technologies de sécurité les plus avancées.',
    keyPoints: [
      'Véhicules blindés spécialisés',
      'Personnel armé et formé',
      'Planification sécurisée des itinéraires',
      'Traçabilité en temps réel',
      'Assurance spécifique'
    ],
    features: [
      'Transport de fonds',
      'Convoyage sécurisé',
      'Véhicules blindés',
      'Équipes spécialisées',
      'Traçabilité GPS',
      'Assurance transport',
      'Solutions sur mesure',
      'Couverture nationale'
    ],
    process: [
      {
        title: 'Préparation',
        description: 'Planification minutieuse et analyse de risques'
      },
      {
        title: 'Exécution',
        description: 'Transport sécurisé par des équipes spécialisées'
      },
      {
        title: 'Confirmation',
        description: 'Suivi et confirmation de livraison'
      }
    ],
    sectors: [
      {
        name: 'Secteur Bancaire',
        description: 'Solutions de transport sécurisé pour les établissements financiers',
        icon: BuildingOfficeIcon
      },
      {
        name: 'Commerce & Distribution',
        description: 'Services adaptés aux besoins des grandes surfaces et commerces',
        icon: ShoppingBagIcon
      },
      {
        name: 'Institutions & Administrations',
        description: 'Transport de valeurs pour les organismes publics et institutions',
        icon: BriefcaseIcon
      }
    ],
    faq: [
      {
        question: 'Quelles mesures de sécurité sont mises en place ?',
        answer: 'Nos véhicules blindés sont équipés de systèmes de géolocalisation, de communication sécurisée et d\'alarmes. Les équipes sont formées aux procédures d\'urgence et composées d\'agents armés. Chaque mission fait l\'objet d\'une planification spécifique avec analyse de risques.',
        isOpen: false
      },
      {
        question: 'Quel type de valeurs pouvez-vous transporter ?',
        answer: 'Nous transportons des espèces, des bijoux, des métaux précieux, des œuvres d\'art, des documents confidentiels et autres objets de valeur. Chaque type de valeur bénéficie d\'un protocole de sécurité adapté à ses spécificités.',
        isOpen: false
      },
      {
        question: 'Proposez-vous des services réguliers ?',
        answer: 'Oui, nous proposons des services réguliers programmés selon vos besoins, par exemple des collectes hebdomadaires ou mensuelles. Nous établissons un planning précis tout en variant les horaires et itinéraires pour renforcer la sécurité.',
        isOpen: false
      }
    ]
  }
};

const service = services[route.params.slug] || {
  title: 'Service non trouvé',
  description: 'Le service que vous recherchez n\'est pas disponible.'
};

// Création d'une copie réactive des FAQs
const serviceFaq = ref(service.faq ? service.faq.map(item => ({
  ...item,
  isOpen: false
})) : []);

// Fonction pour toggler l'état d'ouverture d'une FAQ
function toggleFaq(index) {
  serviceFaq.value[index].isOpen = !serviceFaq.value[index].isOpen;
}

const advantages = [
  {
    title: 'Expérience',
    description: 'Plus de 10 ans d\'expérience dans le domaine de la sécurité',
    icon: TrophyIcon
  },
  {
    title: 'Réactivité',
    description: 'Intervention rapide en cas d\'urgence',
    icon: ClockIcon
  },
  {
    title: 'Sécurité',
    description: 'Solutions de sécurité adaptées à vos besoins spécifiques',
    icon: ShieldCheckIcon
  }
];
</script>

<style>
.backdrop-blur-sm {
  backdrop-filter: blur(8px);
}
</style>