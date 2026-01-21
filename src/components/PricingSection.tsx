import { Check, ShieldCheck, X, Zap, Crown, Calculator } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PricingSection = () => {
    const navigate = useNavigate();

    const plans = [
        {
            id: 'flagship',
            name: "Flagship",
            price: "50 €",
            icon: X, // Placeholder, logic below handles specific icons
            description: "Votre vitrine digitale premium.",
            features: [
                { text: "Site Web 'Dark Luxury'", included: true },
                { text: "Maintenance Technique", included: true },
                { text: "Réservation en Ligne", included: true },
                { text: "Module Compta IA", included: false },
                { text: "Agent IA Sarah", included: false }
            ],
            cta: "Choisir Flagship",
            highlight: false
        },
        {
            id: 'pilotage',
            name: "Pilotage",
            price: "89 €",
            icon: Calculator,
            description: "Maîtrisez votre argent.",
            badge: "Gestion Pro",
            subBadge: "Idéal pour lâcher le papier",
            features: [
                { text: "Tout du Flagship", included: true },
                { text: "Module Compta IA", included: true, bold: true },
                { text: "Calcul Bénéfice Net Réel", included: true },
                { text: "Scan Factures (Photo)", included: true },
                { text: "Export Expert-Comptable", included: true }
            ],
            cta: "Choisir Pilotage",
            highlight: false
        },
        {
            id: 'acceleration',
            name: "Accélération",
            price: "125 €",
            icon: Zap,
            description: "L'automatisation intelligente.",
            features: [
                { text: "Tout du pack Pilotage", included: true, bold: true },
                { text: "Agent IA Sarah (24/7)", included: true, bold: true },
                { text: "Remplace une réceptionniste (Économisez ~24k€/an)", included: true, italic: true, noIcon: true },
                { text: "Prise de RDV Autonome", included: true },
                { text: "Gestion Réseaux Sociaux", included: false }
            ],
            cta: "Automatiser mon salon",
            highlight: false
        },
        {
            id: 'empire',
            name: "Empire",
            price: "189 €",
            oldPrice: "270 €",
            icon: Crown,
            description: "Domination totale.",
            badge: "RECOMMANDÉ",
            promo: "-30% AUJOURD'HUI",
            features: [
                { text: "Tout inclu (Web + Compta + IA)", included: true, bold: true },
                { text: "Gestion Réseaux Sociaux", included: true, bold: true },
                { text: "Support Prioritaire VIP", included: true }
            ],
            cta: "Devenir le N°1",
            highlight: true,
            roi: "Rentabilisé en 2 jours"
        }
    ];

    return (
        <section id="pricing" className="py-24 bg-background relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="max-w-[90rem] mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white uppercase tracking-tight">
                        CHOISISSEZ VOTRE <span className="text-primary">ARMURE</span>
                    </h2>
                    <p className="text-text-muted max-w-2xl mx-auto">
                        De la simple vitrine à la domination totale.
                        <br />
                        Sans engagement. Évoluez quand vous voulez.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
                    {plans.map((plan) => (
                        <div
                            key={plan.id}
                            className={`glass-card p-6 rounded-3xl relative flex flex-col ${plan.highlight ? 'p-1 shadow-2xl shadow-primary/20 bg-gradient-to-b from-primary/50 to-black transform lg:scale-105 z-20' : 'border border-white/5 hover:border-white/10 transition-all bg-black/40'}`}
                        >
                            {plan.highlight ? (
                                <>
                                    <div className="absolute top-0 right-0 px-3 py-1 bg-red-600 text-white text-[10px] font-bold uppercase rounded-bl-xl rounded-tr-xl tracking-wider animate-pulse">
                                        {plan.promo}
                                    </div>
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-primary text-black text-[10px] font-bold uppercase rounded-full tracking-wider shadow-lg">
                                        {plan.badge}
                                    </div>
                                    <div className="bg-black rounded-[20px] p-6 h-full relative overflow-hidden flex flex-col">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[50px] rounded-full pointer-events-none"></div>
                                        <div className="mb-4 relative z-10">
                                            <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                                                <plan.icon className="w-5 h-5 text-primary" /> {plan.name}
                                            </h3>
                                            <p className="text-xs text-text-muted">{plan.description}</p>
                                        </div>
                                        <div className="mb-6 relative z-10">
                                            <div className="flex items-baseline gap-2">
                                                <div className="text-4xl font-bold text-primary">{plan.price}</div>
                                                {plan.oldPrice && <div className="text-sm text-gray-500 line-through decoration-red-500">{plan.oldPrice}</div>}
                                            </div>
                                            {plan.roi && <div className="text-[10px] text-green-400 mt-1 font-mono font-bold"> {plan.roi}</div>}
                                        </div>
                                        <ul className="space-y-3 mb-8 text-xs relative z-10 flex-1">
                                            {plan.features.map((feature, i) => (
                                                <li key={i} className={`flex items-center gap-2 ${feature.included ? 'text-white' : 'text-text-muted/40'} ${feature.italic ? 'ml-5 italic -mt-2 mb-1' : ''}`}>
                                                    {!feature.noIcon && (
                                                        feature.included ?
                                                            (plan.highlight ? <div className="bg-primary/20 p-1 rounded-full"><Check className="w-2 h-2 text-primary" /></div> : <Check className="w-3 h-3 text-primary" />) :
                                                            <X className="w-3 h-3" />
                                                    )}
                                                    {feature.bold ? <strong>{feature.text}</strong> : feature.text}
                                                </li>
                                            ))}
                                        </ul>
                                        <button
                                            onClick={() => navigate(`/plan/${plan.id}`)}
                                            className="w-full py-3 bg-primary text-black text-sm font-bold rounded-xl hover:bg-white transition-all neon-glow relative z-10">
                                            {plan.cta}
                                        </button>
                                    </div>
                                </>
                            ) : (
                                <>
                                    {plan.badge && (
                                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-blue-900 border border-blue-500 text-blue-100 text-[10px] font-bold uppercase rounded-full tracking-wider shadow-lg text-center whitespace-nowrap">
                                            {plan.badge} {plan.subBadge && <span className="block text-[8px] normal-case opacity-80 font-normal">{plan.subBadge}</span>}
                                        </div>
                                    )}
                                    <div className="mb-4">
                                        <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                                            {plan.id === 'flagship' ? 'Flagship' : <><plan.icon className={`w-4 h-4 ${plan.id === 'pilotage' ? 'text-blue-400' : 'text-primary'}`} /> {plan.name}</>}
                                        </h3>
                                        <p className="text-xs text-text-muted">{plan.description}</p>
                                    </div>
                                    <div className="mb-6">
                                        <div className="text-3xl font-bold text-white">{plan.price} <span className="text-sm font-normal text-text-muted">/ mois</span></div>
                                    </div>
                                    <ul className="space-y-3 mb-8 text-xs text-white/80 flex-1">
                                        {plan.features.map((feature, i) => (
                                            <li key={i} className={`flex items-center gap-2 ${feature.included ? '' : 'text-text-muted/40'} ${feature.italic ? 'ml-5 text-text-muted italic -mt-2 mb-1' : ''}`}>
                                                {!feature.noIcon && (
                                                    feature.included ? <Check className="w-3 h-3 text-primary" /> : <X className="w-3 h-3" />
                                                )}
                                                {feature.bold ? <strong>{feature.text}</strong> : feature.text}
                                            </li>
                                        ))}
                                    </ul>
                                    <button
                                        onClick={() => navigate(`/plan/${plan.id}`)}
                                        className={`w-full py-3 border text-sm font-bold rounded-xl transition-all ${plan.id === 'pilotage' ? 'bg-blue-900/20 border-blue-500/30 hover:bg-blue-900/40 text-blue-100' :
                                                'bg-surface border-glass-border hover:bg-white/5 text-white'
                                            }`}
                                    >
                                        {plan.cta}
                                    </button>
                                </>
                            )}
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <div className="text-text-muted text-sm flex items-center justify-center gap-2 mb-2">
                        <ShieldCheck className="w-4 h-4" /> Garantie 30 jours satisfait ou remboursé sur tous les plans.
                    </div>
                    <p className="text-xs text-primary/80 font-medium">
                        0% de commission sur vos réservations. Ce que vous gagnez est 100% à vous.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
