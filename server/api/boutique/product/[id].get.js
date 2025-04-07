import { createDirectus, rest, readItem } from '@directus/sdk';

export default defineEventHandler(async (event) => {
  try {
    const config = useRuntimeConfig();
    const directus = createDirectus(config.public.directusUrl).with(rest());
    
    // Récupérer l'ID du produit depuis l'URL
    const id = event.context.params.id;
    
    // Récupérer le produit depuis Directus
    const product = await directus.request(
      readItem('products', id, {
        fields: ['*']
      })
    );
    
    if (!product) {
      return {
        success: false,
        message: 'Produit non trouvé'
      };
    }
    
    return {
      success: true,
      product
    };
  } catch (error) {
    console.error(`Erreur lors de la récupération du produit:`, error);
    
    return {
      success: false,
      message: 'Impossible de récupérer le produit',
      error: error.message
    };
  }
}); 