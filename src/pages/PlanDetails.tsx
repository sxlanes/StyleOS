import { useParams, useNavigate, Link } from 'react-router-dom';
import { Check, ArrowLeft, ShieldCheck, Zap, Crown, Calculator, Monitor } from 'lucide-react';

const plans = {
    flagship: {
        name: "Flagship",
        price: "50 €",
        description: "Votre vitrine digitale premium.",
        icon: Monitor,
        features: [
            "Site Web 'Dark Luxury' sur mesure",
            "Maintenance Technique incluse",
            "Réservation en Ligne (via module externe ou intégré basic)",
            "Hébergement rapide et sécurisé",
            "Nom de domaine offert la 1ère année"
        ],
        notIncluded: [
            "Module Compta IA",
            "Agent IA Sarah",
            "Gestion Réseaux Sociaux",
            "Scan Factures"
        ]
    },
    pilotage: {
        name: "Pilotage",
        price: "89 €",
        description: "Maîtrisez votre argent. Idéal pour lâcher le papier.",
        icon: Calculator,
        features: [
            "Tout du pack Flagship",
            "Module Compta IA complet",
            "Calcul Bénéfice Net Réel en temps réel",
            "Scan Factures (Photo vers Excel/Compta)",
            "Export automatique pour Expert-Comptable",
            "Tableau de bord financier simple"
        ],
        notIncluded: [
            "Agent IA Sarah",
            "Gestion Réseaux Sociaux",
            "Prise de RDV par téléphone (IA)"
        ]
    },
    acceleration: {
        name: "Accélération",
        price: "125 €",
        description: "L'automatisation intelligente.",
        icon: Zap,
        features: [
            "Tout du pack Pilotage",
            "Agent IA Sarah (Répond au téléphone 24/7)",
            "Prise de RDV Autonome par voix",
            "Filtrage des appels indésirables",
            "Économie d'un poste de réceptionniste (~24k€/an)"
        ],
        notIncluded: [
            "Gestion Réseaux Sociaux (Community Management humain)"
        ]
    },
    empire: {
        name: "Empire",
        price: "189 €",
        description: "Domination totale.",
        icon: Crown,
        features: [
            "Tout inclu (Web + Compta + IA)",
            "Gestion Réseaux Sociaux (Posts + Stories)",
            "Support Prioritaire VIP 7j/7",
            "Réunions mensuelles de stratégie",
            "Shooting photo annuel offert (si local)"
        ],
        notIncluded: []
    }
};

const PlanDetails = () => {
    const { planId } = useParams();
    const navigate = useNavigate();
    const plan = plans[planId as keyof typeof plans];

    if (!plan) {
        return <div className="min-h-screen bg-black text-white flex items-center justify-center">Plan non trouvé. <Link to="/" className="text-primary ml-2">Retour</Link></div>;
    }

    const Icon = plan.icon;

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white font-sans p-6 md:p-12 flex flex-col items-center">
            <div className="max-w-3xl w-full">
                <button onClick={() => navigate(-1)} className="flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Retour
                </button>

                <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden">
                    {/* Background Glow */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] rounded-full pointer-events-none"></div>

                    <div className="flex items-start justify-between mb-8 relative z-10">
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <div className="p-3 bg-white/10 rounded-xl">
                                    <Icon className="w-6 h-6 text-primary" />
                                </div>
                                <h1 className="text-3xl md:text-4xl font-bold uppercase tracking-tight">{plan.name}</h1>
                            </div>
                            <p className="text-gray-400 text-lg">{plan.description}</p>
                        </div>
                        <div className="text-right">
                            <div className="text-4xl font-bold text-white">{plan.price}</div>
                            <div className="text-sm text-gray-500">/ mois</div>
                        </div>
                    </div>

                    <div className="h-px w-full bg-white/10 mb-8"></div>

                    <div className="space-y-8 relative z-10">
                        <div>
                            <h3 className="text-lg font-bold mb-4 text-white">Ce qui est inclus :</h3>
                            <ul className="grid gap-4">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-200">
                                        <div className="mt-1 bg-green-500/20 p-1 rounded-full"><Check className="w-3 h-3 text-green-500" /></div>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {plan.notIncluded.length > 0 && (
                            <div>
                                <h3 className="text-lg font-bold mb-4 text-gray-400">Ce qui n'est pas inclus :</h3>
                                <ul className="grid gap-4">
                                    {plan.notIncluded.map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-gray-500">
                                            <div className="bg-red-500/10 p-1 rounded-full"><Check className="w-3 h-3 text-red-500 rotate-45" /></div>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    <div className="mt-12 flex flex-col md:flex-row gap-4 items-center justify-between bg-black/20 p-6 rounded-2xl border border-white/5">
                        <div className="flex items-center gap-3 text-sm text-gray-400">
                            <ShieldCheck className="w-5 h-5 text-primary" />
                            <span>Garantie 30 jours satisfait ou remboursé. Sans engagement.</span>
                        </div>
                        <button className="w-full md:w-auto px-8 py-3 bg-primary text-black font-bold rounded-xl hover:bg-white transition-all shadow-lg shadow-primary/20">
                            Confirmer & Souscrire
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlanDetails;
