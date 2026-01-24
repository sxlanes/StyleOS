import { ArrowRight, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PricingSection = () => {
    const navigate = useNavigate();

    return (
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-24 relative">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary/20 blur-[100px] w-2/3 h-full rounded-full pointer-events-none"></div>
                <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 text-white relative z-10">
                    Investissez <span className="text-primary italic">Mieux.</span>
                </h2>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light relative z-10">
                    Une tarification simple. Rentable dès le 5ème rendez-vous.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 items-stretch relative z-10">
                {/* Starter */}
                <div className="bg-[#0A0A0A] border border-white/10 rounded-[2rem] p-8 flex flex-col hover:border-white/20 transition-all duration-300 relative group">
                    <div className="mb-8">
                        <div className="text-xs font-black uppercase tracking-[0.2em] text-gray-500 mb-4">Starter</div>
                        <div className="flex items-baseline gap-1">
                            <span className="text-4xl font-black text-white">89€</span>
                            <span className="text-sm font-bold text-gray-500">/mois</span>
                        </div>
                    </div>
                    <ul className="space-y-4 mb-8 flex-1">
                        <li className="flex items-start gap-3 text-sm text-gray-300">
                            <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            <span>Site Web "Elite" (Template)</span>
                        </li>
                        <li className="flex items-start gap-3 text-sm text-gray-300">
                            <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            <span>Réservation en ligne</span>
                        </li>
                        <li className="flex items-start gap-3 text-sm text-gray-300">
                            <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            <span>Dashboard basique</span>
                        </li>
                    </ul>
                    <button
                        onClick={() => navigate('/signup')}
                        className="w-full py-4 rounded-xl bg-white/5 border border-white/10 text-white font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all"
                    >
                        Choisir Starter
                    </button>
                </div>

                {/* PRO (Highlighted) */}
                <div className="bg-black border border-primary/50 rounded-[2rem] p-8 flex flex-col shadow-[0_0_50px_rgba(212,175,55,0.15)] relative scale-105 z-10">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-black px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                        Recommandé
                    </div>
                    <div className="mb-8">
                        <div className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-4">Pro StyleOS</div>
                        <div className="flex items-baseline gap-1">
                            <span className="text-5xl font-black text-white">149€</span>
                            <span className="text-sm font-bold text-gray-500">/mois</span>
                        </div>
                        <p className="text-[10px] text-gray-500 mt-2 font-mono">Commission 0% sur les RDV</p>
                    </div>
                    <ul className="space-y-5 mb-10 flex-1">
                        <li className="flex items-start gap-3 text-sm text-white font-bold">
                            <div className="p-1 rounded bg-primary/20 text-primary"><Check className="w-3 h-3" /></div>
                            <span>Sarah IA (Réceptionniste)</span>
                        </li>
                        <li className="flex items-start gap-3 text-sm text-white font-bold">
                            <div className="p-1 rounded bg-primary/20 text-primary"><Check className="w-3 h-3" /></div>
                            <span>Site Web Sur-Mesure</span>
                        </li>
                        <li className="flex items-start gap-3 text-sm text-white font-bold">
                            <div className="p-1 rounded bg-primary/20 text-primary"><Check className="w-3 h-3" /></div>
                            <span>Marketing Automatisé</span>
                        </li>
                        <li className="flex items-start gap-3 text-sm text-gray-400">
                            <Check className="w-4 h-4 text-gray-600 shrink-0 mt-0.5" />
                            <span>Migration Planity Incluse</span>
                        </li>
                    </ul>
                    <button
                        onClick={() => navigate('/signup')}
                        className="w-full py-5 rounded-xl bg-primary text-black font-black uppercase tracking-widest text-xs hover:bg-white transition-all shadow-lg hover:shadow-primary/20 flex items-center justify-center gap-2"
                    >
                        Commencer l'essai <ArrowRight className="w-4 h-4" />
                    </button>
                </div>

                {/* Agency */}
                <div className="bg-[#0A0A0A] border border-white/10 rounded-[2rem] p-8 flex flex-col hover:border-white/20 transition-all duration-300 relative group">
                    <div className="mb-8">
                        <div className="text-xs font-black uppercase tracking-[0.2em] text-gray-500 mb-4">Franchise</div>
                        <div className="flex items-baseline gap-1">
                            <span className="text-4xl font-black text-white">Sur Devis</span>
                        </div>
                    </div>
                    <ul className="space-y-4 mb-8 flex-1">
                        <li className="flex items-start gap-3 text-sm text-gray-300">
                            <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            <span>Multi-comptes</span>
                        </li>
                        <li className="flex items-start gap-3 text-sm text-gray-300">
                            <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            <span>API Dédiée</span>
                        </li>
                        <li className="flex items-start gap-3 text-sm text-gray-300">
                            <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            <span>Support Prioritaire 24/7</span>
                        </li>
                    </ul>
                    <button
                        onClick={() => window.location.href = 'mailto:bordeaux@styleos.fr'}
                        className="w-full py-4 rounded-xl bg-white/5 border border-white/10 text-white font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all"
                    >
                        Contacter
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PricingSection;
