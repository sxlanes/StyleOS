
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const DemosPage = () => {
    return (
        <div className="min-h-screen bg-background text-text-main selection:bg-primary selection:text-black">
            {/* Navigation */}
            <nav className="fixed w-full top-0 z-50 bg-black/50 backdrop-blur-lg border-b border-glass-border">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <Link to="/" className="text-2xl font-bold tracking-tighter hover:opacity-80 transition-opacity">
                        StyleOS<span className="text-primary">.</span>
                    </Link>
                    <Link to="/" className="text-sm font-medium text-text-muted hover:text-white flex items-center gap-2 transition-colors">
                        <ArrowLeft className="w-4 h-4" /> Retour
                    </Link>
                </div>
            </nav>

            <section className="py-32 px-6 max-w-7xl mx-auto">
                <div className="mb-20">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight uppercase">
                        Nos <span className="text-primary">Réalisations</span>
                    </h1>
                    <p className="text-xl text-text-muted max-w-2xl">
                        Découvrez comment StyleOS transforme des salons ordinaires en marques dominantes.
                        Chaque démo est une vision unique, adaptée à l'identité du client.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* Demo Card 1: 253 Barber Club */}
                    <Link to="/demo/253-barber-club" className="group relative rounded-3xl overflow-hidden border border-white/10 bg-black/40 aspect-[4/3] block">
                        {/* Background Image / Placeholder */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
                        <img
                            src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop"
                            alt="253 Barber Club"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-80"
                        />

                        <div className="absolute inset-0 z-20 flex flex-col justify-end p-8">
                            <div className="inline-block px-3 py-1 rounded bg-[#D4AF37] text-black text-xs font-bold uppercase tracking-widest w-fit mb-4">
                                Premium
                            </div>
                            <h3 className="text-3xl font-serif font-bold text-white mb-2 group-hover:text-[#D4AF37] transition-colors">
                                253 Barber Club
                            </h3>
                            <p className="text-gray-300 text-sm flex items-center gap-2">
                                Voir la démo <ExternalLink className="w-4 h-4" />
                            </p>
                        </div>
                    </Link>

                    {/* Placeholder Card 2 */}
                    <div className="relative rounded-3xl overflow-hidden border border-white/5 bg-white/5 aspect-[4/3] flex items-center justify-center group">
                        <div className="text-center p-6">
                            <div className="w-16 h-16 rounded-full bg-white/5 mx-auto mb-4 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                <span className="text-2xl font-bold text-text-muted group-hover:text-primary transition-colors">+</span>
                            </div>
                            <h3 className="text-xl font-bold text-text-muted mb-2">Votre Salon ?</h3>
                            <p className="text-sm text-gray-600">
                                Réservez votre audit pour obtenir votre propre démo.
                            </p>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default DemosPage;
