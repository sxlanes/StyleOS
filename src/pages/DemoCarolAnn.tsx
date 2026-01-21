import { Bot, Phone, Star, MapPin, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const DemoCarolAnn = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#D4AF37] selection:text-black">
            {/* Header */}
            <header className="fixed top-0 w-full z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/5">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        {/* Brand Logo Concept */}
                        <div className="w-10 h-10 bg-gradient-to-br from-[#D4AF37] to-[#8a7020] rounded-full flex items-center justify-center text-black font-bold text-xl font-serif">
                            C
                        </div>
                        <div className="font-serif text-2xl tracking-widest text-white">
                            L'ESTHÉTIQUE
                            <span className="block text-[10px] tracking-[0.3em] text-[#D4AF37] uppercase font-sans">By Carol-Ann</span>
                        </div>
                    </div>
                    <button
                        onClick={() => navigate('/')}
                        className="px-6 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-xs uppercase tracking-widest transition-all"
                    >
                        Retour StyleOS
                    </button>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop"
                        alt="Luxury Aesthetic Background"
                        className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/70 via-[#050505]/50 to-[#050505]"></div>
                </div>

                <div className="relative z-10 text-center max-w-4xl px-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#D4AF37]/10 border border-[#D4AF37]/20 rounded-full text-[#D4AF37] text-xs uppercase tracking-widest mb-6">
                        <Star className="w-3 h-3" />
                        <span>Expertise LPG & Beauté à Bordeaux</span>
                    </div>
                    <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-none mb-8">
                        Révélez votre <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-tr from-[#eadebe] via-[#D4AF37] to-[#8a7020]">
                            Éclat Naturel
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                        L'alliance de la haute technologie et du soin sur-mesure.
                        <br />
                        Plongez dans une expérience de beauté exclusive au cœur de Bordeaux.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                        <button className="group relative px-8 py-4 bg-[#D4AF37] text-black font-bold uppercase tracking-wider rounded-none hover:bg-white transition-all overflow-hidden">
                            <span className="relative z-10 flex items-center gap-2">
                                Réserver mon soin
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </span>
                        </button>
                        <button className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold uppercase tracking-wider rounded-none hover:bg-white/5 transition-all flex items-center gap-2">
                            <Bot className="w-4 h-4" />
                            Parler à l'IA
                        </button>
                    </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute bottom-10 left-10 md:left-20 flex items-center gap-4 animate-fade-in-up delay-300">
                    <div className="w-12 h-12 bg-[#1a1a1a] rounded-full flex items-center justify-center border border-white/10">
                        <MapPin className="w-5 h-5 text-[#D4AF37]" />
                    </div>
                    <div>
                        <div className="text-xs text-white/50 uppercase tracking-widest">Adresse</div>
                        <div className="text-sm font-medium">84 Rue Fondaudège, Bordeaux</div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-32 bg-[#0a0a0a] relative">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="font-serif text-4xl md:text-5xl mb-4">Soins Signature</h2>
                        <div className="w-24 h-1 bg-[#D4AF37] mx-auto opacity-50"></div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Service Card 1 */}
                        <div className="group relative h-[500px] overflow-hidden cursor-pointer">
                            <img src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop" alt="LPG" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-50" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
                            <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <div className="text-[#D4AF37] text-xs uppercase tracking-widest mb-2 font-bold">Minceur & Anti-Âge</div>
                                <h3 className="font-serif text-3xl mb-4">LPG Endermologie</h3>
                                <p className="text-white/60 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-3">
                                    La référence mondiale de la stimulation cellulaire. Destockez, lissez, raffermissez et resculptez votre silhouette avec nos cures personnalisées.
                                </p>
                                <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider border-b border-white/20 pb-1 inline-block">
                                    Découvrir <ArrowRight className="w-4 h-4" />
                                </div>
                            </div>
                        </div>

                        {/* Service Card 2 */}
                        <div className="group relative h-[500px] overflow-hidden cursor-pointer">
                            <img src="https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=2070&auto=format&fit=crop" alt="Onglerie" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-50" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
                            <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <div className="text-[#D4AF37] text-xs uppercase tracking-widest mb-2 font-bold">Mains & Pieds</div>
                                <h3 className="font-serif text-3xl mb-4">Onglerie Prestige</h3>
                                <p className="text-white/60 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                    Semi-permanent renforcé, gel porcelaine ou nail art délicat. Vos mains méritent l'excellence.
                                </p>
                                <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider border-b border-white/20 pb-1 inline-block">
                                    Découvrir <ArrowRight className="w-4 h-4" />
                                </div>
                            </div>
                        </div>

                        {/* Service Card 3 */}
                        <div className="group relative h-[500px] overflow-hidden cursor-pointer">
                            <img src="https://images.unsplash.com/photo-1587909209111-5097ee578aa3?q=80&w=1974&auto=format&fit=crop" alt="Regard" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-50" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
                            <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <div className="text-[#D4AF37] text-xs uppercase tracking-widest mb-2 font-bold">Regard</div>
                                <h3 className="font-serif text-3xl mb-4">Sublimation du Regard</h3>
                                <p className="text-white/60 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                    Extensions de cils, rehaussement, teinture. Ouvrez votre regard et gagnez du temps chaque matin.
                                </p>
                                <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider border-b border-white/20 pb-1 inline-block">
                                    Découvrir <ArrowRight className="w-4 h-4" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* AI Assistant Demo Section */}
            <section className="py-24 bg-[#050505] relative border-t border-white/5">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <div className="inline-block p-3 bg-[#D4AF37]/10 rounded-full mb-6">
                        <Bot className="w-8 h-8 text-[#D4AF37]" />
                    </div>
                    <h2 className="font-serif text-3xl md:text-4xl mb-6">
                        "Bonjour, ici l'assistant IA de Carol-Ann..."
                    </h2>
                    <p className="text-white/50 mb-10 text-lg">
                        Pendant que Carol-Ann s'occupe de vous, Sarah (notre IA) gère les appels, prend les rendez-vous et répond aux questions 24/7.
                    </p>

                    {/* Fake Audio Player UI */}
                    <div className="bg-[#1a1a1a] p-6 rounded-2xl border border-white/5 flex items-center gap-4 max-w-lg mx-auto hover:border-[#D4AF37]/30 transition-colors cursor-pointer group">
                        <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                            <Phone className="w-5 h-5 text-black fill-current" />
                        </div>
                        <div className="text-left flex-1">
                            <div className="text-xs uppercase text-white/40 tracking-widest mb-1">Démonstration Audio</div>
                            <div className="font-bold text-white">Écouter une prise de RDV par IA</div>
                        </div>
                        <div className="flex gap-1 items-end h-8">
                            <div className="w-1 bg-[#D4AF37]/50 h-3 animate-pulse"></div>
                            <div className="w-1 bg-[#D4AF37] h-6 animate-pulse delay-75"></div>
                            <div className="w-1 bg-[#D4AF37] h-4 animate-pulse delay-150"></div>
                            <div className="w-1 bg-[#D4AF37] h-8 animate-pulse delay-100"></div>
                            <div className="w-1 bg-[#D4AF37]/50 h-3 animate-pulse delay-200"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer CTA */}
            <section className="py-20 bg-[#D4AF37] text-black text-center">
                <div className="max-w-2xl mx-auto px-6">
                    <h2 className="font-serif text-3xl md:text-5xl mb-6">L'Expérience Commence Ici</h2>
                    <p className="mb-8 opacity-80 font-medium">Réservez votre moment d'exception en quelques clics.</p>
                    <button className="px-10 py-4 bg-black text-white font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                        Prendre Rendez-vous
                    </button>
                    <div className="mt-8 text-xs font-bold uppercase tracking-wider opacity-60">
                        Propulsé par StyleOS
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DemoCarolAnn;
