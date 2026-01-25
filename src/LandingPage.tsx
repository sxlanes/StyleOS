import { useState, useEffect, useRef } from 'react';
import { Bot, BarChart3, Megaphone, Server, LayoutDashboard, Calendar, Users, Wallet, Monitor, ArrowRight, Search, Zap, Rocket, Check, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';

import { StickyCanvas } from './components/StickyCanvas';
import ComparisonTable from './components/ComparisonTable';
import AudioDemo from './components/AudioDemo';
import RevenueSimulator from './components/RevenueSimulator';
import PricingSection from './components/PricingSection';
import OfferSection from './components/OfferSection';
import GuaranteeSection from './components/GuaranteeSection';

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

const ChatMock = () => (
    <div className="w-full md:w-3/4 mx-auto h-full bg-black flex flex-col rounded-[2rem] border border-white/10 overflow-hidden relative shadow-2xl">
        <div className="h-14 bg-white/5 border-b border-white/5 flex items-center px-6 gap-4">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary relative"><Bot size={16} /></div>
            <div>
                <div className="text-xs font-bold text-white">Sarah IA</div>
                <div className="text-[8px] text-green-500 font-mono">En ligne</div>
            </div>
        </div>
        <div className="flex-1 p-4 space-y-4 font-sans text-[10px] bg-black relative flex flex-col justify-end pb-8">
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
            <div className="w-full text-center text-[8px] text-gray-600 mt-2">Sarah gère la conversation et l'agenda en temps réel.</div>
        </div>
    </div>
);

const DashboardMock = () => (
    <div className="w-full h-full bg-[#09090b] flex rounded-xl border border-white/10 overflow-hidden relative shadow-2xl font-sans group">
        <div className="w-14 border-r border-white/10 flex flex-col items-center py-6 gap-6 bg-black z-20">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-black font-bold">S</div>
            <LayoutDashboard className="w-5 h-5 text-white/80" />
            <Users className="w-5 h-5 text-gray-600" />
            <Calendar className="w-5 h-5 text-gray-600" />
            <Wallet className="w-5 h-5 text-gray-600" />
        </div>
        <div className="flex-1 p-6 flex flex-col bg-black relative">
            <div className="grid grid-cols-2 gap-3 mb-6 relative z-10">
                <div className="p-3 bg-white/5 rounded-lg border border-white/5">
                    <div className="text-[8px] text-gray-500 uppercase tracking-wider mb-2">Chiffre d'Affaire</div>
                    <div className="text-xl font-black text-white">12,450€</div>
                    <div className="text-[8px] text-green-500 font-bold">+15% vs M-1</div>
                </div>
                <div className="p-3 bg-white/5 rounded-lg border border-white/5">
                    <div className="text-[8px] text-gray-500 uppercase tracking-wider mb-2">Ticket Moyen</div>
                    <div className="text-xl font-black text-white">65€</div>
                    <div className="text-[8px] text-green-500 font-bold">+4€ vs M-1</div>
                </div>
            </div>
            <div className="text-[8px] text-gray-500 uppercase tracking-widest mb-2">Occupation Hebdomadaire</div>
            <div className="flex-1 bg-white/[0.02] rounded-lg border border-white/5 relative overflow-hidden flex items-end px-2 pt-2 gap-1 z-10">
                {[40, 65, 55, 85, 60, 45, 90, 70, 80, 95, 50, 60].map((h, i) => <div key={i} className="flex-1 bg-white/10 rounded-t-sm group-hover:bg-primary/50 transition-colors" style={{ height: `${h}%` }}></div>)}
            </div>
        </div>
    </div>
);

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

const IntegrationMock = () => (
    <div className="w-full h-full bg-[#111] rounded-xl border border-white/10 flex items-center justify-center relative overflow-hidden group">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 to-transparent opacity-50" />
        <div className="relative z-10 text-center">
            <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6 border border-white/10 group-hover:bg-primary/20 transition-colors">
                <Server className="w-10 h-10 text-white group-hover:text-primary transition-colors" />
            </div>
            <div className="flex items-center gap-4 text-xs font-mono text-gray-500">
                <span>Planity</span>
                <ArrowRight size={12} />
                <span className="text-primary font-bold">StyleOS</span>
            </div>
        </div>
    </div>
);

/* --- PROCESS VISUALS --- */
const ProcessVisual1 = () => (
    <div className="bg-black/80 backdrop-blur-sm border border-white/10 rounded-xl p-8 relative overflow-hidden h-full flex flex-col items-center justify-center shadow-2xl">
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(212,175,55,0.05),transparent)] animate-[scan_3s_infinite] pointer-events-none" />
        <div className="w-full max-w-xs space-y-6 relative z-10">
            <div className="flex items-center justify-between text-[10px] text-gray-500 uppercase tracking-widest">
                <span>System Initialization</span>
                <span className="text-primary animate-pulse">Running...</span>
            </div>
            <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-primary w-[85%] shadow-[0_0_10px_#D4AF37]" />
            </div>
            <div className="grid grid-cols-2 gap-3 text-[10px] text-gray-400 font-mono">
                <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500" /> DNS Config</div>
                <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500" /> Data Import</div>
                <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500" /> SSL Secure</div>
                <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse" /> Deploying</div>
            </div>
        </div>
    </div>
);

const ProcessVisual2 = () => (
    <div className="bg-black/80 backdrop-blur-sm border border-white/10 rounded-xl p-8 relative overflow-hidden h-full flex items-center justify-center shadow-2xl">
        <div className="absolute inset-0 bg-primary/5 animate-pulse" />
        <div className="text-center relative z-10 scale-110">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-primary/40 text-primary shadow-[0_0_40px_rgba(212,175,55,0.2)]">
                <Bot size={40} />
            </div>
            <div className="text-sm font-black uppercase tracking-widest text-white mb-2">Sarah Is Online</div>
            <div className="text-[10px] text-gray-400 font-mono flex items-center justify-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" /> Listening to calls
            </div>
        </div>
    </div>
);

const ProcessVisual3 = () => (
    <div className="bg-black/80 backdrop-blur-sm border border-white/10 rounded-xl p-8 relative overflow-hidden h-full flex flex-col items-center justify-center shadow-2xl">
        <div className="flex items-end gap-3 h-40 w-full max-w-xs opacity-90 mb-4 px-4 border-b border-white/5 pb-4">
            {[30, 45, 40, 60, 55, 75, 70, 95, 85, 100].map((h, i) => (
                <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    key={i}
                    className="flex-1 bg-gradient-to-t from-primary/5 to-primary rounded-t-sm shadow-[0_0_15px_rgba(212,175,55,0.3)]"
                />
            ))}
        </div>
        <div className="flex items-center gap-3 text-lg font-black text-white">
            <TrendingUp className="text-green-500 animate-bounce" size={24} />
            <span>+324% Revenu</span>
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
const StickyFeatureRow = ({ title, description, icon: Icon, visual, style }: any) => {
    return (
        <motion.div style={style} className="absolute top-0 left-0 w-full h-full flex items-center justify-center perspective-[1000px]">
            {/* Background glow for smoother transition */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none opacity-50" />

            <div className="w-full max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center relative z-10">
                <div className="w-full order-2 md:order-1 relative aspect-[4/3] max-w-lg mx-auto transform hover:scale-[1.02] transition-transform duration-500">
                    {visual}
                </div>
                <div className="w-full order-1 md:order-2 text-left">
                    <div className="relative inline-block mb-6">
                        <div className="absolute inset-0 bg-primary/20 blur-[60px] rounded-full pointer-events-none"></div>
                        <div className="inline-flex items-center gap-2 mb-6 relative">
                            <div className="p-2 rounded-full bg-primary/10 text-primary border border-primary/20 shadow-[0_0_20px_rgba(212,175,55,0.2)]"><Icon className="w-5 h-5" /></div>
                            <span className="text-primary text-xs font-bold uppercase tracking-[0.2em]">{title}</span>
                        </div>
                    </div>
                    <motion.h3
                        initial={{ opacity: 0, x: 20 }}
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
    <div id="demos" className="py-24 border-b border-white/5 bg-[#050505] relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-gray-900 via-black to-black opacity-50" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
            <ScrollReveal>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white mb-4">Nos <span className="text-primary">Réalisations</span></h2>
                    <p className="text-gray-400 text-sm uppercase tracking-widest">L'Art du Digital</p>
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

    // Sticky Process
    const processRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress: processProgress } = useScroll({ target: processRef, offset: ["start start", "end end"] });
    const op1 = useTransform(processProgress, [0.05, 0.2, 0.3, 0.4], [0, 1, 1, 0]);
    const scale1 = useTransform(processProgress, [0.3, 0.4], [1, 0.9]);
    const y1 = useTransform(processProgress, [0.3, 0.4], ["0%", "10%"]);

    const op2 = useTransform(processProgress, [0.45, 0.55, 0.65, 0.75], [0, 1, 1, 0]);
    const scale2 = useTransform(processProgress, [0.65, 0.75], [1, 0.9]);
    const y2 = useTransform(processProgress, [0.65, 0.75], ["0%", "10%"]);

    const op3 = useTransform(processProgress, [0.8, 0.9], [0, 1]);
    // Vertical line progress
    const lineProgress = useTransform(processProgress, [0.1, 0.9], ["0%", "100%"]);

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
                            <div className="inline-block mb-8 px-6 py-2 rounded-full bg-white/5 border border-white/10 text-primary text-[10px] font-black uppercase tracking-[0.5em] backdrop-blur-md">StyleOS • Bordeaux</div>
                            <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-12">
                                Distinguez<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#F3E5AB] to-primary bg-[length:200%_auto] animate-shimmer italic">VOUS.</span>
                            </h1>
                            <div className="max-w-3xl mx-auto space-y-6">
                                <h2 className="text-2xl md:text-3xl text-white font-bold tracking-tight">Coupez des cheveux, <span className="text-primary italic">pas des appels.</span></h2>
                            </div>
                            <p className="text-gray-500 text-[10px] uppercase tracking-[0.3em] mt-24 animate-pulse">Scrollez pour découvrir l'expérience</p>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div id="features" className="relative z-10 bg-black pt-24 pb-12 w-full -mt-[60vh]">
                <div className="absolute top-0 left-0 w-full h-[60vh] bg-gradient-to-b from-transparent via-black/90 to-black pointer-events-none -translate-y-1/2"></div>
                <div className="text-center px-6 mb-32 relative z-20 pt-[25vh]">
                    <ScrollReveal>
                        <div className="relative inline-block">
                            <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full pointer-events-none"></div>
                            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4 text-white relative">L'Écosystème <span className="text-primary">StyleOS</span></h2>
                        </div>
                        <p className="text-gray-500 uppercase tracking-[0.2em] text-xs font-bold">L'excellence opérationnelle en 4 dimensions</p>
                    </ScrollReveal>
                </div>
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="mt-48">
                        <FeatureRow title="Web Elite" description='Design "Dark Luxury" sur-mesure ou Templates Premium. SEO Local dominant. Votre présence digitale devient votre meilleur atout.' icon={Monitor} align="left" visual={<WebEliteMock />}
                            action={<a href="#demos" onClick={(e) => { e.preventDefault(); scrollToSection('demos'); }} className="flex items-center gap-3 text-primary text-xs font-bold uppercase tracking-widest hover:text-white transition-colors group cursor-pointer inline-block mt-4">Voir les réalisations <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></a>}
                        />
                    </div>
                    <FeatureRow title="Sarah IA" description="Réceptionniste virtuelle active 24/7. Elle répond au téléphone, filtre les demandes, qualifie les prospects et ajoute les RDV directement dans votre agenda." icon={Bot} align="right" visual={<ChatMock />} />
                    <FeatureRow
                        title="Pilotage Financier"
                        description="Tableau de bord de direction. Suivez votre CA, vos marges et votre croissance en temps réel avec des indicateurs prédictifs."
                        icon={BarChart3}
                        align="left"
                        visual={
                            <div className="w-full h-full bg-[#09090b] flex rounded-xl border border-white/10 overflow-hidden relative shadow-2xl font-sans group hover:border-primary/30 transition-colors">
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
                                    {/* Interaction Hint */}
                                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-[2px]">
                                        <div className="text-[10px] text-primary font-bold uppercase tracking-widest border border-primary/50 px-4 py-2 rounded-full">Explorez les Données</div>
                                    </div>
                                </div>
                            </div>
                        }
                        action={<Link to="/" className="inline-flex items-center gap-2 mt-4 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white text-[10px] font-black uppercase tracking-widest hover:bg-primary hover:text-black transition-all">Explorer le Dashboard <ArrowRight className="w-3 h-3" /></Link>}
                    />
                    <FeatureRow title="Marketing & Visibilité" description="Automatisation des campagnes. Fidélisation client. Transformez votre réputation en revenus grâce à notre gestionnaire de publicités intégré." icon={Megaphone} align="right" visual={<SocialMock />} action={<Link to="/signup" className="inline-block mt-4 bg-white text-black px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-primary transition-all">Commencer</Link>} />
                </div>
            </div>

            <div className="relative z-10 bg-black pt-12">
                <ScrollReveal>
                    <div className="max-w-7xl mx-auto px-6">
                        <FeatureRow
                            title="Migration Sans Friction"
                            description="Nous récupérons l'intégralité de votre historique Planity ou Booksy. Fichiers clients, RDV à venir. Transition invisible en 24h."
                            icon={Server}
                            align="left"
                            visual={
                                <div className="w-full h-full bg-[#111] rounded-xl border border-white/10 flex items-center justify-center relative overflow-hidden group hover:border-primary/30 transition-all">
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 to-transparent opacity-50" />
                                    {/* Moving Particles */}
                                    {[...Array(10)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            className="absolute w-1 h-1 bg-primary rounded-full"
                                            initial={{ x: -100, y: Math.random() * 200, opacity: 0 }}
                                            animate={{ x: 400, opacity: [0, 1, 0] }}
                                            transition={{ duration: 2 + Math.random(), repeat: Infinity, delay: Math.random() * 2 }}
                                        />
                                    ))}
                                    <div className="relative z-10 text-center w-full px-12">
                                        <div className="flex items-center justify-between">
                                            <div className="flex flex-col items-center gap-2">
                                                <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-500 grayscale opacity-50"><Server size={24} /></div>
                                                <div className="text-[10px] text-gray-600 font-mono">Legacy</div>
                                            </div>
                                            <div className="flex-1 px-4 relative">
                                                <div className="h-[1px] w-full bg-white/10 relative overflow-hidden">
                                                    <div className="absolute inset-0 bg-primary w-1/2 animate-[scan_2s_infinite]" />
                                                </div>
                                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black px-2 text-[8px] text-primary uppercase tracking-widest animate-pulse">
                                                    Transfert en cours
                                                </div>
                                            </div>
                                            <div className="flex flex-col items-center gap-2">
                                                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center border border-primary/40 text-primary shadow-[0_0_20px_rgba(212,175,55,0.2)] scale-110"><Bot size={32} /></div>
                                                <div className="text-[10px] text-white font-bold font-mono">StyleOS</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                        />
                    </div>
                </ScrollReveal>
            </div>

            <div id="comparison" className="relative z-10 bg-black pb-24 border-t border-white/5 pt-32"><div className="max-w-7xl mx-auto px-6"><ScrollReveal><div className="text-center mb-20 relative inline-block w-full"><div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary/20 blur-[100px] w-2/3 h-full rounded-full pointer-events-none"></div><h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white relative z-10">Pourquoi <span className="text-primary italic">StyleOS</span> ?</h3></div></ScrollReveal><ScrollReveal delay={0.2}><ComparisonTable /></ScrollReveal></div></div>

            <section className="relative z-10 bg-black py-24 md:py-32 border-t border-white/5"><div className="max-w-7xl mx-auto px-6"><ScrollReveal><div className="text-center mb-16 relative"><div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary/20 blur-[100px] w-1/2 h-full rounded-full pointer-events-none"></div><div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.4em] relative z-10">Performance</div><h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 text-white relative z-10">Votre <span className="text-primary italic">Machine à Cash</span></h2><p className="text-base text-gray-400 max-w-2xl mx-auto leading-relaxed relative z-10">Optimisation mathématique de chaque siège.</p></div></ScrollReveal><ScrollReveal delay={0.2}><RevenueSimulator /></ScrollReveal></div></section>

            <div id="demo" className="relative z-10 bg-black pt-48 pb-32 border-t border-white/5">
                <ScrollReveal>
                    <div className="text-center mb-16 relative">
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-secondary/20 blur-[60px] w-1/3 h-full rounded-full pointer-events-none"></div>
                        <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.4em] relative z-10">Intelligence</div>
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 text-white relative z-10">
                            Découvrez <span className="text-primary italic">Sarah IA</span>
                        </h2>
                        <p className="text-base text-gray-400 max-w-2xl mx-auto leading-relaxed relative z-10">Écoutez la différence dès maintenant.</p>
                    </div>
                    <div className="max-w-6xl mx-auto"><AudioDemo /></div>
                </ScrollReveal>
            </div>

            <div className="relative z-10 bg-black border-t border-white/5 py-24"><ScrollReveal><div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-12"><h2 className="text-4xl md:text-6xl font-black uppercase text-white mb-6">Nos <span className="text-primary italic">Garanties</span></h2></div>
                <GuaranteeSection />
            </div></ScrollReveal></div>

            <div id="process" ref={processRef} className="relative z-10 bg-black h-[500vh]">
                <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
                    <div className="relative w-full h-full max-w-7xl mx-auto px-6 flex items-center justify-center">
                        <div className="absolute top-12 left-0 w-full text-center z-50">
                            <div className="relative inline-block"><div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full pointer-events-none"></div><h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white relative">Votre Parcours <span className="text-primary">Vers le Sommet</span></h2></div>
                        </div>

                        {/* Progress Line */}
                        <div className="absolute left-4 md:left-0 top-0 bottom-0 w-[2px] bg-white/5 hidden md:block">
                            <motion.div style={{ height: lineProgress }} className="w-full bg-primary shadow-[0_0_10px_#D4AF37] relative">
                                <div className="absolute bottom-0 -left-1 w-2.5 h-2.5 bg-primary rounded-full shadow-[0_0_15px_#D4AF37]" />
                            </motion.div>
                        </div>

                        <StickyFeatureRow style={{ opacity: op1, scale: scale1, y: y1 }} title="1. Audit & Setup" description="Analyse de votre marque 360°. Importation de la base client. Configuration des DNS. Votre salon, digitalisé en 24h." icon={Search} visual={<ProcessVisual1 />} />
                        <StickyFeatureRow style={{ opacity: op2, scale: scale2, y: y2 }} title="2. Formation & Lancement" description="Session VIP pour votre équipe. Prise en main ultra-rapide. Sarah est déployée et commence à répondre aux appels dès la fin de la séance." icon={Zap}
                            visual={
                                <div className="bg-black/80 backdrop-blur-sm border border-white/10 rounded-xl p-8 relative overflow-hidden h-full flex items-center justify-center shadow-2xl group">
                                    <div className="absolute inset-0 bg-primary/5 animate-pulse" />
                                    {/* Animated Circles */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-40 h-40 border border-primary/20 rounded-full animate-[ping_3s_linear_infinite]" />
                                        <div className="w-60 h-60 border border-primary/10 rounded-full animate-[ping_3s_linear_infinite] delay-1000" />
                                    </div>
                                    <div className="text-center relative z-10 scale-110">
                                        <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-primary/40 text-primary shadow-[0_0_40px_rgba(212,175,55,0.2)] relative">
                                            <Bot size={48} className="animate-bounce" />
                                            <div className="absolute top-0 right-0 w-6 h-6 bg-green-500 rounded-full border-2 border-black flex items-center justify-center z-20">
                                                <Check size={12} className="text-black" />
                                            </div>
                                        </div>
                                        <div className="text-base font-black uppercase tracking-widest text-white mb-2">Sarah Is Online</div>
                                        <div className="text-[10px] text-gray-400 font-mono flex items-center justify-center gap-2 bg-black/50 px-3 py-1 rounded-full border border-white/5">
                                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" /> Listening to calls...
                                        </div>
                                    </div>
                                </div>
                            }
                        />
                        <StickyFeatureRow style={{ opacity: op3 }} title="3. Accélération" description="Campagnes SMS & Emailing automatisées. Relances des clients dormants. Votre CA augmente mécaniquement chaque mois sans effort." icon={Rocket} visual={<ProcessVisual3 />} />
                    </div>
                </div>
            </div>

            <DemosSection />
            <div id="pricing" className="relative z-10 bg-black pb-32 pt-24"><ScrollReveal><PricingSection /></ScrollReveal></div>
            <ScrollReveal><div className="relative inline-block w-full text-center"><div className="absolute inset-0 bg-primary/10 blur-[100px] rounded-full pointer-events-none"></div><OfferSection /></div></ScrollReveal>

            <footer className="bg-black py-12 border-t border-white/5 text-center md:text-left">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
                    <div><div className="text-2xl font-bold tracking-tighter text-white mb-4">StyleOS<span className="text-primary">.</span></div><p className="text-gray-500 text-xs">Infrastructure digitale pour salons de coiffure Tier 1.</p></div>
                    <div><ul className="space-y-2 text-xs text-gray-500">
                        <li><button onClick={() => scrollToSection('features')} className="hover:text-white transition-colors">Fonctionnalités</button></li>
                        <li><button onClick={() => scrollToSection('demos')} className="hover:text-white transition-colors">Démos</button></li>
                        <li><button onClick={() => scrollToSection('pricing')} className="hover:text-white transition-colors">Tarifs</button></li>
                    </ul></div>
                    <div><ul className="space-y-2 text-xs text-gray-500"><li><Link to="/legal" className="hover:text-white transition-colors">Mentions Légales</Link></li><li><Link to="/privacy" className="hover:text-white transition-colors">Confidentialité</Link></li></ul></div>
                </div>
            </footer>
        </div>
    );
}

export default LandingPage;
