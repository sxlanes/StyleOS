import { useParams, useNavigate, Link } from 'react-router-dom';
import { Check, ShieldCheck, Zap, Crown } from 'lucide-react';

const plans = {
    basic: {
        name: "Basic",
        price: "50 €",
        setupFee: "299 € (Frais de Création)",
        description: "L'identité digitale de votre salon.",
        icon: ShieldCheck,
        features: [
            "Création de Site Web Premium (Design sur mesure)",
            "Système de Réservation Intelligent intégré",
            "Maintenance Technique & Hébergement",
            "Gestion & Paiement du Nom de Domaine",
            "Accès Dashboard Business Basic"
        ],
        notIncluded: [
            "Sarah IA (Agent Vocal)",
            "Pilotage de Comptabilité IA",
            "Automatisation des Avis",
            "Gestion de Réseaux Sociaux"
        ]
    },
    pro: {
        name: "Pro",
        price: "109 €",
        setupFee: null,
        description: "Automatisation totale de vos appels.",
        icon: Zap,
        features: [
            "Tout du Pack Basic",
            "Sarah IA Illimitée (Réponses 24h/24 7j/7)",
            "Gestion Intelligente du Planning",
            "Support Technique Prioritaire",
            "Maintenance Evolution Premium"
        ],
        notIncluded: [
            "Pilotage de Comptabilité IA",
            "Automatisation des Avis Réseaux",
            "Gestion de Réseaux Sociaux Professionnelle"
        ]
    },
    elite: {
        name: "Elite",
        price: "199 €",
        setupFee: null,
        description: "Gestion financière et réputation automatique.",
        icon: Crown,
        features: [
            "Tout du Pack Pro",
            "Module Pilotage Comptabilité IA",
            "Automatisation des Avis (Google/Social)",
            "Gestion de Réputation Automatique",
            "Analyse de Performance Mensuelle",
            "Support Dédié de l'Équipe"
        ],
        notIncluded: [
            "Gestion Complète des Réseaux Sociaux",
            "Stratégie Marketing Dédiée Mensuelle"
        ]
    },
    empire: {
        name: "Empire",
        price: "279 €",
        setupFee: null,
        description: "La solution ultime multi-établissements.",
        icon: Crown,
        features: [
            "Tout du Pack Elite",
            "Gestion Professionnelle de Réseaux Sociaux",
            "Stratégie Marketing Dédiée & Réunions",
            "Support VIP 24/7 (Réponse < 1h)",
            "Gestion de l'Empire Multi-établissements",
            "Rapports ROI Consolidés"
        ],
        notIncluded: []
    }
};

const PlanDetails = () => {
    const { planId } = useParams();
    const navigate = useNavigate();
    const plan = plans[planId as keyof typeof plans];

    if (!plan) {
        return <div className="min-h-screen bg-black text-white flex items-center justify-center font-black uppercase tracking-tighter">Plan non trouvé. <Link to="/" className="text-primary ml-2 underline">Retour</Link></div>;
    }

    const Icon = plan.icon;

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-primary selection:text-black relative overflow-hidden">
            {/* Global Navigation - StyleOS. */}
            <nav className="fixed w-full top-0 z-50 bg-black/50 backdrop-blur-lg border-b border-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <Link to="/" className="text-2xl font-bold tracking-tighter">StyleOS<span className="text-primary">.</span></Link>
                    <Link to="/" className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500 hover:text-white transition-all duration-300">Quitter La Réservation</Link>
                </div>
            </nav>

            {/* Cinematic Background elements */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 blur-[150px] rounded-full opacity-50 animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-primary/5 blur-[150px] rounded-full opacity-50 animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="max-w-6xl mx-auto px-6 pt-32 pb-20 relative z-10 flex flex-col items-center">
                {/* Elegant Breadcrumb */}
                <div className="w-full mb-12 animate-fade-in">
                    <button
                        onClick={() => navigate(-1)}
                        className="group flex items-center gap-4 text-gray-600 hover:text-primary transition-all duration-500 font-black uppercase tracking-[0.5em] text-[10px]"
                    >
                        <div className="w-10 h-px bg-gray-800 group-hover:w-16 group-hover:bg-primary transition-all duration-500"></div>
                        RETOUR
                    </button>
                </div>

                <div className="w-full bg-surface/30 border border-white/5 rounded-[3rem] p-8 md:p-12 backdrop-blur-3xl relative overflow-hidden shadow-2xl animate-fade-in-up">
                    <div className="absolute top-0 right-0 p-8 opacity-10">
                        <Icon className="w-32 h-32 text-white rotate-12" />
                    </div>

                    <div className="relative z-10">
                        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-10 pb-10 border-b border-white/5">
                            <div className="max-w-2xl">
                                <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[9px] font-black uppercase tracking-[0.4em]">
                                    Configuration Du Système
                                </div>
                                <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none text-white mb-4">
                                    {plan.name}<span className="text-primary italic">.</span>
                                </h1>
                                <p className="text-sm md:text-base text-gray-400 font-medium leading-relaxed max-w-xl opacity-80">
                                    {plan.description}
                                </p>
                            </div>

                            <div className="flex flex-col items-start lg:items-end min-w-[200px]">
                                <span className="text-primary text-[8px] font-black uppercase tracking-[0.3em] mb-2">Investissement Business</span>
                                <div className="flex items-start">
                                    <div className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none">
                                        {plan.price.split(' ')[0]}
                                    </div>
                                    <span className="text-xl font-black text-primary mt-1 ml-1">€</span>
                                </div>
                                <div className="text-[8px] text-gray-500 font-black uppercase tracking-[0.3em] mt-2 mb-4">/ mois • Sans Engagement</div>

                                {plan.setupFee && (
                                    <div className="w-full py-2 px-4 bg-white/[0.03] border border-white/5 rounded-xl flex flex-col items-start lg:items-end gap-0.5 hover:border-primary/20 transition-all duration-700 group/setup shadow-lg">
                                        <span className="text-[7px] text-gray-600 uppercase font-black tracking-[0.2em] group-hover/setup:text-gray-400 transition-colors">Setup Initial</span>
                                        <span className="text-white font-black text-lg uppercase italic group-hover/setup:text-primary transition-colors">{plan.setupFee.split(' ')[0]} €</span>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20">
                            {/* Features Column */}
                            <div className="space-y-8">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="h-px bg-primary/30 flex-1"></div>
                                    <h3 className="text-[9px] font-black uppercase tracking-[0.4em] text-primary whitespace-nowrap">L'Expérience Elite</h3>
                                </div>
                                <div className="grid gap-4">
                                    {plan.features.map((feature, i) => (
                                        <div key={i} className="flex items-start gap-4 group">
                                            <div className="mt-0.5 bg-primary/10 p-1.5 rounded-full ring-2 ring-primary/5 group-hover:bg-primary group-hover:ring-primary/40 transition-all duration-500">
                                                <Check className="w-3 h-3 text-primary group-hover:text-black transition-colors" />
                                            </div>
                                            <span className="text-base font-bold text-gray-300 leading-tight group-hover:text-white transition-colors duration-500">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Additional Info Column */}
                            <div className="flex flex-col justify-between gap-10">
                                {plan.notIncluded.length > 0 && (
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-4 mb-6">
                                            <h3 className="text-[9px] font-black uppercase tracking-[0.4em] text-gray-600 whitespace-nowrap">Potentiel Supérieur</h3>
                                            <div className="h-px bg-white/5 flex-1"></div>
                                        </div>
                                        <div className="grid gap-3">
                                            {plan.notIncluded.map((item, i) => (
                                                <div key={i} className="flex items-center gap-3 opacity-30 hover:opacity-100 transition-all duration-700 cursor-default group">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-primary transition-colors"></div>
                                                    <span className="text-xs font-black text-gray-500 uppercase tracking-[0.3em] group-hover:text-white transition-colors">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                <div className="space-y-6">
                                    <div className="p-6 rounded-[2rem] bg-black/40 border border-white/5 relative group overflow-hidden shadow-lg">
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                                        <div className="relative z-10 flex items-center gap-4">
                                            <ShieldCheck className="w-6 h-6 text-primary shadow-[0_0_20px_rgba(212,175,55,0.4)]" />
                                            <div>
                                                <div className="text-[9px] font-black uppercase tracking-[0.3em] text-white/80 mb-1">Garantie StyleOS</div>
                                                <p className="text-[10px] text-gray-500 font-bold leading-tight">
                                                    Déploiement 72h • Propriété 100% • Liberté Totale
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <button className="group relative w-full py-6 bg-primary rounded-[1.5rem] overflow-hidden transition-all duration-700 hover:scale-[1.01] active:scale-[0.98] shadow-[0_10px_40px_rgba(212,175,55,0.2)]">
                                        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                                        <span className="relative text-black font-black uppercase tracking-[0.4em] text-xs">
                                            Confirmer Le Plan {plan.name}
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Brand Footer */}
                <div className="w-full mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] font-black uppercase tracking-[0.4em] text-gray-700">
                    <div className="hover:text-gray-400 transition-colors">StyleOS &copy; {new Date().getFullYear()}</div>
                    <div className="flex gap-8">
                        <Link to="/legal" className="hover:text-primary transition-colors">Légal</Link>
                        <Link to="/terms" className="hover:text-primary transition-colors">CGV</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlanDetails;
