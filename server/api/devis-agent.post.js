import sgMail from '@sendgrid/mail';
import { defineEventHandler } from 'h3';

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
    if (!body.fullName || !body.email || !body.phone || !body.siteType || !body.agentCount || !body.serviceType) {
      return {
        success: false,
        message: 'Veuillez remplir tous les champs obligatoires'
      };
    }

    // Configuration de SendGrid avec la clé API
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    // Récupération des libellés
    const siteTypeLabel = getSiteTypeLabel(body.siteType);
    const serviceTypeLabel = getServiceTypeLabel(body.serviceType);
    const skillsLabels = body.skills.map(skill => getSkillLabel(skill)).join(', ');
    
    // Construction du message pour PROSEN
    const msg = {
      to: 'contact@prosen.sn',
      from: 'contact@prosen.sn',
      subject: `Nouvelle demande de devis - Agent de sécurité - ${body.fullName}`,
      text: `
        Nom: ${body.fullName}
        Email: ${body.email}
        Téléphone: ${body.phone}
        Entreprise: ${body.company || 'Non spécifiée'}
        Type de site: ${siteTypeLabel}
        Nombre d'agents: ${body.agentCount}
        Type de service: ${serviceTypeLabel}
        Compétences requises: ${skillsLabels || 'Aucune spécifiée'}
        
        Informations complémentaires:
        ${body.additionalInfo || 'Aucune information complémentaire'}
      `,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Nouvelle demande de devis - Agent de sécurité</title>
          </head>
          <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f5f5f5;">
            <div style="max-width: 600px; margin: 0 auto; background-color: white; border-radius: 10px; overflow: hidden; margin-top: 20px; margin-bottom: 20px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
              <!-- En-tête -->
              <div style="background-color: #111829; padding: 30px; text-align: center;">
                <h1 style="color: white; margin: 0; font-size: 24px;">Nouvelle Demande de Devis - Agent de sécurité</h1>
                <div style="width: 50px; height: 3px; background-color: #23c55e; margin: 15px auto;"></div>
              </div>

              <!-- Contenu -->
              <div style="padding: 30px;">
                <!-- Informations personnelles -->
                <div style="background-color: #f8f9fa; border-radius: 8px; padding: 20px; margin-bottom: 25px;">
                  <h2 style="color: #111829; font-size: 18px; margin-top: 0; margin-bottom: 15px; border-left: 4px solid #23c55e; padding-left: 10px;">Informations de contact</h2>
                  
                  <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                      <td style="padding: 8px 0; color: #111829; font-weight: 600; width: 40%;">Nom complet:</td>
                      <td style="padding: 8px 0; color: #4a5568;">${body.fullName}</td>
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
                  <h2 style="color: #111829; font-size: 18px; margin-top: 0; margin-bottom: 15px; border-left: 4px solid #23c55e; padding-left: 10px;">Besoins en sécurité</h2>
                  
                  <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                      <td style="padding: 8px 0; color: #111829; font-weight: 600; width: 40%;">Type de site:</td>
                      <td style="padding: 8px 0; color: #4a5568;">${siteTypeLabel}</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0; color: #111829; font-weight: 600;">Nombre d'agents:</td>
                      <td style="padding: 8px 0; color: #4a5568;">${body.agentCount}</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0; color: #111829; font-weight: 600;">Type de service:</td>
                      <td style="padding: 8px 0; color: #4a5568;">${serviceTypeLabel}</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0; color: #111829; font-weight: 600;">Compétences requises:</td>
                      <td style="padding: 8px 0; color: #4a5568;">${skillsLabels || 'Aucune spécifiée'}</td>
                    </tr>
                  </table>
                </div>

                <!-- Informations complémentaires -->
                <div style="background-color: #f8f9fa; border-radius: 8px; padding: 20px;">
                  <h2 style="color: #111829; font-size: 18px; margin-top: 0; margin-bottom: 15px; border-left: 4px solid #23c55e; padding-left: 10px;">Informations complémentaires</h2>
                  <div style="color: #4a5568; line-height: 1.6; background-color: white; padding: 15px; border-radius: 6px; border: 1px solid #e2e8f0;">
                    ${body.additionalInfo ? body.additionalInfo.replace(/\n/g, '<br>') : 'Aucune information complémentaire'}
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
      `
    };

    // Construction de l'accusé de réception pour le client
    const confirmationMsg = {
      to: body.email,
      from: 'contact@prosen.sn',
      subject: `Confirmation de votre demande de devis - PROSEN`,
      text: `
        Bonjour ${body.fullName},
        
        Nous vous remercions pour votre demande de devis concernant nos services d'agents de sécurité.
        
        Nous avons bien reçu votre demande et notre équipe commerciale l'examine actuellement. Nous vous contacterons dans les plus brefs délais pour vous proposer une offre adaptée à vos besoins.
        
        Voici un récapitulatif de votre demande :
        - Type de site : ${siteTypeLabel}
        - Nombre d'agents : ${body.agentCount}
        - Type de service : ${serviceTypeLabel}
        ${skillsLabels ? `- Compétences requises : ${skillsLabels}` : ''}
        
        N'hésitez pas à nous contacter si vous avez des questions supplémentaires.
        
        Cordialement,
        L'équipe commerciale PROSEN
      `,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Confirmation de votre demande de devis</title>
          </head>
          <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f5f5f5;">
            <div style="max-width: 600px; margin: 0 auto; background-color: white; border-radius: 10px; overflow: hidden; margin-top: 20px; margin-bottom: 20px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
              <!-- En-tête -->
              <div style="background-color: #111829; padding: 30px; text-align: center;">
                <h1 style="color: white; margin: 0; font-size: 24px;">Confirmation de Demande de Devis</h1>
                <div style="width: 50px; height: 3px; background-color: #23c55e; margin: 15px auto;"></div>
              </div>

              <!-- Contenu -->
              <div style="padding: 30px;">
                <div style="margin-bottom: 25px;">
                  <p style="color: #4a5568; font-size: 16px; margin-bottom: 15px;">Bonjour <strong>${body.fullName}</strong>,</p>
                  <p style="color: #4a5568; font-size: 16px; margin-bottom: 15px;">Nous vous remercions pour votre demande de devis concernant nos services d'agents de sécurité.</p>
                  <p style="color: #4a5568; font-size: 16px; margin-bottom: 15px;">Nous avons bien reçu votre demande et notre équipe commerciale l'examine actuellement. Nous vous contacterons dans les plus brefs délais pour vous proposer une offre adaptée à vos besoins.</p>
                </div>

                <!-- Résumé de la demande -->
                <div style="background-color: #f8f9fa; border-radius: 8px; padding: 20px; margin-bottom: 25px;">
                  <h2 style="color: #111829; font-size: 18px; margin-top: 0; margin-bottom: 15px; border-left: 4px solid #23c55e; padding-left: 10px;">Récapitulatif de votre demande</h2>
                  
                  <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                      <td style="padding: 8px 0; color: #111829; font-weight: 600; width: 40%;">Type de site:</td>
                      <td style="padding: 8px 0; color: #4a5568;">${siteTypeLabel}</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0; color: #111829; font-weight: 600;">Nombre d'agents:</td>
                      <td style="padding: 8px 0; color: #4a5568;">${body.agentCount}</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0; color: #111829; font-weight: 600;">Type de service:</td>
                      <td style="padding: 8px 0; color: #4a5568;">${serviceTypeLabel}</td>
                    </tr>
                    ${skillsLabels ? `
                    <tr>
                      <td style="padding: 8px 0; color: #111829; font-weight: 600;">Compétences requises:</td>
                      <td style="padding: 8px 0; color: #4a5568;">${skillsLabels}</td>
                    </tr>` : ''}
                  </table>
                </div>

                <div style="margin-bottom: 25px;">
                  <p style="color: #4a5568; font-size: 16px; margin-bottom: 15px;">N'hésitez pas à nous contacter si vous avez des questions supplémentaires.</p>
                  <p style="color: #4a5568; font-size: 16px; margin-bottom: 15px;">Cordialement,</p>
                  <p style="color: #111829; font-weight: 600; font-size: 18px;">L'équipe commerciale PROSEN</p>
                </div>

                <!-- Coordonnées -->
                <div style="background-color: #f8f9fa; border-radius: 8px; padding: 15px; text-align: center;">
                  <p style="margin: 5px 0; color: #4a5568; font-size: 14px;">
                    <strong>Téléphone:</strong> +221 33 843 46 33
                  </p>
                  <p style="margin: 5px 0; color: #4a5568; font-size: 14px;">
                    <strong>Email:</strong> contact@prosen.sn
                  </p>
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
      `
    };

    // Envoi des emails
    try {
      // Envoi de l'email à PROSEN
      await sgMail.send(msg);
      
      // Envoi de l'accusé de réception au client
      await sgMail.send(confirmationMsg);
      
      return {
        success: true,
        message: 'Votre demande de devis a été envoyée avec succès. Un email de confirmation vous a été envoyé.'
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
function getSiteTypeLabel(value) {
  const types = {
    'commercial': 'Site commercial',
    'industrial': 'Site industriel',
    'residential': 'Résidentiel',
    'office': 'Bureaux',
    'event': 'Événementiel',
    'other': 'Autre'
  };
  return types[value] || value;
}

function getServiceTypeLabel(value) {
  const types = {
    '24_7': 'Surveillance 24/7',
    'day': 'Surveillance de jour uniquement',
    'night': 'Surveillance de nuit uniquement',
    'event': 'Événementiel'
  };
  return types[value] || value;
}

function getSkillLabel(value) {
  const skills = {
    'ssiap': 'SSIAP',
    'firstAid': 'Premiers secours',
    'cyno': 'Maître-chien',
    'weapons': 'Port d\'arme'
  };
  return skills[value] || value;
} 