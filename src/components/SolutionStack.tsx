import { useState } from 'react';
import { Monitor, Calculator, Cpu, TrendingUp, Check, ArrowRight } from 'lucide-react';

const features = [
    {
        id: 'web',
        icon: Monitor,
        title: "Vitrine & Identité",
        subtitle: "Ne soyez plus un parmi d'autres.",
        description: "Votre salon mérite mieux qu'une page standardisée. Nous créons un site web immersive qui capture l'essence de votre marque. C'est votre territoire, vos règles, votre image.",
        details: [
            "Design 'Dark Luxury' sur mesure",
            "Optimisé pour la conversion (Réservation)",
            "SEO Local Dominant (Google Maps & Search)",
            "Expérience Mobile-First Fluide"
        ],
        gradient: "from-blue-500/20 to-purple-500/20",
        color: "text-blue-400"
    },
    {
        id: 'finance',
        icon: Calculator,
        title: "Pilotage Financier",
        subtitle: "La clarté absolue sur vos profits.",
        description: "Arrêtez de piloter à l'aveugle. StyleOS digère vos factures, calcule vos marges en temps réel et prépare tout pour votre comptable. Sachez exactement ce qui rentre dans votre poche.",
        details: [
            "Dashboard de Bénéfice Net (Réel)",
            "Scan de Factures par IA (Photo)",
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
        subtitle: "Votre secrétariat 24/7.",
        description: "Pendant que vous coupez, Sarah répond. Elle gère les appels, filtre les curieux, et remplit votre agenda. Plus d'appels manqués, plus d'interruptions, juste du business.",
        details: [
            "Réponse Téléphonique Instantanée",
            "Voix Humaine & Naturelle",
            "Gestion des Rendez-vous & Annulations",
            "Réponses aux Questions Fréquentes"
        ],
        gradient: "from-[#D4AF37]/20 to-orange-500/20",
        color: "text-[#D4AF37]"
    },
    {
        id: 'growth',
        icon: TrendingUp,
        title: "Croissance & Réseaux",
        subtitle: "Attirez les clients que vous voulez.",
        description: "On ne poste pas pour faire joli. On poste pour attirer. Notre équipe gère votre stratégie de contenu pour transformer vos followers en clients fidèles et augmenter votre ticket moyen.",
        details: [
            "Stratégie de Contenu Mensuelle",
            "Montage Vidéo & Design Posts",
            "Croissance d'Audience Ciblée",
            "Gestion de la E-Réputation"
        ],
        gradient: "from-pink-500/20 to-rose-500/20",
        color: "text-pink-400"
    }
];

const SolutionStack = () => {
    const [activeFeature, setActiveFeature] = useState(0);

    return (
        <section id="features" className="py-32 bg-background relative overflow-hidden">
            {/* Background Ambience */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none opacity-50"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-24">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight uppercase">
                        L'Écosystème <span className="text-primary">StyleOS</span>
                    </h2>
                    <p className="text-xl text-text-muted max-w-3xl mx-auto font-light">
                        Une suite d'outils interconnectés pour transformer votre salon en empire.
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-12 items-start">

                    {/* Navigation (Left Side) */}
                    <div className="lg:col-span-5 flex flex-col gap-4">
                        {features.map((feature, index) => (
                            <button
                                key={feature.id}
                                onClick={() => setActiveFeature(index)}
                                className={`group text-left p-6 rounded-2xl border transition-all duration-300 relative overflow-hidden ${activeFeature === index
                                    ? 'bg-white/5 border-primary/50 shadow-[0_0_30px_rgba(0,0,0,0.5)]'
                                    : 'bg-transparent border-transparent hover:bg-white/5'
                                    }`}
                            >
                                <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${feature.gradient} transition-opacity duration-300 ${activeFeature === index ? 'opacity-100' : 'opacity-0'}`}></div>

                                <div className="flex items-center gap-4 relative z-10">
                                    <div className={`p-3 rounded-xl bg-black/50 border border-white/10 transition-colors ${activeFeature === index ? feature.color : 'text-gray-500 group-hover:text-gray-300'
                                        }`}>
                                        {(() => {
                                            const Icon = feature.icon;
                                            return <Icon className="w-6 h-6" />;
                                        })()}
                                    </div>
                                    <div>
                                        <h3 className={`text-lg font-bold transition-colors ${activeFeature === index ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>
                                            {feature.title}
                                        </h3>
                                        <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors">
                                            {feature.subtitle}
                                        </p>
                                    </div>
                                    {activeFeature === index && (
                                        <ArrowRight className="w-5 h-5 text-primary absolute right-4 opacity-100 animate-in slide-in-from-left-2" />
                                    )}
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
