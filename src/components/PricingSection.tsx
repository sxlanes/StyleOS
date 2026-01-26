import { ArrowUpRight, Check, Shield, Zap, Crown, TrendingUp, Globe, XCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useRef, useState, type MouseEvent } from 'react';

const PricingCard = ({ title, monthlyPrice, annualPrice, originalMonthlyPrice, originalAnnualPrice, description, icon: Icon, features, isPopular, planId, actionLabel, roiText, disabledFeatures = [], billingPeriod }: any) => {
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

    const displayPrice = billingPeriod === 'annual' ? annualPrice : monthlyPrice;
    const originalPrice = billingPeriod === 'annual' ? originalAnnualPrice : originalMonthlyPrice;

    // Calculate savings based on annual discount vs monthly
    const savings = billingPeriod === 'annual' ? Math.round(monthlyPrice * 12 - annualPrice * 12) : 0;

    const handleCardClick = () => {
        navigate(`/plan/${planId}`);
    };

    // Theme Configuration
    const getThemeStyles = () => {
        switch (planId) {
            case 'basic': return {
                border: 'border-emerald-500/30',
                glow: 'shadow-[0_0_30px_rgba(16,185,129,0.1)]',
                iconBg: 'bg-emerald-500/10',
                iconColor: 'text-emerald-400',
                button: 'bg-gradient-to-r from-emerald-900/40 to-emerald-800/40 border border-emerald-500/30 text-emerald-100 hover:bg-emerald-500/20',
                check: 'bg-emerald-500/20 text-emerald-300'
            };
            case 'pro': return {
                border: 'border-blue-500/30',
                glow: 'shadow-[0_0_30px_rgba(59,130,246,0.1)]',
                iconBg: 'bg-blue-500/10',
                iconColor: 'text-blue-400',
                button: 'bg-gradient-to-r from-blue-900/40 to-blue-800/40 border border-blue-500/30 text-blue-100 hover:bg-blue-500/20',
                check: 'bg-blue-500/20 text-blue-300'
            };
            case 'elite': return {
                border: 'border-[#D4AF37]/50',
                glow: 'shadow-[0_0_40px_rgba(212,175,55,0.2)]',
                iconBg: 'bg-[#D4AF37]/10',
                iconColor: 'text-[#D4AF37]',
                button: 'bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] text-black font-black',
                check: 'bg-[#D4AF37] text-black'
            };
            case 'empire': return {
                border: 'border-rose-500/40',
                glow: 'shadow-[0_0_40px_rgba(244,63,94,0.2)]',
                iconBg: 'bg-rose-500/10',
                iconColor: 'text-rose-400',
                button: 'bg-gradient-to-r from-rose-900/40 to-rose-800/40 border border-rose-500/30 text-rose-100 hover:bg-rose-500/20',
                check: 'bg-rose-500/20 text-rose-300'
            };
            default: return {
                border: 'border-white/10',
                glow: '',
                iconBg: 'bg-white/5',
                iconColor: 'text-white',
                button: 'bg-white/10 text-white',
                check: 'bg-white/10'
            };
        }
    };

    const s = getThemeStyles();

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
            <div className={`relative rounded-3xl p-[1px] transition-all duration-500 hover:scale-[1.02] group h-full flex flex-col bg-black ${s.glow}`}>
                {/* Border Gradient */}
                <div className={`absolute inset-0 rounded-3xl border ${s.border} pointer-events-none`}></div>

                {/* Animated Glare Effect */}
                <div
                    className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl overflow-hidden z-40"
                    style={{
                        background: `radial-gradient(circle 200px at ${glareX}% ${glareY}%, rgba(255,255,255,0.1) 0%, transparent 70%)`
                    }}
                />

                <div className={`h-full rounded-[23px] p-8 flex flex-col relative overflow-hidden bg-gradient-to-b from-[#0a0a0a] to-[#050505]`}>

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
                            <span className="bg-red-500 text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-lg">
                                -{savings}€/an
                            </span>
                        </div>
                    )}

                    {/* Header Section */}
                    <div className="mb-8 relative z-10">
                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm transition-all duration-300 ${s.iconBg} ${s.iconColor} border border-white/5`}>
                            <Icon size={28} strokeWidth={1.5} />
                        </div>

                        <h3 className={`text-3xl font-black uppercase tracking-tighter mb-3 ${planId === 'elite' ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB]' : 'text-white'}`}>
                            {title}
                        </h3>
                        <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest leading-relaxed">{description}</p>
                    </div>

                    {/* Price Section */}
                    <div className="mb-8 relative z-10">
                        <div className="flex items-end gap-1 leading-none mb-4">
                            <div className="flex flex-col items-end mr-2 mb-1">
                                {originalPrice && (
                                    <span className="text-xl text-red-500 line-through font-bold decoration-red-500/50">{originalPrice}€</span>
                                )}
                                {billingPeriod === 'annual' && !originalPrice && (
                                    <span className="text-xl text-red-500 line-through font-bold decoration-red-500/50 mb-1">{monthlyPrice}€</span>
                                )}
                            </div>

                            <span className={`text-6xl font-black tracking-tighter ${planId === 'elite' ? 'text-[#D4AF37]' : planId === 'empire' ? 'text-rose-400' : 'text-white'}`}>
                                {displayPrice}
                            </span>
                            <div className="flex flex-col pb-2">
                                <span className={`text-2xl font-bold ${planId === 'elite' ? 'text-[#D4AF37]' : 'text-gray-400'}`}>€</span>
                                <span className="text-[9px] font-bold text-gray-600 uppercase tracking-wider">/mois</span>
                            </div>
                        </div>

                        {/* ROI Pill */}
                        {roiText && (
                            <div className="inline-block bg-white/5 border border-white/10 rounded-full px-4 py-2">
                                <span className={`text-[9px] font-black uppercase tracking-widest ${s.iconColor}`}>
                                    💎 {roiText}
                                </span>
                            </div>
                        )}
                    </div>

                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"></div>

                    {/* Features */}
                    <ul className="space-y-4 mb-10 flex-1 relative z-10">
                        {features.map((feature: any, i: number) => {
                            const isBold = feature.includes('SARAH') || feature.includes('SITE WEB') || feature.includes('COMPTA');
                            return (
                                <li key={i} className="flex items-start gap-3 text-sm text-gray-400 font-medium group/item hover:text-gray-200 transition-colors">
                                    <div className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 shadow-sm transition-all ${s.check}`}>
                                        <Check size={12} strokeWidth={4} />
                                    </div>
                                    <span className={isBold ? 'text-white font-bold' : ''}>{feature}</span>
                                </li>
                            );
                        })}
                        {disabledFeatures.map((feature: string, i: number) => (
                            <li key={`disabled-${i}`} className="flex items-start gap-3 text-sm text-gray-600 font-medium opacity-80">
                                <div className="w-5 h-5 rounded-md border border-white/5 flex items-center justify-center shrink-0 mt-0.5 text-gray-700 bg-black/50">
                                    <XCircle size={12} />
                                </div>
                                <span className="line-through decoration-gray-800 text-gray-600">{feature}</span>
                            </li>
                        ))}
                    </ul>

                    <button
                        onClick={() => navigate(`/plan/${planId}`)}
                        className={`w-full py-4 rounded-xl font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-3 transition-all relative overflow-hidden group-hover:shadow-lg ${s.button}`}
                    >
                        {actionLabel} <ArrowUpRight size={14} />
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
                    disabledFeatures={["Gestion Réseaux Sociaux", "Campagnes Marketing"]}
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
