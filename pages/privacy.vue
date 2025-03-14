<template>
  <div>
    <SEO 
      title="Politique de Confidentialité"
      description="Politique de confidentialité de PROSEN. Découvrez comment nous protégeons vos données personnelles."
    />
    <div>
        <!-- Hero Section -->
        <section class="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-[#111829] via-[#1a2436] to-[#23c55e]/20">
            <div class="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10"></div>
            <div class="absolute inset-0 bg-gradient-to-t from-[#111829] to-transparent"></div>
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div class="text-center space-y-6">
                    <div class="inline-flex items-center justify-center p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                        <LockClosedIcon class="w-10 h-10 text-[#23c55e]" />
                    </div>
                    <h1 class="text-4xl md:text-5xl font-bold text-white">Protection de vos Données</h1>
                    <p class="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        Nous accordons une grande importance à la protection et à la confidentialité de vos informations personnelles
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
                <!-- Introduction -->
                <div id="introduction" class="scroll-mt-24 bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 space-y-16 mb-8">
                    <div class="flex items-center space-x-4 mb-8">
                        <div class="p-3 bg-[#23c55e]/10 rounded-xl">
                            <DocumentTextIcon class="w-8 h-8 text-[#23c55e]" />
                        </div>
                        <div>
                            <h2 class="text-2xl font-bold text-[#111829]">Notre Engagement</h2>
                            <p class="text-gray-500 mt-1">Transparence et protection de vos données</p>
                        </div>
                    </div>

                    <div class="prose prose-lg max-w-none text-gray-600">
                        <p class="mb-4">Chez Prosen, la protection de vos données personnelles est une priorité. Nous nous engageons à :</p>
                        <ul class="space-y-2">
                            <li class="flex items-start">
                                <CheckCircleIcon class="w-5 h-5 text-[#23c55e] mr-3 mt-1 flex-shrink-0" />
                                <span>Collecter uniquement les données nécessaires</span>
                            </li>
                            <li class="flex items-start">
                                <CheckCircleIcon class="w-5 h-5 text-[#23c55e] mr-3 mt-1 flex-shrink-0" />
                                <span>Les utiliser de manière transparente</span>
                            </li>
                            <li class="flex items-start">
                                <CheckCircleIcon class="w-5 h-5 text-[#23c55e] mr-3 mt-1 flex-shrink-0" />
                                <span>Les protéger efficacement</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- Données collectées -->
                <div id="donnees" class="scroll-mt-24 bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 mb-8">
                    <div class="flex items-center space-x-4 mb-8">
                        <div class="p-3 bg-[#23c55e]/10 rounded-xl">
                            <UserIcon class="w-8 h-8 text-[#23c55e]" />
                        </div>
                        <div>
                            <h2 class="text-2xl font-bold text-[#111829]">Données Collectées</h2>
                            <p class="text-gray-500 mt-1">Les informations dont nous avons besoin</p>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="bg-gray-50/50 rounded-xl p-6 border border-gray-100 hover:bg-gray-50 transition-colors">
                            <h3 class="text-lg font-semibold text-[#111829] mb-4">Informations Personnelles</h3>
                            <ul class="space-y-2">
                                <li class="flex items-start">
                                    <CheckCircleIcon class="w-5 h-5 text-[#23c55e] mr-3 mt-1 flex-shrink-0" />
                                    <span>Nom et prénom</span>
                                </li>
                                <li class="flex items-start">
                                    <CheckCircleIcon class="w-5 h-5 text-[#23c55e] mr-3 mt-1 flex-shrink-0" />
                                    <span>Email professionnel</span>
                                </li>
                                <li class="flex items-start">
                                    <CheckCircleIcon class="w-5 h-5 text-[#23c55e] mr-3 mt-1 flex-shrink-0" />
                                    <span>Téléphone</span>
                                </li>
                            </ul>
                        </div>

                        <div class="bg-gray-50/50 rounded-xl p-6 border border-gray-100 hover:bg-gray-50 transition-colors">
                            <h3 class="text-lg font-semibold text-[#111829] mb-4">Données Techniques</h3>
                            <ul class="space-y-2">
                                <li class="flex items-start">
                                    <CheckCircleIcon class="w-5 h-5 text-[#23c55e] mr-3 mt-1 flex-shrink-0" />
                                    <span>Cookies essentiels</span>
                                </li>
                                <li class="flex items-start">
                                    <CheckCircleIcon class="w-5 h-5 text-[#23c55e] mr-3 mt-1 flex-shrink-0" />
                                    <span>Préférences de navigation</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Utilisation -->
                <div id="utilisation" class="scroll-mt-24 bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 mb-8">
                    <div class="flex items-center space-x-4 mb-8">
                        <div class="p-3 bg-[#23c55e]/10 rounded-xl">
                            <CogIcon class="w-8 h-8 text-[#23c55e]" />
                        </div>
                        <div>
                            <h2 class="text-2xl font-bold text-[#111829]">Utilisation</h2>
                            <p class="text-gray-500 mt-1">Comment nous utilisons vos données</p>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="bg-gray-50/50 rounded-xl p-6 border border-gray-100 hover:bg-gray-50 transition-colors">
                            <h3 class="text-lg font-semibold text-[#111829] mb-4">Services</h3>
                            <ul class="space-y-2">
                                <li class="flex items-start">
                                    <CheckCircleIcon class="w-5 h-5 text-[#23c55e] mr-3 mt-1 flex-shrink-0" />
                                    <span>Fourniture de nos services</span>
                                </li>
                                <li class="flex items-start">
                                    <CheckCircleIcon class="w-5 h-5 text-[#23c55e] mr-3 mt-1 flex-shrink-0" />
                                    <span>Support client</span>
                                </li>
                            </ul>
                        </div>

                        <div class="bg-gray-50/50 rounded-xl p-6 border border-gray-100 hover:bg-gray-50 transition-colors">
                            <h3 class="text-lg font-semibold text-[#111829] mb-4">Communication</h3>
                            <ul class="space-y-2">
                                <li class="flex items-start">
                                    <CheckCircleIcon class="w-5 h-5 text-[#23c55e] mr-3 mt-1 flex-shrink-0" />
                                    <span>Informations sur nos services</span>
                                </li>
                                <li class="flex items-start">
                                    <CheckCircleIcon class="w-5 h-5 text-[#23c55e] mr-3 mt-1 flex-shrink-0" />
                                    <span>Réponses à vos demandes</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Contact -->
                <div id="contact" class="scroll-mt-24 bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 mb-8">
                    <div class="flex items-center space-x-4 mb-8">
                        <div class="p-3 bg-[#23c55e]/10 rounded-xl">
                            <PhoneIcon class="w-8 h-8 text-[#23c55e]" />
                        </div>
                        <div>
                            <h2 class="text-2xl font-bold text-[#111829]">Contact</h2>
                            <p class="text-gray-500 mt-1">Pour toute question sur vos données</p>
                        </div>
                    </div>

                    <div class="bg-gray-50/50 rounded-xl p-6 border border-gray-100 hover:bg-gray-50 transition-colors">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 class="text-lg font-semibold text-[#111829] mb-4">Nous contacter</h3>
                                <div class="space-y-4">
                                    <a href="tel:+221338594040" class="flex items-center text-gray-600 hover:text-[#23c55e]">
                                        <PhoneIcon class="w-5 h-5 mr-3" />
                                        <span>+221 33 843 46 33</span>
                                    </a>
                                    <a href="mailto:contact@prosen.sn" class="flex items-center text-gray-600 hover:text-[#23c55e]">
                                        <EnvelopeIcon class="w-5 h-5 mr-3" />
                                        <span>contact@prosen.sn</span>
                                    </a>
                                </div>
                            </div>
                            <div>
                                <h3 class="text-lg font-semibold text-[#111829] mb-4">Notre adresse</h3>
                                <div class="flex items-start text-gray-600">
                                    <MapPinIcon class="w-5 h-5 mr-3 mt-1" />
                                    <span>Immeuble Ellipse, rue 1 X D Pav Usina, Point E, Dakar - Sénégal</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Section Informations Légales -->
                <div id="legal" class="scroll-mt-24 bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-8">
                    <div class="flex items-center space-x-4 mb-8">
                        <div class="bg-[#23c55e]/10 p-4 rounded-2xl">
                            <DocumentTextIcon class="w-10 h-10 text-[#23c55e]" />
                        </div>
                        <div>
                            <h2 class="text-3xl font-bold text-[#111829]">Informations Légales</h2>
                            <p class="text-gray-500 mt-1">À propos de PROSEN SARL</p>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div class="bg-gray-50 rounded-xl p-6 border border-gray-100">
                            <h3 class="text-lg font-semibold text-[#111829] mb-4">Entreprise</h3>
                            <div class="space-y-3 text-gray-600">
                                <p>PROSEN SARL est un leader dans le domaine de la sécurité professionnelle au Sénégal.</p>
                                <div class="space-y-2">
                                    <p class="flex items-center">
                                        <DocumentTextIcon class="w-5 h-5 text-[#23c55e] mr-2" />
                                        <span>NINEA : 005714333</span>
                                    </p>
                                    <p class="flex items-center">
                                        <DocumentTextIcon class="w-5 h-5 text-[#23c55e] mr-2" />
                                        <span>RCCM : SN DKR 2015 8 23592</span>
                                    </p>
                                    <p class="flex items-center">
                                        <CurrencyDollarIcon class="w-5 h-5 text-[#23c55e] mr-2" />
                                        <span>Capital Social : 500 000 FCFA</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="bg-gray-50 rounded-xl p-6 border border-gray-100">
                            <h3 class="text-lg font-semibold text-[#111829] mb-4">Direction</h3>
                            <div class="space-y-3">
                                <div class="flex items-start">
                                    <UserIcon class="w-5 h-5 text-[#23c55e] mr-3 mt-1 flex-shrink-0" />
                                    <div>
                                        <p class="font-medium">Cheikh Sadibou Ndiaye</p>
                                        <p class="text-gray-500">Directeur Général</p>
                                    </div>
                                </div>
                                <div class="flex items-start">
                                    <UserIcon class="w-5 h-5 text-[#23c55e] mr-3 mt-1 flex-shrink-0" />
                                    <div>
                                        <p class="font-medium">Ndiaga Ndiaye</p>
                                        <p class="text-gray-500">Directeur des Systèmes d'Informations</p>
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
                    <div class="inline-flex items-center justify-center p-3 bg-white/10 backdrop-blur-md rounded-xl mb-4">
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
                                    <PencilIcon class="w-5 h-5 text-[#23c55e] mr-2" />
                                    <span>Design</span>
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
                                <a href="tel:+221761291336" class="flex items-center text-gray-300 hover:text-[#23c55e] transition-colors">
                                    <PhoneIcon class="w-5 h-5 mr-3" />
                                    <span>+221 76 129 13 36</span>
                                </a>
                                <a href="mailto:hello@kamit.tech" class="flex items-center text-gray-300 hover:text-[#23c55e] transition-colors">
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
import { PencilIcon } from '@heroicons/vue/24/outline';
import {
    ArrowRightIcon,
    ShieldCheckIcon,
    LockClosedIcon,
    CheckCircleIcon,
    EnvelopeIcon,
    PhoneIcon,
    MapPinIcon,
    DocumentTextIcon,
    CogIcon,
    UserIcon,
    CurrencyDollarIcon,
    CommandLineIcon, // Remplacer CodeIcon
    DevicePhoneMobileIcon,
    CloudArrowUpIcon, // Remplacer CloudIcon
    ComputerDesktopIcon,
    GlobeAltIcon
} from '@heroicons/vue/24/solid'

// Sections de navigation simplifiées
const sections = [
    { id: 'introduction', title: 'Introduction', icon: DocumentTextIcon },
    { id: 'donnees', title: 'Données collectées', icon: UserIcon },
    { id: 'utilisation', title: 'Utilisation', icon: CogIcon },
    { id: 'contact', title: 'Contact', icon: PhoneIcon }
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