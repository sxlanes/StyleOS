import { Euro, X, Check, TrendingUp, AlertCircle } from 'lucide-react';

const FinancialComparison = () => {
    return (
        <section className="py-24 bg-surface/20 border-y border-glass-border relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/5 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="max-w-5xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 uppercase tracking-tight">
                        L'INVESTISSEMENT <span className="text-primary">INTELLIGENT</span>
                    </h2>
                    <p className="text-text-muted max-w-2xl mx-auto text-lg">
                        Ne comparez pas seulement les prix. Comparez ce que cela vous rapporte. <br />
                        Planity est une dépense. StyleOS est un actif.
                    </p>
                </div>

                <div className="grid md:grid-cols-1 gap-8">
                    <div className="glass-card rounded-3xl overflow-hidden border border-glass-border">
                        {/* Table Header */}
                        <div className="grid grid-cols-3 bg-black/80 p-6 border-b border-glass-border text-center font-bold tracking-wider uppercase text-sm md:text-base">
                            <div className="text-left pl-4 text-text-muted">Poste de Coût</div>
                            <div className="text-gray-400">Planity (Moyenne)</div>
                            <div className="text-primary">StyleOS</div>
                        </div>

                        {/* Row 1: Subscription */}
                        <div className="grid grid-cols-3 p-6 border-b border-glass-border hover:bg-white/5 transition-colors items-center">
                            <div className="text-left pl-4">
                                <div className="font-bold text-white text-lg">Abonnement Logiciel</div>
                                <div className="text-xs text-text-muted">Gestion + Réservation</div>
                            </div>
                            <div className="text-center text-gray-400 font-mono text-xl">~99 € / mois</div>
                            <div className="text-center text-white font-mono text-2xl font-bold">50 € <span className="text-xs font-normal text-text-muted">/ mois</span></div>
                        </div>

                        {/* Row 2: AI Integration */}
                        <div className="grid grid-cols-3 p-6 border-b border-glass-border hover:bg-white/5 transition-colors items-center bg-primary/5">
                            <div className="text-left pl-4">
                                <div className="font-bold text-white text-lg flex items-center gap-2">
                                    Antoine IA <span className="px-2 py-0.5 rounded-full bg-primary text-black text-[10px] font-bold uppercase">Exclusif</span>
                                </div>
                                <div className="text-xs text-text-muted">Accueil Téléphonique 24/7</div>
                            </div>
                            <div className="text-center text-red-500 font-mono text-sm flex flex-col items-center gap-1">
                                <X className="w-6 h-6" />
                                <span>Non Disponible</span>
                            </div>
                            <div className="text-center text-primary font-mono text-2xl font-bold shadow-glow">25 € <span className="text-xs font-normal text-text-muted">/ mois</span></div>
                        </div>

                        {/* Row 3: SMS Fees */}
                        <div className="grid grid-cols-3 p-6 border-b border-glass-border hover:bg-white/5 transition-colors items-center">
                            <div className="text-left pl-4">
                                <div className="font-bold text-white text-lg">Frais SMS & Annexes</div>
                                <div className="text-xs text-text-muted">Rappels & Marketing</div>
                            </div>
                            <div className="text-center text-red-400 font-mono text-lg">
                                + 30 € <span className="text-xs text-text-muted block">(Estimé)</span>
                            </div>
                            <div className="text-center text-green-400 font-bold flex items-center justify-center gap-2">
                                <Check className="w-5 h-5" /> Inclus
                            </div>
                        </div>

                        {/* Row 4: Social Media */}
                        <div className="grid grid-cols-3 p-6 border-b border-glass-border hover:bg-white/5 transition-colors items-center">
                            <div className="text-left pl-4">
                                <div className="font-bold text-white text-lg">Réseaux Sociaux</div>
                                <div className="text-xs text-text-muted">Création & Gestion</div>
                            </div>
                            <div className="text-center text-gray-500 font-mono text-sm leading-tight">
                                Non Inclus <br />
                                <span className="text-xs text-text-muted">(Agence ~300€/mois)</span>
                            </div>
                            <div className="text-center text-green-400 font-bold flex items-center justify-center gap-2">
                                <Check className="w-5 h-5" /> Inclus
                            </div>
                        </div>

                        {/* Row 5: Total Cost */}
                        <div className="grid grid-cols-3 p-8 bg-black/60 items-center border-t-2 border-glass-border relative">
                            <div className="text-left pl-4 font-bold text-xl uppercase tracking-widest text-white">
                                Coût Mensuel
                            </div>
                            <div className="text-center text-gray-300 font-mono text-3xl font-bold relative group cursor-help">
                                ~129 €
                                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 text-xs p-2 rounded border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity w-32 pointer-events-none z-20">
                                    99€ Abo + 30€ SMS
                                </div>
                            </div>
                            <div className="text-center text-white font-mono text-4xl font-bold relative">
                                75 €
                                <div className="absolute top-0 right-4 text-[10px] sm:text-xs text-primary font-normal bg-primary/10 px-2 py-1 rounded-full uppercase tracking-wider">
                                    Tout Compris
                                </div>
                            </div>
                        </div>

                        {/* IMPACT Section */}
                        <div className="grid md:grid-cols-2 bg-gradient-to-r from-gray-900 via-primary/5 to-gray-900 divide-x divide-white/5">
                            {/* Savings */}
                            <div className="p-8 flex flex-col items-center justify-center text-center">
                                <div className="font-bold text-white text-lg mb-2 flex items-center gap-2">
                                    <TrendingUp className="w-5 h-5 text-green-400" /> Économies Directes
                                </div>
                                <div className="text-green-400 font-mono text-3xl font-bold mb-1">
                                    648 € / an
                                </div>
                                <div className="text-xs text-text-muted uppercase tracking-wider">
                                    Sur vos frais fixes
                                </div>
                            </div>

                            {/* Revenue */}
                            <div className="p-8 flex flex-col items-center justify-center text-center">
                                <div className="font-bold text-white text-lg mb-2 flex items-center gap-2">
                                    <Euro className="w-5 h-5 text-primary" /> Gain de Revenu
                                </div>
                                <div className="text-primary font-mono text-3xl font-bold mb-1">
                                    + 14,000 € / an
                                </div>
                                <div className="text-xs text-text-muted uppercase tracking-wider">
                                    Grâce aux appels sauvés
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="text-center text-xs text-text-muted flex items-center justify-center gap-2 mt-4 opacity-60">
                        <AlertCircle className="w-3 h-3" />
                        <span>Comparaison basée sur l'offre Planity Premium 2024/2025 et les tarifs standards SMS.</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FinancialComparison;
