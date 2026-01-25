import { ArrowUpRight, Check, Shield, Zap, Crown, TrendingUp, Globe } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';

const PricingCard = ({ title, price, description, icon: Icon, features, isPopular, isDiscounted, oldPrice, planId, actionLabel, theme }: any) => {
    const navigate = useNavigate();
    const cardRef = useRef<HTMLDivElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (cardRef.current) {
            const rect = cardRef.current.getBoundingClientRect();
            setMousePosition({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            });
        }
    };

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`relative rounded-3xl p-1 bg-gradient-to-b ${isPopular ? 'from-primary/50 to-primary/10' : 'from-white/10 to-transparent'} hover:scale-[1.02] transition-transform duration-300 md:h-full group`}
        >
            {/* Spotlight Effect */}
            <div
                className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                    background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.1), transparent 40%)`
                }}
            />

            <div className={`h-full bg-[#111] rounded-[22px] p-6 flex flex-col relative overflow-hidden ${isPopular ? 'shadow-[0_0_30px_rgba(212,175,55,0.15)]' : ''}`}>
                {/* Popular Badge */}
                {isPopular && (
                    <div className="absolute top-0 inset-x-0 flex justify-center -mt-0 pt-4 pb-2 z-20">
                        <span className="bg-primary text-black text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">Plus Populaire</span>
                    </div>
                )}

                <div className={`w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300 ${isPopular ? 'text-primary border-primary/30 bg-primary/10' : ''}`}>
                    <Icon size={24} strokeWidth={1.5} />
                </div>

                <div className="mb-4">
                    <h3 className="text-xl font-black text-white uppercase tracking-tighter">{title}</h3>
                    <p className="text-xs text-gray-400 mt-1 font-medium min-h-[2.5em]">{description}</p>
                </div>

                <div className="flex items-baseline gap-1 mb-2">
                    {isDiscounted && <span className="text-gray-500 line-through text-sm font-bold mr-2">{oldPrice}€</span>}
                    <span className="text-4xl font-black text-white tracking-tighter">{price}€</span>
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">/mois</span>
                </div>

                {theme === 'pro' && (
                    <div className="mb-6">
                        <span className="inline-block bg-green-500/10 text-green-500 text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded border border-green-500/20">
                            ROI Estimé: ~450€
                        </span>
                    </div>
                )}
                {theme === 'empire' && (
                    <div className="mb-6">
                        <span className="inline-block bg-red-500/10 text-red-500 text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded border border-red-500/20">
                            -30% OFF
                        </span>
                    </div>
                )}
                {!theme && <div className="mb-6 h-6"></div>}

                <ul className="space-y-3 mb-8 flex-1">
                    {features.map((feature: string, i: number) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-gray-300 font-medium">
                            <Check className={`w-3 h-3 shrink-0 mt-0.5 ${isPopular ? 'text-primary' : 'text-gray-500'}`} /> {feature}
                        </li>
                    ))}
                </ul>

                <button
                    onClick={() => navigate(`/plan/${planId}`)}
                    className={`w-full py-3 rounded-xl font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-2 transition-all ${isPopular ? 'bg-primary text-black hover:bg-[#c5a065]' : 'bg-white/10 text-white hover:bg-white hover:text-black'}`}
                >
                    {actionLabel} <ArrowUpRight size={14} />
                </button>
            </div>
        </div>
    );
};

const PricingSection = () => {
    return (
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 relative">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary/20 blur-[100px] w-2/3 h-full rounded-full pointer-events-none"></div>
                <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 text-white relative z-10">
                    Investissez <span className="text-primary italic">Mieux.</span>
                </h2>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light relative z-10">
                    Une structure de coûts pensée pour la rentabilité immédiate.
                </p>
            </div>

            {/* SETUP FEE BANNER */}
            <div className="relative mb-20 bg-[#111] rounded-3xl border border-primary/30 p-8 flex flex-col md:flex-row items-center justify-between shadow-[0_0_40px_rgba(212,175,55,0.05)] overflow-hidden hover:border-primary/50 transition-colors duration-500 group">
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

            {/* 4 PLANS GRID */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch relative z-10">
                <PricingCard
                    title="Basic"
                    price="50"
                    description="Axé sur l'identité visuelle."
                    icon={Shield}
                    features={["Création Site Web", "Système de réservations", "Hosting Inclus"]}
                    planId="basic"
                    actionLabel="Démarrer Basic"
                />

                <PricingCard
                    title="Pro"
                    price="109"
                    description="SARAH IA disponible 24/7."
                    icon={Zap}
                    features={["Tout du plan Basic", "Sarah IA 24/7", "Marketing Automatisé"]}
                    planId="pro"
                    actionLabel="Démarrer Pro"
                    theme="pro"
                />

                <PricingCard
                    title="Elite"
                    price="199"
                    description="L'expérience complète."
                    icon={Crown}
                    features={["Tout du plan Pro", "Automatisation Avis", "Gestion Réputation"]}
                    planId="elite"
                    actionLabel="Démarrer Elite"
                    isPopular={true}
                />

                <PricingCard
                    title="Empire"
                    price="279"
                    oldPrice="399"
                    isDiscounted={true}
                    description="Idéal pour le multi-site."
                    icon={TrendingUp}
                    features={["Tout du plan Elite", "Multi-comptes", "API Dédiée"]}
                    planId="empire"
                    actionLabel="Démarrer Empire"
                    theme="empire"
                />
            </div>
        </div>
    );
};

export default PricingSection;
