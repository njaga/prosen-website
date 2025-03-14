import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { 
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram 
} from '@fortawesome/free-brands-svg-icons'

// Éviter le chargement CSS automatique de Font Awesome
config.autoAddCss = false

export default defineNuxtPlugin((nuxtApp) => {
  // Ajouter les icônes à la bibliothèque
  library.add(faFacebookF, faTwitter, faLinkedinIn, faInstagram)

  // Enregistrer le composant globalement
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})