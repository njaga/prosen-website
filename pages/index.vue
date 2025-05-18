<template>
  <div>
    <SEO title="Accueil"
      description="PROSEN, votre partenaire de confiance en sécurité professionnelle. Services de gardiennage, surveillance, protection et solutions de sécurité sur mesure." />
    <Hero />

    <!-- Qui sommes-nous Section -->
    <section class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div v-motion :initial="{ opacity: 0, x: -50 }" :enter="{ opacity: 1, x: 0 }" class="space-y-6">
            <span class="text-[#23c55e] font-semibold text-sm uppercase tracking-wider">À propos de nous</span>
            <h2 class="text-4xl font-bold text-[#111829] mb-6">Qui sommes-nous ?</h2>
            <p class="text-gray-600 text-lg leading-relaxed">
              PROSEN est une entreprise sénégalaise leader dans le domaine de la sécurité privée. Depuis notre création,
              nous nous engageons à fournir des solutions de sécurité innovantes et sur mesure pour protéger les
              personnes, les biens et les infrastructures.
            </p>
            <p class="text-gray-600 text-lg leading-relaxed">
              Notre équipe de professionnels qualifiés et expérimentés travaille 24h/24 et 7j/7 pour garantir la
              sécurité de nos clients, qu'il s'agisse de particuliers, d'entreprises ou d'institutions.
            </p>
            <div class="pt-4">
              <NuxtLink to="/about"
                class="inline-flex items-center text-[#23c55e] font-semibold hover:text-[#1ea550] transition-colors">
                En savoir plus sur nous
                <ArrowRightIcon class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </NuxtLink>
            </div>
          </div>
          <div v-motion :initial="{ opacity: 0, x: 50 }" :enter="{ opacity: 1, x: 0 }" class="relative">
            <div class="absolute -top-6 -left-6 w-24 h-24 bg-[#23c55e]/10 rounded-xl z-0"></div>
            <div class="absolute -bottom-6 -right-6 w-24 h-24 bg-[#23c55e]/10 rounded-xl z-0"></div>
            <img src="/images/about-image.jpg" alt="L'équipe PROSEN"
              class="rounded-xl shadow-xl relative z-10 w-full h-auto object-cover" />
          </div>
        </div>
      </div>
    </section>

    <!-- Services Vedettes avec design amélioré et icônes -->
    <section class="py-24 bg-gradient-to-b from-white to-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16" v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0 }">
          <span class="text-[#23c55e] font-semibold text-sm uppercase tracking-wider">Nos Solutions</span>
          <h2 class="text-4xl font-bold text-[#111829] mt-4 mb-6">Nos Services Premium</h2>
          <p class="text-gray-600 max-w-2xl mx-auto text-lg">Des solutions de sécurité adaptées à vos besoins
            spécifiques, servies par des professionnels expérimentés.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Service 1 -->
          <div v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0, transition: { delay: 100 } }"
            class="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
            <div class="p-8 flex flex-col items-center text-center">
              <div class="w-20 h-20 bg-[#23c55e]/10 rounded-full flex items-center justify-center mb-6">
                <ShieldCheckIcon class="w-10 h-10 text-[#23c55e]" />
              </div>
              <h3 class="text-xl font-bold text-[#111829] mb-4">Surveillance & Gardiennage</h3>
              <p class="text-gray-600 mb-6">Protection de vos locaux par des agents qualifiés, formés pour assurer votre
                sécurité 24h/24. Nous offrons des solutions adaptées à tous types de sites.</p>
              <div class="mt-auto">
                <NuxtLink to="/services/surveillance-gardiennage"
                  class="inline-flex items-center text-[#23c55e] font-semibold hover:text-[#1ea550] transition-colors">
                  En savoir plus
                  <ArrowRightIcon class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </NuxtLink>
              </div>
            </div>
          </div>

          <!-- Service 2 -->
          <div v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0, transition: { delay: 200 } }"
            class="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
            <div class="p-8 flex flex-col items-center text-center">
              <div class="w-20 h-20 bg-[#23c55e]/10 rounded-full flex items-center justify-center mb-6">
                <CameraIcon class="w-10 h-10 text-[#23c55e]" />
              </div>
              <h3 class="text-xl font-bold text-[#111829] mb-4">Sécurité Électronique</h3>
              <p class="text-gray-600 mb-6">Systèmes de vidéosurveillance, alarmes et contrôle d'accès pour une
                protection optimale. Technologies de pointe pour sécuriser vos locaux.</p>
              <div class="mt-auto">
                <NuxtLink to="/services/securite-electronique"
                  class="inline-flex items-center text-[#23c55e] font-semibold hover:text-[#1ea550] transition-colors">
                  En savoir plus
                  <ArrowRightIcon class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </NuxtLink>
              </div>
            </div>
          </div>

          <!-- Service 3 -->
          <div v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0, transition: { delay: 300 } }"
            class="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
            <div class="p-8 flex flex-col items-center text-center">
              <div class="w-20 h-20 bg-[#23c55e]/10 rounded-full flex items-center justify-center mb-6">
                <UserGroupIcon class="w-10 h-10 text-[#23c55e]" />
              </div>
              <h3 class="text-xl font-bold text-[#111829] mb-4">Protection Rapprochée</h3>
              <p class="text-gray-600 mb-6">Agents spécialisés pour la protection des personnes VIP et la sécurisation
                d'événements. Service discret et professionnel.</p>
              <div class="mt-auto">
                <NuxtLink to="/services/protection-rapprochee"
                  class="inline-flex items-center text-[#23c55e] font-semibold hover:text-[#1ea550] transition-colors">
                  En savoir plus
                  <ArrowRightIcon class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </NuxtLink>
              </div>
            </div>
          </div>

          <!-- Service 4 -->
          <div v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0, transition: { delay: 400 } }"
            class="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
            <div class="p-8 flex flex-col items-center text-center">
              <div class="w-20 h-20 bg-[#23c55e]/10 rounded-full flex items-center justify-center mb-6">
                <SparklesIcon class="w-10 h-10 text-[#23c55e]" />
              </div>
              <h3 class="text-xl font-bold text-[#111829] mb-4">Nettoyage Professionnel</h3>
              <p class="text-gray-600 mb-6">Services de nettoyage et d'entretien pour bureaux, commerces et sites
                industriels. Personnel qualifié et produits écologiques.</p>
              <div class="mt-auto">
                <NuxtLink to="/services/nettoyage-professionnel"
                  class="inline-flex items-center text-[#23c55e] font-semibold hover:text-[#1ea550] transition-colors">
                  En savoir plus
                  <ArrowRightIcon class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </NuxtLink>
              </div>
            </div>
          </div>

          <!-- Service 5 -->
          <div v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0, transition: { delay: 500 } }"
            class="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
            <div class="p-8 flex flex-col items-center text-center">
              <div class="w-20 h-20 bg-[#23c55e]/10 rounded-full flex items-center justify-center mb-6">
                <FireIcon class="w-10 h-10 text-[#23c55e]" />
              </div>
              <h3 class="text-xl font-bold text-[#111829] mb-4">Sécurité Incendie</h3>
              <p class="text-gray-600 mb-6">Prévention et lutte contre les incendies. Formation, équipements et agents
                spécialisés pour protéger vos locaux.</p>
              <div class="mt-auto">
                <NuxtLink to="/services/securite-incendie"
                  class="inline-flex items-center text-[#23c55e] font-semibold hover:text-[#1ea550] transition-colors">
                  En savoir plus
                  <ArrowRightIcon class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </NuxtLink>
              </div>
            </div>
          </div>

          <!-- Service 6 -->
          <div v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0, transition: { delay: 600 } }"
            class="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
            <div class="p-8 flex flex-col items-center text-center">
              <div class="w-20 h-20 bg-[#23c55e]/10 rounded-full flex items-center justify-center mb-6">
                <TruckIcon class="w-10 h-10 text-[#23c55e]" />
              </div>
              <h3 class="text-xl font-bold text-[#111829] mb-4">Transport de Valeurs</h3>
              <p class="text-gray-600 mb-6">Transport sécurisé de fonds et de valeurs. Véhicules blindés et personnel
                hautement qualifié pour une sécurité maximale.</p>
              <div class="mt-auto">
                <NuxtLink to="/services/transport-valeurs"
                  class="inline-flex items-center text-[#23c55e] font-semibold hover:text-[#1ea550] transition-colors">
                  En savoir plus
                  <ArrowRightIcon class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center mt-12">
          <NuxtLink to="/services"
            class="inline-flex items-center px-6 py-3 border border-[#23c55e] text-[#23c55e] rounded-xl hover:bg-[#23c55e] hover:text-white transition-colors duration-300">
            <span class="font-semibold">Découvrir tous nos services</span>
            <ArrowRightIcon class="w-5 h-5 ml-2" />
          </NuxtLink>
        </div>
      </div>
    </section>


    <!-- Section des logos clients (commentée pour utilisation ultérieure) -->
    <!--
    <section class="py-24 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          class="text-center mb-12"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0 }"
        >
          <span class="text-[#23c55e] font-semibold text-sm uppercase tracking-wider">Ils nous font confiance</span>
          <h2 class="text-4xl font-bold text-[#111829] mt-4 mb-6">Nos Clients</h2>
          <p class="text-gray-600 max-w-2xl mx-auto text-lg">Des entreprises et institutions de renom nous confient leur sécurité au quotidien.</p>
        </div>
        
        <div 
          class="py-8 overflow-hidden"
          v-motion
          :initial="{ opacity: 0 }"
          :enter="{ opacity: 1 }"
        >
          <div class="client-logos-slider">
            <div class="flex items-center space-x-16 animate-scroll">
              <div v-for="i in 2" :key="i" class="flex items-center space-x-16 flex-nowrap">
                <div v-for="(logo, index) in clientLogos" :key="`${i}-${index}`" class="flex-shrink-0">
                  <img :src="logo.src" :alt="logo.name" class="h-16 w-auto grayscale hover:grayscale-0 transition-all duration-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    -->

    <!-- Ajouter une nouvelle section "Nos Atouts" -->
    <section class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16" v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0 }">
          <span class="text-[#23c55e] font-semibold text-sm uppercase tracking-wider">Pourquoi nous choisir</span>
          <h2 class="text-4xl font-bold text-[#111829] mt-4 mb-6">Nos Atouts</h2>
          <p class="text-gray-600 max-w-2xl mx-auto text-lg">Ce qui fait de PROSEN le partenaire idéal pour tous vos
            besoins en sécurité.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <!-- Atout 1 -->
          <div v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0, transition: { delay: 100 } }"
            class="relative">
            <div
              class="absolute top-0 left-0 w-12 h-12 bg-[#23c55e] rounded-lg flex items-center justify-center text-white font-bold text-lg">
              01
            </div>
            <div class="pt-16 pl-4">
              <h3 class="text-xl font-bold text-[#111829] mb-4">Expertise Reconnue</h3>
              <p class="text-gray-600">Avec plus de 5 ans d'expérience dans le secteur de la sécurité, notre équipe
                possède l'expertise nécessaire pour répondre à tous vos besoins.</p>
            </div>
          </div>

          <!-- Atout 2 -->
          <div v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0, transition: { delay: 200 } }"
            class="relative">
            <div
              class="absolute top-0 left-0 w-12 h-12 bg-[#23c55e] rounded-lg flex items-center justify-center text-white font-bold text-lg">
              02
            </div>
            <div class="pt-16 pl-4">
              <h3 class="text-xl font-bold text-[#111829] mb-4">Personnel Qualifié</h3>
              <p class="text-gray-600">Nos agents sont rigoureusement sélectionnés et formés aux meilleures pratiques de
                sécurité pour vous offrir un service de qualité irréprochable.</p>
            </div>
          </div>

          <!-- Atout 3 -->
          <div v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0, transition: { delay: 300 } }"
            class="relative">
            <div
              class="absolute top-0 left-0 w-12 h-12 bg-[#23c55e] rounded-lg flex items-center justify-center text-white font-bold text-lg">
              03
            </div>
            <div class="pt-16 pl-4">
              <h3 class="text-xl font-bold text-[#111829] mb-4">Disponibilité 24/7</h3>
              <p class="text-gray-600">Notre équipe est à votre service 24 heures sur 24, 7 jours sur 7, pour répondre
                rapidement à toutes vos demandes et urgences.</p>
            </div>
          </div>

          <!-- Atout 4 -->
          <div v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0, transition: { delay: 400 } }"
            class="relative">
            <div
              class="absolute top-0 left-0 w-12 h-12 bg-[#23c55e] rounded-lg flex items-center justify-center text-white font-bold text-lg">
              04
            </div>
            <div class="pt-16 pl-4">
              <h3 class="text-xl font-bold text-[#111829] mb-4">Solutions Sur Mesure</h3>
              <p class="text-gray-600">Nous proposons des solutions personnalisées, adaptées à vos besoins spécifiques
                et à votre budget, pour une sécurité optimale.</p>
            </div>
          </div>

          <!-- Atout 5 -->
          <div v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0, transition: { delay: 500 } }"
            class="relative">
            <div
              class="absolute top-0 left-0 w-12 h-12 bg-[#23c55e] rounded-lg flex items-center justify-center text-white font-bold text-lg">
              05
            </div>
            <div class="pt-16 pl-4">
              <h3 class="text-xl font-bold text-[#111829] mb-4">Technologies Modernes</h3>
              <p class="text-gray-600">Nous utilisons les dernières technologies en matière de sécurité pour vous offrir
                des solutions innovantes et efficaces.</p>
            </div>
          </div>

          <!-- Atout 6 -->
          <div v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0, transition: { delay: 600 } }"
            class="relative">
            <div
              class="absolute top-0 left-0 w-12 h-12 bg-[#23c55e] rounded-lg flex items-center justify-center text-white font-bold text-lg">
              06
            </div>
            <div class="pt-16 pl-4">
              <h3 class="text-xl font-bold text-[#111829] mb-4">Éthique Professionnelle</h3>
              <p class="text-gray-600">Nous nous engageons à respecter les plus hauts standards d'éthique et de
                professionnalisme dans toutes nos interactions avec nos clients.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Application Gaindé -->
    <section class="py-24 bg-white relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-transparent"></div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div v-motion :initial="{ opacity: 0, x: -50 }" :enter="{ opacity: 1, x: 0 }">
            <div class="inline-flex items-center px-4 py-1.5 bg-[#23c55e]/10 text-[#23c55e] rounded-full text-sm font-semibold mb-6">
              <ComputerDesktopIcon class="w-5 h-5 mr-2" />
              Notre Avantage Technologique
            </div>
            <h2 class="text-4xl font-bold text-[#111829] mb-6">Gaindé : La Technologie au Service de Votre Sécurité</h2>
            <p class="text-gray-600 text-lg mb-6 leading-relaxed">
              En choisissant PROSEN, vous bénéficiez de Gaindé (Lion en wolof), notre application exclusive de gestion intelligente des patrouilles. Cette innovation, unique au Sénégal et développée par nos équipes, garantit une surveillance optimale de vos locaux.
            </p>
            <p class="text-gray-600 text-lg mb-8 leading-relaxed">
              Chaque prestation PROSEN inclut l'accès à Gaindé, vous permettant de suivre en temps réel l'efficacité de nos services et d'avoir une totale transparence sur la sécurité de vos sites.
            </p>
            
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div class="bg-white rounded-xl p-5 shadow-md border border-gray-100">
                <ClockIcon class="w-8 h-8 text-[#23c55e] mb-3" />
                <h3 class="text-lg font-semibold text-[#111829] mb-2">Contrôle en Temps Réel</h3>
                <p class="text-gray-600">Suivez les rondes de sécurité et recevez des alertes instantanées sur votre espace client</p>
              </div>
              
              <div class="bg-white rounded-xl p-5 shadow-md border border-gray-100">
                <ChartBarIcon class="w-8 h-8 text-[#23c55e] mb-3" />
                <h3 class="text-lg font-semibold text-[#111829] mb-2">Rapports Détaillés</h3>
                <p class="text-gray-600">Accédez aux historiques complets et statistiques de sécurité de vos sites</p>
              </div>
              
              <div class="bg-white rounded-xl p-5 shadow-md border border-gray-100">
                <ShieldCheckIcon class="w-8 h-8 text-[#23c55e] mb-3" />
                <h3 class="text-lg font-semibold text-[#111829] mb-2">Sécurité Renforcée</h3>
                <p class="text-gray-600">Optimisation continue des patrouilles grâce à l'analyse des données collectées</p>
              </div>
              
              <div class="bg-white rounded-xl p-5 shadow-md border border-gray-100">
                <UserGroupIcon class="w-8 h-8 text-[#23c55e] mb-3" />
                <h3 class="text-lg font-semibold text-[#111829] mb-2">Collaboration Client</h3>
                <p class="text-gray-600">Interface personnalisée pour une communication directe avec nos équipes</p>
              </div>
            </div>

            <div class="flex flex-wrap gap-4">
              <NuxtLink to="/devis"
                class="inline-flex items-center px-6 py-3 bg-[#23c55e] text-white rounded-xl hover:bg-[#1ea550] transition-colors duration-300">
                <span class="font-semibold">Obtenir un devis avec Gaindé inclus</span>
                <ArrowRightIcon class="w-5 h-5 ml-2" />
              </NuxtLink>
              <NuxtLink to="/contact"
                class="inline-flex items-center px-6 py-3 border border-[#23c55e] text-[#23c55e] rounded-xl hover:bg-[#23c55e] hover:text-white transition-colors duration-300">
                <span class="font-semibold">Voir une démonstration</span>
                <ArrowRightIcon class="w-5 h-5 ml-2" />
              </NuxtLink>
            </div>
          </div>

          <div class="relative" v-motion :initial="{ opacity: 0, x: 50 }" :enter="{ opacity: 1, x: 0 }">
            <div class="absolute -top-6 -right-6 w-24 h-24 bg-[#23c55e]/10 rounded-xl transform rotate-6"></div>
            <div class="absolute -bottom-6 -left-6 w-24 h-24 bg-[#23c55e]/10 rounded-xl transform -rotate-6"></div>
            <div class="relative z-10 bg-white rounded-2xl shadow-2xl p-4 border border-gray-100 max-w-md mx-auto">
              <img src="/images/app-mockup.png" alt="Application Gaindé" class="w-full h-auto rounded-xl object-contain max-h-[500px]" />
              <div class="absolute -bottom-4 -right-4 bg-[#23c55e] text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                Exclusivité PROSEN
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section COBU - Centre Opérations de Besoins et d'Urgence -->
    <section class="py-16 md:py-24 bg-gray-50 relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-10 md:mb-16">
          <span class="text-[#23c55e] font-semibold text-xs sm:text-sm uppercase tracking-wider">Service
            d'urgence</span>
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-[#111829] mt-3 md:mt-4 mb-4 md:mb-6">Centre
            Opérations de Besoins et d'Urgence</h2>
          <p class="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base">
            Notre COBU est opérationnel en permanence pour garantir une réponse immédiate à tous vos besoins de sécurité
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="relative order-2 lg:order-1" v-motion :initial="{ opacity: 0, y: 30 }"
            :visible="{ opacity: 1, y: 0 }">
            <div class="lg:max-w-lg">
              <div class="bg-[#111829] rounded-xl p-8 shadow-xl relative overflow-hidden">
                <div class="absolute top-0 right-0 w-20 h-20 bg-[#23c55e]/20 rounded-bl-xl z-0"></div>
                <h3 class="text-xl text-white font-bold mb-4 relative z-10">Contactez notre COBU</h3>
                <p class="text-gray-300 mb-6 relative z-10">
                  Notre Centre Opérations de Besoins et d'Urgence est accessible 24h/24 et 7j/7 pour répondre à toutes
                  vos demandes et urgences.
                </p>

                <div class="flex items-center space-x-4 mb-4 relative z-10">
                  <div class="w-12 h-12 bg-[#23c55e]/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <PhoneIcon class="h-6 w-6 text-[#23c55e]" />
                  </div>
                  <div>
                    <h4 class="text-white font-semibold">Numéro d'urgence</h4>
                    <a href="tel:+221765984214" class="text-[#23c55e] hover:underline">+221 76 598 42 14</a>
                  </div>
                </div>

                <div class="bg-gray-800/50 p-4 rounded-lg border border-gray-700 mb-4 relative z-10">
                  <ul class="space-y-3">
                    <li class="flex items-start">
                      <CheckCircleIcon class="w-5 h-5 text-[#23c55e] mt-0.5 flex-shrink-0" />
                      <span class="ml-2 text-gray-300">Appel téléphonique direct</span>
                    </li>
                    <li class="flex items-start">
                      <CheckCircleIcon class="w-5 h-5 text-[#23c55e] mt-0.5 flex-shrink-0" />
                      <span class="ml-2 text-gray-300">SMS</span>
                    </li>
                    <li class="flex items-start">
                      <CheckCircleIcon class="w-5 h-5 text-[#23c55e] mt-0.5 flex-shrink-0" />
                      <span class="ml-2 text-gray-300">WhatsApp</span>
                    </li>
                  </ul>
                </div>

                <div class="flex items-center relative z-10">
                  <div class="w-4 h-4 bg-green-500 rounded-full animate-ping absolute opacity-75"></div>
                  <div class="w-4 h-4 bg-green-500 rounded-full relative"></div>
                  <span class="ml-3 text-gray-300">Opérationnel 24/7</span>
                </div>
              </div>
            </div>
          </div>

          <div class="order-1 lg:order-2 relative" v-motion :initial="{ opacity: 0, y: 30 }"
            :visible="{ opacity: 1, y: 0, transition: { delay: 200 } }">
            <div
              class="absolute -top-6 -right-6 w-32 h-32 bg-[#23c55e]/10 rounded-xl transform rotate-6 hidden md:block">
            </div>
            <div class="rounded-xl overflow-hidden shadow-xl relative z-10">
              <img src="/images/security-center.webp" alt="Centre Opérations de Besoins et d'Urgence"
                class="w-full h-auto object-cover" />
            </div>
            <div class="mt-8 space-y-6">
              <h3 class="text-2xl font-bold text-[#111829]">Une intervention rapide et efficace</h3>
              <p class="text-gray-600">
                Chez PROSEN, nous comprenons que les situations d'urgence nécessitent une réponse immédiate. C'est
                pourquoi notre Centre Opérations de Besoins et d'Urgence (COBU) est disponible 24h/24 et 7j/7 pour
                assurer votre sécurité à tout moment.
              </p>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div class="bg-gray-50 p-5 rounded-xl border border-gray-100">
                  <LockClosedIcon class="w-8 h-8 text-[#23c55e] mb-3" />
                  <h4 class="text-lg font-semibold text-[#111829] mb-2">Gestion des incidents</h4>
                  <p class="text-gray-600 text-sm">Protocoles d'intervention rapide et adaptés à chaque type d'urgence
                  </p>
                </div>

                <div class="bg-gray-50 p-5 rounded-xl border border-gray-100">
                  <ClockIcon class="w-8 h-8 text-[#23c55e] mb-3" />
                  <h4 class="text-lg font-semibold text-[#111829] mb-2">Réactivité garantie</h4>
                  <p class="text-gray-600 text-sm">Temps de réponse optimisé pour une action immédiate et efficace</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

        <!-- CTA Carrières -->
        <section class="py-24 bg-[#111829] relative overflow-hidden">
      <div class="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10"></div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" v-motion :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0 }">
          <div>
            <span
              class="inline-flex items-center px-4 py-1.5 bg-[#23c55e]/10 text-[#23c55e] rounded-full text-sm font-semibold mb-6 backdrop-blur-sm border border-[#23c55e]/20">
              <span class="w-2 h-2 rounded-full bg-[#23c55e] mr-2"></span>
              Rejoignez-nous
            </span>
            <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">Nous recrutons!</h2>
            <p class="text-gray-300 text-lg mb-8 leading-relaxed">
              Nous recherchons régulièrement des talents pour renforcer nos équipes. Agents de sécurité, techniciens,
              superviseurs... Découvrez nos opportunités d'emploi et rejoignez une entreprise en pleine croissance.
            </p>
            <div class="flex flex-wrap gap-4">
              <NuxtLink to="/carrieres"
                class="group inline-flex items-center px-6 py-3 bg-[#23c55e] text-white rounded-xl hover:bg-[#1ea550] transition-colors duration-300">
                <span class="font-semibold">Voir nos offres d'emploi</span>
                <ArrowRightIcon class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </NuxtLink>
              <NuxtLink to="/carrieres#candidature"
                class="group inline-flex items-center px-6 py-3 border border-white/20 text-white rounded-xl hover:bg-white/10 transition-colors duration-300">
                <span class="font-semibold">Candidature spontanée</span>
                <ArrowRightIcon class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </NuxtLink>
            </div>
          </div>
          <div class="relative">
            <img src="/images/careers.jpg" alt="Carrières chez PROSEN"
              class="rounded-xl shadow-2xl w-full h-auto object-cover" />
            <div class="absolute -bottom-6 -right-6 w-32 h-32 bg-[#23c55e]/20 rounded-xl z-0"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Boutique -->
    <section class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12" v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0 }">
          <span class="text-[#23c55e] font-semibold text-sm uppercase tracking-wider">Notre Boutique</span>
          <h2 class="text-4xl font-bold text-[#111829] mt-4 mb-6">Équipements de Sécurité</h2>
          <p class="text-gray-600 max-w-2xl mx-auto text-lg">Découvrez notre sélection d'équipements de protection
            individuelle et de matériel de sécurité professionnel.</p>
        </div>

        <!-- Produits en vedette (chargés dynamiquement depuis Directus) -->
        <div v-if="isLoading" class="flex justify-center items-center py-12">
          <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#23c55e]"></div>
        </div>

        <div v-else-if="featuredProducts.length === 0" class="text-center py-8 bg-gray-50 rounded-xl mb-12">
          <p class="text-gray-600">Aucun produit disponible pour le moment.</p>
          <p class="text-gray-500 mt-2">Revenez bientôt pour découvrir notre sélection d'équipements.</p>
        </div>

        <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <!-- Produit dynamique -->
          <div v-for="product in featuredProducts" :key="product.id"
            class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
            <div class="relative h-60">
              <img :src="product.image" :alt="product.name"
                class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" />
              <div v-if="product.isNew"
                class="absolute top-2 right-2 bg-white text-[#23c55e] text-xs font-bold px-2 py-1 rounded shadow-sm">
                Nouveau
              </div>
              <div v-if="!product.inStock"
                class="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded shadow-sm">
                Rupture de stock
              </div>
            </div>
            <div class="p-5">
              <h3 class="text-lg font-semibold text-[#111829] mb-1 group-hover:text-[#23c55e] transition-colors">{{
                product.name }}</h3>
              <p class="text-[#23c55e]/80 text-sm font-medium mb-3">Sur devis</p>
              <div class="flex justify-end">
                <NuxtLink :to="`/boutique/${product.id}`"
                  class="bg-[#23c55e] hover:bg-[#1ea550] text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors">
                  Demander un devis
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>

        <!-- Catégories de produits -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <!-- Catégorie 1 -->
          <div v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0, transition: { delay: 100 } }"
            class="relative overflow-hidden rounded-xl group">
            <div class="aspect-w-16 aspect-h-9">
              <img src="/images/boutique/category-epi.jpg" alt="Équipements de Protection"
                class="w-full h-full object-cover" />
              <div
                class="absolute inset-0 bg-gradient-to-t from-[#111829] to-transparent opacity-80 group-hover:opacity-90 transition-opacity">
              </div>
            </div>
            <div class="absolute inset-0 flex flex-col items-center justify-center p-5 text-center">
              <ShieldCheckIcon class="w-12 h-12 text-[#23c55e] mb-3" />
              <h3 class="text-xl font-bold text-white mb-2">Équipements de Protection</h3>
              <p class="text-gray-200 text-sm mb-4 max-w-xs">Des équipements de qualité supérieure pour assurer la
                sécurité de vos collaborateurs</p>
              <NuxtLink to="/boutique?category=epi"
                class="px-5 py-2 bg-white/10 backdrop-blur-sm text-white border border-white/30 rounded-lg hover:bg-white/20 transition-colors text-sm">
                Découvrir
              </NuxtLink>
            </div>
          </div>

          <!-- Catégorie 2 -->
          <div v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0, transition: { delay: 200 } }"
            class="relative overflow-hidden rounded-xl group">
            <div class="aspect-w-16 aspect-h-9">
              <img src="/images/boutique/category-incendie.jpeg" alt="Sécurité Incendie"
                class="w-full h-full object-cover" />
              <div
                class="absolute inset-0 bg-gradient-to-t from-[#111829] to-transparent opacity-80 group-hover:opacity-90 transition-opacity">
              </div>
            </div>
            <div class="absolute inset-0 flex flex-col items-center justify-center p-5 text-center">
              <FireIcon class="w-12 h-12 text-[#23c55e] mb-3" />
              <h3 class="text-xl font-bold text-white mb-2">Sécurité Incendie</h3>
              <p class="text-gray-200 text-sm mb-4 max-w-xs">Des solutions complètes pour la prévention et la lutte
                contre les incendies</p>
              <NuxtLink to="/boutique?category=incendie"
                class="px-5 py-2 bg-white/10 backdrop-blur-sm text-white border border-white/30 rounded-lg hover:bg-white/20 transition-colors text-sm">
                Découvrir
              </NuxtLink>
            </div>
          </div>

          <!-- Catégorie 3 -->
          <div v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0, transition: { delay: 300 } }"
            class="relative overflow-hidden rounded-xl group">
            <div class="aspect-w-16 aspect-h-9">
              <img src="/images/boutique/category-electronique.jpg" alt="Sécurité Électronique"
                class="w-full h-full object-cover" />
              <div
                class="absolute inset-0 bg-gradient-to-t from-[#111829] to-transparent opacity-80 group-hover:opacity-90 transition-opacity">
              </div>
            </div>
            <div class="absolute inset-0 flex flex-col items-center justify-center p-5 text-center">
              <CameraIcon class="w-12 h-12 text-[#23c55e] mb-3" />
              <h3 class="text-xl font-bold text-white mb-2">Sécurité Électronique</h3>
              <p class="text-gray-200 text-sm mb-4 max-w-xs">Systèmes de surveillance et d'alarme innovants pour
                sécuriser vos locaux</p>
              <NuxtLink to="/boutique?category=electronique"
                class="px-5 py-2 bg-white/10 backdrop-blur-sm text-white border border-white/30 rounded-lg hover:bg-white/20 transition-colors text-sm">
                Découvrir
              </NuxtLink>
            </div>
          </div>
        </div>

        <div class="flex justify-center" v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0 }">
          <NuxtLink to="/boutique"
            class="group inline-flex items-center px-6 py-3 border border-[#23c55e] bg-[#23c55e] text-white rounded-xl hover:bg-[#1ea550] transition-colors duration-300">
            <ShoppingBagIcon class="w-5 h-5 mr-2" />
            <span class="font-semibold">Visiter notre boutique</span>
            <ArrowRightIcon class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Section Évaluation des Risques -->
    <section class="py-24 bg-gray-50 relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-b from-white to-transparent"></div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div v-motion :initial="{ opacity: 0, x: -50 }" :enter="{ opacity: 1, x: 0 }">
            <div class="inline-flex items-center px-4 py-1.5 bg-[#23c55e]/10 text-[#23c55e] rounded-full text-sm font-semibold mb-6">
              <ClipboardDocumentCheckIcon class="w-5 h-5 mr-2" />
              Évaluation Professionnelle
            </div>
            <h2 class="text-4xl font-bold text-[#111829] mb-6">Évaluez Vos Risques Sécuritaires</h2>
            <p class="text-gray-600 text-lg mb-6 leading-relaxed">
              Notre outil d'évaluation des risques vous permet d'obtenir une analyse détaillée de vos besoins en sécurité. Basé sur des années d'expertise, il prend en compte les spécificités de votre secteur et de votre région.
            </p>
            <ul class="space-y-4 mb-8">
              <li class="flex items-start">
                <div class="bg-[#23c55e]/10 p-2 rounded-lg mr-3 mt-0.5">
                  <ChartBarIcon class="w-5 h-5 text-[#23c55e]" />
                </div>
                <div>
                  <p class="text-gray-800 font-medium">Analyse Contextuelle</p>
                  <p class="text-gray-600 text-sm">Évaluation basée sur votre secteur d'activité et localisation</p>
                </div>
              </li>
              <li class="flex items-start">
                <div class="bg-[#23c55e]/10 p-2 rounded-lg mr-3 mt-0.5">
                  <ShieldExclamationIcon class="w-5 h-5 text-[#23c55e]" />
                </div>
                <div>
                  <p class="text-gray-800 font-medium">Identification des Risques</p>
                  <p class="text-gray-600 text-sm">Détection des vulnérabilités spécifiques à votre établissement</p>
                </div>
              </li>
              <li class="flex items-start">
                <div class="bg-[#23c55e]/10 p-2 rounded-lg mr-3 mt-0.5">
                  <DocumentTextIcon class="w-5 h-5 text-[#23c55e]" />
                </div>
                <div>
                  <p class="text-gray-800 font-medium">Rapport Personnalisé</p>
                  <p class="text-gray-600 text-sm">Recommandations détaillées et solutions adaptées</p>
                </div>
              </li>
            </ul>
            <NuxtLink 
              to="/evaluation-risques"
              class="inline-flex items-center px-6 py-3 bg-[#23c55e] text-white rounded-xl hover:bg-[#1ea550] transition-colors shadow-lg hover:shadow-xl"
            >
              <ArrowRightIcon class="w-5 h-5 mr-2" />
              Évaluer mes besoins
            </NuxtLink>
          </div>

          <div class="relative" v-motion :initial="{ opacity: 0, x: 50 }" :enter="{ opacity: 1, x: 0 }">
            <div class="absolute -top-6 -right-6 w-24 h-24 bg-[#23c55e]/10 rounded-xl transform rotate-6"></div>
            <div class="absolute -bottom-6 -left-6 w-24 h-24 bg-[#23c55e]/10 rounded-xl transform -rotate-6"></div>
            <div class="relative z-10 bg-white rounded-2xl shadow-2xl p-6 border border-gray-100">
              <img src="/images/evaluation-tool.jpg" alt="Outil d'évaluation des risques" class="w-full h-auto rounded-xl object-contain max-h-[400px]" />
              <div class="absolute -bottom-4 -right-4 bg-[#23c55e] text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                Évaluation gratuite
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Devis -->
    <section class="bg-[#23c55e] py-24 relative overflow-hidden">
      <div class="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10"></div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-12 border border-white/20" v-motion
          :initial="{ opacity: 0, scale: 0.95 }" :enter="{ opacity: 1, scale: 1 }">
          <div class="text-center">
            <h2 class="text-4xl font-bold text-white mb-6">Prêt à Sécuriser Votre Entreprise ?</h2>
            <p class="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
              Contactez nos experts pour une évaluation gratuite de vos besoins en sécurité
            </p>
            <div class="flex flex-wrap gap-4 justify-center">
              <NuxtLink to="/devis"
                class="inline-flex items-center px-8 py-4 bg-white text-[#111829] rounded-xl hover:bg-gray-100 transition-colors">
                <span class="font-semibold">Obtenir un Devis Gratuit</span>
                <ArrowRightIcon class="w-5 h-5 ml-2" />
              </NuxtLink>
              <a href="tel:+221338434633"
                class="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-xl hover:bg-white hover:text-[#111829] transition-colors">
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
  PhoneIcon,
  ShieldCheckIcon,
  CameraIcon,
  UserGroupIcon,
  SparklesIcon,
  FireIcon,
  TruckIcon,
  ShoppingBagIcon,
  CheckCircleIcon,
  ClockIcon,
  LockClosedIcon,
  ComputerDesktopIcon,
  ChartBarIcon,
  RocketLaunchIcon,
  ClipboardDocumentCheckIcon,
  ShieldExclamationIcon,
  DocumentTextIcon
} from '@heroicons/vue/24/solid'
import { ref, onMounted } from 'vue'

// Logos des clients (à utiliser lorsque la section sera décommentée)
const clientLogos = [
  { name: 'Client 1', src: '/images/clients/client1.png' },
  { name: 'Client 2', src: '/images/clients/client2.png' },
  { name: 'Client 3', src: '/images/clients/client3.png' },
  { name: 'Client 4', src: '/images/clients/client4.png' },
  { name: 'Client 5', src: '/images/clients/client5.png' },
  { name: 'Client 6', src: '/images/clients/client6.png' },
  { name: 'Client 7', src: '/images/clients/client7.png' },
  { name: 'Client 8', src: '/images/clients/client8.png' }
]

// Produits en vedette (chargés depuis l'API)
const featuredProducts = ref([])
const isLoading = ref(true)
const loadError = ref(null)

// Charger les produits depuis l'API
onMounted(async () => {
  try {
    isLoading.value = true
    loadError.value = null

    // Appeler l'API pour récupérer tous les produits
    const response = await $fetch('/api/boutique/products', {
      method: 'GET',
      headers: {
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache'
      }
    })

    if (response.success) {
      console.log('Produits récupérés avec succès:', response.products.length)
      // Prendre les 4 premiers produits disponibles
      featuredProducts.value = response.products
        .filter(p => p.inStock !== false) // Uniquement les produits en stock
        .slice(0, 4) // Limiter à 4 produits
    } else {
      console.error('Erreur lors de la récupération des produits:', response)
      loadError.value = 'Impossible de charger les produits'
    }
  } catch (error) {
    console.error('Erreur lors du chargement des produits:', error)
    loadError.value = 'Erreur de connexion au serveur'
  } finally {
    isLoading.value = false
  }
})
</script>

<style>
.backdrop-blur-sm {
  backdrop-filter: blur(8px);
}

/* Animation des logos clients (à utiliser lorsque la section sera décommentée) */
.client-logos-slider {
  overflow: hidden;
  width: 100%;
}

.animate-scroll {
  display: inline-flex;
  animation: scroll 60s linear infinite;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-50%);
  }
}

/* Pause de l'animation au survol */
.client-logos-slider:hover .animate-scroll {
  animation-play-state: paused;
}

/* Aspect ratio pour les images */
.aspect-w-16 {
  position: relative;
  padding-bottom: 56.25%;
  /* 16:9 */
}

.aspect-w-16>* {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.aspect-w-1 {
  position: relative;
  padding-bottom: 100%;
  /* 1:1 */
}

.aspect-w-1>* {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
</style>