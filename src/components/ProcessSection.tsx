import { useRef, useState, type MouseEvent } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { Database, BarChart3, Bot, CheckCircle, Sparkles, Search, Layers, ShieldCheck, Calendar, MessageCircle, Megaphone } from 'lucide-react';

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
                className={`w-full ${step.isWebElite ? 'max-w-3xl' : 'max-w-5xl'} perspective-1000 pointer-events-auto`}
            >
                <motion.div
                    className={`w-full bg-[#050505] backdrop-blur-xl border border-white/10 rounded-[3rem] p-8 md:p-12 shadow-2xl relative overflow-hidden transition-all duration-200 group`}
                    style={{
                        rotateX,
                        rotateY,
                        transformStyle: "preserve-3d"
                    }}
                >
                    {/* Background glow - Uniform Gold/Yellow for all */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 to-transparent pointer-events-none z-0 opacity-40 group-hover:opacity-60 transition-opacity"></div>

                    <div className="relative z-10 transform-style-3d">

                        <div className={`flex flex-col md:flex-row ${step.image ? 'items-center gap-12' : 'gap-4'}`}>

                            {/* Text Content */}
                            <div className="flex-1">
                                {/* Step Number Badge */}
                                <div className="inline-flex items-center gap-4 mb-6 md:mb-8">
                                    <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-black/50 border-2 border-white/20 flex items-center justify-center ${step.color} shadow-lg`}>
                                        <step.icon size={32} strokeWidth={1.5} />
                                    </div>
                                    <div className={`text-6xl md:text-7xl font-black ${step.color} opacity-30`}>{step.number}</div>
                                </div>

                                <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-6 leading-tight drop-shadow-lg">
                                    {step.title}
                                </h3>

                                {step.isWebElite ? (
                                    <div className="mb-0">
                                        <p className="text-lg text-gray-300 leading-relaxed font-light mb-6">
                                            {step.description}
                                        </p>
                                        <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl h-48 group">
                                            {/* Generated Audit Image Reuse or Abstract */}
                                            <div className="absolute inset-0 bg-purple-900/20 mix-blend-overlay z-10"></div>
                                            {/* A smaller, elegant visual for the Web Elite card */}
                                            <div className="absolute inset-0 bg-[url('/audit_visual.png')] bg-cover bg-center opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700"></div>
                                            <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur px-4 py-2 rounded-full border border-white/10 z-20">
                                                <span className="text-xs font-bold text-white uppercase tracking-widest">Score 98/100</span>
                                            </div>
                                        </div>
                                    </div>
                                ) : step.isInfrastructure ? (
                                    <div className="mt-8">
                                        <p className="text-lg text-gray-300 leading-relaxed font-light mb-8 max-w-xl">
                                            {step.description}
                                        </p>
                                        {/* Infrastructure - 5 Elements in One Line */}
                                        <div className="relative p-8 rounded-3xl border border-white/10 overflow-hidden bg-black/40">
                                            {/* Background Eco Visual */}
                                            <div className="absolute inset-0 bg-[url('/ecosystem_visual.png')] bg-cover bg-center opacity-40 mix-blend-screen pointer-events-none"></div>

                                            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 relative z-10">
                                                {[
                                                    { icon: Calendar, label: "Booking" },
                                                    { icon: Bot, label: "AI" },
                                                    { icon: BarChart3, label: "Finance" },
                                                    { icon: MessageCircle, label: "Avis" },
                                                    { icon: Megaphone, label: "Growth" }
                                                ].map((item, i) => (
                                                    <div key={i} className="flex flex-col items-center gap-3 group/icon">
                                                        <div className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-black/60 backdrop-blur border border-white/10 flex items-center justify-center text-${step.baseColor}-400 group-hover/icon:scale-110 group-hover/icon:text-white group-hover/icon:border-${step.baseColor}-500/50 transition-all shadow-lg`}>
                                                            <item.icon size={24} />
                                                        </div>
                                                        <span className="text-[10px] uppercase font-bold text-gray-500 tracking-widest group-hover/icon:text-white transition-colors">{item.label}</span>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="text-center mt-6">
                                                <span className="inline-block px-4 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-[10px] font-black uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(249,115,22,0.2)]">
                                                    StyleOS Ecosystem
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light mb-8 max-w-xl">
                                        {step.description}
                                    </p>
                                )}

                                {/* Completion Check */}
                                <div className="mt-6 flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center border-2 border-green-500/40 shadow-[0_0_10px_rgba(16,185,129,0.3)]">
                                        <CheckCircle size={18} className="text-green-400" strokeWidth={3} />
                                    </div>
                                    <span className="text-sm text-green-400 font-bold uppercase tracking-widest">
                                        {step.number === "05" ? "Liberté Atteinte" : "Étape Complétée"}
                                    </span>
                                </div>
                            </div>

                            {/* Side Image for Standard Steps (1, 2, 5) */}
                            {step.image && (
                                <div className="hidden md:block w-72 lg:w-96 shrink-0 md:translate-x-8 lg:translate-x-12 relative group/img">
                                    <div className={`absolute inset-0 bg-${step.baseColor}-500/20 blur-3xl opacity-40 rounded-full group-hover/img:opacity-60 transition-opacity`}></div>
                                    <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl rotate-3 group-hover/img:rotate-0 transition-transform duration-500">
                                        <div className="aspect-[3/4] bg-black/50">
                                            <img
                                                src={step.image}
                                                alt={step.title}
                                                className="w-full h-full object-cover opacity-90 group-hover/img:scale-110 transition-transform duration-700"
                                            />
                                        </div>
                                        {/* Overlay Gradient */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                                    </div>
                                </div>
                            )}

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
            baseColor: "cyan",
            image: "/audit_visual.png"
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
            baseColor: "blue",
            image: "/migration_visual.png"
        },
        {
            opacity: step3Opacity,
            scale: step3Scale,
            icon: Sparkles,
            number: "03",
            title: "Création Site Web Elite",
            description: "Design sur-mesure et shooting photo. Votre nouveau bastion digital.",
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
            title: "L'Écosystème StyleOS",
            description: "Configuration complète de tous les piliers de votre croissance.",
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
            description: "Support prioritaire 24/7. Concentrez-vous sur votre art, StyleOS gère le reste.",
            color: "text-green-400",
            bgGradient: "from-green-500/10 to-transparent",
            baseColor: "green",
            image: "/support_visual.png"
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
