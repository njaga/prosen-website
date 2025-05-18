<template>
  <div class="overflow-x-hidden">
    <SEO title="À Propos"
      description="Découvrez PROSEN, entreprise leader dans le secteur de la sécurité au Sénégal. Notre expertise et notre engagement font notre force depuis plus de 15 ans." />
    <!-- Hero Section -->
    <section class="relative py-16 sm:py-32 mb-8 sm:mb-16 bg-[#111829]">
      <div class="absolute inset-0">
        <img src="/images/about-hero.jpg" alt="PROSEN Sécurité" class="w-full h-full object-cover opacity-20" />
        <div class="absolute inset-0 bg-gradient-to-r from-[#111829] to-[#111829]/80"></div>
      </div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 v-motion :initial="{ opacity: 0, y: 50 }" :enter="{ opacity: 1, y: 0 }"
          class="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
          À Propos de PROSEN
        </h1>
        <p v-motion :initial="{ opacity: 0 }" :enter="{ opacity: 1, transition: { delay: 200 } }"
          class="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
          Leader dans le domaine de la sécurité privée au Sénégal, nous assurons la protection de vos biens et de vos
          personnes avec professionnalisme et engagement.
        </p>
      </div>
    </section>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Notre Histoire avec image -->
      <div v-motion :initial="{ opacity: 0, y: 50 }" :enter="{ opacity: 1, y: 0 }"
        class="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-16 md:mb-24">
        <div class="relative order-2 md:order-1">
          <div class="absolute -inset-4 bg-[#23c55e]/10 rounded-xl transform rotate-3 hidden sm:block"></div>
          <img src="/images/about-company.jpeg" alt="PROSEN Histoire" class="relative rounded-lg shadow-xl w-full" />
        </div>
        <div class="order-1 md:order-2">
          <h2 class="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-[#111829]">Notre Histoire</h2>
          <div class="prose prose-base sm:prose-lg text-gray-600">
            <p>Établie au Sénégal, PROSEN s'est forgée une solide réputation dans le secteur de la sécurité privée.
              Notre engagement envers l'excellence et notre approche innovante nous ont permis de devenir un partenaire
              de confiance pour de nombreuses entreprises et organisations à travers le pays.</p>
            <p class="mt-4">Notre succès repose sur notre capacité à comprendre les enjeux de sécurité spécifiques à
              chaque client et à proposer des solutions adaptées, soutenues par une équipe hautement qualifiée et des
              équipements de pointe.</p>
          </div>
        </div>
      </div>

      <!-- Notre Savoir-faire -->
      <section class="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-10 md:mb-16">
            <span class="text-[#23c55e] font-semibold text-xs sm:text-sm uppercase tracking-wider">Notre
              expertise</span>
            <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-[#111829] mt-3 md:mt-4 mb-4 md:mb-6">Notre
              Savoir-faire</h2>
            <p class="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base">Fort de notre expérience dans le domaine de
              la sécurité, nous avons développé un savoir-faire unique et reconnu sur le marché sénégalais</p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12" v-motion
            :initial="{ opacity: 0, y: 50 }" :enter="{ opacity: 1, y: 0 }">
            <div
              class="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:border-[#23c55e]/30 transition-all duration-300">
              <div class="w-16 h-16 bg-[#23c55e]/10 rounded-xl flex items-center justify-center mb-6">
                <ShieldCheckIcon class="w-8 h-8 text-[#23c55e]" />
              </div>
              <h3 class="text-xl font-semibold text-[#111829] mb-4">Sécurité globale</h3>
              <p class="text-gray-600 mb-4">Notre approche intègre différentes dimensions de la sécurité pour une
                protection complète de vos biens et de vos personnes.</p>
              <ul class="space-y-2">
                <li class="flex items-start">
                  <CheckCircleIcon class="w-5 h-5 text-[#23c55e] mt-0.5 flex-shrink-0" />
                  <span class="ml-2 text-gray-600">Analyse de risques personnalisée</span>
                </li>
                <li class="flex items-start">
                  <CheckCircleIcon class="w-5 h-5 text-[#23c55e] mt-0.5 flex-shrink-0" />
                  <span class="ml-2 text-gray-600">Solutions adaptées à chaque secteur d'activité</span>
                </li>
              </ul>
            </div>

            <div
              class="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:border-[#23c55e]/30 transition-all duration-300">
              <div class="w-16 h-16 bg-[#23c55e]/10 rounded-xl flex items-center justify-center mb-6">
                <AcademicCapIcon class="w-8 h-8 text-[#23c55e]" />
              </div>
              <h3 class="text-xl font-semibold text-[#111829] mb-4">Formation continue</h3>
              <p class="text-gray-600 mb-4">Nos agents bénéficient de formations régulières pour maintenir un niveau
                d'excellence et s'adapter aux nouvelles menaces.</p>
              <ul class="space-y-2">
                <li class="flex items-start">
                  <CheckCircleIcon class="w-5 h-5 text-[#23c55e] mt-0.5 flex-shrink-0" />
                  <span class="ml-2 text-gray-600">Programmes de formation certifiés</span>
                </li>
                <li class="flex items-start">
                  <CheckCircleIcon class="w-5 h-5 text-[#23c55e] mt-0.5 flex-shrink-0" />
                  <span class="ml-2 text-gray-600">Mises à jour régulières des compétences</span>
                </li>
              </ul>
            </div>

            <div
              class="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:border-[#23c55e]/30 transition-all duration-300">
              <div class="w-16 h-16 bg-[#23c55e]/10 rounded-xl flex items-center justify-center mb-6">
                <CogIcon class="w-8 h-8 text-[#23c55e]" />
              </div>
              <h3 class="text-xl font-semibold text-[#111829] mb-4">Innovation technologique</h3>
              <p class="text-gray-600 mb-4">Nous intégrons les dernières technologies pour optimiser l'efficacité de nos
                services de sécurité.</p>
              <ul class="space-y-2">
                <li class="flex items-start">
                  <CheckCircleIcon class="w-5 h-5 text-[#23c55e] mt-0.5 flex-shrink-0" />
                  <span class="ml-2 text-gray-600">Outils de surveillance avancés</span>
                </li>
                <li class="flex items-start">
                  <CheckCircleIcon class="w-5 h-5 text-[#23c55e] mt-0.5 flex-shrink-0" />
                  <span class="ml-2 text-gray-600">Solutions connectées pour une sécurité proactive</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Notre Méthodologie -->
      <section class="py-16 md:py-24 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-10 md:mb-16">
            <span class="text-[#23c55e] font-semibold text-xs sm:text-sm uppercase tracking-wider">Notre approche</span>
            <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-[#111829] mt-3 md:mt-4 mb-4 md:mb-6">Notre
              Méthodologie</h2>
            <p class="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base">Notre démarche rigoureuse garantit des
              solutions de sécurité efficaces et sur mesure pour répondre à vos enjeux spécifiques</p>
          </div>

          <div class="relative">
            <!-- Timeline -->
            <div class="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#23c55e]/20 hidden md:block"></div>

            <!-- Étapes -->
            <div class="space-y-8 md:space-y-16">
              <div class="relative flex flex-col md:flex-row items-center" v-motion :initial="{ opacity: 0, y: 30 }"
                :visible="{ opacity: 1, y: 0 }">
                <div class="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right w-full">
                  <div class="bg-white p-4 sm:p-6 rounded-xl shadow-md border border-gray-100 md:inline-block w-full">
                    <h3 class="text-lg sm:text-xl font-bold text-[#111829] mb-2">1. Analyse des besoins</h3>
                    <p class="text-gray-600 text-sm sm:text-base">Nous réalisons un audit complet de votre environnement
                      pour identifier les risques potentiels et comprendre vos besoins spécifiques.</p>
                  </div>
                </div>
                <div
                  class="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-[#23c55e] flex items-center justify-center text-white font-bold z-10 hidden md:flex">
                  1</div>
                <div class="md:w-1/2 md:pl-12 hidden md:block"></div>
              </div>

              <div class="relative flex flex-col md:flex-row items-center" v-motion :initial="{ opacity: 0, y: 30 }"
                :visible="{ opacity: 1, y: 0, transition: { delay: 200 } }">
                <div class="md:w-1/2 md:pr-12 mb-8 md:mb-0 order-2 md:order-1">
                  <div class="hidden md:block"></div>
                </div>
                <div
                  class="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-[#23c55e] flex items-center justify-center text-white font-bold z-10 hidden md:flex">
                  2</div>
                <div class="md:w-1/2 md:pl-12 order-1 md:order-2 md:text-left">
                  <div class="bg-white p-6 rounded-xl shadow-md border border-gray-100 inline-block">
                    <h3 class="text-xl font-bold text-[#111829] mb-2">2. Conception de solution</h3>
                    <p class="text-gray-600">Nous élaborons une stratégie sur mesure qui intègre les ressources humaines
                      et technologies adaptées à vos besoins et contraintes.</p>
                  </div>
                </div>
              </div>

              <div class="relative flex flex-col md:flex-row items-center" v-motion :initial="{ opacity: 0, y: 30 }"
                :visible="{ opacity: 1, y: 0, transition: { delay: 400 } }">
                <div class="md:w-1/2 md:pr-12 mb-8 md:mb-0 md:text-right">
                  <div class="bg-white p-6 rounded-xl shadow-md border border-gray-100 inline-block">
                    <h3 class="text-xl font-bold text-[#111829] mb-2">3. Mise en œuvre</h3>
                    <p class="text-gray-600">Nous déployons les équipes et les solutions technologiques selon un
                      planning optimisé pour assurer une transition fluide.</p>
                  </div>
                </div>
                <div
                  class="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-[#23c55e] flex items-center justify-center text-white font-bold z-10 hidden md:flex">
                  3</div>
                <div class="md:w-1/2 md:pl-12">
                  <div class="hidden md:block"></div>
                </div>
              </div>

              <div class="relative flex flex-col md:flex-row items-center" v-motion :initial="{ opacity: 0, y: 30 }"
                :visible="{ opacity: 1, y: 0, transition: { delay: 600 } }">
                <div class="md:w-1/2 md:pr-12 mb-8 md:mb-0 order-2 md:order-1">
                  <div class="hidden md:block"></div>
                </div>
                <div
                  class="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-[#23c55e] flex items-center justify-center text-white font-bold z-10 hidden md:flex">
                  4</div>
                <div class="md:w-1/2 md:pl-12 order-1 md:order-2 md:text-left">
                  <div class="bg-white p-6 rounded-xl shadow-md border border-gray-100 inline-block">
                    <h3 class="text-xl font-bold text-[#111829] mb-2">4. Suivi et amélioration continue</h3>
                    <p class="text-gray-600">Nous assurons un suivi régulier des dispositifs et proposons des
                      ajustements pour une amélioration continue de votre sécurité.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Centre Opérations de Besoins et d'Urgence (COBU) -->
      <section class="py-16 md:py-24 bg-white relative">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-10 md:mb-16">
            <span class="text-[#23c55e] font-semibold text-xs sm:text-sm uppercase tracking-wider">Service d'urgence</span>
            <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-[#111829] mt-3 md:mt-4 mb-4 md:mb-6">Centre Opérations de Besoins et d'Urgence</h2>
            <p class="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base">
              Notre COBU est opérationnel en permanence pour garantir une réponse immédiate à tous vos besoins de sécurité
            </p>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div class="relative order-2 lg:order-1" v-motion :initial="{ opacity: 0, y: 30 }" :visible="{ opacity: 1, y: 0 }">
              <div class="lg:max-w-lg">
                <div class="bg-[#111829] rounded-xl p-8 shadow-xl relative overflow-hidden">
                  <div class="absolute top-0 right-0 w-20 h-20 bg-[#23c55e]/20 rounded-bl-xl z-0"></div>
                  <h3 class="text-xl text-white font-bold mb-4 relative z-10">Contactez notre COBU</h3>
                  <p class="text-gray-300 mb-6 relative z-10">
                    Notre Centre Opérations de Besoins et d'Urgence est accessible 24h/24 et 7j/7 pour répondre à toutes vos demandes et urgences.
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
            
            <div class="order-1 lg:order-2" v-motion :initial="{ opacity: 0, y: 30 }" :visible="{ opacity: 1, y: 0, transition: { delay: 200 } }">
              <div class="space-y-6">
                <h3 class="text-2xl font-bold text-[#111829]">Une intervention rapide et efficace</h3>
                <p class="text-gray-600">
                  Chez PROSEN, nous comprenons que les situations d'urgence nécessitent une réponse immédiate. C'est pourquoi notre Centre Opérations de Besoins et d'Urgence (COBU) est disponible 24h/24 et 7j/7 pour assurer votre sécurité à tout moment.
                </p>
                <p class="text-gray-600">
                  Notre équipe qualifiée est prête à répondre à vos demandes et à coordonner les interventions nécessaires pour gérer efficacement toute situation critique.
                </p>
                
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                  <div class="bg-gray-50 p-5 rounded-xl border border-gray-100">
                    <LockClosedIcon class="w-8 h-8 text-[#23c55e] mb-3" />
                    <h4 class="text-lg font-semibold text-[#111829] mb-2">Gestion des incidents</h4>
                    <p class="text-gray-600 text-sm">Protocoles d'intervention rapide et adaptés à chaque type d'urgence</p>
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

      <!-- Nos Ressources -->
      <section class="py-16 md:py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-10 md:mb-16">
            <span class="text-[#23c55e] font-semibold text-xs sm:text-sm uppercase tracking-wider">Notre force</span>
            <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-[#111829] mt-3 md:mt-4 mb-4 md:mb-6">Nos
              Ressources</h2>
            <p class="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base">Nous disposons de ressources humaines et
              matérielles de qualité pour garantir des prestations à la hauteur de vos attentes</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div v-motion :initial="{ opacity: 0, x: -50 }" :visible="{ opacity: 1, x: 0 }"
              class="rounded-2xl overflow-hidden shadow-lg">
              <img src="/images/about/team.jpg" alt="Notre équipe" class="w-full h-auto object-cover" />
            </div>

            <div v-motion :initial="{ opacity: 0, x: 50 }" :visible="{ opacity: 1, x: 0 }" class="space-y-6">
              <div class="space-y-2">
                <h3 class="text-2xl font-bold text-[#111829]">Une équipe qualifiée</h3>
                <p class="text-gray-600">Notre équipe est composée de jeunes professionnels dynamiques et hautement
                  qualifiés dans le domaine de la sécurité. Nous valorisons la diversité et encourageons vivement les
                  candidatures féminines pour enrichir nos équipes.</p>
              </div>

              <div class="space-y-2">
                <h3 class="text-2xl font-bold text-[#111829]">Équipements modernes</h3>
                <p class="text-gray-600">Nous investissons dans des équipements de dernière génération pour garantir la
                  meilleure protection possible à nos clients et optimiser le travail de nos agents.</p>
              </div>

              <div class="space-y-2">
                <h3 class="text-2xl font-bold text-[#111829]">Démarche qualité</h3>
                <p class="text-gray-600">Nous sommes engagés dans une démarche d'amélioration continue de la qualité de
                  nos services, avec des processus rigoureux d'évaluation et de formation régulière.</p>
              </div>

              <div class="mt-8">
                <NuxtLink to="/carrieres"
                  class="inline-flex items-center px-8 py-4 bg-[#23c55e] text-white rounded-xl hover:bg-[#1ea550] transition-colors">
                  <span class="font-semibold">Rejoindre notre équipe</span>
                  <ArrowRightIcon class="w-5 h-5 ml-2" />
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Carrières -->
      <section class="py-16 md:py-24 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-10 md:mb-16">
            <span class="text-[#23c55e] font-semibold text-xs sm:text-sm uppercase tracking-wider">Recrutement</span>
            <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-[#111829] mt-3 md:mt-4 mb-4 md:mb-6">Rejoignez
              Notre Équipe</h2>
            <p class="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base">Nous sommes constamment à la recherche de
              talents pour renforcer nos équipes. Découvrez les opportunités de carrière chez PROSEN</p>
          </div>

          <div class="bg-white rounded-2xl shadow-lg overflow-hidden" v-motion :initial="{ opacity: 0, y: 50 }"
            :visible="{ opacity: 1, y: 0 }">
            <div class="md:flex flex-col md:flex-row">
              <div class="md:w-1/2 relative">
                <img src="/images/about/careers.jpg" alt="Carrières chez PROSEN"
                  class="w-full h-60 md:h-full object-cover" />
                <div
                  class="absolute inset-0 bg-gradient-to-r from-[#111829]/70 to-transparent flex items-center justify-center p-4 sm:p-8 md:p-12">
                  <div>
                    <h3 class="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3 md:mb-4">Pourquoi nous
                      rejoindre ?</h3>
                    <ul class="space-y-2 md:space-y-3 text-white text-sm sm:text-base">
                      <li class="flex items-start">
                        <CheckCircleIcon class="w-5 h-5 text-[#23c55e] mt-1 flex-shrink-0" />
                        <span class="ml-2">Environnement de travail stimulant</span>
                      </li>
                      <li class="flex items-start">
                        <CheckCircleIcon class="w-5 h-5 text-[#23c55e] mt-1 flex-shrink-0" />
                        <span class="ml-2">Formation continue et développement</span>
                      </li>
                      <li class="flex items-start">
                        <CheckCircleIcon class="w-5 h-5 text-[#23c55e] mt-1 flex-shrink-0" />
                        <span class="ml-2">Opportunités d'évolution professionnelle</span>
                      </li>
                      <li class="flex items-start">
                        <CheckCircleIcon class="w-5 h-5 text-[#23c55e] mt-1 flex-shrink-0" />
                        <span class="ml-2">Égalité des chances pour tous</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="md:w-1/2 p-6 sm:p-8 md:p-12 flex flex-col justify-center">
                <h3 class="text-xl sm:text-2xl font-bold text-[#111829] mb-4 md:mb-6">Nos valeurs</h3>
                <p class="text-gray-600 mb-4 md:mb-6 text-sm sm:text-base">Chez PROSEN, nous valorisons particulièrement
                  l'intégrité, le professionnalisme et la diversité. Nous encourageons spécialement les candidatures
                  féminines dans ce secteur traditionnellement masculin pour créer des équipes équilibrées et
                  performantes.</p>
                <p class="text-gray-600 mb-6 md:mb-8 text-sm sm:text-base">Notre équipe est principalement composée de
                  jeunes professionnels dynamiques qui apportent créativité et énergie à notre entreprise.</p>
                <div class="mt-auto">
                  <NuxtLink to="/carrieres"
                    class="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-[#23c55e] text-white rounded-xl hover:bg-[#1ea550] transition-colors">
                    <span class="font-semibold text-sm sm:text-base">Voir nos offres d'emploi</span>
                    <ArrowRightIcon class="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Domaines d'intervention avec images -->
      <div class="py-8 md:py-12 mb-16 md:mb-24">
        <div class="text-center mb-10 md:mb-16">
          <span class="text-[#23c55e] font-semibold text-xs sm:text-sm uppercase tracking-wider">Nos secteurs</span>
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-[#111829] mt-3 md:mt-4">Domaines d'intervention
          </h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="(domain, index) in domains" :key="index" v-motion :initial="{ opacity: 0, y: 30 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: index * 200 } }"
            class="group relative overflow-hidden rounded-xl">
            <div class="aspect-w-4 aspect-h-3">
              <img :src="`/images/domain-${index + 1}.jpg`" :alt="domain.title"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div class="absolute inset-0 bg-gradient-to-t from-[#111829] via-[#111829]/60 to-transparent opacity-90">
              </div>
            </div>
            <div class="absolute bottom-0 left-0 right-0 p-6">
              <h3 class="text-xl font-semibold text-white mb-4">{{ domain.title }}</h3>
              <ul class="space-y-2">
                <li v-for="(item, itemIndex) in domain.items" :key="itemIndex" class="flex items-center text-gray-300">
                  <ArrowSmallRightIcon class="w-4 h-4 text-[#23c55e] mr-2" />
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Présence Nationale et Expansion -->
      <section class="py-16 md:py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-10 md:mb-16">
            <span class="text-[#23c55e] font-semibold text-xs sm:text-sm uppercase tracking-wider">Notre
              rayonnement</span>
            <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-[#111829] mt-3 md:mt-4 mb-4 md:mb-6">Présence
              Nationale et Expansion</h2>
            <p class="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base">Notre engagement pour la sécurité s'étend à
              travers tout le territoire sénégalais et bientôt au-delà des frontières</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div v-motion :initial="{ opacity: 0, x: -50 }" :visible="{ opacity: 1, x: 0 }" class="space-y-6">
              <div class="space-y-2">
                <h3 class="text-2xl font-bold text-[#111829]">Présence sur tout le territoire</h3>
                <p class="text-gray-600">PROSEN est fière d'être présente dans toutes les régions du Sénégal. Grâce à
                  notre réseau d'agences et de collaborateurs locaux, nous assurons une couverture complète du
                  territoire national, permettant une réactivité optimale et une connaissance approfondie des contextes
                  locaux de sécurité.</p>
              </div>

              <div class="space-y-2">
                <h3 class="text-2xl font-bold text-[#111829]">Expansion sous-régionale</h3>
                <p class="text-gray-600">Fort de notre succès au Sénégal, nous préparons activement notre développement
                  dans la sous-région ouest-africaine. Cette expansion prochaine nous permettra d'offrir notre expertise
                  et nos services de qualité au-delà des frontières sénégalaises, tout en adaptant nos approches aux
                  spécificités de chaque marché.</p>
              </div>

              <div class="mt-8 flex flex-wrap gap-4">
                <div class="flex items-center px-4 py-2 bg-[#23c55e]/10 rounded-full">
                  <CheckCircleIcon class="w-5 h-5 text-[#23c55e] mr-2" />
                  <span class="text-gray-700">Dakar</span>
                </div>
                <div class="flex items-center px-4 py-2 bg-[#23c55e]/10 rounded-full">
                  <CheckCircleIcon class="w-5 h-5 text-[#23c55e] mr-2" />
                  <span class="text-gray-700">Thiès</span>
                </div>
                <div class="flex items-center px-4 py-2 bg-[#23c55e]/10 rounded-full">
                  <CheckCircleIcon class="w-5 h-5 text-[#23c55e] mr-2" />
                  <span class="text-gray-700">Saint-Louis</span>
                </div>
                <div class="flex items-center px-4 py-2 bg-[#23c55e]/10 rounded-full">
                  <CheckCircleIcon class="w-5 h-5 text-[#23c55e] mr-2" />
                  <span class="text-gray-700">Ziguinchor</span>
                </div>
                <div class="flex items-center px-4 py-2 bg-[#23c55e]/10 rounded-full">
                  <CheckCircleIcon class="w-5 h-5 text-[#23c55e] mr-2" />
                  <span class="text-gray-700">Tambacounda</span>
                </div>
                <div class="flex items-center px-4 py-2 bg-[#23c55e]/10 rounded-full">
                  <CheckCircleIcon class="w-5 h-5 text-[#23c55e] mr-2" />
                  <span class="text-gray-700">Kolda</span>
                </div>
              </div>
            </div>

            <div v-motion :initial="{ opacity: 0, x: 50 }" :visible="{ opacity: 1, x: 0 }" class="relative">
              <div class="absolute -inset-4 bg-[#23c55e]/10 rounded-xl transform -rotate-3"></div>
              <img src="/images/about/map-senegal.jpg" alt="Présence nationale de PROSEN"
                class="w-full h-auto object-cover rounded-xl shadow-xl relative" />
              <div
                class="absolute top-0 right-0 bg-[#23c55e] text-white px-4 py-2 rounded-tl-none rounded-tr-xl rounded-bl-xl rounded-br-none font-semibold text-sm">
                Bientôt dans la sous-région
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Notre Gouvernance -->
      <section class="py-16 md:py-24 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-10 md:mb-16">
            <span class="text-[#23c55e] font-semibold text-xs sm:text-sm uppercase tracking-wider">Nos principes</span>
            <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-[#111829] mt-3 md:mt-4 mb-4 md:mb-6">Notre
              Gouvernance</h2>
            <p class="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base">Une organisation structurée et des valeurs
              fortes pour garantir l'excellence de nos services</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div v-motion :initial="{ opacity: 0, y: 30 }" :visible="{ opacity: 1, y: 0 }"
              class="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:border-[#23c55e]/30 transition-all duration-300">
              <div class="w-16 h-16 bg-[#23c55e]/10 rounded-xl flex items-center justify-center mb-6">
                <ScaleIcon class="w-8 h-8 text-[#23c55e]" />
              </div>
              <h3 class="text-xl font-semibold text-[#111829] mb-4">Éthique et Conformité</h3>
              <p class="text-gray-600 mb-6">Notre entreprise est gouvernée par des principes stricts d'éthique
                professionnelle et de conformité réglementaire. Nous nous engageons à respecter scrupuleusement les lois
                et réglementations en vigueur dans tous nos domaines d'activité.</p>
              <ul class="space-y-2">
                <li class="flex items-start">
                  <CheckCircleIcon class="w-5 h-5 text-[#23c55e] mt-0.5 flex-shrink-0" />
                  <span class="ml-2 text-gray-600">Respect des normes sectorielles</span>
                </li>
                <li class="flex items-start">
                  <CheckCircleIcon class="w-5 h-5 text-[#23c55e] mt-0.5 flex-shrink-0" />
                  <span class="ml-2 text-gray-600">Transparence dans nos pratiques</span>
                </li>
              </ul>
            </div>

            <div v-motion :initial="{ opacity: 0, y: 30 }" :visible="{ opacity: 1, y: 0, transition: { delay: 200 } }"
              class="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:border-[#23c55e]/30 transition-all duration-300">
              <div class="w-16 h-16 bg-[#23c55e]/10 rounded-xl flex items-center justify-center mb-6">
                <UsersIcon class="w-8 h-8 text-[#23c55e]" />
              </div>
              <h3 class="text-xl font-semibold text-[#111829] mb-4">Structure Organisationnelle</h3>
              <p class="text-gray-600 mb-6">PROSEN est structurée pour garantir efficacité opérationnelle et réactivité.
                Notre conseil d'administration, composé d'experts du secteur, travaille en étroite collaboration avec
                une équipe de direction expérimentée pour piloter notre développement.</p>
              <ul class="space-y-2">
                <li class="flex items-start">
                  <CheckCircleIcon class="w-5 h-5 text-[#23c55e] mt-0.5 flex-shrink-0" />
                  <span class="ml-2 text-gray-600">Direction collégiale et participative</span>
                </li>
                <li class="flex items-start">
                  <CheckCircleIcon class="w-5 h-5 text-[#23c55e] mt-0.5 flex-shrink-0" />
                  <span class="ml-2 text-gray-600">Processus de décision optimisé</span>
                </li>
              </ul>
            </div>

            <div v-motion :initial="{ opacity: 0, y: 30 }" :visible="{ opacity: 1, y: 0, transition: { delay: 400 } }"
              class="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:border-[#23c55e]/30 transition-all duration-300">
              <div class="w-16 h-16 bg-[#23c55e]/10 rounded-xl flex items-center justify-center mb-6">
                <HeartIcon class="w-8 h-8 text-[#23c55e]" />
              </div>
              <h3 class="text-xl font-semibold text-[#111829] mb-4">Responsabilité Sociale</h3>
              <p class="text-gray-600 mb-6">Notre gouvernance intègre pleinement les enjeux de responsabilité sociale et
                environnementale. Nous œuvrons activement à l'inclusion, la diversité et la réduction de notre empreinte
                écologique dans toutes nos opérations.</p>
              <ul class="space-y-2">
                <li class="flex items-start">
                  <CheckCircleIcon class="w-5 h-5 text-[#23c55e] mt-0.5 flex-shrink-0" />
                  <span class="ml-2 text-gray-600">Politique de diversité inclusive</span>
                </li>
                <li class="flex items-start">
                  <CheckCircleIcon class="w-5 h-5 text-[#23c55e] mt-0.5 flex-shrink-0" />
                  <span class="ml-2 text-gray-600">Engagement environnemental</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Notre Identité et Stratégie -->
      <section class="py-16 md:py-24 mb-8 md:mb-12 bg-white text-[#111829] relative overflow-hidden">
        <div class="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5"></div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div class="text-center mb-10 md:mb-16">
            <span class="text-[#23c55e] font-semibold text-xs sm:text-sm uppercase tracking-wider">Notre ADN</span>
            <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-[#111829] mt-3 md:mt-4 mb-4 md:mb-6">Notre
              Identité et Vision Stratégique</h2>
            <p class="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base">Ce qui définit PROSEN et oriente notre
              développement pour les années à venir</p>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div v-motion :initial="{ opacity: 0, y: 30 }" :visible="{ opacity: 1, y: 0 }"
              class="bg-[#f8fafc] rounded-2xl p-8 border border-gray-100 shadow-lg">
              <h3 class="text-2xl font-bold text-[#111829] mb-6 flex items-center">
                <FingerPrintIcon class="w-8 h-8 text-[#23c55e] mr-3" />
                Notre Identité
              </h3>

              <div class="space-y-6">
                <div>
                  <h4 class="text-xl font-semibold text-[#23c55e] mb-2">Mission</h4>
                  <p class="text-gray-600">PROSEN a pour mission d'assurer la sécurité des personnes et des biens avec
                    excellence et intégrité. Nous nous engageons à créer un environnement sûr et serein pour nos
                    clients, contribuant ainsi au développement économique et social du Sénégal.</p>
                </div>

                <div>
                  <h4 class="text-xl font-semibold text-[#23c55e] mb-2">Valeurs</h4>
                  <ul class="space-y-3 mt-4">
                    <li class="flex items-start">
                      <div
                        class="w-8 h-8 bg-[#23c55e]/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <span class="text-[#23c55e] font-bold">P</span>
                      </div>
                      <div>
                        <span class="font-semibold text-[#111829]">Professionnalisme</span>
                        <p class="text-gray-600 text-sm mt-1">Excellence dans tous nos services et interventions</p>
                      </div>
                    </li>
                    <li class="flex items-start">
                      <div
                        class="w-8 h-8 bg-[#23c55e]/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <span class="text-[#23c55e] font-bold">R</span>
                      </div>
                      <div>
                        <span class="font-semibold text-[#111829]">Responsabilité</span>
                        <p class="text-gray-600 text-sm mt-1">Engagement total envers nos clients et la société</p>
                      </div>
                    </li>
                    <li class="flex items-start">
                      <div
                        class="w-8 h-8 bg-[#23c55e]/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <span class="text-[#23c55e] font-bold">O</span>
                      </div>
                      <div>
                        <span class="font-semibold text-[#111829]">Opportunité</span>
                        <p class="text-gray-600 text-sm mt-1">Créer des opportunités pour nos employés et partenaires
                        </p>
                      </div>
                    </li>
                    <li class="flex items-start">
                      <div
                        class="w-8 h-8 bg-[#23c55e]/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <span class="text-[#23c55e] font-bold">S</span>
                      </div>
                      <div>
                        <span class="font-semibold text-[#111829]">Service</span>
                        <p class="text-gray-600 text-sm mt-1">Dévouement total à la satisfaction client</p>
                      </div>
                    </li>
                    <li class="flex items-start">
                      <div
                        class="w-8 h-8 bg-[#23c55e]/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <span class="text-[#23c55e] font-bold">E</span>
                      </div>
                      <div>
                        <span class="font-semibold text-[#111829]">Éthique</span>
                        <p class="text-gray-600 text-sm mt-1">Intégrité dans toutes nos actions</p>
                      </div>
                    </li>
                    <li class="flex items-start">
                      <div
                        class="w-8 h-8 bg-[#23c55e]/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <span class="text-[#23c55e] font-bold">N</span>
                      </div>
                      <div>
                        <span class="font-semibold text-[#111829]">Nouveauté</span>
                        <p class="text-gray-600 text-sm mt-1">Innovation constante dans nos approches</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div v-motion :initial="{ opacity: 0, y: 30 }" :visible="{ opacity: 1, y: 0, transition: { delay: 200 } }"
              class="bg-[#f8fafc] rounded-2xl p-8 border border-gray-100 shadow-lg">
              <h3 class="text-2xl font-bold text-[#111829] mb-6 flex items-center">
                <ChartBarIcon class="w-8 h-8 text-[#23c55e] mr-3" />
                Notre Stratégie
              </h3>

              <div class="space-y-6">
                <div>
                  <h4 class="text-xl font-semibold text-[#23c55e] mb-2">Vision</h4>
                  <p class="text-gray-600">PROSEN aspire à devenir la référence incontournable en matière de sécurité en
                    Afrique de l'Ouest, reconnue pour l'excellence de ses services, l'innovation de ses solutions et son
                    engagement envers ses clients et la communauté.</p>
                </div>

                <div>
                  <h4 class="text-xl font-semibold text-[#23c55e] mb-2">Axes Stratégiques</h4>
                  <div class="space-y-4 mt-4">
                    <div class="bg-white rounded-xl p-4 border border-gray-100">
                      <h5 class="font-semibold text-[#111829] flex items-center">
                        <AcademicCapIcon class="w-5 h-5 text-[#23c55e] mr-2" />
                        Formation d'Excellence
                      </h5>
                      <p class="text-gray-600 mt-2">Investissement continu dans la formation de nos équipes pour
                        maintenir un niveau d'expertise inégalé</p>
                    </div>

                    <div class="bg-white rounded-xl p-4 border border-gray-100">
                      <h5 class="font-semibold text-[#111829] flex items-center">
                        <LightBulbIcon class="w-5 h-5 text-[#23c55e] mr-2" />
                        Innovation Technologique
                      </h5>
                      <p class="text-gray-600 mt-2">Intégration des dernières technologies de sécurité pour offrir des
                        solutions toujours plus efficaces</p>
                    </div>

                    <div class="bg-white rounded-xl p-4 border border-gray-100">
                      <h5 class="font-semibold text-[#111829] flex items-center">
                        <GlobeAltIcon class="w-5 h-5 text-[#23c55e] mr-2" />
                        Expansion Régionale
                      </h5>
                      <p class="text-gray-600 mt-2">Développement stratégique de notre présence dans la sous-région
                        ouest-africaine pour un rayonnement international</p>
                    </div>

                    <div class="bg-white rounded-xl p-4 border border-gray-100">
                      <h5 class="font-semibold text-[#111829] flex items-center">
                        <UserGroupIcon class="w-5 h-5 text-[#23c55e] mr-2" />
                        Diversité et Inclusion
                      </h5>
                      <p class="text-gray-600 mt-2">Promotion active de la diversité au sein de nos équipes, avec un
                        accent particulier sur l'inclusion des femmes dans le secteur de la sécurité</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div> <!-- Fermeture du div.max-w-7xl mx-auto -->

    <!-- CTA Section - déplacé hors du conteneur principal -->
    <section class="relative bg-[#23c55e] overflow-hidden">
      <div class="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10"></div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative">
        <div class="bg-white/10 backdrop-blur-sm rounded-3xl p-6 sm:p-8 md:p-12 border border-white/20" v-motion
          :initial="{ opacity: 0, scale: 0.95 }" :enter="{
            opacity: 1,
            scale: 1,
            transition: {
              duration: 500
            }
          }">
          <div class="text-center">
            <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">
              Besoin d'une Solution de Sécurité sur Mesure ?
            </h2>
            <p class="text-base sm:text-lg md:text-xl text-white/90 mb-6 md:mb-8 max-w-2xl mx-auto">
              Contactez nos experts pour une évaluation gratuite de vos besoins en sécurité
            </p>
            <div class="flex flex-col sm:flex-row flex-wrap gap-4 justify-center">
              <NuxtLink to="/devis"
                class="group inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-white text-[#111829] hover:bg-gray-100 transition-all duration-300">
                <span class="font-semibold text-sm sm:text-base">Obtenir un Devis Gratuit</span>
                <ArrowRightIcon
                  class="w-4 h-4 sm:w-5 sm:h-5 ml-2 transform transition-transform group-hover:translate-x-1" />
              </NuxtLink>
              <NuxtLink to="/services"
                class="group inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 rounded-xl border-2 border-white text-white hover:bg-white hover:text-[#111829] transition-all duration-300">
                <span class="font-semibold text-sm sm:text-base">En savoir plus</span>
                <ArrowRightIcon
                  class="w-4 h-4 sm:w-5 sm:h-5 ml-2 transform transition-transform group-hover:translate-x-1" />
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
  ArrowRightIcon,
  BuildingOfficeIcon,
  HomeIcon,
  ShoppingBagIcon,
  CogIcon,
  ChevronUpIcon,
  ChevronDownIcon,
  ScaleIcon,
  UsersIcon,
  HeartIcon,
  FingerPrintIcon,
  ChartBarIcon,
  LightBulbIcon,
  GlobeAltIcon,
  PhoneIcon,
  LockClosedIcon,
  ClockIcon
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