import { ShieldCheck, RefreshCcw, HeartHandshake } from 'lucide-react';

const GuaranteeSection = () => {
    return (
        <section id="garantie" className="py-24 bg-black relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.4em]">
                        SÉCURITÉ TOTALE
                    </div>
                    <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white mb-6 leading-none">
                        LA GARANTIE <span className="text-primary italic">ELITE.</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Nous sommes tellement convaincus de l'impact de StyleOS sur votre salon que nous supprimons tout risque pour vous.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="group p-8 rounded-[2.5rem] bg-surface/20 border border-white/5 transition-all duration-700 hover:border-primary/30 hover:bg-surface/30">
                        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                            <ShieldCheck className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-4">100% Satisfait</h3>
                        <p className="text-gray-400 leading-relaxed font-medium">
                            Si vous n'êtes pas absolument bluffé par l'IA Sarah ou l'élégance de votre nouvel écosystème sous 30 jours, nous arrêtons tout.
                        </p>
                    </div>

                    <div className="group p-8 rounded-[2.5rem] bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 transition-all duration-700 hover:border-primary/50 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <RefreshCcw className="w-24 h-24 text-primary animate-spin-slow" />
                        </div>
                        <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center mb-8 group-hover:rotate-[360deg] transition-transform duration-1000">
                            <RefreshCcw className="w-8 h-8 text-black" />
                        </div>
                        <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-4">Remboursement Intégral</h3>
                        <p className="text-gray-200 leading-relaxed font-bold">
                            Aucun résultat ? On vous rembourse. C'est aussi simple que ça. Notre succès est indexé sur le vôtre. Pas de frais cachés.
                        </p>
                    </div>

                    <div className="group p-8 rounded-[2.5rem] bg-surface/20 border border-white/5 transition-all duration-700 hover:border-primary/30 hover:bg-surface/30">
                        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                            <HeartHandshake className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-4">Engagement StyleOS</h3>
                        <p className="text-gray-400 leading-relaxed font-medium">
                            Nous ne sommes pas un simple logiciel, nous sommes vos partenaires. Votre croissance est notre priorité absolue.
                        </p>
                    </div>
                </div>

                <div className="mt-20 p-12 rounded-[3rem] border border-white/5 bg-black/50 backdrop-blur-xl text-center">
                    <div className="text-primary font-black uppercase tracking-[0.3em] text-[11px] mb-4">Notre Parole de Spécialiste</div>
                    <blockquote className="text-2xl md:text-3xl font-light italic text-gray-300 mb-8">
                        "Si StyleOS ne devient pas l'atout numéro 1 de votre salon en 3 mois, nous vous remboursons chaque centime investi."
                    </blockquote>
                    <div className="flex items-center justify-center gap-4">
                        <div className="h-px w-12 bg-primary/30"></div>
                        <span className="text-white font-black uppercase tracking-widest text-[10px]">L'équipe de Direction StyleOS</span>
                        <div className="h-px w-12 bg-primary/30"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GuaranteeSection;
