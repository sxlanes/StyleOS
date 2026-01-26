import { useRef, useState, MouseEvent } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { Database, BarChart3, Bot, CheckCircle, Sparkles, TrendingUp, Search, Layers, ShieldCheck, Calendar, MessageCircle, Megaphone } from 'lucide-react';

// Separate Card Component to handle 3D tilt individually
const Process3DCard = ({ step }: any) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateXValue = ((y - centerY) / centerY) * -8;
        const rotateYValue = ((x - centerX) / centerX) * 8;
        setRotateX(rotateXValue);
        setRotateY(rotateYValue);
    };

    const handleMouseLeave = () => {
        setRotateX(0);
        setRotateY(0);
    };

    return (
        <motion.div
            style={{ opacity: step.opacity, scale: step.scale }}
            className="absolute inset-0 flex items-center justify-center p-6 pointer-events-none"
        >
            <div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="w-full max-w-4xl perspective-1000 pointer-events-auto"
            >
                <motion.div
                    className={`w-full bg-gradient-to-br ${step.bgGradient} backdrop-blur-xl border border-white/10 rounded-[3rem] p-8 md:p-12 lg:p-16 shadow-2xl relative overflow-hidden transition-all duration-200`}
                    style={{
                        rotateX,
                        rotateY,
                        transformStyle: "preserve-3d"
                    }}
                >
                    {/* Background glow */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 to-transparent pointer-events-none z-0"></div>

                    <div className="relative z-10 transform-style-3d">
                        {/* Step Number Badge */}
                        <div className="inline-flex items-center gap-4 mb-6 md:mb-8">
                            <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-black/50 border-2 border-white/20 flex items-center justify-center ${step.color} shadow-lg`}>
                                <step.icon size={32} strokeWidth={1.5} />
                            </div>
                            <div className={`text-6xl md:text-7xl font-black ${step.color} opacity-30`}>{step.number}</div>
                        </div>

                        {/* Content */}
                        <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-6 leading-tight drop-shadow-lg">
                            {step.title}
                        </h3>

                        {/* Special Layout for Step 3 - Web Elite */}
                        {step.isWebElite ? (
                            <div className="mb-8">
                                <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light mb-6">
                                    {step.description}
                                </p>
                                <div className="relative rounded-xl overflow-hidden border border-white/10 group-hover:border-purple-500/30 transition-all shadow-2xl">
                                    <div className="absolute inset-0 bg-purple-900/20 mix-blend-overlay z-10"></div>
                                    <div className="grid grid-cols-2 gap-[1px] bg-white/5">
                                        <div className="aspect-square bg-[#0a0a0a] flex items-center justify-center p-4">
                                            <div className="w-full h-full border border-white/5 rounded-lg flex flex-col gap-2 p-2">
                                                <div className="h-2 w-1/3 bg-white/10 rounded"></div>
                                                <div className="h-16 w-full bg-white/5 rounded flex items-center justify-center">
                                                    <div className="w-8 h-8 rounded-full bg-purple-500/20"></div>
                                                </div>
                                                <div className="flex-1 grid grid-cols-2 gap-2">
                                                    <div className="bg-white/5 rounded"></div>
                                                    <div className="bg-white/5 rounded"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="aspect-square bg-[#0a0a0a] flex items-center justify-center p-4">
                                            <div className="text-center">
                                                <div className="text-2xl font-black text-white mb-1">98/100</div>
                                                <div className="text-[10px] text-gray-500 uppercase tracking-widest">Score Google</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                                </div>
                            </div>
                        ) : step.isInfrastructure ? (
                            <div className="flex flex-wrap justify-center gap-4 mb-8 max-w-lg mx-auto relative perspective-500">
                                {/* Central Node */}
                                <div className="absolute inset-0 bg-orange-500/5 blur-3xl rounded-full z-0"></div>

                                {/* Orbiting Satellites */}
                                <div className="absolute inset-0 border border-orange-500/20 rounded-full animate-[spin_10s_linear_infinite] pointer-events-none opacity-30"></div>
                                <div className="absolute inset-4 border border-orange-500/10 rounded-full animate-[spin_15s_linear_infinite_reverse] pointer-events-none opacity-20"></div>

                                {[
                                    { icon: Calendar, label: "Booking" },
                                    { icon: Bot, label: "Sarah IA" },
                                    { icon: BarChart3, label: "Finance" },
                                    { icon: MessageCircle, label: "Avis" },
                                    { icon: Megaphone, label: "Marketing" }
                                ].map((item, i) => (
                                    <div key={i} className={`flex flex-col items-center gap-2 p-3 w-24 bg-black/60 backdrop-blur-md rounded-xl border border-white/10 hover:border-${step.baseColor}-500/50 transition-all group z-10 hover:scale-110 shadow-lg`}>
                                        <div className={`w-8 h-8 rounded-lg bg-${step.baseColor}-500/20 flex items-center justify-center text-${step.baseColor}-400 group-hover:text-white transition-colors`}>
                                            <item.icon size={16} />
                                        </div>
                                        <span className="text-[10px] font-bold text-gray-300 uppercase tracking-wide">{item.label}</span>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light mb-8">
                                {step.description}
                            </p>
                        )}

                        {/* Completion Check */}
                        <div className="mt-4 flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center border-2 border-green-500/40 shadow-[0_0_10px_rgba(16,185,129,0.3)]">
                                <CheckCircle size={18} className="text-green-400" strokeWidth={3} />
                            </div>
                            <span className="text-sm text-green-400 font-bold uppercase tracking-widest">
                                {step.number === "05" ? "Liberté Atteinte" : "Étape Complétée"}
                            </span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

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
            icon: Search,
            number: "01",
            title: "Audit Complet de Votre Marque",
            description: "Analyse approfondie de votre identité visuelle, positionnement marché, et présence digitale actuelle. Nous identifions vos forces et opportunités de croissance cachées.",
            color: "text-cyan-400",
            bgGradient: "from-cyan-500/10 to-transparent",
            baseColor: "cyan"
        },
        {
            opacity: step2Opacity,
            scale: step2Scale,
            icon: Database,
            number: "02",
            title: "Migration de Données",
            description: "Récupération sécurisée de votre historique Planity/Booksy. Fichiers clients, historique de RDV, préférences. Transition invisible en 24h sans perte de données.",
            color: "text-blue-400",
            bgGradient: "from-blue-500/10 to-transparent",
            baseColor: "blue"
        },
        {
            opacity: step3Opacity,
            scale: step3Scale,
            icon: Sparkles,
            number: "03",
            title: "Création Site Web Elite",
            description: "Design sur-mesure, shooting photo professionnel, intégration de votre identité visuelle. Configuration SEO local optimisée. Votre nouveau bastion digital premium.",
            color: "text-purple-400",
            bgGradient: "from-purple-500/10 to-transparent",
            baseColor: "purple",
            isWebElite: true
        },
        {
            opacity: step4Opacity,
            scale: step4Scale,
            icon: Layers,
            number: "04",
            title: "Choix de l'Infrastructure",
            description: "Configuration complète de votre écosystème.",
            color: "text-orange-400",
            bgGradient: "from-orange-500/10 to-transparent",
            baseColor: "orange",
            isInfrastructure: true
        },
        {
            opacity: step5Opacity,
            scale: step5Scale,
            icon: ShieldCheck,
            number: "05",
            title: "Support VIP & Liberté",
            description: "Tout est en place. Vous bénéficiez désormais d'un support prioritaire 24/7 pour toute question. Concentrez-vous sur votre art, StyleOS gère le reste. Bienvenue dans la cour des grands.",
            color: "text-green-400",
            bgGradient: "from-green-500/10 to-transparent",
            baseColor: "green"
        }
    ];

    return (
        <div ref={sectionRef} className="relative z-10 bg-black h-[500vh]">
            <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">

                {/* Floating Title */}
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
                        <Process3DCard key={index} step={step} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProcessSection;
