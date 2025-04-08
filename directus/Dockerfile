FROM directus/directus:11.5.1

ENV SECRET=prosen-directus-secret-key
ENV ADMIN_EMAIL=admin@example.com
ENV ADMIN_PASSWORD=directus2025
# Configuration pour PostgreSQL - les valeurs exactes seront définies via les variables d'environnement Render
ENV DB_CLIENT=pg
ENV WEBSOCKETS_ENABLED=true

# Créer les répertoires nécessaires
RUN mkdir -p /directus/uploads /directus/extensions

# Copier les fichiers de votre projet
COPY ./uploads /directus/uploads
COPY ./extensions /directus/extensions

# Exposer le port 8055
EXPOSE 8055

# Commande par défaut pour démarrer Directus
CMD ["npx", "directus", "start"] 