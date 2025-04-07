import { defineEventHandler, getQuery } from 'h3';

export default defineEventHandler(async (event) => {
  try {
    // Récupérer les paramètres de requête
    const query = getQuery(event);
    const category = query.category || 'all';
    
    console.log("Blog API Request - Category:", category);
    
    // Articles fictifs pour garantir un affichage même en cas d'échec
    const mockedArticles = [
      {
        id: 1,
        title: "Les dernières tendances en matière de sécurité en 2025",
        content: "<p>Découvrez les innovations et technologies qui façonnent l'avenir de la sécurité professionnelle.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod velit vel urna commodo, vel vestibulum magna tincidunt.</p>",
        excerpt: "Découvrez les innovations et technologies qui façonnent l'avenir de la sécurité professionnelle.",
        category: ["Tendances"],
        date: "2024-04-15",
        published: true,
        slug: "tendances-securite-2024",
        image: "/images/blog/security-trends.jpg",
        author: "Équipe PROSEN"
      },
      {
        id: 2,
        title: "Comment choisir son système de vidéosurveillance",
        content: "<p>Guide complet pour sélectionner le système de vidéosurveillance adapté à vos besoins.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod velit vel urna commodo, vel vestibulum magna tincidunt.</p>",
        excerpt: "Guide complet pour sélectionner le système de vidéosurveillance adapté à vos besoins.",
        category: ["Guide"],
        date: "2024-04-10",
        published: true,
        slug: "choisir-systeme-videosurveillance",
        image: "/images/blog/video-surveillance.webp",
        author: "Équipe PROSEN"
      },
      {
        id: 3,
        title: "La sécurité événementielle : nos conseils d'experts",
        content: "<p>Tout ce que vous devez savoir pour sécuriser vos événements professionnels.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod velit vel urna commodo, vel vestibulum magna tincidunt.</p>",
        excerpt: "Tout ce que vous devez savoir pour sécuriser vos événements professionnels.",
        category: ["Conseils"],
        date: "2024-04-05",
        published: true,
        slug: "securite-evenementielle-conseils",
        image: "/images/blog/event-security.jpg",
        author: "Équipe PROSEN"
      }
    ];
    
    try {
      // Utiliser une URL fixe sans useRuntimeConfig
      const directusUrl = process.env.DIRECTUS_URL || 'http://localhost:8055';
      const directusToken = process.env.DIRECTUS_TOKEN || '';
      
      console.log('Using Directus URL:', directusUrl);
      
      // Construire l'URL de l'API et les paramètres
      let apiUrl = `${directusUrl}/items/articles`;
      
      // Ajouter des filtres
      let filters = [];
      
      // Filtre pour les articles publiés
      filters.push('filter[published][_eq]=true');
      
      // Filtre par catégorie si spécifié et différent de 'all'
      if (category && category !== 'all') {
        // Modifier le filtre pour trouver la catégorie dans le tableau de catégories
        // La requête doit vérifier si la catégorie est contenue dans le tableau JSON
        filters.push(`filter[category][_contains]=${category}`);
      }
      
      // Trier par date de publication (du plus récent au plus ancien)
      filters.push('sort[]=-date');
      
      // Ajouter les filtres à l'URL
      if (filters.length > 0) {
        apiUrl += '?' + filters.join('&');
      }
      
      console.log('Calling Directus API:', apiUrl);
      
      // Tenter de récupérer les données de Directus
      try {
        // Préparer les en-têtes avec authentification si token disponible
        const headers = {
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache'
        };
        
        // Si un token est configuré, l'ajouter aux en-têtes
        if (directusToken) {
          headers['Authorization'] = `Bearer ${directusToken}`;
        }
        
        const response = await fetch(apiUrl, { headers });
        
        if (!response.ok) {
          console.warn(`Directus API returned error status ${response.status}, using mocked data`);
          // Si catégorie spécifiée, filtrer les articles fictifs
          let filteredArticles;
          if (category === 'all') {
            filteredArticles = mockedArticles;
          } else {
            // Filtrer les articles qui contiennent la catégorie demandée
            filteredArticles = mockedArticles.filter(a => 
              Array.isArray(a.category) && a.category.includes(category)
            );
          }
          console.log(`Returning ${filteredArticles.length} mocked articles for category '${category}'`);
          return {
            success: true,
            articles: filteredArticles,
            source: "mocked (API error)"
          };
        }
        
        const data = await response.json();
        console.log('API response received, articles count:', data.data?.length || 0);
        
        if (!data.data || !Array.isArray(data.data) || data.data.length === 0) {
          console.warn('No articles found in Directus or invalid format, using mocked data');
          // Si catégorie spécifiée, filtrer les articles fictifs
          let filteredArticles;
          if (category === 'all') {
            filteredArticles = mockedArticles;
          } else {
            // Filtrer les articles qui contiennent la catégorie demandée
            filteredArticles = mockedArticles.filter(a => 
              Array.isArray(a.category) && a.category.includes(category)
            );
          }
          console.log(`Returning ${filteredArticles.length} mocked articles for category '${category}'`);
          return {
            success: true,
            articles: filteredArticles,
            source: "mocked (no data)"
          };
        }
        
        // Transformer les données pour ajouter les URLs d'images et formatter les dates
        const articles = data.data.map(article => {
          // Gérer l'image
          if (article.image) {
            if (typeof article.image === 'object' && article.image.id) {
              article.image = `${directusUrl}/assets/${article.image.id}`;
            } else if (typeof article.image === 'string' && !article.image.startsWith('http') && !article.image.startsWith('/')) {
              article.image = `${directusUrl}/assets/${article.image}`;
            }
          } else {
            article.image = '/images/placeholder-blog.jpg';
          }
          
          // S'assurer que les catégories sont dans un format tableau
          if (article.category) {
            try {
              // Si la catégorie est une chaîne mais contient du JSON, la parser
              if (typeof article.category === 'string' && 
                 (article.category.startsWith('[') || article.category.startsWith('{'))) {
                article.category = JSON.parse(article.category);
              } 
              // Si ce n'est pas déjà un tableau, le convertir en tableau
              else if (!Array.isArray(article.category)) {
                article.category = [article.category];
              }
            } catch (e) {
              console.warn('Erreur lors du parsing des catégories:', e);
              // En cas d'erreur, s'assurer qu'on a toujours un tableau
              article.category = Array.isArray(article.category) 
                ? article.category 
                : [article.category];
            }
          } else {
            // Si pas de catégorie, initialiser avec un tableau vide
            article.category = [];
          }
          
          // Formater la date si nécessaire
          if (article.date) {
            const dateObj = new Date(article.date);
            // Vérifier si la date est valide
            if (!isNaN(dateObj.getTime())) {
              // Formater la date en format local français
              article.formatted_date = dateObj.toLocaleDateString('fr-FR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              });
            } else {
              article.formatted_date = article.date;
            }
          }
          
          return article;
        });
        
        console.log(`Returning ${articles.length} articles from Directus`);
        
        return {
          success: true,
          articles,
          source: "directus"
        };
      } catch (apiError) {
        throw new Error(`API error: ${apiError.message}`);
      }
    } catch (directusError) {
      console.error('Error fetching from Directus:', directusError);
      
      // Garantir un retour de données même en cas d'erreur
      let filteredArticles;
      if (category === 'all') {
        filteredArticles = mockedArticles;
      } else {
        // Filtrer les articles qui contiennent la catégorie demandée
        filteredArticles = mockedArticles.filter(a => 
          Array.isArray(a.category) && a.category.includes(category)
        );
      }
      console.log(`Error fallback: Returning ${filteredArticles.length} mocked articles for category '${category}'`);
      return {
        success: true,
        articles: filteredArticles,
        source: "mocked (Directus error)"
      };
    }
  } catch (globalError) {
    console.error('Global error in blog API:', globalError);
    
    // En cas d'erreur grave, toujours retourner les données fictives
    const categoryFilter = query?.category;
    const allArticles = categoryFilter === 'all' || !categoryFilter 
      ? mockedArticles 
      : mockedArticles.filter(a => Array.isArray(a.category) && a.category.includes(categoryFilter));
    
    return {
      success: true,
      message: 'Erreur serveur, affichage des articles de secours',
      error: globalError.message,
      articles: allArticles,
      source: "mocked (global error)"
    };
  }
}); 