import { useState, useEffect, useRef } from 'react';
import { Bot, Phone, Star, MapPin, ArrowRight, Check, Sparkles, Play, Clock, ShieldCheck, Heart, ChevronRight, Info, User, Calendar, Search, Menu, X, Instagram, Facebook, Scissors } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SERVICES = [
    {
        category: "Épilation",
        items: [
            { name: "Création Ligne Sourcils", price: "15€", time: "15min", description: "Restructuration complète à la pince pour un regard ouvert." },
            { name: "Lèvres ou Menton", price: "10€", time: "10min", description: "Épilation douce à la cire basse température." },
            { name: "Aisselles", price: "15€", time: "15min", description: "Soin apaisant post-épilation inclus." },
            { name: "Maillot Classique", price: "20€", time: "20min", description: "Échancrure standard pour le quotidien." },
            { name: "Maillot Semi-Intégral", price: "30€", time: "30min", description: "Pour plus de confort et d'esthétique." },
            { name: "Maillot Intégral", price: "38€", time: "40min", description: "Finition parfaite, hygiène irréprochable." },
            { name: "Jambes Complètes", price: "35€", time: "40min", description: "Cire tiède pour une peau douce durablement." }
        ]
    },
    {
        category: "Zone unique",
        items: [
            { name: "Zone Visage Spécifique", price: "10€", time: "10min", description: "Joues, front ou cou." },
            { name: "Sillon Inter-Fessier", price: "10€", time: "10min", description: "En complément d'un maillot." }
        ]
    },
    {
        category: "Épilation forfait",
        items: [
            { name: "Visage + Sourcils", price: "22€", time: "20min", description: "Forfait complet pour l'harmonie du visage." },
            { name: "Demi-Jambes + Maillot + Aisselles", price: "45€", time: "45min", description: "L'essentiel mensuel." },
            { name: "Jambes Complètes + Maillot Intégral + Aisselles", price: "75€", time: "75min", description: "Le grand soin complet." }
        ]
    },
    {
        category: "Épilation Homme",
        items: [
            { name: "Sourcils Homme", price: "15€", time: "15min", description: "Nettoyage naturel et structuration." },
            { name: "Dos ou Torse", price: "35€", time: "30min", description: "Épilation large zone à la cire tiède." },
            { name: "Épaules", price: "20€", time: "20min", description: "Retrait des poils disgracieux." }
        ]
    },
    {
        category: "Les mains & ongles",
        items: [
            { name: "Manucure Express", price: "25€", time: "30min", description: "Façonnage, cuticules et base soin." },
            { name: "Pose Vernis Semi-Permanent", price: "40€", time: "45min", description: "Tenue 2-3 semaines, brillance miroir, manucure russe incluse." },
            { name: "Renfort Gainage (Gel)", price: "55€", time: "60min", description: "Pour ongles fragiles ou cassants." },
            { name: "Extensions Gel (Chablon)", price: "75€", time: "1h30", description: "Longueur et forme sur mesure." },
            { name: "Nail Art (par ongle)", price: "2€", time: "5min", description: "Design simple ou complexe." }
        ]
    },
    {
        category: "Drainage",
        items: [
            { name: "Drainage Lymphatique (Corps)", price: "80€", time: "60min", description: "Méthode Renata França inspirée. Détoxifie et allège." },
            { name: "Madérothérapie (Jambes)", price: "60€", time: "45min", description: "Massage aux outils en bois pour casser la cellulite." }
        ]
    },
    {
        category: "LPG Minceur",
        items: [
            { name: "Bilan LPG Personnalisé", price: "50€", time: "30min", description: "Diagnostic morphologique obligatoire avant cure." },
            { name: "Séance Zone Ciblée (10min)", price: "20€", time: "10min", description: "Traiter une zone spécifique (bras, ventre, culotte de cheval)." },
            { name: "Soin Global (30min)", price: "60€", time: "30min", description: "Lissage cellulite et raffermissement." },
            { name: "Forfait 10 Séances", price: "540€", time: "30min/séance", description: "Protocole intensif (2 séances offertes)." }
        ]
    },
    {
        category: "LPG Bien-être",
        items: [
            { name: "Soin Relaxation", price: "40€", time: "30min", description: "Détente musculaire profonde par micro-battements." },
            { name: "Soin Jambes Légères", price: "40€", time: "30min", description: "Relance la circulation veineuse et lymphatique." }
        ]
    },
    {
        category: "LPG Visage Fondamentaux",
        items: [
            { name: "Soin Éclat", price: "35€", time: "20min", description: "Teint frais et oxygéné avant un événement." },
            { name: "Soin Détox", price: "35€", time: "20min", description: "Draine les toxines et réduit les poches." },
            { name: "Soin Regard & Lèvres", price: "30€", time: "20min", description: "Lisse les ridules d'expression." }
        ]
    },
    {
        category: "LPG Visage Excellence",
        items: [
            { name: "Anti-Âge Repulpant", price: "65€", time: "45min", description: "Retrouvez vos volumes et comblez les rides." },
            { name: "Anti-Âge Affinant", price: "65€", time: "45min", description: "Pour les visages qui ont tendance à s'empâter." }
        ]
    },
    {
        category: "Visage Signature",
        items: [
            { name: "Le Grand Soin by Carol-Ann", price: "120€", time: "1h30", description: "Alliance techniques manuelles et technologies. Le soin ultime." },
            { name: "Hydratation Profonde", price: "80€", time: "60min", description: "Bain d'hydratation pour peaux assoiffées." }
        ]
    },
    {
        category: "Kobido",
        items: [
            { name: "Massage Kobido Authentique", price: "85€", time: "60min", description: "Lifting manuel japonais. Stimule collagène et élastine." },
            { name: "Cure Kobido (5 séances)", price: "390€", time: "60min/séance", description: "Pour un effet anti-âge durable." }
        ]
    },
    {
        category: "Les pieds",
        items: [
            { name: "Beauté des Pieds", price: "45€", time: "45min", description: "Soin des cuticules, limage et hydratation." },
            { name: "Soin Anti-Callosités (Yumi Feet)", price: "40€", time: "30min", description: "Élimine les peaux mortes sans lame. Pieds de bébé garantis." },
            { name: "Pose Semi-Permanent Pieds", price: "40€", time: "40min", description: "Tenue longue durée." }
        ]
    },
    {
        category: "Beauté du regard",
        items: [
            { name: "Rehaussement de Cils + Teinture", price: "75€", time: "1h", description: "Courbure naturelle et effet mascara." },
            { name: "Teinture Sourcils", price: "15€", time: "15min", description: "Intensifie le regard naturellement." },
            { name: "Extensions Cil à Cil", price: "90€", time: "1h30", description: "Effet naturel, un cil sur un cil." },
            { name: "Volume Russe léger", price: "110€", time: "2h00", description: "Pour un regard plus sophistiqué." }
        ]
    },
    {
        category: "Soin du corps",
        items: [
            { name: "Gommage Corps aux Sels", price: "40€", time: "30min", description: "Exfoliation pour une peau douce et soyeuse." },
            { name: "Modelage Relaxant Sur-Mesure", price: "70€", time: "60min", description: "Massage intuitif selon vos besoins." }
        ]
    }
];

const DemoCarolAnn = () => {
    const navigate = useNavigate();
    const [activeCategory, setActiveCategory] = useState(SERVICES[0].category);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const scrollToCategory = (category: string) => {
        setActiveCategory(category);
        const element = document.getElementById(category);
        if (element) {
            const offset = 180; // Header + Nav height
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#D4AF37] selection:text-black">
            {/* Top Banner Event */}
            <div className="bg-[#D4AF37] text-black text-center py-2 px-4 text-xs font-bold uppercase tracking-widest relative z-[60]">
                ✨ Journée VIP LPG le 29 Janvier • Places limitées !
            </div>

            {/* Header */}
            <header className="sticky top-0 w-full z-50 bg-[#050505]/95 backdrop-blur-md border-b border-white/5 shadow-2xl">
                <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-[#D4AF37] via-[#F9E29C] to-[#8a7020] rotate-45 flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.3)]">
                            <span className="-rotate-45 text-black font-bold text-lg md:text-xl font-serif">C</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-serif text-lg md:text-xl tracking-widest text-white leading-none">L'ESTHÉTIQUE</span>
                            <span className="text-[8px] md:text-[9px] tracking-[0.3em] text-[#D4AF37] uppercase font-medium">By Carol-Ann</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => navigate('/')}
                            className="hidden md:block px-5 py-2 text-xs uppercase tracking-widest text-white/60 hover:text-white transition-colors"
                        >
                            Retour StyleOS
                        </button>
                        <button className="px-5 py-2 bg-[#D4AF37] text-black text-xs font-bold uppercase tracking-widest hover:bg-white transition-all rounded-sm">
                            Réserver
                        </button>
                    </div>
                </div>

                {/* Sticky Categories Nav */}
                <div className="border-t border-white/5 bg-[#0a0a0a/95]">
                    <div
                        ref={scrollContainerRef}
                        className="max-w-7xl mx-auto overflow-x-auto flex items-center gap-6 px-4 md:px-6 py-4 scrollbar-hide snap-x"
                    >
                        {SERVICES.map((service, index) => (
                            <button
                                key={index}
                                onClick={() => scrollToCategory(service.category)}
                                className={`whitespace-nowrap text-xs uppercase tracking-widest font-bold transition-all px-2 pb-1 border-b-2 snap-center
                                    ${activeCategory === service.category
                                        ? 'text-[#D4AF37] border-[#D4AF37]'
                                        : 'text-white/40 border-transparent hover:text-white/80'}`}
                            >
                                {service.category}
                            </button>
                        ))}
                    </div>
                </div>
            </header>

            {/* Cinematic Hero */}
            <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://res.cloudinary.com/planity/image/upload/c_crop,w_1080,h_567,x_0,y_8/q_auto,f_auto,w_1200,h_630/qeaqikj3kmxiwwerrozh"
                        alt="Salon Carol-Ann"
                        className="w-full h-full object-cover opacity-60 scale-105 animate-slow-zoom"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-[#050505]/40 to-[#050505]"></div>
                </div>

                <div className="relative z-10 text-center max-w-4xl px-6 pt-10">
                    <div className="flex items-center justify-center gap-2 mb-6 animate-fade-in-up">
                        <div className="flex text-[#D4AF37]">
                            <Star className="w-4 h-4 fill-current" />
                            <Star className="w-4 h-4 fill-current" />
                            <Star className="w-4 h-4 fill-current" />
                            <Star className="w-4 h-4 fill-current" />
                            <Star className="w-4 h-4 fill-current" />
                        </div>
                        <span className="text-white/80 font-medium tracking-wide">5.0 (112 Avis)</span>
                    </div>

                    <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-none mb-6 text-white animate-fade-in-up delay-100">
                        Révélez votre <span className="italic text-[#D4AF37]">Éclat</span>
                    </h1>
                    <p className="text-base md:text-lg text-gray-300 max-w-xl mx-auto mb-8 font-light animate-fade-in-up delay-200">
                        Expertise minceur, soins visage et beauté du regard au cœur de Bordeaux.
                    </p>
                </div>
            </section>

            {/* Services Content */}
            <div className="max-w-4xl mx-auto px-4 md:px-6 pb-32 relative z-10 -mt-20">
                {SERVICES.map((cat, idx) => (
                    <div key={idx} id={cat.category} className="mb-8 scroll-mt-48">
                        <div className="bg-[#111] border border-white/5 rounded-none md:rounded-xl overflow-hidden shadow-2xl">
                            <div className="bg-[#1a1a1a] px-6 py-4 border-b border-white/5 flex items-center justify-between sticky top-0 md:static">
                                <h3 className="font-serif text-xl md:text-2xl text-[#D4AF37]">{cat.category}</h3>
                                <Sparkles className="w-4 h-4 text-white/20" />
                            </div>
                            <div className="divide-y divide-white/5">
                                {cat.items.map((item, itemIdx) => (
                                    <div key={itemIdx} className="p-6 hover:bg-white/5 transition-colors group cursor-pointer flex justify-between items-start gap-4">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-1">
                                                <h4 className="font-bold text-white group-hover:text-[#D4AF37] transition-colors">{item.name}</h4>
                                                <span className="px-2 py-0.5 rounded bg-white/5 text-[10px] text-white/50 border border-white/5">{item.time}</span>
                                            </div>
                                            <p className="text-sm text-gray-400 font-light leading-relaxed">{item.description}</p>
                                        </div>
                                        <div className="flex flex-col items-end gap-2">
                                            <span className="font-serif text-lg font-medium text-white">{item.price}</span>
                                            <button className="opacity-0 group-hover:opacity-100 transition-opacity bg-[#D4AF37] text-black text-[10px] uppercase font-bold px-3 py-1 rounded-sm">
                                                Choisir
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Team Section */}
            <section className="bg-[#0a0a0a] py-20 border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="font-serif text-3xl md:text-4xl mb-12">Nos Experts</h2>
                    <div className="flex flex-col md:flex-row justify-center gap-12">
                        {/* Carol-Ann */}
                        <div className="flex flex-col items-center gap-4">
                            <div className="w-32 h-32 rounded-full border-2 border-[#D4AF37] p-1">
                                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop" alt="Carol-Ann" className="w-full h-full rounded-full object-cover filter grayscale hover:grayscale-0 transition-all" />
                            </div>
                            <div>
                                <h3 className="font-bold text-xl">Carol-Ann</h3>
                                <div className="text-[#D4AF37] text-xs uppercase tracking-widest">Directrice & Experte LPG</div>
                            </div>
                        </div>
                        {/* Sarah (AI) */}
                        <div className="flex flex-col items-center gap-4 relative group">
                            <div className="absolute -inset-4 bg-[#D4AF37]/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="w-32 h-32 rounded-full border-2 border-[#D4AF37]/50 p-1 relative z-10 bg-black">
                                <div className="w-full h-full rounded-full bg-gradient-to-br from-[#D4AF37] to-[#8a7020] flex items-center justify-center">
                                    <Bot className="w-12 h-12 text-black" />
                                </div>
                            </div>
                            <div>
                                <h3 className="font-bold text-xl flex items-center gap-2">
                                    Sarah <span className="bg-[#D4AF37] text-black text-[10px] px-1 rounded font-bold">IA</span>
                                </h3>
                                <div className="text-white/60 text-xs uppercase tracking-widest">Assistante 24/7</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sarah Promo Banner fixed bottom mobile or inline desk */}
            <div className="bg-gradient-to-r from-[#1a1a1a] to-black border-y border-[#D4AF37]/20 py-12">
                <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex items-start gap-6">
                        <div className="p-4 bg-[#D4AF37]/10 rounded-full border border-[#D4AF37]/20 hidden md:block">
                            <Bot className="w-8 h-8 text-[#D4AF37]" />
                        </div>
                        <div>
                            <h3 className="font-serif text-2xl text-white mb-2">Besoin d'aide ? Sarah est là.</h3>
                            <p className="text-gray-400 text-sm max-w-lg mb-4">
                                "Je suis capable de gérer vos rendez-vous, répondre à vos questions sur le LPG et même de vous rappeler les consignes avant votre soin, le tout par téléphone ou SMS."
                            </p>
                            <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
                                <span className="flex items-center gap-1"><Check className="w-3 h-3" /> Dispo 24/7</span>
                                <span className="flex items-center gap-1"><Check className="w-3 h-3" /> Zéro attente</span>
                            </div>
                        </div>
                    </div>
                    <button className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full flex items-center gap-3 transition-all group shrink-0">
                        <Play className="w-5 h-5 fill-current text-[#D4AF37]" />
                        <div className="text-left">
                            <div className="text-[10px] uppercase text-white/40 tracking-widest">DÉMO LIVE</div>
                            <div className="font-bold text-white">Écouter Sarah (0:45)</div>
                        </div>
                    </button>
                </div>
            </div>

            {/* Map & Infos */}
            <footer className="bg-[#050505] pt-20 pb-10 border-t border-white/10">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 mb-16">
                    <div>
                        <h2 className="font-serif text-3xl mb-8">Nous trouver</h2>
                        <div className="space-y-6 text-gray-400">
                            <div className="flex items-start gap-4">
                                <MapPin className="w-6 h-6 text-[#D4AF37] shrink-0" />
                                <div>
                                    <strong className="block text-white mb-1">Adresse</strong>
                                    84 Rue Fondaudège,<br />33000 Bordeaux
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Clock className="w-6 h-6 text-[#D4AF37] shrink-0" />
                                <div>
                                    <strong className="block text-white mb-1">Horaires</strong>
                                    Lundi - Samedi<br />09:00 - 19:00
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Phone className="w-6 h-6 text-[#D4AF37] shrink-0" />
                                <div>
                                    <strong className="block text-white mb-1">Contact</strong>
                                    05 56 00 00 00<br />
                                    <span className="text-xs text-[#D4AF37]">Géré par Sarah (IA) ou Carol-Ann</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="h-64 md:h-full bg-[#111] rounded-xl overflow-hidden border border-white/10 relative group">
                        {/* Mock Map */}
                        <img
                            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop"
                            alt="Map Bordeaux"
                            className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity"
                        />
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="bg-[#050505] p-3 rounded-full border border-[#D4AF37] shadow-xl">
                                <MapPin className="w-6 h-6 text-[#D4AF37] fill-current" />
                            </div>
                        </div>
                        <a href="https://maps.google.com/?q=84+Rue+Fondaudège+Bordeaux" target="_blank" rel="noreferrer" className="absolute inset-0 z-10" aria-label="Ouvrir Maps"></a>
                    </div>
                </div>
                <div className="text-center text-white/20 text-xs uppercase tracking-widest pt-8 border-t border-white/5">
                    Propulsé par StyleOS • L'Excellence Digitale
                </div>
            </footer>
        </div>
    );
};

export default DemoCarolAnn;
