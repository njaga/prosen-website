import { defineEventHandler } from 'h3';

export default defineEventHandler(async (event) => {
  try {
    // Récupérer le slug de l'article depuis l'URL
    const slug = event.context.params.slug;
    
    if (!slug) {
      return {
        success: false,
        message: 'Slug de l\'article non spécifié'
      };
    }
    
    console.log(`Blog API Request - Article Slug: ${slug}`);
    
    // Article fictif pour garantir un affichage même en cas d'échec
    const mockedArticle = {
      id: 1,
      title: "Les dernières tendances en matière de sécurité en 2024",
      content: "<p>Découvrez les innovations et technologies qui façonnent l'avenir de la sécurité professionnelle.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod velit vel urna commodo, vel vestibulum magna tincidunt.</p><p>Dans cet article, nous explorons les dernières technologies qui transforment le secteur de la sécurité professionnelle. De l'intelligence artificielle à la reconnaissance faciale, en passant par les systèmes d'alarme connectés, ces innovations révolutionnent la manière dont les entreprises protègent leurs actifs et leur personnel.</p><h2>L'intelligence artificielle au service de la sécurité</h2><p>L'IA permet désormais de détecter des comportements suspects et d'analyser en temps réel les flux vidéo pour identifier des situations à risque avant qu'elles ne dégénèrent.</p><h2>La biométrie comme standard de sécurité</h2><p>Les systèmes de reconnaissance faciale et d'empreintes digitales offrent un niveau de sécurité supérieur et facilitent le contrôle d'accès aux zones sensibles.</p>",
      excerpt: "Découvrez les innovations et technologies qui façonnent l'avenir de la sécurité professionnelle.",
      category: ["Tendances", "Conseils"],
      date: "2024-04-15",
      published: true,
      slug: "tendances-securite-2024",
      image: "/images/blog/security-trends.jpg",
      author: "Équipe PROSEN",
      related_articles: [2, 3]
    };
    
    // Utiliser une URL fixe sans useRuntimeConfig
    const directusUrl = process.env.DIRECTUS_URL || 'http://localhost:8055';
    const directusToken = process.env.DIRECTUS_TOKEN || '';
    
    console.log('Using Directus URL:', directusUrl);
    
    // Construire l'URL de l'API
    const apiUrl = `${directusUrl}/items/articles?filter[slug][_eq]=${slug}&filter[published][_eq]=true`;
    
    console.log('Calling Directus API:', apiUrl);
    
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
        
        // Si le slug correspond à notre article fictif, le retourner
        if (slug === mockedArticle.slug) {
          return {
            success: true,
            article: mockedArticle,
            source: "mocked (API error)"
          };
        } else {
          return {
            success: false,
            message: 'Article non trouvé',
            source: "mocked (API error)"
          };
        }
      }
      
      const data = await response.json();
      console.log('API response received:', data);
      
      if (!data.data || !Array.isArray(data.data) || data.data.length === 0) {
        console.warn('No article found in Directus with this slug');
        
        // Si le slug correspond à notre article fictif, le retourner
        if (slug === mockedArticle.slug) {
          return {
            success: true,
            article: mockedArticle,
            source: "mocked (no data)"
          };
        } else {
          return {
            success: false,
            message: 'Article non trouvé',
            source: "mocked (no data)"
          };
        }
      }
      
      // Prendre le premier article correspondant
      let article = data.data[0];
      
      // Traiter l'image
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
      
      // Formater la date
      if (article.date) {
        const dateObj = new Date(article.date);
        if (!isNaN(dateObj.getTime())) {
          article.formatted_date = dateObj.toLocaleDateString('fr-FR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          });
        } else {
          article.formatted_date = article.date;
        }
      }
      
      // Récupérer les articles liés si spécifiés
      if (article.related_articles && Array.isArray(article.related_articles) && article.related_articles.length > 0) {
        try {
          // Construire une liste d'IDs pour la requête
          const relatedIds = article.related_articles
            .filter(id => id) // Enlever les valeurs null ou undefined
            .map(id => typeof id === 'object' && id.id ? id.id : id)
            .join(',');
          
          if (relatedIds) {
            // Récupérer les articles liés
            const relatedApiUrl = `${directusUrl}/items/articles?filter[id][_in]=${relatedIds}&filter[published][_eq]=true`;
            const relatedResponse = await fetch(relatedApiUrl, { headers });
            
            if (relatedResponse.ok) {
              const relatedData = await relatedResponse.json();
              if (relatedData.data && Array.isArray(relatedData.data) && relatedData.data.length > 0) {
                // Transformer les articles liés et traiter les catégories
                article.related_articles = relatedData.data.map(relatedPost => {
                  // Traiter l'image
                  if (relatedPost.image) {
                    if (typeof relatedPost.image === 'object' && relatedPost.image.id) {
                      relatedPost.image = `${directusUrl}/assets/${relatedPost.image.id}`;
                    } else if (typeof relatedPost.image === 'string' && !relatedPost.image.startsWith('http') && !relatedPost.image.startsWith('/')) {
                      relatedPost.image = `${directusUrl}/assets/${relatedPost.image}`;
                    }
                  } else {
                    relatedPost.image = '/images/placeholder-blog.jpg';
                  }
                  
                  // Traiter les catégories
                  try {
                    if (relatedPost.category) {
                      if (typeof relatedPost.category === 'string' && 
                         (relatedPost.category.startsWith('[') || relatedPost.category.startsWith('{'))) {
                        relatedPost.category = JSON.parse(relatedPost.category);
                      } else if (!Array.isArray(relatedPost.category)) {
                        relatedPost.category = [relatedPost.category];
                      }
                    } else {
                      relatedPost.category = [];
                    }
                  } catch (e) {
                    console.warn('Erreur lors du parsing des catégories d\'un article lié:', e);
                    relatedPost.category = Array.isArray(relatedPost.category) 
                      ? relatedPost.category 
                      : [relatedPost.category || ''];
                  }
                  
                  return relatedPost;
                });
              }
            }
          }
        } catch (relatedError) {
          console.error('Error fetching related articles:', relatedError);
        }
      }
      
      return {
        success: true,
        article,
        source: "directus"
      };
    } catch (error) {
      console.error('Error fetching article from Directus:', error);
      
      // Si le slug correspond à notre article fictif, le retourner
      if (slug === mockedArticle.slug) {
        return {
          success: true,
          article: mockedArticle,
          source: "mocked (API error)"
        };
      } else {
        return {
          success: false,
          message: 'Erreur lors de la récupération de l\'article',
          error: error.message,
          source: "mocked (API error)"
        };
      }
    }
  } catch (globalError) {
    console.error('Global error in article API:', globalError);
    
    return {
      success: false,
      message: 'Erreur serveur lors de la récupération de l\'article',
      error: globalError.message
    };
  }
}); 