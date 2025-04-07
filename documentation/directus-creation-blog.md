# Guide de création de la collection Articles dans Directus

Ce document explique étape par étape comment créer la collection "Articles" dans Directus pour gérer le blog PROSEN.

## Prérequis

- Avoir accès à une instance Directus installée et fonctionnelle
- Disposer des droits d'administration

## Création de la collection

1. **Connexion à Directus**
   - Accédez à l'interface d'administration Directus via l'URL configurée
   - Connectez-vous avec vos identifiants administrateur

2. **Créer la collection**
   - Dans le menu latéral, cliquez sur "Collections"
   - Cliquez sur le bouton "Créer une collection"
   - Remplissez les champs suivants :
     - **Nom** : `articles`
     - **Singulier** : `article`
     - **Icône** : choisissez une icône appropriée (ex: document, livre)
     - **Description** : `Collection d'articles pour le blog`
   - Cochez l'option "Créer un champ d'ID principal" (cela créera automatiquement le champ `id`)
   - Cliquez sur "Créer"

## Création des champs

3. **Ajouter les champs essentiels**
   - Une fois la collection créée, vous serez dirigé vers la page de configuration des champs
   - Commencez par ajouter les champs suivants en cliquant sur "Créer un champ" pour chacun :

   a. **Titre de l'article**
      - **Nom** : `title`
      - **Type** : Texte court
      - **Interface** : Entrée de texte
      - **Requis** : Oui
      - **Options** :
        - Placeholder : "Titre de l'article"
      - Cliquez sur "Créer"

   b. **Slug**
      - **Nom** : `slug`
      - **Type** : Texte court
      - **Interface** : Entrée de texte
      - **Requis** : Oui
      - **Options** :
        - Placeholder : "Identifiant URL-friendly (ex: mon-article-blog)"
        - Activez la génération automatique de slug à partir du titre
      - Cliquez sur "Créer"

   c. **Contenu**
      - **Nom** : `content`
      - **Type** : Texte long (Text)
      - **Interface** : Éditeur de texte riche (WYSIWYG)
      - **Requis** : Oui
      - **Options** :
        - Barre d'outils : activez les options de formatage pertinentes (gras, italique, titres, listes, images, etc.)
      - Cliquez sur "Créer"

   d. **Extrait**
      - **Nom** : `excerpt`
      - **Type** : Texte court
      - **Interface** : Entrée de texte
      - **Requis** : Oui
      - **Options** :
        - Placeholder : "Résumé court de l'article (150-200 caractères)"
      - Cliquez sur "Créer"

   e. **Catégorie**
      - **Nom** : `category`
      - **Type** : Texte court
      - **Interface** : Menu déroulant
      - **Requis** : Oui
      - **Options** :
        - Choix : Ajoutez les catégories suivantes
          - Tendances
          - Conseils
          - Guide
          - Actualités
          - Témoignages
      - Cliquez sur "Créer"

   f. **Date**
      - **Nom** : `date`
      - **Type** : Date
      - **Interface** : Sélecteur de date
      - **Requis** : Oui
      - **Options** :
        - Définir la date actuelle comme valeur par défaut
      - Cliquez sur "Créer"

   g. **Image**
      - **Nom** : `image`
      - **Type** : Fichier
      - **Interface** : Image
      - **Requis** : Oui
      - **Options** :
        - Dossier : "blog"
        - Note : "Format recommandé: 1200×675px (16:9)"
      - Cliquez sur "Créer"

   h. **Auteur**
      - **Nom** : `author`
      - **Type** : Texte court
      - **Interface** : Entrée de texte
      - **Requis** : Non
      - **Options** :
        - Placeholder : "Auteur de l'article"
        - Valeur par défaut : "Équipe PROSEN"
      - Cliquez sur "Créer"

   i. **Publié**
      - **Nom** : `published`
      - **Type** : Boolean
      - **Interface** : Interrupteur
      - **Requis** : Oui
      - **Options** :
        - Libellé : "Publié"
      - Cliquez sur "Créer"

4. **Configuration des relations (champs avancés)**
   
   j. **Articles liés**
      - **Nom** : `related_articles`
      - **Type** : Relation many-to-many (M2M)
      - **Interface** : Liste M2M
      - **Requis** : Non
      - **Options** :
        - Collection liée : "articles"
        - Champ à afficher : "title"
        - Note : "Articles liés qui apparaîtront en bas de l'article"
      - Cliquez sur "Créer"

5. **Champs de suivi (automatiques)**
   
   k. **Date de création**
      - **Nom** : `date_created`
      - **Type** : Timestamp
      - **Interface** : Datetime
      - **Options** :
        - Lecture seule : Oui
        - Spécial : date-created
      - Cliquez sur "Créer"

   l. **Date de mise à jour**
      - **Nom** : `date_updated`
      - **Type** : Timestamp
      - **Interface** : Datetime
      - **Options** :
        - Lecture seule : Oui
        - Spécial : date-updated
      - Cliquez sur "Créer"

## Configuration de l'affichage

6. **Organiser l'affichage des champs**
   - Dans l'onglet "Configuration de l'affichage", organisez les champs dans un ordre logique
   - Regroupez les champs liés (comme date et auteur) en les plaçant côte à côte
   - Ajustez la largeur des champs (pleine largeur pour le contenu, demi-largeur pour les champs courts)

7. **Configurer l'affichage de la liste**
   - Dans l'onglet "Liste", configurez les colonnes à afficher dans la vue liste des articles
   - Colonnes recommandées :
     - title (primaire)
     - category
     - date
     - published (comme indicateur)
     - date_updated

## Configuration des autorisations

8. **Définir les autorisations**
   - Accédez à "Paramètres" > "Rôles et autorisations"
   - Sélectionnez le rôle "Public" ou créez un rôle spécifique pour les utilisateurs du blog
   - Accordez les autorisations suivantes pour la collection "articles" :
     - **Lecture** : Seulement les articles publiés (Filter: published = true)
     - **Création**, **Mise à jour**, **Suppression** : Selon les besoins de votre équipe
   - Si vous utilisez l'API publique, assurez-vous que les accès en lecture sont correctement configurés

## Finalisation

9. **Tester la collection**
   - Créez un article de test pour vérifier que tous les champs fonctionnent correctement
   - Vérifiez que l'API retourne les données attendues en faisant une requête à `/items/articles`
   - Testez les filtres et la relation des articles liés

10. **Documentation pour l'équipe**
    - Partagez le document "directus-blog.md" avec votre équipe pour les aider à comprendre comment utiliser la collection

## Importation alternative via JSON

Si vous préférez une méthode plus rapide, vous pouvez importer directement la structure de la collection en utilisant le fichier `directus-schema-blog.json` :

1. Accédez à "Paramètres" > "Importation de données"
2. Sélectionnez le fichier `directus-schema-blog.json`
3. Suivez les instructions pour importer la collection
4. Vérifiez que tous les champs ont été correctement importés

## Assistance technique

Pour toute assistance technique concernant la configuration de Directus, consultez la [documentation officielle de Directus](https://docs.directus.io/) ou contactez l'administrateur système. 