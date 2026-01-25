import { useState, useEffect, useRef } from 'react';
import { Bot, BarChart3, Megaphone, Server, LayoutDashboard, Calendar, Users, Wallet, Monitor, ArrowRight, Check, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

import { StickyCanvas } from './components/StickyCanvas';
import ComparisonTable from './components/ComparisonTable';
import AudioDemo from './components/AudioDemo';
import RevenueSimulator from './components/RevenueSimulator';
import PricingSection from './components/PricingSection';
import OfferSection from './components/OfferSection';
import GuaranteeSection from './components/GuaranteeSection';
import ProcessSection from './components/ProcessSection';

// --- ANIMATION WRAPPER ---
const ScrollReveal = ({ children, className = "", delay = 0, direction = "up" }: any) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: direction === "up" ? 60 : 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-5%" }}
            transition={{ duration: 0.8, ease: "easeOut", delay }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

/* --- MOCKS --- */
// Barber 253 Mock (CSS Only)
const WebEliteMock = () => (
    <div className="w-full h-full bg-[#1a1a1a] flex flex-col rounded-xl border border-white/10 overflow-hidden relative shadow-2xl group font-serif transition-transform duration-500 group-hover:scale-[1.02]">
        <div className="h-12 border-b border-[#D4AF37]/20 bg-[#0F0F0F] flex justify-between items-center px-6">
            <div className="text-[10px] text-[#D4AF37] font-bold tracking-[0.2em] uppercase">Barber Club 253</div>
            <div className="bg-[#D4AF37] text-black text-[8px] font-bold px-3 py-1 uppercase tracking-widest">Réserver</div>
        </div>
        <div className="flex-1 relative flex flex-col items-center justify-center p-8 text-center bg-[url('https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=2074')] bg-cover bg-center">
            <div className="absolute inset-0 bg-black/70 group-hover:bg-black/50 transition-colors duration-500"></div>
            <div className="relative z-10 border border-[#D4AF37]/30 p-6 bg-black/40 backdrop-blur-sm">
                <h2 className="text-2xl text-white italic mb-2">L'Excellence Masculine</h2>
                <p className="text-[8px] text-[#D4AF37] uppercase tracking-widest mb-4">Coupe • Barbe • Soin</p>
                <div className="w-8 h-[1px] bg-[#D4AF37] mx-auto"></div>
            </div>
        </div>
        <div className="absolute bottom-4 right-4 bg-red-600 text-white text-[8px] font-bold px-3 py-1 rounded-full uppercase tracking-widest z-20 flex items-center gap-2 shadow-lg animate-pulse">
            <span className="w-1.5 h-1.5 bg-white rounded-full"></span> Live Demo
        </div>
    </div>
);

// Carol Ann Mock (White/Elegant)
const CarolAnnMock = () => (
    <div className="w-full h-full bg-[#fdfaf5] flex flex-col rounded-xl border border-white/10 overflow-hidden relative shadow-2xl group font-sans text-black transition-transform duration-500 group-hover:scale-[1.02]">
        <div className="h-12 border-b border-black/5 flex justify-between items-center px-6 bg-white">
            <div className="text-[10px] text-black font-light tracking-[0.2em] uppercase">Maison Carol Ann</div>
            <div className="bg-black text-white text-[8px] font-bold px-3 py-1 uppercase tracking-widest">Book</div>
        </div>
        <div className="flex-1 relative flex flex-col items-center justify-center p-8 text-center bg-[url('https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?auto=format&fit=crop&q=80&w=2074')] bg-cover bg-center">
            <div className="absolute inset-0 bg-white/40 group-hover:bg-white/20 transition-colors duration-500"></div>
            <div className="relative z-10 p-6 bg-white/80 backdrop-blur-md shadow-xl max-w-xs">
                <h2 className="text-xl text-black font-light mb-2">Haute Coiffure</h2>
                <p className="text-[8px] text-gray-600 uppercase tracking-widest mb-4">Paris • Le Marais</p>
            </div>
        </div>
    </div>
);

const ChatMock = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <>
            <div onClick={() => setIsExpanded(true)} className="w-full md:w-3/4 mx-auto h-full bg-black flex flex-col rounded-[2rem] border border-white/10 overflow-hidden relative shadow-2xl cursor-pointer hover:border-primary/50 transition-colors group">
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="h-14 bg-white/5 border-b border-white/5 flex items-center px-6 gap-4 relative z-10">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary relative"><Bot size={16} /></div>
                    <div>
                        <div className="text-xs font-bold text-white">Sarah IA</div>
                        <div className="text-[8px] text-green-500 font-mono">En ligne</div>
                    </div>
                    <div className="ml-auto text-[8px] uppercase font-bold text-gray-500 bg-white/5 px-2 py-1 rounded border border-white/5 group-hover:bg-primary group-hover:text-black transition-colors">Agrandir</div>
                </div>
                <div className="flex-1 p-4 space-y-4 font-sans text-[10px] bg-black relative flex flex-col justify-end pb-8 z-10">
                    <div className="flex gap-2 relative z-10 opacity-50">
                        <div className="p-3 bg-white/10 rounded-2xl rounded-tl-none text-gray-300 max-w-[85%] border border-white/5">Bonjour, c'est ouvert lundi ?</div>
                    </div>
                    <div className="flex gap-2 justify-end relative z-10 opacity-50">
                        <div className="p-3 bg-primary/10 text-white rounded-2xl rounded-tr-none max-w-[85%] border border-primary/20">Oui, de 10h à 19h.</div>
                    </div>
                    <div className="flex gap-2 relative z-10">
                        <div className="p-3 bg-white/10 rounded-2xl rounded-tl-none text-gray-300 max-w-[85%] border border-white/5">Top. Est-ce que vous faites la taille de barbe à l'ancienne avec serviette ?</div>
                    </div>
                    <div className="flex gap-2 justify-end relative z-10">
                        <div className="p-3 bg-primary/10 text-white rounded-2xl rounded-tr-none max-w-[85%] border border-primary/20">Absolument ! Notre forfait "Rituel" à 35€ inclut le soin complet. Je vous réserve un créneau pour ce lundi ?</div>
                    </div>
                </div>
            </div>

            {/* Expanded Modal */}
            <AnimatePresence>
                {isExpanded && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-xl flex items-center justify-center p-6" onClick={() => setIsExpanded(false)}>
                        <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }} className="w-full max-w-lg bg-black rounded-[2rem] border border-white/10 overflow-hidden shadow-2xl relative" onClick={e => e.stopPropagation()}>
                            <div className="h-16 bg-[#202c33] flex items-center px-6 gap-4 border-b border-white/5">
                                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-black font-bold relative text-lg">S</div>
                                <div>
                                    <div className="text-sm font-bold text-white">Sarah IA</div>
                                    <div className="text-xs text-green-500">En ligne • Répond instantanément</div>
                                </div>
                                <button onClick={() => setIsExpanded(false)} className="ml-auto p-2 hover:bg-white/10 rounded-full text-white"><ArrowRight className="rotate-45" /></button>
                            </div>
                            <div className="p-6 h-[500px] overflow-y-auto bg-[url('https://camo.githubusercontent.com/854a93c27d64274c4f8c5a0b6ec34ce1bed9dd84/68747470733a2f2f7765622e77686174736170702e636f6d2f696d672f62672d636861742d74696c652d6461726b5f61346265353132653731393562366237333364393131303234303838396634342e706e67')] bg-repeat space-y-4">
                                <div className="flex justify-start"><div className="bg-[#202c33] text-white p-3 rounded-lg rounded-tl-none max-w-[80%] text-sm">Bonjour, vous avez de la place demain ?</div></div>
                                <div className="flex justify-end"><div className="bg-[#005c4b] text-white p-3 rounded-lg rounded-tr-none max-w-[80%] text-sm">Bonjour ! Pour une coupe homme ? J'ai un créneau à 14h30 ou 16h00.</div></div>
                                <div className="flex justify-start"><div className="bg-[#202c33] text-white p-3 rounded-lg rounded-tl-none max-w-[80%] text-sm">16h00 c'est parfait. Avec Mathieu si possible ?</div></div>
                                <div className="flex justify-end"><div className="bg-[#005c4b] text-white p-3 rounded-lg rounded-tr-none max-w-[80%] text-sm">Mathieu est disponible. Je note ça : Coupe Homme, demain 16h00. Vous recevrez un SMS de confirmation !</div></div>
                                <div className="flex justify-center text-xs text-gray-500 my-4 bg-[#111] py-1 px-3 rounded-full w-fit mx-auto border border-white/5">RDV Ajouté automatiquement à l'agenda Planity</div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

const SocialMock = () => (
    <div className="w-full h-full flex flex-col bg-black border border-white/10 rounded-xl overflow-hidden shadow-2xl relative group">
        <div className="h-8 bg-white/5 flex items-center px-4 justify-between border-b border-white/5">
            <div className="text-[8px] uppercase font-bold text-gray-400 tracking-widest flex items-center gap-2"><Megaphone size={10} /> Ads Manager</div>
        </div>
        <div className="flex-1 p-4 flex flex-col gap-3 relative">
            <div className="bg-white/5 rounded-lg p-3 border border-white/5 flex gap-3 items-center group-hover:border-primary/30 transition-colors">
                <div className="w-8 h-8 rounded bg-gradient-to-tr from-purple-500 to-pink-500 shrink-0" />
                <div className="flex-1 min-w-0">
                    <div className="text-[9px] font-bold text-white truncate">Campagne Instagram "Summer"</div>
                    <div className="text-[7px] text-gray-500">12,500 vues • 3.2% CTR</div>
                </div>
                <div className="text-[10px] font-black text-green-400">+450€</div>
            </div>
            <div className="bg-white/5 rounded-lg p-3 border border-white/5 flex gap-3 items-center group-hover:border-primary/30 transition-colors">
                <div className="w-8 h-8 rounded bg-blue-500 shrink-0" />
                <div className="flex-1 min-w-0">
                    <div className="text-[9px] font-bold text-white truncate">Google Ads Local</div>
                    <div className="text-[7px] text-gray-500">Top 1 sur "Coiffeur Bordeaux"</div>
                </div>
                <div className="text-[10px] font-black text-green-400">+820€</div>
            </div>
            <div className="mt-4 pt-4 border-t border-white/5 text-[8px] text-gray-500 leading-relaxed">
                Le système analyse automatiquement les performances et réalloue le budget vers les canaux les plus rentables. Vous ne jouez pas aux devinettes, vous investissez.
            </div>
        </div>
    </div>
);

const ReviewsMock = () => (
    <div className="w-full h-full flex flex-col bg-black border border-white/10 rounded-xl overflow-hidden shadow-2xl relative group">
        <div className="h-8 bg-white/5 flex items-center px-4 justify-between border-b border-white/5">
            <div className="text-[8px] uppercase font-bold text-gray-400 tracking-widest flex items-center gap-2"><Star size={10} /> Reputation Manager</div>
        </div>
        <div className="flex-1 p-6 relative flex flex-col items-center justify-center">
            <div className="bg-white/5 p-4 rounded-2xl border border-white/5 w-full mb-4 group-hover:border-primary/30 transition-colors relative">
                <div className="absolute -top-2 -right-2 bg-green-500 text-black text-[8px] font-black px-2 py-1 rounded-full uppercase">Publié</div>
                <div className="flex items-center gap-2 mb-2">
                    <div className="flex text-yellow-500"><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /></div>
                    <div className="text-[9px] text-gray-400 font-bold">Thomas L.</div>
                </div>
                <div className="text-[10px] text-gray-300 italic">"Expérience incroyable, le système de réservation est super fluide."</div>
            </div>

            <div className="flex items-center gap-3 w-full">
                <div className="h-[1px] bg-white/10 flex-1"></div>
                <div className="text-[8px] text-gray-500 uppercase tracking-widest">Réponse Auto IA</div>
                <div className="h-[1px] bg-white/10 flex-1"></div>
            </div>

            <div className="bg-primary/5 p-3 rounded-xl border border-primary/10 w-[90%] mt-4 self-end relative">
                <Bot size={12} className="absolute -left-6 top-1/2 -translate-y-1/2 text-primary" />
                <div className="text-[9px] text-gray-400 italic">"Merci Thomas ! Ravi que l'expérience digitale vous plaise autant que la coupe..."</div>
            </div>
        </div>
    </div>
);

/* --- FEATURE ROW --- */
const FeatureRow = ({ title, description, icon: Icon, align = 'left', action, visual }: any) => {
    return (
        <div className="py-32 relative z-10 min-h-[60vh]">
            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
                <div className={`w-full md:w-1/2 ${align === 'right' ? 'md:order-1' : 'md:order-2'}`}>
                    <ScrollReveal delay={0.4} direction="up">
                        <div className="relative w-full aspect-[4/3] max-w-lg mx-auto">{visual}</div>
                    </ScrollReveal>
                </div>
                <div className={`w-full md:w-1/2 ${align === 'right' ? 'md:order-2 text-left md:text-right' : 'md:order-1 text-left'}`}>
                    <ScrollReveal delay={0}>
                        <div className={`relative inline-block ${align === 'right' ? 'md:flex md:flex-col md:items-end' : ''}`}>
                            <div className="absolute inset-0 bg-primary/20 blur-[60px] rounded-full pointer-events-none opacity-50"></div>
                            <div className={`inline-flex items-center gap-2 mb-6 relative ${align === 'right' ? 'md:flex-row-reverse' : ''}`}>
                                <div className="p-2 rounded-full bg-primary/10 text-primary border border-primary/20"><Icon className="w-5 h-5" /></div>
                                <span className="text-primary text-xs font-bold uppercase tracking-[0.2em]">{title}</span>
                            </div>
                        </div>
                        <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-6 leading-none text-white relative z-10">{title}</h3>
                    </ScrollReveal>
                    <ScrollReveal delay={0.4}>
                        <p className="text-base md:text-lg text-gray-400 leading-relaxed mb-8 relative z-10">{description}</p>
                        {action}
                    </ScrollReveal>
                </div>
            </div>
        </div>
    );
};

/* --- STICKY FEATURE --- */
const StickyFeatureRow = ({ title, description, icon: Icon, visual, style, align = 'left' }: any) => {
    return (
        <motion.div style={style} className="absolute top-0 left-0 w-full h-full flex items-center justify-center perspective-[1000px]">
            {/* Background glow for smoother transition */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none opacity-50" />

            <div className="w-full max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center relative z-10">
                {/* Visual Side */}
                <div className={`w-full relative aspect-[4/3] max-w-lg mx-auto transform hover:scale-[1.02] transition-transform duration-500 ${align === 'right' ? 'order-2 md:order-2' : 'order-2 md:order-1'}`}>
                    {visual}
                </div>

                {/* Text Side */}
                <div className={`w-full text-left ${align === 'right' ? 'order-1 md:order-1 md:text-right' : 'order-1 md:order-2'}`}>
                    <div className={`relative inline-block mb-6 ${align === 'right' ? 'md:flex md:flex-col md:items-end' : ''}`}>
                        <div className="absolute inset-0 bg-primary/20 blur-[60px] rounded-full pointer-events-none"></div>
                        <div className={`inline-flex items-center gap-2 mb-6 relative ${align === 'right' ? 'md:flex-row-reverse' : ''}`}>
                            <div className="p-2 rounded-full bg-primary/10 text-primary border border-primary/20 shadow-[0_0_20px_rgba(212,175,55,0.2)]"><Icon className="w-5 h-5" /></div>
                            <span className="text-primary text-xs font-bold uppercase tracking-[0.2em]">{title}</span>
                        </div>
                    </div>
                    <motion.h3
                        initial={{ opacity: 0, x: align === 'right' ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 leading-none text-white drop-shadow-lg"
                    >
                        {title}
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-400 leading-relaxed mb-8 font-light"
                    >
                        {description}
                    </motion.p>
                </div>
            </div>
        </motion.div>
    );
};

/* --- DEMOS SECTION --- */
const DemosSection = () => (
    <div id="demos" className="py-24 border-b border-white/5 bg-black relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-black via-[#0F0F0F] to-black opacity-100" />
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-primary/5 to-transparent opacity-50 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
            <ScrollReveal>
                <div className="text-center mb-16 relative">
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary/20 blur-[100px] w-1/3 h-full rounded-full pointer-events-none"></div>
                    <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white mb-4 relative z-10">Nos <span className="text-primary">Réalisations</span></h2>
                    <p className="text-gray-400 text-sm uppercase tracking-widest relative z-10">L'Art du Digital</p>
                </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-12">
                <ScrollReveal delay={0.1}>
                    <Link to="/demo/253-barber-club" className="group cursor-pointer block">
                        <div className="aspect-video relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl mb-6">
                            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-all duration-500 z-10" />
                            <WebEliteMock />
                            <div className="absolute bottom-6 left-6 z-20">
                                <div className="text-2xl font-black text-white italic mb-1">Barber 253</div>
                                <div className="text-[10px] bg-primary text-black px-2 py-1 font-bold uppercase tracking-widest inline-block">Dark / Gold Theme</div>
                            </div>
                        </div>
                    </Link>
                </ScrollReveal>
                <ScrollReveal delay={0.2}>
                    <Link to="/demo/carol-ann" className="group cursor-pointer block">
                        <div className="aspect-video relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl mb-6">
                            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-all duration-500 z-10" />
                            <CarolAnnMock />
                            <div className="absolute bottom-6 left-6 z-20">
                                <div className="text-2xl font-black text-white italic mb-1">Maison Carol Ann</div>
                                <div className="text-[10px] bg-white text-black px-2 py-1 font-bold uppercase tracking-widest inline-block">Minimalist / Chic</div>
                            </div>
                        </div>
                    </Link>
                </ScrollReveal>
            </div>
        </div>
    </div>
);

function LandingPage() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const heroRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress: heroProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
    const heroScale = useTransform(heroProgress, [0, 1], [1, 1.2]);
    const heroOpacity = useTransform(heroProgress, [0, 0.2], [1, 0]);

    // Sticky Ecosystem (was 'Process' in original logic, but now applied to Features)
    const ecosystemRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress: ecoProgress } = useScroll({ target: ecosystemRef, offset: ["start start", "end end"] });

    // 5 Stages for Ecosystem
    // Eco 1
    const ecoOp1 = useTransform(ecoProgress, [0.05, 0.15, 0.20, 0.25], [0, 1, 1, 0]);
    const ecoScale1 = useTransform(ecoProgress, [0.15, 0.25], [1, 0.9]);
    const ecoDisplay1 = useTransform(ecoProgress, value => value > 0.25 ? 'none' : 'flex');

    // Eco 2
    const ecoOp2 = useTransform(ecoProgress, [0.25, 0.35, 0.40, 0.45], [0, 1, 1, 0]);
    const ecoScale2 = useTransform(ecoProgress, [0.35, 0.45], [1, 0.9]);
    const ecoDisplay2 = useTransform(ecoProgress, value => (value < 0.25 || value > 0.45) ? 'none' : 'flex');

    // Eco 3
    const ecoOp3 = useTransform(ecoProgress, [0.45, 0.55, 0.60, 0.65], [0, 1, 1, 0]);
    const ecoScale3 = useTransform(ecoProgress, [0.55, 0.65], [1, 0.9]);
    const ecoDisplay3 = useTransform(ecoProgress, value => (value < 0.45 || value > 0.65) ? 'none' : 'flex');

    // Eco 4
    const ecoOp4 = useTransform(ecoProgress, [0.65, 0.75, 0.80, 0.85], [0, 1, 1, 0]);
    const ecoScale4 = useTransform(ecoProgress, [0.75, 0.85], [1, 0.9]);
    const ecoDisplay4 = useTransform(ecoProgress, value => (value < 0.65 || value > 0.85) ? 'none' : 'flex');

    // Eco 5
    const ecoOp5 = useTransform(ecoProgress, [0.85, 0.95], [0, 1]);
    const ecoScale5 = useTransform(ecoProgress, [0.85, 1], [0.95, 1]);


    useEffect(() => {
        const controlNavbar = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY < lastScrollY || currentScrollY < 50) setIsVisible(true);
            else setIsVisible(false);
            setLastScrollY(currentScrollY);
        };
        window.addEventListener('scroll', controlNavbar);
        return () => window.removeEventListener('scroll', controlNavbar);
    }, [lastScrollY]);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
    };

    return (
        <div className="min-h-screen bg-black text-white selection:bg-primary selection:text-black font-sans">
            <style>{`
                @keyframes scan { 0% { top: 0; opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { top: 100%; opacity: 0; } }
                @keyframes growBar { from { height: 0; } to { height: 85%; } }
                @keyframes fly { 
                    0% { transform: translateX(0); opacity: 0; } 
                    10% { opacity: 1; }
                    90% { opacity: 1; }
                    100% { transform: translateX(100px); opacity: 0; } 
                }
            `}</style>

            <nav className={`fixed w-full top-0 z-[100] transition-all duration-500 transform ${isVisible ? 'translate-y-0' : '-translate-y-full'} bg-black/95 backdrop-blur-md py-4 border-b border-white/5`}>
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between relative">
                    <div className="text-2xl font-bold tracking-tighter text-white drop-shadow-md cursor-pointer" onClick={() => window.scrollTo(0, 0)}>StyleOS<span className="text-primary">.</span></div>
                    <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-8 text-xs font-black uppercase tracking-[0.2em] text-gray-400">
                        <button onClick={() => scrollToSection('features')} className="hover:text-white transition-colors">Fonctionnalités</button>
                        <button onClick={() => scrollToSection('comparison')} className="hover:text-white transition-colors">Comparatif</button>
                        <button onClick={() => scrollToSection('process')} className="hover:text-white transition-colors">Process</button>
                        <button onClick={() => scrollToSection('pricing')} className="hover:text-white transition-colors">Tarifs</button>
                        <button onClick={() => scrollToSection('demos')} className="px-4 py-2 rounded-full border border-primary/30 text-primary hover:bg-primary hover:text-black transition-all shadow-[0_0_10px_rgba(212,175,55,0.1)]">Nos Démos</button>
                    </div>
                    <div className="hidden md:flex items-center gap-4 shrink-0">
                        <Link to="/login" className="text-white hover:text-primary transition-colors text-xs font-bold uppercase tracking-widest hidden lg:block">Connexion</Link>
                        <Link to="/signup" className="bg-white text-black px-6 py-3 rounded-full text-xs font-black uppercase tracking-widest hover:bg-primary transition-all">Inscription</Link>
                    </div>
                </div>
            </nav>

            <div ref={heroRef} className="relative h-[150vh] mb-0 pointer-events-none">
                <div className="sticky top-0 h-screen overflow-hidden flex flex-col items-center justify-center bg-black">
                    <StickyCanvas scale={heroScale} rotate={heroScale} opacity={heroOpacity} />
                    <motion.div className="absolute inset-0 flex items-center justify-center text-center px-4" style={{ opacity: heroOpacity }}>
                        <div className="max-w-5xl mx-auto z-10 mt-20">
                            <div className="inline-block mb-8 px-6 py-2 rounded-full bg-white/5 border border-white/10 text-primary text-[10px] font-black uppercase tracking-[0.5em] backdrop-blur-md">StyleOS</div>
                            <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-6">
                                Distinguez<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#F3E5AB] to-primary bg-[length:200%_auto] animate-shimmer italic">VOUS.</span>
                            </h1>
                            <div className="max-w-3xl mx-auto space-y-6">
                                <h2 className="text-xl md:text-3xl text-white font-black uppercase tracking-widest mb-4">Devenez une Marque.</h2>
                                <p className="text-lg text-gray-400 font-light">Vous méritez quelque chose de <span className="text-white font-bold">mieux que Planity</span>.</p>
                            </div>

                            {/* Explore Icon */}
                            <div className="mt-24 flex flex-col items-center gap-4 animate-bounce cursor-pointer opacity-50 hover:opacity-100 transition-opacity" onClick={() => scrollToSection('features')}>
                                <div className="text-[10px] uppercase tracking-[0.3em] text-white font-bold">Explorer</div>
                                <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center p-1">
                                    <div className="w-1 h-3 bg-white rounded-full animate-scroll-down" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* --- ECOSYSTEM STICKY SECTION --- */}
            <div id="features" ref={ecosystemRef} className="relative z-10 bg-black h-[1000vh]"> {/* Increased height for smoother scroll */}
                <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">

                    {/* Floating Title - Higher position for more space */}
                    <div className="absolute top-16 left-0 w-full text-center z-50 pointer-events-none transition-opacity duration-500" style={{ opacity: 1 }}>
                        <div className="relative inline-block">
                            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full pointer-events-none"></div>
                            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 text-white relative drop-shadow-2xl">L'Écosystème <span className="text-primary">StyleOS</span></h2>
                            <p className="text-gray-500 uppercase tracking-[0.2em] text-[10px] md:text-xs font-bold bg-black/80 backdrop-blur-md py-2 rounded-full inline-block px-6 border border-white/10 shadow-2xl">L'excellence opérationnelle en 5 dimensions</p>
                        </div>
                    </div>

                    {/* Progress Bar Indicator - LEFT SIDE */}
                    <div className="absolute left-8 top-1/2 -translate-y-1/2 h-64 w-1 bg-white/10 rounded-full hidden md:block z-50">
                        <motion.div
                            className="w-full bg-primary rounded-full shadow-[0_0_15px_#D4AF37]"
                            style={{ height: ecoProgress }}
                        />
                    </div>

                    <div className="relative w-full h-full max-w-7xl mx-auto px-6 flex items-center justify-center mt-24">
                        {/* 1. Web Elite - Left Aligned */}
                        <StickyFeatureRow
                            style={{ opacity: ecoOp1, scale: ecoScale1, display: ecoDisplay1 }}
                            title="Web Elite"
                            description='Design "Dark Luxury" sur-mesure ou Templates Premium. SEO Local dominant. Votre présence digitale devient votre meilleur atout.'
                            icon={Monitor}
                            visual={<WebEliteMock />}
                            align="left"
                        />

                        {/* 2. Sarah IA - Right Aligned */}
                        <StickyFeatureRow
                            style={{ opacity: ecoOp2, scale: ecoScale2, display: ecoDisplay2 }}
                            title="Sarah IA"
                            description="Ne parez plus vos coupes pour répondre. Sarah gère 100% des appels, remplit votre agenda en temps réel, et vous fait gagner des dizaines d'heures."
                            icon={Bot}
                            visual={<ChatMock />}
                            align="right"
                        />

                        {/* 3. Pilotage Financier - Left Aligned + Button */}
                        <StickyFeatureRow
                            style={{ opacity: ecoOp3, scale: ecoScale3, display: ecoDisplay3 }}
                            title="Pilotage Financier"
                            description="Tableau de bord de direction. Suivez votre CA, vos marges et votre croissance en temps réel avec des indicateurs prédictifs."
                            icon={BarChart3}
                            align="left"
                            visual={
                                <div className="relative group">
                                    <Link to="/dashboard-demo" className="block w-full h-full max-w-lg mx-auto transform transition-transform hover:scale-[1.02]">
                                        <div className="w-full h-full bg-[#09090b] flex rounded-xl border border-white/10 overflow-hidden relative shadow-2xl font-sans group-hover:border-primary/30 transition-colors cursor-pointer">
                                            <div className="w-14 border-r border-white/10 flex flex-col items-center py-6 gap-6 bg-black z-20">
                                                <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-black font-bold">S</div>
                                                <LayoutDashboard className="w-5 h-5 text-white/80" />
                                                <Users className="w-5 h-5 text-gray-600" />
                                                <Calendar className="w-5 h-5 text-gray-600" />
                                                <Wallet className="w-5 h-5 text-gray-600" />
                                            </div>
                                            <div className="flex-1 p-6 flex flex-col bg-black relative">
                                                <div className="absolute top-0 right-0 p-4 opacity-50 pointer-events-none select-none">
                                                    <div className="w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
                                                </div>
                                                <div className="grid grid-cols-2 gap-3 mb-6 relative z-10">
                                                    <div className="p-3 bg-white/5 rounded-lg border border-white/5 group-hover:bg-white/10 transition-colors">
                                                        <div className="text-[8px] text-gray-500 uppercase tracking-wider mb-2">Chiffre d'Affaire</div>
                                                        <div className="text-xl font-black text-white">12,450€</div>
                                                        <div className="text-[8px] text-green-500 font-bold flex items-center gap-1"><ArrowRight className="w-2 h-2 -rotate-45" /> +15% vs M-1</div>
                                                    </div>
                                                    <div className="p-3 bg-white/5 rounded-lg border border-white/5 group-hover:bg-white/10 transition-colors">
                                                        <div className="text-[8px] text-gray-500 uppercase tracking-wider mb-2">Ticket Moyen</div>
                                                        <div className="text-xl font-black text-white">65€</div>
                                                        <div className="text-[8px] text-green-500 font-bold flex items-center gap-1"><ArrowRight className="w-2 h-2 -rotate-45" /> +4€ vs M-1</div>
                                                    </div>
                                                </div>
                                                <div className="text-[8px] text-gray-500 uppercase tracking-widest mb-2">Occupation Hebdomadaire</div>
                                                <div className="flex-1 bg-white/[0.02] rounded-lg border border-white/5 relative overflow-hidden flex items-end px-2 pt-2 gap-1 z-10">
                                                    {[40, 65, 55, 85, 60, 45, 90, 70, 80, 95, 50, 60].map((h, i) => (
                                                        <motion.div
                                                            key={i}
                                                            initial={{ height: 0 }}
                                                            whileInView={{ height: `${h}%` }}
                                                            transition={{ duration: 0.5, delay: i * 0.05 }}
                                                            className="flex-1 bg-white/10 rounded-t-sm group-hover:bg-primary/50 transition-colors hover:bg-primary"
                                                        />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </Link>

                                    {/* Dashboard Button */}
                                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 translate-y-1/2 z-30 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                        <Link to="/dashboard-demo" className="bg-primary text-black font-black uppercase text-[10px] tracking-widest py-3 px-6 rounded-full shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:scale-105 transition-transform flex items-center gap-2">
                                            Explorer le Dashboard <ArrowRight size={14} />
                                        </Link>
                                    </div>
                                </div>
                            }
                        />

                        {/* 4. Marketing - Right Aligned + Button */}
                        <StickyFeatureRow
                            style={{ opacity: ecoOp4, scale: ecoScale4, display: ecoDisplay4 }}
                            title="Marketing & Visibilité"
                            description="Automatisation des campagnes. Fidélisation client. Transformez votre réputation en revenus grâce à notre gestionnaire de publicités intégré."
                            icon={Megaphone}
                            visual={
                                <div className="relative group">
                                    <Link to="/marketing-demo" className="block w-full h-full">
                                        <SocialMock />
                                    </Link>

                                    {/* Marketing Explorer Button */}
                                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 translate-y-1/2 z-30 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                        <Link to="/marketing-demo" className="bg-primary text-black font-black uppercase text-[10px] tracking-widest py-3 px-6 rounded-full shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:scale-105 transition-transform flex items-center gap-2">
                                            Explorer Marketing <ArrowRight size={14} />
                                        </Link>
                                    </div>
                                </div>
                            }
                            align="right"
                        />

                        {/* 5. Avis - Left Aligned */}
                        <StickyFeatureRow
                            style={{ opacity: ecoOp5, scale: ecoScale5 }}
                            title="Automatisation des Avis"
                            description="Ne laissez plus vos clients partir sans laisser 5 étoiles. Notre IA détecte les clients satisfaits et sollicite un avis automatiquement via SMS."
                            icon={Star}
                            visual={<ReviewsMock />}
                            align="left"
                        />
                    </div>
                </div>
            </div>

            {/* --- MIGRATION SECTION --- */}
            <div className="relative z-10 bg-black pt-24 pb-32 border-b border-white/5">
                <ScrollReveal>
                    <div className="max-w-7xl mx-auto px-6">
                        <FeatureRow
                            title="Migration Sans Friction"
                            description="Nous récupérons l'intégralité de votre historique Planity ou Booksy. Fichiers clients, RDV à venir. Transition invisible en 24h."
                            icon={Server}
                            align="left"
                            visual={
                                <div className="w-full h-full bg-[#111] rounded-[2.5rem] border border-white/10 flex items-center justify-center relative overflow-hidden group hover:border-primary/30 transition-all p-8 md:p-16 shadow-2xl">
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 to-transparent opacity-50" />

                                    <div className="flex items-center justify-between w-full max-w-2xl relative z-10">
                                        {/* Planity Node */}
                                        <div className="flex flex-col items-center gap-6 group/node">
                                            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-white/5 border border-white/10 flex items-center justify-center relative z-10 grayscale opacity-60 group-hover/node:grayscale-0 group-hover/node:opacity-100 transition-all duration-500 bg-[#004bad]/10">
                                                {/* Planity Logo Simulation */}
                                                <div className="text-3xl font-black text-[#004bad] tracking-tighter">P.</div>
                                            </div>
                                            <div className="text-xs font-bold text-gray-500 uppercase tracking-widest group-hover/node:text-[#004bad] transition-colors">Planity</div>
                                        </div>

                                        {/* Flow Animation - Particles Only (No Arrow) */}
                                        <div className="flex-1 mx-4 md:mx-12 h-[2px] bg-white/10 relative">
                                            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-full overflow-hidden">
                                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent w-1/2 animate-[scan_1.5s_infinite] translate-x-[-100%]" />
                                            </div>

                                            {/* Flying Data Particles - More of them */}
                                            <div className="absolute top-1/2 left-0 w-2 h-2 bg-primary rounded-full blur-[2px] animate-[fly_1.5s_infinite_ease-in-out]" style={{ animationDelay: '0s' }} />
                                            <div className="absolute top-1/2 left-0 w-1.5 h-1.5 bg-white rounded-full blur-[1px] animate-[fly_1.5s_infinite_ease-in-out]" style={{ animationDelay: '0.2s' }} />
                                            <div className="absolute top-1/2 left-0 w-1 h-1 bg-[#D4AF37] rounded-full blur-[1px] animate-[fly_1.5s_infinite_ease-in-out]" style={{ animationDelay: '0.4s' }} />
                                            <div className="absolute top-1/2 left-0 w-2 h-2 bg-blue-400 rounded-full blur-[2px] animate-[fly_1.5s_infinite_ease-in-out]" style={{ animationDelay: '0.6s' }} />
                                            <div className="absolute top-1/2 left-0 w-1.5 h-1.5 bg-primary rounded-full blur-[1px] animate-[fly_1.5s_infinite_ease-in-out]" style={{ animationDelay: '0.8s' }} />
                                            <div className="absolute top-1/2 left-0 w-1 h-1 bg-white rounded-full blur-[1px] animate-[fly_1.5s_infinite_ease-in-out]" style={{ animationDelay: '1s' }} />

                                            <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-6 text-[10px] text-primary uppercase tracking-[0.3em] font-black animate-pulse bg-black px-2">Transfert</div>
                                        </div>

                                        {/* StyleOS Node */}
                                        <div className="flex flex-col items-center gap-6">
                                            <div className="w-28 h-28 md:w-40 md:h-40 rounded-full bg-primary/10 border border-primary/50 flex items-center justify-center relative z-10 shadow-[0_0_60px_rgba(212,175,55,0.3)] animate-[pulse_3s_infinite]">
                                                <Bot size={50} className="text-primary" />
                                                <div className="absolute top-2 right-2 md:top-4 md:right-4 w-6 h-6 md:w-8 md:h-8 bg-green-500 rounded-full border-4 border-[#111] flex items-center justify-center">
                                                    <Check size={14} className="text-black stroke-[4]" />
                                                </div>
                                            </div>
                                            <div className="text-sm font-black text-white uppercase tracking-widest">StyleOS</div>
                                        </div>
                                    </div>
                                </div>
                            }
                        />
                    </div>
                </ScrollReveal>
            </div>

            <div id="comparison" className="relative z-10 bg-black pb-24 border-t border-white/5 pt-32">
                <div className="max-w-7xl mx-auto px-6">
                    <ScrollReveal>
                        <div className="text-center mb-20 relative inline-block w-full">
                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary/20 blur-[120px] w-2/3 h-full rounded-full pointer-events-none"></div>
                            <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white relative z-10 drop-shadow-2xl">Pourquoi <span className="text-primary italic">StyleOS</span> ?</h3>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal delay={0.2}><ComparisonTable /></ScrollReveal>
                </div>
            </div>

            <section className="relative z-10 bg-black py-24 md:py-32 border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <ScrollReveal>
                        <div className="text-center mb-16 relative">
                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary/20 blur-[100px] w-1/2 h-full rounded-full pointer-events-none"></div>
                            <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.4em] relative z-10">Performance</div>
                            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 text-white relative z-10">Votre <span className="text-primary italic">Machine à Cash</span></h2>
                            <p className="text-base text-gray-400 max-w-2xl mx-auto leading-relaxed relative z-10">Optimisation mathématique de chaque siège.</p>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal delay={0.2}><RevenueSimulator /></ScrollReveal>
                </div>
            </section>

            {/* AUDIO DEMO SECTION */}
            <section className="relative z-10 bg-black py-24 md:py-32 border-t border-white/5 overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <ScrollReveal>
                                <div className="inline-block mb-8 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-primary text-[10px] font-black uppercase tracking-[0.4em]">Sarah AI Demo</div>
                                <h2 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter mb-8 text-white leading-none">
                                    SARAH <span className="text-primary italic">IA</span> DEMO
                                </h2>
                                <p className="text-xl text-gray-400 leading-relaxed mb-10 font-light">
                                    Sarah gère les accents, les hésitations et les demandes complexes. Elle est polie, efficace et ne rate jamais une vente.
                                </p>

                                {/* Improved Info Boxes */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                                    <div className="bg-gradient-to-br from-green-500/10 to-transparent border border-green-500/20 rounded-2xl p-5 hover:border-green-500/40 transition-all group">
                                        <div className="flex items-start gap-3">
                                            <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center text-green-400 shrink-0 group-hover:scale-110 transition-transform">
                                                <Check size={20} strokeWidth={3} />
                                            </div>
                                            <div>
                                                <div className="text-2xl font-black text-white mb-1">0.4s</div>
                                                <div className="text-xs text-gray-400 font-medium">Temps de réponse</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/20 rounded-2xl p-5 hover:border-blue-500/40 transition-all group">
                                        <div className="flex items-start gap-3">
                                            <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 group-hover:scale-110 transition-transform">
                                                <Check size={20} strokeWidth={3} />
                                            </div>
                                            <div>
                                                <div className="text-2xl font-black text-white mb-1">100%</div>
                                                <div className="text-xs text-gray-400 font-medium">Sync temps réel</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-2xl p-5 hover:border-primary/40 transition-all group">
                                        <div className="flex items-start gap-3">
                                            <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform">
                                                <Check size={20} strokeWidth={3} />
                                            </div>
                                            <div>
                                                <div className="text-2xl font-black text-white mb-1">24/7</div>
                                                <div className="text-xs text-gray-400 font-medium">Disponibilité</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                        <ScrollReveal delay={0.2}>
                            <AudioDemo />
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* PROCESS SECTION (Restored) */}
            <ProcessSection />

            {/* DEMOS SECTION - Barber 253 & Carol Ann */}
            <DemosSection />

            <div id="pricing" className="relative z-10 bg-black py-24 border-t border-white/5">
                <PricingSection />
            </div>

            {/* Guarantee Section moved here as requested */}
            <GuaranteeSection />

            {/* Offer / CTA at the end */}
            <OfferSection />

            <footer className="bg-black py-12 border-t border-white/10 relative z-10">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-2xl font-bold tracking-tighter text-white">StyleOS<span className="text-primary">.</span></div>
                    <div className="text-xs text-gray-600 font-mono">
                        © 2024 StyleOS Inc. Bordeaux • Paris • London
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default LandingPage;
