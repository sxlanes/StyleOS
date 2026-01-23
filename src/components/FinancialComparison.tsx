import { Zap, TrendingUp, CheckCircle2, AlertCircle } from 'lucide-react';

const FinancialComparison = () => {
    return (
        <section id="comparison" className="py-32 bg-black relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.05),transparent_70%)] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.4em]">
                        ANALYSE DE RENTABILITÉ
                    </div>
                    <h2 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter text-white leading-none">
                        VOTRE <span className="text-primary italic">MACHINE À CASH.</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Arrêtez de payer pour être locataire de votre base client. Comparez l'impact réel sur votre trésorerie.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 items-stretch">
                    {/* Current Method: Planity/Manual */}
                    <div className="relative p-8 md:p-12 rounded-[3rem] border border-white/5 bg-surface/5 backdrop-blur-sm flex flex-col justify-between group overflow-hidden transition-all duration-700 hover:bg-surface/10">
                        <div className="absolute -top-12 -right-12 w-40 h-40 bg-red-500/5 rounded-full blur-3xl group-hover:bg-red-500/10 transition-colors"></div>

                        <div>
                            <div className="flex items-center gap-3 mb-12">
                                <AlertCircle className="w-5 h-5 text-red-500/50" />
                                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500 italic">Modèle Existant (Planity)</span>
                            </div>

                            <div className="space-y-12">
                                <div>
                                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 mb-6 flex items-center gap-2">
                                        <div className="w-4 h-px bg-gray-500/30"></div> Frais Mensuels
                                    </h4>
                                    <div className="text-5xl md:text-7xl font-black text-white/30 tracking-tighter transition-all duration-700 group-hover:text-white/50">
                                        €150<span className="text-xl md:text-2xl font-bold ml-2 text-gray-600">/ mois</span>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 mb-6 flex items-center gap-2">
                                        <div className="w-4 h-px bg-gray-500/30"></div> Prélèvement Variable
                                    </h4>
                                    <div className="text-4xl md:text-6xl font-black text-red-500/20 tracking-tighter group-hover:text-red-500/40 transition-all">
                                        2.5% <span className="text-xl md:text-2xl font-bold ml-2 text-gray-600">Commission</span>
                                    </div>
                                    <p className="mt-4 text-xs font-medium text-gray-600 uppercase tracking-widest italic">Plus vous travaillez, plus ils gagnent.</p>
                                </div>

                                <div className="pt-8 border-t border-white/5">
                                    <div className="text-xl font-black text-gray-700 uppercase tracking-tight flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-gray-700"></div>
                                        AUCUNE PROPRIÉTÉ
                                    </div>
                                    <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                                        Vous payez pour accéder à vos propres clients. Si vous partez, vous perdez tout.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* StyleOS Ownership */}
                    <div className="relative p-8 md:p-12 rounded-[3.5rem] border border-primary/30 bg-gradient-to-br from-primary/10 via-black to-black backdrop-blur-2xl flex flex-col justify-between group shadow-[0_0_80px_rgba(212,175,55,0.1)] transition-all duration-700 hover:shadow-[0_0_100px_rgba(212,175,55,0.2)] hover:border-primary/50">
                        <div className="absolute -top-12 -right-12 w-48 h-48 bg-primary/10 rounded-full blur-[80px] group-hover:bg-primary/20 transition-all duration-1000"></div>

                        <div className="absolute top-8 right-8">
                            <Zap className="w-10 h-10 text-primary animate-pulse opacity-50" />
                        </div>

                        <div>
                            <div className="flex items-center gap-3 mb-12">
                                <CheckCircle2 className="w-5 h-5 text-primary" />
                                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Modèle StyleOS Elite</span>
                            </div>

                            <div className="space-y-12">
                                <div>
                                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/60 mb-6 flex items-center gap-2">
                                        <div className="w-4 h-px bg-primary/30"></div> Investissement Fixe
                                    </h4>
                                    <div className="text-6xl md:text-8xl font-black text-white tracking-tighter drop-shadow-[0_0_30px_rgba(212,175,55,0.3)] group-hover:scale-[1.02] transition-transform duration-700 origin-left">
                                        €109<span className="text-xl md:text-2xl font-black ml-2 text-primary">/ mois</span>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/60 mb-6 flex items-center gap-2 text-left">
                                        <div className="w-4 h-px bg-primary/30"></div> Frais de Réservation
                                    </h4>
                                    <div className="text-5xl md:text-7xl font-black text-primary tracking-tighter">
                                        0% <span className="text-xl md:text-2xl font-black ml-2 text-white italic">NET</span>
                                    </div>
                                    <p className="mt-4 text-xs font-black text-primary/80 uppercase tracking-widest">Tout le fruit de votre travail reste chez vous.</p>
                                </div>

                                <div className="p-8 rounded-[2rem] bg-white/[0.03] border border-white/10 group-hover:border-primary/20 transition-all">
                                    <div className="flex items-center gap-4 mb-2">
                                        <div className="text-xl font-black text-white uppercase italic tracking-tighter">100% PROPRIÉTAIRE</div>
                                        <TrendingUp className="w-6 h-6 text-primary ml-auto" />
                                    </div>
                                    <p className="text-sm text-gray-500 leading-relaxed font-medium">
                                        Votre infrastructure, votre base de données, votre liberté. Un actif qui valorise votre salon.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 pt-8 border-t border-white/5">
                            <p className="text-[11px] text-primary font-black leading-relaxed uppercase tracking-[0.2em]">
                                Sarah IA rentabilise votre abonnement dès le 2ème rendez-vous sauvé par mois.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-20 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 opacity-40">
                    <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Sans Engagement</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Mise en place en 48h</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Support Premium 24/7</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FinancialComparison;

