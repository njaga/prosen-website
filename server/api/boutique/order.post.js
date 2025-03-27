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
    if (!body.product || !body.name || !body.email || !body.phone || !body.quantity) {
      return {
        success: false,
        message: 'Veuillez remplir tous les champs obligatoires'
      };
    }

    // Configuration de SendGrid avec la clé API
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    try {
      // Création du message email sans référence aux prix
      const msg = {
        to: 'contact@prosen.sn', // Adresse email de réception
        from: 'contact@prosen.sn', // Adresse email d'expédition
        subject: `Nouvelle demande de devis pour ${body.product.name}`,
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; }
                .header { background-color: #23c55e; color: white; padding: 20px; text-align: center; }
                .content { padding: 20px; background-color: #f9f9f9; }
                .footer { text-align: center; margin-top: 20px; font-size: 12px; color: #888; }
                table { width: 100%; border-collapse: collapse; }
                td { padding: 8px 0; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h1>Nouvelle demande de devis</h1>
                </div>
                <div class="content">
                  <p>Une nouvelle demande de devis a été soumise pour le produit suivant :</p>
                  
                  <div style="background-color: #ffffff; border-radius: 8px; padding: 15px; margin: 20px 0; border: 1px solid #e2e8f0;">
                    <h2 style="color: #23c55e; margin-top: 0;">${body.product.name}</h2>
                    <table>
                      <tr>
                        <td style="padding: 8px 0; color: #111829; font-weight: 600;">Référence:</td>
                        <td style="padding: 8px 0; color: #4a5568;">#${body.product.id}</td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; color: #111829; font-weight: 600;">Quantité:</td>
                        <td style="padding: 8px 0; color: #4a5568;">${body.quantity}</td>
                      </tr>
                    </table>
                  </div>
                  
                  <div style="background-color: #ffffff; border-radius: 8px; padding: 15px; margin: 20px 0; border: 1px solid #e2e8f0;">
                    <h2 style="color: #23c55e; margin-top: 0;">Coordonnées du client</h2>
                    <table>
                      <tr>
                        <td style="padding: 8px 0; color: #111829; font-weight: 600;">Nom:</td>
                        <td style="padding: 8px 0; color: #4a5568;">${body.name}</td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; color: #111829; font-weight: 600;">Email:</td>
                        <td style="padding: 8px 0; color: #4a5568;">${body.email}</td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; color: #111829; font-weight: 600;">Téléphone:</td>
                        <td style="padding: 8px 0; color: #4a5568;">${body.phone}</td>
                      </tr>
                      ${body.company ? `
                      <tr>
                        <td style="padding: 8px 0; color: #111829; font-weight: 600;">Entreprise:</td>
                        <td style="padding: 8px 0; color: #4a5568;">${body.company}</td>
                      </tr>
                      ` : ''}
                    </table>
                  </div>
                  
                  ${body.message ? `
                  <div style="background-color: #ffffff; border-radius: 8px; padding: 15px; margin: 20px 0; border: 1px solid #e2e8f0;">
                    <h2 style="color: #23c55e; margin-top: 0;">Message</h2>
                    <p style="color: #4a5568;">${body.message.replace(/\n/g, '<br>')}</p>
                  </div>
                  ` : ''}
                </div>
                <div class="footer">
                  <p>Ce message a été envoyé depuis le formulaire de demande de devis sur votre site web.</p>
                </div>
              </div>
            </body>
          </html>
        `,
      };
      
      // Email de confirmation pour le client
      const confirmationMsg = {
        to: body.email,
        from: 'contact@prosen.sn',
        subject: 'Confirmation de votre demande de devis',
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Confirmation de demande</title>
            </head>
            <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f5f5f5;">
              <div style="max-width: 600px; margin: 0 auto; background-color: white; border-radius: 10px; overflow: hidden; margin-top: 20px; margin-bottom: 20px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                <!-- En-tête -->
                <div style="background-color: #111829; padding: 30px; text-align: center;">
                  <h1 style="color: white; margin: 0; font-size: 24px;">Confirmation de Demande</h1>
                  <div style="width: 50px; height: 3px; background-color: #23c55e; margin: 15px auto;"></div>
                </div>

                <!-- Contenu -->
                <div style="padding: 30px;">
                  <p style="color: #111829; font-size: 16px; margin-bottom: 20px;">Bonjour ${body.name},</p>
                  
                  <p style="color: #111829; font-size: 16px; margin-bottom: 20px;">
                    Nous avons bien reçu votre demande concernant le produit <strong>"${body.product.name}"</strong> (quantité: ${body.quantity}).
                  </p>
                  
                  <p style="color: #111829; font-size: 16px; margin-bottom: 20px;">
                    Notre équipe commerciale vous contactera dans les plus brefs délais pour vous proposer un devis personnalisé.
                  </p>

                  <!-- Récapitulatif -->
                  <div style="background-color: #f8f9fa; border-radius: 8px; padding: 20px; margin-bottom: 25px;">
                    <h2 style="color: #111829; font-size: 18px; margin-top: 0; margin-bottom: 15px; border-left: 4px solid #23c55e; padding-left: 10px;">Récapitulatif de votre demande</h2>
                    
                    <table style="width: 100%; border-collapse: collapse;">
                      <tr>
                        <td style="padding: 8px 0; color: #111829; font-weight: 600; width: 40%;">Produit:</td>
                        <td style="padding: 8px 0; color: #4a5568;">
                          ${body.product.name}
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; color: #111829; font-weight: 600;">Quantité:</td>
                        <td style="padding: 8px 0; color: #4a5568;">
                          ${body.quantity}
                        </td>
                      </tr>
                    </table>
                  </div>
                  
                  <p style="color: #111829; font-size: 16px; margin-bottom: 20px;">
                    Si vous avez des questions, n'hésitez pas à nous contacter à l'adresse <a href="mailto:contact@prosen.sn" style="color: #23c55e; text-decoration: none;">contact@prosen.sn</a> ou par téléphone au <strong>+221 33 843 46 33</strong>.
                  </p>
                  
                  <p style="color: #111829; font-size: 16px;">
                    Cordialement,<br>
                    L'équipe PROSEN
                  </p>
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
      
      // Enregistrement de la demande dans les logs du serveur
      console.log("Nouvelle demande de devis:", {
        produit: body.product.name,
        id: body.product.id,
        quantité: body.quantity,
        client: {
          nom: body.name,
          email: body.email,
          téléphone: body.phone,
          entreprise: body.company || "Non spécifiée"
        },
        message: body.message || "Aucun message"
      });
      
      // Tentative d'envoi d'email à l'administrateur
      try {
        await sgMail.send(msg);
        console.log("Email envoyé avec succès à l'administrateur");
        
        // Tentative d'envoi de la confirmation au client
        try {
          await sgMail.send(confirmationMsg);
          console.log("Email de confirmation envoyé avec succès au client");
        } catch (confirmError) {
          console.error("Échec de l'envoi de la confirmation au client:", confirmError);
          // On continue même si l'envoi de la confirmation échoue
        }
        
      } catch (emailError) {
        console.error("Échec de l'envoi d'email à l'administrateur:", emailError);
        // On continue malgré l'erreur
      }
      
      return {
        success: true,
        message: 'Votre demande de devis a été reçue. Notre équipe vous contactera prochainement.'
      };
      
    } catch (error) {
      console.error('Erreur SendGrid:', error);
      
      // Solution alternative si l'envoi d'email échoue
      return {
        success: true,
        message: 'Votre demande a été enregistrée. Notre équipe vous contactera prochainement.'
      };
    }
  } catch (error) {
    console.error('Erreur:', error);
    return {
      success: false,
      message: 'Une erreur est survenue lors de l\'envoi de votre demande'
    };
  }
}); 