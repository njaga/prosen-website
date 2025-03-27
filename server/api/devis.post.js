import sgMail from '@sendgrid/mail';

export default defineEventHandler(async (event) => {
  // Vérifier que la clé API existe
  if (!process.env.SENDGRID_API_KEY) {
    console.error('La clé API SendGrid n\'est pas configurée');
    return {
      success: false,
      message: 'Erreur de configuration du serveur d\'emails'
    };
  }

  try {
    const body = await readBody(event);
    
    // Validation des données
    if (!body.firstName || !body.lastName || !body.email || !body.phone || !body.service || !body.siteType || !body.surface || !body.schedule || !body.details) {
      return {
        success: false,
        message: 'Veuillez remplir tous les champs obligatoires'
      };
    }

    // Configuration de SendGrid avec la clé API
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    // Récupération des libellés des services et types de site
    const serviceLabel = getServiceLabel(body.service);
    const siteTypeLabel = getSiteTypeLabel(body.siteType);
    const scheduleLabel = getScheduleLabel(body.schedule);
    
    const msg = {
      to: 'contact@prosen.sn',
      from: 'contact@prosen.sn',
      subject: `Nouvelle demande de devis de ${body.firstName} ${body.lastName}`,
      text: `
        Nom: ${body.firstName} ${body.lastName}
        Email: ${body.email}
        Téléphone: ${body.phone}
        Entreprise: ${body.company || 'Non spécifiée'}
        Service: ${serviceLabel}
        Type de site: ${siteTypeLabel}
        Surface: ${body.surface} m²
        Horaires: ${scheduleLabel}
        
        Détails:
        ${body.details}
      `,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Nouvelle demande de devis</title>
          </head>
          <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f5f5f5;">
            <div style="max-width: 600px; margin: 0 auto; background-color: white; border-radius: 10px; overflow: hidden; margin-top: 20px; margin-bottom: 20px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
              <!-- En-tête -->
              <div style="background-color: #111829; padding: 30px; text-align: center;">
                <h1 style="color: white; margin: 0; font-size: 24px;">Nouvelle Demande de Devis</h1>
                <div style="width: 50px; height: 3px; background-color: #23c55e; margin: 15px auto;"></div>
              </div>

              <!-- Contenu -->
              <div style="padding: 30px;">
                <!-- Informations personnelles -->
                <div style="background-color: #f8f9fa; border-radius: 8px; padding: 20px; margin-bottom: 25px;">
                  <h2 style="color: #111829; font-size: 18px; margin-top: 0; margin-bottom: 15px; border-left: 4px solid #23c55e; padding-left: 10px;">Informations personnelles</h2>
                  
                  <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                      <td style="padding: 8px 0; color: #111829; font-weight: 600; width: 40%;">Nom complet:</td>
                      <td style="padding: 8px 0; color: #4a5568;">${body.firstName} ${body.lastName}</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0; color: #111829; font-weight: 600;">Email:</td>
                      <td style="padding: 8px 0; color: #4a5568;">${body.email}</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0; color: #111829; font-weight: 600;">Téléphone:</td>
                      <td style="padding: 8px 0; color: #4a5568;">${body.phone}</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0; color: #111829; font-weight: 600;">Entreprise:</td>
                      <td style="padding: 8px 0; color: #4a5568;">${body.company || 'Non spécifiée'}</td>
                    </tr>
                  </table>
                </div>

                <!-- Détails du service -->
                <div style="background-color: #f8f9fa; border-radius: 8px; padding: 20px; margin-bottom: 25px;">
                  <h2 style="color: #111829; font-size: 18px; margin-top: 0; margin-bottom: 15px; border-left: 4px solid #23c55e; padding-left: 10px;">Détails du service</h2>
                  
                  <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                      <td style="padding: 8px 0; color: #111829; font-weight: 600; width: 40%;">Service demandé:</td>
                      <td style="padding: 8px 0; color: #4a5568;">${serviceLabel}</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0; color: #111829; font-weight: 600;">Type de site:</td>
                      <td style="padding: 8px 0; color: #4a5568;">${siteTypeLabel}</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0; color: #111829; font-weight: 600;">Surface:</td>
                      <td style="padding: 8px 0; color: #4a5568;">${body.surface} m²</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0; color: #111829; font-weight: 600;">Horaires:</td>
                      <td style="padding: 8px 0; color: #4a5568;">${scheduleLabel}</td>
                    </tr>
                  </table>
                </div>

                <!-- Description détaillée -->
                <div style="background-color: #f8f9fa; border-radius: 8px; padding: 20px;">
                  <h2 style="color: #111829; font-size: 18px; margin-top: 0; margin-bottom: 15px; border-left: 4px solid #23c55e; padding-left: 10px;">Description détaillée</h2>
                  <div style="color: #4a5568; line-height: 1.6; background-color: white; padding: 15px; border-radius: 6px; border: 1px solid #e2e8f0;">
                    ${body.details.replace(/\n/g, '<br>')}
                  </div>
                </div>
              </div>

              <!-- Pied de page -->
              <div style="background-color: #23c55e; color: white; text-align: center; padding: 15px; font-size: 14px;">
                <p style="margin: 0;">© ${new Date().getFullYear()} PROSEN - Tous droits réservés</p>
                <p style="margin: 5px 0 0 0;">Immeuble Ellipse, rue 1 X D Pav Usina, Point E, Dakar - Sénégal</p>
              </div>
            </div>
          </body>
        </html>
      `,
    };

    // Envoi de l'email
    try {
      await sgMail.send(msg);
      return {
        success: true,
        message: 'Votre demande de devis a été envoyée avec succès'
      };
    } catch (sendError) {
      console.error('Erreur SendGrid:', sendError);
      if (sendError.response) {
        console.error(sendError.response.body);
      }
      return {
        success: false,
        message: 'Erreur lors de l\'envoi de l\'email'
      };
    }

  } catch (error) {
    console.error('Erreur:', error);
    return {
      success: false,
      message: 'Une erreur est survenue lors de l\'envoi de la demande'
    };
  }
});

// Fonctions utilitaires pour récupérer les libellés
function getServiceLabel(value) {
  const services = {
    'surveillance': 'Surveillance & Gardiennage',
    'electronique': 'Sécurité Électronique',
    'protection': 'Protection Rapprochée',
    'nettoyage': 'Nettoyage Professionnel',
    'equipements': 'Équipements de Protection',
    'incendie': 'Sécurité Incendie',
    'conseil': 'Conseil en Sécurité',
    'transport': 'Transport de Valeurs'
  };
  return services[value] || value;
}

function getSiteTypeLabel(value) {
  const types = {
    'bureau': 'Bureaux',
    'commerce': 'Commerce',
    'industrie': 'Site industriel',
    'residence': 'Résidence',
    'chantier': 'Chantier',
    'autre': 'Autre'
  };
  return types[value] || value;
}

function getScheduleLabel(value) {
  const schedules = {
    '24-7': '24h/24 - 7j/7',
    'jour': 'Horaires de jour (8h-20h)',
    'nuit': 'Horaires de nuit (20h-8h)',
    'personnalise': 'Horaires personnalisés'
  };
  return schedules[value] || value;
} 