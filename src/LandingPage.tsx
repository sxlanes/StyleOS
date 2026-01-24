import { useState, useEffect, useRef } from 'react';
import { X as CloseIcon, ArrowRight, Monitor, Bot, BarChart3, TrendingUp, Megaphone, CheckCircle2, MoveRight, Globe, Search, Rocket, ShieldCheck, Zap, Server, LayoutDashboard, Calendar, Users, Wallet, MousePointer2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

import { StickyCanvas } from './components/StickyCanvas';
import { NumberCounter } from './components/ui/NumberCounter';

import ComparisonTable from './components/ComparisonTable';
import AudioDemo from './components/AudioDemo';
import RevenueSimulator from './components/RevenueSimulator';
import PricingSection from './components/PricingSection';
import OfferSection from './components/OfferSection';

// --- ANIMATION WRAPPER ---
const ScrollReveal = ({ children, className = "", delay = 0, direction = "up" }: any) => {
    const variants = {
        hidden: {
            opacity: 0,
            y: direction === "up" ? 60 : 0,
            x: direction === "left" ? 60 : direction === "right" ? -60 : 0
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay }
        }
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            variants={variants}
            className={className}
        >
            {children}
        </motion.div>
    );
};

/* --- MOCK COMPONENTS (UNCHANGED VISUALS, JUST HELPERS) --- */
const WebEliteMock = () => (
    <div className="w-full h-full bg-black flex flex-col rounded-xl border border-white/10 overflow-hidden relative shadow-2xl group">
        <div className="h-6 bg-white/5 border-b border-white/5 flex items-center px-4 gap-2">
            <div className="w-2 h-2 rounded-full bg-red-500/50" />
            <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
            <div className="w-2 h-2 rounded-full bg-green-500/50" />
            <div className="ml-4 w-32 h-3 bg-white/5 rounded-full text-[6px] flex items-center px-2 text-gray-600">styleos.salon/elite</div>
        </div>
        <div className="flex-1 relative bg-black flex flex-col">
            <div className="h-10 border-b border-white/5 flex justify-between items-center px-4">
                <div className="w-20 h-3 bg-white/20 rounded-sm" />
                <div className="flex gap-2">
                    <div className="w-12 h-4 bg-primary text-black text-[6px] font-bold flex items-center justify-center rounded-sm uppercase">Réserver</div>
                </div>
            </div>
            <div className="h-48 relative border-b border-white/5 p-6 flex flex-col justify-center items-center text-center">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-800/50 to-transparent opacity-50" />
                <h2 className="text-2xl font-serif italic text-white mb-2 relative z-10">L'Art de la Coupe</h2>
                <button className="px-4 py-2 bg-white text-black text-[8px] uppercase tracking-widest font-bold hover:bg-primary transition-colors relative z-10">Prendre Rendez-vous</button>
            </div>
        </div>
    </div>
);

const ChatMock = () => (
    <div className="w-3/4 mx-auto h-full bg-black flex flex-col rounded-[2rem] border border-white/10 overflow-hidden relative shadow-2xl">
        <div className="h-14 bg-white/5 border-b border-white/5 flex items-center px-6 gap-4">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary relative">
                <Bot size={16} />
            </div>
            <div><div className="text-xs font-bold text-white">Sarah AI</div></div>
        </div>
        <div className="flex-1 p-4 space-y-3 font-sans text-[10px] bg-black relative">
            <div className="flex gap-2 relative z-10">
                <div className="p-3 bg-white/10 rounded-2xl rounded-tl-none text-gray-300 max-w-[85%] border border-white/5">Bonjour, une dispo demain ?</div>
            </div>
            <div className="flex gap-2 justify-end relative z-10">
                <div className="p-3 bg-primary/10 text-white rounded-2xl rounded-tr-none max-w-[85%] border border-primary/20">Oui, 14h00 ?</div>
            </div>
        </div>
    </div>
);

const DashboardMock = () => (
    <div className="w-full h-full bg-[#09090b] flex rounded-xl border border-white/10 overflow-hidden relative shadow-2xl font-sans group">
        <div className="w-14 border-r border-white/10 flex flex-col items-center py-6 gap-6 bg-black z-20">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-black font-bold">S</div>
        </div>
        <div className="flex-1 p-6 flex flex-col bg-black relative">
            <div className="grid grid-cols-2 gap-3 mb-6 relative z-10">
                <div className="p-3 bg-white/5 rounded-lg border border-white/5">
                    <div className="text-[8px] text-gray-500 uppercase tracking-wider mb-2">CA</div>
                    <div className="text-lg font-black text-white">12,450€</div>
                </div>
            </div>
            <div className="flex-1 bg-white/[0.02] rounded-lg border border-white/5 relative overflow-hidden flex items-end px-2 pt-2 gap-1 z-10">
                {[40, 65, 55, 85].map((h, i) => <div key={i} className="flex-1 bg-white/10 rounded-t-sm" style={{ height: `${h}%` }}></div>)}
            </div>
        </div>
    </div>
);

const SocialMock = () => (
    <div className="w-full h-full flex flex-col bg-black border border-white/10 rounded-xl overflow-hidden shadow-2xl relative group">
        <div className="h-8 bg-white/5 flex items-center px-4 justify-between border-b border-white/5">
            <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <div className="text-[8px] uppercase font-bold text-gray-400 tracking-widest">Campagnes Actives</div>
            </div>
        </div>
        <div className="flex-1 p-4 grid grid-cols-2 gap-3 relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-purple-500/10 to-transparent pointer-events-none" />
            <div className="bg-white/5 rounded-lg p-2 border border-white/5 flex flex-col gap-2 relative overflow-hidden group-hover:border-primary/30 transition-colors">
                <div className="flex items-center gap-2">
                    <span className="text-[8px] font-bold text-white">Story_Offer</span>
                </div>
                <div className="flex-1 bg-gray-800/50 rounded overflow-hidden relative">
                    <div className="absolute bottom-1 left-1 bg-white text-black text-[6px] font-bold px-1 rounded">SPONSO</div>
                </div>
            </div>
            <div className="bg-white/5 rounded-lg p-2 border border-white/5 flex flex-col gap-2 relative overflow-hidden group-hover:border-primary/30 transition-colors">
                <div className="flex items-center gap-2">
                    <span className="text-[8px] font-bold text-white">Search_Local</span>
                </div>
                <div className="flex-1 space-y-1 py-1">
                    <div className="h-1.5 w-3/4 bg-white/10 rounded animate-pulse" />
                </div>
            </div>
        </div>
        <MousePointer2 className="absolute bottom-4 right-10 text-white fill-black w-4 h-4 drop-shadow-lg animate-[bounce_2s_infinite]" />
    </div>
)

const IntegrationMock = () => (
    <div className="w-full h-full bg-black rounded-xl border border-white/10 flex items-center justify-center relative overflow-hidden group p-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 to-transparent pointer-events-none" />
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-sm gap-8 relative z-10">
            <div className="flex flex-col items-center gap-4">
                <div className="w-24 h-24 rounded-2xl bg-[#0F0F0F] flex items-center justify-center border border-white/5 grayscale opacity-50 group-hover:opacity-30 transition-opacity">
                    <Globe className="w-10 h-10 text-gray-600" />
                </div>
                <div className="text-xs font-black text-gray-500 uppercase tracking-[0.2em] text-center">Planity</div>
            </div>
            <div className="flex flex-col items-center gap-2">
                <MoveRight className="w-12 h-12 text-primary animate-[pulse_2s_infinite]" />
                <div className="text-[9px] font-black text-primary uppercase tracking-widest bg-primary/10 px-3 py-1 rounded border border-primary/20 whitespace-nowrap">Importation 24H</div>
            </div>
            <div className="flex flex-col items-center gap-4">
                <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-primary/10 to-black flex items-center justify-center border border-primary/50 shadow-[0_0_40px_rgba(212,175,55,0.2)] group-hover:scale-105 transition-transform duration-500 relative overflow-hidden">
                    <div className="absolute inset-0 bg-primary/10 animate-[pulse_4s_infinite]" />
                    <CheckCircle2 className="w-12 h-12 text-primary relative z-10" />
                </div>
                <div className="text-sm font-black text-white uppercase tracking-[0.2em]">StyleOS</div>
            </div>
        </div>
    </div>
)

const GuaranteeMock = () => (
    <div className="w-full h-full bg-black rounded-xl border border-white/10 flex flex-col items-center justify-center relative overflow-hidden bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] group">
        <div className="w-40 h-40 rounded-full border border-primary/20 flex items-center justify-center shadow-[0_0_80px_rgba(212,175,55,0.1)] group-hover:shadow-[0_0_120px_rgba(212,175,55,0.2)] transition-shadow duration-700 bg-black relative z-10">
            <ShieldCheck className="w-20 h-20 text-primary group-hover:scale-110 transition-transform duration-500" />
        </div>
        <div className="mt-8 px-6 py-2 bg-primary/10 rounded-full text-primary text-xs font-black uppercase tracking-[0.2em] border border-primary/20 relative z-10">
            Satisfait ou Remboursé
        </div>
    </div>
)

const ProcessAuditMock = () => (
    <div className="w-full h-full bg-black border border-white/10 rounded-xl p-8 relative overflow-hidden flex flex-col justify-center shadow-xl group">
        <div className="absolute top-4 right-4 text-white/10"><Search size={80} /></div>
        <div className="text-xs font-black uppercase tracking-widest text-primary mb-6 border-b border-primary/20 pb-2 inline-block w-max">Checklist Audit</div>
        <div className="space-y-4 relative z-10">
            {['Analyse SEO', 'Vitesse Site Actuel', 'Tunnel de Réservation'].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center border border-green-500/30 transition-all duration-700 delay-${i * 300} bg-green-500/20 text-green-500 group-hover:scale-110`}>
                        <CheckCircle2 size={12} />
                    </div>
                    <div className="text-sm font-bold text-gray-300">{item}</div>
                </div>
            ))}
        </div>
        <div className="absolute top-0 left-0 w-full h-[2px] bg-primary/50 shadow-[0_0_20px_rgba(212,175,55,0.8)] animate-[scan_3s_ease-in-out_infinite] opacity-0 group-hover:opacity-100 pointer-events-none"></div>
    </div>
)

const ProcessTrainingMock = () => (
    <div className="w-full h-full bg-black border border-white/10 rounded-xl p-6 relative overflow-hidden flex flex-col items-center justify-center shadow-xl group">
        <div className="w-full max-w-[280px] aspect-video bg-white/5 rounded-lg border border-white/10 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center z-20 group-hover:bg-black/20 transition-colors">
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent ml-1"></div>
                </div>
            </div>
        </div>
        <div className="mt-6 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary group-hover:rotate-12 transition-transform"><Zap size={16} /></div>
            <div className="text-xs font-bold text-white uppercase tracking-wider">Setup 48H Chrono</div>
        </div>
    </div>
)

const ProcessGrowthMock = () => (
    <div className="w-full h-full bg-black border border-white/10 rounded-xl p-8 relative overflow-hidden flex flex-col shadow-xl group">
        <div className="flex justify-between items-end mb-6">
            <div className="text-3xl font-black text-white group-hover:text-primary transition-colors">+42%</div>
            <div className="p-2 bg-green-500/10 rounded border border-green-500/20 text-green-500">
                <Rocket size={20} />
            </div>
        </div>
        <div className="flex-1 flex items-end gap-2">
            <div className="w-full bg-white/5 h-[30%] rounded-t-sm" />
            <div className="w-full bg-primary h-[0%] animate-[growBar_1.5s_ease-out_forwards] rounded-t-sm shadow-[0_0_20px_rgba(212,175,55,0.4)]" style={{ height: '85%' }} />
        </div>
    </div>
)

/* --- FEATURE ROW COMPONENT FOR STICKY SCROLL --- */
const StickyFeatureRow = ({ title, description, icon: Icon, visual, style }: any) => {
    return (
        <motion.div
            style={style}
            className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
        >
            <div className="w-full max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
                <div className="w-full order-2 md:order-1 relative aspect-[4/3] max-w-lg mx-auto">
                    {visual}
                </div>
                <div className="w-full order-1 md:order-2 text-left">
                    {/* Title Wrapper with glow */}
                    <div className="relative inline-block mb-6">
                        <div className="absolute inset-0 bg-primary/20 blur-[60px] rounded-full pointer-events-none"></div>
                        <div className="inline-flex items-center gap-2 mb-6 relative">
                            <div className="p-2 rounded-full bg-primary/10 text-primary border border-primary/20">
                                <Icon className="w-5 h-5" />
                            </div>
                            <span className="text-primary text-xs font-bold uppercase tracking-[0.2em]">{title}</span>
                        </div>
                    </div>
                    <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6 leading-none text-white">
                        {title}
                    </h3>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 font-light">
                        {description}
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

// Feature Item Standard
const FeatureRow = ({ title, description, icon: Icon, align = 'left', action, visual }: any) => {
    // using ScrollReveal wrapper now instead of internal motion to ensure global consistency
    return (
        <ScrollReveal direction={align === 'right' ? 'left' : 'right'}>
            <div className="py-32 flex flex-col md:flex-row items-center gap-12 md:gap-24 relative z-10 min-h-[60vh]">
                <div className={`w-full md:w-1/2 ${align === 'right' ? 'md:order-1' : 'md:order-2'}`}>
                    <div className="relative w-full aspect-[4/3] max-w-lg mx-auto">
                        {visual}
                    </div>
                </div>
                <div className={`w-full md:w-1/2 ${align === 'right' ? 'md:order-2 text-left md:text-right' : 'md:order-1 text-left'}`}>
                    <div className={`relative inline-block ${align === 'right' ? 'md:flex md:flex-col md:items-end' : ''}`}>
                        <div className="absolute inset-0 bg-primary/20 blur-[60px] rounded-full pointer-events-none opacity-50"></div>
                        <div className={`inline-flex items-center gap-2 mb-6 relative ${align === 'right' ? 'md:flex-row-reverse' : ''}`}>
                            <div className="p-2 rounded-full bg-primary/10 text-primary border border-primary/20">
                                <Icon className="w-5 h-5" />
                            </div>
                            <span className="text-primary text-xs font-bold uppercase tracking-[0.2em]">{title}</span>
                        </div>
                    </div>

                    <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-6 leading-none text-white relative z-10">
                        {title}
                    </h3>
                    <p className="text-base md:text-lg text-gray-400 leading-relaxed mb-8 relative z-10">
                        {description}
                    </p>
                    {action}
                </div>
            </div>
        </ScrollReveal>
    );
};

function LandingPage() {
    const [isDemoOpen, setIsDemoOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isAtTop, setIsAtTop] = useState(true);

    const heroRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress: heroProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
    const heroScale = useTransform(heroProgress, [0, 1], [1, 1.2]);
    const heroOpacity = useTransform(heroProgress, [0, 0.2], [1, 0]);

    // Sticky Process Scroll Logic (REFINED FOR SMOOTHNESS WITH GAPS)
    const processRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress: processProgress } = useScroll({
        target: processRef,
        offset: ["start start", "end end"]
    });

    // Total Height: 400vh -> slower scroll
    // Ranges:
    // Step 1: 0.05 -> 0.25 (Visible). 0.25 -> 0.35 (Fade Out).
    const op1 = useTransform(processProgress, [0.05, 0.25, 0.35], [1, 1, 0]);
    const scale1 = useTransform(processProgress, [0.25, 0.35], [1, 0.9]);

    // ZOOM GAP: 0.35 -> 0.45 (Darkness)

    // Step 2: 0.45 (Fade In) -> 0.55 (Visible) -> 0.65 (Fade Out)
    const op2 = useTransform(processProgress, [0.45, 0.55, 0.65], [0, 1, 0]); // Note: stays visible longer
    const scale2 = useTransform(processProgress, [0.65, 0.75], [1, 0.9]);

    // ZOOM GAP: 0.65 -> 0.75 (Darkness)

    // Step 3: 0.75 (Fade In) -> 0.85 (Visible)
    const op3 = useTransform(processProgress, [0.75, 0.85], [0, 1]);

    useEffect(() => {
        const controlNavbar = () => {
            if (typeof window !== 'undefined') {
                const currentScrollY = window.scrollY;
                if (currentScrollY < lastScrollY || currentScrollY < 50) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
                setIsAtTop(currentScrollY < 20);
                setLastScrollY(currentScrollY);
            }
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
                @keyframes scan {
                    0% { top: 0; opacity: 0; }
                    10% { opacity: 1; }
                    90% { opacity: 1; }
                    100% { top: 100%; opacity: 0; }
                }
                @keyframes growBar {
                    from { height: 0; }
                    to { height: 85%; }
                }
            `}</style>

            <nav className={`fixed w-full top-0 z-[100] transition-all duration-500 transform ${isVisible ? 'translate-y-0' : '-translate-y-full'} ${isAtTop ? 'bg-transparent py-8' : 'bg-black/95 backdrop-blur-md py-4 border-b border-white/5'}`}>
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between relative">
                    <div className="text-2xl font-bold tracking-tighter text-white drop-shadow-md cursor-pointer shrink-0" onClick={() => window.scrollTo(0, 0)}>StyleOS<span className="text-primary">.</span></div>
                    <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 gap-10 text-xs font-black uppercase tracking-[0.2em] text-gray-400">
                        <button onClick={() => scrollToSection('features')} className="hover:text-white transition-colors">Fonctionnalités</button>
                        <button onClick={() => scrollToSection('comparison')} className="hover:text-white transition-colors">Comparatif</button>
                        <button onClick={() => scrollToSection('process')} className="hover:text-white transition-colors">Process</button>
                        <button onClick={() => scrollToSection('pricing')} className="hover:text-white transition-colors">Tarifs</button>
                    </div>
                    <div className="hidden md:flex items-center gap-4 shrink-0">
                        <Link to="/login" className="text-white hover:text-primary transition-colors text-xs font-bold uppercase tracking-widest hidden lg:block">Connexion</Link>
                        <Link to="/signup" className="bg-white text-black px-6 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 hover:bg-primary hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]">Inscription</Link>
                    </div>
                </div>
            </nav>

            {/* HERO */}
            <div ref={heroRef} className="relative h-[150vh] mb-0 pointer-events-none">
                <div className="sticky top-0 h-screen overflow-hidden flex flex-col items-center justify-center bg-black">
                    <StickyCanvas scale={heroScale} rotate={heroScale} opacity={heroOpacity} />
                    <motion.div className="absolute inset-0 flex items-center justify-center text-center px-4" style={{ opacity: heroOpacity }}>
                        <div className="max-w-5xl mx-auto z-10 mt-20">
                            <div className="inline-block mb-8 px-6 py-2 rounded-full bg-white/5 border border-white/10 text-primary text-[10px] font-black uppercase tracking-[0.5em] backdrop-blur-md">StyleOS • Bordeaux</div>
                            <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-12">
                                Distinguez<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#F3E5AB] to-primary bg-[length:200%_auto] animate-shimmer italic">VOUS.</span>
                            </h1>
                            <div className="max-w-3xl mx-auto space-y-6">
                                <h2 className="text-2xl md:text-3xl text-white font-bold tracking-tight">Coupez des cheveux, <span className="text-primary italic">pas des appels.</span></h2>
                                <p className="text-base md:text-lg text-gray-400 leading-relaxed font-normal opacity-80 max-w-2xl mx-auto">Une infrastructure digitale conçue pour les salons d'élite.</p>
                            </div>
                            <p className="text-gray-500 text-[10px] uppercase tracking-[0.3em] mt-24 animate-pulse">Scrollez pour découvrir l'expérience</p>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* FEATURES */}
            <div id="features" className="relative z-10 bg-black pt-24 pb-12 w-full -mt-[60vh]">
                <div className="absolute top-0 left-0 w-full h-[60vh] bg-gradient-to-b from-transparent via-black/90 to-black pointer-events-none -translate-y-1/2"></div>
                <div className="text-center px-6 mb-32 relative z-20 pt-[25vh]">
                    <ScrollReveal>
                        <div className="relative inline-block">
                            <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full pointer-events-none"></div>
                            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4 text-white relative">
                                L'Écosystème <span className="text-primary">StyleOS</span>
                            </h2>
                        </div>
                        <p className="text-gray-500 uppercase tracking-[0.2em] text-xs font-bold">L'excellence opérationnelle en 4 dimensions</p>
                    </ScrollReveal>
                </div>
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="mt-48">
                        <FeatureRow title="Web Elite" description='Design "Dark Luxury" sur-mesure. SEO Local dominant. Votre salon n’est plus une adresse, c’est une destination.' icon={Monitor} align="left" visual={<WebEliteMock />}
                            action={<a href="#demo" onClick={(e) => { e.preventDefault(); scrollToSection('demo'); }} className="flex items-center gap-3 text-primary text-xs font-bold uppercase tracking-widest hover:text-white transition-colors group cursor-pointer inline-block mt-4">Voir les templates <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></a>}
                        />
                    </div>
                    <FeatureRow title="Sarah IA" description="Réceptionniste virtuelle active 24/7. Elle répond au téléphone, filtre les demandes, qualifie les prospects et ajoute les RDV directement dans votre agenda." icon={Bot} align="right" visual={<ChatMock />} />
                    <FeatureRow title="Pilotage Financier" description="Tableau de bord de direction. Suivez votre CA, vos marges et votre croissance en temps réel. La donnée brute transformée en stratégie claire." icon={BarChart3} align="left" visual={<DashboardMock />} />
                    <FeatureRow title="Marketing & Visibilité" description="Automatisation des campagnes. Fidélisation client. Transformez votre réputation en revenus." icon={Megaphone} align="right" visual={<SocialMock />} action={<Link to="/signup" className="inline-block mt-4 bg-white text-black px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-primary transition-all">Commencer</Link>} />
                </div>
            </div>

            {/* INTEGRATION (Animated) */}
            <div className="relative z-10 bg-black pt-12">
                <ScrollReveal>
                    <div className="max-w-7xl mx-auto px-6">
                        <FeatureRow title="Migration Sans Friction" description="Nous récupérons l'intégralité de votre historique Planity ou Booksy. Fichiers clients, RDV à venir, préférences. Transition invisible en 24h." icon={Server} align="left" visual={<IntegrationMock />} />
                    </div>
                </ScrollReveal>
            </div>

            {/* COMPARISON (Animated) */}
            <div id="comparison" className="relative z-10 bg-black pb-24 border-t border-white/5 pt-32">
                <div className="max-w-7xl mx-auto px-6">
                    <ScrollReveal>
                        <div className="text-center mb-20 relative inline-block w-full">
                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary/20 blur-[100px] w-2/3 h-full rounded-full pointer-events-none"></div>
                            <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white relative z-10">Pourquoi <span className="text-primary italic">StyleOS</span> ?</h3>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal delay={0.2}>
                        <ComparisonTable />
                    </ScrollReveal>
                </div>
            </div>

            {/* MACHINE A CASH (Animated) */}
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
                    <ScrollReveal delay={0.2}>
                        <RevenueSimulator />
                    </ScrollReveal>
                </div>
            </section>

            {/* DEMO (Larger Space & Animated) */}
            <div id="demo" className="relative z-10 bg-black pt-48 pb-32 border-t border-white/5">
                <ScrollReveal>
                    <div className="text-center mb-12 relative">
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-secondary/20 blur-[60px] w-1/3 h-full rounded-full pointer-events-none"></div>
                        <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-white relative">Découvrez <span className="text-primary">Sarah IA</span></h3>
                    </div>
                    <div className="max-w-6xl mx-auto">
                        <AudioDemo />
                    </div>
                </ScrollReveal>
            </div>

            {/* GUARANTEE (Animated) */}
            <div className="relative z-10 bg-black border-t border-white/5 py-24">
                <ScrollReveal>
                    <div className="max-w-7xl mx-auto px-6">
                        <FeatureRow title="Garantie Élite" description="Risque Zéro. Si StyleOS ne finance pas son propre coût dès le premier mois grâce aux économies de commissions et au gain de productivité, nous vous remboursons." icon={ShieldCheck} align="right" visual={<GuaranteeMock />} />
                    </div>
                </ScrollReveal>
            </div>

            {/* PROCESS (Increased Height for Smoothness, 400vh) */}
            <div id="process" ref={processRef} className="relative z-10 bg-black h-[400vh]">
                <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
                    <div className="relative w-full h-full max-w-7xl mx-auto px-6 flex items-center justify-center">
                        <div className="absolute top-12 left-0 w-full text-center z-50">
                            <div className="relative inline-block">
                                <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full pointer-events-none"></div>
                                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white relative">
                                    Votre Parcours <span className="text-primary">Vers le Sommet</span>
                                </h2>
                            </div>
                        </div>
                        <StickyFeatureRow style={{ opacity: op1, scale: scale1 }} title="1. Audit & Setup" description="Nous analysons votre marque, configurons votre instance StyleOS et importons vos données. Clé en main." icon={Search} visual={<ProcessAuditMock />} />
                        <StickyFeatureRow style={{ opacity: op2, scale: scale2 }} title="2. Formation & Lancement" description="Formation de 45min pour votre équipe. Activation de Sarah. Lancement de votre nouveau site Elite." icon={Zap} visual={<ProcessTrainingMock />} />
                        <StickyFeatureRow style={{ opacity: op3 }} title="3. Accélération" description="Optimisation continue. Campagnes marketing. Vous pilotez, nous propulsons." icon={Rocket} visual={<ProcessGrowthMock />} />
                    </div>
                </div>
            </div>

            {/* FINAL PRICING & OFFER (Animated) */}
            <div id="pricing" className="relative z-10 bg-black pb-32 border-t border-white/5 pt-24">
                <ScrollReveal>
                    <div className="relative inline-block w-full text-center mb-4">
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary/20 blur-[100px] w-2/3 h-full rounded-full pointer-events-none"></div>
                        {/* Title built into PricingSection, adding wrapper glow if needed or just relying on internal. */}
                    </div>
                    <PricingSection />
                </ScrollReveal>
            </div>

            <ScrollReveal>
                <div className="relative inline-block w-full text-center">
                    <div className="absolute inset-0 bg-primary/10 blur-[100px] rounded-full pointer-events-none"></div>
                    <OfferSection />
                </div>
            </ScrollReveal>

            {/* FOOTER (Unchanged) */}
            <footer className="bg-black py-12 border-t border-white/5 text-center md:text-left">
                {/* ... (Footer content same as before) ... */}
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
                    <div>
                        <div className="text-2xl font-bold tracking-tighter text-white mb-4">StyleOS<span className="text-primary">.</span></div>
                        <p className="text-gray-500 text-xs">Infrastructure digitale pour salons de coiffure Tier 1.</p>
                    </div>
                    <div>
                        <ul className="space-y-2 text-xs text-gray-500">
                            <li><button onClick={() => scrollToSection('features')} className="hover:text-white transition-colors">Fonctionnalités</button></li>
                            <li><button onClick={() => scrollToSection('pricing')} className="hover:text-white transition-colors">Tarifs</button></li>
                        </ul>
                    </div>
                    <div>
                        <ul className="space-y-2 text-xs text-gray-500">
                            <li><Link to="/legal" className="hover:text-white transition-colors">Mentions Légales</Link></li>
                            <li><Link to="/privacy" className="hover:text-white transition-colors">Confidentialité</Link></li>
                            <li><Link to="/terms" className="hover:text-white transition-colors">Conditions Générales</Link></li>
                        </ul>
                    </div>
                    <div>
                        <ul className="space-y-2 text-xs text-gray-500">
                            <li>bordeaux@styleos.fr</li>
                            <li className="pt-2"><Link to="/login" className="text-primary hover:text-white transition-colors">Espace Client</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto px-6 pt-8 mt-8 border-t border-white/5 text-center text-[10px] text-gray-600 uppercase tracking-widest">&copy; 2026 StyleOS. Tous droits réservés.</div>
            </footer>
        </div>
    );
}

export default LandingPage;
