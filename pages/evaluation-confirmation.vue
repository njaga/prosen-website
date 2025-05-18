<template>
  <div>
    <SEO 
      title="Confirmation de votre Évaluation"
      description="Votre demande d'évaluation de sécurité a été enregistrée avec succès"
    />

    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center bg-gradient-to-br from-[#111829] via-[#1a2436] to-[#23c55e]/20">
      <div class="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10"></div>
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        <div class="text-center">
          <div class="inline-flex items-center justify-center w-20 h-20 bg-[#23c55e]/10 rounded-full mb-8">
            <CheckCircleIcon class="w-12 h-12 text-[#23c55e]" />
          </div>
          
          <h1 class="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Évaluation Enregistrée avec Succès
          </h1>
          
          <p class="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
            Nous avons bien reçu votre demande d'évaluation détaillée. Notre équipe d'experts va analyser vos besoins et vous contactera dans les plus brefs délais.
          </p>

          <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12">
            <h2 class="text-2xl font-bold text-white mb-6">Prochaines étapes</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div class="text-center">
                <div class="w-12 h-12 bg-[#23c55e]/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <EnvelopeIcon class="w-6 h-6 text-[#23c55e]" />
                </div>
                <h3 class="text-lg font-medium text-white mb-2">Confirmation par Email</h3>
                <p class="text-gray-300 text-sm">Un récapitulatif de votre demande vous sera envoyé par email</p>
              </div>
              
              <div class="text-center">
                <div class="w-12 h-12 bg-[#23c55e]/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <PhoneIcon class="w-6 h-6 text-[#23c55e]" />
                </div>
                <h3 class="text-lg font-medium text-white mb-2">Contact sous 24h</h3>
                <p class="text-gray-300 text-sm">Un expert vous contactera pour planifier l'évaluation</p>
              </div>
              
              <div class="text-center">
                <div class="w-12 h-12 bg-[#23c55e]/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <DocumentTextIcon class="w-6 h-6 text-[#23c55e]" />
                </div>
                <h3 class="text-lg font-medium text-white mb-2">Rapport Détaillé</h3>
                <p class="text-gray-300 text-sm">Vous recevrez une proposition adaptée à vos besoins</p>
              </div>
            </div>
          </div>

          <div class="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <NuxtLink 
              to="/"
              class="px-8 py-3 bg-white text-[#111829] rounded-xl hover:bg-gray-100 transition-colors font-medium flex items-center"
            >
              <HomeIcon class="w-5 h-5 mr-2" />
              Retour à l'accueil
            </NuxtLink>
            
            <NuxtLink 
              to="/contact"
              class="px-8 py-3 bg-[#23c55e] text-white rounded-xl hover:bg-[#1ea550] transition-colors font-medium flex items-center"
            >
              <PhoneIcon class="w-5 h-5 mr-2" />
              Nous contacter
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
  EnvelopeIcon,
  PhoneIcon,
  DocumentTextIcon,
  HomeIcon
} from '@heroicons/vue/24/solid'
</script> 