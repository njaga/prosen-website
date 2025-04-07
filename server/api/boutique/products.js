import { defineEventHandler, getQuery } from 'h3';

/**
 * Endpoint pour récupérer la liste des produits depuis Directus
 */
export default defineEventHandler(async (event) => {
  try {
    // Récupérer les paramètres de requête
    const query = getQuery(event);
    const { category } = query;
    
    console.log("API Request - Category:", category);
    
    // Construire l'URL de l'API Directus
    const directusUrl = process.env.DIRECTUS_URL || 'http://localhost:8055';
    let apiUrl = `${directusUrl}/items/products`;
    
    console.log("Base API URL:", apiUrl);
    
    // Données de secours pour garantir l'affichage même si l'API échoue
    const mockedProducts = [
      {
        id: 1,
        name: "Kit d'intervention incendie avec seau et signalisation",
        description: "<p>Kit complet d'intervention pour lutter contre les incendies.</p>",
        short_description: "Kit complet d'intervention rapide contre les incendies",
        price: 100000,
        category: "incendie",
        image: "/images/placeholder-product.png",
        inStock: true,
        isNew: true,
        features: [{"text":"Coffre avec autocollant"}]
      },
      {
        id: 2,
        name: "Casque de protection chantier",
        description: "<p>Casque de protection pour les chantiers et environnements industriels.</p>",
        short_description: "Casque de protection conforme aux normes de sécurité",
        price: 25000,
        category: "epi",
        image: "/images/placeholder-product.png",
        inStock: true,
        isNew: false,
        features: [{"text":"Protection contre les chutes d'objets"}]
      }
    ];
    
    try {
      // Construire les paramètres de filtrage
      if (category && category !== 'all' && category !== '') {
        console.log(`Filtering by category: ${category}`);
        // Version simple du filtre au lieu de JSON stringify qui peut causer des problèmes
        apiUrl += `?filter[category][_eq]=${category}`;
      }
      
      console.log('Calling Directus API:', apiUrl);
      
      // Appeler l'API Directus
      const response = await fetch(apiUrl);
      
      if (!response.ok) {
        console.warn(`Directus API returned status ${response.status}, using mocked data`);
        return {
          success: true,
          products: mockedProducts.filter(p => !category || category === 'all' || p.category === category),
          total: mockedProducts.length,
          source: "mocked"
        };
      }
      
      const data = await response.json();
      console.log("Raw data received:", JSON.stringify(data).substring(0, 300));
      
      // Vérifier que les données sont dans le format attendu
      if (!data.data || !Array.isArray(data.data)) {
        console.error('Invalid data format received from Directus:', data);
        
        // Retourner les données simulées en cas d'erreur
        return {
          success: true,
          products: mockedProducts.filter(p => !category || category === 'all' || p.category === category),
          total: mockedProducts.length,
          source: "mocked"
        };
      }
      
      console.log(`Received ${data.data.length} products from Directus`);
      
      // Transformer les données
      const products = data.data.map(product => {
        try {
          console.log(`Processing product ID: ${product.id}, Name: ${product.name}`);
          
          // Gérer correctement l'ID de l'image
          if (product.image) {
            if (typeof product.image === 'object' && product.image.id) {
              product.image = `${directusUrl}/assets/${product.image.id}`;
              console.log(`Image URL (object): ${product.image}`);
            } else if (typeof product.image === 'string') {
              // Si c'est un ID directement, le convertir en URL d'asset
              product.image = `${directusUrl}/assets/${product.image}`;
              console.log(`Image URL (string): ${product.image}`);
            }
          } else {
            product.image = '/images/placeholder-product.png';
          }
          
          return product;
        } catch (error) {
          console.error(`Error processing product ${product.id}:`, error);
          product.image = '/images/placeholder-product.png';
          return product;
        }
      });
      
      // Si aucun produit n'est retourné, utiliser les données de secours
      if (products.length === 0) {
        console.log('No products found in Directus, using fallback data');
        return {
          success: true,
          products: mockedProducts.filter(p => !category || category === 'all' || p.category === category),
          total: mockedProducts.length,
          source: "mocked"
        };
      }
      
      return {
        success: true,
        products,
        total: products.length,
        source: "directus"
      };
    } catch (fetchError) {
      console.error('Error fetching from Directus:', fetchError);
      
      // En cas d'erreur, retourner des données simulées
      return {
        success: true,
        products: mockedProducts.filter(p => !category || category === 'all' || p.category === category),
        total: mockedProducts.length,
        source: "mocked (error)"
      };
    }
  } catch (error) {
    console.error('Global error in products API:', error);
    return {
      success: false,
      message: 'Erreur lors de la récupération des produits',
      error: error.message,
      products: []
    };
  }
}); 