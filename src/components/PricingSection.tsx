import { ArrowRight, Check, ShieldCheck, Globe, Star } from 'lucide-react';
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

            {/* 4 PLANS GRID - SANS SHIMMER (Clean Style) */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch relative z-10">

                {/* 1. BASIC (50€) */}
                <div className="bg-[#0A0A0A] border border-white/10 rounded-[1.5rem] p-6 flex flex-col hover:border-white/20 transition-all duration-300 group">
                    <div className="mb-6">
                        <div className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-3">Basic</div>
                        <div className="flex items-baseline gap-1">
                            <span className="text-3xl font-black text-white">50€</span>
                            <span className="text-xs font-bold text-gray-500">/mois</span>
                        </div>
                    </div>
                    <ul className="space-y-3 mb-6 flex-1">
                        <li className="flex items-start gap-2 text-xs text-gray-300">
                            <Check className="w-3 h-3 text-primary shrink-0 mt-0.5" /> Site Web "Template"
                        </li>
                        <li className="flex items-start gap-2 text-xs text-gray-300">
                            <Check className="w-3 h-3 text-primary shrink-0 mt-0.5" /> Réservation en ligne
                        </li>
                        <li className="flex items-start gap-2 text-xs text-gray-300">
                            <Check className="w-3 h-3 text-primary shrink-0 mt-0.5" /> Dashboard Basique
                        </li>
                    </ul>
                    <button onClick={() => navigate('/plan/basic')} className="w-full py-3 rounded-lg bg-white/5 border border-white/10 text-white font-bold uppercase tracking-widest text-[10px] hover:bg-white hover:text-black transition-all">Voir Détails</button>
                </div>

                {/* 2. PERFORMANCE (109€) */}
                <div className="bg-[#0A0A0A] border border-white/10 rounded-[1.5rem] p-6 flex flex-col hover:border-white/20 transition-all duration-300 group">
                    <div className="mb-6">
                        <div className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400 mb-3">Performance</div>
                        <div className="flex items-baseline gap-1">
                            <span className="text-3xl font-black text-white">109€</span>
                            <span className="text-xs font-bold text-gray-500">/mois</span>
                        </div>
                    </div>
                    <ul className="space-y-3 mb-6 flex-1">
                        <li className="flex items-start gap-2 text-xs text-white font-bold">
                            <Check className="w-3 h-3 text-blue-400 shrink-0 mt-0.5" /> Marketing Automatisé
                        </li>
                        <li className="flex items-start gap-2 text-xs text-gray-300">
                            <Check className="w-3 h-3 text-gray-500 shrink-0 mt-0.5" /> Tout du plan Basic
                        </li>
                        <li className="flex items-start gap-2 text-xs text-gray-300">
                            <Check className="w-3 h-3 text-gray-500 shrink-0 mt-0.5" /> Support Prioritaire
                        </li>
                    </ul>
                    <button onClick={() => navigate('/plan/pro')} className="w-full py-3 rounded-lg bg-white/5 border border-white/10 text-white font-bold uppercase tracking-widest text-[10px] hover:bg-white hover:text-black transition-all">Voir Détails</button>
                </div>

                {/* 3. DOMINANCE / PRO (189€) - GOLD */}
                <div className="bg-black border border-primary/50 rounded-[1.5rem] p-6 flex flex-col shadow-[0_0_30px_rgba(212,175,55,0.15)] relative scale-105 z-20 transition-all duration-500 hover:shadow-[0_0_50px_rgba(212,175,55,0.3)]">
                    <div className="absolute top-0 right-0 bg-primary text-black px-2 py-1 rounded-bl-lg text-[8px] font-black uppercase tracking-widest">
                        Recommandé
                    </div>
                    <div className="mb-6">
                        <div className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-3">Dominance</div>
                        <div className="flex items-baseline gap-1">
                            <span className="text-4xl font-black text-white">189€</span>
                            <span className="text-xs font-bold text-gray-500">/mois</span>
                        </div>
                    </div>
                    <ul className="space-y-3 mb-8 flex-1">
                        <li className="flex items-start gap-2 text-xs text-white font-bold">
                            <Star className="w-3 h-3 text-primary shrink-0 mt-0.5 fill-current" /> Sarah IA (Illimité)
                        </li>
                        <li className="flex items-start gap-2 text-xs text-white font-bold">
                            <Star className="w-3 h-3 text-primary shrink-0 mt-0.5 fill-current" /> Site Web Sur-Mesure
                        </li>
                        <li className="flex items-start gap-2 text-xs text-white font-bold">
                            <Star className="w-3 h-3 text-primary shrink-0 mt-0.5 fill-current" /> Zero Commission
                        </li>
                    </ul>
                    <button onClick={() => navigate('/plan/elite')} className="w-full py-4 rounded-lg bg-primary text-black font-black uppercase tracking-widest text-[10px] hover:bg-white transition-all shadow-lg hover:shadow-primary/20 flex items-center justify-center gap-2">
                        Essai Gratuit <ArrowRight className="w-3 h-3" />
                    </button>
                </div>

                {/* 4. FRANCHISE */}
                <div className="bg-[#0A0A0A] border border-white/10 rounded-[1.5rem] p-6 flex flex-col hover:border-white/20 transition-all duration-300 group">
                    <div className="mb-6">
                        <div className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-3">Franchise</div>
                        <div className="flex items-baseline gap-1">
                            <span className="text-2xl font-black text-white">Sur Devis</span>
                        </div>
                    </div>
                    <ul className="space-y-3 mb-6 flex-1">
                        <li className="flex items-start gap-2 text-xs text-gray-300">
                            <Check className="w-3 h-3 text-primary shrink-0 mt-0.5" /> Multi-comptes
                        </li>
                        <li className="flex items-start gap-2 text-xs text-gray-300">
                            <Check className="w-3 h-3 text-primary shrink-0 mt-0.5" /> API Dédiée
                        </li>
                        <li className="flex items-start gap-2 text-xs text-gray-300">
                            <Check className="w-3 h-3 text-primary shrink-0 mt-0.5" /> Marque Blanche
                        </li>
                    </ul>
                    <button onClick={() => window.location.href = 'mailto:bordeaux@styleos.fr'} className="w-full py-3 rounded-lg bg-white/5 border border-white/10 text-white font-bold uppercase tracking-widest text-[10px] hover:bg-white hover:text-black transition-all">Contacter</button>
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
