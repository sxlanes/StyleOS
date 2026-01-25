import { ArrowUpRight, Check, Shield, Zap, Crown, TrendingUp, Globe, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PricingSection = () => {
    const navigate = useNavigate();

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
            <div className="relative mb-20 bg-gradient-to-r from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a] rounded-2xl border border-primary/30 p-8 flex flex-col md:flex-row items-center justify-between shadow-[0_0_40px_rgba(212,175,55,0.1)] overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10"><Globe size={120} /></div>
                <div className="relative z-10 flex-1 text-center md:text-left mb-6 md:mb-0">
                    <div className="inline-block px-3 py-1 bg-primary/20 text-primary uppercase text-[10px] font-black tracking-widest rounded mb-3 border border-primary/20">Pack Démarrage</div>
                    <h3 className="text-2xl md:text-3xl font-black uppercase text-white mb-2">Création Site Web "Élite"</h3>
                    <p className="text-gray-400 text-sm max-w-xl">
                        Design sur-mesure par nos experts. Intégration de votre identité visuelle. Configuration SEO local Bordeaux. Shooting photo inclus (Offre de lancement).
                    </p>
                </div>
                <div className="relative z-10 flex flex-col items-center md:items-end shrink-0">
                    <div className="text-4xl font-black text-white tracking-tighter">289€</div>
                    <div className="text-[10px] uppercase font-bold text-gray-500 tracking-widest">Paiement Unique</div>
                    <div className="mt-2 flex items-center gap-1 text-[10px] text-green-500 font-bold uppercase">
                        <Check size={12} /> Satisfait ou Refait
                    </div>
                </div>
            </div>

            {/* 4 PLANS GRID */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch relative z-10">

                {/* 1. BASIC (50€) */}
                <div className="bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d] border border-white/10 rounded-3xl p-6 flex flex-col hover:border-white/20 transition-all duration-300 group relative overflow-hidden">
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center mb-6 text-white group-hover:border-primary/50 transition-colors">
                        <Shield size={20} strokeWidth={1.5} />
                    </div>

                    <div className="mb-2">
                        <h3 className="text-lg font-bold text-white uppercase tracking-wider">Basic</h3>
                        <p className="text-xs text-gray-400 mt-1 h-8">Axé sur l'identité visuelle.</p>
                    </div>

                    <div className="flex items-baseline gap-1 mb-6">
                        <span className="text-3xl font-black text-white">50€</span>
                        <span className="text-xs font-bold text-gray-500">/mois</span>
                    </div>

                    <ul className="space-y-3 mb-8 flex-1">
                        <li className="flex items-start gap-2 text-xs text-gray-300">
                            <Check className="w-3 h-3 text-primary shrink-0 mt-0.5" /> Création Site Web
                        </li>
                        <li className="flex items-start gap-2 text-xs text-gray-300">
                            <Check className="w-3 h-3 text-primary shrink-0 mt-0.5" /> Système de réservations
                        </li>
                        <li className="flex items-start gap-2 text-xs text-gray-300">
                            <Check className="w-3 h-3 text-primary shrink-0 mt-0.5" /> Hosting Inclus
                        </li>
                    </ul>

                    <button onClick={() => navigate('/plan/basic')} className="w-full py-3 rounded-lg bg-white/5 border border-white/10 text-white font-bold uppercase tracking-widest text-[10px] hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2">
                        Démarrer en Basic <ArrowUpRight size={14} />
                    </button>
                </div>

                {/* 2. PRO (109€) */}
                <div className="bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d] border border-white/10 rounded-3xl p-6 flex flex-col hover:border-white/20 transition-all duration-300 group relative overflow-hidden">
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center mb-6 text-white group-hover:border-primary/50 transition-colors">
                        <Zap size={20} strokeWidth={1.5} />
                    </div>

                    <div className="mb-2">
                        <h3 className="text-lg font-bold text-white uppercase tracking-wider">Pro</h3>
                        <p className="text-xs text-gray-400 mt-1 h-8">SARAH IA disponible 24/7.</p>
                    </div>

                    <div className="flex items-baseline gap-1 mb-2">
                        <span className="text-3xl font-black text-white">109€</span>
                        <span className="text-xs font-bold text-gray-500">/mois</span>
                    </div>

                    <div className="mb-6">
                        <span className="inline-block bg-green-500/10 text-green-500 text-[10px] font-bold px-2 py-1 rounded-full border border-green-500/20">
                            ROI Estimé: ~450€
                        </span>
                    </div>

                    <ul className="space-y-3 mb-8 flex-1">
                        <li className="flex items-start gap-2 text-xs text-gray-300">
                            <Check className="w-3 h-3 text-primary shrink-0 mt-0.5" /> Tout du plan Basic
                        </li>
                        <li className="flex items-start gap-2 text-xs text-gray-300">
                            <Check className="w-3 h-3 text-primary shrink-0 mt-0.5" /> Sarah IA 24/7
                        </li>
                        <li className="flex items-start gap-2 text-xs text-gray-300">
                            <Check className="w-3 h-3 text-primary shrink-0 mt-0.5" /> Marketing Automatisé
                        </li>
                    </ul>

                    <button onClick={() => navigate('/plan/pro')} className="w-full py-3 rounded-lg bg-white/5 border border-white/10 text-white font-bold uppercase tracking-widest text-[10px] hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2">
                        Démarrer en Pro <ArrowUpRight size={14} />
                    </button>
                </div>

                {/* 3. ELITE (199€) */}
                <div className="bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d] border-2 border-primary/50 rounded-3xl p-6 flex flex-col shadow-[0_0_30px_rgba(212,175,55,0.15)] relative z-20 transition-all duration-300 hover:shadow-[0_0_50px_rgba(212,175,55,0.25)] scale-105 md:scale-105 transform">
                    <div className="absolute top-0 inset-x-0 flex justify-center -mt-3">
                        <span className="bg-primary text-black text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">Plus Populaire</span>
                    </div>

                    <div className="w-12 h-12 rounded-full border border-primary/50 flex items-center justify-center mb-6 text-primary mt-2">
                        <Crown size={20} strokeWidth={1.5} />
                    </div>

                    <div className="mb-2">
                        <h3 className="text-lg font-bold text-white uppercase tracking-wider">Elite</h3>
                        <p className="text-xs text-gray-400 mt-1 h-8">L'expérience complète.</p>
                    </div>

                    <div className="flex items-baseline gap-1 mb-6">
                        <span className="text-3xl font-black text-white">199€</span>
                        <span className="text-xs font-bold text-gray-500">/mois</span>
                    </div>

                    <ul className="space-y-3 mb-8 flex-1">
                        <li className="flex items-start gap-2 text-xs text-gray-300">
                            <Check className="w-3 h-3 text-primary shrink-0 mt-0.5" /> Tout du plan Pro
                        </li>
                        <li className="flex items-start gap-2 text-xs text-gray-300">
                            <Check className="w-3 h-3 text-primary shrink-0 mt-0.5" /> Automatisation Avis
                        </li>
                        <li className="flex items-start gap-2 text-xs text-gray-300">
                            <Check className="w-3 h-3 text-primary shrink-0 mt-0.5" /> Gestion Réputation
                        </li>
                    </ul>

                    <button onClick={() => navigate('/plan/elite')} className="w-full py-3 rounded-lg bg-[#b08d55] text-black font-bold uppercase tracking-widest text-[10px] hover:bg-[#c5a065] transition-all flex items-center justify-center gap-2 shadow-lg">
                        Démarrer en Elite <ArrowUpRight size={14} />
                    </button>
                </div>

                {/* 4. EMPIRE (279€) */}
                <div className="bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d] border border-white/10 rounded-3xl p-6 flex flex-col hover:border-white/20 transition-all duration-300 group relative overflow-hidden">
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center mb-6 text-white group-hover:border-primary/50 transition-colors">
                        <TrendingUp size={20} strokeWidth={1.5} />
                    </div>

                    <div className="mb-2">
                        <h3 className="text-lg font-bold text-white uppercase tracking-wider">Empire</h3>
                        <p className="text-xs text-gray-400 mt-1 h-8">Idéal pour le multi-site.</p>
                    </div>

                    <div className="flex items-baseline gap-1 mb-2">
                        <span className="text-gray-500 line-through text-sm font-bold mr-2">399€</span>
                        <span className="text-3xl font-black text-white">279€</span>
                        <span className="text-xs font-bold text-gray-500">/mois</span>
                    </div>

                    <div className="mb-6">
                        <span className="inline-block bg-red-500/10 text-red-500 text-[10px] font-bold px-2 py-1 rounded-full border border-red-500/20">
                            -30% OFF
                        </span>
                    </div>

                    <ul className="space-y-3 mb-8 flex-1">
                        <li className="flex items-start gap-2 text-xs text-gray-300">
                            <Check className="w-3 h-3 text-primary shrink-0 mt-0.5" /> Tout du plan Elite
                        </li>
                        <li className="flex items-start gap-2 text-xs text-gray-300">
                            <Check className="w-3 h-3 text-primary shrink-0 mt-0.5" /> Multi-comptes
                        </li>
                        <li className="flex items-start gap-2 text-xs text-gray-300">
                            <Check className="w-3 h-3 text-primary shrink-0 mt-0.5" /> API Dédiée
                        </li>
                    </ul>

                    <button onClick={() => navigate('/plan/empire')} className="w-full py-3 rounded-lg bg-white/5 border border-white/10 text-white font-bold uppercase tracking-widest text-[10px] hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2">
                        Démarrer en Empire <ArrowUpRight size={14} />
                    </button>
                </div>
            </div>

            <div className="mt-12 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10">
                    <ShieldCheck className="w-4 h-4 text-primary" />
                    <span className="text-[10px] text-gray-400 uppercase tracking-widest">Garantie 30 Jours Satisfait ou Remboursé sur tous les plans</span>
                </div>
            </div>
        </div>
    );
};

export default PricingSection;
