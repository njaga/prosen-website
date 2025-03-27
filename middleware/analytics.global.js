export default defineNuxtRouteMiddleware((to, from) => {
  // Exécuter uniquement côté client
  if (process.client) {
    // Attendre que le composant soit monté
    setTimeout(() => {
      // Vérifier si gtag est disponible
      if (window.gtag) {
        window.gtag('config', 'G-D0XM5LD6HS', {
          page_path: to.fullPath
        });
      }
    }, 100);
  }
}); 