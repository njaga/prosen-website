<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-50">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black/30 backdrop-blur-sm" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4 text-center">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel class="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
              <DialogTitle as="h3" class="text-2xl font-bold text-gray-900 mb-6">
                Planifier un Audit de Sécurité sur Site
              </DialogTitle>

              <form @submit.prevent="submitAuditRequest" class="space-y-6">
                <!-- Informations de contact -->
                <div>
                  <h4 class="font-medium text-gray-900 mb-4">Informations de contact</h4>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label class="block text-sm font-medium text-gray-700 mb-1">Nom complet</label>
                      <input 
                        type="text" 
                        v-model="form.fullName"
                        required
                        class="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#23c55e]/50 focus:border-[#23c55e]"
                      />
                    </div>
                    <div>
                      <label class="block text-sm font-medium text-gray-700 mb-1">Email professionnel</label>
                      <input 
                        type="email" 
                        v-model="form.email"
                        required
                        class="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#23c55e]/50 focus:border-[#23c55e]"
                      />
                    </div>
                    <div>
                      <label class="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
                      <input 
                        type="tel" 
                        v-model="form.phone"
                        required
                        class="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#23c55e]/50 focus:border-[#23c55e]"
                      />
                    </div>
                    <div>
                      <label class="block text-sm font-medium text-gray-700 mb-1">Fonction</label>
                      <input 
                        type="text" 
                        v-model="form.position"
                        required
                        class="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#23c55e]/50 focus:border-[#23c55e]"
                      />
                    </div>
                  </div>
                </div>

                <!-- Détails de l'audit -->
                <div>
                  <h4 class="font-medium text-gray-900 mb-4">Détails de l'audit souhaité</h4>
                  <div class="space-y-4">
                    <div>
                      <label class="block text-sm font-medium text-gray-700 mb-1">Date souhaitée</label>
                      <input 
                        type="date" 
                        v-model="form.preferredDate"
                        required
                        min="2024-03-01"
                        class="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#23c55e]/50 focus:border-[#23c55e]"
                      />
                    </div>
                    <div>
                      <label class="block text-sm font-medium text-gray-700 mb-1">Type d'audit</label>
                      <select 
                        v-model="form.auditType"
                        required
                        class="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#23c55e]/50 focus:border-[#23c55e]"
                      >
                        <option value="" disabled>Sélectionnez un type d'audit</option>
                        <option value="complet">Audit complet de sécurité</option>
                        <option value="specifique">Audit spécifique (zone ou risque particulier)</option>
                        <option value="suivi">Audit de suivi</option>
                      </select>
                    </div>
                    <div>
                      <label class="block text-sm font-medium text-gray-700 mb-1">Commentaires ou besoins spécifiques</label>
                      <textarea 
                        v-model="form.comments"
                        rows="3"
                        class="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#23c55e]/50 focus:border-[#23c55e]"
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div class="mt-8 flex justify-end space-x-4">
                  <button
                    type="button"
                    @click="closeModal"
                    class="px-4 py-2 text-gray-700 hover:text-gray-900 font-medium"
                  >
                    Annuler
                  </button>
                  <button
                    type="submit"
                    :disabled="isSubmitting"
                    class="px-6 py-2 bg-[#23c55e] text-white rounded-lg hover:bg-[#1ea550] focus:outline-none focus:ring-2 focus:ring-[#23c55e]/50 disabled:opacity-50 disabled:cursor-not-allowed font-medium flex items-center"
                  >
                    <ArrowPathIcon v-if="isSubmitting" class="w-5 h-5 mr-2 animate-spin" />
                    {{ isSubmitting ? 'Envoi en cours...' : 'Planifier l\'audit' }}
                  </button>
                </div>
              </form>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { ref } from 'vue'
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { ArrowPathIcon } from '@heroicons/vue/24/solid'

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true
  }
})

const emit = defineEmits(['close'])

const isSubmitting = ref(false)
const form = ref({
  fullName: '',
  email: '',
  phone: '',
  position: '',
  preferredDate: '',
  auditType: '',
  comments: ''
})

const closeModal = () => {
  emit('close')
}

const submitAuditRequest = async () => {
  isSubmitting.value = true
  
  try {
    // Simulation d'envoi à l'API
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Réinitialisation du formulaire
    form.value = {
      fullName: '',
      email: '',
      phone: '',
      position: '',
      preferredDate: '',
      auditType: '',
      comments: ''
    }
    
    closeModal()
  } catch (error) {
    console.error('Erreur lors de la soumission:', error)
  } finally {
    isSubmitting.value = false
  }
}
</script> 