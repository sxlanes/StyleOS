// Simplified imports as icons are no longer used in the new design

const SuccessStories = () => {
    return (
        <section id="success" className="py-24 bg-black relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white mb-6 leading-none">
                        L'EFFET <span className="text-primary italic">STYLEOS.</span>
                    </h2>
                    <p className="text-gray-400 max-w-3xl mx-auto font-medium text-lg md:text-xl leading-relaxed">
                        Plus qu'une mise à jour técnica, una revolución operacional para el salón líder del mañana.
                    </p>
                </div>

                <div className="grid lg:grid-cols-1 gap-12">
                    {/* Main Success Case */}
                    <div className="relative group p-10 md:p-16 rounded-[3rem] bg-surface/30 border border-white/5 overflow-hidden transition-all duration-1000 hover:border-primary/20">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>

                        <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                            <div className="animate-fade-in">
                                <div className="inline-block mb-8 px-6 py-2 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-black text-primary uppercase tracking-[0.4em]">
                                    FLAGSHIP • BORDEAUX
                                </div>
                                <h3 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase leading-tight">THE BARBER<br /><span className="text-primary italic">WORKSHOP</span></h3>

                                <div className="space-y-8">
                                    <div className="transition-all duration-500 hover:translate-x-2">
                                        <h4 className="text-primary font-black uppercase tracking-[0.3em] text-[9px] mb-4">Simplification Totale</h4>
                                        <p className="text-gray-300 text-lg md:text-xl font-medium leading-relaxed">
                                            Sarah IA gère désormais l'intégralité du planning. Zéro interruption. Zéro appel perdu.
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/5">
                                        <div>
                                            <div className="text-5xl md:text-6xl font-black text-white tracking-tighter mb-2">100%</div>
                                            <div className="text-[9px] text-gray-500 uppercase font-black tracking-[0.3em]">Appels Gérés</div>
                                        </div>
                                        <div>
                                            <div className="text-5xl md:text-6xl font-black text-primary tracking-tighter mb-2">0€</div>
                                            <div className="text-[9px] text-gray-500 uppercase font-black tracking-[0.3em]">Commissions</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-6">
                                <div className="p-10 rounded-[2.5rem] bg-black/60 border border-white/5 backdrop-blur-md flex flex-col justify-center gap-4 transition-all duration-500 group-hover:border-primary/20 group-hover:-translate-y-2">
                                    <h5 className="text-primary text-[10px] font-black uppercase tracking-[0.4em]">Résultat Business</h5>
                                    <div className="text-5xl md:text-7xl font-black text-white tracking-tighter">+35%</div>
                                    <p className="text-gray-400 text-lg font-bold">Augmentation nette des réservations directes via WhatsApp.</p>
                                </div>
                                <div className="p-10 rounded-[2.5rem] bg-black/60 border border-white/5 backdrop-blur-md flex flex-col justify-center gap-4 transition-all duration-500 group-hover:border-primary/20 group-hover:translate-y-2">
                                    <h5 className="text-primary text-[10px] font-black uppercase tracking-[0.4em]">Liberté Retrouvée</h5>
                                    <div className="text-5xl md:text-7xl font-black text-white tracking-tighter">+12h</div>
                                    <p className="text-gray-400 text-lg font-bold">Temps de concentration pur regagné par mois pour le créateur.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SuccessStories;
