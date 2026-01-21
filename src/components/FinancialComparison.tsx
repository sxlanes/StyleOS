import { Zap, Coffee, TrendingUp, CheckCircle2 } from 'lucide-react';

const FinancialComparison = () => {
    return (
        <section className="py-24 bg-surface/20 border-y border-glass-border relative overflow-hidden">
            <div className="max-w-5xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 uppercase tracking-tight">
                        L'INVESTISSEMENT <span className="text-primary">INTELLIGENT</span>
                    </h2>
                    <p className="text-text-muted max-w-2xl mx-auto text-lg">
                        Ne le voyez pas comme une dépense. C'est votre machine à cash.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-center">

                    {/* The Cost */}
                    <div className="bg-black/40 border border-white/10 rounded-3xl p-8 flex flex-col items-center text-center relative overflow-hidden">
                        <div className="p-4 bg-white/5 rounded-full mb-6">
                            <Coffee className="w-8 h-8 text-gray-400" />
                        </div>
                        <h3 className="text-gray-400 font-bold uppercase tracking-wider text-sm mb-2">Coût Quotidien</h3>
                        <div className="text-5xl font-bold text-white mb-2">4 €</div>
                        <p className="text-gray-500 text-sm">Moins cher qu'un café Starbucks.</p>
                    </div>

                    {/* The Gain */}
                    <div className="bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-3xl p-8 flex flex-col items-center text-center relative overflow-hidden shadow-[0_0_40px_rgba(212,175,55,0.1)]">
                        <div className="absolute top-0 right-0 px-3 py-1 bg-[#D4AF37] text-black text-[10px] font-bold uppercase rounded-bl-xl tracking-wider">
                            Rentabilité
                        </div>
                        <div className="p-4 bg-[#D4AF37]/20 rounded-full mb-6">
                            <TrendingUp className="w-8 h-8 text-[#D4AF37]" />
                        </div>
                        <h3 className="text-[#D4AF37] font-bold uppercase tracking-wider text-sm mb-2">Gain avec 1 SEUL RDV sauvé</h3>
                        <div className="text-5xl font-bold text-white mb-2">25 €</div>
                        <p className="text-[#D4AF37]/80 text-sm">Un seul client récupéré paye votre semaine.</p>
                    </div>

                </div>

                <div className="mt-12 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-green-500/20 rounded-full mt-1">
                            <CheckCircle2 className="w-6 h-6 text-green-400" />
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-white mb-2">Le Calcul est Simple</h4>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Si Sarah (l'IA) répond au téléphone quand vous êtes occupé et prend <strong>juste 1 rendez-vous par semaine</strong> que vous auriez manqué...
                                <span className="text-white font-bold"> StyleOS est 100% remboursé.</span>
                                <br />Tout le reste, c'est du bonus pour vous.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FinancialComparison;
