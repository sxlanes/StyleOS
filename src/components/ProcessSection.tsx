import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { Database, BarChart3, Bot, CheckCircle, Sparkles, TrendingUp } from 'lucide-react';

const ProcessSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"]
    });

    // Progress bar animation
    const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    // Individual step animations (5 steps total)
    const step1Opacity = useTransform(scrollYProgress, [0, 0.15, 0.25], [0, 1, 0]);
    const step1Scale = useTransform(scrollYProgress, [0, 0.15, 0.25], [0.8, 1, 0.95]);

    const step2Opacity = useTransform(scrollYProgress, [0.2, 0.35, 0.45], [0, 1, 0]);
    const step2Scale = useTransform(scrollYProgress, [0.2, 0.35, 0.45], [0.8, 1, 0.95]);

    const step3Opacity = useTransform(scrollYProgress, [0.4, 0.55, 0.65], [0, 1, 0]);
    const step3Scale = useTransform(scrollYProgress, [0.4, 0.55, 0.65], [0.8, 1, 0.95]);

    const step4Opacity = useTransform(scrollYProgress, [0.6, 0.75, 0.85], [0, 1, 0]);
    const step4Scale = useTransform(scrollYProgress, [0.6, 0.75, 0.85], [0.8, 1, 0.95]);

    const step5Opacity = useTransform(scrollYProgress, [0.8, 0.9, 1], [0, 1, 1]);
    const step5Scale = useTransform(scrollYProgress, [0.8, 0.9, 1], [0.8, 1, 1]);

    const steps = [
        {
            opacity: step1Opacity,
            scale: step1Scale,
            icon: Database,
            number: "01",
            title: "Migration de Données",
            description: "Nous récupérons l'intégralité de votre historique Planity/Booksy. Fichiers clients, historique de RDV, préférences. Transition invisible en 24h.",
            color: "text-blue-400",
            bgGradient: "from-blue-500/10 to-transparent"
        },
        {
            opacity: step2Opacity,
            scale: step2Scale,
            icon: Sparkles,
            number: "02",
            title: "Création Site Web Elite",
            description: "Design sur-mesure, shooting photo professionnel, intégration de votre identité visuelle. Configuration SEO local. Votre nouveau bastion digital.",
            color: "text-purple-400",
            bgGradient: "from-purple-500/10 to-transparent"
        },
        {
            opacity: step3Opacity,
            scale: step3Scale,
            icon: Bot,
            number: "03",
            title: "Activation Sarah IA",
            description: "Sarah prend les commandes. Configuration vocale, synchronisation agenda en temps réel. Elle gère 100% de vos appels entrants dès maintenant.",
            color: "text-primary",
            bgGradient: "from-primary/10 to-transparent"
        },
        {
            opacity: step4Opacity,
            scale: step4Scale,
            icon: BarChart3,
            number: "04",
            title: "Dashboard Financier Live",
            description: "Pilotage en temps réel de votre CA, marges, taux d'occupation. Analytics prédictifs et rapports automatisés pour prendre les bonnes décisions.",
            color: "text-emerald-400",
            bgGradient: "from-emerald-500/10 to-transparent"
        },
        {
            opacity: step5Opacity,
            scale: step5Scale,
            icon: TrendingUp,
            number: "05",
            title: "Boucle de Croissance Infinie",
            description: "Automatisation des avis 5 étoiles, boost SEO permanent, acquisition client automatique. La machine ne s'arrête jamais. Vous êtes libre.",
            color: "text-green-400",
            bgGradient: "from-green-500/10 to-transparent"
        }
    ];

    return (
        <div ref={sectionRef} className="relative z-10 bg-black h-[500vh]">
            <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">

                {/* Floating Title - Higher position */}
                <div className="absolute top-16 left-0 w-full text-center z-50 pointer-events-none transition-opacity duration-500" style={{ opacity: 1 }}>
                    <div className="relative inline-block">
                        <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full pointer-events-none"></div>
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 text-white relative drop-shadow-2xl">
                            Votre Parcours <span className="text-primary">StyleOS</span>
                        </h2>
                        <p className="text-gray-500 uppercase tracking-[0.2em] text-[10px] md:text-xs font-bold bg-black/80 backdrop-blur-md py-2 rounded-full inline-block px-6 border border-white/10 shadow-2xl">
                            De la signature au pilotage automatique en 10 jours
                        </p>
                    </div>
                </div>

                {/* Progress Bar Indicator - LEFT SIDE */}
                <div className="absolute left-8 top-1/2 -translate-y-1/2 h-64 w-1 bg-white/10 rounded-full hidden md:block z-50">
                    <motion.div
                        className="w-full bg-primary rounded-full shadow-[0_0_15px_#D4AF37]"
                        style={{ height: progressHeight }}
                    />
                </div>

                <div className="relative w-full h-full max-w-5xl mx-auto px-6 flex items-center justify-center mt-24">
                    {/* All Steps Overlapping */}
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            style={{ opacity: step.opacity, scale: step.scale }}
                            className="absolute inset-0 flex items-center justify-center p-6"
                        >
                            <div className={`w-full max-w-3xl bg-gradient-to-br ${step.bgGradient} backdrop-blur-xl border border-white/10 rounded-[3rem] p-12 md:p-16 shadow-2xl relative overflow-hidden`}>
                                {/* Background glow */}
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 to-transparent pointer-events-none"></div>

                                <div className="relative z-10">
                                    {/* Step Number Badge */}
                                    <div className="inline-flex items-center gap-3 mb-8">
                                        <div className={`w-16 h-16 rounded-2xl bg-black/50 border-2 border-white/20 flex items-center justify-center ${step.color} shadow-lg`}>
                                            <step.icon size={32} strokeWidth={1.5} />
                                        </div>
                                        <div className={`text-7xl font-black ${step.color} opacity-30`}>{step.number}</div>
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-6 leading-tight">
                                        {step.title}
                                    </h3>
                                    <p className="text-xl text-gray-300 leading-relaxed font-light">
                                        {step.description}
                                    </p>

                                    {/* Completion Check */}
                                    <div className="mt-8 flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center border-2 border-green-500/40">
                                            <CheckCircle size={18} className="text-green-400" strokeWidth={3} />
                                        </div>
                                        <span className="text-sm text-green-400 font-bold uppercase tracking-widest">Étape Complétée</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProcessSection;
