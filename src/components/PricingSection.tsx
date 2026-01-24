import { ArrowRight, Check, Shield, Zap, Crown, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PricingSection = () => {
    const navigate = useNavigate();

    const plans = [
        {
            name: "BASIC",
            subtitle: "PROPULSEZ VOTRE IDENTITÉ VISUELLE.",
            price: "50",
            icon: Shield,
            roi: "ROI: IMAGE DE MARQUE ELITE",
            features: [
                { text: "CRÉATION SITE WEB (SETUP INITIAL)", bold: true },
                { text: "Système de Réservation", bold: false },
                { text: "Maintenance & Hébergement", bold: false },
                { text: "Nom de domaine inclus", bold: false },
                { text: "Sarah IA", bold: false, strike: true },
            ],
            button: "DÉMARRER EN BASIC",
            highlight: false
        },
        {
            name: "PRO",
            subtitle: "SARAH IA À VOTRE SERVICE 24H/24.",
            price: "109",
            icon: Zap,
            roi: "ROI: ~450€ / MOIS ÉCONOMISÉS",
            features: [
                { text: "Tout du Pack Basic", bold: false },
                { text: "SARAH IA ILLIMITÉE", bold: true },
                { text: "Support Technique 24/7", bold: false },
                { text: "Maintenance Premium", bold: false },
                { text: "Pilotage Compta IA", bold: false, strike: true },
            ],
            button: "DÉMARRER EN PRO",
            highlight: false
        },
        {
            name: "ELITE",
            subtitle: "DOMINATION TOTALE ET GESTION AUTOMATISÉE.",
            price: "199",
            icon: Crown,
            roi: "ROI: ~1200€ / MOIS ÉCONOMISÉS",
            badge: "PLUS POPULAIRE",
            features: [
                { text: "Tout du Pack Pro", bold: false },
                { text: "PILOTAGE COMPTA IA COMPLET", bold: true },
                { text: "AUTOMATISATION DES AVIS", bold: true },
                { text: "GESTION DE RÉPUTATION AUTO", bold: true },
                { text: "Support Dédié", bold: false },
            ],
            button: "DEVENIR ELITE",
            highlight: true
        },
        {
            name: "EMPIRE",
            subtitle: "POUR LES VISIONNAIRES MULTI-ÉTABLISSEMENTS.",
            price: "279",
            originalPrice: "399€",
            icon: TrendingUp,
            roi: "ROI: ROI ILLIMITÉ / MULTI-SIÈGE",
            badge: "-30% OFF TEMPORAIRE",
            badgeColor: "bg-red-600 text-white",
            features: [
                { text: "TOUT DU PACK ELITE", bold: true },
                { text: "GESTION DE RÉSEAUX SOCIAUX", bold: true },
                { text: "STRATÉGIE MARKETING DÉDIÉE", bold: true },
                { text: "SUPPORT 24/7 VIP", bold: true },
                { text: "Rapports Multi-sièges", bold: false },
            ],
            button: "BÂTIR L'EMPIRE",
            highlight: false
        }
    ];

    return (
        <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="text-center mb-12">
                <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-4 text-white">
                    INVESTISSEZ DANS VOTRE <span className="text-[#D4AF37] italic">LIBERTÉ</span>
                </h2>
                <p className="text-gray-400 text-lg max-w-3xl mx-auto font-light">
                    Reprenez le contrôle de votre temps et de votre croissance avec nos plans partenaires Blue-Chip.
                </p>
            </div>

            {/* STRATEGIC NOTE BANNER */}
            <div className="flex justify-center mb-16">
                <div className="bg-[#111] border border-white/10 rounded-full px-8 py-3 flex items-center gap-3 text-sm text-gray-400 max-w-2xl text-center md:text-left">
                    <Zap className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" />
                    <span>
                        <span className="font-bold text-white uppercase tracking-wider text-xs mr-2">NOTE STRATÉGIQUE :</span>
                        Un setup initial de <span className="text-white font-bold">289€</span> est requis pour la création sur-mesure de votre infrastructure digitale.
                    </span>
                </div>
            </div>

            {/* PLANS GRID */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {plans.map((plan, index) => (
                    <div
                        key={index}
                        className={`relative rounded-[2rem] p-8 flex flex-col h-full border transition-all duration-300 group
                            ${plan.highlight
                                ? 'bg-black border-[#D4AF37] shadow-[0_0_50px_rgba(212,175,55,0.15)] scale-105 z-10'
                                : 'bg-[#080808] border-white/10 hover:border-white/20'
                            }`}
                    >
                        {/* Highlights/Badges */}
                        {plan.badge && (
                            <div className={`absolute -top-3 right-6 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest
                                ${plan.badgeColor ? plan.badgeColor : 'bg-[#D4AF37] text-black'}
                            `}>
                                {plan.badge}
                            </div>
                        )}

                        {/* Header */}
                        <div className="mb-8">
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 border
                                ${plan.highlight ? 'bg-[#D4AF37]/10 border-[#D4AF37]/20 text-[#D4AF37]' : 'bg-white/5 border-white/10 text-white'}
                            `}>
                                <plan.icon size={24} />
                            </div>
                            <h3 className="text-4xl font-black text-white uppercase tracking-tighter mb-2">{plan.name}</h3>
                            <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest leading-relaxed mb-6 h-8">
                                {plan.subtitle}
                            </p>

                            {/* Price */}
                            <div className="flex items-baseline gap-1">
                                {plan.originalPrice && <span className="text-sm text-gray-500 line-through font-bold mr-2">{plan.originalPrice}</span>}
                                <span className="text-5xl font-black text-white">{plan.price}€</span>
                            </div>
                            <div className="text-[10px] font-bold text-gray-600 uppercase tracking-widest mt-1">Mois</div>

                            {/* ROI Badge */}
                            <div className="mt-6 bg-[#002b1d] border border-[#009e60]/30 rounded-lg px-3 py-2 text-[9px] font-black text-[#00d682] uppercase tracking-widest text-center">
                                {plan.roi}
                            </div>
                        </div>

                        {/* Features */}
                        <ul className="space-y-4 mb-8 flex-1">
                            {plan.features.map((feature, i) => (
                                <li key={i} className={`flex items-start gap-3 text-xs ${feature.strike ? 'opacity-30' : ''}`}>
                                    <div className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center shrink-0 
                                        ${feature.strike ? 'bg-gray-800 text-gray-500' : 'bg-white text-black'}
                                    `}>
                                        <Check size={10} strokeWidth={4} />
                                    </div>
                                    <span className={`${feature.bold ? 'font-bold text-white' : 'text-gray-400'} ${feature.strike ? 'line-through' : ''}`}>
                                        {feature.text}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        {/* Button */}
                        <button
                            onClick={() => navigate('/signup')}
                            className={`w-full py-4 rounded-xl font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-2 transition-all
                                ${plan.highlight
                                    ? 'bg-[#D4AF37] text-black hover:bg-white'
                                    : 'bg-white/5 text-white border border-white/10 hover:bg-white hover:text-black'
                                }
                            `}
                        >
                            {plan.button} <ArrowRight size={12} />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PricingSection;
