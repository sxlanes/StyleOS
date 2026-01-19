
import { Check, Star, MapPin, Clock, Phone, Scissors, Calendar } from 'lucide-react';

const Demo253 = () => {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-[#D4AF37] selection:text-black font-sans">
            {/* Navigation (Simplifiée pour la demo) */}
            <nav className="fixed w-full top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="text-2xl font-bold tracking-widest uppercase font-serif text-[#D4AF37]">253 Barber Club</div>
                    <a href="https://www.planity.com/253-barber-club-33000-bordeaux" target="_blank" className="bg-[#D4AF37] text-black px-6 py-2 rounded-none uppercase text-xs font-bold tracking-widest hover:bg-white transition-all">
                        Réserver
                    </a>
                </div>
            </nav>

            {/* Hero Section */}
            <header className="relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        // Placeholder - we'll replace with a real sleek image or color block
                        src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop"
                        alt="Barber Background"
                        className="w-full h-full object-cover opacity-40 grayscale"
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
                        <button className="bg-[#D4AF37] text-black px-8 py-4 uppercase text-sm font-bold tracking-widest hover:bg-white transition-all">
                            Prendre Rendez-vous
                        </button>
                        <button className="border border-white/20 bg-white/5 backdrop-blur-sm text-white px-8 py-4 uppercase text-sm font-bold tracking-widest hover:bg-white/10 transition-all">
                            Découvrir le Salon
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
                                src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=2070&auto=format&fit=crop"
                                alt="Barber Working"
                                className="relative z-10 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* AI Assistant Section - The "Hook" for StyleOS */}
            <section className="py-24 bg-[#D4AF37] text-black relative overflow-hidden">
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <div className="inline-block border border-black/30 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                        Nouveau • Exclusivité 253
                    </div>
                    <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">
                        Appelez-nous.
                    </h2>
                    <p className="text-xl md:text-2xl font-light mb-10 max-w-2xl mx-auto">
                        Notre assistant IA, <span className="font-bold">Antoine</span>, gère vos rendez-vous 24/7 par téléphone.
                        Ne tombez plus jamais sur notre répondeur.
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
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-center">

                        {/* 1. Phone Call Simulation */}
                        <div className="bg-black/10 backdrop-blur-sm p-6 rounded-3xl border border-black/10 text-left">
                            <div className="flex items-center justify-between mb-4">
                                <div className="text-xs font-bold uppercase tracking-widest opacity-60">Appel Entrant</div>
                                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                            </div>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-black text-[#D4AF37] rounded-full flex items-center justify-center font-serif font-bold text-xl">
                                    A
                                </div>
                                <div>
                                    <div className="font-bold text-lg">Antoine (IA)</div>
                                    <div className="text-sm opacity-70">Assistant StyleOS</div>
                                </div>
                            </div>
                            <button className="w-full bg-black text-white py-4 rounded-xl font-bold uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-gray-900 transition-all shadow-lg group">
                                <Phone className="w-5 h-5 group-hover:animate-bounce" />
                                Tester l'Appel
                            </button>
                        </div>

                        {/* 2. Visual Calendar */}
                        <div className="bg-white p-6 rounded-3xl shadow-xl text-left border border-black/5">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="font-bold text-lg">Demain, 19 Jan</h3>
                                <div className="text-xs font-bold uppercase tracking-wider bg-green-100 text-green-800 px-2 py-1 rounded">Dispo</div>
                            </div>
                            <div className="space-y-2">
                                {[
                                    { time: '10:00', slot: 'Coupe Homme', status: 'taken' },
                                    { time: '11:00', slot: 'Barbe & Soin', status: 'available' },
                                    { time: '14:30', slot: 'Coupe Classique', status: 'available' },
                                    { time: '16:00', slot: 'Complet', status: 'taken' },
                                ].map((slot, i) => (
                                    <div key={i} className={`flex items-center justify-between p-3 rounded-xl border ${slot.status === 'available' ? 'border-gray-200 bg-gray-50 hover:border-[#D4AF37] cursor-pointer hover:bg-[#D4AF37]/10' : 'border-transparent bg-gray-100 opacity-50 cursor-not-allowed'}`}>
                                        <span className="font-mono font-bold text-sm">{slot.time}</span>
                                        <span className="text-sm font-medium">{slot.slot}</span>
                                        {slot.status === 'available' ? (
                                            <div className="w-4 h-4 rounded-full border border-black mb-[1px]"></div>
                                        ) : (
                                            <div className="text-xs font-bold opacity-50">Occupé</div>
                                        )}
                                    </div>
                                ))}
                            </div>
                            <div className="mt-4 pt-4 border-t border-gray-100 text-center">
                                <span className="text-xs text-gray-400 uppercase tracking-wider">Synchronisé avec Planity</span>
                            </div>
                        </div>

                    </div>
                </div>
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
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
                                253 Rue Code Bar, 33000 Bordeaux
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
