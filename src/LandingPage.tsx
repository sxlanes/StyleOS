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

            {/* Hero Section - Cinematic Layout (Restored) */}
            <header className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-black">

                {/* Visual: Background Image with Gradient Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="hero-model.png"
                        alt="StyleOS Atmosphere"
                        className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0a0a0a]"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000_100%)] opacity-80"></div>
                </div>

                {/* Content: Centered Text */}
                <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center animate-fade-in-up">
                    <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37] text-xs font-bold uppercase tracking-[0.2em] backdrop-blur-md">
                        StyleOS • Bordeaux
                    </div>

                    <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold leading-[0.9] text-white uppercase font-sans tracking-tighter mb-8 drop-shadow-2xl">
                        Distinguez-vous<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB]">De La Masse.</span>
                    </h1>

                    <h2 className="text-xl md:text-2xl text-gray-300 font-medium mb-10 tracking-wide max-w-2xl mx-auto">
                        Coupez des cheveux, pas des appels.
                    </h2>

                    <p className="text-lg text-gray-400 max-w-xl mx-auto mb-12 leading-relaxed font-light">
                        Ne soyez pas juste une ligne dans une liste Planity.
                        <br />
                        Offrez-vous un <strong>site web ultra-personnalisé</strong> et un <strong>agent IA</strong> qui gèrent votre business.
                    </p>

                    {/* Single "Explorer" Button */}
                    <div>
                        <button
                            onClick={() => scrollToSection('solution-stack')}
                            className="group relative px-10 py-5 bg-transparent overflow-hidden rounded-full border border-white/20 hover:border-[#D4AF37]/50 transition-all duration-500"
                        >
                            <div className="absolute inset-0 w-0 bg-[#D4AF37] transition-all duration-[250ms] ease-out group-hover:w-full opacity-10"></div>
                            <span className="relative text-white font-bold uppercase tracking-[0.2em] text-sm flex items-center gap-3">
                                Explorer Le Système <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </button>
                    </div>
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
