import { ArrowRight, Construction, Rocket, Repeat } from 'lucide-react';

const steps = [
    {
        icon: Construction,
        number: "01",
        title: "Setup 'Gant Blanc'",
        duration: "Jours 1-7",
        description: "Nous migrons vos données, créons votre site web élite et configurons votre infrastructure financière sans aucun effort de votre part.",
        color: "text-blue-400",
        bg: "bg-blue-400/10"
    },
    {
        icon: Rocket,
        number: "02",
        title: "Activation Sarah",
        duration: "Jour 8",
        description: "Sarah prend les commandes. Elle gère désormais 100% de vos appels et sécurise vos rendez-vous. Vous êtes officiellement libre.",
        color: "text-primary",
        bg: "bg-primary/10"
    },
    {
        icon: Repeat,
        number: "03",
        title: "Boucle de Croissance",
        duration: "Infini",
        description: "Chaque client satisfait génère un avis 5 étoiles, boostant votre SEO, attirant de nouveaux clients VIP. La machine ne s'arrête jamais.",
        color: "text-emerald-400",
        bg: "bg-emerald-400/10"
    }
];

const ProcessSection = () => {
    return (
        <section id="process" className="py-32 bg-black relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none rotate-12"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-24">
                    <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-500 text-[10px] font-black uppercase tracking-[0.4em]">
                        DÉPLOIEMENT HAUTE-VITESSE
                    </div>
                    <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white mb-6 leading-none">
                        L'INTÉGRATION <br /><span className="text-primary italic">SANS FRICTION.</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
                        De la signature au pilotage automatique en moins de 10 jours.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 relative">
                    {/* Infinite Loop Visual (Desktop) */}
                    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[2px] bg-white/5 z-0">
                        <div className="absolute top-1/2 left-0 w-full h-full bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-shimmer-slow"></div>
                    </div>

                    {steps.map((step, index) => (
                        <div key={index} className="relative group p-10 rounded-[3rem] bg-[#0A0A0A] border border-white/5 transition-all duration-700 hover:border-primary/30 hover:shadow-[0_0_50px_rgba(212,175,55,0.1)] z-10">
                            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent rounded-[3rem] pointer-events-none"></div>

                            <div className={`w-16 h-16 rounded-2xl ${step.bg} flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500`}>
                                <step.icon className={`w-8 h-8 ${step.color}`} />
                            </div>

                            <div className="flex items-center gap-4 mb-6">
                                <span className={`text-5xl font-black italic opacity-20 group-hover:opacity-100 transition-opacity duration-700 ${step.color}`}>
                                    {step.number}
                                </span>
                                <div className="h-px flex-1 bg-white/5 group-hover:bg-white/10 transition-colors"></div>
                                <div className={`px-4 py-1.5 rounded-full bg-surface border border-white/10 text-white text-[9px] font-black uppercase tracking-widest group-hover:border-primary/50 transition-colors`}>
                                    {step.duration}
                                </div>
                            </div>

                            <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter mb-6 group-hover:text-primary transition-colors">
                                {step.title}
                            </h3>

                            <p className="text-gray-400 font-medium leading-relaxed">
                                {step.description}
                            </p>

                            {index < 2 ? (
                                <ArrowRight className="hidden lg:block absolute top-1/2 -right-6 -translate-y-1/2 w-8 h-8 text-white/10 group-hover:text-primary transition-colors z-20 group-hover:translate-x-2 duration-500" />
                            ) : (
                                <Repeat className="hidden lg:block absolute top-1/2 -right-6 -translate-y-1/2 w-8 h-8 text-emerald-500/20 group-hover:text-emerald-500 transition-colors z-20 animate-spin-slow" />
                            )}
                        </div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <button className="px-8 py-4 bg-primary text-black font-black uppercase tracking-[0.2em] text-xs rounded-full hover:bg-white transition-all hover:scale-105 shadow-[0_0_30px_rgba(212,175,55,0.3)]">
                        Lancer le Processus
                    </button>
                </div>

            </div>
        </section>
    );
};

export default ProcessSection;
