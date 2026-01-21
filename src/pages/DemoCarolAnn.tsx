import { Bot, Phone, Star, MapPin, ArrowRight, Check, Sparkles, Gem, Play, Clock, ShieldCheck, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const DemoCarolAnn = () => {
    const navigate = useNavigate();

    // Data scraped from Planity
    const reviews = { count: 112, average: 5.0 };
    const address = "84 Rue Fondaudège, 33000 Bordeaux";

    return (
        <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#D4AF37] selection:text-black mt-0">
            {/* Sticky Premium Header */}
            <header className="fixed top-0 w-full z-50 bg-[#050505]/95 backdrop-blur-md border-b border-white/5 transition-all duration-300">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        {/* Styled Logo */}
                        <div className="w-10 h-10 bg-gradient-to-br from-[#D4AF37] via-[#F9E29C] to-[#8a7020] rounded-none rotate-45 flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.3)]">
                            <span className="-rotate-45 text-black font-bold text-xl font-serif">C</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-serif text-xl tracking-widest text-white leading-none">L'ESTHÉTIQUE</span>
                            <span className="text-[9px] tracking-[0.3em] text-[#D4AF37] uppercase font-medium">By Carol-Ann • Bordeaux</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="hidden md:flex items-center gap-2 text-xs uppercase tracking-widest text-white/60 mr-4">
                            <div className="flex items-center gap-1 text-[#D4AF37]">
                                <Star className="w-3 h-3 fill-current" />
                                <Star className="w-3 h-3 fill-current" />
                                <Star className="w-3 h-3 fill-current" />
                                <Star className="w-3 h-3 fill-current" />
                                <Star className="w-3 h-3 fill-current" />
                            </div>
                            <span>{reviews.average} ({reviews.count} AVIS)</span>
                        </div>
                        <button
                            onClick={() => navigate('/')}
                            className="px-5 py-2 bg-white/5 hover:bg-white/10 border border-white/10 text-xs uppercase tracking-widest transition-all"
                        >
                            Retour StyleOS
                        </button>
                    </div>
                </div>
            </header>

            {/* Cinematic Hero */}
            <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1598452963314-b09f397a5c48?q=80&w=2070&auto=format&fit=crop"
                        alt="Background Spa luxury"
                        className="w-full h-full object-cover opacity-50 scale-105 animate-slow-zoom"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/70 via-[#050505]/40 to-[#050505]"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#050505_100%)] opacity-80"></div>
                </div>

                <div className="relative z-10 text-center max-w-5xl px-6 pt-20">
                    <span className="inline-block py-1 px-3 border border-[#D4AF37]/30 rounded-full bg-[#D4AF37]/5 backdrop-blur-sm text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.2em] mb-6 animate-fade-in-up">
                        Institut de Beauté Premium
                    </span>
                    <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-none mb-8 text-white animate-fade-in-up delay-100">
                        L'Excellence <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F9E29C] via-[#D4AF37] to-[#8a7020]">
                            Sur-Mesure
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light animate-fade-in-up delay-200">
                        Minceur • Anti-Âge • Regard • Onglerie
                        <br />
                        <span className="text-sm opacity-60 mt-2 block">84 Rue Fondaudège, Bordeaux</span>
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-5 animate-fade-in-up delay-300">
                        <button className="w-full md:w-auto px-10 py-4 bg-[#D4AF37] text-black font-bold uppercase tracking-widest hover:bg-white transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                            Prendre Rendez-vous
                        </button>
                        <button className="w-full md:w-auto px-10 py-4 bg-white/5 border border-white/10 backdrop-blur-sm text-white font-bold uppercase tracking-widest hover:bg-white/10 transition-all flex items-center justify-center gap-2 group">
                            <Bot className="w-4 h-4 text-[#D4AF37]" />
                            Assistant Vocal
                        </button>
                    </div>
                </div>
            </section>

            {/* Services Menu Grid (Based on actual Planity categories) */}
            <section className="py-32 bg-[#050505] relative px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-8">
                        <div>
                            <h2 className="font-serif text-4xl mb-2">Notre Carte de Soins</h2>
                            <p className="text-white/50">Une sélection de nos prestations les plus demandées</p>
                        </div>
                        <div className="mt-4 md:mt-0 px-4 py-2 bg-[#D4AF37]/10 rounded text-[#D4AF37] text-xs font-bold uppercase tracking-wider">
                            ⭐ Noté 5.0/5 sur Planity
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Column 1: Visage & Anti-Âge */}
                        <div className="space-y-8">
                            <div className="relative group overflow-hidden rounded-none border border-white/5 bg-[#0a0a0a]">
                                <div className="h-48 overflow-hidden">
                                    <img src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop" alt="LPG" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80" />
                                </div>
                                <div className="p-8">
                                    <h3 className="font-serif text-2xl mb-4 text-[#D4AF37]">Soins Minceur & LPG</h3>
                                    <ul className="space-y-4">
                                        <li className="flex justify-between items-baseline border-b border-white/5 pb-2">
                                            <div>
                                                <span className="block font-medium">Bilan LPG Personnalisé</span>
                                                <span className="text-xs text-white/40">Diagnostic expert complet</span>
                                            </div>
                                            <span className="font-serif text-[#D4AF37]">40€</span>
                                        </li>
                                        <li className="flex justify-between items-baseline border-b border-white/5 pb-2">
                                            <div>
                                                <span className="block font-medium">Séance Endermologie Corps</span>
                                                <span className="text-xs text-white/40">30 min • Déstockage graisses</span>
                                            </div>
                                            <span className="font-serif text-[#D4AF37]">60€</span>
                                        </li>
                                        <li className="flex justify-between items-baseline border-b border-white/5 pb-2">
                                            <div>
                                                <span className="block font-medium">Cure 10 Séances</span>
                                                <span className="text-xs text-white/40">Programme intensif</span>
                                            </div>
                                            <span className="font-serif text-[#D4AF37]">540€</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Column 2: Beauté du Regard */}
                        <div className="space-y-8">
                            <div className="relative group overflow-hidden rounded-none border border-white/5 bg-[#0a0a0a]">
                                <div className="h-48 overflow-hidden">
                                    <img src="https://images.unsplash.com/photo-1587909209111-5097ee578aa3?q=80&w=1974&auto=format&fit=crop" alt="Regard" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80" />
                                </div>
                                <div className="p-8">
                                    <h3 className="font-serif text-2xl mb-4 text-[#D4AF37]">Beauté du Regard</h3>
                                    <ul className="space-y-4">
                                        <li className="flex justify-between items-baseline border-b border-white/5 pb-2">
                                            <div>
                                                <span className="block font-medium">Rehaussement de Cils</span>
                                                <span className="text-xs text-white/40">Avec teinture incluse</span>
                                            </div>
                                            <span className="font-serif text-[#D4AF37]">75€</span>
                                        </li>
                                        <li className="flex justify-between items-baseline border-b border-white/5 pb-2">
                                            <div>
                                                <span className="block font-medium">Extensions Cil à Cil</span>
                                                <span className="text-xs text-white/40">Pose complète naturelle</span>
                                            </div>
                                            <span className="font-serif text-[#D4AF37]">90€</span>
                                        </li>
                                        <li className="flex justify-between items-baseline border-b border-white/5 pb-2">
                                            <div>
                                                <span className="block font-medium">Restructuration Sourcils</span>
                                                <span className="text-xs text-white/40">Épilation au fil & pince</span>
                                            </div>
                                            <span className="font-serif text-[#D4AF37]">25€</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Column 3: Onglerie */}
                        <div className="space-y-8">
                            <div className="relative group overflow-hidden rounded-none border border-white/5 bg-[#0a0a0a]">
                                <div className="h-48 overflow-hidden">
                                    <img src="https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=2070&auto=format&fit=crop" alt="Onglerie" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80" />
                                </div>
                                <div className="p-8">
                                    <h3 className="font-serif text-2xl mb-4 text-[#D4AF37]">Onglerie</h3>
                                    <ul className="space-y-4">
                                        <li className="flex justify-between items-baseline border-b border-white/5 pb-2">
                                            <div>
                                                <span className="block font-medium">Semi-Permanent Mains</span>
                                                <span className="text-xs text-white/40">Manucure russe incluse</span>
                                            </div>
                                            <span className="font-serif text-[#D4AF37]">45€</span>
                                        </li>
                                        <li className="flex justify-between items-baseline border-b border-white/5 pb-2">
                                            <div>
                                                <span className="block font-medium">Pose Chablon / Gel</span>
                                                <span className="text-xs text-white/40">Extension & Construction</span>
                                            </div>
                                            <span className="font-serif text-[#D4AF37]">65€</span>
                                        </li>
                                        <li className="flex justify-between items-baseline border-b border-white/5 pb-2">
                                            <div>
                                                <span className="block font-medium">Beauté des Pieds SPA</span>
                                                <span className="text-xs text-white/40">Soin complet + Pose vernis</span>
                                            </div>
                                            <span className="font-serif text-[#D4AF37]">55€</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The "Sarah" Difference */}
            <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
                {/* Decorative background */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none"></div>

                <div className="max-w-6xl mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#D4AF37]/10 border border-[#D4AF37]/20 rounded-full text-[#D4AF37] text-xs uppercase tracking-widest mb-6">
                            <Sparkles className="w-3 h-3" />
                            <span>Service Premium 2.0</span>
                        </div>
                        <h2 className="font-serif text-4xl md:text-5xl mb-6 leading-tight">
                            Ne tombez plus jamais sur répondeur.
                        </h2>
                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                            Chez L'Esthétique by Carol-Ann, nous savons que votre temps est précieux. C'est pourquoi nous avons intégré **Sarah**, notre assistante virtuelle intelligente.
                        </p>

                        <ul className="space-y-4 mb-10">
                            <li className="flex items-start gap-4">
                                <div className="p-2 bg-[#D4AF37]/10 rounded-full mt-1">
                                    <Clock className="w-5 h-5 text-[#D4AF37]" />
                                </div>
                                <div>
                                    <strong className="block text-white">Disponibilité Totale</strong>
                                    <span className="text-sm text-gray-500">Prise de rendez-vous jour et nuit, dimanche inclus.</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="p-2 bg-[#D4AF37]/10 rounded-full mt-1">
                                    <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />
                                </div>
                                <div>
                                    <strong className="block text-white">Réponses Immédiates</strong>
                                    <span className="text-sm text-gray-500">Questions sur les tarifs, le stationnement ou les contra-indications LPG.</span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="relative">
                        {/* Audio Demo Card Styled */}
                        <div className="bg-[#151515] border border-white/10 p-8 rounded-2xl relative overflow-hidden group hover:border-[#D4AF37]/40 transition-all shadow-2xl">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-50"></div>

                            <div className="flex items-center justify-between mb-8">
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 bg-gradient-to-br from-[#D4AF37] to-[#8a7020] rounded-full flex items-center justify-center shadow-lg">
                                        <Bot className="w-7 h-7 text-black" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-white text-lg">Sarah</div>
                                        <div className="text-xs text-[#D4AF37] uppercase tracking-wider">Assistant IA</div>
                                    </div>
                                </div>
                                <div className="px-3 py-1 bg-green-500/10 text-green-400 text-xs font-bold rounded-full border border-green-500/20 flex items-center gap-2">
                                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                    En ligne
                                </div>
                            </div>

                            <div className="space-y-4 mb-8">
                                <div className="bg-white/5 p-4 rounded-xl rounded-tl-none border border-white/5 text-sm text-gray-300">
                                    "Bonjour ! Je suis Sarah de L'Esthétique by Carol-Ann. Je vois que vous cherchez un créneau pour un bilan LPG ?"
                                </div>
                                <div className="bg-[#D4AF37]/10 p-4 rounded-xl rounded-tr-none border border-[#D4AF37]/20 text-sm text-white text-right ml-auto max-w-[80%]">
                                    "Oui exactement, avez-vous de la place ce jeudi soir ?"
                                </div>
                                <div className="bg-white/5 p-4 rounded-xl rounded-tl-none border border-white/5 text-sm text-gray-300">
                                    "J'ai un créneau disponible à 18h30 avec Carol-Ann. Je vous le réserve ?"
                                </div>
                            </div>

                            <button className="w-full py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl flex items-center justify-center gap-3 transition-all group-hover:text-[#D4AF37]">
                                <Play className="w-5 h-5 fill-current" />
                                <span className="font-bold text-sm uppercase tracking-widest">Écouter la démo vocale</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Info */}
            <footer className="bg-[#050505] border-t border-white/5 py-16 text-center text-white/40 text-sm animate-fade-in-up delay-500">
                <div className="flex justify-center items-center gap-2 mb-4">
                    <MapPin className="w-4 h-4 text-[#D4AF37]" />
                    <span className="text-white/70">{address}</span>
                </div>
                <div className="mb-8">
                    Ouvert du Lundi au Samedi • 09:00 - 19:00
                </div>
                <p>© 2026 L'Esthétique by Carol-Ann • Propulsé par StyleOS</p>
            </footer>
        </div>
    );
};

export default DemoCarolAnn;
