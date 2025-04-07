# Configuration de Directus pour le blog PROSEN

Ce document explique comment configurer Directus pour gérer le blog du site web PROSEN.

## Prérequis

- Directus installé et fonctionnel (voir documentation/directus-installation.md)
- Un compte administrateur sur Directus

## Étape 1 : Créer la collection Articles

1. Connectez-vous à l'interface d'administration Directus
2. Allez dans "Collections" dans le menu latéral
3. Cliquez sur "Créer une collection"
4. Nommez la collection "articles" (important : utilisez ce nom exact)
5. Ajoutez une traduction française : "Articles"
6. Cliquez sur "Créer"

## Étape 2 : Configurer les champs de la collection Articles

Ajoutez les champs suivants à la collection "articles" :

| Nom du champ | Type | Interface | Options | Notes |
|--------------|------|-----------|---------|-------|
| id | Integer | Input | Primary Key, Auto Increment | Créé automatiquement |
| title | String | Input | Required | Titre de l'article |
| slug | String | Input | Required, Unique | URL de l'article (ex: mon-article) |
| content | Text | WYSIWYG | Required | Contenu HTML de l'article |
| excerpt | Text | Textarea | Required | Résumé court pour les listes |
| category | JSON | Tags | - | Catégories de l'article |
| date | Date | Datetime | Required | Date de publication |
| image | File | Image | Required | Image principale |
| author | String | Input | - | Auteur de l'article |
| published | Boolean | Toggle | - | Visibilité publique |
| related_articles | M2M | List | - | Articles en relation |
| date_created | Timestamp | Datetime | Cast as Timestamp | Création auto |
| date_updated | Timestamp | Datetime | Cast as Timestamp | Mise à jour auto |

## Étape 3 : Configurer les permissions

Pour que le frontend puisse accéder aux articles sans authentification, nous devons créer un rôle public et configurer les permissions :

1. Allez dans "Paramètres" > "Rôles & Permissions"
2. Vérifiez si un rôle "Public" existe déjà, sinon créez-le
3. Pour le rôle Public, configurez les permissions suivantes :
   - Collection "articles": Lecture (uniquement les articles avec "published=true")
   - Collection "assets": Lecture (pour les images)

## Étape 4 : Créer un token d'API statique

Pour sécuriser l'accès à l'API tout en permettant la lecture publique, créez un token d'API :

1. Allez dans "Paramètres" > "Tokens"
2. Cliquez sur "Créer un token"
3. Nommez-le "Blog Public Access"
4. Associez-le au rôle "Public"
5. Définissez une date d'expiration si nécessaire (ou laissez vide pour un token permanent)
6. Copiez le token généré

## Étape 5 : Configurer le site web avec le token

1. Ouvrez le fichier `.env` à la racine du projet
2. Ajoutez ou modifiez les variables suivantes :
```
# URL de l'API Directus (remplacez par votre URL si nécessaire)
DIRECTUS_URL=http://localhost:8055

# Token d'accès avec permission de lecture des collections
DIRECTUS_TOKEN=votre_token_généré
```

## Étape 6 : Créer des articles de test

1. Allez dans "Contenu" > "Articles" dans l'interface Directus
2. Cliquez sur "Créer" pour ajouter un nouvel article
3. Remplissez tous les champs requis (titre, slug, contenu, etc.)
4. Activez l'option "published" pour rendre l'article visible
5. Cliquez sur "Enregistrer"

## Étape 7 : Tester le blog

1. Lancez le site web en développement avec `npm run dev`
2. Accédez à `/blog` pour voir la liste des articles
3. Cliquez sur un article pour vérifier son affichage détaillé

## Résolution des problèmes courants

### Erreur 403 Forbidden
- Vérifiez que le token est correctement configuré dans le fichier `.env`
- Assurez-vous que les permissions sont correctement configurées pour le rôle Public
- Vérifiez que les articles ont bien le statut "published" à `true`

### Images non affichées
- Vérifiez que la collection "Directus Files" a des permissions de lecture pour le rôle Public
- Assurez-vous que le token a accès aux assets

### Données non mises à jour
- Redémarrez le serveur de développement pour prendre en compte les nouvelles variables d'environnement
- Videz le cache du navigateur

## Personnalisation avancée

### Catégories prédéfinies
Pour standardiser les catégories, vous pouvez créer une liste de valeurs prédéfinies :

1. Allez dans "Paramètres" > "Préréglages et marque-pages"
2. Créez un préréglage pour le champ "category" avec les valeurs recommandées :
   - Conseils
   - Tendances
   - Guide
   - Actualités
   - Événements 