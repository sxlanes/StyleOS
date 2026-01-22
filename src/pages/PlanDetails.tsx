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

                <div className="w-full bg-surface/30 border border-white/5 rounded-[4rem] p-10 md:p-24 backdrop-blur-3xl relative overflow-hidden shadow-2xl animate-fade-in-up">
                    <div className="absolute top-0 right-0 p-12 opacity-10">
                        <Icon className="w-48 h-48 text-white rotate-12" />
                    </div>

                    <div className="relative z-10">
                        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-20 pb-20 border-b border-white/5">
                            <div className="max-w-2xl">
                                <div className="inline-block mb-10 px-6 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.5em]">
                                    Configuration Du Système StyleOS
                                </div>
                                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-none text-white mb-6">
                                    {plan.name}<span className="text-primary italic">.</span>
                                </h1>
                                <p className="text-lg md:text-xl text-gray-400 font-medium leading-relaxed max-w-xl opacity-80">
                                    {plan.description}
                                </p>
                            </div>

                            <div className="flex flex-col items-start lg:items-end min-w-[250px]">
                                <span className="text-primary text-[9px] font-black uppercase tracking-[0.4em] mb-3">Investissement Business</span>
                                <div className="flex items-start">
                                    <div className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none">
                                        {plan.price.split(' ')[0]}
                                    </div>
                                    <span className="text-2xl font-black text-primary mt-2 ml-1">€</span>
                                </div>
                                <div className="text-[9px] text-gray-500 font-black uppercase tracking-[0.4em] mt-4 mb-8">Subscription de Service Mensuelle</div>

                                {plan.setupFee && (
                                    <div className="w-full py-4 px-8 bg-white/[0.03] border border-white/5 rounded-[2rem] flex flex-col items-start lg:items-end gap-1 hover:border-primary/20 transition-all duration-700 group/setup shadow-2xl">
                                        <span className="text-[8px] text-gray-600 uppercase font-black tracking-[0.3em] mb-1 group-hover/setup:text-gray-400 transition-colors">Setup Initial de Création</span>
                                        <span className="text-white font-black text-3xl uppercase italic group-hover/setup:text-primary transition-colors">{plan.setupFee.split(' ')[0]} €</span>
                                        <span className="text-[7px] text-primary/40 uppercase font-black tracking-[0.2em] mt-1">Paiement Unique à l'ouverture</span>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32">
                            {/* Features Column */}
                            <div className="space-y-12">
                                <div className="flex items-center gap-6 mb-12">
                                    <div className="h-px bg-primary/30 flex-1"></div>
                                    <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-primary whitespace-nowrap">L'Expérience Elite</h3>
                                </div>
                                <div className="grid gap-10">
                                    {plan.features.map((feature, i) => (
                                        <div key={i} className="flex items-start gap-6 group">
                                            <div className="mt-1 bg-primary/10 p-2.5 rounded-full ring-4 ring-primary/5 group-hover:bg-primary group-hover:ring-primary/40 transition-all duration-500">
                                                <Check className="w-3.5 h-3.5 text-primary group-hover:text-black transition-colors" />
                                            </div>
                                            <span className="text-xl md:text-2xl font-bold text-gray-300 leading-tight group-hover:text-white transition-colors duration-500">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Additional Info Column */}
                            <div className="flex flex-col justify-between gap-16">
                                {plan.notIncluded.length > 0 && (
                                    <div className="space-y-12">
                                        <div className="flex items-center gap-6 mb-12">
                                            <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-600 whitespace-nowrap">Potentiel Supérieur</h3>
                                            <div className="h-px bg-white/5 flex-1"></div>
                                        </div>
                                        <div className="grid gap-8">
                                            {plan.notIncluded.map((item, i) => (
                                                <div key={i} className="flex items-center gap-5 opacity-20 hover:opacity-100 transition-all duration-700 cursor-default group">
                                                    <div className="w-2 h-2 rounded-full bg-gray-600 group-hover:bg-primary transition-colors"></div>
                                                    <span className="text-sm font-black text-gray-500 uppercase tracking-[0.4em] group-hover:text-white transition-colors">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                <div className="space-y-12">
                                    <div className="p-12 rounded-[3rem] bg-black/40 border border-white/5 relative group overflow-hidden shadow-2xl">
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                                        <div className="relative z-10">
                                            <div className="flex items-center gap-5 mb-8">
                                                <ShieldCheck className="w-8 h-8 text-primary shadow-[0_0_20px_rgba(212,175,55,0.4)]" />
                                                <span className="text-[11px] font-black uppercase tracking-[0.4em] text-white">Garantie StyleOS Elite</span>
                                            </div>
                                            <p className="text-xs text-gray-500 font-bold leading-relaxed tracking-wide">
                                                Déploiement en 72h. Sans engagement de durée. Annulation simplifiée. Propriété totale de votre base de données et de votre identité digitale.
                                            </p>
                                        </div>
                                    </div>

                                    <button className="group relative w-full py-10 bg-primary rounded-[2rem] overflow-hidden transition-all duration-700 hover:scale-[1.02] active:scale-[0.98] shadow-[0_20px_80px_rgba(212,175,55,0.3)]">
                                        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                                        <span className="relative text-black font-black uppercase tracking-[0.5em] text-base">
                                            Confirmer Le Plan {plan.name}
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Brand Footer */}
                <div className="w-full mt-32 pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-black uppercase tracking-[0.5em] text-gray-700">
                    <div className="hover:text-gray-400 transition-colors">StyleOS &copy; {new Date().getFullYear()} • Bordeaux • France</div>
                    <div className="flex gap-12">
                        <Link to="/legal" className="hover:text-primary transition-colors">Mentions Légales</Link>
                        <Link to="/terms" className="hover:text-primary transition-colors">CGV & CGU</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlanDetails;
