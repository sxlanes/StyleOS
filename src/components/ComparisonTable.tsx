import { useState } from 'react';
import { Check, X, Zap, Globe, Phone, Database, Star } from 'lucide-react';

const ComparisonTable = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const features = [
        {
            icon: Globe,
            name: "Identité Visuelle",
            competitor: "Identique aux concurrents",
            us: "Design Unique & Personnalisé",
            explanation: "Ne soyez plus une cellule grise dans un annuaire. Nous créons un bastion digital qui impose votre autorité dès le premier regard."
        },
        {
            icon: Phone,
            name: "Accueil Téléphonique",
            competitor: "Réservation en ligne uniquement",
            us: "Assistant Vocal IA 24/7",
            explanation: "Sarah IA ne manque aucun appel. Elle gère les réservations complexe pendant que vous vous concentrez sur le dégradé parfait."
        },
        {
            icon: Star,
            name: "Image de Marque",
            competitor: "Noyé dans la masse",
            us: "Identité Incomparable",
            explanation: "Le branding 'Dark Luxury' positionne votre salon comme une destination d'élite, augmentant naturellement votre ticket moyen."
        },
        {
            icon: Database,
            name: "Données Clients",
            competitor: "Appartiennent à la plateforme",
            us: "100% Votre Propriété",
            explanation: "Vos clients restent VOS clients. Vous n'êtes pas dépendant d'un algorithme tiers pour communiquer avec votre base."
        },
        {
            icon: Zap,
            name: "Coût",
            competitor: "Commissions & Abonnements",
            us: "Investissement Fixe & Rentable",
            explanation: "Éliminez les commissions par réservation. Chaque Euro que vous gagnez reste dans votre poche, maximisant votre ROI."
        }
    ];

    return (
        <section id="comparison" className="py-24 bg-background relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-gray-900/30 via-background to-background opacity-50 z-0"></div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-6">
                        PLANITY <span className="text-text-muted text-2xl mx-4">VS</span> <span className="text-primary italic">STYLEOS</span>
                    </h2>
                    <p className="text-text-muted max-w-2xl mx-auto text-lg font-light">
                        Ne soyez plus un simple choix dans une liste. Devenez la référence Blue-Chip.
                    </p>
                </div>

                <div className="grid md:grid-cols-[1.5fr_1fr_1fr] md:border md:border-white/10 md:rounded-[2.5rem] md:overflow-visible md:bg-black/40 md:backdrop-blur-xl relative">
                    {/* Header Row - Desktop Only */}
                    <div className="hidden md:contents">
                        <div className="p-10 bg-white/5 border-b border-white/5 font-black text-gray-500 uppercase tracking-[0.3em] text-[10px]">
                            Architecture Système
                        </div>
                        <div className="p-10 flex items-center justify-center bg-white/5 border-b border-l border-white/5 font-black text-gray-600 uppercase tracking-[0.3em] text-[10px] text-center">
                            Modèle Classique
                        </div>
                        <div className="p-10 flex items-center justify-center bg-primary/10 border-b border-l border-primary/20 font-black text-primary uppercase tracking-[0.3em] text-[10px] text-center relative rounded-tr-[2.5rem]">
                            <div className="absolute top-0 right-0 w-2 h-2 bg-primary rounded-bl"></div>
                            StyleOS Dominance
                        </div>
                    </div>

                    {/* Data Rows */}
                    {features.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col md:contents group relative"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            {/* Feature Name */}
                            <div className={`p-8 md:p-10 flex items-center bg-white/5 md:bg-transparent border border-white/10 md:border-0 md:border-b md:border-white/5 rounded-t-3xl md:rounded-none transition-colors duration-300 relative z-10 
                                ${hoveredIndex === index ? 'md:bg-white/[0.08]' : ''}`}>
                                <div className={`p-2 rounded-xl mr-5 transition-colors duration-300 ${hoveredIndex === index ? 'bg-primary/20' : 'bg-white/5'}`}>
                                    <item.icon className={`w-6 h-6 transition-colors duration-300 ${hoveredIndex === index ? 'text-primary' : 'text-gray-500'}`} />
                                </div>
                                <div>
                                    <span className="font-black text-white text-lg block uppercase tracking-tight">{item.name}</span>
                                    <div className={`flex items-center gap-2 mt-1 transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}>
                                        <div className="w-1 h-1 bg-primary rounded-full animate-pulse"></div>
                                        <span className="text-[9px] font-bold text-primary uppercase tracking-widest">Conseil Stratégique</span>
                                    </div>
                                </div>
                            </div>

                            {/* Competitor */}
                            <div className={`p-8 md:p-10 flex items-center md:justify-center bg-black/40 md:bg-black/20 border-x border-white/10 md:border-0 md:border-b md:border-l md:border-white/5 transition-colors duration-300
                                ${hoveredIndex === index ? 'md:bg-white/[0.04]' : 'opacity-60'}`}>
                                <X className="w-5 h-5 text-red-500/30 md:hidden mr-4" />
                                <span className={`text-base font-medium transition-colors duration-300 ${hoveredIndex === index ? 'text-gray-300' : 'text-gray-500'}`}>{item.competitor}</span>
                            </div>

                            {/* Us */}
                            <div className={`p-8 md:p-10 flex items-center md:justify-center border border-white/10 md:border-0 md:border-b md:border-l md:border-primary/20 rounded-b-3xl md:rounded-none md:text-center transition-colors duration-300 relative z-10
                                ${hoveredIndex === index
                                    ? 'bg-primary/25 border-primary/50'
                                    : 'bg-primary/5'
                                }`}>
                                <Check className="w-6 h-6 text-primary md:hidden mr-4" />
                                <span className={`text-lg font-black tracking-tight text-white transition-colors duration-300 ${hoveredIndex === index ? 'text-primary' : ''}`}>{item.us}</span>

                                {/* Tooltip Explanation (Desktop) */}
                                {hoveredIndex === index && (
                                    <div className="hidden md:block absolute left-[105%] top-1/2 -translate-y-1/2 w-80 p-6 rounded-[2rem] bg-black/90 backdrop-blur-3xl border border-primary/30 shadow-[0_30px_60px_rgba(0,0,0,0.8)] z-50 animate-in fade-in slide-in-from-left-4 duration-300">
                                        <div className="absolute top-4 left-4 w-1 h-8 bg-primary rounded-full"></div>
                                        <h4 className="text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-3 ml-3">Insight Business</h4>
                                        <p className="text-gray-300 text-sm font-medium italic leading-relaxed ml-3">
                                            "{item.explanation}"
                                        </p>
                                        <div className="mt-4 flex justify-end">
                                            <Zap className="w-4 h-4 text-primary opacity-40" />
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ComparisonTable;
