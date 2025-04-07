# Guide d'importation des articles d'exemple dans Directus

Ce document explique comment importer l'exemple d'article fourni dans Directus et vérifier que la structure de données est correcte.

## Analyse de l'exemple d'article

L'exemple d'article fourni dans le fichier CSV contient toutes les informations nécessaires pour la structure définie dans notre schéma:

| Champ | Exemple | Commentaire |
|-------|---------|-------------|
| id | 1 | Identifiant unique |
| title | Gestion des risques : comment protéger efficacement votre entreprise | Titre principal de l'article |
| slug | gestion-des-risques-comment-proteger-efficacement-votre-entreprise | Généré à partir du titre |
| content | Contenu HTML complet avec titres, paragraphes, listes et liens | Formaté correctement en HTML avec balises h2, h3, p, ul, ol |
| excerpt | Les menaces qui pèsent sur votre entreprise évoluent chaque jour... | Résumé concis en 150-200 caractères |
| category | ["tendances","conseils"] | Stocké comme tableau JSON |
| date | 2025-04-06 | Format date standard |
| image | 5b627b93-3a2d-4b83-a702-42de04137742 | ID de l'image stockée dans Directus |
| author | Équipe PROSEN | Auteur de l'article |
| published | true | Article publié |

## Points à améliorer

Quelques ajustements sont nécessaires pour que l'article soit parfaitement conforme au schéma défini:

1. **Format de la catégorie**: Dans notre schéma, `category` est défini comme une valeur unique (string) et non un tableau. L'exemple utilise un tableau JSON `["tendances","conseils"]`. Deux options:
   - Modifier notre schéma pour accepter un tableau de catégories (recommandé)
   - Ou conserver seulement la catégorie principale pour l'importation

2. **Liens dans le contenu**: Certains liens dans le contenu HTML ont un format incorrect avec des guillemets doublés. Par exemple: `<a href=""https://...""`. Les guillemets doivent être simples.

## Procédure d'importation

Pour importer l'exemple d'article dans Directus:

1. **Préparer le fichier CSV**
   - S'assurer que le fichier CSV est correctement formaté (séparateurs, encodage UTF-8)
   - Corriger les guillemets doublés dans les liens HTML si nécessaire

2. **Téléchargement de l'image**
   - Avant d'importer l'article, télécharger l'image correspondante dans Directus
   - Notez l'ID de l'image obtenu (dans l'exemple: `5b627b93-3a2d-4b83-a702-42de04137742`)

3. **Importer dans Directus**
   - Se connecter à l'interface d'administration Directus
   - Accéder à "Paramètres" > "Importation de données"
   - Sélectionnez "Articles" comme collection cible
   - Choisir le fichier CSV préparé
   - Configurer les mappages de champs:
     - Vérifier que chaque colonne du CSV correspond au bon champ dans Directus
     - Pour le champ `category`, choisir l'option de conversion appropriée selon votre décision (tableau ou valeur unique)
   - Lancer l'importation

4. **Vérifier l'importation**
   - Accéder à la collection "Articles"
   - Ouvrir l'article importé pour vérifier que:
     - Le contenu HTML s'affiche correctement
     - L'image est bien associée
     - Les catégories sont correctement affichées
     - La mise en forme du contenu riche est préservée
   - Prévisualiser l'article pour s'assurer qu'il s'affiche correctement

## Modification du schéma pour les catégories multiples

Si vous décidez de supporter les catégories multiples (recommandé), voici comment modifier le schéma:

1. Accéder à "Paramètres" > "Collections" > "Articles"
2. Modifier le champ `category`:
   - Changer le type de "string" à "json"
   - Changer l'interface de "select-dropdown" à "select-multiple-dropdown"
   - Conserver les mêmes options de choix (Tendances, Conseils, etc.)
3. Enregistrer les modifications

## Vérification de l'API

Pour confirmer que l'article est correctement accessible via l'API:

1. Tester une requête GET à `/items/articles`
2. Vérifier que l'article apparaît avec tous ses champs
3. Tester également le filtrage par catégorie pour s'assurer que le format des catégories fonctionne avec l'API

## Conclusion

L'exemple d'article fourni est de très bonne qualité et contient toutes les informations nécessaires. Une fois les petits ajustements réalisés pour les catégories et les liens, il pourra être parfaitement intégré dans Directus et servir de référence pour les futurs articles. 