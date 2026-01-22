import { Zap, TrendingUp } from 'lucide-react';

const FinancialComparison = () => {
    return (
        <section className="py-24 bg-surface/20 border-y border-glass-border relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none"></div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.4em]">
                        ANALYSE DE RENTABILITÉ
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter text-white">
                        VOTRE <span className="text-primary italic">MACHINE À CASH.</span>
                    </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-4 items-stretch border border-white/10 rounded-[2.5rem] overflow-hidden bg-black/40 backdrop-blur-xl shadow-2xl">
                    {/* Current Method: Planity/Manual */}
                    <div className="p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-between group">
                        <div>
                            <div className="flex items-center gap-3 mb-10 opacity-40">
                                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">Méthode Classique (Planity)</span>
                            </div>

                            <div className="space-y-12">
                                <div>
                                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 mb-4 text-left">Frais Fixes & Commissions</h4>
                                    <div className="text-5xl md:text-7xl font-black text-white/50 tracking-tighter transition-all duration-500 group-hover:text-white/80">
                                        €150<span className="text-xl md:text-2xl font-bold ml-2 text-gray-600">/ mois + %</span>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 mb-4 text-left">Frais par Réservation</h4>
                                    <div className="text-4xl md:text-6xl font-black text-red-500/50 tracking-tighter">
                                        2.5% <span className="text-xl md:text-2xl font-bold ml-2 text-gray-600">Com.</span>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 mb-4 text-left">Liberté d'Action</h4>
                                    <div className="text-2xl font-black text-gray-700 uppercase italic">Zéro Propriété</div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-16 pt-8 border-t border-white/5 opacity-50">
                            <p className="text-xs text-gray-500 font-bold leading-relaxed uppercase tracking-wider">
                                Plus vous gagnez, plus vous payez. Vous restez un locataire de votre propre base client.
                            </p>
                        </div>
                    </div>

                    {/* StyleOS Ownership */}
                    <div className="p-8 md:p-12 bg-primary/5 flex flex-col justify-between relative group hover:bg-primary/10 transition-all duration-700">
                        <div className="absolute top-0 right-0 p-8">
                            <Zap className="w-12 h-12 text-primary opacity-20 animate-pulse" />
                        </div>

                        <div>
                            <div className="flex items-center gap-3 mb-10">
                                <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Modèle StyleOS Elite</span>
                            </div>

                            <div className="space-y-12">
                                <div>
                                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/60 mb-4 text-left">Investissement Fixe</h4>
                                    <div className="text-6xl md:text-8xl font-black text-white tracking-tighter drop-shadow-[0_0_30px_rgba(212,175,55,0.3)] group-hover:scale-105 transition-transform duration-700 origin-left">
                                        €109<span className="text-xl md:text-2xl font-black ml-2 text-primary">/ mois</span>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/60 mb-4 text-left">Commissions de Réservation</h4>
                                    <div className="text-5xl md:text-7xl font-black text-primary tracking-tighter">
                                        0% <span className="text-xl md:text-2xl font-black ml-2 text-white">Net</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 bg-primary/10 p-6 rounded-2xl border border-primary/20 hover:border-primary/50 transition-all">
                                    <div>
                                        <h4 className="text-[9px] font-black uppercase tracking-[0.3em] text-white">Contrôle Total</h4>
                                        <div className="text-xl font-black text-primary uppercase italic tracking-tighter">100% Propriétaire</div>
                                    </div>
                                    <TrendingUp className="w-8 h-8 text-primary ml-auto opacity-50" />
                                </div>
                            </div>
                        </div>

                        <div className="mt-16 pt-8 border-t border-primary/10">
                            <p className="text-xs text-primary/80 font-black leading-relaxed uppercase tracking-wider">
                                Vos profits vous appartiennent. Sarah IA rentabilise l'abonnement en un seul clic de réservation sauvé.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <p className="text-gray-500 text-xs font-black uppercase tracking-[0.5em] opacity-40">Plus qu'un logiciel • Votre premier employé IA</p>
                </div>
            </div>
        </section>
    );
};

export default FinancialComparison;
