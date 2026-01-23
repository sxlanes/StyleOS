import { Zap, TrendingUp, CheckCircle2, AlertCircle } from 'lucide-react';

const FinancialComparison = () => {
    return (
        <section id="comparison" className="py-16 md:py-20 bg-black relative overflow-hidden h-auto lg:h-screen lg:min-h-[600px] flex items-center">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.05),transparent_70%)] pointer-events-none"></div>

            <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
                <div className="text-center mb-10">
                    <div className="inline-block mb-4 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[9px] font-black uppercase tracking-[0.3em]">
                        ANALYSE DE RENTABILITÉ
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tighter text-white leading-none">
                        VOTRE <span className="text-primary italic">MACHINE À CASH.</span>
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto text-sm font-medium">
                        Arrêtez de payer pour être locataire de votre base client.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-6 items-stretch">
                    {/* Current Method: Planity/Manual */}
                    <div className="relative p-5 rounded-3xl border border-white/5 bg-surface/5 backdrop-blur-sm flex flex-col justify-between group overflow-hidden transition-all duration-700 hover:bg-surface/10 min-h-[500px]">
                        <div className="absolute -top-12 -right-12 w-24 h-24 bg-red-500/5 rounded-full blur-2xl group-hover:bg-red-500/10 transition-colors"></div>

                        <div>
                            <div className="flex items-center gap-2 mb-4 opacity-70">
                                <AlertCircle className="w-3 h-3 text-red-500/50" />
                                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-500 italic">Modèle Classique</span>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-600 mb-1">Frais Mensuels</h4>
                                    <div className="text-3xl font-black text-white/60 tracking-tighter transition-all duration-700 group-hover:text-white/80">
                                        €150<span className="text-xs font-bold ml-1 text-gray-600">/ mois</span>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-600 mb-1">Prélèvement Variable</h4>
                                    <div className="text-2xl font-black text-red-500/60 tracking-tighter group-hover:text-red-500/80 transition-all">
                                        2.5% <span className="text-xs font-bold ml-1 text-gray-600">Commission</span>
                                    </div>
                                </div>

                                <div className="pt-3 border-t border-white/5">
                                    <div className="text-xs font-black text-gray-600 uppercase tracking-tight flex items-center gap-2">
                                        <div className="w-1 h-1 rounded-full bg-gray-600"></div>
                                        AUCUNE PROPRIÉTÉ
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* StyleOS Ownership */}
                    <div className="relative p-5 rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-black to-black backdrop-blur-xl flex flex-col justify-between group shadow-[0_0_50px_rgba(212,175,55,0.1)] transition-all duration-700 hover:shadow-[0_0_80px_rgba(212,175,55,0.2)] hover:border-primary/50 min-h-[500px]">
                        <div className="absolute top-5 right-5">
                            <Zap className="w-5 h-5 text-primary animate-pulse opacity-70" />
                        </div>

                        <div>
                            <div className="flex items-center gap-2 mb-6">
                                <CheckCircle2 className="w-3 h-3 text-primary" />
                                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-primary">Modèle StyleOS Elite</span>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-[9px] font-black uppercase tracking-[0.2em] text-primary/60 mb-1">Investissement Fixe</h4>
                                    <div className="text-4xl font-black text-white tracking-tighter drop-shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                                        €109<span className="text-xs font-black ml-1 text-primary">/ mois</span>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-[9px] font-black uppercase tracking-[0.2em] text-primary/60 mb-1">Frais de Réservation</h4>
                                    <div className="text-3xl font-black text-primary tracking-tighter">
                                        0% <span className="text-xs font-black ml-1 text-white italic">NET</span>
                                    </div>
                                </div>

                                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 group-hover:border-primary/20 transition-all flex items-center justify-between">
                                    <div className="text-xs font-black text-white uppercase italic tracking-tighter">100% PROPRIÉTAIRE</div>
                                    <TrendingUp className="w-3 h-3 text-primary" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 flex items-center justify-center gap-4 md:gap-8 opacity-50">
                    <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-3 h-3 text-primary" />
                        <span className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-400">Sans Engagement</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-3 h-3 text-primary" />
                        <span className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-400">Mise en place 48h</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-3 h-3 text-primary" />
                        <span className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-400">Support 24/7</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FinancialComparison;

