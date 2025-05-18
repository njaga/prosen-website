<template>
  <div>
    <SEO 
      title="Demande de devis d'agents reçue - Confirmation"
      description="Votre demande de devis pour nos agents de sécurité a bien été reçue"
    />

    <div class="min-h-screen flex flex-col">
      <!-- Hero section -->
      <section class="flex-grow flex items-center justify-center py-16 px-4 bg-gray-50">
        <div class="max-w-3xl w-full bg-white rounded-2xl shadow-xl overflow-hidden">
          <!-- Bannière verte -->
          <div class="bg-[#23c55e] py-8 px-6 text-center">
            <div class="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center mb-6">
              <CheckIcon class="w-12 h-12 text-[#23c55e]" />
            </div>
            <h1 class="text-3xl font-bold text-white">Demande reçue !</h1>
            <p class="text-white/90 mt-2">Votre demande de devis a été envoyée avec succès</p>
          </div>

          <!-- Contenu -->
          <div class="py-10 px-6 md:px-10">
            <div class="text-center mb-8">
              <h2 class="text-2xl font-semibold text-gray-800">Merci pour votre demande</h2>
              <p class="text-gray-600 mt-2">
                Notre équipe commerciale va étudier votre demande et vous contactera dans les plus brefs délais pour vous proposer une offre adaptée à vos besoins.
              </p>
            </div>

            <!-- Étapes suivantes -->
            <div class="space-y-6 mb-10">
              <h3 class="text-lg font-semibold text-gray-700">Prochaines étapes :</h3>
              
              <div class="flex items-start">
                <div class="w-10 h-10 rounded-full bg-[#23c55e]/10 flex items-center justify-center shrink-0">
                  <EnvelopeIcon class="w-5 h-5 text-[#23c55e]" />
                </div>
                <div class="ml-4">
                  <h4 class="font-medium text-gray-800">Confirmation par e-mail</h4>
                  <p class="text-gray-600 text-sm mt-1">
                    Vous avez reçu un email de confirmation avec un récapitulatif de votre demande.
                  </p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="w-10 h-10 rounded-full bg-[#23c55e]/10 flex items-center justify-center shrink-0">
                  <ClipboardDocumentCheckIcon class="w-5 h-5 text-[#23c55e]" />
                </div>
                <div class="ml-4">
                  <h4 class="font-medium text-gray-800">Étude de votre demande</h4>
                  <p class="text-gray-600 text-sm mt-1">
                    Notre équipe analyse votre demande et prépare une offre adaptée à vos besoins d'agents de sécurité.
                  </p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="w-10 h-10 rounded-full bg-[#23c55e]/10 flex items-center justify-center shrink-0">
                  <PhoneIcon class="w-5 h-5 text-[#23c55e]" />
                </div>
                <div class="ml-4">
                  <h4 class="font-medium text-gray-800">Contact sous 24-48h</h4>
                  <p class="text-gray-600 text-sm mt-1">
                    Un conseiller vous contactera pour discuter de votre demande et vous proposer une solution personnalisée.
                  </p>
                </div>
              </div>
            </div>

            <!-- Boutons d'action -->
            <div class="flex flex-col md:flex-row gap-4 justify-center">
              <NuxtLink 
                to="/"
                class="inline-flex items-center justify-center px-6 py-3 border border-[#23c55e] text-[#23c55e] bg-white hover:bg-[#23c55e]/5 font-medium rounded-xl transition-colors"
              >
                <ArrowLeftIcon class="w-5 h-5 mr-2" />
                Retour à l'accueil
              </NuxtLink>
              
              <NuxtLink 
                to="/services"
                class="inline-flex items-center justify-center px-6 py-3 border border-transparent bg-[#23c55e] text-white hover:bg-[#1fa04d] font-medium rounded-xl transition-colors"
              >
                Découvrir nos services
                <ArrowRightIcon class="w-5 h-5 ml-2" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import {
  CheckIcon,
  EnvelopeIcon,
  PhoneIcon,
  ClipboardDocumentCheckIcon,
  ArrowLeftIcon,
  ArrowRightIcon
} from '@heroicons/vue/24/outline';
</script> 