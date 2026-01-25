import { useState } from 'react';
import { Check, X, Zap, Globe, Phone, Database, Star, ChevronDown, Plus } from 'lucide-react';

const ComparisonTable = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const features = [
        {
            icon: Globe,
            iconColor: "text-blue-400",
            iconBg: "bg-blue-500/10",
            iconBgHover: "bg-blue-500/20",
            name: "Positionnement Menu",
            competitor: "Ligne Grise sur Annuaire",
            us: "Bastion Digital Autonome",
            explanation: "Sur Planity, vous êtes un numéro parmi 20 concurrents. Avec StyleOS, vous êtes la seule et unique destination. On ne vous compare pas, on vous admire."
        },
        {
            icon: Phone,
            iconColor: "text-green-400",
            iconBg: "bg-green-500/10",
            iconBgHover: "bg-green-500/20",
            name: "Gestion Appels",
            competitor: "Standard délaissé",
            us: "Sarah IA (Réception Elite)",
            explanation: "Ne perdez plus 30% de votre chiffre d'affaires à cause des appels manqués. Sarah IA gère tout avec l'élégance d'une réceptionniste humaine."
        },
        {
            icon: Database,
            iconColor: "text-purple-400",
            iconBg: "bg-purple-500/10",
            iconBgHover: "bg-purple-500/20",
            name: "Propriété Données",
            competitor: "Otage du Système",
            us: "Contrôle Total & Légal",
            explanation: "Vos clients restent VOS clients. Si vous quittez Planity, vous perdez tout. Avec StyleOS, votre base de données est votre actif le plus précieux."
        },
        {
            icon: Star,
            iconColor: "text-yellow-400",
            iconBg: "bg-yellow-500/10",
            iconBgHover: "bg-yellow-500/20",
            name: "Automatisation Avis",
            competitor: "Gestion Manuelle",
            us: "Propulseur de Réputation IA",
            explanation: "Le système sollicite, filtre et publie vos avis Google automatiquement. Transformez chaque coupe en une publicité 5 étoiles."
        },
        {
            icon: Zap,
            iconColor: "text-primary",
            iconBg: "bg-primary/10",
            iconBgHover: "bg-primary/20",
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
        <section className="bg-black relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 relative z-10">
                {/* Header is handled by LandingPage wrapper */}

                <div className="grid md:grid-cols-[1.5fr_1fr_1fr] md:border md:border-white/10 md:rounded-[2.5rem] md:overflow-hidden bg-black relative shadow-2xl">
                    {/* Header Row - Desktop Only */}
                    <div className="hidden md:contents">
                        <div className="p-12 bg-white/5 border-b border-white/5 font-black text-gray-500 uppercase tracking-[0.2em] text-sm">
                            Analyse Stratégique
                        </div>
                        <div className="p-12 flex items-center justify-center bg-white/5 border-b border-l border-white/5 font-black text-gray-400 uppercase tracking-[0.2em] text-sm text-center">
                            Modèle Planity
                        </div>
                        <div className="p-12 flex items-center justify-center bg-primary/10 border-b border-l border-primary/20 font-black text-primary uppercase tracking-[0.2em] text-lg text-center relative rounded-tr-[2.5rem] shadow-[inset_0_0_30px_rgba(212,175,55,0.1)]">
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
                            <div className={`p-8 md:p-10 flex items-center bg-black border border-white/10 md:border-0 md:border-b md:border-white/5 rounded-t-3xl md:rounded-none transition-all duration-300 relative
                                ${hoveredIndex === index || expandedIndex === index ? 'md:bg-white/[0.08]' : ''}`}>
                                <div className={`p-3 rounded-xl mr-5 transition-all duration-300 ${hoveredIndex === index || expandedIndex === index ? item.iconBgHover : item.iconBg} shadow-md`}>
                                    <item.icon className={`w-7 h-7 transition-colors duration-300 ${item.iconColor}`} />
                                </div>
                                <div className="flex-1">
                                    <span className="font-black text-white text-xl block uppercase tracking-tight">{item.name}</span>
                                    <div className={`flex items-center gap-2 mt-2 transition-all duration-300 group-hover:translate-x-2 ${expandedIndex === index ? 'opacity-100 text-primary' : 'opacity-70 text-gray-500'}`}>
                                        <div className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-1 border border-current px-2 py-1 rounded-full group-hover:bg-primary group-hover:text-black transition-all">
                                            <Plus className="w-3 h-3" /> Plus d'infos
                                        </div>
                                    </div>
                                </div>
                                {/* Chevron Indicator */}
                                <ChevronDown className={`w-6 h-6 text-gray-500 transition-transform duration-300 transform ml-4 ${expandedIndex === index ? 'rotate-180 text-primary' : ''}`} />
                            </div>

                            {/* Competitor */}
                            <div className={`p-8 md:p-10 flex items-center md:justify-center bg-black border-x border-white/10 md:border-0 md:border-b md:border-l md:border-white/5 transition-colors duration-300
                                ${hoveredIndex === index || expandedIndex === index ? 'md:bg-white/[0.04]' : 'opacity-60'}`}>
                                <X className="w-5 h-5 text-red-500/30 md:hidden mr-4" />
                                <span className={`text-lg font-bold uppercase tracking-wide transition-colors duration-300 ${hoveredIndex === index || expandedIndex === index ? 'text-gray-300' : 'text-gray-600'}`}>{item.competitor}</span>
                            </div>

                            {/* Us */}
                            <div className={`p-8 md:p-10 flex items-center md:justify-center border border-white/10 md:border-0 md:border-b md:border-l md:border-primary/20 rounded-b-3xl md:rounded-none md:text-center transition-all duration-300 relative
                                ${expandedIndex === index
                                    ? 'bg-primary/25 border-primary/50'
                                    : hoveredIndex === index ? 'bg-primary/15' : 'bg-primary/5'
                                }`}>
                                <Check className="w-6 h-6 text-primary md:hidden mr-4" />
                                <span className={`text-2xl font-black tracking-tighter text-white transition-colors duration-300 uppercase ${hoveredIndex === index || expandedIndex === index ? 'text-primary' : ''}`}>{item.us}</span>
                            </div>

                            {/* Expanded Explanation */}
                            {expandedIndex === index && (
                                <div className="col-span-1 md:col-span-3 bg-primary/10 border-b border-primary/20 p-8 md:p-12 animate-in slide-in-from-top-4 duration-500 overflow-hidden">
                                    <div className="max-w-4xl mx-auto flex items-start gap-8">
                                        <div className="hidden md:block w-1 h-20 bg-primary rounded-full shrink-0 shadow-[0_0_15px_#D4AF37]"></div>
                                        <div>
                                            <h4 className="text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-4">Vision Stratégique StyleOS</h4>
                                            <p className="text-white text-xl md:text-2xl font-black italic leading-tight tracking-tight">
                                                "{item.explanation}"
                                            </p>
                                        </div>
                                        <Zap className="hidden md:block w-12 h-12 text-primary opacity-20 ml-auto shrink-0 animate-pulse" />
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
