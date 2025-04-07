import { defineEventHandler } from 'h3';

/**
 * Endpoint pour récupérer un produit spécifique par son ID depuis Directus
 * 
 * Méthode: GET
 * Paramètres de route:
 * - id: ID du produit à récupérer
 * 
 * @returns {Object} Objet contenant le statut de la requête et le produit
 */
export default defineEventHandler(async (event) => {
  try {
    // Récupérer l'ID du produit depuis les paramètres de route
    const productId = event.context.params.id;
    
    if (!productId) {
      return {
        success: false,
        message: 'ID du produit non spécifié'
      };
    }
    
    // Construire l'URL de l'API Directus
    const directusUrl = process.env.DIRECTUS_URL || 'http://localhost:8055';
    const apiUrl = `${directusUrl}/items/products/${productId}`;
    
    console.log(`Fetching product with ID ${productId} from ${apiUrl}`);
    
    // Appeler l'API Directus
    const response = await fetch(apiUrl);
    
    if (response.status === 404) {
      console.log(`Product with ID ${productId} not found`);
      return {
        success: false,
        message: 'Produit non trouvé'
      };
    }
    
    if (!response.ok) {
      throw new Error(`Erreur API Directus: ${response.statusText} (${response.status})`);
    }
    
    const data = await response.json();
    console.log('Data from Directus:', JSON.stringify(data, null, 2).substring(0, 200) + '...');
    
    // Si le produit n'existe pas
    if (!data.data) {
      return {
        success: false,
        message: 'Produit non trouvé'
      };
    }
    
    // Transformer les données si nécessaire
    const product = data.data;
    
    try {
      console.log(`Processing product image:`, product.image);
      
      // Gérer l'image du produit
      if (product.image) {
        // Si l'image est un objet Directus
        if (typeof product.image === 'object' && product.image.id) {
          console.log(`Image is an object with ID ${product.image.id}`);
          product.image = `${directusUrl}/assets/${product.image.id}`;
        }
        // Si l'image est un ID simple de format UUID
        else if (typeof product.image === 'string') {
          // Vérifier si c'est déjà une URL complète
          if (product.image.startsWith('http') || product.image.startsWith('/')) {
            console.log(`Image is already a complete URL: ${product.image}`);
          } else {
            console.log(`Image is a string ID: ${product.image}`);
            product.image = `${directusUrl}/assets/${product.image}`;
          }
        }
      } else {
        // Image par défaut si aucune image n'est disponible
        console.log('No image found, using placeholder');
        product.image = '/images/placeholder-product.png';
      }
      
      console.log(`Final image URL: ${product.image}`);
      
      // Traiter les caractéristiques du produit
      if (product.features) {
        console.log('Processing product features:', product.features);
        
        // Si les caractéristiques sont sous forme de chaîne, tenter de les parser
        if (typeof product.features === 'string') {
          try {
            product.features = JSON.parse(product.features);
            console.log('Features parsed from string:', product.features);
          } catch (error) {
            console.warn('Failed to parse features string:', error);
          }
        }
        
        // Transformer les caractéristiques en format standardisé pour le front-end
        // Si c'est un objet au format {"Caracteristique":"Valeur"}, le convertir en tableau
        if (typeof product.features === 'object' && !Array.isArray(product.features)) {
          product.features = Object.entries(product.features).map(([key, value]) => {
            // Si la clé est "Caracteristique", n'utiliser que la valeur
            if (key === 'Caracteristique' || key.toLowerCase() === 'caracteristique') {
              return { text: value };
            }
            return { text: `${key}: ${value}` };
          });
          console.log('Features transformed to array:', product.features);
        }
      }
      
    } catch (error) {
      console.error('Error processing product data:', error);
      // Utiliser une image par défaut en cas d'erreur
      product.image = '/images/placeholder-product.png';
    }
    
    console.log(`Returning product with ID ${productId} and image URL ${product.image}`);
    
    return {
      success: true,
      product
    };
    
  } catch (error) {
    console.error(`Erreur lors de la récupération du produit:`, error);
    
    return {
      success: false,
      message: 'Erreur lors de la récupération du produit',
      error: error.message
    };
  }
}); 