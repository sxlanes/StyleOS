import { ArrowRight, Check, Shield, Zap, Crown, TrendingUp, Globe } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PricingSection = () => {
    const navigate = useNavigate();

    return (
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 relative">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary/20 blur-[100px] w-2/3 h-full rounded-full pointer-events-none"></div>
                <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 text-white relative z-10">
                    Investissez dans votre <span className="text-primary italic">Liberté</span>
                </h2>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light relative z-10">
                    Reprenez le contrôle de votre temps et de votre croissance avec nos plans partenaires Blue-Chip.
                </p>
            </div>

            {/* SETUP FEE BANNER (User liked this) */}
            <div className="relative mb-16 bg-gradient-to-r from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a] rounded-2xl border border-primary/30 p-6 flex flex-col md:flex-row items-center justify-center gap-6 shadow-[0_0_40px_rgba(212,175,55,0.1)] overflow-hidden text-center md:text-left">
                <div className="p-3 bg-primary/10 rounded-full border border-primary/20 text-primary">
                    <Zap size={24} />
                </div>
                <div>
                    <span className="text-primary font-black uppercase tracking-widest text-xs mr-2">Note Stratégique :</span>
                    <span className="text-gray-300 text-sm">Un setup initial de <span className="text-white font-black">289€</span> est requis pour la création sur-mesure de votre infrastructure digitale.</span>
                </div>
            </div>

            {/* 4 PLANS GRID (Matches Uploaded Image) */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch relative z-10">

                {/* 1. BASIC */}
                <div className="bg-[#0A0A0A] border border-white/10 rounded-[1.5rem] p-6 flex flex-col hover:border-white/20 transition-all duration-300 group">
                    <div className="mb-6">
                        <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-4 border border-white/10 text-white"><Shield size={18} /></div>
                        <div className="text-2xl font-black uppercase tracking-tighter text-white mb-2">Basic</div>
                        <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-4 h-8">Propulsez votre identité visuelle.</p>
                        <div className="flex items-baseline gap-1 mb-4">
                            <span className="text-4xl font-black text-white">50€</span>
                            <span className="text-[10px] font-bold text-gray-500">/MOIS</span>
                        </div>
                        <div className="px-2 py-1 bg-[#1a2c20] border border-green-900 rounded text-[9px] font-black text-green-500 uppercase tracking-widest inline-block mb-2">
                            ROI: Image de Marque Elite
                        </div>
                    </div>
                    <ul className="space-y-4 mb-8 flex-1">
                        <li className="flex items-start gap-2 text-[10px] font-bold text-white uppercase tracking-wider">
                            <div className="w-4 h-4 rounded-full bg-white flex items-center justify-center shrink-0 mt-0.5"><Check className="w-2.5 h-2.5 text-black" /></div> Création Site Web (Setup)
                        </li>
                        <li className="flex items-start gap-2 text-xs text-gray-400">
                            <Check className="w-3 h-3 text-gray-600 shrink-0 mt-0.5" /> Système de Réservation
                        </li>
                        <li className="flex items-start gap-2 text-xs text-gray-400">
                            <Check className="w-3 h-3 text-gray-600 shrink-0 mt-0.5" /> Maintenance & Hébergement
                        </li>
                        <li className="flex items-start gap-2 text-xs text-gray-400">
                            <Check className="w-3 h-3 text-gray-600 shrink-0 mt-0.5" /> Nom de domaine inclus
                        </li>
                    </ul>
                    <button onClick={() => navigate('/signup')} className="w-full py-3 rounded-lg bg-white/5 border border-white/10 text-white font-bold uppercase tracking-widest text-[10px] hover:bg-white hover:text-black transition-all">Démarrer en Basic</button>
                </div>

                {/* 2. PRO */}
                <div className="bg-[#0A0A0A] border border-white/10 rounded-[1.5rem] p-6 flex flex-col hover:border-white/20 transition-all duration-300 group">
                    <div className="mb-6">
                        <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-4 border border-white/10 text-white"><Zap size={18} /></div>
                        <div className="text-2xl font-black uppercase tracking-tighter text-white mb-2">Pro</div>
                        <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-4 h-8">Sarah IA à votre service 24h/24.</p>
                        <div className="flex items-baseline gap-1 mb-4">
                            <span className="text-4xl font-black text-white">109€</span>
                            <span className="text-[10px] font-bold text-gray-500">/MOIS</span>
                        </div>
                        <div className="px-2 py-1 bg-[#1a2c20] border border-green-900 rounded text-[9px] font-black text-green-500 uppercase tracking-widest inline-block mb-2">
                            ROI: -450€ / Mois Économisés
                        </div>
                    </div>
                    <ul className="space-y-4 mb-8 flex-1">
                        <li className="flex items-start gap-2 text-[10px] font-bold text-white uppercase tracking-wider">
                            <div className="w-4 h-4 rounded-full bg-white flex items-center justify-center shrink-0 mt-0.5"><Check className="w-2.5 h-2.5 text-black" /></div> Tout du Pack Basic
                        </li>
                        <li className="flex items-start gap-2 text-xs text-white font-bold">
                            <Check className="w-3 h-3 text-white shrink-0 mt-0.5" /> Sarah IA Illimitée
                        </li>
                        <li className="flex items-start gap-2 text-xs text-gray-400">
                            <Check className="w-3 h-3 text-gray-600 shrink-0 mt-0.5" /> Support Technique 24/7
                        </li>
                        <li className="flex items-start gap-2 text-xs text-gray-400">
                            <Check className="w-3 h-3 text-gray-600 shrink-0 mt-0.5" /> Maintenance Premium
                        </li>
                    </ul>
                    <button onClick={() => navigate('/signup')} className="w-full py-3 rounded-lg bg-white/5 border border-white/10 text-white font-bold uppercase tracking-widest text-[10px] hover:bg-white hover:text-black transition-all">Démarrer en Pro</button>
                </div>

                {/* 3. ELITE (Gold) */}
                <div className="bg-black border border-primary rounded-[1.5rem] p-6 flex flex-col shadow-[0_0_50px_rgba(212,175,55,0.15)] relative scale-105 z-20">
                    <div className="absolute top-4 right-4 bg-primary text-black px-2 py-1 rounded text-[8px] font-black uppercase tracking-widest">
                        Plus Populaire
                    </div>
                    <div className="mb-6">
                        <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mb-4 border border-primary/50 text-primary"><Crown size={18} /></div>
                        <div className="text-2xl font-black uppercase tracking-tighter text-white mb-2">Elite</div>
                        <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-4 h-8 text-primary/80">Domination totale et gestion automatisée.</p>
                        <div className="flex items-baseline gap-1 mb-4">
                            <span className="text-5xl font-black text-white">199€</span>
                            <span className="text-[10px] font-bold text-gray-500">/MOIS</span>
                        </div>
                        <div className="px-2 py-1 bg-[#1a2c20] border border-green-900 rounded text-[9px] font-black text-green-500 uppercase tracking-widest inline-block mb-2">
                            ROI: -1200€ / Mois Économisés
                        </div>
                    </div>
                    <ul className="space-y-4 mb-8 flex-1">
                        <li className="flex items-start gap-2 text-[10px] font-bold text-white uppercase tracking-wider">
                            <div className="w-4 h-4 rounded-full bg-primary flex items-center justify-center shrink-0 mt-0.5"><Check className="w-2.5 h-2.5 text-black" /></div> Tout du Pack Pro
                        </li>
                        <li className="flex items-start gap-2 text-xs text-white font-bold">
                            <Check className="w-3 h-3 text-primary shrink-0 mt-0.5" /> Pilotage Compta IA Complet
                        </li>
                        <li className="flex items-start gap-2 text-xs text-white font-bold">
                            <Check className="w-3 h-3 text-primary shrink-0 mt-0.5" /> Automatisation des Avis
                        </li>
                        <li className="flex items-start gap-2 text-xs text-white font-bold">
                            <Check className="w-3 h-3 text-primary shrink-0 mt-0.5" /> Gestion de Réputation Auto
                        </li>
                        <li className="flex items-start gap-2 text-xs text-white font-bold">
                            <Check className="w-3 h-3 text-primary shrink-0 mt-0.5" /> Support Dédié
                        </li>
                    </ul>
                    <button onClick={() => navigate('/signup')} className="w-full py-4 rounded-lg bg-primary text-black font-black uppercase tracking-widest text-[10px] hover:bg-white transition-all shadow-lg hover:shadow-primary/20 flex items-center justify-center gap-2">
                        Devenir Elite <ArrowRight className="w-3 h-3" />
                    </button>
                </div>

                {/* 4. EMPIRE */}
                <div className="bg-[#0A0A0A] border border-white/10 rounded-[1.5rem] p-6 flex flex-col hover:border-white/20 transition-all duration-300 group relative overflow-hidden">
                    <div className="absolute top-4 right-4 bg-red-600 text-white px-2 py-1 rounded text-[8px] font-black uppercase tracking-widest">
                        -30% Off Temporaire
                    </div>
                    <div className="mb-6">
                        <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-4 border border-white/10 text-white"><TrendingUp size={18} /></div>
                        <div className="text-2xl font-black uppercase tracking-tighter text-white mb-2">Empire</div>
                        <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-4 h-8">Pour les visionnaires multi-établissements.</p>
                        <div className="flex items-baseline gap-2 mb-4">
                            <span className="text-lg font-bold text-gray-600 line-through decoration-red-500">399€</span>
                            <span className="text-4xl font-black text-white">279€</span>
                            <span className="text-[10px] font-bold text-gray-500">/MOIS</span>
                        </div>
                        <div className="px-2 py-1 bg-[#1a2c20] border border-green-900 rounded text-[9px] font-black text-green-500 uppercase tracking-widest inline-block mb-2">
                            ROI: ROI Illimité / Multi-Siège
                        </div>
                    </div>
                    <ul className="space-y-4 mb-8 flex-1">
                        <li className="flex items-start gap-2 text-[10px] font-bold text-white uppercase tracking-wider">
                            <div className="w-4 h-4 rounded-full bg-white flex items-center justify-center shrink-0 mt-0.5"><Check className="w-2.5 h-2.5 text-black" /></div> Tout du Pack Elite
                        </li>
                        <li className="flex items-start gap-2 text-xs text-white font-bold">
                            <Check className="w-3 h-3 text-white shrink-0 mt-0.5" /> Gestion de Réseaux Sociaux
                        </li>
                        <li className="flex items-start gap-2 text-xs text-white font-bold">
                            <Check className="w-3 h-3 text-white shrink-0 mt-0.5" /> Stratégie Marketing Dédiée
                        </li>
                        <li className="flex items-start gap-2 text-xs text-white font-bold">
                            <Check className="w-3 h-3 text-white shrink-0 mt-0.5" /> Support 24/7 VIP
                        </li>
                        <li className="flex items-start gap-2 text-xs text-white font-bold">
                            <Check className="w-3 h-3 text-white shrink-0 mt-0.5" /> Rapports Multi-Sièges
                        </li>
                    </ul>
                    <button onClick={() => navigate('/signup')} className="w-full py-3 rounded-lg bg-white/5 border border-white/10 text-white font-bold uppercase tracking-widest text-[10px] hover:bg-white hover:text-black transition-all">Bâtir l'Empire</button>
                </div>
            </div>

        </div>
    );
};

export default PricingSection;
