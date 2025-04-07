import { defineEventHandler, sendRedirect } from 'h3';

export default defineEventHandler(async (event) => {
  try {
    // Récupérer l'ID de l'asset dans l'URL
    const assetId = event.context.params.id;
    
    if (!assetId) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'ID d\'asset non spécifié' })
      };
    }

    // Configuration de Directus
    const directusUrl = process.env.DIRECTUS_URL || 'http://localhost:8055';
    const directusToken = process.env.DIRECTUS_TOKEN || '';
    
    console.log(`Asset API Request - Asset ID: ${assetId}`);
    
    // URL vers l'asset Directus
    const assetUrl = `${directusUrl}/assets/${assetId}`;
    
    // Préparer les en-têtes avec authentification si token disponible
    const headers = {};
    if (directusToken) {
      headers['Authorization'] = `Bearer ${directusToken}`;
    }

    try {
      // Vérifier si l'asset existe
      const checkResponse = await fetch(assetUrl, { headers, method: 'HEAD' });
      
      if (!checkResponse.ok) {
        console.warn(`Asset not found or access denied: ${assetId}`);
        // Rediriger vers une image par défaut
        return sendRedirect(event, '/images/placeholder.jpg', 302);
      }
      
      // Rediriger vers l'asset avec le token d'authentification si nécessaire
      if (directusToken) {
        // Si nous avons un token, inclure l'access_token comme paramètre de requête
        return sendRedirect(event, `${assetUrl}?access_token=${directusToken}`, 302);
      } else {
        // Sinon, rediriger simplement vers l'URL de l'asset
        return sendRedirect(event, assetUrl, 302);
      }
    } catch (error) {
      console.error('Error accessing Directus asset:', error);
      return sendRedirect(event, '/images/placeholder.jpg', 302);
    }
  } catch (globalError) {
    console.error('Global error in asset API:', globalError);
    return sendRedirect(event, '/images/placeholder.jpg', 302);
  }
}); 