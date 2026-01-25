import { ArrowUpRight, Check, Shield, Zap, Crown, TrendingUp, Globe, CheckCircle2, XCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';

const PricingCard = ({ title, price, description, icon: Icon, features, isPopular, isDiscounted, oldPrice, planId, actionLabel, theme, roiText, disabledFeatures = [] }: any) => {
    const navigate = useNavigate();
    const cardRef = useRef<HTMLDivElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (cardRef.current) {
            const rect = cardRef.current.getBoundingClientRect();
            setMousePosition({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            });
        }
    };

    const isElite = theme === 'elite';

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            className={`relative rounded-3xl p-[1px] bg-white/5 transition-transform duration-300 hover:scale-[1.01] group h-full flex flex-col ${isElite ? 'bg-gradient-to-b from-[#D4AF37] to-[#D4AF37]/20 shadow-[0_0_30px_rgba(212,175,55,0.1)]' : ''}`}
        >
            {/* Spotlight Effect for non-elite cards */}
            {!isElite && (
                <div
                    className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                        background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.1), transparent 40%)`
                    }}
                />
            )}

            <div className="h-full bg-[#0A0A0A] rounded-[23px] p-6 flex flex-col relative overflow-hidden">
                {/* Popular Badge */}
                {isPopular && (
                    <div className="absolute top-4 right-4 z-20">
                        <span className="bg-[#D4AF37] text-black text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-md">Plus Populaire</span>
                    </div>
                )}
                {/* Discount Badge */}
                {isDiscounted && (
                    <div className="absolute top-4 right-4 z-20">
                        <span className="bg-[#ef4444] text-white text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-md">-30% OFF TEMPORAIRE</span>
                    </div>
                )}

                {/* Header Section */}
                <div className="mb-8">
                    <div className={`w-14 h-14 rounded-xl border flex items-center justify-center mb-6 text-white ${isElite ? 'border-[#D4AF37] bg-[#D4AF37]/10 text-[#D4AF37]' : 'border-white/10 bg-white/5'}`}>
                        <Icon size={24} strokeWidth={1.5} />
                    </div>

                    <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-2">{title}</h3>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-relaxed h-8">{description}</p>
                </div>

                {/* Price Section */}
                <div className="mb-8">
                    <div className="flex items-end gap-1 leading-none mb-4">
                        {isDiscounted && <span className="text-lg text-gray-600 line-through font-bold mb-1 mr-2">{oldPrice}€</span>}
                        <span className="text-6xl font-black text-white tracking-tighter">{price}</span>
                        <div className="flex flex-col pb-1">
                            <span className="text-xl font-bold text-[#D4AF37]">€</span>
                            <span className="text-[8px] font-bold text-gray-500 uppercase tracking-wider">Mois</span>
                        </div>
                    </div>

                    {/* ROI Pill */}
                    {roiText && (
                        <div className="inline-block bg-[#064E3B] border border-[#059669]/30 rounded px-3 py-1.5">
                            <span className="text-[9px] font-black text-[#34D399] uppercase tracking-widest">
                                {roiText}
                            </span>
                        </div>
                    )}
                </div>

                <div className="h-px w-full bg-white/5 mb-8"></div>

                {/* Features */}
                <ul className="space-y-4 mb-10 flex-1">
                    {features.map((feature: any, i: number) => {
                        const isBold = feature.includes('SARAH') || feature.includes('SITE WEB') || feature.includes('COMPTA');
                        return (
                            <li key={i} className="flex items-start gap-3 text-xs text-gray-300 font-medium">
                                <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${isElite ? 'bg-[#D4AF37] text-black' : 'bg-white/20 text-black'}`}>
                                    <Check size={10} strokeWidth={4} />
                                </div>
                                <span className={isBold ? 'text-white font-bold uppercase' : ''}>{feature}</span>
                            </li>
                        );
                    })}
                    {disabledFeatures.map((feature: string, i: number) => (
                        <li key={`disabled-${i}`} className="flex items-start gap-3 text-xs text-gray-600 font-medium opacity-50">
                            <div className="w-4 h-4 rounded-full border border-gray-700 flex items-center justify-center shrink-0 mt-0.5">
                                <XCircle size={10} />
                            </div>
                            <span className="line-through">{feature}</span>
                        </li>
                    ))}
                </ul>

                <button
                    onClick={() => navigate(`/plan/${planId}`)}
                    className={`w-full py-4 rounded-xl font-black uppercase tracking-widest text-[11px] flex items-center justify-center gap-2 transition-all group-hover:translate-y-[-2px] ${isElite ? 'bg-[#D4AF37] text-black hover:bg-[#F3E5AB]' : 'bg-white/10 text-white hover:bg-white hover:text-black'}`}
                >
                    {actionLabel} <ArrowUpRight size={14} />
                </button>
            </div>
        </div>
    );
};

const PricingSection = () => {
    return (
        <div className="max-w-[1400px] mx-auto px-6">
            <div className="text-center mb-16 relative">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary/20 blur-[120px] w-2/3 h-full rounded-full pointer-events-none"></div>
                <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6 text-white relative z-10">
                    INVESTISSEZ DANS VOTRE <span className="text-[#D4AF37] italic">LIBERTÉ</span>
                </h2>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light relative z-10 mb-12">
                    Reprenez le contrôle de votre temps et de votre croissance avec nos plans partenaires Blue-Chip.
                </p>

                {/* SETUP FEE BANNER (Restored) */}
                <div className="relative mb-20 bg-[#111] rounded-3xl border border-primary/30 p-8 flex flex-col md:flex-row items-center justify-between shadow-[0_0_40px_rgba(212,175,55,0.05)] overflow-hidden hover:border-primary/50 transition-colors duration-500 group max-w-5xl mx-auto">
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                    <div className="absolute top-0 right-0 p-4 opacity-10 transition-transform group-hover:scale-110 duration-700"><Globe size={120} /></div>

                    <div className="relative z-10 flex-1 text-center md:text-left mb-6 md:mb-0">
                        <div className="inline-block px-3 py-1 bg-primary/20 text-primary uppercase text-[10px] font-black tracking-widest rounded mb-3 border border-primary/20">Pack Démarrage</div>
                        <h3 className="text-2xl md:text-3xl font-black uppercase text-white mb-2">Création Site Web "Élite"</h3>
                        <p className="text-gray-400 text-sm max-w-xl">
                            Design sur-mesure par nos experts. Intégration de votre identité visuelle. Configuration SEO local Bordeaux. Shooting photo inclus (Offre de lancement).
                        </p>
                    </div>
                    <div className="relative z-10 flex flex-col items-center md:items-end shrink-0">
                        <div className="text-4xl font-black text-white tracking-tighter group-hover:text-primary transition-colors">289€</div>
                        <div className="text-[10px] uppercase font-bold text-gray-500 tracking-widest">Paiement Unique</div>
                        <div className="mt-2 flex items-center gap-1 text-[10px] text-green-500 font-bold uppercase">
                            <Check size={12} /> Satisfait ou Refait
                        </div>
                    </div>
                </div>
            </div>

            {/* 4 PLANS GRID */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch relative z-10">
                <PricingCard
                    title="Basic"
                    price="50"
                    description="PROPULSEZ VOTRE IDENTITÉ VISUELLE."
                    icon={Shield}
                    roiText="ROI: IMAGE DE MARQUE ELITE"
                    features={["CRÉATION SITE WEB (SETUP INITIAL)", "Système de Réservation", "Maintenance & Hébergement", "Nom de domaine inclus"]}
                    disabledFeatures={["Sarah IA", "Pilotage Compta IA"]}
                    planId="basic"
                    actionLabel="DÉMARRER EN BASIC"
                />

                <PricingCard
                    title="Pro"
                    price="109"
                    description="SARAH IA À VOTRE SERVICE 24H/24."
                    icon={Zap}
                    roiText="ROI: ~450€ / MOIS ÉCONOMISÉS"
                    features={["Tout du Pack Basic", "SARAH IA ILLIMITÉE", "Support Technique 24/7", "Maintenance Premium"]}
                    disabledFeatures={["Pilotage Compta IA"]}
                    planId="pro"
                    actionLabel="DÉMARRER EN PRO"
                    theme="pro"
                />

                <PricingCard
                    title="Elite"
                    price="199"
                    description="DOMINATION TOTALE ET GESTION AUTOMATISÉE."
                    icon={Crown}
                    roiText="ROI: ~1200€ / MOIS ÉCONOMISÉS"
                    features={["Tout du Pack Pro", "PILOTAGE COMPTA IA COMPLET", "AUTOMATISATION DES AVIS", "GESTION DE RÉPUTATION AUTO", "Support Dédié"]}
                    planId="elite"
                    actionLabel="DEVENIR ELITE"
                    theme="elite"
                    isPopular={true}
                />

                <PricingCard
                    title="Empire"
                    price="279"
                    oldPrice="399"
                    isDiscounted={true}
                    description="POUR LES VISIONNAIRES MULTI-ÉTABLISSEMENTS."
                    icon={TrendingUp}
                    roiText="ROI: ROI ILLIMITÉ / MULTI-SIÈGE"
                    features={["TOUT DU PACK ELITE", "GESTION DE RÉSEAUX SOCIAUX", "STRATÉGIE MARKETING DÉDIÉE", "SUPPORT 24/7 VIP", "Rapports Multi-sièges"]}
                    planId="empire"
                    actionLabel="BÂTIR L'EMPIRE"
                    theme="empire"
                />
            </div>
        </div>
    );
};

export default PricingSection;
