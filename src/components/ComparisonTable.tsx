import { Check, X } from 'lucide-react';

const ComparisonTable = () => {
    return (
        <section id="comparison" className="py-24 bg-background relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-gray-900 via-background to-background opacity-50 z-0"></div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        L'ANNUAIRE <span className="text-text-muted text-2xl mx-4">VS</span> <span className="text-primary">L'INDÉPENDANCE</span>
                    </h2>
                    <p className="text-text-muted max-w-2xl mx-auto">
                        Cessez d'être une option parmi tant d'autres. Construisez votre empire.
                    </p>
                </div>

                <div className="overflow-x-auto">
                    <div className="min-w-[700px] border border-glass-border rounded-2xl bg-surface/40 backdrop-blur-md overflow-hidden">
                        <div className="grid grid-cols-3 bg-black/60 p-6 border-b border-glass-border font-bold tracking-wider uppercase text-sm">
                            <div className="text-text-muted">Fonctionnalité</div>
                            <div className="text-gray-500 text-center">Planity / Autres</div>
                            <div className="text-primary text-center">StyleOS</div>
                        </div>

                        {/* Row 1 */}
                        <div className="grid grid-cols-3 p-6 border-b border-glass-border hover:bg-white/5 transition-colors">
                            <div className="font-semibold text-white">Identité Visuelle</div>
                            <div className="text-gray-500 text-center text-sm flex items-center justify-center gap-2">
                                <X className="w-4 h-4" /> Identique aux concurrents
                            </div>
                            <div className="text-white text-center font-bold flex items-center justify-center gap-2 shadow-glow">
                                <Check className="w-5 h-5 text-primary" /> Design Unique & Premium
                            </div>
                        </div>

                        {/* Row 2 */}
                        <div className="grid grid-cols-3 p-6 border-b border-glass-border hover:bg-white/5 transition-colors">
                            <div className="font-semibold text-white">Accueil Téléphonique</div>
                            <div className="text-gray-500 text-center text-sm flex items-center justify-center gap-2">
                                <X className="w-4 h-4" /> Réservation en ligne uniquement
                            </div>
                            <div className="text-white text-center font-bold flex items-center justify-center gap-2">
                                <Check className="w-5 h-5 text-primary" /> Assistant Vocal IA Réel
                            </div>
                        </div>

                        {/* Row 3 */}
                        <div className="grid grid-cols-3 p-6 border-b border-glass-border hover:bg-white/5 transition-colors">
                            <div className="font-semibold text-white">Image de Marque</div>
                            <div className="text-gray-500 text-center text-sm flex items-center justify-center gap-2">
                                <X className="w-4 h-4" /> Noyé dans la masse
                            </div>
                            <div className="text-white text-center font-bold flex items-center justify-center gap-2">
                                <Check className="w-5 h-5 text-primary" /> Identité Incomparable
                            </div>
                        </div>

                        {/* Row 4 */}
                        <div className="grid grid-cols-3 p-6 border-b border-glass-border hover:bg-white/5 transition-colors">
                            <div className="font-semibold text-white">Données Clients</div>
                            <div className="text-gray-500 text-center text-sm flex items-center justify-center gap-2">
                                <X className="w-4 h-4" /> Appartiennent à la plateforme
                            </div>
                            <div className="text-white text-center font-bold flex items-center justify-center gap-2">
                                <Check className="w-5 h-5 text-primary" /> 100% Votre Propriété
                            </div>
                        </div>

                        {/* Row 5 */}
                        <div className="grid grid-cols-3 p-6 hover:bg-white/5 transition-colors bg-gradient-to-r from-transparent via-primary/5 to-transparent">
                            <div className="font-semibold text-white flex items-center">Coût</div>
                            <div className="text-gray-500 text-center text-sm flex items-center justify-center gap-2">
                                Commissions / Loyer Élevé
                            </div>
                            <div className="text-primary text-center font-bold text-lg flex items-center justify-center gap-2">
                                Investissement Fixe
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ComparisonTable;
