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
    const mockedArticles = [
      {
      id: 1,
        title: "Les dernières tendances en matière de sécurité en 2025",
        content: `<div class="article">
          <p>Les technologies de sécurité évoluent à un rythme sans précédent. En 2025, nous assistons à une véritable révolution dans le domaine de la sécurité professionnelle, avec l'émergence de nouvelles solutions innovantes qui redéfinissent les standards du secteur.</p>
          
          <h2>L'intelligence artificielle au cœur des dispositifs de sécurité</h2>
          <p>L'IA est devenue un élément central des systèmes de sécurité modernes. Les algorithmes d'apprentissage automatique permettent désormais de détecter des comportements suspects avec une précision remarquable, réduisant considérablement les fausses alertes qui ont longtemps été le talon d'Achille des systèmes traditionnels.</p>
          <p>Les caméras intelligentes équipées d'IA peuvent identifier des situations à risque avant même qu'elles ne se concrétisent, permettant une intervention préventive plutôt que réactive. Ces systèmes sont capables de distinguer des comportements anormaux dans la foule, d'identifier des objets abandonnés, ou encore de reconnaître des individus spécifiques même avec des angles de vue difficiles.</p>
          
          <h2>La biométrie avancée pour un contrôle d'accès inviolable</h2>
          <p>La reconnaissance faciale, vocale et par empreintes digitales a atteint un niveau de sophistication sans précédent. Les nouveaux systèmes biométriques combinent plusieurs facteurs d'authentification pour une sécurité renforcée :</p>
          <ul>
            <li>Reconnaissance faciale 3D résistante aux tentatives de fraude</li>
            <li>Analyse des modèles de marche uniques à chaque individu</li>
            <li>Reconnaissance veineuse (analyse du réseau veineux de la main)</li>
            <li>Authentification comportementale (façon d'interagir avec les appareils)</li>
          </ul>
          <p>Ces technologies garantissent une identification précise tout en respectant les normes de confidentialité en vigueur.</p>
          
          <h2>La cybersécurité physique : une approche intégrée</h2>
          <p>L'interconnexion croissante entre sécurité physique et numérique a donné naissance à une nouvelle approche : la cybersécurité physique. Cette méthodologie reconnaît que les systèmes de sécurité eux-mêmes peuvent devenir des points d'entrée pour des attaques numériques.</p>
          <p>Les solutions de sécurité modernes intègrent des protocoles de chiffrement avancés, des mécanismes d'authentification multi-facteurs pour les administrateurs, et des systèmes de détection d'intrusion spécifiquement conçus pour protéger l'infrastructure de sécurité elle-même.</p>
          
          <h2>Drones et robots de surveillance autonomes</h2>
          <p>Les drones et robots de sécurité autonomes transforment la surveillance des grands sites. Ces sentinelles incorruptibles peuvent :</p>
          <ul>
            <li>Patrouiller selon des itinéraires programmés ou aléatoires</li>
            <li>Réagir automatiquement aux alertes des autres systèmes</li>
            <li>Capturer des images en haute résolution et les transmettre en temps réel</li>
            <li>Intervenir comme première réponse dans des zones à risque</li>
          </ul>
          <p>Équipés de capteurs multiples (thermiques, acoustiques, etc.), ces robots constituent une présence dissuasive tout en réduisant les risques pour le personnel humain.</p>
          
          <h2>L'analyse prédictive des risques</h2>
          <p>Grâce au big data et aux algorithmes d'IA, les entreprises peuvent désormais anticiper les risques de sécurité avec une précision inédite. Ces systèmes analysent des millions de données historiques et contextuelles pour identifier les patterns invisibles à l'œil humain :</p>
          <ul>
            <li>Tendances temporelles des incidents</li>
            <li>Corrélations entre facteurs environnementaux et risques</li>
            <li>Modèles comportementaux précédant les incidents</li>
          </ul>
          <p>Cette capacité d'anticipation permet aux entreprises d'allouer leurs ressources de sécurité de manière optimale, maximisant l'efficacité tout en réduisant les coûts.</p>
          
          <h2>Conclusion : une sécurité plus intelligente et intégrée</h2>
          <p>En 2025, la sécurité professionnelle n'est plus une simple question de verrous et de caméras, mais un écosystème intelligent où technologies avancées et expertise humaine se complètent parfaitement. Les solutions de sécurité modernes offrent une protection proactive, adaptative et hautement personnalisée.</p>
          <p>Chez PROSEN, nous intégrons ces innovations dans nos solutions pour offrir à nos clients les standards de sécurité les plus élevés, avec une approche centrée sur leurs besoins spécifiques.</p>
        </div>`,
        excerpt: "Découvrez les innovations et technologies qui façonnent l'avenir de la sécurité professionnelle en 2025 : IA, biométrie avancée, robots autonomes et analyse prédictive.",
        category: ["Tendances", "Innovations"],
        date: "2025-03-15",
      published: true,
        slug: "tendances-securite-2025",
      image: "/images/blog/security-trends.jpg",
      author: "Équipe PROSEN",
      related_articles: [2, 3]
      },
      {
        id: 2,
        title: "Guide complet pour choisir votre système de vidéosurveillance en 2025",
        content: `<div class="article">
          <p>Le choix d'un système de vidéosurveillance adapté à vos besoins spécifiques est une décision importante qui impacte directement la sécurité de votre entreprise ou de votre domicile. En 2025, avec l'évolution rapide des technologies, naviguer parmi les nombreuses options disponibles peut s'avérer complexe. Ce guide vous aidera à faire des choix éclairés.</p>
          
          <h2>Évaluer vos besoins spécifiques avant tout</h2>
          <p>Avant de vous lancer dans l'achat d'équipements, prenez le temps d'analyser précisément vos besoins :</p>
          
          <h3>Questions essentielles à se poser</h3>
          <ul>
            <li><strong>Surface à couvrir</strong> : Souhaitez-vous surveiller uniquement les points d'entrée ou l'intégralité de vos locaux ?</li>
            <li><strong>Conditions d'éclairage</strong> : Vos espaces sont-ils bien éclairés ou nécessitent-ils des caméras avec vision nocturne performante ?</li>
            <li><strong>Environnement</strong> : S'agit-il d'une installation intérieure, extérieure, ou les deux ?</li>
            <li><strong>Niveau de détail requis</strong> : Avez-vous besoin de pouvoir identifier clairement des visages ou simplement détecter des mouvements ?</li>
            <li><strong>Contraintes réseau</strong> : Quelle est la capacité de votre infrastructure réseau et de stockage ?</li>
          </ul>
          
          <h2>Les technologies de caméras : faire le bon choix</h2>
          
          <h3>Résolution d'image</h3>
          <p>En 2025, les standards minimaux ont considérablement évolué :</p>
          <ul>
            <li><strong>4K (8MP)</strong> : Idéal pour les grands espaces et lorsqu'une identification précise est nécessaire</li>
            <li><strong>Full HD (1080p)</strong> : Un bon compromis pour la plupart des applications</li>
            <li><strong>Super HD (1440p)</strong> : Offre une qualité supérieure sans les coûts de stockage du 4K</li>
          </ul>
          <p>N'oubliez pas que plus la résolution est élevée, plus les besoins en bande passante et en stockage augmentent.</p>
          
          <h3>Technologies de vision nocturne</h3>
          <p>Les avancées récentes ont révolutionné la vidéosurveillance en conditions de faible luminosité :</p>
          <ul>
            <li><strong>Infrarouge (IR) amélioré</strong> : Portée jusqu'à 200m avec clarté même dans l'obscurité totale</li>
            <li><strong>Starlight</strong> : Capture d'images couleur en très faible luminosité sans éclairage IR</li>
            <li><strong>Vision thermique</strong> : Détection basée sur la chaleur, idéale pour les périmètres extérieurs</li>
          </ul>
          
          <h3>Caméras intelligentes avec IA intégrée</h3>
          <p>Les caméras modernes ne se contentent plus de filmer, elles analysent :</p>
          <ul>
            <li>Détection et reconnaissance faciale en temps réel</li>
            <li>Analyse comportementale (détection de chutes, comportements suspects)</li>
            <li>Comptage de personnes et analyse de flux</li>
            <li>Détection d'objets abandonnés ou retirés</li>
            <li>Reconnaissance de plaques d'immatriculation (LPR)</li>
          </ul>
          
          <h2>Architecture du système : centralisée ou distribuée ?</h2>
          
          <h3>Systèmes basés sur NVR (Network Video Recorder)</h3>
          <p><strong>Avantages</strong> :</p>
          <ul>
            <li>Solution clé en main plus simple à configurer</li>
            <li>Fonctionnement possible en réseau fermé (sécurité accrue)</li>
            <li>Généralement moins coûteux pour les petites installations</li>
          </ul>
          <p><strong>Inconvénients</strong> :</p>
          <ul>
            <li>Moins évolutif que les solutions basées sur serveur</li>
            <li>Capacités analytiques parfois limitées</li>
          </ul>
          
          <h3>Systèmes basés sur VMS (Video Management Software)</h3>
          <p><strong>Avantages</strong> :</p>
          <ul>
            <li>Haute évolutivité, idéal pour les grandes installations</li>
            <li>Fonctionnalités analytiques avancées</li>
            <li>Intégration poussée avec d'autres systèmes (contrôle d'accès, alarme)</li>
          </ul>
          <p><strong>Inconvénients</strong> :</p>
          <ul>
            <li>Configuration plus complexe</li>
            <li>Coût initial plus élevé</li>
          </ul>
          
          <h2>Stockage et conservation des données</h2>
          
          <h3>Options de stockage modernes</h3>
          <ul>
            <li><strong>Stockage local</strong> : Directement sur le NVR ou serveur dédié</li>
            <li><strong>Stockage en périphérie</strong> : Sur les caméras elles-mêmes (cartes SD haute capacité)</li>
            <li><strong>Cloud hybride</strong> : Combinaison de stockage local pour les images récentes et cloud pour l'archivage</li>
            <li><strong>Cloud sécurisé</strong> : Entièrement dans le cloud avec chiffrement de bout en bout</li>
          </ul>
          
          <h3>Optimisation du stockage</h3>
          <p>Les technologies modernes permettent de réduire considérablement les besoins en stockage :</p>
          <ul>
            <li><strong>Codecs nouvelle génération</strong> (H.265+ et H.266) réduisant jusqu'à 50% l'espace requis</li>
            <li><strong>Enregistrement conditionnel</strong> basé sur des déclencheurs intelligents (mouvement, événements)</li>
            <li><strong>Compression adaptative</strong> selon l'importance des zones dans l'image</li>
          </ul>
          
          <h2>Cybersécurité : un aspect non négociable</h2>
          <p>En 2025, les systèmes de vidéosurveillance constituent des cibles privilégiées pour les cyberattaques. Exigez ces caractéristiques de sécurité :</p>
          <ul>
            <li>Chiffrement des flux vidéo (TLS/SSL)</li>
            <li>Authentification multi-facteurs pour l'accès administrateur</li>
            <li>Mises à jour de sécurité automatiques</li>
            <li>Pare-feu intégré et détection d'intrusion réseau</li>
            <li>Audit de sécurité et tests de pénétration réguliers</li>
          </ul>
          
          <h2>Conformité réglementaire</h2>
          <p>Assurez-vous que votre système respecte les réglementations en vigueur :</p>
          <ul>
            <li>Respect du RGPD et autres lois sur la protection des données</li>
            <li>Signalisation obligatoire des zones sous vidéosurveillance</li>
            <li>Durées de conservation appropriées</li>
            <li>Journalisation des accès aux enregistrements</li>
          </ul>
          
          <h2>Conclusion : investissez dans un système évolutif</h2>
          <p>Le système idéal doit pouvoir évoluer avec vos besoins futurs. Privilégiez :</p>
          <ul>
            <li>Des plateformes ouvertes supportant l'ONVIF pour l'interopérabilité</li>
            <li>Des systèmes modulaires permettant d'ajouter des caméras et fonctionnalités</li>
            <li>Des mises à niveau logicielles régulières</li>
          </ul>
          <p>Chez PROSEN, nous proposons des audits personnalisés pour vous aider à identifier la solution de vidéosurveillance parfaitement adaptée à vos besoins spécifiques. Notre équipe d'experts vous accompagne de la conception à l'installation et la maintenance, garantissant un système performant et conforme aux normes les plus strictes.</p>
        </div>`,
        excerpt: "Découvrez comment sélectionner le système de vidéosurveillance idéal en 2025 : technologies avancées, considérations de stockage, cybersécurité et conformité réglementaire.",
        category: ["Guide", "Équipements"],
        date: "2025-02-20",
        published: true,
        slug: "choisir-systeme-videosurveillance-2025",
        image: "/images/blog/video-surveillance.webp",
        author: "Équipe PROSEN",
        related_articles: [1, 3]
      },
      {
        id: 3,
        title: "La sécurité événementielle en 2025 : stratégies avancées et nouvelles approches",
        content: `<div class="article">
          <p>Organiser un événement professionnel réussi implique de nombreux aspects logistiques, mais la sécurité reste un élément fondamental souvent sous-estimé. En 2025, face à l'évolution des risques et des technologies, les approches traditionnelles ne suffisent plus. Ce guide expert vous présente les meilleures pratiques pour garantir la sécurité de vos événements professionnels.</p>
          
          <h2>Planification stratégique : la base d'une sécurité efficace</h2>
          
          <h3>Évaluation des risques spécifiques à l'événement</h3>
          <p>Chaque événement présente un profil de risque unique, influencé par plusieurs facteurs :</p>
          <ul>
            <li><strong>Profil des participants</strong> : La présence de VIP ou de personnalités controversées requiert des mesures spécifiques</li>
            <li><strong>Nature de l'événement</strong> : Un salon professionnel, une conférence ou une soirée de gala impliquent des risques différents</li>
            <li><strong>Contexte géopolitique</strong> : Certains événements peuvent devenir des cibles en fonction de leur thématique ou des organisations participantes</li>
            <li><strong>Configuration du lieu</strong> : Espaces ouverts, multiples accès, étages multiples nécessitent des approches adaptées</li>
            <li><strong>Historique des incidents</strong> : Les problèmes rencontrés lors d'éditions précédentes doivent orienter la planification</li>
          </ul>
          
          <h3>Cartographie de sécurité et zonage intelligent</h3>
          <p>Une approche stratégique moderne implique un zonage précis du lieu :</p>
          <ul>
            <li><strong>Zones concentriques de sécurité</strong> avec niveaux d'accès progressifs</li>
            <li><strong>Définition de points de contrôle stratégiques</strong> pour filtrer efficacement les flux</li>
            <li><strong>Voies d'évacuation redondantes</strong> pour chaque secteur</li>
            <li><strong>Zones tampons de sécurité</strong> entre espaces publics et zones sensibles</li>
          </ul>
          
          <h2>Technologies de sécurité événementielle de nouvelle génération</h2>
          
          <h3>Contrôle d'accès biométrique multi-facteurs</h3>
          <p>Les systèmes modernes combinent plusieurs technologies pour une identification rapide et sûre :</p>
          <ul>
            <li><strong>Reconnaissance faciale non intrusive</strong> à distance pendant l'approche</li>
            <li><strong>Bracelets RFID/NFC</strong> avec chiffrement avancé</li>
            <li><strong>Applications mobiles d'accréditation</strong> avec codes QR dynamiques et géolocalisation</li>
            <li><strong>Badges intelligents</strong> avec technologie e-paper et sécurité anti-contrefaçon</li>
          </ul>
          
          <h3>Surveillance intelligente et analyse comportementale</h3>
          <p>Les systèmes de 2025 ne se contentent plus d'observer, ils comprennent ce qu'ils voient :</p>
          <ul>
            <li><strong>Caméras IA</strong> capables de détecter des comportements suspects (nervosité excessive, mouvements inhabituels)</li>
            <li><strong>Analyse des flux de foule</strong> pour identifier les congestions dangereuses</li>
            <li><strong>Détection d'objets abandonnés</strong> en temps réel</li>
            <li><strong>Systèmes audio intelligents</strong> identifiant les sons anormaux (bris de verre, cris, détonations)</li>
          </ul>
          <p>Ces technologies permettent des interventions préventives avant que les situations ne dégénèrent.</p>
          
          <h3>Détection des menaces invisibles</h3>
          <p>Les risques modernes incluent des menaces difficilement perceptibles :</p>
          <ul>
            <li><strong>Scanners de nouvelle génération</strong> pour détecter armes et matières dangereuses sans files d'attente</li>
            <li><strong>Détecteurs CBRN</strong> (Chimique, Biologique, Radiologique, Nucléaire) discrets</li>
            <li><strong>Monitoring des fréquences radio</strong> pour détecter les communications suspectes</li>
            <li><strong>Drones de surveillance</strong> pour la sécurité périmétrique</li>
          </ul>
          
          <h2>Le facteur humain : essentiel malgré les avancées technologiques</h2>
          
          <h3>Formation spécialisée des équipes de sécurité événementielle</h3>
          <p>Les agents de sécurité événementielle de 2025 reçoivent une formation spécifique :</p>
          <ul>
            <li><strong>Psychologie des foules</strong> et techniques de désescalade</li>
            <li><strong>Communication de crise</strong> et coordination avec les services d'urgence</li>
            <li><strong>Premiers secours avancés</strong> incluant la gestion des blessures traumatiques</li>
            <li><strong>Protocoles d'évacuation adaptés</strong> aux différents types de menaces</li>
          </ul>
          
          <h3>Intégration des participants à la stratégie de sécurité</h3>
          <p>Une approche moderne implique les participants eux-mêmes :</p>
          <ul>
            <li><strong>Application mobile de sécurité</strong> permettant de signaler des problèmes</li>
            <li><strong>Sessions de briefing rapide</strong> sur les procédures d'urgence</li>
            <li><strong>Signalétique intuitive</strong> pour l'orientation en cas d'incident</li>
            <li><strong>Points d'assistance clairement identifiés</strong> répartis sur le site</li>
          </ul>
          
          <h2>Gestion de crise : préparation aux scénarios multiples</h2>
          
          <h3>Centre de commande unifié</h3>
          <p>Un poste de commandement centralisé intègre :</p>
          <ul>
            <li>Visualisation en temps réel de toutes les zones via un mur d'écrans</li>
            <li>Tableaux de bord analytiques montrant les anomalies détectées par l'IA</li>
            <li>Communications unifiées avec toutes les équipes terrain</li>
            <li>Liaison directe avec les services d'urgence externes</li>
          </ul>
          
          <h3>Plans d'intervention gradués</h3>
          <p>Une planification efficace prévoit différents niveaux de réponse :</p>
          <ul>
            <li><strong>Niveau 1</strong> : Incidents mineurs gérés discrètement sans perturber l'événement</li>
            <li><strong>Niveau 2</strong> : Situations nécessitant une intervention visible mais limitée</li>
            <li><strong>Niveau 3</strong> : Déploiement complet des mesures d'urgence avec possibilité d'évacuation partielle</li>
            <li><strong>Niveau 4</strong> : Évacuation complète et coordination avec les services d'urgence</li>
          </ul>
          
          <h3>Exercices de simulation et tests des procédures</h3>
          <p>La préparation inclut systématiquement :</p>
          <ul>
            <li>Simulations numériques des flux d'évacuation</li>
            <li>Exercices pratiques pour les équipes avant l'événement</li>
            <li>Tests des systèmes de communication d'urgence</li>
            <li>Revues post-exercice pour identifier les points d'amélioration</li>
          </ul>
          
          <h2>Aspects réglementaires et conformité</h2>
          <p>La sécurité événementielle est encadrée par des obligations légales strictes :</p>
          <ul>
            <li>Autorisations administratives spécifiques selon le type et la taille de l'événement</li>
            <li>Normes de sécurité incendie et d'évacuation</li>
            <li>Respect des règles RGPD pour les données collectées (vidéosurveillance, accréditations)</li>
            <li>Contraintes d'accessibilité pour les personnes à mobilité réduite</li>
            <li>Protocoles sanitaires adaptés aux risques actuels</li>
          </ul>
          
          <h2>Conclusion : une approche intégrée et sur mesure</h2>
          <p>La sécurité événementielle en 2025 exige une vision holistique, combinant technologie de pointe, expertise humaine et planification rigoureuse. Chaque événement nécessite une analyse spécifique et des solutions adaptées.</p>
          <p>Chez PROSEN, nous proposons un accompagnement complet, de l'évaluation des risques spécifiques à votre événement jusqu'à la mise en œuvre opérationnelle. Notre équipe d'experts vous aide à développer une stratégie de sécurité robuste, discrète et proportionnée, pour que vous puissiez vous concentrer sur la réussite de votre événement.</p>
          <p>Contactez-nous pour découvrir comment nous pouvons sécuriser votre prochain événement professionnel avec les standards les plus élevés du secteur.</p>
        </div>`,
        excerpt: "Découvrez les stratégies avancées et les nouvelles approches pour sécuriser efficacement vos événements professionnels en 2025, de la planification à la gestion de crise.",
        category: ["Conseils", "Événementiel"],
        date: "2025-01-25",
        published: true,
        slug: "securite-evenementielle-conseils-2025",
        image: "/images/blog/event-security.jpg",
        author: "Équipe PROSEN",
        related_articles: [1, 2]
      }
    ];
    
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
        
        // Chercher l'article correspondant dans nos articles fictifs
        const foundArticle = mockedArticles.find(article => article.slug === slug);
        if (foundArticle) {
          return {
            success: true,
            article: foundArticle,
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
        
        // Chercher l'article correspondant dans nos articles fictifs
        const foundArticle = mockedArticles.find(article => article.slug === slug);
        if (foundArticle) {
          return {
            success: true,
            article: foundArticle,
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
      
      // Chercher l'article correspondant dans nos articles fictifs
      const foundArticle = mockedArticles.find(article => article.slug === slug);
      if (foundArticle) {
        return {
          success: true,
          article: foundArticle,
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