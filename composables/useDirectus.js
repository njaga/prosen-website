import { ref } from 'vue';
import { useRuntimeConfig } from 'nuxt/app';

/**
 * Composable pour interagir avec l'API Directus
 */
export default function useDirectus() {
  const config = useRuntimeConfig();
  const directusUrl = config.public.directusUrl || 'http://localhost:8055';
  
  // État partagé pour les produits
  const products = ref([]);
  const isLoading = ref(false);
  const error = ref(null);
  
  /**
   * Récupère tous les produits ou filtre par catégorie
   * 
   * @param {Object} options - Options de filtrage
   * @param {String} options.category - Catégorie à filtrer (optionnel)
   * @returns {Promise<Array>} - Liste des produits
   */
  const fetchProducts = async (options = {}) => {
    isLoading.value = true;
    error.value = null;
    
    try {
      // Construire les paramètres de requête
      const params = new URLSearchParams();
      if (options.category && options.category !== 'all') {
        params.append('category', options.category);
      }
      
      const queryString = params.toString() ? `?${params.toString()}` : '';
      
      // Appeler notre API intermédiaire
      const response = await fetch(`/api/boutique/products${queryString}`);
      const data = await response.json();
      
      if (!data.success) {
        throw new Error(data.message || 'Erreur lors de la récupération des produits');
      }
      
      products.value = data.products;
      return data.products;
    } catch (err) {
      error.value = err.message;
      console.error('Erreur dans useDirectus.fetchProducts:', err);
      return [];
    } finally {
      isLoading.value = false;
    }
  };
  
  /**
   * Récupère un produit spécifique par son ID
   * 
   * @param {String|Number} id - ID du produit
   * @returns {Promise<Object|null>} - Le produit ou null si non trouvé
   */
  const fetchProduct = async (id) => {
    if (!id) {
      error.value = 'ID du produit non spécifié';
      return null;
    }
    
    isLoading.value = true;
    error.value = null;
    
    try {
      // Appeler notre API intermédiaire
      const response = await fetch(`/api/boutique/product/${id}`);
      const data = await response.json();
      
      if (!data.success) {
        throw new Error(data.message || 'Produit non trouvé');
      }
      
      return data.product;
    } catch (err) {
      error.value = err.message;
      console.error(`Erreur dans useDirectus.fetchProduct(${id}):`, err);
      return null;
    } finally {
      isLoading.value = false;
    }
  };
  
  /**
   * Récupère l'URL complète d'un fichier dans Directus
   * 
   * @param {String} fileId - ID ou chemin du fichier
   * @returns {String} - URL complète du fichier
   */
  const getAssetUrl = (fileId) => {
    if (!fileId) return null;
    if (fileId.startsWith('http')) return fileId;
    
    return `${directusUrl}/assets/${fileId}`;
  };
  
  return {
    // États
    products,
    isLoading,
    error,
    
    // Méthodes
    fetchProducts,
    fetchProduct,
    getAssetUrl,
    
    // Utilitaires
    directusUrl
  };
} 