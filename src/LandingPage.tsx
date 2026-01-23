import { useState, useEffect } from 'react';
import { ArrowRight, X as CloseIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import ComparisonTable from './components/ComparisonTable';
import SolutionStack from './components/SolutionStack';
import AudioDemo from './components/AudioDemo';
import ROICalculator from './components/ROICalculator';
import FinancialComparison from './components/FinancialComparison';
import PricingSection from './components/PricingSection';
import OfferSection from './components/OfferSection';
import GuaranteeSection from './components/GuaranteeSection';
import ProcessSection from './components/ProcessSection';

function LandingPage() {
    const [isDemoOpen, setIsDemoOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isAtTop, setIsAtTop] = useState(true);

    useEffect(() => {
        const controlNavbar = () => {
            if (typeof window !== 'undefined') {
                const currentScrollY = window.scrollY;

                // Show if scrolling up OR at the very top
                // Hide if scrolling down AND not at the top
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

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="min-h-screen bg-background text-text-main selection:bg-primary selection:text-black">

            {/* Navigation - Smart Scroll */}
            <nav className={`fixed w-full top-0 z-[100] transition-all duration-500 transform ${isVisible ? 'translate-y-0' : '-translate-y-full'} ${isAtTop ? 'bg-transparent py-6' : 'bg-black/80 backdrop-blur-md py-4 shadow-2xl border-b border-white/5'}`}>
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                    <div className="text-2xl font-bold tracking-tighter text-white drop-shadow-md">
                        StyleOS<span className="text-primary">.</span>
                    </div>

                    <div className="hidden md:flex items-center gap-12">
                        <div className="flex gap-8 text-[11px] font-black uppercase tracking-[0.2em] text-gray-300">
                            <button onClick={() => scrollToSection('features')} className="hover:text-white transition-colors hover:shadow-[0_0_20px_white]">Fonctionnalités</button>
                            <button onClick={() => scrollToSection('comparison')} className="hover:text-white transition-colors hover:shadow-[0_0_20px_white]">Comparatif</button>
                            <button onClick={() => scrollToSection('process')} className="hover:text-white transition-colors hover:shadow-[0_0_20px_white]">Process</button>
                            <button onClick={() => scrollToSection('pricing')} className="hover:text-white transition-colors hover:shadow-[0_0_20px_white]">Tarifs</button>
                        </div>

                        <Link to="/login" className="bg-white/10 border border-white/20 hover:bg-white text-white hover:text-black px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-500 hover:scale-105 shadow-[0_0_30px_rgba(0,0,0,0.5)] backdrop-blur-md">
                            Connexion
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Hero Section - Integrated Cinematic Layout */}
            <header className="relative min-h-screen flex items-center overflow-hidden bg-black">
                {/* Background Image - Removed as requested, keeping atmosphere */}
                <div className="absolute inset-0 z-0 h-full w-full bg-black">
                    {/* Cinematic Gradients - Kept for depth */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black hidden lg:block"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

                    {/* Enhanced Mobile/Tablet Overlay */}
                    <div className="absolute inset-0 bg-black/60 lg:hidden text-center"></div>
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 w-full pt-20">
                    {/* Content Area - Responsive Alignment */}
                    <div className="lg:w-1/2 lg:ml-auto animate-fade-in text-center lg:text-left">
                        <div className="inline-block mb-8 lg:mb-10 px-6 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.5em] backdrop-blur-md">
                            StyleOS • Bordeaux • L'Élite
                        </div>

                        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[7.2rem] font-black leading-[0.85] text-white uppercase font-sans tracking-tighter mb-8 lg:mb-12">
                            Distinguez<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#F3E5AB] to-primary bg-[length:200%_auto] animate-shimmer italic">VOUS.</span>
                        </h1>

                        <div className="space-y-8 lg:space-y-10 max-w-lg mx-auto lg:mx-0">
                            <h2 className="text-lg md:text-3xl text-gray-200 font-bold tracking-tight">
                                Coupez des cheveux, <span className="text-primary italic">pas des appels.</span>
                            </h2>

                            <p className="text-sm md:text-lg text-gray-400 leading-relaxed font-medium opacity-80">
                                Ne soyez plus un simple matricule Planity.
                                Propulsez votre salon au rang de destination Tier 1 avec votre propre infrastructure digitale autonome.
                            </p>

                            <div className="pt-4">
                                <button
                                    onClick={() => scrollToSection('features')}
                                    className="group relative px-12 py-6 bg-transparent overflow-hidden rounded-full border border-white/20 hover:border-primary/50 transition-all duration-700 hover:shadow-[0_0_40px_rgba(212,175,55,0.2)]"
                                >
                                    <div className="absolute inset-0 w-0 bg-gradient-to-r from-primary/20 to-transparent transition-all duration-700 ease-out group-hover:w-full"></div>
                                    <span className="relative text-white font-black uppercase tracking-[0.3em] text-[11px] flex items-center gap-4">
                                        Explorer
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-2 group-hover:text-primary transition-all duration-300" />
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Decorative Scroll Indicator */}
                <div className="absolute bottom-10 right-10 animate-bounce opacity-40 hidden lg:block">
                    <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent"></div>
                </div>
            </header>


            <SolutionStack />

            <ComparisonTable />
            <GuaranteeSection />

            <AudioDemo />
            <ROICalculator />
            <FinancialComparison />
            <ProcessSection />
            <PricingSection />
            <OfferSection />

            {/* Footer */}
            <footer className="bg-black py-12 border-t border-white/10 text-center md:text-left">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
                    <div>
                        <div className="text-2xl font-bold tracking-tighter text-white mb-4">StyleOS<span className="text-primary">.</span></div>
                        <p className="text-gray-500 text-sm">
                            L'excellence opérationnelle pour les salons de coiffure et barbiers modernes.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold text-white mb-4">Produit</h4>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li><button onClick={() => scrollToSection('features')} className="hover:text-primary transition-colors">Fonctionnalités</button></li>
                            <li><button onClick={() => scrollToSection('demo')} className="hover:text-primary transition-colors">Démo IA</button></li>
                            <li><button onClick={() => scrollToSection('pricing')} className="hover:text-primary transition-colors">Tarifs</button></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-white mb-4">Légal</h4>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li><Link to="/legal" className="hover:text-white transition-colors">Mentions Légales</Link></li>
                            <li><Link to="/terms" className="hover:text-white transition-colors">CGV & CGU</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-white mb-4">Contact</h4>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li>bordeaux@styleos.fr</li>
                            <li>+33 7 81 74 15 25</li>
                            <li className="pt-2">
                                <Link to="/login" className="text-primary hover:text-white transition-colors">Espace Client</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-6 pt-8 mt-8 border-t border-white/5 text-center text-xs text-gray-600">
                    &copy; {new Date().getFullYear()} StyleOS. Tous droits réservés. Fait avec passion à Bordeaux.
                </div>
            </footer>


            {/* Live Demo Video Modal */}
            {isDemoOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-500">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/95 backdrop-blur-2xl"
                        onClick={() => setIsDemoOpen(false)}
                    ></div>

                    {/* Modal Container */}
                    <div className="relative w-full max-w-6xl aspect-video bg-black rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(212,175,55,0.2)] animate-in zoom-in-95 duration-500">
                        {/* Close Button */}
                        <button
                            onClick={() => setIsDemoOpen(false)}
                            className="absolute top-6 right-6 z-20 p-4 bg-white/10 hover:bg-white/20 rounded-full transition-colors text-white group"
                        >
                            <CloseIcon className="w-6 h-6 group-hover:rotate-90 transition-transform duration-500" />
                        </button>

                        {/* Video Player */}
                        <div className="absolute inset-0 w-full h-full">
                            <video
                                className="w-full h-full object-cover"
                                autoPlay
                                muted
                                controls
                                playsInline
                            >
                                <source src="https://cdn.pixabay.com/video/2020/07/26/45643-445695034_tiny.mp4" type="video/mp4" />
                                Votre navigateur ne supporte pas la lecture de vidéos.
                            </video>

                            {/* Cinematic Gradient Overlays */}
                            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/60 via-transparent to-black/40"></div>
                        </div>

                        {/* Modal Footer/Info */}
                        <div className="absolute bottom-10 left-10 z-10 hidden md:block">
                            <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-2">StyleOS Live Experience</h3>
                            <p className="text-primary text-xs font-bold uppercase tracking-[0.2em]">Demo Sarah IA • Automatisation Totale</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default LandingPage;
