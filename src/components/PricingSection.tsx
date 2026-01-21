import { Check, ShieldCheck, X, Zap, Crown, Calculator } from 'lucide-react';

const PricingSection = () => {
    return (
        <section id="pricing" className="py-24 bg-background relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="max-w-[90rem] mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white uppercase tracking-tight">
                        CHOISISSEZ VOTRE <span className="text-primary">ARMURE</span>
                    </h2>
                    <p className="text-text-muted max-w-2xl mx-auto">
                        De la simple vitrine à la domination totale.
                        <br />
                        Sans engagement. Évoluez quand vous voulez.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">

                    {/* Plan 1: Flagship (50€) */}
                    <div className="glass-card p-6 rounded-3xl border border-white/5 hover:border-white/10 transition-all bg-black/40 flex flex-col">
                        <div className="mb-4">
                            <h3 className="text-lg font-bold text-white mb-2">Flagship</h3>
                            <p className="text-xs text-text-muted">Votre vitrine digitale premium.</p>
                        </div>
                        <div className="mb-6">
                            <div className="text-3xl font-bold text-white">50 € <span className="text-sm font-normal text-text-muted">/ mois</span></div>
                        </div>
                        <ul className="space-y-3 mb-8 text-xs text-white/80 flex-1">
                            <li className="flex items-center gap-2">
                                <Check className="w-3 h-3 text-primary" /> <strong>Site Web 'Dark Luxury'</strong>
                            </li>
                            <li className="flex items-center gap-2">
                                <Check className="w-3 h-3 text-primary" /> Maintenance Technique
                            </li>
                            <li className="flex items-center gap-2">
                                <Check className="w-3 h-3 text-primary" /> Réservation en Ligne
                            </li>
                            <li className="flex items-center gap-2 text-text-muted/40">
                                <X className="w-3 h-3" /> Module Compta IA
                            </li>
                            <li className="flex items-center gap-2 text-text-muted/40">
                                <X className="w-3 h-3" /> Agent IA Sarah
                            </li>
                        </ul>
                        <button className="w-full py-3 bg-surface border border-glass-border hover:bg-white/5 text-white text-sm font-bold rounded-xl transition-all">
                            Choisir Flagship
                        </button>
                    </div>

                    {/* Plan 2: Pilotage (89€) - NEW */}
                    <div className="glass-card p-6 rounded-3xl border border-white/5 hover:border-primary/30 transition-all bg-black/40 flex flex-col relative group">
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-blue-900 border border-blue-500 text-blue-100 text-[10px] font-bold uppercase rounded-full tracking-wider shadow-lg">
                            Gestion Pro
                        </div>
                        <div className="mb-4">
                            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                                <Calculator className="w-4 h-4 text-blue-400" /> Pilotage
                            </h3>
                            <p className="text-xs text-text-muted">Maîtrisez votre argent.</p>
                        </div>
                        <div className="mb-6">
                            <div className="text-3xl font-bold text-white">89 € <span className="text-sm font-normal text-text-muted">/ mois</span></div>
                        </div>
                        <ul className="space-y-3 mb-8 text-xs text-white/80 flex-1">
                            <li className="flex items-center gap-2">
                                <Check className="w-3 h-3 text-primary" /> Tout du Flagship
                            </li>
                            <li className="flex items-center gap-2">
                                <Check className="w-3 h-3 text-primary" /> <strong>Module Compta IA</strong>
                            </li>
                            <li className="flex items-center gap-2">
                                <Check className="w-3 h-3 text-primary" /> Calcul Bénéfice Net Réel
                            </li>
                            <li className="flex items-center gap-2">
                                <Check className="w-3 h-3 text-primary" /> Scan Factures (Photo)
                            </li>
                            <li className="flex items-center gap-2">
                                <Check className="w-3 h-3 text-primary" /> Export Expert-Comptable
                            </li>
                        </ul>
                        <button className="w-full py-3 bg-blue-900/20 border border-blue-500/30 hover:bg-blue-900/40 text-blue-100 text-sm font-bold rounded-xl transition-all">
                            Choisir Pilotage
                        </button>
                    </div>

                    {/* Plan 3: Accélération (125€) */}
                    <div className="glass-card p-6 rounded-3xl border border-white/5 hover:border-primary/30 transition-all bg-black/40 flex flex-col relative group">
                        <div className="mb-4">
                            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                                <Zap className="w-4 h-4 text-primary" /> Accélération
                            </h3>
                            <p className="text-xs text-text-muted">L'automatisation intelligente.</p>
                        </div>
                        <div className="mb-6">
                            <div className="text-3xl font-bold text-white">125 € <span className="text-sm font-normal text-text-muted">/ mois</span></div>
                        </div>
                        <ul className="space-y-3 mb-8 text-xs text-white/80 flex-1">
                            <li className="flex items-center gap-2">
                                <Check className="w-3 h-3 text-primary" /> <strong>Tout du pack Pilotage</strong>
                            </li>
                            <li className="flex items-center gap-2">
                                <Check className="w-3 h-3 text-primary" /> <strong>Agent IA Sarah (24/7)</strong>
                            </li>
                            <li className="flex items-center gap-2">
                                <Check className="w-3 h-3 text-primary" /> Prise de RDV Autonome
                            </li>
                            <li className="flex items-center gap-2 text-text-muted/40">
                                <X className="w-3 h-3" /> Sync Planity
                            </li>
                            <li className="flex items-center gap-2 text-text-muted/40">
                                <X className="w-3 h-3" /> Gestion Réseaux Sociaux
                            </li>
                        </ul>
                        <button className="w-full py-3 bg-surface border border-glass-border group-hover:bg-white/10 text-white text-sm font-bold rounded-xl transition-all">
                            Choisir Accélération
                        </button>
                    </div>

                    {/* Plan 4: Empire (189€) */}
                    <div className="glass-card p-1 rounded-3xl relative shadow-2xl shadow-primary/20 bg-gradient-to-b from-primary/50 to-black transform lg:scale-105 z-20 flex flex-col">
                        <div className="absolute top-0 right-0 px-3 py-1 bg-red-600 text-white text-[10px] font-bold uppercase rounded-bl-xl rounded-tr-xl tracking-wider animate-pulse">
                            -30% AUJOURD'HUI
                        </div>
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-primary text-black text-[10px] font-bold uppercase rounded-full tracking-wider shadow-lg">
                            RECOMMANDÉ
                        </div>
                        <div className="bg-black rounded-[20px] p-6 h-full relative overflow-hidden flex flex-col">
                            {/* Glow Effect */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[50px] rounded-full pointer-events-none"></div>

                            <div className="mb-4 relative z-10">
                                <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                                    <Crown className="w-5 h-5 text-primary" /> Empire
                                </h3>
                                <p className="text-xs text-text-muted">Domination totale.</p>
                            </div>
                            <div className="mb-6 relative z-10">
                                <div className="flex items-baseline gap-2">
                                    <div className="text-4xl font-bold text-primary">189 €</div>
                                    <div className="text-sm text-gray-500 line-through decoration-red-500">270 €</div>
                                </div>
                                <div className="text-[10px] text-green-400 mt-1 font-mono font-bold"> Rentabilisé en 2 jours</div>
                            </div>
                            <ul className="space-y-3 mb-8 text-xs relative z-10 flex-1">
                                <li className="flex items-center gap-2 text-white">
                                    <div className="bg-primary/20 p-1 rounded-full"><Check className="w-2 h-2 text-primary" /></div>
                                    <strong>Tout inclu (Web + Compta + IA)</strong>
                                </li>
                                <li className="flex items-center gap-2 text-white">
                                    <div className="bg-primary/20 p-1 rounded-full"><Check className="w-2 h-2 text-primary" /></div>
                                    <strong>Gestion Réseaux Sociaux</strong>
                                </li>
                                <li className="flex items-center gap-2 text-white">
                                    <div className="bg-primary/20 p-1 rounded-full"><Check className="w-2 h-2 text-primary" /></div>
                                    Support Prioritaire VIP
                                </li>
                            </ul>
                            <button className="w-full py-3 bg-primary text-black text-sm font-bold rounded-xl hover:bg-white transition-all neon-glow relative z-10">
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
