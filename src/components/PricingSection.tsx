import { Check, ShieldCheck, X } from 'lucide-react';

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
                        Des solutions flexibles conçues pour évoluer avec votre succès.
                        <br />
                        Sans engagement. Annulation à tout moment.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 items-start">

                    {/* Plan 1: Flagship (Left) */}
                    <div className="glass-card p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-all bg-black/40 mt-4 md:mt-0">
                        <div className="mb-6">
                            <h3 className="text-xl font-bold text-white mb-2">Flagship Digital</h3>
                            <p className="text-sm text-text-muted">La fondation de votre marque.</p>
                        </div>
                        <div className="mb-8">
                            <div className="text-4xl font-bold text-white">50 € <span className="text-base font-normal text-text-muted">/ mois</span></div>
                        </div>
                        <ul className="space-y-4 mb-8 text-sm text-white/80">
                            <li className="flex items-center gap-3">
                                <Check className="w-4 h-4 text-primary" /> <strong>Site Web de Marque Exclusive</strong>
                            </li>
                            <li className="flex items-center gap-3">
                                <Check className="w-4 h-4 text-primary" /> Différenciation vs Planity
                            </li>
                            <li className="flex items-center gap-3">
                                <Check className="w-4 h-4 text-primary" /> Réservation en Ligne
                            </li>
                            <li className="flex items-center gap-3 text-text-muted/50">
                                <X className="w-4 h-4" /> Agent IA Antoine
                            </li>
                            <li className="flex items-center gap-3 text-text-muted/50">
                                <X className="w-4 h-4" /> Gestion Réseaux Sociaux
                            </li>
                        </ul>
                        <button className="w-full py-3 bg-surface border border-glass-border hover:bg-white/5 text-white font-bold rounded-xl transition-all">
                            Choisir Flagship
                        </button>
                    </div>

                    {/* Plan 2: Empire (CENTER - HERO) */}
                    <div className="glass-card p-1 rounded-3xl relative shadow-2xl shadow-primary/20 bg-gradient-to-b from-primary/50 to-black transform md:scale-110 z-20">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-primary text-black text-xs font-bold uppercase rounded-full tracking-wider animate-pulse">
                            Recommandé
                        </div>
                        <div className="bg-black rounded-[20px] p-8 h-full relative overflow-hidden">
                            {/* Glow Effect */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[50px] rounded-full pointer-events-none"></div>

                            <div className="mb-6 relative z-10">
                                <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                                    Empire
                                </h3>
                                <p className="text-sm text-text-muted">Domination complète du marché.</p>
                            </div>
                            <div className="mb-8 relative z-10">
                                <div className="text-5xl font-bold text-primary">100 € <span className="text-lg font-normal text-text-muted">/ mois</span></div>
                                <div className="text-xs text-green-400 mt-2 font-mono font-bold">Valeur réelle : &gt;500€/mois</div>
                            </div>
                            <ul className="space-y-4 mb-8 text-sm relative z-10">
                                <li className="flex items-center gap-3 text-white">
                                    <div className="bg-primary/20 p-1 rounded-full"><Check className="w-3 h-3 text-primary" /></div>
                                    <strong>Tout du plan Expérience</strong>
                                </li>
                                <li className="flex items-center gap-3 text-white">
                                    <div className="bg-primary/20 p-1 rounded-full"><Check className="w-3 h-3 text-primary" /></div>
                                    <strong>Gestion Réseaux Sociaux (4/mois)</strong>
                                </li>
                                <li className="flex items-center gap-3 text-white">
                                    <div className="bg-primary/20 p-1 rounded-full"><Check className="w-3 h-3 text-primary" /></div>
                                    <strong>Support Prioritaire 24/7</strong>
                                </li>
                                <li className="flex items-center gap-3 text-white">
                                    <div className="bg-primary/20 p-1 rounded-full"><Check className="w-3 h-3 text-primary" /></div>
                                    Collecte d'Avis Automatisée
                                </li>
                            </ul>
                            <button className="w-full py-4 bg-primary text-black font-bold rounded-xl hover:bg-white transition-all neon-glow relative z-10">
                                Devenir le N°1
                            </button>
                        </div>
                    </div>

                    {/* Plan 3: Experience (Right) */}
                    <div className="glass-card p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-all bg-black/40 mt-4 md:mt-0">
                        <div className="mb-6">
                            <h3 className="text-xl font-bold text-white mb-2">L'Expérience</h3>
                            <p className="text-sm text-text-muted">La puissance de l'IA.</p>
                        </div>
                        <div className="mb-8">
                            <div className="text-4xl font-bold text-white">75 € <span className="text-base font-normal text-text-muted">/ mois</span></div>
                        </div>
                        <ul className="space-y-4 mb-8 text-sm text-white/80">
                            <li className="flex items-center gap-3">
                                <Check className="w-4 h-4 text-primary" /> Site Web 'Dark Luxury'
                            </li>
                            <li className="flex items-center gap-3">
                                <Check className="w-4 h-4 text-primary" /> <strong>Agent IA Antoine (Appels 24/7)</strong>
                            </li>
                            <li className="flex items-center gap-3">
                                <Check className="w-4 h-4 text-primary" /> Sync Planity & Google
                            </li>
                            <li className="flex items-center gap-3 text-text-muted/50">
                                <X className="w-4 h-4" /> Gestion Réseaux Sociaux
                            </li>
                            <li className="flex items-center gap-3 text-text-muted/50">
                                <X className="w-4 h-4" /> Support Prioritaire
                            </li>
                        </ul>
                        <button className="w-full py-3 bg-surface border border-glass-border hover:bg-white/5 text-white font-bold rounded-xl transition-all">
                            Choisir Expérience
                        </button>
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
