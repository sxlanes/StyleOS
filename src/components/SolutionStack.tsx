import { useState } from 'react';
import { Monitor, Calculator, Cpu, TrendingUp, Check, ArrowRight, Star } from 'lucide-react';

const features = [
    {
        id: 'web',
        icon: Monitor,
        title: "Dominance Digitale",
        subtitle: "Votre image, votre autorité.",
        description: "Votre salon est une destination, pas une commodité. Nous érigeons un bastion digital sur-mesure qui impose votre style dès le premier clic. C'est l'expérience Blue-Chip, sans compromis.",
        details: [
            "Branding 'Dark Luxury' Sur-Mesure",
            "SEO Local de Haute Précision",
            "Entonnoirs de Réservation Haute-Vitesse",
            "Propriété Totale (Zéro Commission)"
        ],
        gradient: "from-blue-500/20 to-purple-500/20",
        color: "text-blue-400"
    },
    {
        id: 'finance',
        icon: Calculator,
        title: "Pilotage Financier",
        subtitle: "La clarté absolue sur vos profits.",
        description: "Arrêtez de piloter à l'aveugle. StyleOS digère vos factures, calcule vos marges en temps réel et libère 4 HEURES de gestion administrative par semaine.",
        details: [
            "Dashboard de Bénéfice Net (Réel)",
            "Scan de Factures IA (4h gagnées/sem)",
            "Catégorisation Automatique des Dépenses",
            "Export Comptable en 1 Clic"
        ],
        gradient: "from-green-500/20 to-emerald-500/20",
        color: "text-emerald-400"
    },
    {
        id: 'ai',
        icon: Cpu,
        title: "Sarah IA",
        subtitle: "Dominance Opérationnelle Tier 1.",
        description: "Pendant que vous créez, Sarah domine votre accueil. Elle gère les flux entrants, filtre les opportunités, et sécurise votre agenda. C'est votre rempart contre les interruptions, votre moteur de croissance.",
        details: [
            "Réponse Téléphonique Instantanée",
            "Full WhatsApp Automation AI",
            "Voix Humaine & Naturelle (Elite)",
            "Gestion Intelligente des Agendas"
        ],
        gradient: "from-[#D4AF37]/20 to-orange-500/20",
        color: "text-[#D4AF37]"
    },
    {
        id: 'growth',
        icon: TrendingUp,
        title: "Croissance Sarah IA",
        subtitle: "Elle attire les clients pour vous.",
        description: "Sarah IA ne se contente pas de gérer vos rendez-vous. Elle analyse les tendances pour piloter votre stratégie de contenu et transformer vos followers en clients fidèles et à haut panier moyen.",
        details: [
            "Stratégie de Contenu Pilotée par IA",
            "Montage Vidéo & Design Automatisé",
            "Croissance d'Audience Ciblée",
            "Veille Concurrentielle Temps-Réel"
        ],
        gradient: "from-pink-500/20 to-rose-500/20",
        color: "text-pink-400"
    },
    {
        id: 'reviews',
        icon: Star,
        title: "Réputation by Sarah",
        subtitle: "Elle protège votre image 24h/7.",
        description: "Transformez chaque client satisfait en ambassadeur. Sarah IA sollicite, filtre et répond à vos avis Google automatiquement pour vous placer en pole position sur les recherches locales.",
        details: [
            "Sollicitation Automatique Sarah",
            "Filtrage Anti-Avis Négatifs",
            "Réponses IA Personnalisées",
            "Boost SEO Google Maps Natif"
        ],
        gradient: "from-yellow-500/20 to-amber-500/20",
        color: "text-amber-400"
    }
];

const SolutionStack = () => {
    const [activeFeature, setActiveFeature] = useState(0);

    return (
        <section id="features" className="py-32 bg-background relative overflow-hidden">
            {/* Background Ambience */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none opacity-50"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16 md:mb-24">
                    <h2 className="text-3xl md:text-6xl font-bold mb-6 tracking-tight uppercase">
                        L'Écosystème <span className="text-primary italic">StyleOS</span>
                    </h2>
                    <p className="text-lg md:text-xl text-text-muted max-w-3xl mx-auto font-light px-4">
                        Une suite d'outils interconnectés pour transformer votre salon en empire.
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">

                    {/* Navigation - Horizontal Scroll on Mobile, Vertical on Desktop */}
                    <div className="lg:col-span-5 flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 px-2 lg:px-0 no-scrollbar snap-x">
                        {features.map((feature, index) => (
                            <button
                                key={feature.id}
                                onClick={() => setActiveFeature(index)}
                                className={`group text-left p-5 lg:p-6 rounded-2xl border transition-all duration-500 relative shrink-0 w-[80vw] sm:w-[50vw] lg:w-full snap-center overflow-hidden h-full lg:h-auto ${activeFeature === index
                                    ? 'bg-white/5 border-primary/50 shadow-[0_0_30px_rgba(0,0,0,0.5)]'
                                    : 'bg-surface/20 border-white/5 hover:bg-white/5'
                                    }`}
                            >
                                <div className={`absolute top-0 left-0 w-1 lg:w-1 lg:h-full h-1 lg:bg-gradient-to-b bg-gradient-to-r ${feature.gradient} transition-opacity duration-300 ${activeFeature === index ? 'opacity-100' : 'opacity-0'}`}></div>

                                <div className="flex items-center gap-4 relative z-10">
                                    <div className={`p-2.5 rounded-xl bg-black/50 border border-white/10 transition-colors ${activeFeature === index ? feature.color : 'text-gray-500 group-hover:text-gray-300'
                                        }`}>
                                        {(() => {
                                            const Icon = feature.icon;
                                            return <Icon className="w-5 h-5 lg:w-6 lg:h-6" />;
                                        })()}
                                    </div>
                                    <div>
                                        <h3 className={`text-base lg:text-lg font-bold transition-colors ${activeFeature === index ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>
                                            {feature.title}
                                        </h3>
                                        <p className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors line-clamp-1">
                                            {feature.subtitle}
                                        </p>
                                    </div>
                                    <ArrowRight className={`hidden lg:block w-5 h-5 text-primary absolute right-4 transition-all duration-300 ${activeFeature === index ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`} />
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Display Area (Right Side) */}
                    <div className="lg:col-span-7">
                        <div className="relative rounded-3xl border border-white/10 bg-black/60 overflow-hidden min-h-[500px] flex flex-col shadow-2xl">
                            {/* Dynamic Background */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${features[activeFeature].gradient} opacity-20 transition-all duration-500`}></div>
                            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>

                            <div className="p-10 relative z-10 flex flex-col h-full">
                                <div className="mb-8">
                                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest mb-6 ${features[activeFeature].color}`}>
                                        {(() => {
                                            const ActiveIcon = features[activeFeature].icon;
                                            return <ActiveIcon className="w-3 h-3" />;
                                        })()}
                                        Module {activeFeature + 1}
                                    </div>
                                    <h3 className="text-4xl font-bold text-white mb-6 leading-tight">
                                        {features[activeFeature].description}
                                    </h3>
                                </div>

                                <div className="mt-auto grid sm:grid-cols-2 gap-4">
                                    {features[activeFeature].details.map((detail, i) => (
                                        <div key={i} className="flex items-center gap-3 bg-black/40 p-4 rounded-xl border border-white/5 backdrop-blur-sm hover:border-white/10 transition-colors">
                                            <div className="min-w-[24px] h-6 rounded-full bg-white/10 flex items-center justify-center">
                                                <Check className="w-3 h-3 text-white" />
                                            </div>
                                            <span className="text-sm text-gray-300 font-medium">{detail}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default SolutionStack;
