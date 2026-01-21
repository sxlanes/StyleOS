import { Check, X, ShieldCheck, Zap, Globe, Phone, Database, Star } from 'lucide-react';

const ComparisonTable = () => {
    const features = [
        {
            icon: Globe,
            name: "Identité Visuelle",
            competitor: "Identique aux concurrents",
            us: "Design 'Dark Luxury' Unique"
        },
        {
            icon: Phone,
            name: "Accueil Téléphonique",
            competitor: "Réservation en ligne uniquement",
            us: "Assistant Vocal IA 24/7"
        },
        {
            icon: Star,
            name: "Image de Marque",
            competitor: "Noyé dans la masse",
            us: "Identité Incomparable"
        },
        {
            icon: Database,
            name: "Données Clients",
            competitor: "Appartiennent à la plateforme",
            us: "100% Votre Propriété"
        },
        {
            icon: Zap,
            name: "Coût",
            competitor: "Commissions & Abonnements",
            us: "Investissement Fixe & Rentable"
        }
    ];

    return (
        <section id="comparison" className="py-24 bg-background relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-gray-900/30 via-background to-background opacity-50 z-0"></div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        L'ANNUAIRE <span className="text-text-muted text-2xl mx-4">VS</span> <span className="text-primary">VOTRE MARQUE</span>
                    </h2>
                    <p className="text-text-muted max-w-2xl mx-auto text-lg">
                        Ne soyez plus un simple choix dans une liste. Devenez la référence.
                    </p>
                </div>

                <div className="grid md:grid-cols-[1.5fr_1fr_1fr] gap-6 md:gap-0 md:border md:border-white/10 md:rounded-3xl md:overflow-hidden md:bg-black/40 md:backdrop-blur-sm">
                    {/* Header Row - Desktop Only */}
                    <div className="hidden md:contents">
                        <div className="p-6 lg:p-8 bg-white/5 border-b border-white/5 font-bold text-white/50 uppercase tracking-widest text-sm">
                            Fonctionnalité
                        </div>
                        <div className="p-6 lg:p-8 flex items-center justify-center bg-white/5 border-b border-l border-white/5 font-bold text-gray-500 uppercase tracking-widest text-sm text-center">
                            Planity / Autres
                        </div>
                        <div className="p-6 lg:p-8 flex items-center justify-center bg-[#D4AF37]/10 border-b border-l border-[#D4AF37]/20 font-bold text-[#D4AF37] uppercase tracking-widest text-sm text-center relative">
                            <div className="absolute top-0 right-0 w-2 h-2 bg-[#D4AF37] rounded-bl"></div>
                            StyleOS
                        </div>
                    </div>

                    {/* Data Rows */}
                    {features.map((item, index) => (
                        <div key={index} className="flex flex-col md:contents group">
                            {/* Feature Name */}
                            <div className="p-6 md:p-8 flex items-center bg-white/5 md:bg-transparent border border-white/10 md:border-0 md:border-b md:border-white/5 rounded-t-2xl md:rounded-none font-bold text-white text-lg transition-colors">
                                <item.icon className="w-5 h-5 mr-3 text-primary" /> {item.name}
                            </div>

                            {/* Competitor */}
                            <div className="p-6 md:p-8 flex items-center md:justify-center bg-black/40 md:bg-black/20 border-x border-white/10 md:border-0 md:border-b md:border-l md:border-white/5 md:text-center text-gray-400 transition-colors group-hover:bg-white/5">
                                <span className="md:hidden w-6 h-6 flex items-center justify-center bg-red-500/10 rounded-full mr-3 shrink-0">
                                    <X className="w-3 h-3 text-red-500" />
                                </span>
                                {item.competitor}
                            </div>

                            {/* Us */}
                            <div className="p-6 md:p-8 flex items-center md:justify-center bg-[#D4AF37]/5 md:bg-[#D4AF37]/5 border border-white/10 md:border-0 md:border-b md:border-l md:border-[#D4AF37]/10 rounded-b-2xl md:rounded-none md:text-center font-bold text-white shadow-[inset_0_0_20px_rgba(212,175,55,0.05)] transition-colors group-hover:bg-[#D4AF37]/10 relative">
                                <span className="md:hidden w-6 h-6 flex items-center justify-center bg-[#D4AF37]/10 rounded-full mr-3 shrink-0">
                                    <Check className="w-3 h-3 text-[#D4AF37]" />
                                </span>
                                {item.us}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ComparisonTable;
