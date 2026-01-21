```
import { useState, useEffect, useRef } from 'react';
import { MapPin, Phone, Star, Clock, Instagram, Facebook, ArrowRight, Menu, X, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const SERVICES = [
    {
        category: "Soins Visage",
        id: "visage",
        image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=2070", // Luxury Facial
        items: [
            { name: "Soin Signature Carol-Ann", price: "85€", duration: "1h", description: "Notre soin emblématique pour un éclat immédiat." },
            { name: "Hydratation Intense", price: "75€", duration: "50min", description: "Bain d'hydratation à l'acide hyaluronique." },
            { name: "Anti-Âge Kobido", price: "95€", duration: "1h15", description: "Massage liftant japonais traditionnel." },
            { name: "Peeling Éclat", price: "65€", duration: "45min", description: "Rénovation cellulaire douce." },
        ]
    },
    {
        category: "Massages",
        id: "massages",
        image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=2070", // Massage Spa
        items: [
            { name: "Massage Relaxant", price: "80€", duration: "1h", description: "Détente musculaire aux huiles chaudes." },
            { name: "Drainage Lymphatique", price: "90€", duration: "1h", description: "Technique Renata França." },
            { name: "Massage Pierres Chaudes", price: "85€", duration: "1h", description: "Chaleur diffusée pour une relaxation profonde." },
        ]
    },
    {
        category: "Minceur (LPG)",
        id: "minceur",
        image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=2074", // Body/Health
        items: [
            { name: "Séance LPG Corps", price: "60€", duration: "35min", description: "Destockage des graisses et lissage." },
            { name: "Cure 10 Séances", price: "540€", duration: "10 x 35min", description: "Programme intensif minceur." },
            { name: "Bilan Minceur", price: "Offert", duration: "20min", description: "Analyse personnalisée de vos besoins." },
        ]
    },
    {
        category: "Épilations",
        id: "epilations",
        image: "https://images.unsplash.com/photo-1620331311520-246422fd82f9?auto=format&fit=crop&q=80&w=2070", // Smooth skin/flower
        items: [
            { name: "Jambes Complètes", price: "28€", duration: "30min", description: "Cire tiède peau sensible." },
            { name: "Maillot Intégral", price: "25€", duration: "20min", description: "Finition parfaite." },
            { name: "Aisselles", price: "12€", duration: "15min", description: "Douceur longue durée." },
            { name: "Sourcils", price: "10€", duration: "15min", description: "Restructuration de la ligne." },
        ]
    },
    {
        category: "Beauté du Regard",
        id: "regard",
        image: "https://images.unsplash.com/photo-1587909209111-5097ee578ec3?auto=format&fit=crop&q=80&w=2070", // Eye lashes
        items: [
            { name: "Rehaussement Cils", price: "55€", duration: "45min", description: "Courbure naturelle pour 6 semaines." },
            { name: "Teinture Cils", price: "15€", duration: "20min", description: "Intensifiez votre regard." },
        ]
    },
];

const DemoCarolAnn = () => {
    const [activeCategory, setActiveCategory] = useState(SERVICES[0].id);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [selectedServices, setSelectedServices] = useState<Set<string>>(new Set());

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Scroll Spy Logic
    useEffect(() => {
        const handleScroll = () => {
            const sections = SERVICES.map(s => document.getElementById(s.id));
            const scrollPosition = window.scrollY + 150; // Offset

            for (const section of sections) {
                if (section && section.offsetTop <= scrollPosition && (section.offsetTop + section.offsetHeight) > scrollPosition) {
                    setActiveCategory(section.id);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToCategory = (id: string) => {
        setActiveCategory(id);
        setIsMenuOpen(false);
        const element = document.getElementById(id);
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

    const toggleService = (itemName: string) => {
        setSelectedServices(prev => {
            const newSet = new Set(prev);
            if (newSet.has(itemName)) newSet.delete(itemName);
            else newSet.add(itemName);
            return newSet;
        });
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
                    <Link to="/" className="flex items-center gap-3 group cursor-pointer">
                        <div className="w-10 h-10 border border-[#064E3B] rounded-full flex items-center justify-center bg-[#F5F5F4] group-hover:bg-[#064E3B] transition-colors">
                            <span className="font-serif text-[#064E3B] group-hover:text-white font-bold text-xl transition-colors">C</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-serif text-lg tracking-widest text-[#1C1917]">L'ESTHÉTIQUE</span>
                            <span className="text-[10px] tracking-[0.2em] text-[#064E3B] uppercase font-medium">By Carol-Ann</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-6">
                        <Link to="/" className="text-xs uppercase tracking-widest text-gray-500 hover:text-[#064E3B] transition-colors">
                            Retour StyleOS
                        </Link>
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
                <div className={`md:hidden absolute w - full bg - white border - b border - [#E7E5E4] transition - all duration - 300 overflow - hidden ${ isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0' } `}>
                    <div className="py-2 px-4 flex flex-col gap-1">
                        {SERVICES.map((service, index) => (
                            <button
                                key={index}
                                onClick={() => scrollToCategory(service.id)}
                                className={`text - left py - 3 px - 2 text - sm uppercase tracking - wide border - b border - gray - 50 last: border - 0 ${ activeCategory === service.id ? 'text-[#064E3B] font-bold' : 'text-gray-500' } `}
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
                        {SERVICES.map((cat) => (
                            <button
                                onClick={() => {
                                    setActiveCategory(cat.id);
                                    document.getElementById(cat.id)?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                key={cat.id}
                                className={`w - full text - left py - 3 px - 4 rounded - lg transition - all duration - 300 flex items - center justify - between group ${
    activeCategory === cat.id
        ? 'bg-[#064E3B] text-white shadow-lg'
        : 'text-stone-600 hover:bg-stone-100'
} `}
                            >
                                <span className="font-medium">{cat.category}</span>
                                {activeCategory === cat.id && (
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></div>
                                )}
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
                        <div key={idx} id={cat.id} className="mb-12 scroll-mt-32">
                            <div className="flex items-end gap-4 mb-6 pb-2 border-b border-[#E7E5E4]">
                                <h3 className="font-serif text-2xl md:text-3xl text-[#1C1917]">{cat.category}</h3>
                                <span className="text-xs text-gray-400 uppercase tracking-widest mb-1">{cat.items.length} Prestations</span>
                            </div>

                            <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
                                {cat.items.map((item, itemIdx) => (
                                    <div
                                        key={itemIdx}
                                        onClick={() => toggleService(item.name)}
                                        className={`p - 4 rounded - xl border transition - all duration - 300 cursor - pointer group relative overflow - hidden ${
    selectedServices.has(item.name)
        ? 'bg-[#064E3B]/5 border-[#064E3B] shadow-md'
        : 'bg-white border-stone-100 hover:border-[#064E3B]/30 hover:shadow-sm'
} `}
                                    >
                                        {selectedServices.has(item.name) && (
                                            <div className="absolute top-0 right-0 p-2 bg-[#064E3B] text-white rounded-bl-xl">
                                                <Check size={12} />
                                            </div>
                                        )}
                                        <div className="flex justify-between items-start mb-2">
                                            <h4 className={`font - serif text - lg font - medium transition - colors ${ selectedServices.has(item.name) ? 'text-[#064E3B]' : 'text-stone-800' } `}>
                                                {item.name}
                                            </h4>
                                            <span className="font-bold text-[#D4AF37]">{item.price}</span>
                                        </div>
                                        <p className="text-sm text-stone-500 mb-3 line-clamp-2">{item.description}</p>
                                        <div className="flex items-center gap-4 text-xs text-stone-400 font-medium">
                                            <span className="flex items-center gap-1">
                                                <Clock size={12} /> {item.duration}
                                            </span>
                                            <span className={`px - 2 py - 1 rounded - full transition - colors ${
    selectedServices.has(item.name)
        ? 'bg-[#064E3B] text-white'
        : 'bg-stone-100 text-stone-500 group-hover:bg-[#064E3B] group-hover:text-white'
} `}>
                                                {selectedServices.has(item.name) ? 'Sélectionné' : 'Choisir'}
                                            </span>
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
                                <img src="https://cdn-icons-png.flaticon.com/512/8943/8943377.png" alt="AI Assistant" className="w-12 h-12 text-[#064E3B]" />
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
                {/* Floating Booking Button */}
                {selectedServices.size > 0 && (
                    <div className="fixed bottom-6 right-6 z-50 animate-bounce-in">
                        <button className="bg-[#064E3B] text-white px-8 py-4 rounded-full font-bold shadow-2xl flex items-center gap-3 hover:bg-[#053d2e] transition-colors hover:scale-105 active:scale-95">
                            <span>Réserver ({selectedServices.size})</span>
                            <div className="w-1 h-1 bg-white/50 rounded-full"></div>
                            <span className="text-[#D4AF37]">Mettre les mains dans la beauté</span>
                        </button>
                    </div>
                )}
            </footer>
        </div>
    );
};

export default DemoCarolAnn;
```
