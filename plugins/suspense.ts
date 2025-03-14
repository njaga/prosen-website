import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  // Supprimez la ligne unwrapInjectedRef qui n'est plus nécessaire
  
  // Désactiver l'avertissement pour Suspense
  nuxtApp.vueApp.config.warnHandler = (msg, instance, trace) => {
    if (msg.includes('<Suspense> is an experimental feature')) {
      return
    }
    console.warn(`[Vue warn]: ${msg}${trace}`)
  }
})