import sgMail from '@sendgrid/mail';
import { createError } from 'h3';
import { randomUUID } from 'crypto';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Fonction pour créer le dossier temporaire s'il n'existe pas
const ensureTempDir = () => {
  const tempDir = path.join(__dirname, '../../.tmp');
  if (!fs.existsSync(tempDir)) {
    fs.mkdirSync(tempDir, { recursive: true });
  }
  return tempDir;
};

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
    // Récupération des données du formulaire multipart
    const formData = await readMultipartFormData(event);
    
    if (!formData) {
      return {
        success: false,
        message: 'Aucune donnée reçue'
      };
    }

    // Extraction des champs du formulaire
    const fields = {};
    let cvFile = null;

    for (const part of formData) {
      if (part.name === 'cv') {
        cvFile = part;
      } else if (part.name) {
        fields[part.name] = new TextDecoder().decode(part.data);
      }
    }

    // Validation des données
    if (!fields.firstName || !fields.lastName || !fields.email || !fields.phone || !fields.position || !fields.experience || !fields.message) {
      return {
        success: false,
        message: 'Veuillez remplir tous les champs obligatoires'
      };
    }

    // Traitement du fichier CV
    let cvPath = null;
    let cvFilename = null;
    
    if (cvFile && cvFile.data.length > 0) {
      // Vérification de la taille du fichier (max 5MB)
      if (cvFile.data.length > 5 * 1024 * 1024) {
        return {
          success: false,
          message: 'Le fichier est trop volumineux. Veuillez choisir un fichier de moins de 5MB.'
        };
      }

      // Vérification du type de fichier
      const filename = cvFile.filename || 'cv.pdf';
      const fileExt = path.extname(filename).toLowerCase();
      
      if (!['.pdf', '.doc', '.docx'].includes(fileExt)) {
        return {
          success: false,
          message: 'Format de fichier non supporté. Veuillez utiliser PDF ou Word.'
        };
      }

      // Sauvegarde temporaire du fichier
      const tempDir = ensureTempDir();
      cvFilename = `${randomUUID()}${fileExt}`;
      cvPath = path.join(tempDir, cvFilename);
      
      fs.writeFileSync(cvPath, cvFile.data);
    } else {
      return {
        success: false,
        message: 'Veuillez joindre votre CV'
      };
    }

    // Configuration de SendGrid avec la clé API
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    // Récupération du libellé du poste
    const positionLabel = getPositionLabel(fields.position);
    const experienceLabel = getExperienceLabel(fields.experience);
    
    // Construction du message pour PROSEN
    const msg = {
      to: 'contact@prosen.sn',
      from: 'contact@prosen.sn',
      subject: `Nouvelle candidature de ${fields.firstName} ${fields.lastName} - ${positionLabel}`,
      text: `
        Nom: ${fields.firstName} ${fields.lastName}
        Email: ${fields.email}
        Téléphone: ${fields.phone}
        Poste recherché: ${positionLabel}
        Expérience: ${experienceLabel}
        
        Message / Lettre de motivation:
        ${fields.message}
      `,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Nouvelle candidature</title>
          </head>
          <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f5f5f5;">
            <div style="max-width: 600px; margin: 0 auto; background-color: white; border-radius: 10px; overflow: hidden; margin-top: 20px; margin-bottom: 20px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
              <!-- En-tête -->
              <div style="background-color: #111829; padding: 30px; text-align: center;">
                <h1 style="color: white; margin: 0; font-size: 24px;">Nouvelle Candidature</h1>
                <div style="width: 50px; height: 3px; background-color: #23c55e; margin: 15px auto;"></div>
              </div>

              <!-- Contenu -->
              <div style="padding: 30px;">
                <!-- Informations du candidat -->
                <div style="background-color: #f8f9fa; border-radius: 8px; padding: 20px; margin-bottom: 25px;">
                  <h2 style="color: #111829; font-size: 18px; margin-top: 0; margin-bottom: 15px; border-left: 4px solid #23c55e; padding-left: 10px;">Informations du candidat</h2>
                  
                  <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                      <td style="padding: 8px 0; color: #111829; font-weight: 600; width: 40%;">Nom complet:</td>
                      <td style="padding: 8px 0; color: #4a5568;">${fields.firstName} ${fields.lastName}</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0; color: #111829; font-weight: 600;">Email:</td>
                      <td style="padding: 8px 0; color: #4a5568;">${fields.email}</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0; color: #111829; font-weight: 600;">Téléphone:</td>
                      <td style="padding: 8px 0; color: #4a5568;">${fields.phone}</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0; color: #111829; font-weight: 600;">Poste recherché:</td>
                      <td style="padding: 8px 0; color: #4a5568;">${positionLabel}</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0; color: #111829; font-weight: 600;">Expérience:</td>
                      <td style="padding: 8px 0; color: #4a5568;">${experienceLabel}</td>
                    </tr>
                  </table>
                </div>

                <!-- Lettre de motivation -->
                <div style="background-color: #f8f9fa; border-radius: 8px; padding: 20px;">
                  <h2 style="color: #111829; font-size: 18px; margin-top: 0; margin-bottom: 15px; border-left: 4px solid #23c55e; padding-left: 10px;">Lettre de motivation</h2>
                  <div style="color: #4a5568; line-height: 1.6; background-color: white; padding: 15px; border-radius: 6px; border: 1px solid #e2e8f0;">
                    ${fields.message.replace(/\n/g, '<br>')}
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
      attachments: [
        {
          content: fs.readFileSync(cvPath).toString('base64'),
          filename: cvFile.filename || `CV_${fields.firstName}_${fields.lastName}${path.extname(cvPath)}`,
          type: getContentType(path.extname(cvPath)),
          disposition: 'attachment'
        }
      ]
    };

    // Construction de l'accusé de réception pour le candidat
    const confirmationMsg = {
      to: fields.email,
      from: 'contact@prosen.sn',
      subject: `Confirmation de votre candidature chez PROSEN`,
      text: `
        Bonjour ${fields.firstName} ${fields.lastName},
        
        Nous vous remercions d'avoir soumis votre candidature pour le poste de ${positionLabel} chez PROSEN.
        
        Nous avons bien reçu votre CV ainsi que votre lettre de motivation. Notre équipe de recrutement va examiner votre candidature dans les plus brefs délais.
        
        Si votre profil correspond à nos besoins, nous vous contacterons pour un entretien.
        
        Cordialement,
        L'équipe de recrutement PROSEN
      `,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Confirmation de candidature</title>
          </head>
          <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f5f5f5;">
            <div style="max-width: 600px; margin: 0 auto; background-color: white; border-radius: 10px; overflow: hidden; margin-top: 20px; margin-bottom: 20px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
              <!-- En-tête -->
              <div style="background-color: #111829; padding: 30px; text-align: center;">
                <h1 style="color: white; margin: 0; font-size: 24px;">Confirmation de Candidature</h1>
                <div style="width: 50px; height: 3px; background-color: #23c55e; margin: 15px auto;"></div>
              </div>

              <!-- Contenu -->
              <div style="padding: 30px;">
                <div style="margin-bottom: 25px;">
                  <p style="color: #4a5568; font-size: 16px; margin-bottom: 15px;">Bonjour <strong>${fields.firstName} ${fields.lastName}</strong>,</p>
                  <p style="color: #4a5568; font-size: 16px; margin-bottom: 15px;">Nous vous remercions d'avoir soumis votre candidature pour le poste de <strong>${positionLabel}</strong> chez PROSEN.</p>
                  <p style="color: #4a5568; font-size: 16px; margin-bottom: 15px;">Nous avons bien reçu votre CV ainsi que votre lettre de motivation. Notre équipe de recrutement va examiner votre candidature dans les plus brefs délais.</p>
                  <p style="color: #4a5568; font-size: 16px; margin-bottom: 15px;">Si votre profil correspond à nos besoins, nous vous contacterons pour un entretien.</p>
                </div>

                <!-- Résumé de la candidature -->
                <div style="background-color: #f8f9fa; border-radius: 8px; padding: 20px; margin-bottom: 25px;">
                  <h2 style="color: #111829; font-size: 18px; margin-top: 0; margin-bottom: 15px; border-left: 4px solid #23c55e; padding-left: 10px;">Récapitulatif de votre candidature</h2>
                  
                  <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                      <td style="padding: 8px 0; color: #111829; font-weight: 600; width: 40%;">Nom complet:</td>
                      <td style="padding: 8px 0; color: #4a5568;">${fields.firstName} ${fields.lastName}</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0; color: #111829; font-weight: 600;">Email:</td>
                      <td style="padding: 8px 0; color: #4a5568;">${fields.email}</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0; color: #111829; font-weight: 600;">Téléphone:</td>
                      <td style="padding: 8px 0; color: #4a5568;">${fields.phone}</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0; color: #111829; font-weight: 600;">Poste recherché:</td>
                      <td style="padding: 8px 0; color: #4a5568;">${positionLabel}</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0; color: #111829; font-weight: 600;">Expérience:</td>
                      <td style="padding: 8px 0; color: #4a5568;">${experienceLabel}</td>
                    </tr>
                  </table>
                </div>

                <div style="text-align: center; margin-top: 30px;">
                  <p style="color: #4a5568; font-size: 16px; margin-bottom: 15px;">Cordialement,</p>
                  <p style="color: #111829; font-weight: 600; font-size: 18px;">L'équipe de recrutement PROSEN</p>
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
      
      // Envoi de l'accusé de réception au candidat
      await sgMail.send(confirmationMsg);
      
      // Suppression du fichier temporaire
      if (cvPath && fs.existsSync(cvPath)) {
        fs.unlinkSync(cvPath);
      }
      
      return {
        success: true,
        message: 'Votre candidature a été envoyée avec succès. Un email de confirmation vous a été envoyé.'
      };
    } catch (sendError) {
      console.error('Erreur SendGrid:', sendError);
      if (sendError.response) {
        console.error(sendError.response.body);
      }
      
      // Suppression du fichier temporaire en cas d'erreur
      if (cvPath && fs.existsSync(cvPath)) {
        fs.unlinkSync(cvPath);
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
      message: 'Une erreur est survenue lors de l\'envoi de la candidature'
    };
  }
});

// Fonctions utilitaires
function getPositionLabel(value) {
  const positions = {
    'agent': 'Agent de sécurité',
    'technicien': 'Technicien de surface',
    'superviseur': 'Superviseur',
    'administratif': 'Poste administratif',
    'technique': 'Technicien sécurité électronique',
    'autre': 'Autre poste'
  };
  return positions[value] || value;
}

function getExperienceLabel(value) {
  const experiences = {
    'debutant': 'Débutant',
    '1-2': '1-2 ans',
    '3-5': '3-5 ans',
    '5+': 'Plus de 5 ans'
  };
  return experiences[value] || value;
}

function getContentType(extension) {
  const types = {
    '.pdf': 'application/pdf',
    '.doc': 'application/msword',
    '.docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  };
  return types[extension.toLowerCase()] || 'application/octet-stream';
} 