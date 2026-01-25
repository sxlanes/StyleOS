import { useState, useEffect } from 'react';
import { TrendingUp, AlertCircle, CheckCircle2, DollarSign, Calculator, Users, HelpCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const RevenueSimulator = () => {
    const [clients, setClients] = useState(150);
    const averageTicket = 45;
    const revenue = clients * averageTicket;
    const commissionRate = 2.5;

    // Calculations
    const currentCommissions = Math.round(revenue * (commissionRate / 100));
    const styleOSCost = 109;
    const savings = currentCommissions - styleOSCost;
    const yearlySavings = savings * 12;

    // ROI Multiplier
    const roiMultiplier = (yearlySavings / (styleOSCost * 12)).toFixed(1);

    return (
        <div className="w-full max-w-5xl mx-auto rounded-[3rem] border border-white/10 bg-[#0A0A0A] overflow-hidden shadow-2xl relative">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />
            
            <div className="p-8 md:p-16 border-b border-white/5 relative z-10 text-center">
                <div className="inline-flex items-center gap-3 mb-12 px-6 py-2 bg-primary/10 rounded-full border border-primary/20">
                    <Users className="w-5 h-5 text-primary" />
                    <span className="text-xs font-black text-primary uppercase tracking-[0.3em]">Ajustez votre volume</span>
                </div>

                <div className="mb-16">
                    <h4 className="text-gray-500 text-xs font-black uppercase tracking-[0.4em] mb-4">Clients par mois</h4>
                    <div className="text-7xl md:text-9xl font-black text-white tracking-tighter mb-8 tabular-nums">
                        {clients}
                    </div>
                    
                    <div className="relative max-w-2xl mx-auto px-4">
                        <style>{`
                            input[type=range]::-webkit-slider-thumb {
                                -webkit-appearance: none;
                                height: 40px;
                                width: 40px;
                                border-radius: 50%;
                                background: #D4AF37;
                                cursor: pointer;
                                border: 4px solid white;
                                shadow: 0 0 30px rgba(212, 175, 55, 0.8);
                                transition: all 0.2s ease;
                            }
                            input[type=range]::-webkit-slider-thumb:hover {
                                scale: 1.1;
                                box-shadow: 0 0 40px rgba(212, 175, 55, 1);
                            }
                        `}</style>
                        <input
                            type="range"
                            min="20"
                            max="1000"
                            step="10"
                            value={clients}
                            onChange={(e) => setClients(Number(e.target.value))}
                            className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer focus:outline-none"
                        />
                        <div className="flex justify-between mt-6 text-[10px] text-gray-500 font-black uppercase tracking-widest">
                            <span>20 clients</span>
                            <span>1000+ clients</span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap justify-center gap-8 opacity-60">
                    <div className="flex items-center gap-2">
                        <DollarSign size={16} className="text-primary" />
                        <span className="text-sm font-bold">CA Estimé: {revenue.toLocaleString()}€/mois</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Calculator size={16} className="text-primary" />
                        <span className="text-sm font-bold">Ticket Moyen: {averageTicket}€</span>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 relative z-10">


                {/* Left: The OLD Way */}
                <div className="p-8 md:p-12 bg-black/40 border-r border-white/5 flex flex-col justify-between group">
                    <div>
                        <div className="flex items-center gap-2 mb-6 opacity-60">
                            <AlertCircle className="w-4 h-4 text-gray-500" />
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">Modèle Classique</span>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h4 className="text-[9px] font-black uppercase tracking-widest text-gray-600 mb-1">Coût Variable ({commissionRate}%)</h4>
                                <div className="text-3xl font-black text-red-500/80 tracking-tighter">
                                    {currentCommissions}€ <span className="text-xs font-bold text-gray-600">/ mois</span>
                                </div>
                            </div>
                            <div className="opacity-40">
                                <h4 className="text-[9px] font-black uppercase tracking-widest text-gray-600 mb-1">Coût Annuel</h4>
                                <div className="text-xl font-black text-gray-400 tracking-tighter">
                                    {(currentCommissions * 12).toLocaleString()}€
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: The StyleOS Way */}
                <div className="p-8 md:p-12 bg-gradient-to-br from-primary/5 via-black to-black flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[50px] rounded-full" />

                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <CheckCircle2 className="w-4 h-4 text-primary" />
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Modèle StyleOS</span>
                        </div>

                        <div className="space-y-6 relative z-10">
                            <div>
                                <h4 className="text-[9px] font-black uppercase tracking-widest text-primary/60 mb-1">Coût Fixe</h4>
                                <div className="text-4xl font-black text-white tracking-tighter">
                                    {styleOSCost}€ <span className="text-xs font-bold text-gray-400">/ mois</span>
                                </div>
                            </div>

                            <div>
                                <h4 className="text-[9px] font-black uppercase tracking-widest text-emerald-500 mb-1">Économies Annuelles</h4>
                                <div className="text-3xl font-black text-emerald-400 tracking-tighter flex items-center gap-2">
                                    + {yearlySavings > 0 ? yearlySavings.toLocaleString() : 0}€
                                    <TrendingUp className="w-5 h-5" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar: ROI Summary */}
            <div className="bg-primary text-black p-4 flex items-center justify-center gap-4">
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">Retour sur Investissement</span>
                <span className="text-xl font-black tracking-tighter">x{roiMultiplier}</span>
            </div>
        </div>
    );
};

export default RevenueSimulator;
