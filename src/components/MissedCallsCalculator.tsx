import { useState } from 'react';
import { ArrowRight, PhoneMissed } from 'lucide-react';

const MissedCallsCalculator = () => {
    const [price, setPrice] = useState(25);
    const [calls, setCalls] = useState(2);

    // Calculation: Calls * Price * 5 days * 52 weeks
    const yearlyLoss = price * calls * 5 * 52;

    return (
        <div className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5">
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-4">
                    Le Calcul est <span className="text-primary italic">Simple.</span>
                </h2>
                <p className="text-gray-400 text-sm max-w-xl mx-auto">
                    Visualisez instantanément le manque à gagner que vous laissez sur la table chaque année.
                </p>
            </div>

            <div className="w-full max-w-4xl mx-auto bg-[#0A0A0A] rounded-[2rem] border border-white/10 p-2 md:p-4 grid md:grid-cols-2 gap-4 items-stretch shadow-2xl relative overflow-hidden">
                {/* Left: Inputs */}
                <div className="p-8 space-y-12 flex flex-col justify-center">
                    {/* Slider 1 */}
                    <div>
                        <div className="flex justify-between mb-4">
                            <label className="text-xs font-black uppercase tracking-widest text-white">Prix Coupe</label>
                            <span className="text-xl font-black text-white">€{price}</span>
                        </div>
                        <input
                            type="range" min="15" max="100" step="1"
                            value={price} onChange={(e) => setPrice(Number(e.target.value))}
                            className="w-full h-1 bg-gray-800 rounded-full appearance-none cursor-pointer accent-primary"
                        />
                        <style>{`
                                input[type=range]::-webkit-slider-thumb {
                                    -webkit-appearance: none;
                                    height: 24px;
                                    width: 24px;
                                    border-radius: 50%;
                                    background: #D4AF37;
                                    box-shadow: 0 0 10px rgba(212,175,55,0.5);
                                    margin-top: -10px;
                                }
                                input[type=range]::-moz-range-thumb {
                                    height: 24px;
                                    width: 24px;
                                    border-radius: 50%;
                                    background: #D4AF37;
                                    box-shadow: 0 0 10px rgba(212,175,55,0.5);
                                    border: none;
                                }
                                input[type=range] {
                                    background-color: rgba(255,255,255,0.1);
                                    height: 2px;
                                }
                           `}</style>
                    </div>

                    {/* Slider 2 */}
                    <div>
                        <div className="flex justify-between mb-4">
                            <label className="text-xs font-black uppercase tracking-widest text-white">Appels / Jour</label>
                            <span className="text-xl font-black text-white">{calls}</span>
                        </div>
                        <input
                            type="range" min="1" max="20" step="1"
                            value={calls} onChange={(e) => setCalls(Number(e.target.value))}
                            className="w-full h-1 bg-gray-800 rounded-full appearance-none cursor-pointer accent-primary"
                        />
                    </div>
                </div>

                {/* Right: Result */}
                <div className="bg-black rounded-2xl p-8 flex flex-col items-center justify-center text-center border border-white/5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 blur-[60px] rounded-full pointer-events-none" />

                    <div className="text-[10px] uppercase font-black tracking-[0.2em] text-gray-500 mb-6">Manque à gagner annuel</div>
                    <div className="text-5xl md:text-6xl font-black text-white tracking-tighter mb-8">
                        €{yearlyLoss.toLocaleString('de-DE')}
                    </div>

                    <div className="bg-green-500/10 border border-green-500/20 text-green-500 px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2 animate-pulse">
                        <ArrowRight size={14} /> Sécurisé par StyleOS
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MissedCallsCalculator;
