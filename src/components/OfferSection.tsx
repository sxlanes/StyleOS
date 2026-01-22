import { ShieldCheck } from 'lucide-react';

const OfferSection = () => {
    return (
        <footer className="relative py-24 bg-black overflow-hidden">
            {/* Abstract Background Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/10 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                <h2 className="text-5xl md:text-7xl font-black mb-8 text-white tracking-tighter uppercase leading-[0.9]">
                    DOMINEZ VOTRE <br /> <span className="text-primary italic">TERRITOIRE</span>
                </h2>

                <p className="text-xl text-text-muted mb-12 max-w-2xl mx-auto font-light">
                    Rejoignez l'élite des barbiers bordelais qui ont remplacé le chaos par la Dominance Blue-Chip.
                </p>

                {/* The Offer Card */}
                <div className="bg-gradient-to-br from-gray-900 to-black p-1 rounded-3xl mb-12 max-w-lg mx-auto shadow-2xl shadow-primary/20">
                    <div className="bg-black rounded-[20px] p-8 border border-white/10 h-full">
                        <div className="text-sm text-primary font-bold uppercase tracking-widest mb-6">Offre Membre Fondateur</div>

                        <ul className="text-left space-y-4 mb-8 text-white/90">
                            <li className="flex items-start gap-3">
                                <span className="text-primary text-xl">✓</span> Site Web Personnalisé Sur-Mesure
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary text-xl">✓</span> Configuration de l'Agent IA 'Sarah'
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary text-xl">✓</span> 1 Mois de Support VIP "Gant Blanc"
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary text-xl">✓</span> <span className="font-bold text-white">Garanti Satisfait ou Remboursé (30 Jours)</span>
                            </li>
                        </ul>

                        <form className="space-y-6 mt-8">
                            <div className="relative">
                                <input
                                    type="text"
                                    id="salon"
                                    placeholder=" "
                                    className="peer w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-transparent focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all"
                                />
                                <label
                                    htmlFor="salon"
                                    className="absolute left-4 top-4 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-1 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:top-1 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-primary"
                                >
                                    Nom du Salon
                                </label>
                            </div>

                            <div className="relative">
                                <input
                                    type="email"
                                    id="email-contact"
                                    placeholder=" "
                                    className="peer w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-transparent focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all"
                                />
                                <label
                                    htmlFor="email-contact"
                                    className="absolute left-4 top-4 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-1 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:top-1 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-primary"
                                >
                                    Email Professionnel
                                </label>
                            </div>

                            <button className="w-full py-5 bg-primary text-black font-black uppercase tracking-widest text-sm rounded-xl hover:bg-white transition-all shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95">
                                Demander mon Audit Gratuit
                            </button>
                            <p className="text-[10px] text-gray-500 mt-4 uppercase tracking-[0.2em]">Priorité aux salons de Bordeaux • Limité à 5 places</p>
                        </form>
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
