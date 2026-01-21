import { useState } from 'react';
import { Check, ShieldCheck, X, Zap, Crown, Calculator } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PricingSection = () => {
    const navigate = useNavigate();
    const [pricingMode, setPricingMode] = useState<'subscription' | 'one-time'>('subscription');

    const plans = [
        {
            id: 'flagship',
            name: "Flagship",
            price: pricingMode === 'subscription' ? "50 €" : "1 490 €",
            period: pricingMode === 'subscription' ? "/mois" : "unique",
            maintenance: pricingMode === 'one-time' ? "120€/an + Domaine" : null,
            savings: pricingMode === 'one-time' ? "-15%" : null,
            icon: X,
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
            price: pricingMode === 'subscription' ? "89 €" : "2 890 €",
            period: pricingMode === 'subscription' ? "/mois" : "unique",
            maintenance: pricingMode === 'one-time' ? "120€/an + Domaine" : null,
            savings: pricingMode === 'one-time' ? "-20%" : null,
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
            price: pricingMode === 'subscription' ? "125 €" : "4 490 €",
            period: pricingMode === 'subscription' ? "/mois" : "unique",
            maintenance: pricingMode === 'one-time' ? "120€/an + Domaine" : null,
            savings: pricingMode === 'one-time' ? "-25%" : null,
            icon: Zap,
            description: "L'automatisation intelligente.",
            features: [
                { text: "Tout du pack Pilotage", included: true, bold: true },
                { text: "Agent IA Sarah (24/7)", included: true, bold: true },
                { text: "Agenda Automatisé", included: true },
                { text: "Réponse Appels Manqués", included: true },
                { text: "Gestion Réseaux Sociaux", included: false, italic: true }
            ],
            cta: "Automatiser mon salon",
            highlight: true
        },
        {
            id: 'empire',
            name: "Empire",
            price: pricingMode === 'subscription' ? "250 €" : "8 990 €",
            period: pricingMode === 'subscription' ? "/mois" : "unique",
            maintenance: pricingMode === 'one-time' ? "120€/an + Domaine" : null,
            savings: pricingMode === 'one-time' ? "-30%" : null,
            icon: Crown,
            description: "Dominez votre marché.",
            features: [
                { text: "Tout du pack Accélération", included: true, bold: true },
                { text: "Gestion Réseaux Sociaux", included: true, bold: true },
                { text: "Création Contenu (4/mois)", included: true },
                { text: "pubs Facebook/Insta Ads", included: true },
                { text: "Coaching Business 1-1", included: true }
            ],
            cta: "Choisir Empire",
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
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                        Investissez dans votre <span className="text-primary italic">Liberté</span>
                    </h2>
                    <p className="text-xl text-text-muted max-w-2xl mx-auto mb-8">
                        Choisissez le modèle qui vous convient : Abonnement sans engagement ou Achat unique.
                    </p>

                    {/* Pricing Toggle */}
                    <div className="inline-flex items-center p-1 bg-white/5 rounded-full border border-white/10 mb-8 self-center">
                        <button
                            onClick={() => setPricingMode('subscription')}
                            className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${pricingMode === 'subscription'
                                ? 'bg-primary text-black shadow-lg scale-105'
                                : 'text-white/60 hover:text-white'
                                }`}
                        >
                            Abonnement (Mensuel)
                        </button>
                        <button
                            onClick={() => setPricingMode('one-time')}
                            className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${pricingMode === 'one-time'
                                ? 'bg-primary text-black shadow-lg scale-105'
                                : 'text-white/60 hover:text-white'
                                }`}
                        >
                            Paiement Unique
                        </button>
                    </div>
                </div>


                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative p-8 rounded-3xl border transition-all duration-300 group hover:-translate-y-2 flex flex-col
                                ${plan.highlight
                                    ? 'bg-gradient-to-b from-white/10 to-black border-primary/50 shadow-[0_0_50px_rgba(212,175,55,0.1)]'
                                    : 'bg-black/40 border-white/10 hover:border-white/20'
                                }
                            `}
                        >
                            {plan.highlight && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-black px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg whitespace-nowrap">
                                    Le Plus Populaire
                                </div>
                            )}

                            <div className="mb-8">
                                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-colors
                                    ${plan.highlight ? 'bg-primary text-black' : 'bg-white/5 text-white group-hover:bg-white/10'}
                                `}>
                                    <plan.icon className="w-6 h-6" />
                                </div>

                                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                                <p className="text-text-muted text-sm min-h-[40px]">{plan.description}</p>
                            </div>

                            <div className="mb-8">
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl font-bold tracking-tight">{plan.price}</span>
                                    {plan.period && <span className="text-text-muted text-sm">{plan.period}</span>}
                                </div>
                                {plan.maintenance && (
                                    <div className="text-xs text-primary mt-2 font-medium">
                                        {plan.maintenance}
                                    </div>
                                )}
                                {(plan as any).subBadge && (
                                    <div className="inline-block mt-3 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold w-full text-center">
                                        {(plan as any).subBadge}
                                    </div>
                                )}
                            </div>

                            <ul className="space-y-4 mb-8 flex-1">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className={`flex items-start gap-3 text-sm ${!feature.included ? 'opacity-40' : ''}`}>
                                        {feature.included ? (
                                            <Check className={`w-5 h-5 shrink-0 ${plan.highlight ? 'text-primary' : 'text-white'}`} />
                                        ) : (
                                            <X className="w-5 h-5 shrink-0 text-white/40" />
                                        )}
                                        <span className={`
                                            ${feature.bold ? 'font-bold text-white' : 'text-gray-400'}
                                            ${(feature as any).italic ? 'italic text-gray-500' : ''}
                                            ${!feature.included ? 'line-through' : ''}
                                        `}>
                                            {feature.text}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <button
                                onClick={() => navigate(`/plan/${plan.id}`)}
                                className={`w-full py-4 rounded-xl font-bold uppercase tracking-wide transition-all mt-auto
                                    ${plan.highlight
                                        ? 'bg-primary text-black hover:bg-white hover:scale-105 shadow-lg'
                                        : 'bg-white/5 text-white hover:bg-white/20 hover:scale-105 border border-white/10'
                                    }
                                `}
                            >
                                {plan.cta}
                            </button>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium">
                        <ShieldCheck className="w-4 h-4" />
                        <span>0% de commission sur vos réservations. Ce que vous gagnez est 100% à vous.</span>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default PricingSection;
