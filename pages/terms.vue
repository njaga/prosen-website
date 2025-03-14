<template>
  <div>
    <SEO 
      title="Conditions Générales"
      description="Conditions générales d'utilisation des services PROSEN. Consultez nos termes et conditions."
    />
    <div>
        <!-- Hero Section -->
        <section
            class="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-[#111829] via-[#1a2436] to-[#23c55e]/20">
            <div class="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10"></div>
            <div class="absolute inset-0 bg-gradient-to-t from-[#111829] to-transparent"></div>
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div class="text-center space-y-6">
                    <div
                        class="inline-flex items-center justify-center p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                        <DocumentTextIcon class="w-10 h-10 text-[#23c55e]" />
                    </div>
                    <h1 class="text-4xl md:text-5xl font-bold text-white">Conditions Générales</h1>
                    <p class="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        Les règles qui encadrent l'utilisation de nos services
                    </p>
                </div>
            </div>
        </section>

        <!-- Navigation -->
        <nav class="sticky top-20 z-40 bg-white/90 backdrop-blur-md border-b border-gray-200">
            <div class="max-w-7xl mx-auto">
                <div class="flex justify-center space-x-8 overflow-x-auto scrollbar-hide px-4">
                    <a v-for="section in sections" :key="section.id" :href="`#${section.id}`"
                        class="py-4 px-2 border-b-2 border-transparent hover:border-[#23c55e] text-gray-600 hover:text-[#23c55e] transition-colors whitespace-nowrap text-sm font-medium">
                        <div class="flex items-center space-x-2">
                            <component :is="section.icon" class="w-5 h-5" />
                            <span>{{ section.title }}</span>
                        </div>
                    </a>
                </div>
            </div>
        </nav>

        <!-- Contenu principal -->
        <div class="py-16 bg-gradient-to-b from-gray-50 to-white">
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <!-- Sections de contenu avec espace entre les cartes -->
                <div class="space-y-8">
                    <div v-for="(section, index) in sections" 
                         :key="section.id" 
                         :id="section.id" 
                         class="scroll-mt-24 bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
                        <!-- En-tête de section -->
                        <div class="flex items-center space-x-4 mb-8">
                            <div class="p-3 bg-[#23c55e]/10 rounded-xl">
                                <component :is="section.icon" class="w-8 h-8 text-[#23c55e]" />
                            </div>
                            <div>
                                <h2 class="text-2xl font-bold text-[#111829]">{{ section.title }}</h2>
                                <p class="text-gray-500 mt-1">{{ section.subtitle }}</p>
                            </div>
                        </div>

                        <!-- Contenu de la section avec plus d'espacement -->
                        <div class="space-y-6">
                            <div class="bg-gray-50/50 rounded-xl p-8 border border-gray-100">
                                <div class="prose prose-lg max-w-none">
                                    <p class="text-gray-600 mb-6">{{ section.description }}</p>
                                    
                                    <!-- Liste des éléments -->
                                    <div class="space-y-6">
                                        <div v-for="(item, itemIndex) in section.items" 
                                             :key="itemIndex"
                                             class="bg-white rounded-xl p-6 border border-gray-100">
                                            <div class="flex items-start">
                                                <CheckCircleIcon class="w-5 h-5 text-[#23c55e] mr-3 mt-1 flex-shrink-0" />
                                                <div>
                                                    <h3 class="text-lg font-semibold text-[#111829] mb-2">{{ item.title }}</h3>
                                                    <p class="text-gray-600">{{ item.description }}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Remplacer la section KAMIT -->
        <section class="py-16 bg-gradient-to-br from-[#111829] to-[#1a2436] relative overflow-hidden">
            <div class="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5"></div>
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div class="text-center mb-12">
                    <div
                        class="inline-flex items-center justify-center p-3 bg-white/10 backdrop-blur-md rounded-xl mb-4">
                        <img src="/images/kamit-logo-white.png" alt="KAMIT Logo" class="h-8 w-auto" />
                    </div>
                    <h2 class="text-2xl font-bold text-white">Développé par KAMIT</h2>
                    <p class="text-gray-400 mt-2">
                        Votre partenaire expert en transformation digitale
                    </p>
                </div>

                <div class="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 class="text-xl font-semibold text-white mb-6">Nos Services</h3>
                            <div class="grid grid-cols-2 gap-4">
                                <div class="flex items-center text-gray-300">
                                    <CommandLineIcon class="w-5 h-5 text-[#23c55e] mr-2" />
                                    <span>Applications Web</span>
                                </div>
                                <div class="flex items-center text-gray-300">
                                    <DevicePhoneMobileIcon class="w-5 h-5 text-[#23c55e] mr-2" />
                                    <span>Applications Mobiles</span>
                                </div>
                                <div class="flex items
                                -center text-gray-300">
                                    <GlobeAltIcon class="w-5 h-5 text-[#23c55e] mr-2" />
                                    <span>Sites web</span>
                                </div>
                                <div class="flex items
                                -center text-gray-300">
                                    <CurrencyDollarIcon class="w-5 h-5 text-[#23c55e] mr-2" />
                                    <span>Marketing Digital</span>
                                </div>
                                <div class="flex items-center text-gray-300">
                                    <CloudArrowUpIcon class="w-5 h-5 text-[#23c55e] mr-2" />
                                    <span>Solutions Cloud</span>
                                </div>
                                <div class="flex items-center text-gray-300">
                                    <ComputerDesktopIcon class="w-5 h-5 text-[#23c55e] mr-2" />
                                    <span>Infogérance</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 class="text-xl font-semibold text-white mb-6">Contact KAMIT</h3>
                            <div class="space-y-4">
                                <a href="tel:+221761291336"
                                    class="flex items-center text-gray-300 hover:text-[#23c55e] transition-colors">
                                    <PhoneIcon class="w-5 h-5 mr-3" />
                                    <span>+221 76 129 13 36</span>
                                </a>
                                <a href="mailto:hello@kamit.tech"
                                    class="flex items-center text-gray-300 hover:text-[#23c55e] transition-colors">
                                    <EnvelopeIcon class="w-5 h-5 mr-3" />
                                    <span>hello@kamit.tech</span>
                                </a>
                                <a href="https://kamit.tech" target="_blank" rel="noopener noreferrer"
                                    class="flex items-center text-gray-300 hover:text-[#23c55e] transition-colors">
                                    <GlobeAltIcon class="w-5 h-5 mr-3" />
                                    <span>www.kamit.tech</span>
                                </a>
                                <div class="flex items-center text-gray-300">
                                    <MapPinIcon class="w-5 h-5 mr-3" />
                                    <span>Saly Portudal, Mbour Sénégal</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  </div>
</template>

<script setup>
import {
    DocumentTextIcon,
    CheckCircleIcon,
    PhoneIcon,
    EnvelopeIcon,
    MapPinIcon,
    CogIcon,
    UserIcon,
    CommandLineIcon,
    DevicePhoneMobileIcon,
    CloudArrowUpIcon,
    ComputerDesktopIcon,
    GlobeAltIcon,
    CurrencyDollarIcon
} from '@heroicons/vue/24/solid'

// Sections avec sous-titres ajoutés
const sections = [
    {
        id: 'definitions',
        title: 'Définitions',
        subtitle: 'Termes utilisés dans ce document',
        icon: DocumentTextIcon,
        description: 'Dans les présentes conditions générales, les termes suivants ont les significations suivantes :',
        items: [
            {
                title: 'PROSEN',
                description: 'Désigne la société PROSEN SARL, société de droit sénégalais, immatriculée au RCCM sous le numéro SN DKR 2015 8 23592, dont le siège social est situé à Immeuble Ellipse, Point E, Dakar, Sénégal.'
            },
            {
                title: 'Services',
                description: 'Désigne l\'ensemble des prestations de sécurité professionnelle proposées par PROSEN.'
            },
            {
                title: 'Client',
                description: 'Désigne toute personne physique ou morale qui contracte avec PROSEN pour la fourniture de services.'
            }
        ]
    },
    {
        id: 'services',
        title: 'Services',
        subtitle: 'Nos prestations de sécurité',
        icon: CogIcon,
        description: 'PROSEN propose les services suivants :',
        items: [
            {
                title: 'Sécurité professionnelle',
                description: 'Services de sécurité et de protection adaptés aux besoins spécifiques de chaque client.'
            },
            {
                title: 'Solutions sur mesure',
                description: 'Conception et mise en œuvre de solutions de sécurité personnalisées.'
            }
        ]
    },
    {
        id: 'commandes',
        title: 'Commandes',
        subtitle: 'Processus et conditions',
        icon: DocumentTextIcon,
        description: 'Processus de commande et conditions d\'exécution :',
        items: [
            {
                title: 'Devis',
                description: 'Tout engagement fait l\'objet d\'un devis détaillé préalable.'
            },
            {
                title: 'Validation',
                description: 'La commande n\'est définitive qu\'après acceptation écrite du devis par le client.'
            }
        ]
    },
    {
        id: 'responsabilite',
        title: 'Responsabilité',
        subtitle: 'Nos engagements',
        icon: UserIcon,
        description: '',
        items: [
            {
                title: 'Engagement',
                description: 'PROSEN s\'engage à exécuter ses prestations avec diligence et selon les règles de l\'art.'
            },
            {
                title: 'Assurance',
                description: 'PROSEN dispose des assurances nécessaires à la couverture de sa responsabilité civile.'
            }
        ]
    },
    {
        id: 'contact',
        title: 'Contact',
        subtitle: 'Pour nous joindre',
        icon: PhoneIcon,
        description: 'Pour toute question ou réclamation, vous pouvez nous contacter :',
        items: [
            {
                title: 'Téléphone',
                description: '+221 33 843 46 33'
            },
            {
                title: 'Email',
                description: 'contact@prosen.sn'
            },
            {
                title: 'Adresse',
                description: 'Immeuble Ellipse, Point E, Dakar, Sénégal'
            }
        ]
    },
    {
        id: 'cgu',
        title: 'Conditions d\'Utilisation',
        subtitle: 'Règles d\'utilisation du site',
        icon: DocumentTextIcon,
        description: 'Les présentes conditions régissent l\'utilisation de notre site web :',
        items: [
            {
                title: 'Acceptation des conditions',
                description: 'En accédant et en utilisant le site web de PROSEN, vous acceptez d\'être lié par les présentes conditions d\'utilisation. Si vous n\'acceptez pas ces conditions, veuillez ne pas utiliser le site.'
            },
            {
                title: 'Propriété intellectuelle',
                description: 'L\'ensemble du contenu de ce site (textes, images, vidéos, etc.) est protégé par les lois relatives à la propriété intellectuelle. Toute reproduction ou représentation, totale ou partielle, est interdite sans autorisation préalable.'
            },
            {
                title: 'Liens externes',
                description: 'Le site peut contenir des liens vers d\'autres sites. PROSEN n\'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.'
            },
            {
                title: 'Limitation de responsabilité',
                description: 'PROSEN s\'efforce d\'assurer l\'exactitude des informations diffusées sur ce site mais ne peut garantir qu\'elles soient exemptes d\'erreurs. Le site peut être modifié sans préavis.'
            },
            {
                title: 'Droit applicable',
                description: 'Les présentes conditions sont régies par le droit sénégalais. En cas de litige, les tribunaux sénégalais seront seuls compétents.'
            }
        ]
    },
    {
        id: 'cgv',
        title: 'Conditions de Vente',
        subtitle: 'Modalités de nos prestations',
        icon: CurrencyDollarIcon,
        description: 'Les présentes conditions générales de vente s\'appliquent à toutes nos prestations :',
        items: [
            {
                title: 'Sécurité physique',
                description: 'Gardiennage, surveillance, protection des biens et des personnes.'
            },
            {
                title: 'Sécurité électronique',
                description: 'Systèmes d\'alarme, vidéosurveillance et solutions de contrôle d\'accès.'
            },
            {
                title: 'Sécurité incendie',
                description: 'Détection, extinction et prévention des risques d\'incendie.'
            },
            {
                title: 'Formation',
                description: 'Formation en sécurité et premiers secours, mise à niveau des compétences.'
            },
            {
                title: 'Modalités de paiement',
                description: 'Acompte de 30% à la commande pour les services de sécurité physique. Acompte de 60% pour les formations et installations. Solde à la livraison.'
            },
            {
                title: 'Durée et résiliation',
                description: 'Le contrat est conclu pour la durée spécifiée dans le devis. Résiliation avec préavis de 2 mois par lettre recommandée.'
            }
        ]
    }
]
</script>

<style>
.scrollbar-hide::-webkit-scrollbar {
    display: none;
}

.scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>