# Gestion du Blog avec Directus

Ce document explique comment utiliser Directus comme CMS headless pour gérer le blog de PROSEN.

## Structure de la collection "Articles"

La collection "Articles" dans Directus est configurée pour stocker et gérer les articles du blog. Voici la structure des champs :

| Champ | Type | Description | Requis |
|-------|------|-------------|--------|
| `id` | ID | Identifiant unique, généré automatiquement | Oui |
| `title` | Texte court | Titre de l'article | Oui |
| `slug` | Texte court | Identifiant URL-friendly (ex: "mon-article-blog") | Oui |
| `content` | Éditeur WYSIWYG | Contenu complet de l'article au format HTML | Oui |
| `excerpt` | Texte court | Résumé court de l'article (150-200 caractères) | Oui |
| `category` | Texte court | Catégorie de l'article (ex: "Tendances", "Conseils", "Guide") | Oui |
| `date` | Date | Date de publication | Oui |
| `image` | Image | Image principale de l'article | Oui |
| `author` | Texte court | Auteur de l'article (par défaut "Équipe PROSEN") | Non |
| `published` | Booléen | Status de publication (visible ou non sur le site) | Oui |
| `related_articles` | Relation m2m | Articles liés qui apparaissent en bas de l'article | Non |

## Comment publier un article

1. **Connexion à Directus**
   - Accédez à l'interface d'administration Directus via l'URL fournie
   - Connectez-vous avec vos identifiants

2. **Création d'un nouvel article**
   - Dans le menu latéral, cliquez sur "Articles"
   - Cliquez sur le bouton "Créer" en haut à droite
   - Remplissez le formulaire avec les informations de l'article :
     - **Titre** : Nom de l'article
     - **Slug** : Généré automatiquement à partir du titre, mais peut être personnalisé
     - **Contenu** : Utilisez l'éditeur WYSIWYG pour formater votre texte avec des titres, des listes, des images...
     - **Extrait** : Résumé court qui apparaît dans les listes d'articles
     - **Catégorie** : Choisissez une catégorie existante ou créez-en une nouvelle
     - **Date** : Par défaut la date actuelle, peut être modifiée
     - **Image** : Téléchargez une image principale qui apparaîtra en haut de l'article
     - **Auteur** : Nom de l'auteur (optionnel)
     - **Articles liés** : Sélectionnez d'autres articles à afficher en bas de l'article
     - **Publié** : Activez cette option pour rendre l'article visible sur le site

3. **Prévisualisation et publication**
   - Utilisez le bouton "Aperçu" pour voir l'apparence de l'article avant publication
   - Lorsque l'article est prêt, assurez-vous que l'option "Publié" est activée
   - Cliquez sur "Enregistrer" pour finaliser la publication

## Format du contenu

L'éditeur WYSIWYG de Directus permet de formater le contenu avec différents éléments :

- **Titres** : Utilisez H2 pour les sections principales et H3 pour les sous-sections
- **Texte riche** : Formatez le texte en gras, italique, ou souligné selon les besoins
- **Listes** : Créez des listes à puces ou numérotées pour structurer l'information
- **Images** : Insérez des images dans le corps du texte (en plus de l'image principale)
- **Liens** : Ajoutez des liens vers d'autres pages ou ressources externes
- **Citations** : Utilisez le format blockquote pour les citations
- **Tableaux** : Insérez des tableaux pour présenter des données structurées

## Bonnes pratiques

- **Longueur des articles** : Visez entre 800 et 1500 mots pour un bon équilibre
- **Images** : Utilisez des images de haute qualité mais optimisées pour le web (moins de 300KB)
- **Format d'image** : Préférez le format 16:9 pour l'image principale (1200×675px idéalement)
- **SEO** : Incluez des mots-clés pertinents dans le titre, l'extrait et le contenu
- **Liens internes** : Référencez d'autres articles ou pages du site pour améliorer la navigation
- **Relecture** : Vérifiez l'orthographe et la grammaire avant publication
- **Mise à jour** : Actualisez les articles obsolètes plutôt que d'en créer de nouveaux sur le même sujet

## Gestion des catégories

Pour assurer la cohérence, utilisez ces catégories principales :

- **Tendances** : Nouveautés et évolutions du secteur de la sécurité
- **Conseils** : Recommandations pratiques et astuces
- **Guide** : Tutoriels détaillés et procédures
- **Actualités** : Nouvelles de l'entreprise et événements
- **Témoignages** : Retours d'expérience de clients

Vous pouvez créer de nouvelles catégories si nécessaire, mais essayez de maintenir un nombre limité pour faciliter la navigation.

## Support technique

Pour toute question ou problème concernant la gestion du blog via Directus, contactez l'administrateur du système. 