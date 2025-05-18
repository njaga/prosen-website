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
      },
      {
        id: 7,
        name: "Chaussures de sécurité",
        description: "<p>Chaussures de sécurité avec embout en acier et semelle anti-perforation. Protection optimale pour les pieds dans tous les environnements de travail.</p>",
        short_description: "Chaussures de sécurité robustes avec embout en acier",
        price: 35000,
        category: "epi",
        image: "/images/placeholder-product.png",
        inStock: true,
        isNew: false,
        features: [
          {"text": "Embout en acier"},
          {"text": "Semelle anti-perforation"},
          {"text": "Résistantes à l'eau"}
        ]
      },
      {
        id: 8,
        name: "Casquette de sécurité",
        description: "<p>Casquette de sécurité avec coque intégrée pour une protection légère de la tête. Idéale pour les environnements à faible risque.</p>",
        short_description: "Casquette avec coque de protection intégrée",
        price: 15000,
        category: "epi",
        image: "/images/placeholder-product.png",
        inStock: true,
        isNew: true,
        features: [
          {"text": "Coque de protection intégrée"},
          {"text": "Légère et confortable"},
          {"text": "Aération optimale"}
        ]
      },
      {
        id: 9,
        name: "Gants de protection",
        description: "<p>Gants de protection polyvalents pour la manipulation d'objets et la protection contre les coupures légères.</p>",
        short_description: "Gants de protection polyvalents",
        price: 8000,
        category: "epi",
        image: "/images/placeholder-product.png",
        inStock: true,
        isNew: false,
        features: [
          {"text": "Protection contre les coupures"},
          {"text": "Grip renforcé"},
          {"text": "Respirants"}
        ]
      },
      {
        id: 10,
        name: "Lunettes de protection",
        description: "<p>Lunettes de protection anti-rayures et anti-buée. Protection complète des yeux contre les projections et la poussière.</p>",
        short_description: "Lunettes de protection professionnelles",
        price: 12000,
        category: "epi",
        image: "/images/placeholder-product.png",
        inStock: true,
        isNew: false,
        features: [
          {"text": "Anti-rayures"},
          {"text": "Anti-buée"},
          {"text": "Protection UV"}
        ]
      },
      {
        id: 11,
        name: "Tenue de travail complète",
        description: "<p>Ensemble complet comprenant veste et pantalon de travail. Tissu résistant et nombreuses poches pour le rangement des outils.</p>",
        short_description: "Ensemble veste et pantalon de travail",
        price: 45000,
        category: "epi",
        image: "/images/placeholder-product.png",
        inStock: true,
        isNew: true,
        features: [
          {"text": "Tissu résistant"},
          {"text": "Multiples poches"},
          {"text": "Renforts aux genoux"}
        ]
      },
      {
        id: 12,
        name: "Harnais antichute",
        description: "<p>Harnais de sécurité complet pour le travail en hauteur. Conforme aux normes de sécurité les plus strictes.</p>",
        short_description: "Harnais de sécurité pour travail en hauteur",
        price: 85000,
        category: "epi",
        image: "/images/placeholder-product.png",
        inStock: true,
        isNew: false,
        features: [
          {"text": "Points d'ancrage multiples"},
          {"text": "Sangles ajustables"},
          {"text": "Absorbeur d'énergie intégré"}
        ]
      },
      {
        id: 13,
        name: "Ensemble imperméable",
        description: "<p>Ensemble imperméable comprenant veste et pantalon pour la protection contre la pluie. Léger et confortable.</p>",
        short_description: "Tenue de protection contre la pluie",
        price: 25000,
        category: "epi",
        image: "/images/placeholder-product.png",
        inStock: true,
        isNew: false,
        features: [
          {"text": "100% imperméable"},
          {"text": "Respirant"},
          {"text": "Bandes réfléchissantes"}
        ]
      },
      {
        id: 14,
        name: "Tenue de protection points chauds",
        description: "<p>Tenue complète ignifugée pour le travail à proximité de points chauds. Protection maximale contre la chaleur et les flammes.</p>",
        short_description: "Tenue ignifugée pour travaux à haute température",
        price: 120000,
        category: "epi",
        image: "/images/placeholder-product.png",
        inStock: true,
        isNew: true,
        features: [
          {"text": "Tissu ignifugé"},
          {"text": "Protection thermique"},
          {"text": "Coutures renforcées"}
        ]
      },
      {
        id: 15,
        name: "Masque de protection respiratoire",
        description: "<p>Masque de protection respiratoire avec filtres remplaçables. Protection contre les poussières, fumées et vapeurs.</p>",
        short_description: "Masque respiratoire professionnel",
        price: 35000,
        category: "epi",
        image: "/images/placeholder-product.png",
        inStock: true,
        isNew: false,
        features: [
          {"text": "Filtres remplaçables"},
          {"text": "Joint facial étanche"},
          {"text": "Soupape d'expiration"}
        ]
      },
      {
        id: 16,
        name: "Bouchons d'oreilles professionnels",
        description: "<p>Bouchons d'oreilles réutilisables avec cordon. Protection auditive optimale dans les environnements bruyants.</p>",
        short_description: "Protection auditive haute performance",
        price: 5000,
        category: "epi",
        image: "/images/placeholder-product.png",
        inStock: true,
        isNew: false,
        features: [
          {"text": "Réduction du bruit 32dB"},
          {"text": "Réutilisables"},
          {"text": "Avec cordon"}
        ]
      },
      {
        id: 17,
        name: "Lampe frontale de sécurité",
        description: "<p>Lampe frontale LED puissante et étanche. Idéale pour le travail en conditions de faible luminosité.</p>",
        short_description: "Lampe frontale LED professionnelle",
        price: 25000,
        category: "epi",
        image: "/images/placeholder-product.png",
        inStock: true,
        isNew: true,
        features: [
          {"text": "LED haute puissance"},
          {"text": "Étanche IPX4"},
          {"text": "Batterie longue durée"}
        ]
      },
      {
        id: 18,
        name: "Lampe torche de sécurité",
        description: "<p>Lampe torche robuste et puissante pour les interventions de sécurité. Corps en aluminium résistant aux chocs.</p>",
        short_description: "Lampe torche professionnelle haute puissance",
        price: 35000,
        category: "epi",
        image: "/images/placeholder-product.png",
        inStock: true,
        isNew: false,
        features: [
          {"text": "1000 lumens"},
          {"text": "Corps en aluminium"},
          {"text": "Mode stroboscope"}
        ]
      },
      {
        id: 19,
        name: "Gants anti-feu",
        description: "<p>Gants de protection spécialement conçus pour la lutte contre l'incendie. Résistants à la chaleur extrême.</p>",
        short_description: "Gants de protection contre le feu",
        price: 45000,
        category: "incendie",
        image: "/images/placeholder-product.png",
        inStock: true,
        isNew: true,
        features: [
          {"text": "Résistants à 500°C"},
          {"text": "Manchette longue"},
          {"text": "Doublure isolante"}
        ]
      },
      {
        id: 20,
        name: "Gilet de sauvetage professionnel",
        description: "<p>Gilet de sauvetage homologué pour utilisation en mer, sur bateau ou pirogue. Équipé de bandes réfléchissantes et d'un sifflet.</p>",
        short_description: "Gilet de sauvetage homologué marine",
        price: 65000,
        category: "epi",
        image: "/images/placeholder-product.png",
        inStock: true,
        isNew: false,
        features: [
          {"text": "Flottabilité 150N"},
          {"text": "Bandes réfléchissantes"},
          {"text": "Sifflet de détresse"}
        ]
      },
      {
        id: 21,
        name: "Tenue de pompier complète",
        description: "<p>Ensemble complet de protection incendie comprenant veste, pantalon, bottes et cagoule. Conforme aux normes de sécurité incendie.</p>",
        short_description: "Tenue complète de protection incendie",
        price: 350000,
        category: "incendie",
        image: "/images/placeholder-product.png",
        inStock: true,
        isNew: true,
        features: [
          {"text": "Tissu ignifugé multicouches"},
          {"text": "Bandes réfléchissantes"},
          {"text": "Protection thermique maximale"}
        ]
      },
      {
        id: 22,
        name: "Détecteur anti-intrusion",
        description: "<p>Détecteur de mouvement infrarouge haute performance pour la protection de vos locaux. Installation facile et détection fiable.</p>",
        short_description: "Détecteur de mouvement infrarouge professionnel",
        price: 45000,
        category: "electronique",
        image: "/images/placeholder-product.png",
        inStock: true,
        isNew: true,
        features: [
          {"text": "Détection infrarouge"},
          {"text": "Immunité aux animaux domestiques"},
          {"text": "Installation sans fil possible"}
        ]
      },
      {
        id: 23,
        name: "Alarme anti-intrusion",
        description: "<p>Système d'alarme complet avec centrale, sirène et détecteurs. Protection efficace contre les intrusions avec notification sur smartphone.</p>",
        short_description: "Système d'alarme professionnel connecté",
        price: 150000,
        category: "electronique",
        image: "/images/placeholder-product.png",
        inStock: true,
        isNew: true,
        features: [
          {"text": "Centrale connectée"},
          {"text": "Sirène puissante"},
          {"text": "Application mobile"}
        ]
      },
      {
        id: 24,
        name: "Point d'accès contrôlé",
        description: "<p>Point d'accès sécurisé avec lecteur de badge et gestion des droits. Idéal pour contrôler les entrées et sorties de votre établissement.</p>",
        short_description: "Système de contrôle d'accès professionnel",
        price: 85000,
        category: "electronique",
        image: "/images/placeholder-product.png",
        inStock: true,
        isNew: false,
        features: [
          {"text": "Lecteur de badge RFID"},
          {"text": "Gestion des droits"},
          {"text": "Historique des accès"}
        ]
      },
      {
        id: 25,
        name: "Signalétique de prévention routière",
        description: "<p>Ensemble complet de panneaux de signalisation routière pour la sécurité sur vos sites. Conformes aux normes en vigueur.</p>",
        short_description: "Panneaux de signalisation routière",
        price: 35000,
        category: "incendie",
        image: "/images/placeholder-product.png",
        inStock: true,
        isNew: false,
        features: [
          {"text": "Panneaux réfléchissants"},
          {"text": "Résistants aux intempéries"},
          {"text": "Installation facile"}
        ]
      },
      {
        id: 26,
        name: "Tableau des consignes de sécurité",
        description: "<p>Tableau d'affichage des consignes de sécurité personnalisable. Indispensable pour informer et protéger vos collaborateurs.</p>",
        short_description: "Tableau d'affichage des consignes",
        price: 25000,
        category: "incendie",
        image: "/images/placeholder-product.png",
        inStock: true,
        isNew: false,
        features: [
          {"text": "Format A2"},
          {"text": "Personnalisable"},
          {"text": "Support aluminium"}
        ]
      }
    ];
    
    try {
      // Construire les paramètres de filtrage
      if (category && category !== 'all' && category !== '') {
        console.log(`Filtering by category: ${category}`);
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