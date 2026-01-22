import { ArrowRight, Lightbulb, Construction, Rocket } from 'lucide-react';

const steps = [
    {
        icon: Lightbulb,
        number: "01",
        title: "Audit Sarah IA & Stratégie",
        duration: "30 MIN",
        description: "Analyse chirurgicale de votre flux par Sarah IA pour identifier vos fuites de revenus et configurer votre futur moteur de croissance.",
        color: "text-blue-400",
        bg: "bg-blue-400/10"
    },
    {
        icon: Construction,
        number: "02",
        title: "Construction Sur-Mesure",
        duration: "7 JOURS",
        description: "Nos ingénieurs déploient votre infrastructure : Site Web, Sarah IA, et Dashboard Business configurés pour votre salon.",
        color: "text-primary",
        bg: "bg-primary/10"
    },
    {
        icon: Rocket,
        number: "03",
        title: "Dominance Totale",
        duration: "LANCEMENT",
        description: "Mise en ligne, formation express de votre équipe et automatisation des premiers rendez-vous sans commission.",
        color: "text-emerald-400",
        bg: "bg-emerald-400/10"
    }
];

const ProcessSection = () => {
    return (
        <section id="process" className="py-32 bg-background relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-24">
                    <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-500 text-[10px] font-black uppercase tracking-[0.4em]">
                        DÉPLOIEMENT HAUTE-VITESSE
                    </div>
                    <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white mb-6 leading-none">
                        L'INTÉGRATION EN <br /><span className="text-primary italic">3 TEMPS.</span>
                    </h2>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 relative">
                    {/* Connecting Lines (Desktop) */}
                    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent z-0 overflow-hidden">
                        <div className="w-full h-full bg-primary/20 animate-shimmer-slow"></div>
                    </div>

                    {steps.map((step, index) => (
                        <div key={index} className="relative group p-10 rounded-[3rem] bg-surface/30 border border-white/5 backdrop-blur-xl transition-all duration-700 hover:border-primary/20 hover:-translate-y-2 z-10">
                            <div className={`w-16 h-16 rounded-2xl ${step.bg} flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500`}>
                                <step.icon className={`w-8 h-8 ${step.color}`} />
                            </div>

                            <div className="flex items-center gap-4 mb-6">
                                <span className={`text-4xl font-black italic opacity-20 group-hover:opacity-100 transition-opacity duration-700 ${step.color}`}>
                                    {step.number}
                                </span>
                                <div className="h-px flex-1 bg-white/5"></div>
                                <div className={`px-4 py-1.5 rounded-full ${step.bg} ${step.color} text-[10px] font-black uppercase tracking-widest`}>
                                    {step.duration}
                                </div>
                            </div>

                            <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter mb-6 group-hover:text-primary transition-colors">
                                {step.title}
                            </h3>

                            <p className="text-gray-400 font-medium leading-relaxed">
                                {step.description}
                            </p>

                            {index < 2 && (
                                <ArrowRight className="hidden lg:block absolute top-[10%] -right-4 w-8 h-8 text-white/10 group-hover:text-primary transition-colors" />
                            )}
                        </div>
                    ))}
                </div>

                <div className="mt-24 text-center">
                    <button
                        onClick={() => {
                            const el = document.getElementById('offer');
                            el?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="group relative px-10 py-5 bg-white text-black font-black uppercase tracking-[0.3em] text-[10px] rounded-full hover:bg-primary transition-all duration-500 hover:scale-105 shadow-xl shadow-white/5 active:scale-95"
                    >
                        Commencer ma Transformation
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;
