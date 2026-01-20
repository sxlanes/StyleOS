import { Play } from 'lucide-react';
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

            {/* Hero Section - Redesigned to match "Ginger Beard Man" Image */}
            <header className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#0a0a0a]">

                {/* Visual: Man Image (Left/Background) */}
                <div className="absolute inset-y-0 left-0 w-full md:w-[60%] z-0">
                    <img
                        src="hero-model.png"
                        alt="StyleOS Barber"
                        className="w-full h-full object-cover object-center md:object-right opacity-80 md:opacity-100 mask-image-linear-gradient"
                    />
                    {/* Gradient Overlay to fade image into black on the right */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/20 to-[#0a0a0a]"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent md:hidden"></div>
                </div>

                {/* Content: Text (Right aligned) */}
                <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid md:grid-cols-2">
                    <div className="hidden md:block"></div> {/* Spacer for image */}

                    <div className="flex flex-col justify-center text-left pt-32 md:pt-0">
                        <div className="inline-block mb-4 px-3 py-1 rounded bg-[#B88746]/10 border border-[#B88746]/20 text-[#B88746] text-xs font-bold uppercase tracking-[0.2em] w-fit">
                            StyleOS
                        </div>

                        <h1 className="text-5xl md:text-8xl font-bold leading-[0.9] text-[#B88746] uppercase font-sans tracking-tighter mb-2">
                            DISTINGUEZ-VOUS<br />
                            <span className="text-white/90">DE LA MASSE.</span>
                        </h1>

                        <h2 className="text-xl md:text-2xl text-white font-bold bg-clip-text mb-8 tracking-wide">
                            COUPEZ DES CHEVEUX, PAS DES APPELS.
                        </h2>

                        <p className="text-lg text-gray-400 max-w-lg mb-10 leading-relaxed font-light">
                            Ne soyez pas juste une ligne dans une liste Planity.
                            <br />
                            Offrez-vous un <strong>site web 'Dark Luxury'</strong> et un <strong>agent IA</strong> qui gèrent votre business pendant que vous créez.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button onClick={() => scrollToSection('demo')} className="px-8 py-4 bg-[#B88746] text-black font-bold rounded-full text-lg hover:bg-[#A07030] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#B88746]/20">
                                <Play className="w-5 h-5 fill-black" />
                                Écouter la Démo IA
                            </button>
                            <button onClick={() => scrollToSection('pricing')} className="px-8 py-4 bg-transparent border border-white/20 text-white font-medium rounded-full text-lg hover:bg-white/10 transition-all text-center">
                                Voir les Tarifs
                            </button>
                        </div>
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
