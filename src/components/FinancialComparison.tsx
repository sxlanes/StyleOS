import { Euro, TrendingUp, Zap } from 'lucide-react';

const FinancialComparison = () => {
    return (
        <section className="py-24 bg-surface/20 border-y border-glass-border relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/5 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="max-w-5xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 uppercase tracking-tight">
                        L'INVESTISSEMENT <span className="text-primary">INTELLIGENT</span>
                    </h2>
                    <p className="text-text-muted max-w-2xl mx-auto text-lg">
                        Un nouveau client par jour suffit pour payer StyleOS.
                        Le reste ? C'est du bénéfice pur.
                    </p>
                </div>

                <div className="glass-card rounded-3xl overflow-hidden border border-glass-border max-w-4xl mx-auto">

                    <div className="p-10 bg-black/60 text-center">
                        <div className="flex flex-col md:flex-row items-center justify-center gap-12">

                            {/* Cost */}
                            <div className="relative">
                                <div className="text-text-muted uppercase text-sm tracking-widest mb-2">Coût StyleOS (Pro)</div>
                                <div className="text-4xl font-bold text-white">4 € <span className="text-sm font-normal text-gray-500">/ jour</span></div>
                                <div className="text-xs text-gray-600 mt-1">(125€ / mois)</div>
                            </div>

                            <div className="text-gray-600 text-6xl font-thin hidden md:block">VS</div>

                            {/* Gain */}
                            <div className="relative">
                                <div className="text-text-muted uppercase text-sm tracking-widest mb-2">Gain 1 Client (Moyenne)</div>
                                <div className="text-4xl font-bold text-green-400">25 € <span className="text-sm font-normal text-gray-500">/ coupe</span></div>
                            </div>

                        </div>
                    </div>

                    <div className="bg-primary/10 p-8 border-t border-primary/20 text-center">
                        <h3 className="text-2xl font-bold text-white mb-4 flex items-center justify-center gap-3">
                            <Zap className="w-6 h-6 text-primary fill-primary" />
                            Rentabilité Immédiate
                        </h3>
                        <p className="text-lg text-gray-300">
                            Il suffit que <strong>Sarah IA</strong> récupère <span className="text-white font-bold border-b border-primary">1 seul appel manqué</span> tous les 6 jours pour que l'outil soit gratuit.
                            <br /><span className="text-sm opacity-60 mt-2 block">(Et elle en prendra des dizaines par semaine.)</span>
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FinancialComparison;
