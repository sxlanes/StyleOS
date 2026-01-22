import { Link } from 'react-router-dom';
import { ShieldCheck, FileText } from 'lucide-react';

const TermsOfService = () => {
    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-primary selection:text-black relative overflow-hidden">
            {/* Navigation */}
            <nav className="fixed w-full top-0 z-50 bg-black/50 backdrop-blur-lg border-b border-white/5">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <Link to="/" className="text-2xl font-bold tracking-tighter hover:opacity-80 transition-opacity">StyleOS<span className="text-primary">.</span></Link>
                    <Link to="/" className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500 hover:text-white transition-all duration-300">Fermer</Link>
                </div>
            </nav>

            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full opacity-30"></div>
            </div>

            <div className="max-w-4xl mx-auto px-6 pt-40 pb-32 relative z-10">
                <div className="mb-20">
                    <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                        <FileText className="w-3 h-3" />
                        Accord de Service
                    </div>
                    <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-12">
                        Termes &<br /><span className="text-primary italic">Conditions.</span>
                    </h1>
                    <p className="text-gray-500 font-black uppercase tracking-[0.2em] text-xs">Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })}</p>
                </div>

                <div className="space-y-24 border-t border-white/5 pt-20">
                    <section className="group">
                        <div className="flex items-center gap-6 mb-10">
                            <span className="text-primary font-black text-xl italic opacity-50 group-hover:opacity-100 transition-opacity tracking-tighter">01.</span>
                            <h2 className="text-2xl font-black uppercase tracking-tight">Introduction</h2>
                        </div>
                        <div className="pl-12 text-gray-400 font-medium leading-relaxed space-y-6 max-w-2xl">
                            <p>
                                Bienvenue sur StyleOS. Les présentes Conditions Générales d'Utilisation (CGU) et Conditions Générales de Vente (CGV) régissent votre accès et votre utilisation de notre plateforme logicielle et de nos services d'infrastructure digitale.
                            </p>
                            <p>
                                En souscrivant à nos services, vous acceptez sans réserve l'intégralité des termes décrits ci-après.
                            </p>
                        </div>
                    </section>

                    <section className="group">
                        <div className="flex items-center gap-6 mb-10">
                            <span className="text-primary font-black text-xl italic opacity-50 group-hover:opacity-100 transition-opacity tracking-tighter">02.</span>
                            <h2 className="text-2xl font-black uppercase tracking-tight">Services & Infrastructure</h2>
                        </div>
                        <div className="pl-12 text-gray-400 font-medium leading-relaxed space-y-6 max-w-2xl">
                            <p>
                                StyleOS fournit une solution complète comprenant la création de site web, l'intégration d'IA (Sarah IA), et le pilotage business pour les salons de coiffure et instituts de beauté.
                            </p>
                            <p>
                                L'infrastructure est fournie en mode SaaS (Software as a Service). L'accès est conditionné au paiement de la subscription mensuelle correspondante au plan choisi.
                            </p>
                        </div>
                    </section>

                    <section className="group">
                        <div className="flex items-center gap-6 mb-10">
                            <span className="text-primary font-black text-xl italic opacity-50 group-hover:opacity-100 transition-opacity tracking-tighter">03.</span>
                            <h2 className="text-2xl font-black uppercase tracking-tight">Propriété des Données</h2>
                        </div>
                        <div className="pl-12 text-gray-400 font-medium leading-relaxed space-y-6 max-w-2xl">
                            <p>
                                Chez StyleOS, nous croyons en la liberté de nos clients. Vos données clients, vos réservations et votre nom de domaine vous appartiennent.
                            </p>
                            <p>
                                En cas de résiliation, nous facilitons l'exportation de vos données pour garantir la continuité de votre business de manière autonome.
                            </p>
                        </div>
                    </section>

                    <section className="group">
                        <div className="flex items-center gap-6 mb-10">
                            <span className="text-primary font-black text-xl italic opacity-50 group-hover:opacity-100 transition-opacity tracking-tighter">04.</span>
                            <h2 className="text-2xl font-black uppercase tracking-tight">Paiement & Annulation</h2>
                        </div>
                        <div className="pl-12 text-gray-400 font-medium leading-relaxed space-y-6 max-w-2xl">
                            <p>
                                Les abonnements sont mensuels et sans engagement de durée, sauf mention contraire spécifique lors de la signature.
                            </p>
                            <p>
                                Tout mois entamé est dû. L'annulation peut être effectuée via votre Dashboard Business ou par notification écrite au support technique 15 jours avant la date de renouvellement.
                            </p>
                        </div>
                    </section>

                    <section className="group">
                        <div className="flex items-center gap-6 mb-10">
                            <ShieldCheck className="w-10 h-10 text-primary" />
                            <h2 className="text-2xl font-black uppercase tracking-tight">Protection des Données (RGPD)</h2>
                        </div>
                        <div className="pl-12 text-gray-400 font-medium leading-relaxed space-y-6 max-w-2xl">
                            <p>
                                StyleOS met en œuvre des mesures de sécurité techniques et organisationnelles rigoureuses pour protéger vos données et celles de vos clients, conformément aux standards européens (RGPD).
                            </p>
                        </div>
                    </section>
                </div>

                <div className="mt-40 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-black uppercase tracking-widest text-gray-600">
                    <div>© {new Date().getFullYear()} StyleOS Elite Agency</div>
                    <div className="flex gap-12">
                        <Link to="/legal" className="hover:text-white transition-colors">Mentions Légales</Link>
                        <Link to="/" className="hover:text-white transition-colors">Retour Accueil</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermsOfService;
