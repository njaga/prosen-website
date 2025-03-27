import sgMail from '@sendgrid/mail';

export default defineEventHandler(async (event) => {
  // Vérifier que la clé API existe
  if (!process.env.SENDGRID_API_KEY) {
    console.error('La clé API SendGrid n\'est pas configurée');
    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        message: 'Erreur de configuration du serveur d\'emails'
      })
    };
  }

  try {
    const body = await readBody(event);
    
    // Validation des données
    if (!body.name || !body.email || !body.message) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          success: false,
          message: 'Veuillez remplir tous les champs obligatoires'
        })
      };
    }

    // Configuration de SendGrid avec la clé API
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    // Construction du message
    const serviceText = body.service ? `Service demandé: ${body.service}` : 'Aucun service spécifié';
    const phoneText = body.phone ? `Téléphone: ${body.phone}` : 'Aucun téléphone fourni';
    
    const msg = {
      to: 'contact@prosen.sn',
      from: 'contact@prosen.sn',
      subject: `Nouveau message de contact de ${body.name}`,
      text: `
        Nom: ${body.name}
        Email: ${body.email}
        ${phoneText}
        ${serviceText}
        
        Message:
        ${body.message}
      `,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Nouveau message de contact</title>
          </head>
          <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f5f5f5;">
            <div style="max-width: 600px; margin: 0 auto; background-color: white; border-radius: 10px; overflow: hidden; margin-top: 20px; margin-bottom: 20px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
              <!-- En-tête -->
              <div style="background-color: #111829; padding: 30px; text-align: center;">
                <h1 style="color: white; margin: 0; font-size: 24px;">Nouveau Message de Contact</h1>
                <div style="width: 50px; height: 3px; background-color: #23c55e; margin: 15px auto;"></div>
              </div>

              <!-- Contenu -->
              <div style="padding: 30px;">
                <!-- Informations de l'expéditeur -->
                <div style="background-color: #f8f9fa; border-radius: 8px; padding: 20px; margin-bottom: 25px;">
                  <h2 style="color: #111829; font-size: 18px; margin-top: 0; margin-bottom: 15px;">Informations de l'expéditeur</h2>
                  <p style="margin: 8px 0; color: #4a5568;">
                    <strong style="color: #111829;">Nom:</strong> 
                    <span style="margin-left: 10px;">${body.name}</span>
                  </p>
                  <p style="margin: 8px 0; color: #4a5568;">
                    <strong style="color: #111829;">Email:</strong> 
                    <span style="margin-left: 10px;">${body.email}</span>
                  </p>
                  <p style="margin: 8px 0; color: #4a5568;">
                    <strong style="color: #111829;">${phoneText}</strong>
                  </p>
                  <p style="margin: 8px 0; color: #4a5568;">
                    <strong style="color: #111829;">${serviceText}</strong>
                  </p>
                </div>

                <!-- Message -->
                <div style="background-color: #f8f9fa; border-radius: 8px; padding: 20px;">
                  <h2 style="color: #111829; font-size: 18px; margin-top: 0; margin-bottom: 15px;">Message</h2>
                  <div style="color: #4a5568; line-height: 1.6;">
                    ${body.message.replace(/\n/g, '<br>')}
                  </div>
                </div>
              </div>

              <!-- Pied de page -->
              <div style="background-color: #23c55e; color: white; text-align: center; padding: 15px; font-size: 14px;">
                <p style="margin: 0;">© ${new Date().getFullYear()} PROSEN - Tous droits réservés</p>
              </div>
            </div>
          </body>
        </html>
      `,
    };

    // Envoi de l'email avec gestion d'erreur plus détaillée
    try {
      await sgMail.send(msg);
      return {
        success: true,
        message: 'Votre message a été envoyé avec succès'
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
      message: 'Une erreur est survenue lors de l\'envoi du message'
    };
  }
});