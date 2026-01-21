import { useState, useEffect } from 'react';
import { Bot, Phone, Star, MapPin, ArrowRight, Check, Sparkles, Play, Clock, Search, Menu, X, Instagram, Facebook } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SERVICES = [
    {
        category: "Épilation",
        items: [
            { name: "Création Ligne Sourcils", price: "15€", time: "15min", description: "Restructuration complète à la pince." },
            { name: "Lèvres ou Menton", price: "10€", time: "10min", description: "Cire base température douceur." },
            { name: "Aisselles", price: "15€", time: "15min", description: "Soin apaisant inclus." },
            { name: "Maillot Classique", price: "20€", time: "20min", description: "Échancrure standard." },
            { name: "Maillot Semi-Intégral", price: "30€", time: "30min", description: "Confort et esthétique." },
            { name: "Maillot Intégral", price: "38€", time: "40min", description: "Finition parfaite." },
            { name: "Jambes Complètes", price: "35€", time: "40min", description: "Douceur durable." }
        ]
    },
    {
        category: "Zone unique",
        items: [
            { name: "Zone Visage Spécifique", price: "10€", time: "10min", description: "Joues, front ou cou." },
            { name: "Sillon Inter-Fessier", price: "10€", time: "10min", description: "Complément maillot." }
        ]
    },
    {
        category: "Forfaits Épilation",
        items: [
            { name: "Visage + Sourcils", price: "22€", time: "20min", description: "Harmonie complète du visage." },
            { name: "Demi-Jambes + Maillot + Aisselles", price: "45€", time: "45min", description: "L'essentiel mensuel." },
            { name: "Jambes Complètes + Maillot Intégral + Aisselles", price: "75€", time: "75min", description: "Le grand soin complet." }
        ]
    },
    {
        category: "Épilation Homme",
        items: [
            { name: "Sourcils Homme", price: "15€", time: "15min", description: "Nettoyage naturel." },
            { name: "Dos ou Torse", price: "35€", time: "30min", description: "Cire tiède large zone." },
            { name: "Épaules", price: "20€", time: "20min", description: "Retrait poils disgracieux." }
        ]
    },
    {
        category: "Mains & Ongles",
        items: [
            { name: "Manucure Express", price: "25€", time: "30min", description: "Façonnage et soin." },
            { name: "Semi-Permanent", price: "40€", time: "45min", description: "Tenue 2-3 semaines." },
            { name: "Renfort Gainage (Gel)", price: "55€", time: "60min", description: "Pour ongles fragiles." },
            { name: "Extensions Gel", price: "75€", time: "1h30", description: "Longueur sur mesure." }
        ]
    },
    {
        category: "Drainage & Corps",
        items: [
            { name: "Drainage Lymphatique", price: "80€", time: "60min", description: "Méthode inspirée Renata França." },
            { name: "Madérothérapie (Jambes)", price: "60€", time: "45min", description: "Anti-cellulite outils bois." },
            { name: "Gommage Corps Sels", price: "40€", time: "30min", description: "Peau douce et soyeuse." },
            { name: "Modelage Relaxant", price: "70€", time: "60min", description: "Massage intuitif." }
        ]
    },
    {
        category: "Expertise LPG",
        items: [
            { name: "Bilan Personnalisé", price: "50€", time: "30min", description: "Diagnostic morphologique." },
            { name: "Séance Zone (10min)", price: "20€", time: "10min", description: "Bras, ventre ou culotte de cheval." },
            { name: "Soin Global (30min)", price: "60€", time: "30min", description: "Lissage et fermeté." },
            { name: "Forfait 10 Séances", price: "540€", time: "Cure", description: "2 séances offertes." }
        ]
    },
    {
        category: "Visage & Kobido",
        items: [
            { name: "Soin Éclat LPG", price: "35€", time: "20min", description: "Teint frais immédiat." },
            { name: "Massage Kobido", price: "85€", time: "60min", description: "Lifting manuel japonais." },
            { name: "Le Grand Soin Signature", price: "120€", time: "1h30", description: "Technique manuelle + LPG." }
        ]
    },
    {
        category: "Beauté du Regard",
        items: [
            { name: "Rehaussement + Teinture", price: "75€", time: "1h", description: "Courbure naturelle." },
            { name: "Extensions Cil à Cil", price: "90€", time: "1h30", description: "Effet naturel." },
            { name: "Volume Russe léger", price: "110€", time: "2h00", description: "Regard sophistiqué." }
        ]
    },
    {
        category: "Les Pieds",
        items: [
            { name: "Beauté des Pieds", price: "45€", time: "45min", description: "Soin complet." },
            { name: "Soin Yumi Feet", price: "40€", time: "30min", description: "Anti-callosités efficace." }
        ]
    }
];

const DemoCarolAnn = () => {
    const navigate = useNavigate();
    const [activeCategory, setActiveCategory] = useState(SERVICES[0].category);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const scrollToCategory = (category: string) => {
        setActiveCategory(category);
        setIsMenuOpen(false);
        const element = document.getElementById(category);
        if (element) {
            const offset = 100;
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
        <div className="min-h-screen bg-[#FAFAF9] text-[#1C1917] font-sans selection:bg-[#064E3B] selection:text-white">

            {/* Top Banner */}
            <div className="bg-[#064E3B] text-white text-center py-2 px-4 text-xs font-medium tracking-widest relative z-[60]">
                🌿 Nouvelle gamme de soins Bio disponible en salon
            </div>

            {/* Header */}
            <header className="sticky top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-[#E7E5E4] shadow-sm transition-all">
                <div className="max-w-7xl mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-3 group cursor-pointer" onClick={() => navigate('/')}>
                        <div className="w-10 h-10 border border-[#064E3B] rounded-full flex items-center justify-center bg-[#F5F5F4] group-hover:bg-[#064E3B] transition-colors">
                            <span className="font-serif text-[#064E3B] group-hover:text-white font-bold text-xl transition-colors">C</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-serif text-lg tracking-widest text-[#1C1917]">L'ESTHÉTIQUE</span>
                            <span className="text-[10px] tracking-[0.2em] text-[#064E3B] uppercase font-medium">By Carol-Ann</span>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-6">
                        <button onClick={() => navigate('/')} className="text-xs uppercase tracking-widest text-gray-500 hover:text-[#064E3B] transition-colors">
                            Retour StyleOS
                        </button>
                        <button className="px-6 py-2.5 bg-[#064E3B] text-white text-xs font-bold uppercase tracking-widest hover:bg-[#065F46] transition-all rounded-sm shadow-lg shadow-[#064E3B]/20">
                            Prendre RDV
                        </button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-[#1C1917]">
                        {isMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {/* Mobile Dropdown Nav */}
                <div className={`md:hidden absolute w-full bg-white border-b border-[#E7E5E4] transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="py-2 px-4 flex flex-col gap-1">
                        {SERVICES.map((service, index) => (
                            <button
                                key={index}
                                onClick={() => scrollToCategory(service.category)}
                                className={`text-left py-3 px-2 text-sm uppercase tracking-wide border-b border-gray-50 last:border-0 ${activeCategory === service.category ? 'text-[#064E3B] font-bold' : 'text-gray-500'}`}
                            >
                                {service.category}
                            </button>
                        ))}
                    </div>
                </div>
            </header>

            {/* Hero Section - Floral / Marble Vibes */}
            <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2073&auto=format&fit=crop"
                        alt="Carol-Ann Atmosphere"
                        className="w-full h-full object-cover opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#FAFAF9] via-white/20 to-transparent"></div>
                </div>

                <div className="relative z-10 text-center max-w-4xl px-6 pt-10">
                    <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 bg-white/80 backdrop-blur border border-[#E7E5E4] rounded-full shadow-sm animate-fade-in-up">
                        <div className="flex text-[#D4AF37]">
                            <Star className="w-3 h-3 fill-current" />
                            <Star className="w-3 h-3 fill-current" />
                            <Star className="w-3 h-3 fill-current" />
                            <Star className="w-3 h-3 fill-current" />
                            <Star className="w-3 h-3 fill-current" />
                        </div>
                        <span className="text-[#064E3B] text-xs font-bold uppercase tracking-wider">L'Excellence à Bordeaux</span>
                    </div>

                    <h1 className="font-serif text-5xl md:text-7xl text-[#1C1917] mb-6 animate-fade-in-up delay-100">
                        Naturellement <span className="italic text-[#064E3B]">Vous.</span>
                    </h1>
                    <p className="text-lg text-gray-600 max-w-lg mx-auto mb-8 font-light leading-relaxed animate-fade-in-up delay-200">
                        Votre institut de beauté, entre expertise technologique et douceur naturelle.
                    </p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row gap-12 relative z-10 pb-20">

                {/* Desktop Sticky Sidebar */}
                <aside className="hidden md:block w-64 shrink-0 relative">
                    <div className="sticky top-28 space-y-1">
                        <h3 className="font-serif text-xl mb-6 pl-4 border-l-2 border-[#064E3B] text-[#064E3B]">La Carte</h3>
                        {SERVICES.map((service, index) => (
                            <button
                                key={index}
                                onClick={() => scrollToCategory(service.category)}
                                className={`block w-full text-left py-2 px-4 text-xs uppercase tracking-widest transition-all border-l-2 hover:bg-[#F5F5F4]
                                    ${activeCategory === service.category
                                        ? 'border-[#064E3B] text-[#064E3B] font-bold bg-[#F5F5F4]'
                                        : 'border-transparent text-gray-400 hover:text-gray-600 hover:border-gray-300'}`}
                            >
                                {service.category}
                            </button>
                        ))}
                        <div className="pt-8">
                            <div className="p-6 bg-[#F5F5F4] rounded-sm text-center">
                                <span className="block font-serif text-lg text-[#064E3B] mb-2">Une question ?</span>
                                <p className="text-xs text-gray-500 mb-4">Sarah, notre IA, vous répond instantanément.</p>
                                <button className="w-full py-2 bg-white border border-[#E7E5E4] text-[#064E3B] text-xs font-bold uppercase tracking-widest hover:bg-[#064E3B] hover:text-white transition-all">
                                    Discuter
                                </button>
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Services Grid */}
                <main className="flex-1">
                    {SERVICES.map((cat, idx) => (
                        <div key={idx} id={cat.category} className="mb-12 scroll-mt-32">
                            <div className="flex items-end gap-4 mb-6 pb-2 border-b border-[#E7E5E4]">
                                <h3 className="font-serif text-2xl md:text-3xl text-[#1C1917]">{cat.category}</h3>
                                <span className="text-xs text-gray-400 uppercase tracking-widest mb-1">{cat.items.length} Prestations</span>
                            </div>

                            <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
                                {cat.items.map((item, itemIdx) => (
                                    <div key={itemIdx} className="group cursor-pointer hover:bg-white p-4 -mx-4 rounded-lg transition-colors">
                                        <div className="flex justify-between items-baseline mb-2">
                                            <h4 className="font-bold text-[#1C1917] group-hover:text-[#064E3B] transition-colors">{item.name}</h4>
                                            <span className="font-serif text-lg text-[#064E3B]">{item.price}</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <p className="text-sm text-gray-500 font-light">{item.description}</p>
                                            <span className="text-[10px] uppercase text-gray-400 bg-[#F5F5F4] px-2 py-1 rounded-full whitespace-nowrap ml-4">{item.time}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </main>
            </div>

            {/* Team Section & AI - Refined */}
            <section className="bg-white py-20 border-t border-[#E7E5E4]">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <span className="text-[#064E3B] text-xs font-bold uppercase tracking-[0.2em] mb-4 block">L'Équipe</span>
                    <h2 className="font-serif text-3xl md:text-4xl text-[#1C1917] mb-12">Expertise Humaine & Intelligence Artificielle</h2>

                    <div className="flex flex-col md:flex-row justify-center gap-16">
                        {/* Carol-Ann */}
                        <div className="group text-center">
                            <div className="w-40 h-40 mx-auto rounded-full p-1 border border-[#E7E5E4] mb-6 relative overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1595475207225-428b62bda831?q=80&w=2080&auto=format&fit=crop" alt="Carol-Ann" className="w-full h-full rounded-full object-cover group-hover:scale-105 transition-transform duration-700" />
                            </div>
                            <h3 className="font-serif text-2xl text-[#1C1917] mb-1">Carol-Ann</h3>
                            <div className="text-gray-500 text-xs uppercase tracking-widest">Fondatrice & Experte Peau</div>
                        </div>

                        {/* Sarah (IA) */}
                        <div className="group text-center relative">
                            <div className="w-40 h-40 mx-auto rounded-full p-1 border border-[#064E3B]/20 mb-6 relative bg-[#FAFAF9] flex items-center justify-center">
                                <div className="absolute inset-0 bg-[#064E3B]/5 rounded-full animate-pulse"></div>
                                <Bot className="w-12 h-12 text-[#064E3B]" />
                            </div>
                            <h3 className="font-serif text-2xl text-[#1C1917] mb-1 flex items-center justify-center gap-2">
                                Sarah <span className="bg-[#064E3B] text-white text-[10px] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider">IA</span>
                            </h3>
                            <div className="text-gray-500 text-xs uppercase tracking-widest">Wellness Assistant</div>
                            <p className="text-sm text-gray-400 mt-3 max-w-xs mx-auto">
                                "Je gère votre agenda et réponds à vos questions 24h/24."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Info & Map */}
            <footer className="bg-[#1C1917] text-white pt-20 pb-10">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 mb-16">
                    <div className="space-y-8">
                        <div>
                            <h2 className="font-serif text-3xl mb-6">Carol-Ann Esthétique</h2>
                            <p className="text-gray-400 font-light max-w-md">
                                Un havre de paix au cœur de Bordeaux. Venez vivre une expérience de soin unique, où chaque détail est pensé pour votre bien-être.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-[#064E3B] rounded-full">
                                    <MapPin className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <strong className="block text-white text-sm uppercase tracking-widest mb-1">Adresse</strong>
                                    <span className="text-gray-300">84 Rue Fondaudège<br />33000 Bordeaux, France</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-[#292524] rounded-full">
                                    <Clock className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <strong className="block text-white text-sm uppercase tracking-widest mb-1">Horaires</strong>
                                    <span className="text-gray-300">Lundi - Samedi : 09h00 - 19h00<br />Dimanche : Fermé</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-[#292524] rounded-full">
                                    <Phone className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <strong className="block text-white text-sm uppercase tracking-widest mb-1">Contact</strong>
                                    <span className="text-gray-300">05 56 00 00 00</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4 pt-4">
                            <a href="#" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-[#064E3B] hover:border-[#064E3B] transition-all"><Instagram className="w-4 h-4" /></a>
                            <a href="#" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-[#064E3B] hover:border-[#064E3B] transition-all"><Facebook className="w-4 h-4" /></a>
                        </div>
                    </div>

                    <div className="h-[400px] bg-[#292524] rounded-lg overflow-hidden border border-white/10 shadow-2xl relative">
                        {/* REAL GOOGLE MAP IFRAME */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2829.1764724916896!2d-0.5847426233488667!3d44.84589997107028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd55287fbd872e49%3A0x6b696f86c25785f!2s84%20Rue%20Fondaud%C3%A8ge%2C%2033000%20Bordeaux!5e0!3m2!1sfr!2sfr!4v1705680000000!5m2!1sfr!2sfr"
                            width="100%"
                            height="100%"
                            style={{ border: 0, filter: 'grayscale(100%) contrast(1.2) brightness(0.8)' }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                        <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md px-3 py-1 rounded-sm border border-white/20 text-[10px] text-white uppercase tracking-widest pointer-events-none">
                            Plan d'accès
                        </div>
                    </div>
                </div>

                <div className="text-center pt-8 border-t border-white/10 text-white/20 text-xs uppercase tracking-widest">
                    Pulsé par StyleOS • Excellence Digitale
                </div>
            </footer>
        </div>
    );
};

export default DemoCarolAnn;
