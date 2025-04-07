# Guide d'installation de Directus pour la boutique PROSEN

Ce guide vous explique comment configurer Directus comme CMS headless pour gérer les produits de la boutique PROSEN.

## 1. Installer Directus

### Option 1: Utiliser Directus Cloud (Service hébergé)

1. Créez un compte sur [Directus Cloud](https://directus.io/pricing/) 
2. Créez un nouveau projet
3. Une fois le projet créé (environ 90 secondes), vous recevrez un email avec:
   - L'URL de votre projet Directus
   - Les identifiants de connexion admin

### Option 2: Installation locale avec Docker (recommandée)

Prérequis:
- [Docker](https://www.docker.com/products/docker-desktop/) installé sur votre machine

1. Créez un nouveau dossier pour Directus:
```bash
mkdir directus
cd directus
```

2. Créez les sous-dossiers nécessaires:
```bash
mkdir database uploads extensions
```

3. Créez un fichier `docker-compose.yml` dans ce dossier:
```yaml
services:
    directus:
        image: directus/directus:11.5.1
        ports:
            - 8055:8055
        volumes:
            - ./database:/directus/database
            - ./uploads:/directus/uploads
            - ./extensions:/directus/extensions
        environment:
            SECRET: "votre-clé-secrète-aléatoire"
            ADMIN_EMAIL: "admin@example.com"
            ADMIN_PASSWORD: "votre-mot-de-passe-admin"
            DB_CLIENT: "sqlite3"
            DB_FILENAME: "/directus/database/data.db"
            WEBSOCKETS_ENABLED: "true"
```

4. Lancez Directus avec Docker:
```bash
docker compose up -d
```

5. Accédez à l'interface d'administration à l'adresse: http://localhost:8055

## 2. Configuration du projet

1. Connectez-vous à l'interface d'administration de Directus
2. Allez dans "Settings" > "Data Model"
3. Créez une nouvelle collection nommée "products"
4. Ajoutez les champs selon le schéma suivant:

### Champs de la collection "products"

| Nom du champ | Type | Options |
|--------------|------|---------|
| id | ID | Auto-généré |
| name | String | Requis |
| description | Text | Requis |
| short_description | String | Requis |
| price | Integer | Requis, Prix en centimes |
| category | String (Select) | Requis, Options: epi, incendie, electronique |
| image | Image | Requis |
| inStock | Boolean | Requis |
| isNew | Boolean | Optionnel |
| features | JSON | Liste de caractéristiques |
| date_created | Date/Time | Auto-généré |
| date_updated | Date/Time | Auto-généré |

## 3. Configuration de votre site Nuxt

1. Mettez à jour le fichier `.env` de votre projet PROSEN avec l'URL de votre instance Directus:

```
DIRECTUS_URL=http://localhost:8055
```

Ou si vous utilisez Directus Cloud:

```
DIRECTUS_URL=https://votre-projet.directus.app
```

2. Redémarrez votre application Nuxt:

```bash
npm run dev
```

## 4. Ajouter des produits

1. Dans l'interface d'administration de Directus, accédez à la collection "products"
2. Cliquez sur "Create Item" pour ajouter un nouveau produit
3. Remplissez tous les champs requis et téléchargez l'image du produit
4. Cliquez sur "Save" pour créer le produit

## 5. Gestion des droits d'accès

Pour configurer les permissions de l'API publique:

1. Allez dans "Settings" > "Roles & Permissions"
2. Sélectionnez le rôle "Public"
3. Pour la collection "products", activez les permissions de lecture (Read)
4. Sauvegardez les changements

## 6. Accéder à l'API depuis votre site

Votre site est déjà configuré pour utiliser l'API Directus via les endpoints personnalisés dans `/server/api/boutique/`.

Si vous souhaitez tester directement l'API Directus, vous pouvez accéder à:
- `http://localhost:8055/items/products` (si installation locale)
- `https://votre-projet.directus.app/items/products` (si Directus Cloud)

## Ressources supplémentaires

- [Documentation officielle de Directus](https://docs.directus.io/)
- [Guide de l'API REST](https://docs.directus.io/reference/items.html)
- [SDK JavaScript](https://docs.directus.io/reference/sdk.html) 