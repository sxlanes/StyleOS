import { Play, PhoneOff } from 'lucide-react';
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

            {/* Financial Pain Section */}
            <section className="py-24 bg-surface/30 relative">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-16 text-white uppercase tracking-tight">
                        Votre téléphone vous <span className="text-red-500">coûte de l'argent</span>.
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        <div className="p-8 rounded-2xl bg-black border border-glass-border">
                            <PhoneOff className="w-10 h-10 text-red-500 mx-auto mb-4" />
                            <div className="text-4xl font-bold text-white mb-2">2</div>
                            <div className="text-text-muted text-sm uppercase tracking-wider">Appels Manqués / Jour</div>
                        </div>
                        <div className="flex items-center justify-center text-4xl text-text-muted font-thin">=</div>
                        <div className="p-8 rounded-2xl bg-black border border-glass-border relative overflow-hidden group">
                            <div className="absolute inset-0 bg-red-500/10 group-hover:bg-red-500/20 transition-all"></div>
                            <div className="text-4xl font-bold text-red-500 mb-2">€14,000</div>
                            <div className="text-text-muted text-sm uppercase tracking-wider">Perte Revanus / An</div>
                        </div>
                    </div>

                    <p className="text-xl text-text-muted font-light">
                        Chaque fois que vous arrêtez une coupe pour répondre, vous perdez votre concentration. <br />
                        Chaque fois que vous ne répondez pas, ce client appelle <span className="text-white border-b border-white/20">Planity</span>.
                    </p>
                </div>
            </section>

            <ComparisonTable />
            <AudioDemo />
            <ROICalculator />
            <FinancialComparison />
            <PricingSection />
            <OfferSection />

        </div>
    )
}

export default LandingPage;
