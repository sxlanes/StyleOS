import { useState } from 'react';
import { Check, X, Zap, Globe, Phone, Database, Star, ChevronDown, Plus } from 'lucide-react';

const ComparisonTable = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const features = [
        {
            icon: Globe,
            name: "Positionnement Menu",
            competitor: "Ligne Grise sur Annuaire",
            us: "Bastion Digital Autonome",
            explanation: "Sur Planity, vous êtes un numéro parmi 20 concurrents. Avec StyleOS, vous êtes la seule et unique destination. On ne vous compare pas, on vous admire."
        },
        {
            icon: Phone,
            name: "Gestion Appels",
            competitor: "Standard délaissé",
            us: "Sarah IA (Réception Elite)",
            explanation: "Ne perdez plus 30% de votre chiffre d'affaires à cause des appels manqués. Sarah IA gère tout avec l'élégance d'une réceptionniste humaine."
        },
        {
            icon: Database,
            name: "Propriété Données",
            competitor: "Otage du Système",
            us: "Contrôle Total & Légal",
            explanation: "Vos clients restent VOS clients. Si vous quittez Planity, vous perdez tout. Avec StyleOS, votre base de données est votre actif le plus précieux."
        },
        {
            icon: Star,
            name: "Automatisation Avis",
            competitor: "Gestion Manuelle",
            us: "Propulseur de Réputation IA",
            explanation: "Le système sollicite, filtre et publie vos avis Google automatiquement. Transformez chaque coupe en une publicité 5 étoiles."
        },
        {
            icon: Zap,
            name: "Perception Client",
            competitor: "Commodité de quartier",
            us: "Marque de Luxe (Tier 1)",
            explanation: "Passez de 'celui qui coupe des cheveux' à 'l'établissement d'élite'. Notre design Dark Luxury justifie naturellement vos tarifs premium."
        }
    ];

    const toggleExpand = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

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

                <div className="grid md:grid-cols-[1.5fr_1fr_1fr] md:border md:border-white/10 md:rounded-[2.5rem] md:overflow-hidden md:bg-black/40 md:backdrop-blur-xl relative shadow-2xl">
                    {/* Header Row - Desktop Only */}
                    <div className="hidden md:contents">
                        <div className="p-12 bg-white/5 border-b border-white/5 font-black text-gray-400 uppercase tracking-[0.4em] text-xs">
                            Analyse Stratégique
                        </div>
                        <div className="p-12 flex items-center justify-center bg-white/5 border-b border-l border-white/5 font-black text-gray-500 uppercase tracking-[0.4em] text-xs text-center">
                            Modèle Planity
                        </div>
                        <div className="p-12 flex items-center justify-center bg-primary/10 border-b border-l border-primary/20 font-black text-primary uppercase tracking-[0.4em] text-xs text-center relative rounded-tr-[2.5rem]">
                            <div className="absolute top-0 right-0 w-2 h-2 bg-primary rounded-bl"></div>
                            VOTRE EMPIRE STYLEOS
                        </div>
                    </div>

                    {/* Data Rows */}
                    {features.map((item, index) => (
                        <div
                            key={index}
                            className={`flex flex-col md:contents group relative cursor-pointer ${expandedIndex === index ? 'z-20' : 'z-10'}`}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            onClick={() => toggleExpand(index)}
                        >
                            {/* Feature Name */}
                            <div className={`p-8 md:p-10 flex items-center bg-white/5 md:bg-transparent border border-white/10 md:border-0 md:border-b md:border-white/5 rounded-t-3xl md:rounded-none transition-all duration-300 relative
                                ${hoveredIndex === index || expandedIndex === index ? 'md:bg-white/[0.08]' : ''}`}>
                                <div className={`p-2 rounded-xl mr-5 transition-colors duration-300 ${hoveredIndex === index || expandedIndex === index ? 'bg-primary/20' : 'bg-white/5'}`}>
                                    <item.icon className={`w-6 h-6 transition-colors duration-300 ${hoveredIndex === index || expandedIndex === index ? 'text-primary' : 'text-gray-500'}`} />
                                </div>
                                <div className="flex-1">
                                    <span className="font-black text-white text-lg block uppercase tracking-tight">{item.name}</span>
                                    <div className={`flex items-center gap-2 mt-2 transition-all duration-300 group-hover:translate-x-2 ${expandedIndex === index ? 'opacity-50' : 'opacity-100'}`}>
                                        <span className="text-[10px] font-bold text-primary uppercase tracking-widest flex items-center gap-1">
                                            <Plus className="w-3 h-3" /> Info
                                        </span>
                                    </div>
                                </div>
                                {/* Chevron Indicator */}
                                <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform duration-300 transform ml-4 ${expandedIndex === index ? 'rotate-180 text-primary' : ''}`} />
                            </div>

                            {/* Competitor */}
                            <div className={`p-8 md:p-10 flex items-center md:justify-center bg-black/40 md:bg-black/20 border-x border-white/10 md:border-0 md:border-b md:border-l md:border-white/5 transition-colors duration-300
                                ${hoveredIndex === index || expandedIndex === index ? 'md:bg-white/[0.04]' : 'opacity-60'}`}>
                                <X className="w-5 h-5 text-red-500/30 md:hidden mr-4" />
                                <span className={`text-base font-medium transition-colors duration-300 ${hoveredIndex === index || expandedIndex === index ? 'text-gray-300' : 'text-gray-500'}`}>{item.competitor}</span>
                            </div>

                            {/* Us */}
                            <div className={`p-8 md:p-10 flex items-center md:justify-center border border-white/10 md:border-0 md:border-b md:border-l md:border-primary/20 rounded-b-3xl md:rounded-none md:text-center transition-all duration-300 relative
                                ${expandedIndex === index
                                    ? 'bg-primary/25 border-primary/50'
                                    : hoveredIndex === index ? 'bg-primary/15' : 'bg-primary/5'
                                }`}>
                                <Check className="w-6 h-6 text-primary md:hidden mr-4" />
                                <span className={`text-lg font-black tracking-tight text-white transition-colors duration-300 ${hoveredIndex === index || expandedIndex === index ? 'text-primary' : ''}`}>{item.us}</span>
                            </div>

                            {/* Expanded Explanation (Desktop & Mobile) - Accionable below the rows */}
                            {expandedIndex === index && (
                                <div className="col-span-1 md:col-span-3 bg-primary/10 border-b border-primary/20 p-8 md:p-12 animate-in slide-in-from-top-4 duration-500 overflow-hidden">
                                    <div className="max-w-4xl mx-auto flex items-start gap-8">
                                        <div className="hidden md:block w-1 h-20 bg-primary rounded-full shrink-0"></div>
                                        <div>
                                            <h4 className="text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-4">Vision Stratégique StyleOS</h4>
                                            <p className="text-white text-xl md:text-2xl font-black italic leading-tight tracking-tight">
                                                "{item.explanation}"
                                            </p>
                                        </div>
                                        <Zap className="hidden md:block w-12 h-12 text-primary opacity-20 ml-auto shrink-0" />
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ComparisonTable;
