import { Play, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ComparisonTable from './components/ComparisonTable';
import SolutionStack from './components/SolutionStack';
import AudioDemo from './components/AudioDemo';
import ROICalculator from './components/ROICalculator';
import FinancialComparison from './components/FinancialComparison';
import PricingSection from './components/PricingSection';
import OfferSection from './components/OfferSection';

function LandingPage() {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="min-h-screen bg-background text-text-main selection:bg-primary selection:text-black">

            {/* Navigation */}
            <nav className="fixed w-full top-0 z-50 bg-black/50 backdrop-blur-lg border-b border-glass-border">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="text-2xl font-bold tracking-tighter">StyleOS<span className="text-primary">.</span></div>
                    <div className="hidden md:flex gap-8 text-sm font-medium text-text-muted">
                        <button onClick={() => scrollToSection('features')} className="hover:text-white transition-colors">Fonctionnalités</button>
                        <button onClick={() => scrollToSection('comparison')} className="hover:text-white transition-colors">Comparatif</button>
                        <button onClick={() => scrollToSection('pricing')} className="hover:text-white transition-colors">Tarifs</button>
                        <Link to="/demos" className="hover:text-primary transition-colors font-bold ml-4">NOS DÉMOS</Link>
                    </div>
                    <Link to="/login" className="bg-surface border border-glass-border hover:border-white/20 text-white px-6 py-2 rounded-full text-sm font-medium transition-all">
                        Connexion
                    </Link>
                </div>
            </nav>

            {/* Cinematic Hero / Intro Section */}
            <header className="relative h-screen w-full overflow-hidden bg-black flex flex-col items-center justify-center">

                {/* Background Image with Zoom Effect */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="hero-model.png"
                        alt="StyleOS Atmosphere"
                        className="w-full h-full object-cover object-center opacity-60 animate-slow-zoom"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 text-center max-w-4xl px-6 animate-fade-in-up">
                    <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-[#B88746]/30 bg-[#B88746]/10 backdrop-blur-md">
                        <span className="text-[#B88746] text-xs font-bold uppercase tracking-[0.3em]">StyleOS • Bordeaux</span>
                    </div>

                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white uppercase tracking-tighter mb-8 leading-none">
                        Distinguez<br />
                        <span className="text-[#B88746] italic font-serif">Vous.</span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto mb-12 font-light tracking-wide leading-relaxed">
                        L'excellence digitale pour les salons qui refusent d'être ordinaires.
                    </p>

                    <button
                        onClick={() => scrollToSection('solution-stack')}
                        className="group relative px-10 py-5 bg-transparent overflow-hidden rounded-full border border-white/20 hover:border-[#B88746]/50 transition-all duration-500"
                    >
                        <div className="absolute inset-0 w-0 bg-[#B88746] transition-all duration-[250ms] ease-out group-hover:w-full opacity-10"></div>
                        <span className="relative text-white font-bold uppercase tracking-[0.2em] text-sm flex items-center gap-3">
                            Explorer Le Système <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </button>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/30">
                    <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white/50 to-transparent"></div>
                </div>
            </header>


            <SolutionStack />

            <ComparisonTable />

            <AudioDemo />
            <ROICalculator />
            <FinancialComparison />
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
                            <li><a href="#" className="hover:text-white transition-colors">Mentions Légales</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">CGV</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Confidentialité</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-white mb-4">Contact</h4>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li>bordeaux@styleos.fr</li>
                            <li>+33 7 00 00 00 00</li>
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

        </div>
    )
}

export default LandingPage;
