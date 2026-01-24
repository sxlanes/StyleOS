import { ArrowRight, Check, ShieldCheck, Globe, CheckCircle2, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PricingSection = () => {
    const navigate = useNavigate();

    return (
        <div className="max-w-7xl mx-auto px-6 relative">
            <style>{`
                @keyframes shimmer {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
                .animate-shimmer-card {
                    animation: shimmer 2s infinite;
                }
            `}</style>

            <div className="text-center mb-16 relative">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary/20 blur-[100px] w-2/3 h-full rounded-full pointer-events-none"></div>
                <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 text-white relative z-10">
                    Investissez <span className="text-primary italic">Mieux.</span>
                </h2>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light relative z-10">
                    Une structure de coûts pensée pour la rentabilité immédiate.
                </p>
            </div>

            {/* SETUP FEE BANNER (Keep as requested) */}
            <div className="relative mb-20 bg-gradient-to-r from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a] rounded-2xl border border-primary/30 p-8 flex flex-col md:flex-row items-center justify-between shadow-[0_0_40px_rgba(212,175,55,0.1)] overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10"><Globe size={120} /></div>
                {/* Shimmer effect on Banner too */}
                <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer-card bg-gradient-to-r from-transparent via-white/5 to-transparent z-0 pointer-events-none" />

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

            {/* 4 REFLECTIVE CARDS */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch relative z-10">

                {/* 1. BASIC (50€) */}
                <div className="relative group rounded-[2rem] bg-black border border-white/10 overflow-hidden hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-white/5 flex flex-col">
                    <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer-card bg-gradient-to-r from-transparent via-white/10 to-transparent z-10 pointer-events-none" />

                    <div className="p-8 relative z-20 flex flex-col h-full">
                        <div className="mb-6">
                            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-500 mb-2">Basic</h3>
                            <div className="flex items-baseline gap-1">
                                <span className="text-4xl font-black text-white tracking-tighter">50€</span>
                                <span className="text-xs font-bold text-gray-500">/mois</span>
                            </div>
                        </div>
                        <div className="space-y-4 mb-8 flex-1">
                            <div className="flex gap-3 text-xs text-gray-400">
                                <CheckCircle2 className="w-4 h-4 text-white shrink-0" /> <span>Site Web "Template"</span>
                            </div>
                            <div className="flex gap-3 text-xs text-gray-400">
                                <CheckCircle2 className="w-4 h-4 text-white shrink-0" /> <span>Réservation en ligne</span>
                            </div>
                            <div className="flex gap-3 text-xs text-gray-400">
                                <CheckCircle2 className="w-4 h-4 text-white shrink-0" /> <span>Dashboard Basique</span>
                            </div>
                        </div>
                        <button onClick={() => navigate('/signup')} className="w-full py-4 rounded-xl bg-white/5 border border-white/10 text-white text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                            Choisir
                        </button>
                    </div>
                </div>

                {/* 2. PERFORMANCE (109€) */}
                <div className="relative group rounded-[2rem] bg-black border border-white/10 overflow-hidden hover:border-blue-400/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] flex flex-col">
                    <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer-card bg-gradient-to-r from-transparent via-blue-400/10 to-transparent z-10 pointer-events-none" />

                    <div className="p-8 relative z-20 flex flex-col h-full">
                        <div className="mb-6">
                            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-blue-400 mb-2">Performance</h3>
                            <div className="flex items-baseline gap-1">
                                <span className="text-4xl font-black text-white tracking-tighter">109€</span>
                                <span className="text-xs font-bold text-gray-500">/mois</span>
                            </div>
                        </div>
                        <div className="space-y-4 mb-8 flex-1">
                            <div className="flex gap-3 text-xs text-gray-300 font-bold">
                                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" /> <span>Marketing Automatisé</span>
                            </div>
                            <div className="flex gap-3 text-xs text-gray-400">
                                <CheckCircle2 className="w-4 h-4 text-gray-600 shrink-0" /> <span>Tout du plan Basic</span>
                            </div>
                            <div className="flex gap-3 text-xs text-gray-400">
                                <CheckCircle2 className="w-4 h-4 text-gray-600 shrink-0" /> <span>Support Prioritaire</span>
                            </div>
                        </div>
                        <button onClick={() => navigate('/signup')} className="w-full py-4 rounded-xl bg-white/5 border border-white/10 text-white text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                            Choisir
                        </button>
                    </div>
                </div>

                {/* 3. DOMINANCE / PRO (189€) - GOLD */}
                <div className="relative group rounded-[2rem] bg-[#050505] border border-primary/40 overflow-hidden scale-105 shadow-[0_0_40px_rgba(212,175,55,0.15)] hover:shadow-[0_0_60px_rgba(212,175,55,0.3)] transition-all duration-500 z-20 flex flex-col">
                    <div className="absolute top-0 right-0 bg-primary text-black px-3 py-1.5 rounded-bl-xl text-[9px] font-black uppercase tracking-widest z-30">
                        Populaire
                    </div>
                    {/* Golden Glow */}
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent opacity-50" />
                    {/* Strong Shimmer */}
                    <div className="absolute inset-0 -translate-x-full animate-[shimmer_3s_infinite] bg-gradient-to-r from-transparent via-primary/20 to-transparent z-10 pointer-events-none" />

                    <div className="p-8 relative z-20 flex flex-col h-full">
                        <div className="mb-6">
                            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-2">Dominance</h3>
                            <div className="flex items-baseline gap-1">
                                <span className="text-5xl font-black text-white tracking-tighter">189€</span>
                                <span className="text-xs font-bold text-gray-500">/mois</span>
                            </div>
                        </div>
                        <div className="space-y-4 mb-8 flex-1">
                            <div className="flex gap-3 text-xs text-white font-bold">
                                <Star className="w-4 h-4 text-primary shrink-0 fill-current" /> <span>Sarah IA (Illimité)</span>
                            </div>
                            <div className="flex gap-3 text-xs text-white font-bold">
                                <Star className="w-4 h-4 text-primary shrink-0 fill-current" /> <span>Site Web Sur-Mesure</span>
                            </div>
                            <div className="flex gap-3 text-xs text-white font-bold">
                                <Star className="w-4 h-4 text-primary shrink-0 fill-current" /> <span>Zero Commission</span>
                            </div>
                            <div className="flex gap-3 text-xs text-gray-400">
                                <CheckCircle2 className="w-4 h-4 text-primary/50 shrink-0" /> <span>Tout du plan Performance</span>
                            </div>
                        </div>
                        <button onClick={() => navigate('/signup')} className="w-full py-5 rounded-xl bg-primary text-black text-[11px] font-black uppercase tracking-widest hover:bg-white transition-all shadow-lg hover:shadow-primary/20 flex items-center justify-center gap-2">
                            Essai Gratuit <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* 4. FRANCHISE */}
                <div className="relative group rounded-[2rem] bg-black border border-white/10 overflow-hidden hover:border-white/30 transition-all duration-500 flex flex-col">
                    <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer-card bg-gradient-to-r from-transparent via-white/10 to-transparent z-10 pointer-events-none" />

                    <div className="p-8 relative z-20 flex flex-col h-full">
                        <div className="mb-6">
                            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-500 mb-2">Franchise</h3>
                            <div className="flex items-baseline gap-1">
                                <span className="text-2xl font-black text-white tracking-tighter">Sur Devis</span>
                            </div>
                        </div>
                        <div className="space-y-4 mb-8 flex-1">
                            <div className="flex gap-3 text-xs text-gray-400">
                                <CheckCircle2 className="w-4 h-4 text-white shrink-0" /> <span>Multi-comptes</span>
                            </div>
                            <div className="flex gap-3 text-xs text-gray-400">
                                <CheckCircle2 className="w-4 h-4 text-white shrink-0" /> <span>API Dédiée</span>
                            </div>
                            <div className="flex gap-3 text-xs text-gray-400">
                                <CheckCircle2 className="w-4 h-4 text-white shrink-0" /> <span>Marque Blanche</span>
                            </div>
                        </div>
                        <button onClick={() => window.location.href = 'mailto:bordeaux@styleos.fr'} className="w-full py-4 rounded-xl bg-white/5 border border-white/10 text-white text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                            Contacter
                        </button>
                    </div>
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
