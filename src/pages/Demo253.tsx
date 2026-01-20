import { useState, useEffect } from 'react';
import { Check, MapPin, Clock, Phone, Calendar, X, User, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Demo253 = () => {
    // --- STATE MANAGEMENT ---
    const [callStatus, setCallStatus] = useState<'idle' | 'calling' | 'connected' | 'completed'>('idle');
    const [transcript, setTranscript] = useState<{ sender: string; text: string }[]>([]);
    const [slots, setSlots] = useState([
        { time: '10:00', slot: 'Coupe Homme', status: 'taken' },
        { time: '11:00', slot: 'Barbe & Soin', status: 'available' },
        { time: '14:30', slot: 'Coupe Classique', status: 'available' },
        { time: '16:00', slot: 'Complet', status: 'taken' },
    ]);
    const [selectedSlotIndex, setSelectedSlotIndex] = useState<number | null>(null);

    // --- CALL SIMULATION LOGIC ---
    const SCRIPT = [
        { sender: 'Sarah', text: "253 Barber Club, Sarah à l'appareil. Je peux vous aider ?" },
        { sender: 'Client', text: "Salut, je cherche un créneau pour une barbe demain vers 11h." },
        { sender: 'Sarah', text: "Je regarde... J'ai une disponibilité à 11h00 pile. Ça vous irait ?" },
        { sender: 'Client', text: "Oui, c'est parfait." },
        { sender: 'Sarah', text: "C'est noté ! Je vous ai bloqué le créneau. À demain !" }
    ];

    const startSimulation = () => {
        setCallStatus('calling');
        setTranscript([]);

        // Connect after 1.5s
        setTimeout(() => {
            setCallStatus('connected');
        }, 1500);
    };

    useEffect(() => {
        if (callStatus === 'connected') {
            let messageIndex = 0;
            const interval = setInterval(() => {
                if (messageIndex < SCRIPT.length) {
                    setTranscript(prev => [...prev, SCRIPT[messageIndex]]);

                    // Auto-book the slot visually when Antoine confirms
                    if (messageIndex === 4) {
                        handleAutoBook();
                    }

                    messageIndex++;
                } else {
                    clearInterval(interval);
                    setTimeout(() => setCallStatus('completed'), 2000);
                }
            }, 2000); // New message every 2s

            return () => clearInterval(interval);
        }
    }, [callStatus]);

    const handleAutoBook = () => {
        // Simulate the AI locking the slot
        setSlots(prev => prev.map(s => s.time === '11:00' ? { ...s, status: 'taken' } : s));
    };

    // --- MANUAL BOOKING LOGIC ---
    const handleSlotClick = (index: number) => {
        if (slots[index].status === 'available') {
            setSelectedSlotIndex(index);
        }
    };

    const confirmBooking = () => {
        if (selectedSlotIndex !== null) {
            const newSlots = [...slots];
            newSlots[selectedSlotIndex].status = 'taken';
            setSlots(newSlots);
            setSelectedSlotIndex(null);
            alert("Rendez-vous confirmé ! (Simulation)");
        }
    };

    return (
        <div className="min-h-screen bg-black text-white selection:bg-[#D4AF37] selection:text-black font-sans">
            {/* Navigation */}
            <nav className="fixed w-full top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Link to="/" className="text-white/50 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium">
                            <ArrowLeft className="w-4 h-4" /> Retour
                        </Link>
                        <div className="w-px h-6 bg-white/10 hidden md:block"></div>
                        <div className="text-xl md:text-2xl font-bold tracking-widest uppercase font-serif text-[#D4AF37]">253 Barber Club</div>
                    </div>
                    <button onClick={() => document.getElementById('ai-section')?.scrollIntoView({ behavior: 'smooth' })} className="bg-[#D4AF37] text-black px-6 py-2 rounded-none uppercase text-xs font-bold tracking-widest hover:bg-white transition-all hidden md:block">
                        Réserver
                    </button>
                    <button onClick={() => document.getElementById('ai-section')?.scrollIntoView({ behavior: 'smooth' })} className="md:hidden bg-[#D4AF37] text-black p-2 rounded-full">
                        <Calendar className="w-5 h-5" />
                    </button>
                </div>
            </nav>

            {/* Hero Section */}
            <header className="relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://res.cloudinary.com/planity/image/upload/f_auto,q_auto/bjvu29cw2a04fzl2dbtx"
                        alt="253 Barber Club Interior"
                        className="w-full h-full object-cover opacity-50"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                </div>

                <div className="relative z-10 text-center max-w-4xl px-6">
                    <h2 className="text-[#D4AF37] text-sm md:text-base font-bold uppercase tracking-[0.3em] mb-4 animate-fade-in-up">
                        Bordeaux • Chartrons
                    </h2>
                    <h1 className="text-5xl md:text-8xl font-serif font-bold text-white mb-8 border-y-2 border-[#D4AF37]/30 py-8 mx-auto w-fit">
                        253 BARBER CLUB
                    </h1>
                    <p className="text-gray-300 text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto mb-10">
                        L'élégance masculine réinventée. Plus qu'une coupe, une affirmation de soi.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <button onClick={() => document.getElementById('ai-section')?.scrollIntoView({ behavior: 'smooth' })} className="bg-[#D4AF37] text-black px-8 py-4 uppercase text-sm font-bold tracking-widest hover:bg-white transition-all">
                            Prendre Rendez-vous
                        </button>
                        <button onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })} className="border border-white/20 bg-white/5 backdrop-blur-sm text-white px-8 py-4 uppercase text-sm font-bold tracking-widest hover:bg-white/10 transition-all">
                            Voir la Galerie
                        </button>
                    </div>
                </div>
            </header>

            {/* Services Section */}
            <section className="py-24 bg-[#0a0a0a]">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row gap-16">
                        <div className="md:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-serif text-white mb-8">
                                <span className="text-[#D4AF37]">Nos Services.</span><br />
                                Précision & Style.
                            </h2>
                            <p className="text-gray-400 leading-relaxed mb-8">
                                Au 253 Barber Club, nous maîtrisons l'art du grooming traditionnel et des tendances modernes. Chaque coup de ciseaux est pensé pour sublimer votre visage.
                            </p>
                            <ul className="space-y-6">
                                <li className="flex justify-between items-center border-b border-white/10 pb-4 group hover:border-[#D4AF37] transition-colors">
                                    <div>
                                        <h3 className="text-lg text-white font-medium group-hover:text-[#D4AF37] transition-colors">Coupe Classique</h3>
                                        <p className="text-xs text-gray-500 uppercase tracking-wider">Ciseaux & Tondeuse</p>
                                    </div>
                                    <div className="text-[#D4AF37] font-serif italic text-xl">25€</div>
                                </li>
                                <li className="flex justify-between items-center border-b border-white/10 pb-4 group hover:border-[#D4AF37] transition-colors">
                                    <div>
                                        <h3 className="text-lg text-white font-medium group-hover:text-[#D4AF37] transition-colors">Taille de Barbe</h3>
                                        <p className="text-xs text-gray-500 uppercase tracking-wider">Serviette Chaude & Huiles</p>
                                    </div>
                                    <div className="text-[#D4AF37] font-serif italic text-xl">20€</div>
                                </li>
                                <li className="flex justify-between items-center border-b border-white/10 pb-4 group hover:border-[#D4AF37] transition-colors">
                                    <div>
                                        <h3 className="text-lg text-white font-medium group-hover:text-[#D4AF37] transition-colors">Le Rituel 253</h3>
                                        <p className="text-xs text-gray-500 uppercase tracking-wider">Coupe + Barbe + Soin Visage</p>
                                    </div>
                                    <div className="text-[#D4AF37] font-serif italic text-xl">45€</div>
                                </li>
                            </ul>
                        </div>
                        <div className="md:w-1/2 relative">
                            <div className="absolute -inset-4 border border-[#D4AF37]/20 z-0 translate-x-4 translate-y-4"></div>
                            <img
                                src="https://res.cloudinary.com/planity/image/upload/f_auto,q_auto/gkrckycxhwckbdo96wod"
                                alt="Barber Working"
                                className="relative z-10 w-full h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* AI Assistant Section - The "Hook" for StyleOS */}
            <section id="ai-section" className="py-24 bg-[#D4AF37] text-black relative overflow-hidden">
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <div className="inline-block border border-black/30 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                        Nouveau • Exclusivité 253
                    </div>
                    <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">
                        Appelez-nous.
                    </h2>
                    <p className="text-xl md:text-2xl font-light mb-10 max-w-2xl mx-auto">
                        Notre assistant IA, <span className="font-bold">Sarah</span>, gère vos rendez-vous 24/7 par téléphone.
                        Ne tombez plus jamais sur notre répondeur qui vous coûte des clients.
                    </p>
                    <div className="flex justify-center gap-8 text-sm font-bold uppercase tracking-widest mb-16">
                        <div className="flex items-center gap-2">
                            <Clock className="w-5 h-5" /> Accessible 24/7
                        </div>
                        <div className="flex items-center gap-2">
                            <Phone className="w-5 h-5" /> Réponse Immédiate
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar className="w-5 h-5" /> Synchro Planity
                        </div>
                    </div>

                    {/* Interactive Demo UI */}
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">

                        {/* 1. Phone Call Simulation */}
                        <div className="bg-black/10 backdrop-blur-sm p-6 rounded-3xl border border-black/10 text-left flex flex-col relative overflow-hidden transition-all duration-500 h-[450px]">
                            <div className="flex items-center justify-between mb-4 z-10">
                                <div className="text-xs font-bold uppercase tracking-widest opacity-60">
                                    {callStatus === 'idle' && 'Prêt à appeler'}
                                    {callStatus === 'calling' && 'Numérotation...'}
                                    {callStatus === 'connected' && 'En Appel...'}
                                    {callStatus === 'completed' && 'Appel Terminé'}
                                </div>
                                <div className={`w-2 h-2 rounded-full ${callStatus === 'connected' || callStatus === 'calling' ? 'bg-red-500 animate-pulse' : 'bg-black/20'}`}></div>
                            </div>

                            {/* Center Content based on Status */}
                            <div className="flex-1 flex flex-col relative z-10 overflow-hidden">
                                {callStatus === 'idle' && (
                                    <div className="flex-1 flex flex-col items-center justify-center text-center opacity-80">
                                        <div className="w-20 h-20 bg-black text-[#D4AF37] rounded-full flex items-center justify-center font-serif font-bold text-3xl mb-4 shadow-xl">S</div>
                                        <p className="font-bold text-lg">Sarah (IA)</p>
                                        <p className="text-sm">Assistante 253 Barber Club</p>
                                    </div>
                                )}

                                {(callStatus === 'connected' || callStatus === 'completed') && (
                                    <div className="flex-1 overflow-y-auto space-y-4 pr-2 scroll-smooth">
                                        {transcript.map((msg, i) => (
                                            <div key={i} className={`p-3 rounded-xl text-sm max-w-[85%] animate-fade-in ${msg.sender === 'Sarah' ? 'bg-black text-[#D4AF37] self-start rounded-tl-none mr-auto' : 'bg-white text-black self-end rounded-tr-none ml-auto border border-black/5'}`}>
                                                <div className="text-[10px] uppercase font-bold opacity-50 mb-1">{msg.sender}</div>
                                                {msg.text}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Bottom Button */}
                            <div className="mt-4 z-10">
                                {callStatus === 'idle' || callStatus === 'completed' ? (
                                    <button
                                        onClick={startSimulation}
                                        className="w-full bg-black text-white py-4 rounded-xl font-bold uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-gray-900 transition-all shadow-lg group"
                                    >
                                        <Phone className="w-5 h-5 group-hover:animate-bounce" />
                                        {callStatus === 'idle' ? "Tester l'Appel" : "Rappeler"}
                                    </button>
                                ) : (
                                    <button
                                        onClick={() => setCallStatus('completed')}
                                        className="w-full bg-red-600 text-white py-4 rounded-xl font-bold uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-red-700 transition-all shadow-lg"
                                    >
                                        <X className="w-5 h-5" />
                                        Raccrocher
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* 2. Visual Calendar */}
                        <div className="bg-white p-6 rounded-3xl shadow-xl text-left border border-black/5 flex flex-col h-[450px]">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="font-bold text-lg">Demain, 20 Jan</h3>
                                <div className="text-xs font-bold uppercase tracking-wider bg-green-100 text-green-800 px-2 py-1 rounded">Dispo</div>
                            </div>

                            <div className="space-y-3 flex-1 overflow-y-auto">
                                {slots.map((slot, i) => (
                                    <div
                                        key={i}
                                        onClick={() => handleSlotClick(i)}
                                        className={`flex items-center justify-between p-4 rounded-xl border transition-all duration-300
                                            ${slot.status === 'taken' ? 'bg-gray-100 border-transparent opacity-50 cursor-not-allowed' :
                                                selectedSlotIndex === i ? 'border-[#D4AF37] bg-[#D4AF37]/10 cursor-pointer shadow-inner' :
                                                    'border-gray-100 bg-gray-50 hover:border-[#D4AF37]/50 cursor-pointer hover:bg-amber-50'}
                                        `}
                                    >
                                        <div className="flex flex-col">
                                            <span className="font-mono font-bold text-lg leading-none">{slot.time}</span>
                                            <span className="text-xs text-gray-400 uppercase tracking-widest mt-1">
                                                {slot.status === 'taken' ? 'Réservé' : 'Libre'}
                                            </span>
                                        </div>
                                        <div className="font-medium text-sm">{slot.slot}</div>

                                        {slot.status === 'available' && (
                                            <div className={`w-6 h-6 rounded-full border flex items-center justify-center transition-all ${selectedSlotIndex === i ? 'bg-[#D4AF37] border-[#D4AF37]' : 'border-gray-300'}`}>
                                                {selectedSlotIndex === i && <Check className="w-4 h-4 text-black" />}
                                            </div>
                                        )}
                                        {slot.status === 'taken' && <div className="text-xs font-bold opacity-50">Occupé</div>}
                                    </div>
                                ))}
                            </div>

                            {/* Booking Action */}
                            <div className="mt-4 pt-4 border-t border-gray-100">
                                {selectedSlotIndex !== null ? (
                                    <button
                                        onClick={confirmBooking}
                                        className="w-full bg-[#D4AF37] text-black py-3 rounded-lg font-bold uppercase tracking-widest hover:bg-[#c29f2d] transition-all animate-bounce-short shadow-lg"
                                    >
                                        Confirmer {slots[selectedSlotIndex].time}
                                    </button>
                                ) : (
                                    <div className="text-center text-xs text-gray-400 uppercase tracking-wider py-3">
                                        Sélectionnez un créneau pour réserver
                                    </div>
                                )}
                            </div>
                        </div>

                    </div>
                </div>
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
            </section>

            {/* Team Section */}
            <section className="py-24 bg-[#0a0a0a] border-t border-white/5">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-5xl font-serif text-white mb-16">
                        <span className="text-[#D4AF37]">L'Équipe.</span><br />
                        Maîtres Barbiers.
                    </h2>
                    <div className="flex flex-wrap justify-center gap-12">
                        {['Hamouda', 'W.L Barber'].map((name, i) => (
                            <div key={i} className="group cursor-pointer">
                                <div className="w-48 h-48 rounded-full border-2 border-white/10 group-hover:border-[#D4AF37] p-2 transition-all mb-6 mx-auto">
                                    <div className="w-full h-full rounded-full bg-white/5 overflow-hidden flex items-center justify-center">
                                        <User className="w-16 h-16 text-gray-500 group-hover:text-white transition-colors" />
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-white group-hover:text-[#D4AF37] transition-colors">{name}</h3>
                                <p className="text-sm text-gray-500 uppercase tracking-wider mt-2">Expert Barber</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section id="gallery" className="py-0 bg-black">
                <div className="grid grid-cols-2 md:grid-cols-4 h-96 md:h-[600px]">
                    <div className="relative group overflow-hidden bg-white/5">
                        <img src="https://res.cloudinary.com/planity/image/upload/f_auto,q_auto/bjvu29cw2a04fzl2dbtx" alt="Gallery 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" />
                    </div>
                    <div className="relative group overflow-hidden bg-white/5">
                        <img src="https://res.cloudinary.com/planity/image/upload/f_auto,q_auto/urglykejq5xwounlvboi" alt="Gallery 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" />
                    </div>
                    <div className="relative group overflow-hidden bg-white/5">
                        <img src="https://res.cloudinary.com/planity/image/upload/f_auto,q_auto/pglybwooajkejoo75qd2" alt="Gallery 3" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" />
                    </div>
                    <div className="relative group overflow-hidden bg-white/5">
                        <img src="https://res.cloudinary.com/planity/image/upload/f_auto,q_auto/gkrckycxhwckbdo96wod" alt="Gallery 4" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" />
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="h-96 w-full grayscale contrast-125 brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-700">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.108383253354!2d-0.6023758233797213!3d44.81935657623161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5527e557d25bf3%3A0xace525203f705c5e!2s253%20BARBER%20CLUB!5e0!3m2!1ses!2sfr!4v1768865030543!5m2!1ses!2sfr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </section>

            {/* Footer Info */}
            <footer className="bg-black py-16 border-t border-white/10">
                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center md:text-left">
                    <div>
                        <div className="text-[#D4AF37] font-serif text-2xl font-bold mb-4">253 BARBER CLUB</div>
                        <p className="text-gray-500 text-sm">
                            Le repaire des gentlemen modernes à Bordeaux.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-white uppercase tracking-widest text-sm font-bold mb-6">Horaires</h4>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li className="flex justify-between md:justify-start gap-4"><span>Lundi - Samedi</span> <span className="text-white">10h - 19h</span></li>
                            <li className="flex justify-between md:justify-start gap-4"><span>Dimanche</span> <span className="text-[#D4AF37]">Fermé</span></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white uppercase tracking-widest text-sm font-bold mb-6">Contact</h4>
                        <div className="flex flex-col gap-4 text-gray-400 text-sm">
                            <div className="flex items-center justify-center md:justify-start gap-3">
                                <MapPin className="w-4 h-4 text-[#D4AF37]" />
                                253 Cr Maréchal Gallieni, Bordeaux
                            </div>
                            <div className="flex items-center justify-center md:justify-start gap-3">
                                <Phone className="w-4 h-4 text-[#D4AF37]" />
                                05 56 00 00 00
                            </div>
                            <div className="flex items-center justify-center md:justify-start gap-3">
                                <Check className="w-4 h-4 text-[#D4AF37]" />
                                Réservation via Planity
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Demo253;
