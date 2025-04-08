FROM directus/directus:11.5.1

ENV SECRET=prosen-directus-secret-key
ENV ADMIN_EMAIL=admin@example.com
ENV ADMIN_PASSWORD=directus2025
# Configuration pour PostgreSQL - les valeurs exactes seront définies via les variables d'environnement Render
ENV DB_CLIENT=pg
ENV WEBSOCKETS_ENABLED=true

# Exposer le port 8055
EXPOSE 8055

# Commande par défaut pour démarrer Directus
CMD ["npx", "directus", "start"] 