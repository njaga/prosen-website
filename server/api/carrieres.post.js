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
    
    // Construction du message
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

    // Envoi de l'email
    try {
      await sgMail.send(msg);
      
      // Suppression du fichier temporaire
      if (cvPath && fs.existsSync(cvPath)) {
        fs.unlinkSync(cvPath);
      }
      
      return {
        success: true,
        message: 'Votre candidature a été envoyée avec succès'
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