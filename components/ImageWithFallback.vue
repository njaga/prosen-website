<template>
  <img
    :src="currentSrc"
    :alt="alt"
    @error="handleError"
    @load="handleSuccess"
    class="image-with-fallback"
    :class="{'image-error': hasError, 'image-loaded': isLoaded}"
  />
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue';

const props = defineProps({
  src: {
    type: String,
    required: true
  },
  fallback: {
    type: String,
    default: '/images/placeholder-product.png'
  },
  alt: {
    type: String,
    default: 'Image'
  }
});

// État de l'image
const hasError = ref(false);
const isLoaded = ref(false);
const attemptedUrls = ref(new Set());

// Source actuelle de l'image
const currentSrc = ref(validateUrl(props.src) ? props.src : props.fallback);

// Valider l'URL
function validateUrl(url) {
  if (!url) return false;
  
  // Vérifier si l'URL est vide ou ne semble pas valide
  if (url.trim() === '' || url === 'undefined' || url === 'null') {
    console.warn('Invalid image URL detected:', url);
    return false;
  }
  
  // Si c'est une URL relative qui commence par /, c'est valide
  if (url.startsWith('/')) {
    return true;
  }
  
  // Si l'URL contient "assets/" de Directus, c'est valide
  if (url.includes('/assets/')) {
    return true;
  }
  
  // Valider le format UUID (pour les IDs Directus)
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  if (uuidRegex.test(url)) {
    console.log('Detected Directus UUID format, transforming to URL');
    // Transformer l'UUID en URL Directus
    const directusUrl = import.meta.env.VITE_DIRECTUS_URL || 'http://localhost:8055';
    currentSrc.value = `${directusUrl}/assets/${url}`;
    return true;
  }
  
  // Tenter de valider l'URL pour les URLs absolues
  try {
    new URL(url);
    return true;
  } catch (e) {
    console.warn('Invalid image URL format:', url);
    return false;
  }
}

// Gérer une erreur de chargement d'image
function handleError() {
  console.warn(`Image failed to load: ${currentSrc.value}`);
  hasError.value = true;
  
  // Ajouter l'URL qui a échoué à la liste des tentatives
  attemptedUrls.value.add(currentSrc.value);
  
  // Si ce n'est pas déjà l'image de fallback, utiliser le fallback
  if (currentSrc.value !== props.fallback) {
    console.log(`Falling back to default image: ${props.fallback}`);
    currentSrc.value = props.fallback;
  }
}

// Gérer un chargement réussi
function handleSuccess() {
  console.log(`Image loaded successfully: ${currentSrc.value}`);
  hasError.value = false;
  isLoaded.value = true;
}

// Surveiller les changements de src
watch(() => props.src, (newSrc) => {
  console.log(`Image source changed to: ${newSrc}`);
  
  // Si la nouvelle URL a déjà été tentée et a échoué, aller directement au fallback
  if (attemptedUrls.value.has(newSrc)) {
    console.warn(`Using fallback for previously failed URL: ${newSrc}`);
    currentSrc.value = props.fallback;
    return;
  }
  
  // Vérifier si la nouvelle URL est valide
  const isValid = validateUrl(newSrc);
  
  // Réinitialiser l'état pour la nouvelle image
  hasError.value = false;
  isLoaded.value = false;
  
  // Définir la source en fonction de la validité
  currentSrc.value = isValid ? newSrc : props.fallback;
});

// S'assurer que l'image est valide au montage
onMounted(() => {
  // Double vérification au montage
  if (!validateUrl(currentSrc.value)) {
    console.warn(`Invalid initial image URL, using fallback: ${props.fallback}`);
    currentSrc.value = props.fallback;
  }
});
</script>

<style scoped>
.image-with-fallback {
  transition: opacity 0.3s ease;
}
.image-error {
  opacity: 0.7;
}
.image-loaded {
  opacity: 1;
}
</style> 