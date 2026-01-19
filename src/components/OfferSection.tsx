import { ShieldCheck } from 'lucide-react';

const OfferSection = () => {
    return (
        <footer className="relative py-24 bg-black overflow-hidden">
            {/* Abstract Background Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/10 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                <h2 className="text-5xl md:text-7xl font-bold mb-8 text-white tracking-tight">
                    REPRENEZ VOTRE <br /> <span className="text-primary">INDÉPENDANCE</span>
                </h2>

                <p className="text-xl text-text-muted mb-12 max-w-2xl mx-auto">
                    Rejoignez le cercle exclusif des barbiers bordelais qui possèdent leurs données, leur marque et leur avenir.
                </p>

                {/* The Offer Card */}
                <div className="bg-gradient-to-br from-gray-900 to-black p-1 rounded-3xl mb-12 max-w-lg mx-auto shadow-2xl shadow-primary/20">
                    <div className="bg-black rounded-[20px] p-8 border border-white/10 h-full">
                        <div className="text-sm text-primary font-bold uppercase tracking-widest mb-6">Offre Membre Fondateur</div>

                        <ul className="text-left space-y-4 mb-8 text-white/90">
                            <li className="flex items-start gap-3">
                                <span className="text-primary text-xl">✓</span> Site Web 'Dark Luxury' Sur-Mesure
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary text-xl">✓</span> Configuration de l'Agent IA 'Antoine'
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary text-xl">✓</span> 1 Mois de Support VIP "Gant Blanc"
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary text-xl">✓</span> <span className="font-bold text-white">Garanti Satisfait ou Remboursé (30 Jours)</span>
                            </li>
                        </ul>

                        <button className="w-full py-4 bg-white text-black font-bold text-lg rounded-full hover:bg-gray-200 transition-colors">
                            Demander un Accès
                        </button>
                        <p className="text-xs text-gray-500 mt-4">Limité à 5 nouveaux salons sur Bordeaux ce mois-ci.</p>
                    </div>
                </div>

                <div className="text-gray-600 text-sm flex items-center justify-center gap-2">
                    <ShieldCheck className="w-4 h-4" /> Risque Zéro. Annulation à tout moment.
                </div>

                <div className="mt-20 pt-8 border-t border-white/5 flex justify-between text-xs text-gray-600">
                    <div>© 2026 StyleOS. Bordeaux, France.</div>
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-white">Confidentialité</a>
                        <a href="#" className="hover:text-white">Conditions</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default OfferSection;
