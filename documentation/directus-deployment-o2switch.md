# Guide d'installation et déploiement de Directus pour PROSEN

Ce guide vous expliquera comment :
1. Installer Directus localement avec Docker Desktop pour le développement
2. Déployer Directus sur votre hébergement O2Switch pour la production

## Installation locale avec Docker Desktop

### Prérequis
- Windows, macOS ou Linux
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) installé et fonctionnel

### Étapes d'installation locale

1. **Installer Docker Desktop**
   - Téléchargez la version appropriée pour votre système d'exploitation sur le [site officiel de Docker](https://www.docker.com/products/docker-desktop/)
   - Installez l'application en suivant les instructions
   - Démarrez Docker Desktop et vérifiez qu'il fonctionne correctement (l'icône Docker doit apparaître dans votre barre des tâches)

2. **Créer la structure de dossiers**
   - Ouvrez une fenêtre PowerShell ou un terminal
   - Créez un nouveau dossier pour votre projet Directus et naviguez dedans :
   ```powershell
   mkdir directus
   cd directus
   ```
   - Créez les sous-dossiers nécessaires :
   ```powershell
   mkdir database uploads extensions
   ```

3. **Créer le fichier docker-compose.yml**
   - Créez un fichier `docker-compose.yml` dans le dossier `directus`
   - Copiez-y le contenu suivant :
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
               SECRET: "votre-cle-secrete-personnalisee"
               ADMIN_EMAIL: "votre-email@example.com"
               ADMIN_PASSWORD: "votre-mot-de-passe-admin"
               DB_CLIENT: "sqlite3"
               DB_FILENAME: "/directus/database/data.db"
               WEBSOCKETS_ENABLED: "true"
   ```
   - **Remplacez** les valeurs suivantes :
     - `votre-cle-secrete-personnalisee` : une chaîne aléatoire pour sécuriser votre installation
     - `votre-email@example.com` : votre adresse email
     - `votre-mot-de-passe-admin` : un mot de passe sécurisé

4. **Lancer Directus**
   - Dans le terminal, toujours dans le dossier `directus`, exécutez :
   ```powershell
   docker compose up -d
   ```
   - Patientez pendant le téléchargement de l'image et le démarrage du conteneur
   - Vérifiez que le conteneur est bien en cours d'exécution :
   ```powershell
   docker ps
   ```

5. **Accéder à l'interface d'administration**
   - Ouvrez votre navigateur et accédez à http://localhost:8055
   - Connectez-vous avec les identifiants que vous avez spécifiés dans le fichier docker-compose.yml

6. **Configurer les collections et les champs**
   - Allez dans "Settings" > "Data Model"
   - Créez une nouvelle collection nommée "products"
   - Ajoutez tous les champs requis comme détaillé dans la documentation d'installation générale

## Déploiement sur O2Switch

O2Switch est un hébergement partagé qui ne prend pas en charge Docker. Nous allons donc utiliser une installation PHP directe.

### Prérequis
- Un compte FTP pour accéder à votre hébergement O2Switch
- Un client FTP (comme FileZilla)
- Un accès à phpMyAdmin pour créer une base de données

### Étapes de déploiement

1. **Créer une base de données MySQL**
   - Connectez-vous à votre espace client O2Switch
   - Accédez à phpMyAdmin
   - Créez une nouvelle base de données (par exemple `directus`)
   - Créez un utilisateur avec tous les droits sur cette base de données

2. **Télécharger Directus**
   - Téléchargez la dernière version de Directus pour PHP depuis [GitHub](https://github.com/directus/directus/releases)
   - Décompressez l'archive sur votre ordinateur

3. **Préparer la configuration**
   - Dans le dossier décompressé, trouvez le fichier `.env.example`
   - Copiez-le et renommez-le en `.env`
   - Modifiez-le avec vos informations de connexion à la base de données :
   ```
   # Base de données
   DB_CLIENT="mysql"
   DB_HOST="localhost"
   DB_PORT="3306"
   DB_DATABASE="nom_de_votre_base"
   DB_USER="utilisateur_bdd"
   DB_PASSWORD="mot_de_passe_bdd"

   # Informations générales
   PUBLIC_URL="https://votre-domaine.com/directus"
   ADMIN_EMAIL="votre-email@example.com"
   ADMIN_PASSWORD="votre-mot-de-passe-admin"
   
   # Sécurité
   KEY="clé-généré-aléatoirement"
   SECRET="secret-généré-aléatoirement"
   ```

4. **Uploader les fichiers sur O2Switch**
   - Connectez-vous à votre compte FTP
   - Créez un dossier `directus` dans la racine ou dans un sous-dossier de votre hébergement
   - Téléversez tous les fichiers de Directus dans ce dossier

5. **Configurer l'accès web**
   - Assurez-vous que le dossier `directus` a les permissions appropriées (généralement 755)
   - Les fichiers doivent être en 644
   - Si vous utilisez un sous-domaine dédié pour Directus, configurez-le dans votre panneau O2Switch

6. **Installation finale**
   - Ouvrez votre navigateur et accédez à l'URL de votre installation (par exemple https://votre-domaine.com/directus)
   - Suivez les étapes d'installation en fournissant les informations de connexion à la base de données

7. **Configuration des droits d'accès**
   - Comme dans l'installation locale, configurez les permissions pour la collection "products"
   - Activez les permissions de lecture pour le rôle "Public"

## Intégration avec votre site Nuxt déployé

1. **Mise à jour du fichier .env de production**
   - Mettez à jour le fichier `.env` de votre projet Nuxt déployé pour pointer vers votre Directus en production :
   ```
   DIRECTUS_URL=https://votre-domaine.com/directus
   ```

2. **Vérification de la connexion API**
   - Faites un test pour vérifier que votre site peut bien accéder à l'API Directus
   - Consultez les journaux pour détecter d'éventuelles erreurs CORS

## Sauvegarde et migration des données

Pour migrer vos données de développement vers la production :

1. **Exporter les données depuis l'installation Docker**
   - Dans l'interface d'administration Directus, allez dans "Settings" > "Backup"
   - Créez une sauvegarde complète et téléchargez-la

2. **Importer les données dans l'installation O2Switch**
   - Dans l'interface d'administration Directus de production, allez dans "Settings" > "Backup"
   - Importez la sauvegarde que vous avez téléchargée

## Dépannage

### Problèmes courants sur O2Switch

1. **Erreurs CORS**
   - Ajoutez dans le fichier `.htaccess` à la racine de votre installation Directus :
   ```
   <IfModule mod_headers.c>
     Header set Access-Control-Allow-Origin "*"
     Header set Access-Control-Allow-Methods "GET,POST,PUT,DELETE,PATCH,OPTIONS"
     Header set Access-Control-Allow-Headers "Content-Type, Authorization"
   </IfModule>
   ```

2. **Problèmes de permission**
   - Vérifiez que les dossiers `uploads` et `extensions` sont accessibles en écriture (permissions 755)
   - Les fichiers `.env` et `.htaccess` doivent être en 644

3. **Erreurs de base de données**
   - Vérifiez les logs d'erreur dans votre espace d'hébergement
   - Assurez-vous que l'utilisateur de la base de données a tous les privilèges nécessaires

Pour toute aide supplémentaire, n'hésitez pas à consulter le [forum d'assistance O2Switch](https://www.o2switch.fr/forum/) ou la [documentation officielle de Directus](https://docs.directus.io/). 