import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const ROICalculator = () => {
    const [price, setPrice] = useState(25);
    const [missedCalls, setMissedCalls] = useState(2);

    // Calculation: Calls * Price * 5 days * 52 weeks
    const annualLost = missedCalls * price * 5 * 52;

    return (
        <section className="bg-black relative overflow-hidden py-12">
            <style>{`
                input[type=range] {
                    -webkit-appearance: none; 
                    background: transparent; 
                }
                
                input[type=range]::-webkit-slider-thumb {
                    -webkit-appearance: none;
                    height: 32px;
                    width: 32px;
                    border-radius: 50%;
                    background: #D4AF37;
                    cursor: pointer;
                    margin-top: -14px; 
                    box-shadow: 0 0 20px rgba(212, 175, 55, 0.4);
                    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
                }

                input[type=range]::-webkit-slider-thumb:hover {
                    box-shadow: 0 0 30px rgba(212, 175, 55, 0.7);
                    transform: scale(1.2);
                }

                input[type=range]::-webkit-slider-runnable-track {
                    width: 100%;
                    height: 4px;
                    cursor: pointer;
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 2px;
                }
            `}</style>

            <div className="max-w-5xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter uppercase text-white">
                        LE CALCUL EST <span className="text-primary italic">SIMPLE.</span>
                    </h2>
                    <p className="text-gray-400 text-xl md:text-2xl font-medium max-w-3xl mx-auto">
                        Visualisez instantanément le manque à gagner que vous laissez sur la table chaque année.
                    </p>
                </div>

                <div className="bg-black p-8 md:p-12 rounded-[2.5rem] border border-white/10 shadow-2xl">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-10">
                            <div className="transition-all duration-500 hover:translate-x-2">
                                <div className="flex justify-between mb-4 items-end">
                                    <label className="text-white text-lg md:text-xl font-black uppercase tracking-tight">Prix Coupe</label>
                                    <span className="text-primary font-black text-3xl italic">€{price}</span>
                                </div>
                                <input
                                    type="range"
                                    min="10" max="100"
                                    value={price}
                                    onChange={(e) => setPrice(Number(e.target.value))}
                                    className="w-full focus:outline-none h-8"
                                />
                            </div>

                            <div className="transition-all duration-500 hover:translate-x-2">
                                <div className="flex justify-between mb-4 items-end">
                                    <label className="text-white text-lg md:text-xl font-black uppercase tracking-tight">Appels / Jour</label>
                                    <span className="text-primary font-black text-3xl italic">{missedCalls}</span>
                                </div>
                                <input
                                    type="range"
                                    min="0" max="20"
                                    value={missedCalls}
                                    onChange={(e) => setMissedCalls(Number(e.target.value))}
                                    className="w-full focus:outline-none h-8"
                                />
                            </div>
                        </div>

                        <div className="relative">
                            {/* Inner Circle Glow */}
                            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full"></div>

                            <div className="relative bg-black p-8 md:p-12 rounded-[2rem] border border-primary/20 text-center transition-all duration-700 hover:scale-[1.02] hover:border-primary/50 group">
                                <div className="text-gray-500 text-[10px] font-black uppercase tracking-[0.4em] mb-4">Manque à Gagner Annuel</div>
                                <div className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6 group-hover:text-primary transition-colors duration-500 whitespace-nowrap overflow-hidden text-ellipsis">
                                    €{annualLost.toLocaleString()}
                                </div>
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-[9px] font-black uppercase tracking-widest animate-pulse">
                                    <ArrowRight className="w-3 h-3" /> Sécurisé par StyleOS
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ROICalculator;
