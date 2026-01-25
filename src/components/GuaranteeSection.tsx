import { ShieldCheck, TrendingUp, Lock, CheckCircle2 } from 'lucide-react';

const GuaranteeSection = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Feature Box (Spans 2 cols on Large screens) - "ROI Guarantee" - The Hero Guarantee */}
            <div className="lg:col-span-2 group relative bg-[#0a0a0a] rounded-[2.5rem] p-8 md:p-12 border border-white/10 overflow-hidden transition-all duration-500 hover:border-primary/30">
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-8">
                    <div className="w-20 h-20 rounded-2xl bg-[#111] border border-white/10 flex items-center justify-center text-primary shrink-0 shadow-[0_0_30px_rgba(212,175,55,0.15)] group-hover:scale-110 transition-transform duration-500">
                        <TrendingUp size={40} className="stroke-[1.5]" />
                    </div>
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest mb-4">
                            Offre Limitée
                        </div>
                        <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight mb-4">
                            ROI Positif ou <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#F3E5AB]">Remboursé</span>
                        </h3>
                        <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-xl">
                            Notre promesse est mathématique : si StyleOS ne génère pas plus de valeur (économies + revenus additionnels) qu'il ne vous coûte après 90 jours, nous vous remboursons l'intégralité de vos mensualités.
                        </p>
                        <ul className="mt-6 space-y-2">
                            <li className="flex items-center gap-3 text-xs md:text-sm text-gray-300 font-medium">
                                <CheckCircle2 size={16} className="text-primary" /> Zéro risque financier pour vous
                            </li>
                            <li className="flex items-center gap-3 text-xs md:text-sm text-gray-300 font-medium">
                                <CheckCircle2 size={16} className="text-primary" /> Engagement de performance contractuel
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Vertical Stacked Box - "Freedom & Data" */}
            <div className="group relative bg-[#0a0a0a] rounded-[2.5rem] p-8 border border-white/10 overflow-hidden transition-all duration-500 hover:border-blue-500/30">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                <div className="w-14 h-14 rounded-xl bg-[#111] border border-white/10 flex items-center justify-center text-blue-500 mb-6 shadow-[0_0_20px_rgba(59,130,246,0.15)]">
                    <Lock size={24} />
                </div>
                <h3 className="text-xl font-black text-white uppercase tracking-tight mb-4 group-hover:text-blue-500 transition-colors">
                    Liberté Totale
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    Vos données vous appartiennent. Exportez votre fichier client (CSV/Excel) en 1 clic à tout moment. Pas de contrat "prison". Vous restez pour la performance, pas par contrainte.
                </p>
                <div className="h-1 bg-white/5 rounded-full overflow-hidden w-full">
                    <div className="h-full bg-blue-500 w-full animate-[shimmer_2s_infinite]" style={{ backgroundSize: '200% 100%' }}></div>
                </div>
            </div>

            {/* Bottom Card - "Audit" (Spans full width on mobile/tablet, 1 col on large) - Or maybe make it distinct */}
            <div className="lg:col-span-3 group relative bg-[#0a0a0a] rounded-[2.5rem] p-8 md:p-10 border border-white/10 overflow-hidden transition-all duration-500 hover:border-green-500/30 flex flex-col md:flex-row items-center gap-8">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                <div className="w-16 h-16 rounded-xl bg-[#111] border border-white/10 flex items-center justify-center text-green-500 shrink-0 shadow-[0_0_20px_rgba(74,222,128,0.15)]">
                    <ShieldCheck size={32} />
                </div>

                <div className="flex-1 text-center md:text-left">
                    <h3 className="text-xl font-black text-white uppercase tracking-tight mb-2 group-hover:text-green-500 transition-colors">
                        L'Audit de Transition offert
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Avant de signer quoi que ce soit, nous auditons votre salon gratuitement. Si nous ne trouvons pas au moins <span className="text-white font-bold">20% de revenus cachés</span> à récupérer immédiatement, nous refusons de travailler avec vous. Nous ne prenons que les gagnants.
                    </p>
                </div>

                <button className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-xs font-black uppercase tracking-widest hover:bg-green-500 hover:text-black hover:border-green-500 transition-all shrink-0">
                    Demander mon audit
                </button>
            </div>

        </div>
    );
};

export default GuaranteeSection;
