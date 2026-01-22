import { Check, ShieldCheck, Zap, Crown, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PricingSection = () => {
    const navigate = useNavigate();

    const plans = [
        {
            id: 'basic',
            name: "Basic",
            price: "50 €",
            period: "/mois",
            icon: ShieldCheck,
            roi: "Image de Marque Elite",
            description: "Propulsez votre identité visuelle.",
            features: [
                { text: "Création Site Web (Setup initial)", included: true, bold: true },
                { text: "Système de Réservation", included: true, bold: false },
                { text: "Maintenance & Hébergement", included: true, bold: false },
                { text: "Paiement Nom de Domaine", included: true, bold: false },
                { text: "Sarah IA", included: false, bold: false }
            ],
            cta: "Démarrer en Basic",
            highlight: false
        },
        {
            id: 'pro',
            name: "Pro",
            price: "109 €",
            period: "/mois",
            icon: Zap,
            roi: "~450€ / mois économisés",
            description: "Sarah IA à votre service 24h/24.",
            features: [
                { text: "Tout du Pack Basic", included: true, bold: false },
                { text: "Sarah IA Ilimitée", included: true, bold: true },
                { text: "Support Technique 24/7", included: true, bold: false },
                { text: "Maintenance Premium", included: true, bold: false },
                { text: "Pilotage Compta IA", included: false, bold: false }
            ],
            cta: "Démarrer en Pro",
            highlight: false
        },
        {
            id: 'elite',
            name: "Elite",
            price: "199 €",
            period: "/mois",
            icon: Crown,
            roi: "~1200€ / mois économisés",
            description: "Domination totale et gestion automatisée.",
            badge: "Plus Populaire",
            features: [
                { text: "Tout du Pack Pro", included: true, bold: false },
                { text: "Pilotage Compta IA Complet", included: true, bold: true },
                { text: "Automatisation des Avis", included: true, bold: true },
                { text: "Gestion de Réputation Auto", included: true, bold: true },
                { text: "Support Dédié", included: true, bold: false }
            ],
            cta: "Devenir Elite",
            highlight: true
        },
        {
            id: 'empire',
            name: "Empire",
            price: "279 €",
            period: "/mois",
            icon: TrendingUp,
            roi: "ROI Illimité / Multi-siège",
            description: "Pour les visionnaires multi-établissements.",
            badge: "-30% OFF TEMPORAIRE",
            oldPrice: "399 €",
            features: [
                { text: "Tout du Pack Elite", included: true, bold: true },
                { text: "Gestion de Réseaux Sociaux", included: true, bold: true },
                { text: "Stratégie Marketing Dédiée", included: true, bold: true },
                { text: "Support 24/7 VIP", included: true, bold: true },
                { text: "Rapports Multi-sièges", included: true, bold: false }
            ],
            cta: "Bâtir l'Empire",
            highlight: false
        }
    ];

    return (
        <section id="pricing" className="py-24 bg-black relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter uppercase text-white">
                        Investissez dans votre <span className="text-primary italic">Liberté</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed mb-10">
                        Reprenez le contrôle de votre temps et de votre croissance avec nos plans partenaires Blue-Chip.
                    </p>

                    {/* Setup Fee Notice - Elegant */}
                    <div className="inline-flex flex-col md:flex-row items-center gap-4 bg-primary/5 border border-primary/20 p-6 rounded-[2rem] backdrop-blur-md mb-12">
                        <div className="flex items-center gap-3">
                            <Zap className="w-5 h-5 text-primary animate-pulse" />
                            <span className="text-white font-black uppercase tracking-[0.2em] text-[10px]">Note Stratégique :</span>
                        </div>
                        <p className="text-gray-400 text-sm font-bold">
                            Un setup initial de <span className="text-white">289€</span> est requis pour la création sur-mesure de votre infrastructure digitale.
                        </p>
                    </div>
                </div>


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative p-8 rounded-[2.5rem] border transition-all duration-500 group hover:-translate-y-4 flex flex-col overflow-hidden
                                ${plan.highlight
                                    ? 'bg-gradient-to-br from-white/15 via-black to-black border-primary/50 shadow-[0_30px_60px_-15px_rgba(212,175,55,0.15)] hover:shadow-[0_50px_80px_-20px_rgba(212,175,55,0.25)]'
                                    : 'bg-surface/30 border-white/10 hover:border-white/30 backdrop-blur-xl shadow-2xl hover:bg-white/[0.02]'
                                }
                            `}
                        >
                            {/* Hover Shine Effect */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none"></div>

                            {plan.badge && (
                                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-[0.2em] shadow-lg whitespace-nowrap z-20 
                                    ${plan.id === 'empire' ? 'bg-red-500 text-white animate-pulse' : 'bg-primary text-black'}`}>
                                    {plan.badge}
                                </div>
                            )}

                            <div className="relative z-10 mb-8">
                                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3
                                    ${plan.highlight ? 'bg-primary text-black shadow-[0_0_20px_rgba(212,175,55,0.4)]' : 'bg-white/5 text-white group-hover:bg-primary/20 group-hover:text-primary'}
                                `}>
                                    <plan.icon className="w-6 h-6" />
                                </div>

                                <h3 className="text-2xl font-black mb-2 uppercase tracking-tighter text-white">{plan.name}</h3>
                                <p className="text-gray-400 text-[10px] font-bold leading-relaxed min-h-[40px] uppercase tracking-wider">{plan.description}</p>
                            </div>

                            <div className="relative z-10 mb-6">
                                <div className="flex items-baseline gap-2 mb-2">
                                    <div className="flex flex-col">
                                        {plan.oldPrice && <span className="text-gray-600 text-sm line-through font-bold mb-1">{plan.oldPrice}</span>}
                                        <span className="text-5xl font-black tracking-tighter text-white italic">{plan.price.split(' ')[0]}</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-primary font-bold text-lg leading-none">€</span>
                                        <span className="text-gray-500 text-[10px] uppercase font-black tracking-widest">{plan.period.replace('/', '')}</span>
                                    </div>
                                </div>
                                <div className="inline-block px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-[9px] font-black uppercase tracking-wider">
                                    ROI: {plan.roi}
                                </div>
                            </div>

                            <ul className="relative z-10 space-y-4 mb-10 flex-1">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className={`flex items-start gap-3 text-[10px] transition-all duration-300 ${!feature.included ? 'opacity-20' : 'group-hover:translate-x-1'}`}>
                                        {feature.included ? (
                                            <div className={`p-0.5 rounded-full shrink-0 ${plan.highlight ? 'bg-primary/20 text-primary' : 'bg-white/10 text-gray-400'}`}>
                                                <Check className="w-3 h-3" />
                                            </div>
                                        ) : (
                                            <div className="w-4 h-4 shrink-0" />
                                        )}
                                        <span className={`
                                            ${feature.bold ? 'font-black text-white uppercase tracking-wide' : 'text-gray-400 font-bold'}
                                            ${!feature.included ? 'line-through' : ''}
                                            ${feature.text === 'Pilotage Compta IA Complet' ? 'text-primary' : ''}
                                        `}>
                                            {feature.text}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <button
                                onClick={() => navigate(`/plan/${plan.id}`)}
                                className={`relative z-10 w-full py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] transition-all duration-500
                                    ${plan.highlight
                                        ? 'bg-primary text-black hover:bg-white hover:scale-105 shadow-[0_15px_30px_rgba(212,175,55,0.2)]'
                                        : 'bg-white/5 text-white hover:bg-primary hover:text-black border border-white/10 hover:border-primary'
                                    }
                                `}
                            >
                                {plan.cta}
                            </button>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary/80 text-xs font-bold uppercase tracking-widest">
                        <ShieldCheck className="w-4 h-4" />
                        <span>Propriété Totale. Zéro Commissions. Indépendance Garantie.</span>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default PricingSection;
