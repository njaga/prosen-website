import { defineEventHandler, getQuery } from 'h3';

export default defineEventHandler(async (event) => {
  try {
    // Récupérer les paramètres de requête
    const query = getQuery(event);
    const category = query.category || 'all';
    
    console.log("API Request - Category:", category);
    
    // Produits fictifs pour garantir un affichage même en cas d'échec
    const mockedProducts = [
      {
        id: 1,
        name: "Kit d'intervention incendie avec seau et signalisation",
        description: "<p>Kit complet d'intervention pour lutter contre les incendies. Comprend des outils essentiels pour une première intervention rapide.</p>",
        short_description: "Kit complet d'intervention rapide contre les incendies",
        price: 100000,
        category: "incendie",
        image: "/images/placeholder-product.png",
        inStock: true,
        isNew: true,
        features: [{"text":"Coffre avec autocollant"}, {"text":"Seau d'intervention"}, {"text":"Signalisation"}]
      },
      {
        id: 2,
        name: "Casque de protection chantier",
        description: "<p>Casque de protection pour les chantiers et environnements industriels. Conforme aux normes de sécurité européennes.</p>",
        short_description: "Casque de protection conforme aux normes de sécurité",
        price: 25000,
        category: "epi",
        image: "/images/placeholder-product.png",
        inStock: true,
        isNew: false,
        features: [{"text":"Protection contre les chutes d'objets"}, {"text":"Ajustable"}, {"text":"Résistant aux chocs"}]
      },
      {
        id: 3,
        name: "Caméra de surveillance IP HD",
        description: "<p>Caméra de surveillance haute définition pour la sécurité de vos locaux. Connexion IP facile et vision nocturne.</p>",
        short_description: "Caméra HD avec vision nocturne et détection de mouvement",
        price: 75000,
        category: "electronique",
        image: "/images/placeholder-product.png",
        inStock: true,
        isNew: true,
        features: [{"text":"Vision nocturne infrarouge"}, {"text":"Détection de mouvement"}, {"text":"Enregistrement cloud"}]
      }
    ];
    
    try {
      // Utiliser une URL fixe sans useRuntimeConfig
      const directusUrl = process.env.DIRECTUS_URL || 'http://localhost:8055';
      
      console.log('Using Directus URL:', directusUrl);
      
      // Construire l'URL de l'API et les paramètres
      let apiUrl = `${directusUrl}/items/products`;
      
      // Ne filtrer par catégorie que si elle n'est pas 'all'
      if (category && category !== 'all') {
        apiUrl += `?filter[category][_eq]=${category}`;
      }
      
      console.log('Calling Directus API:', apiUrl);
      
      // Tenter de récupérer les données de Directus
      try {
        const response = await fetch(apiUrl, {
          headers: {
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache'
          }
        });
        
        if (!response.ok) {
          console.warn(`Directus API returned error status ${response.status}, using mocked data`);
          const filteredProducts = mockedProducts.filter(p => category === 'all' || p.category === category);
          console.log(`Returning ${filteredProducts.length} mocked products for category '${category}'`);
          return {
            success: true,
            products: filteredProducts,
            source: "mocked (API error)"
          };
        }
        
        const data = await response.json();
        console.log('API response received, products count:', data.data?.length || 0);
        
        if (!data.data || !Array.isArray(data.data) || data.data.length === 0) {
          console.warn('No products found in Directus or invalid format, using mocked data');
          const filteredProducts = mockedProducts.filter(p => category === 'all' || p.category === category);
          console.log(`Returning ${filteredProducts.length} mocked products for category '${category}'`);
          return {
            success: true,
            products: filteredProducts,
            source: "mocked (no data)"
          };
        }
        
        // Transformer les données pour ajouter les URLs d'images
        const products = data.data.map(product => {
          // Gérer l'image
          if (product.image) {
            if (typeof product.image === 'object' && product.image.id) {
              product.image = `${directusUrl}/assets/${product.image.id}`;
            } else if (typeof product.image === 'string') {
              product.image = `${directusUrl}/assets/${product.image}`;
            }
          } else {
            product.image = '/images/placeholder-product.png';
          }
          
          return product;
        });
        
        console.log(`Returning ${products.length} products from Directus`);
        
        return {
          success: true,
          products,
          source: "directus"
        };
      } catch (apiError) {
        throw new Error(`API error: ${apiError.message}`);
      }
    } catch (directusError) {
      console.error('Error fetching from Directus:', directusError);
      
      // Garantir un retour de données même en cas d'erreur
      const filteredProducts = mockedProducts.filter(p => category === 'all' || p.category === category);
      console.log(`Error fallback: Returning ${filteredProducts.length} mocked products for category '${category}'`);
      return {
        success: true,
        products: filteredProducts,
        source: "mocked (Directus error)"
      };
    }
  } catch (globalError) {
    console.error('Global error in products API:', globalError);
    
    // En cas d'erreur grave, toujours retourner les données fictives
    const allProducts = mockedProducts.filter(p => query?.category === 'all' || !query?.category || p.category === query?.category);
    return {
      success: true,
      message: 'Erreur serveur, affichage des produits de secours',
      error: globalError.message,
      products: allProducts,
      source: "mocked (global error)"
    };
  }
}); 