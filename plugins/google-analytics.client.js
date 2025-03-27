export default defineNuxtPlugin(() => {
  const runtimeConfig = useRuntimeConfig();

  // Charger le script Google Analytics
  function loadGoogleAnalytics() {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-D0XM5LD6HS';
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'G-D0XM5LD6HS');

    // Rendre gtag disponible globalement
    window.gtag = gtag;
  }

  // Charger GA uniquement côté client
  if (process.client) {
    loadGoogleAnalytics();
  }

  // Fournir une fonction pour suivre les événements personnalisés
  return {
    provide: {
      analytics: {
        // Fonction pour suivre les pages vues
        trackPageView: (path) => {
          if (window.gtag) {
            window.gtag('config', 'G-D0XM5LD6HS', {
              page_path: path
            });
          }
        },
        // Fonction pour suivre les événements
        trackEvent: (category, action, label, value) => {
          if (window.gtag) {
            window.gtag('event', action, {
              event_category: category,
              event_label: label,
              value: value
            });
          }
        }
      }
    }
  };
}); 