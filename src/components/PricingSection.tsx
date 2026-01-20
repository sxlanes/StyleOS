import { Check, ShieldCheck, X, Zap, Crown } from 'lucide-react';

const PricingSection = () => {
    return (
        <section id="pricing" className="py-24 bg-background relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white uppercase tracking-tight">
                        CHOISISSEZ VOTRE <span className="text-primary">ARMURE</span>
                    </h2>
                    <p className="text-text-muted max-w-2xl mx-auto">
                        Des solutions conçues pour s'autofinancer dès le premier jour.
                        <br />
                        Sans engagement. Évoluez quand vous voulez.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 items-stretch">

                    {/* Plan 1: Flagship (Entry) */}
                    <div className="glass-card p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-all bg-black/40 flex flex-col">
                        <div className="mb-6">
                            <h3 className="text-xl font-bold text-white mb-2">Flagship</h3>
                            <p className="text-sm text-text-muted">Votre vitrine digitale premium.</p>
                        </div>
                        <div className="mb-8">
                            <div className="text-4xl font-bold text-white">50 € <span className="text-base font-normal text-text-muted">/ mois</span></div>
                        </div>
                        <ul className="space-y-4 mb-8 text-sm text-white/80 flex-1">
                            <li className="flex items-center gap-3">
                                <Check className="w-4 h-4 text-primary" /> <strong>Site Web 'Dark Luxury'</strong>
                            </li>
                            <li className="flex items-center gap-3">
                                <Check className="w-4 h-4 text-primary" /> Maintenance Technique Incluse
                            </li>
                            <li className="flex items-center gap-3">
                                <Check className="w-4 h-4 text-primary" /> Réservation en Ligne
                            </li>
                            <li className="flex items-center gap-3 text-text-muted/50">
                                <X className="w-4 h-4" /> Agent IA Sarah
                            </li>
                            <li className="flex items-center gap-3 text-text-muted/50">
                                <X className="w-4 h-4" /> Gestion Réseaux Sociaux
                            </li>
                        </ul>
                        <button className="w-full py-3 bg-surface border border-glass-border hover:bg-white/5 text-white font-bold rounded-xl transition-all">
                            Choisir Flagship
                        </button>
                    </div>

                    {/* Plan 2: Pro (Middle) - Now 125€ */}
                    <div className="glass-card p-8 rounded-3xl border border-white/5 hover:border-primary/30 transition-all bg-black/40 flex flex-col relative group">
                        <div className="mb-6">
                            <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                                <Zap className="w-5 h-5 text-primary" /> Accélération
                            </h3>
                            <p className="text-sm text-text-muted">L'automatisation intelligente.</p>
                        </div>
                        <div className="mb-8">
                            <div className="text-4xl font-bold text-white">125 € <span className="text-base font-normal text-text-muted">/ mois</span></div>
                        </div>
                        <ul className="space-y-4 mb-8 text-sm text-white/80 flex-1">
                            <li className="flex items-center gap-3">
                                <Check className="w-4 h-4 text-primary" /> Tout du pack Flagship
                            </li>
                            <li className="flex items-center gap-3">
                                <Check className="w-4 h-4 text-primary" /> <strong>Agent IA Sarah (Appels 24/7)</strong>
                            </li>
                            <li className="flex items-center gap-3">
                                <Check className="w-4 h-4 text-primary" /> Module Comptabilité Simplifiée
                            </li>
                            <li className="flex items-center gap-3">
                                <Check className="w-4 h-4 text-primary" /> Sync Planity & Google Agenda
                            </li>
                            <li className="flex items-center gap-3 text-text-muted/50">
                                <X className="w-4 h-4" /> Gestion Réseaux Sociaux
                            </li>
                        </ul>
                        <button className="w-full py-3 bg-surface border border-glass-border group-hover:bg-white/10 text-white font-bold rounded-xl transition-all">
                            Passer à la Vitesse Supérieure
                        </button>
                    </div>

                    {/* Plan 3: Empire (Right - High End) - Now 189€ with Offer */}
                    <div className="glass-card p-1 rounded-3xl relative shadow-2xl shadow-primary/20 bg-gradient-to-b from-primary/50 to-black transform md:scale-105 z-20 flex flex-col">
                        <div className="absolute top-0 right-0 px-4 py-1 bg-red-600 text-white text-xs font-bold uppercase rounded-bl-xl rounded-tr-xl tracking-wider animate-pulse">
                            -30% JUSQU'À CE SOIR
                        </div>
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-black text-xs font-bold uppercase rounded-full tracking-wider shadow-lg">
                            RECOMMANDÉ
                        </div>
                        <div className="bg-black rounded-[20px] p-8 h-full relative overflow-hidden flex flex-col">
                            {/* Glow Effect */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[50px] rounded-full pointer-events-none"></div>

                            <div className="mb-6 relative z-10">
                                <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                                    <Crown className="w-6 h-6 text-primary" /> Empire
                                </h3>
                                <p className="text-sm text-text-muted">Domination totale du marché.</p>
                            </div>
                            <div className="mb-8 relative z-10">
                                <div className="flex items-baseline gap-2">
                                    <div className="text-5xl font-bold text-primary">189 €</div>
                                    <div className="text-lg text-gray-500 line-through decoration-red-500">270 €</div>
                                </div>
                                <div className="text-xs text-green-400 mt-2 font-mono font-bold"> Rentabilisé en 2 jours</div>
                            </div>
                            <ul className="space-y-4 mb-8 text-sm relative z-10 flex-1">
                                <li className="flex items-center gap-3 text-white">
                                    <div className="bg-primary/20 p-1 rounded-full"><Check className="w-3 h-3 text-primary" /></div>
                                    <strong>Tout inclu (Site + IA + Compta)</strong>
                                </li>
                                <li className="flex items-center gap-3 text-white">
                                    <div className="bg-primary/20 p-1 rounded-full"><Check className="w-3 h-3 text-primary" /></div>
                                    <strong>Gestion Réseaux Sociaux Complète</strong>
                                </li>
                                <li className="flex items-center gap-3 text-white">
                                    <div className="bg-primary/20 p-1 rounded-full"><Check className="w-3 h-3 text-primary" /></div>
                                    Support Prioritaire VIP 24/7
                                </li>
                                <li className="flex items-center gap-3 text-white">
                                    <div className="bg-primary/20 p-1 rounded-full"><Check className="w-3 h-3 text-primary" /></div>
                                    Stratégie de Croissance Mensuelle
                                </li>
                            </ul>
                            <button className="w-full py-4 bg-primary text-black font-bold rounded-xl hover:bg-white transition-all neon-glow relative z-10">
                                Devenir le N°1
                            </button>
                        </div>
                    </div>

                </div>

                <div className="mt-16 text-center text-text-muted text-sm flex items-center justify-center gap-2">
                    <ShieldCheck className="w-4 h-4" /> Garantie 30 jours satisfait ou remboursé sur tous les plans.
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
