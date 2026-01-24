import { useState, useEffect } from 'react';
import { TrendingUp, AlertCircle, CheckCircle2, DollarSign, Calculator, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const RevenueSimulator = () => {
    const [revenue, setRevenue] = useState(15000);
    const [commissionRate, setCommissionRate] = useState(2.5); // Standard booking fee

    // Calculations
    const currentCommissions = Math.round(revenue * (commissionRate / 100));
    const styleOSCost = 109; // Fixed
    const savings = currentCommissions - styleOSCost;
    const yearlySavings = savings * 12;
    // Approximating reservations based on 45€ average ticket
    const reservations = Math.round(revenue / 45);

    // ROI Multiplier
    const roiMultiplier = (yearlySavings / (styleOSCost * 12)).toFixed(1);

    return (
        <div className="w-full max-w-5xl mx-auto rounded-[3rem] border border-white/10 bg-[#0A0A0A] overflow-hidden shadow-2xl relative">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

            {/* Header / Input Section */}
            <div className="p-8 md:p-12 border-b border-white/5 relative z-10">
                <div className="flex items-center gap-3 mb-8">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary border border-primary/20">
                        <Calculator className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-black text-white uppercase tracking-wider">Simulateur de Profit</h3>
                </div>

                <div className="space-y-8">
                    {/* Revenue Slider */}
                    <div>
                        <div className="flex justify-between items-end mb-4">
                            <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">Chiffre d'Affaire Réservations</span>
                            <div className="text-right">
                                <div className="text-3xl font-black text-white tracking-tighter mb-1">{revenue.toLocaleString()} €</div>
                                <div className="text-xs font-bold text-primary flex items-center justify-end gap-1">
                                    <Users size={12} /> ~{reservations} rendez-vous / mois
                                </div>
                            </div>
                        </div>
                        <input
                            type="range"
                            min="2000"
                            max="50000"
                            step="500"
                            value={revenue}
                            onChange={(e) => setRevenue(Number(e.target.value))}
                            className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary hover:accent-primary/80 transition-all"
                        />
                        <div className="flex justify-between mt-2 text-[10px] text-gray-600 font-bold uppercase tracking-widest">
                            <span>2k€</span>
                            <span>50k€</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Results / Comparison Split */}
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
