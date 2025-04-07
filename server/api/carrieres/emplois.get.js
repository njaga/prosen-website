import { defineEventHandler, getQuery } from 'h3';

export default defineEventHandler(async (event) => {
  try {
    // Récupérer les paramètres de requête
    const query = getQuery(event);
    const categorie = query.categorie || 'all';
    
    console.log("Emplois API Request - Catégorie:", categorie);
    
    // Offres d'emploi fictives pour garantir un affichage même en cas d'échec
    const mockedEmplois = [
      {
        id: 1,
        titre: "Agent de sécurité",
        slug: "agent-securite-dakar",
        resume: "Nous recherchons des agents de sécurité pour assurer la surveillance de sites commerciaux à Dakar",
        description: "<p>Nous recherchons des agents de sécurité qualifiés pour assurer la surveillance et la protection de sites commerciaux à Dakar.</p><ul><li>Contrôle des accès</li><li>Surveillance des locaux</li><li>Rondes de sécurité</li></ul>",
        type_contrat: "cdi",
        categorie: "agent",
        lieu: "Dakar, Sénégal",
        experience: "1-2",
        salaire: "Selon profil",
        avantages: [
          { text: "Formation assurée" },
          { text: "Horaires flexibles" },
          { text: "Possibilité d'évolution" },
          { text: "Sites variés" }
        ],
        competences: [
          { text: "Certification agent de sécurité" },
          { text: "Sens de l'observation" },
          { text: "Rigueur et professionnalisme" }
        ],
        date_publication: "2023-12-15",
        publie: true
      },
      {
        id: 2,
        titre: "Technicien de surface",
        slug: "technicien-surface",
        resume: "Nous recrutons des techniciens de surface pour l'entretien de bureaux professionnels",
        description: "<p>Nous recrutons des techniciens de surface pour assurer le nettoyage et l'entretien des locaux de nos clients.</p><ul><li>Nettoyage des bureaux</li><li>Entretien des sanitaires</li><li>Désinfection des espaces communs</li></ul>",
        type_contrat: "cdd",
        categorie: "technicien",
        lieu: "Dakar, Sénégal",
        experience: "debutant",
        salaire: "Compétitif",
        avantages: [
          { text: "Matériel professionnel fourni" },
          { text: "Formation aux techniques" },
          { text: "Contrats stables" },
          { text: "Environnements variés" }
        ],
        competences: [
          { text: "Connaissance des produits d'entretien" },
          { text: "Minutie et attention aux détails" },
          { text: "Autonomie" }
        ],
        date_publication: "2023-12-10",
        publie: true
      },
      {
        id: 3,
        titre: "Superviseur",
        slug: "superviseur-securite",
        resume: "Nous cherchons un superviseur expérimenté pour coordonner nos équipes de sécurité",
        description: "<p>Nous cherchons un superviseur expérimenté pour coordonner nos équipes sur le terrain et assurer la qualité de nos services.</p><ul><li>Management d'équipe</li><li>Planification des interventions</li><li>Contrôle qualité</li></ul>",
        type_contrat: "cdi",
        categorie: "superviseur",
        lieu: "Dakar, Sénégal",
        experience: "3-5",
        salaire: "Attractif selon expérience",
        avantages: [
          { text: "Responsabilités importantes" },
          { text: "Rémunération attractive" },
          { text: "Formation en management" },
          { text: "Évolution vers des postes de direction" }
        ],
        competences: [
          { text: "Expérience en management d'équipe" },
          { text: "Capacité à gérer les situations d'urgence" },
          { text: "Excellentes compétences en communication" }
        ],
        date_publication: "2023-12-01",
        publie: true
      }
    ];
    
    try {
      // Utiliser une URL fixe sans useRuntimeConfig
      const directusUrl = process.env.DIRECTUS_URL || 'http://localhost:8055';
      const directusToken = process.env.DIRECTUS_TOKEN || '';
      
      console.log('Using Directus URL:', directusUrl);
      
      // Construire l'URL de l'API et les paramètres
      let apiUrl = `${directusUrl}/items/emplois`;
      
      // Ajouter des filtres
      let filters = [];
      
      // Filtre pour les offres publiées
      filters.push('filter[publie][_eq]=true');
      
      // Filtre par catégorie si spécifié et différent de 'all'
      if (categorie && categorie !== 'all') {
        filters.push(`filter[categorie][_eq]=${categorie}`);
      }
      
      // Trier par date de publication (du plus récent au plus ancien)
      filters.push('sort[]=-date_publication');
      
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
          // Si catégorie spécifiée, filtrer les emplois fictifs
          let filteredEmplois;
          if (categorie === 'all') {
            filteredEmplois = mockedEmplois;
          } else {
            // Filtrer les emplois qui correspondent à la catégorie demandée
            filteredEmplois = mockedEmplois.filter(e => e.categorie === categorie);
          }
          console.log(`Returning ${filteredEmplois.length} mocked emplois for category '${categorie}'`);
          return {
            success: true,
            emplois: filteredEmplois,
            source: "mocked (API error)"
          };
        }
        
        const data = await response.json();
        console.log('API response received, emplois count:', data.data?.length || 0);
        
        if (!data.data || !Array.isArray(data.data) || data.data.length === 0) {
          console.warn('No emplois found in Directus or invalid format, using mocked data');
          // Si catégorie spécifiée, filtrer les emplois fictifs
          let filteredEmplois;
          if (categorie === 'all') {
            filteredEmplois = mockedEmplois;
          } else {
            // Filtrer les emplois qui correspondent à la catégorie demandée
            filteredEmplois = mockedEmplois.filter(e => e.categorie === categorie);
          }
          console.log(`Returning ${filteredEmplois.length} mocked emplois for category '${categorie}'`);
          return {
            success: true,
            emplois: filteredEmplois,
            source: "mocked (no data)"
          };
        }
        
        // Transformer les données pour formater les dates
        const emplois = data.data.map(emploi => {
          // Formater la date si nécessaire
          if (emploi.date_publication) {
            const dateObj = new Date(emploi.date_publication);
            // Vérifier si la date est valide
            if (!isNaN(dateObj.getTime())) {
              // Formater la date en format local français
              emploi.date_formatee = dateObj.toLocaleDateString('fr-FR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              });
            }
          }
          
          return emploi;
        });
        
        console.log(`Returning ${emplois.length} emplois from Directus`);
        
        return {
          success: true,
          emplois,
          source: "directus"
        };
      } catch (apiError) {
        throw new Error(`API error: ${apiError.message}`);
      }
    } catch (directusError) {
      console.error('Error fetching from Directus:', directusError);
      
      // Garantir un retour de données même en cas d'erreur
      let filteredEmplois;
      if (categorie === 'all') {
        filteredEmplois = mockedEmplois;
      } else {
        // Filtrer les emplois qui correspondent à la catégorie demandée
        filteredEmplois = mockedEmplois.filter(e => e.categorie === categorie);
      }
      console.log(`Error fallback: Returning ${filteredEmplois.length} mocked emplois for category '${categorie}'`);
      return {
        success: true,
        emplois: filteredEmplois,
        source: "mocked (Directus error)"
      };
    }
  } catch (globalError) {
    console.error('Global error in emplois API:', globalError);
    
    // En cas d'erreur grave, toujours retourner les données fictives
    const categorieFilter = query?.categorie;
    const allEmplois = categorieFilter === 'all' || !categorieFilter 
      ? mockedEmplois 
      : mockedEmplois.filter(e => e.categorie === categorieFilter);
    
    return {
      success: true,
      message: 'Erreur serveur, affichage des offres de secours',
      error: globalError.message,
      emplois: allEmplois,
      source: "mocked (global error)"
    };
  }
}); 