import { Check, X, ShieldCheck, Zap, Globe, Phone, Database } from 'lucide-react';

const ComparisonTable = () => {
    return (
        <section id="comparison" className="py-24 bg-background relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-gray-900/30 via-background to-background opacity-50 z-0"></div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        L'ANNUAIRE <span className="text-text-muted text-2xl mx-4">VS</span> <span className="text-primary">VOTRE MARQUE</span>
                    </h2>
                    <p className="text-text-muted max-w-2xl mx-auto">
                        Ne soyez plus un simple choix dans une liste. Devenez la référence.
                    </p>
                </div>

                <div className="grid md:grid-cols-[1.5fr_1fr_1fr] gap-0 border border-white/10 rounded-3xl overflow-hidden bg-black/40 backdrop-blur-sm">
                    {/* Header Row */}
                    <div className="contents md:flex">
                        <div className="p-6 md:p-8 flex items-center bg-white/5 border-b border-white/5 font-bold text-white/50 uppercase tracking-widest text-sm hidden md:flex">
                            Fonctionnalité
                        </div>
                        <div className="p-6 md:p-8 flex items-center justify-center bg-white/5 border-b border-l border-white/5 font-bold text-gray-500 uppercase tracking-widest text-sm">
                            Planity / Autres
                        </div>
                        <div className="p-6 md:p-8 flex items-center justify-center bg-[#D4AF37]/10 border-b border-l border-[#D4AF37]/20 font-bold text-[#D4AF37] uppercase tracking-widest text-sm relative">
                            <div className="absolute top-0 right-0 w-2 h-2 bg-[#D4AF37] rounded-bl"></div>
                            StyleOS
                        </div>
                    </div>

                    {/* Row 1: Identité Visuelle */}
                    <div className="contents group">
                        <div className="p-4 md:p-8 flex items-center font-bold text-white border-b border-white/5 group-hover:bg-white/5 transition-colors">
                            <Globe className="w-5 h-5 mr-3 text-gray-500" /> Identité Visuelle
                        </div>
                        <div className="p-4 md:p-8 flex flex-col md:flex-row items-center justify-center text-center text-sm text-gray-400 border-b border-l border-white/5 bg-black/20 group-hover:bg-white/5 transition-colors gap-2">
                            <X className="w-4 h-4 text-red-900 md:hidden" /> Identique aux concurrents
                        </div>
                        <div className="p-4 md:p-8 flex flex-col md:flex-row items-center justify-center text-center text-sm font-bold text-white border-b border-l border-[#D4AF37]/10 bg-[#D4AF37]/5 group-hover:bg-[#D4AF37]/10 transition-colors gap-2 shadow-[inset_0_0_20px_rgba(212,175,55,0.05)]">
                            <Check className="w-4 h-4 text-[#D4AF37] md:hidden" /> Design Unique & Premium
                        </div>
                    </div>

                    {/* Row 2: Accueil Téléphonique */}
                    <div className="contents group">
                        <div className="p-4 md:p-8 flex items-center font-bold text-white border-b border-white/5 group-hover:bg-white/5 transition-colors">
                            <Phone className="w-5 h-5 mr-3 text-gray-500" /> Accueil Téléphonique
                        </div>
                        <div className="p-4 md:p-8 flex items-center justify-center text-center text-sm text-gray-400 border-b border-l border-white/5 bg-black/20 group-hover:bg-white/5 transition-colors">
                            Réservation en ligne uniquement
                        </div>
                        <div className="p-4 md:p-8 flex items-center justify-center text-center text-sm font-bold text-white border-b border-l border-[#D4AF37]/10 bg-[#D4AF37]/5 group-hover:bg-[#D4AF37]/10 transition-colors shadow-[inset_0_0_20px_rgba(212,175,55,0.05)]">
                            Assistant Vocal IA Réel
                        </div>
                    </div>

                    {/* Row 3: Image de Marque */}
                    <div className="contents group">
                        <div className="p-4 md:p-8 flex items-center font-bold text-white border-b border-white/5 group-hover:bg-white/5 transition-colors">
                            <ShieldCheck className="w-5 h-5 mr-3 text-gray-500" /> Image de Marque
                        </div>
                        <div className="p-4 md:p-8 flex items-center justify-center text-center text-sm text-gray-400 border-b border-l border-white/5 bg-black/20 group-hover:bg-white/5 transition-colors">
                            Noyé dans la masse
                        </div>
                        <div className="p-4 md:p-8 flex items-center justify-center text-center text-sm font-bold text-white border-b border-l border-[#D4AF37]/10 bg-[#D4AF37]/5 group-hover:bg-[#D4AF37]/10 transition-colors shadow-[inset_0_0_20px_rgba(212,175,55,0.05)]">
                            Identité Incomparable
                        </div>
                    </div>

                    {/* Row 4: Données Clients */}
                    <div className="contents group">
                        <div className="p-4 md:p-8 flex items-center font-bold text-white border-b border-white/5 group-hover:bg-white/5 transition-colors">
                            <Database className="w-5 h-5 mr-3 text-gray-500" /> Données Clients
                        </div>
                        <div className="p-4 md:p-8 flex items-center justify-center text-center text-sm text-gray-400 border-b border-l border-white/5 bg-black/20 group-hover:bg-white/5 transition-colors">
                            Appartiennent à la plateforme
                        </div>
                        <div className="p-4 md:p-8 flex items-center justify-center text-center text-sm font-bold text-white border-b border-l border-[#D4AF37]/10 bg-[#D4AF37]/5 group-hover:bg-[#D4AF37]/10 transition-colors shadow-[inset_0_0_20px_rgba(212,175,55,0.05)]">
                            100% Votre Propriété
                        </div>
                    </div>

                    {/* Row 5: Coût */}
                    <div className="contents group">
                        <div className="p-4 md:p-8 flex items-center font-bold text-white group-hover:bg-white/5 transition-colors">
                            <Zap className="w-5 h-5 mr-3 text-gray-500" /> Coût
                        </div>
                        <div className="p-4 md:p-8 flex items-center justify-center text-center text-sm text-gray-400 border-l border-white/5 bg-black/20 group-hover:bg-white/5 transition-colors">
                            Commissions / Loyer Élevé
                        </div>
                        <div className="p-4 md:p-8 flex items-center justify-center text-center text-sm font-bold text-[#D4AF37] border-l border-[#D4AF37]/10 bg-[#D4AF37]/5 group-hover:bg-[#D4AF37]/10 transition-colors shadow-[inset_0_0_20px_rgba(212,175,55,0.05)]">
                            Investissement Fixe
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ComparisonTable;
