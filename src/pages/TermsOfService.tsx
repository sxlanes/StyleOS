import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const TermsOfService = () => {
    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-primary selection:text-black">
            <div className="max-w-3xl mx-auto px-6 py-20">
                <Link to="/" className="inline-flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest mb-12 hover:underline">
                    <ArrowLeft size={14} /> Retour à l'accueil
                </Link>

                <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-12">Conditions Générales (CGU)</h1>

                <div className="space-y-8 text-gray-400 text-sm leading-relaxed">
                    <section>
                        <h2 className="text-white text-lg font-bold uppercase tracking-wider mb-4">1. Objet</h2>
                        <p>
                            Les présentes conditions régissent l'utilisation de la plateforme StyleOS et des services associés (Sarah IA, Web Elite).
                        </p>
                    </section>

                    <section>
                        <h2 className="text-white text-lg font-bold uppercase tracking-wider mb-4">2. Accès au service</h2>
                        <p>
                            Le service est réservé aux professionnels de la coiffure et de la beauté. L'accès nécessite la création d'un compte et le paiement d'un abonnement (sauf période d'essai accordée).
                        </p>
                    </section>

                    <section>
                        <h2 className="text-white text-lg font-bold uppercase tracking-wider mb-4">3. Responsabilité</h2>
                        <p>
                            StyleOS met tout en œuvre pour assurer la disponibilité du service mais ne saurait être tenu responsable des interruptions dues à la maintenance ou à des problèmes techniques externes (hébergement, réseaux télécoms).
                        </p>
                    </section>

                    <section>
                        <h2 className="text-white text-lg font-bold uppercase tracking-wider mb-4">4. Résiliation</h2>
                        <p>
                            L'abonnement est sans engagement de durée (mensuel). Toute demande de résiliation doit être effectuée avant la date de renouvellement mensuel.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default TermsOfService;
