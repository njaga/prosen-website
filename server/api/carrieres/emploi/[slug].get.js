import { defineEventHandler } from 'h3';

export default defineEventHandler(async (event) => {
  try {
    // Récupérer le slug de l'offre d'emploi depuis l'URL
    const slug = event.context.params.slug;
    
    if (!slug) {
      return {
        success: false,
        message: 'Slug de l\'offre non spécifié'
      };
    }
    
    console.log(`Emploi API Request - Slug: ${slug}`);
    
    // Offre d'emploi fictive pour garantir un affichage même en cas d'échec
    const mockedEmplois = [
      {
        id: 1,
        titre: "Agent de sécurité",
        slug: "agent-securite-dakar",
        resume: "Nous recherchons des agents de sécurité pour assurer la surveillance de sites commerciaux à Dakar",
        description: "<div class=\"article\"><p>Nous recherchons des agents de sécurité qualifiés pour assurer la surveillance et la protection de sites commerciaux à Dakar.</p><h2>Missions principales :</h2><ul><li>Contrôle des accès et vérification des badges</li><li>Surveillance des locaux par rondes régulières</li><li>Gestion des incidents de sécurité</li><li>Tenue du registre des événements</li><li>Accueil et orientation des visiteurs</li></ul><h2>Profil recherché :</h2><ul><li>Certification agent de sécurité obligatoire</li><li>Expérience de 1 à 2 ans minimum dans un poste similaire</li><li>Excellentes capacités d'observation et de vigilance</li><li>Rigueur et professionnalisme</li><li>Maîtrise du français et du wolof, anglais apprécié</li></ul><h2>Nous offrons :</h2><ul><li>Formation continue et accompagnement</li><li>Possibilités d'évolution interne</li><li>Horaires adaptables selon les contraintes</li><li>Équipement professionnel fourni</li><li>Rémunération attractive selon profil et expérience</li></ul><p>Rejoignez PROSEN, entreprise leader dans le domaine de la sécurité au Sénégal, et participez à la protection des biens et des personnes dans un environnement professionnel valorisant.</p></div>",
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
        date_formatee: "15 décembre 2023",
        publie: true
      },
      {
        id: 2,
        titre: "Technicien de surface",
        slug: "technicien-surface",
        resume: "Nous recrutons des techniciens de surface pour l'entretien de bureaux professionnels",
        description: "<div class=\"article\"><p>Nous recrutons des techniciens de surface pour assurer le nettoyage et l'entretien des locaux de nos clients.</p><h2>Missions principales :</h2><ul><li>Nettoyage des bureaux et espaces de travail</li><li>Entretien des sanitaires et cuisines</li><li>Désinfection des espaces communs</li><li>Gestion des consommables</li><li>Respect des protocoles d'hygiène</li></ul><h2>Profil recherché :</h2><ul><li>Expérience en nettoyage de bureaux appréciée mais débutants acceptés</li><li>Connaissance des produits d'entretien et de leur utilisation</li><li>Minutie et attention aux détails</li><li>Autonomie et sens de l'organisation</li><li>Discrétion et respect de la confidentialité</li></ul><h2>Nous offrons :</h2><ul><li>Formation aux techniques professionnelles</li><li>Matériel et produits de qualité fournis</li><li>Possibilité de CDI après période d'essai</li><li>Environnements de travail variés</li><li>Rémunération compétitive</li></ul><p>Rejoignez notre équipe de professionnels et contribuez à offrir des espaces de travail propres et agréables à nos clients. PROSEN valorise le professionnalisme et le savoir-faire de chacun de ses collaborateurs.</p></div>",
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
        date_formatee: "10 décembre 2023",
        publie: true
      },
      {
        id: 3,
        titre: "Superviseur",
        slug: "superviseur-securite",
        resume: "Nous cherchons un superviseur expérimenté pour coordonner nos équipes de sécurité",
        description: "<div class=\"article\"><p>Nous cherchons un superviseur expérimenté pour coordonner nos équipes sur le terrain et assurer la qualité de nos services de sécurité.</p><h2>Missions principales :</h2><ul><li>Management d'une équipe de 10 à 15 agents</li><li>Planification des interventions et élaboration des plannings</li><li>Contrôle qualité et suivi des prestations</li><li>Formation et accompagnement des nouveaux agents</li><li>Gestion des incidents et reporting à la direction</li></ul><h2>Profil recherché :</h2><ul><li>Expérience de 3 à 5 ans minimum en management d'équipe de sécurité</li><li>Excellente connaissance des procédures et règlementations</li><li>Capacité à gérer les situations d'urgence</li><li>Leadership et sens des responsabilités</li><li>Compétences administratives et maîtrise des outils informatiques</li></ul><h2>Nous offrons :</h2><ul><li>Poste à responsabilités valorisant</li><li>Rémunération attractive selon expérience</li><li>Formation continue en management et sécurité</li><li>Perspectives d'évolution vers des postes de direction</li><li>Véhicule de fonction et téléphone professionnel</li></ul><p>Rejoignez PROSEN en tant que superviseur et participez au développement de notre entreprise tout en contribuant à la sécurité de nos clients. Nous valorisons l'expertise, l'autonomie et le sens de l'initiative.</p></div>",
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
        date_formatee: "1 décembre 2023",
        publie: true
      }
    ];
    
    // Utiliser une URL fixe sans useRuntimeConfig
    const directusUrl = process.env.DIRECTUS_URL || 'http://localhost:8055';
    const directusToken = process.env.DIRECTUS_TOKEN || '';
    
    console.log('Using Directus URL:', directusUrl);
    
    // Construire l'URL de l'API
    const apiUrl = `${directusUrl}/items/emplois?filter[slug][_eq]=${slug}&filter[publie][_eq]=true`;
    
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
        
        // Si le slug correspond à une offre fictive, la retourner
        const mockedEmploi = mockedEmplois.find(e => e.slug === slug);
        if (mockedEmploi) {
          return {
            success: true,
            emploi: mockedEmploi,
            source: "mocked (API error)"
          };
        } else {
          return {
            success: false,
            message: 'Offre d\'emploi non trouvée',
            source: "mocked (API error)"
          };
        }
      }
      
      const data = await response.json();
      console.log('API response received:', data);
      
      if (!data.data || !Array.isArray(data.data) || data.data.length === 0) {
        console.warn('No emploi found in Directus with this slug');
        
        // Si le slug correspond à une offre fictive, la retourner
        const mockedEmploi = mockedEmplois.find(e => e.slug === slug);
        if (mockedEmploi) {
          return {
            success: true,
            emploi: mockedEmploi,
            source: "mocked (no data)"
          };
        } else {
          return {
            success: false,
            message: 'Offre d\'emploi non trouvée',
            source: "mocked (no data)"
          };
        }
      }
      
      // Prendre la première offre correspondante
      let emploi = data.data[0];
      
      // Formater la date
      if (emploi.date_publication) {
        const dateObj = new Date(emploi.date_publication);
        if (!isNaN(dateObj.getTime())) {
          emploi.date_formatee = dateObj.toLocaleDateString('fr-FR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          });
        } else {
          emploi.date_formatee = emploi.date_publication;
        }
      }
      
      // Labels pour les types de contrats et expériences
      emploi.type_contrat_label = getTypeContratLabel(emploi.type_contrat);
      emploi.experience_label = getExperienceLabel(emploi.experience);
      emploi.categorie_label = getCategorieLabel(emploi.categorie);
      
      return {
        success: true,
        emploi,
        source: "directus"
      };
    } catch (error) {
      console.error('Error fetching emploi from Directus:', error);
      
      // Si le slug correspond à une offre fictive, la retourner
      const mockedEmploi = mockedEmplois.find(e => e.slug === slug);
      if (mockedEmploi) {
        return {
          success: true,
          emploi: mockedEmploi,
          source: "mocked (API error)"
        };
      } else {
        return {
          success: false,
          message: 'Erreur lors de la récupération de l\'offre d\'emploi',
          error: error.message,
          source: "mocked (API error)"
        };
      }
    }
  } catch (globalError) {
    console.error('Global error in emploi API:', globalError);
    
    return {
      success: false,
      message: 'Erreur serveur lors de la récupération de l\'offre d\'emploi',
      error: globalError.message
    };
  }
});

// Fonctions utilitaires pour les labels
function getTypeContratLabel(value) {
  const types = {
    'cdi': 'CDI',
    'cdd': 'CDD',
    'stage': 'Stage',
    'alternance': 'Alternance',
    'freelance': 'Freelance'
  };
  return types[value] || value;
}

function getExperienceLabel(value) {
  const experiences = {
    'debutant': 'Débutant accepté',
    '1-2': '1-2 ans',
    '3-5': '3-5 ans',
    '5+': 'Plus de 5 ans'
  };
  return experiences[value] || value;
}

function getCategorieLabel(value) {
  const categories = {
    'agent': 'Agent de sécurité',
    'technicien': 'Technicien de surface',
    'superviseur': 'Superviseur',
    'administratif': 'Administratif',
    'technique': 'Technique',
    'autre': 'Autre'
  };
  return categories[value] || value;
} 