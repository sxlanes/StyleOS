import { ArrowUpRight, Check, Shield, Zap, Crown, TrendingUp, Globe, XCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useRef, useState, type MouseEvent } from 'react';

const PricingCard = ({ title, monthlyPrice, annualPrice, originalMonthlyPrice, originalAnnualPrice, description, icon: Icon, features, isPopular, planId, actionLabel, theme, roiText, disabledFeatures = [], billingPeriod }: any) => {
    const navigate = useNavigate();
    const cardRef = useRef<HTMLDivElement>(null);
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);
    const [glareX, setGlareX] = useState(50);
    const [glareY, setGlareY] = useState(50);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateXValue = ((y - centerY) / centerY) * -8;
        const rotateYValue = ((x - centerX) / centerX) * 8;

        setRotateX(rotateXValue);
        setRotateY(rotateYValue);
        setGlareX((x / rect.width) * 100);
        setGlareY((y / rect.height) * 100);
    };

    const handleMouseLeave = () => {
        setRotateX(0);
        setRotateY(0);
        setGlareX(50);
        setGlareY(50);
    };

    const isElite = theme === 'elite';
    const displayPrice = billingPeriod === 'annual' ? annualPrice : monthlyPrice;
    const originalPrice = billingPeriod === 'annual' ? originalAnnualPrice : originalMonthlyPrice;

    // Calculate savings based on annual discount vs monthly
    // If annual, savings = (monthly * 12) - (annual * 12)
    const savings = billingPeriod === 'annual' ? Math.round(monthlyPrice * 12 - annualPrice * 12) : 0;

    const handleCardClick = () => {
        navigate(`/plan/${planId}`);
    };

    return (
        <div
            ref={cardRef}
            onClick={handleCardClick}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative h-full perspective-1000 cursor-pointer"
            style={{
                transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                transition: 'transform 0.1s ease-out',
            }}
        >
            <div className={`relative rounded-3xl p-[2px] transition-all duration-500 hover:scale-[1.05] group h-full flex flex-col ${isElite ? 'bg-gradient-to-br from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] shadow-[0_0_60px_rgba(212,175,55,0.3)]' : 'bg-gradient-to-br from-white/20 via-white/10 to-white/5'}`}>

                {/* Animated Glare Effect */}
                <div
                    className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl overflow-hidden z-40"
                    style={{
                        background: `radial-gradient(circle 200px at ${glareX}% ${glareY}%, rgba(255,255,255,0.3) 0%, transparent 70%)`
                    }}
                />

                {/* Glossy Shine */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-60 pointer-events-none z-30" />

                <div className={`h-full rounded-[22px] p-8 flex flex-col relative overflow-hidden ${isElite ? 'bg-gradient-to-br from-black via-[#0a0a0a] to-black' : 'bg-gradient-to-br from-[#050505] via-[#0a0a0a] to-[#050505]'}`}>

                    {/* Popular Badge */}
                    {isPopular && (
                        <div className="absolute top-4 right-4 z-20">
                            <span className="bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] text-black text-[10px] font-black uppercase tracking-wider px-4 py-2 rounded-full shadow-[0_0_20px_rgba(212,175,55,0.6)] animate-pulse">
                                ⭐ Plus Populaire
                            </span>
                        </div>
                    )}

                    {/* Annual Savings Badge */}
                    {billingPeriod === 'annual' && savings > 0 && (
                        <div className="absolute top-4 left-4 z-20">
                            <span className="bg-gradient-to-r from-emerald-500 to-green-400 text-black text-[10px] font-black uppercase tracking-wider px-4 py-2 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.6)]">
                                💰 -{savings}€/an
                            </span>
                        </div>
                    )}

                    {/* Header Section */}
                    <div className="mb-8 relative z-10">
                        <div className={`w-16 h-16 rounded-2xl border-2 flex items-center justify-center mb-6 backdrop-blur-sm transition-all duration-300 ${isElite ? 'border-[#D4AF37] bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 text-[#D4AF37] shadow-[0_0_30px_rgba(212,175,55,0.3)] group-hover:shadow-[0_0_50px_rgba(212,175,55,0.5)]' : 'border-white/20 bg-gradient-to-br from-white/10 to-white/5 group-hover:border-white/40 text-white'}`}>
                            <Icon size={28} strokeWidth={1.5} />
                        </div>

                        <h3 className="text-4xl font-black text-white uppercase tracking-tighter mb-3 drop-shadow-2xl">{title}</h3>
                        <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest leading-relaxed">{description}</p>
                    </div>

                    {/* Price Section */}
                    <div className="mb-8 relative z-10">
                        <div className="flex items-end gap-1 leading-none mb-4">
                            <div className="flex flex-col items-end mr-2 mb-1">
                                {originalPrice && (
                                    <span className="text-xl text-gray-500 line-through font-bold">{originalPrice}€</span>
                                )}
                                {billingPeriod === 'annual' && !originalPrice && (
                                    <span className="text-2xl text-gray-600 line-through font-bold mb-2">{monthlyPrice}€</span>
                                )}
                            </div>

                            <span className={`text-7xl font-black tracking-tighter drop-shadow-2xl ${isElite ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] bg-[length:200%_auto] animate-shimmer' : 'text-white'}`}>
                                {displayPrice}
                            </span>
                            <div className="flex flex-col pb-2">
                                <span className={`text-2xl font-bold ${isElite ? 'text-[#D4AF37]' : 'text-white/70'}`}>€</span>
                                <span className="text-[9px] font-bold text-gray-500 uppercase tracking-wider">/mois</span>
                            </div>
                        </div>

                        {/* ROI Pill */}
                        {roiText && (
                            <div className="inline-block bg-gradient-to-r from-emerald-900/60 to-emerald-800/60 backdrop-blur-md border border-emerald-500/30 rounded-full px-4 py-2 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                                <span className="text-[9px] font-black text-emerald-400 uppercase tracking-widest">
                                    💎 {roiText}
                                </span>
                            </div>
                        )}
                    </div>

                    <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8"></div>

                    {/* Features */}
                    <ul className="space-y-4 mb-10 flex-1 relative z-10">
                        {features.map((feature: any, i: number) => {
                            const isBold = feature.includes('SARAH') || feature.includes('SITE WEB') || feature.includes('COMPTA');
                            return (
                                <li key={i} className="flex items-start gap-3 text-sm text-gray-300 font-medium group/item hover:text-white transition-colors">
                                    <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 shadow-lg transition-all ${isElite ? 'bg-gradient-to-br from-[#D4AF37] to-[#F3E5AB] text-black shadow-[0_0_10px_rgba(212,175,55,0.4)]' : 'bg-gradient-to-br from-white/30 to-white/20 text-black group-hover/item:from-white group-hover/item:to-white/90'}`}>
                                        <Check size={12} strokeWidth={4} />
                                    </div>
                                    <span className={isBold ? 'text-white font-black uppercase drop-shadow-md' : ''}>{feature}</span>
                                </li>
                            );
                        })}
                        {disabledFeatures.map((feature: string, i: number) => (
                            <li key={`disabled-${i}`} className="flex items-start gap-3 text-sm text-gray-500 font-medium opacity-100">
                                <div className="w-5 h-5 rounded-full border-2 border-white/10 flex items-center justify-center shrink-0 mt-0.5 text-gray-600 bg-white/5">
                                    <XCircle size={12} />
                                </div>
                                <span className="line-through decoration-gray-700 text-gray-500">{feature}</span>
                            </li>
                        ))}
                    </ul>

                    <button
                        onClick={() => navigate(`/plan/${planId}`)}
                        className={`w-full py-5 rounded-2xl font-black uppercase tracking-widest text-sm flex items-center justify-center gap-3 transition-all shadow-2xl hover:shadow-[0_0_40px_rgba(212,175,55,0.5)] group-hover:scale-[1.02] active:scale-95 relative overflow-hidden ${isElite ? 'bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] text-black hover:shadow-[0_0_60px_rgba(212,175,55,0.8)] bg-[length:200%_auto] hover:bg-[position:100%_center] transition-[background-position] duration-500' : 'bg-gradient-to-r from-white/15 to-white/10 text-white hover:from-white hover:to-white/95 hover:text-black backdrop-blur-md border-2 border-white/20 hover:border-white'}`}
                    >
                        {actionLabel} <ArrowUpRight size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
};

const PricingSection = () => {
    const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly');

    // 3D Effect for Setup Banner
    const bannerRef = useRef<HTMLDivElement>(null);
    const [bannerRotateX, setBannerRotateX] = useState(0);
    const [bannerRotateY, setBannerRotateY] = useState(0);

    const handleBannerMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!bannerRef.current) return;

        const rect = bannerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateXValue = ((y - centerY) / centerY) * -8;
        const rotateYValue = ((x - centerX) / centerX) * 8;

        setBannerRotateX(rotateXValue);
        setBannerRotateY(rotateYValue);
    };

    const handleBannerMouseLeave = () => {
        setBannerRotateX(0);
        setBannerRotateY(0);
    };

    return (
        <div className="max-w-[1400px] mx-auto px-6">
            <div className="text-center mb-16 relative">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary/20 blur-[120px] w-2/3 h-full rounded-full pointer-events-none"></div>

                <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6 text-white relative z-10">
                    INVESTISSEZ DANS VOTRE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] italic">LIBERTÉ</span>
                </h2>

                <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light relative z-10 mb-12">
                    Reprenez le contrôle de votre temps et de votre croissance avec nos plans partenaires Blue-Chip.
                </p>

                {/* SETUP FEE BANNER WITH 3D EFFECT */}
                <div
                    ref={bannerRef}
                    onMouseMove={handleBannerMouseMove}
                    onMouseLeave={handleBannerMouseLeave}
                    className="relative mb-12 perspective-1000"
                    style={{
                        transform: `perspective(1000px) rotateX(${bannerRotateX}deg) rotateY(${bannerRotateY}deg)`,
                        transition: 'transform 0.1s ease-out',
                    }}
                >
                    <div className="relative bg-gradient-to-br from-[#0a0a0a] to-black rounded-3xl border-2 border-primary/30 p-8 flex flex-col md:flex-row items-center justify-between shadow-[0_0_60px_rgba(212,175,55,0.1)] overflow-hidden hover:border-primary/50 hover:shadow-[0_0_80px_rgba(212,175,55,0.2)] transition-all duration-500 group max-w-5xl mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                        <div className="absolute top-0 right-0 p-4 opacity-5 transition-all group-hover:opacity-10 group-hover:scale-110 duration-700"><Globe size={140} /></div>

                        <div className="relative z-10 flex-1 text-center md:text-left mb-6 md:mb-0">
                            <div className="inline-block px-4 py-2 bg-primary/20 text-primary uppercase text-[10px] font-black tracking-widest rounded-full mb-4 border border-primary/30">Pack Démarrage</div>
                            <h3 className="text-3xl md:text-4xl font-black uppercase text-white mb-3 group-hover:text-primary transition-colors">Création Site Web "Élite"</h3>
                            <p className="text-gray-400 text-sm max-w-xl">
                                Design sur-mesure par nos experts. Intégration de votre identité visuelle. Configuration SEO local Bordeaux. Shooting photo inclus (Offre de lancement).
                            </p>
                        </div>
                        <div className="relative z-10 flex flex-col items-center md:items-end shrink-0">
                            <span className="text-xl text-gray-500 line-through font-bold mb-1">489€</span>
                            <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-primary tracking-tighter group-hover:scale-110 transition-transform">289€</div>
                            <div className="text-[10px] uppercase font-bold text-gray-500 tracking-widest mt-1">Paiement Unique</div>
                            <div className="mt-3 flex items-center gap-2 text-xs text-emerald-400 font-bold uppercase bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                                <Check size={14} /> Satisfait ou Refait
                            </div>
                        </div>
                    </div>
                </div>

                {/* Billing Toggle - MOVED HERE */}
                <div className="inline-flex items-center gap-4 bg-black/60 backdrop-blur-xl border border-white/10 rounded-full p-2 shadow-2xl mb-12 relative z-10">
                    <button
                        onClick={() => setBillingPeriod('monthly')}
                        className={`px-8 py-3 rounded-full font-black uppercase tracking-widest text-xs transition-all ${billingPeriod === 'monthly' ? 'bg-white text-black shadow-lg' : 'text-gray-400 hover:text-white'}`}
                    >
                        Mensuel
                    </button>
                    <button
                        onClick={() => setBillingPeriod('annual')}
                        className={`px-8 py-3 rounded-full font-black uppercase tracking-widest text-xs transition-all relative ${billingPeriod === 'annual' ? 'bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] text-black shadow-lg shadow-primary/50' : 'text-gray-400 hover:text-white'}`}
                    >
                        Annuel
                        <span className="absolute -top-2 -right-2 bg-emerald-500 text-black text-[8px] font-black px-2 py-0.5 rounded-full shadow-lg">
                            -20%
                        </span>
                    </button>
                </div>
            </div>

            {/* 4 PLANS GRID */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch relative z-10">
                <PricingCard
                    title="Basic"
                    monthlyPrice="50"
                    annualPrice="40"
                    description="PROPULSEZ VOTRE IDENTITÉ VISUELLE."
                    icon={Shield}
                    roiText="IMAGE DE MARQUE ELITE"
                    features={["CRÉATION SITE WEB (SETUP INITIAL)", "Système de Réservation", "Maintenance & Hébergement", "Nom de domaine inclus"]}
                    disabledFeatures={["Sarah IA", "Pilotage Compta IA"]}
                    planId="basic"
                    actionLabel="DÉMARRER EN BASIC"
                    billingPeriod={billingPeriod}
                />

                <PricingCard
                    title="Pro"
                    monthlyPrice="109"
                    annualPrice="87"
                    description="SARAH IA À VOTRE SERVICE 24H/24."
                    icon={Zap}
                    roiText="~450€ / MOIS ÉCONOMISÉS"
                    features={["Tout du Pack Basic", "SARAH IA ILLIMITÉE", "Support Technique 24/7", "Maintenance Premium"]}
                    disabledFeatures={["Pilotage Compta IA"]}
                    planId="pro"
                    actionLabel="DÉMARRER EN PRO"
                    theme="pro"
                    billingPeriod={billingPeriod}
                />

                <PricingCard
                    title="Elite"
                    monthlyPrice="199"
                    originalMonthlyPrice="249"
                    annualPrice="159"
                    originalAnnualPrice="199"
                    description="DOMINATION TOTALE ET GESTION AUTOMATISÉE."
                    icon={Crown}
                    roiText="~1200€ / MOIS ÉCONOMISÉS"
                    features={["Tout du Pack Pro", "PILOTAGE COMPTA IA COMPLET", "AUTOMATISATION DES AVIS", "GESTION DE RÉPUTATION AUTO", "Support Dédié"]}
                    planId="elite"
                    actionLabel="DEVENIR ELITE"
                    theme="elite"
                    isPopular={true}
                    billingPeriod={billingPeriod}
                />

                <PricingCard
                    title="Empire"
                    monthlyPrice="279"
                    annualPrice="223"
                    description="POUR LES VISIONNAIRES MULTI-ÉTABLISSEMENTS."
                    icon={TrendingUp}
                    roiText="ROI ILLIMITÉ / MULTI-SIÈGE"
                    features={["TOUT DU PACK ELITE", "GESTION DE RÉSEAUX SOCIAUX", "STRATÉGIE MARKETING DÉDIÉE", "SUPPORT 24/7 VIP", "Rapports Multi-sièges"]}
                    planId="empire"
                    actionLabel="BÂTIR L'EMPIRE"
                    theme="empire"
                    billingPeriod={billingPeriod}
                />
            </div>
        </div>
    );
};

export default PricingSection;
