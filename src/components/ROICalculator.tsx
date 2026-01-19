import { useState } from 'react';
import { Calculator, ArrowRight } from 'lucide-react';

const ROICalculator = () => {
    const [price, setPrice] = useState(25);
    const [missedCalls, setMissedCalls] = useState(2);

    // Calculation: Calls * Price * 5 days * 52 weeks
    const annualLost = missedCalls * price * 5 * 52;

    return (
        <section className="py-24 bg-background">
            {/* Custom Slider Styles */}
            <style>{`
                input[type=range] {
                    -webkit-appearance: none; 
                    background: transparent; 
                }
                
                input[type=range]::-webkit-slider-thumb {
                    -webkit-appearance: none;
                    height: 28px;
                    width: 28px;
                    border-radius: 50%;
                    background: #D4AF37;
                    cursor: pointer;
                    margin-top: -12px; 
                    box-shadow: 0 0 10px rgba(212, 175, 55, 0.5);
                    transition: all 0.2s ease;
                }

                input[type=range]::-webkit-slider-thumb:hover {
                    box-shadow: 0 0 20px rgba(212, 175, 55, 0.8);
                    transform: scale(1.1);
                }

                input[type=range]::-webkit-slider-runnable-track {
                    width: 100%;
                    height: 4px;
                    cursor: pointer;
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 2px;
                }
                
                /* Firefox */
                input[type=range]::-moz-range-thumb {
                    height: 28px;
                    width: 28px;
                    border: none;
                    border-radius: 50%;
                    background: #D4AF37;
                    cursor: pointer;
                    box-shadow: 0 0 10px rgba(212, 175, 55, 0.5);
                }
                
                input[type=range]::-moz-range-track {
                    width: 100%;
                    height: 4px;
                    cursor: pointer;
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 2px;
                }
            `}</style>

            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
                        <Calculator className="w-8 h-8 text-primary" />
                        LES CHIFFRES SONT CLAIRS
                    </h2>
                    <p className="text-text-muted">Visualisez le revenu que vous offrez à vos concurrents.</p>
                </div>

                <div className="glass-card p-10 rounded-3xl border border-glass-border max-w-2xl mx-auto">

                    {/* Inputs */}
                    <div className="space-y-8 mb-12">
                        <div>
                            <div className="flex justify-between mb-4">
                                <label className="text-white font-medium">Prix Moyen d'une Coupe</label>
                                <span className="text-primary font-bold text-xl">€{price}</span>
                            </div>
                            <input
                                type="range"
                                min="10" max="100"
                                value={price}
                                onChange={(e) => setPrice(Number(e.target.value))}
                                className="w-full focus:outline-none"
                            />
                        </div>

                        <div>
                            <div className="flex justify-between mb-4">
                                <label className="text-white font-medium">Appels Manqués par Jour</label>
                                <span className="text-primary font-bold text-xl">{missedCalls}</span>
                            </div>
                            <input
                                type="range"
                                min="0" max="20"
                                value={missedCalls}
                                onChange={(e) => setMissedCalls(Number(e.target.value))}
                                className="w-full focus:outline-none"
                            />
                        </div>
                    </div>

                    {/* Result */}
                    <div className="text-center bg-black/50 p-6 rounded-2xl border border-glass-border">
                        <div className="text-text-muted text-sm uppercase tracking-wider mb-2">Revenu Annuel Potentiel</div>
                        <div className="text-5xl md:text-6xl font-bold text-primary mb-4 transition-all duration-300">
                            €{annualLost.toLocaleString()}
                        </div>
                        <div className="flex items-center justify-center gap-2 text-white">
                            <span className="text-green-500 flex items-center gap-1"><ArrowRight className="w-4 h-4" /> Sécurisé par StyleOS</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ROICalculator;
