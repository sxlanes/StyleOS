import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const LegalMentions = () => {
    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-primary selection:text-black">
            <div className="max-w-3xl mx-auto px-6 py-20">
                <Link to="/" className="inline-flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest mb-12 hover:underline">
                    <ArrowLeft size={14} /> Retour à l'accueil
                </Link>

                <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-12">Mentions Légales</h1>

                <div className="space-y-8 text-gray-400 text-sm leading-relaxed">
                    <section>
                        <h2 className="text-white text-lg font-bold uppercase tracking-wider mb-4">1. Éditeur du site</h2>
                        <p>
                            Le site StyleOS est édité par la société <strong>[NOM DE VOTRE SOCIÉTÉ]</strong>,
                            [Forme juridique : ex. SASU] au capital de [Montant] €,
                            immatriculée au Registre du Commerce et des Sociétés de [Ville] sous le numéro [Numéro SIRET].
                        </p>
                        <p className="mt-2">
                            <strong>Siège social :</strong> [Adresse complète]<br />
                            <strong>Email :</strong> bordeaux@styleos.fr<br />
                            <strong>Téléphone :</strong> [Votre Numéro]
                        </p>
                        <p className="mt-2">
                            <strong>Directeur de la publication :</strong> [Votre Nom]
                        </p>
                    </section>

                    <section>
                        <h2 className="text-white text-lg font-bold uppercase tracking-wider mb-4">2. Hébergement</h2>
                        <p>
                            Le site est hébergé par <strong>Vercel Inc.</strong><br />
                            340 S Lemon Ave #4133 Walnut, CA 91789, USA.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-white text-lg font-bold uppercase tracking-wider mb-4">3. Propriété Intellectuelle</h2>
                        <p>
                            L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle.
                            Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default LegalMentions;
