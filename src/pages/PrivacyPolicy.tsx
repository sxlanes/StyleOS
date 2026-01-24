import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-primary selection:text-black">
            <div className="max-w-3xl mx-auto px-6 py-20">
                <Link to="/" className="inline-flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest mb-12 hover:underline">
                    <ArrowLeft size={14} /> Retour à l'accueil
                </Link>

                <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-12">Politique de Confidentialité</h1>

                <div className="space-y-8 text-gray-400 text-sm leading-relaxed">
                    <section>
                        <h2 className="text-white text-lg font-bold uppercase tracking-wider mb-4">1. Collecte des données</h2>
                        <p>
                            Nous collectons les informations suivantes lors de votre inscription ou utilisation de nos services :
                            Nom, Prénom, Adresse email, Informations sur votre salon de coiffure.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-white text-lg font-bold uppercase tracking-wider mb-4">2. Utilisation des données</h2>
                        <p>
                            Vos données sont utilisées pour :
                        </p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>Fournir et gérer nos services StyleOS.</li>
                            <li>Configurer votre assistant Sarah IA.</li>
                            <li>Vous contacter concernant votre compte ou nos offres.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-white text-lg font-bold uppercase tracking-wider mb-4">3. Partage des données</h2>
                        <p>
                            Nous ne vendons pas vos données personnelles. Elles peuvent être partagées avec nos sous-traitants (hébergement, paiement) uniquement dans le but de fournir le service.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-white text-lg font-bold uppercase tracking-wider mb-4">4. Vos Droits (RGPD)</h2>
                        <p>
                            Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données.
                            Pour exercer ce droit, contactez-nous à : bordeaux@styleos.fr.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
