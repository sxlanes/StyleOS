import { useState } from 'react';
import { TrendingUp, AlertCircle, CheckCircle2, DollarSign, Calculator, Users, Scissors, PhoneMissed } from 'lucide-react';

const RevenueSimulator = () => {
    const [clients, setClients] = useState(250);
    const [ticketPrice, setTicketPrice] = useState(45);
    const [missedCalls, setMissedCalls] = useState(2); // Per day

    // Constants
    const commissionRate = 2.5; // Average competitor fee per appointment/transaction
    const styleOSCost = 109; // Pro plan average

    // Calculations
    const monthlyRevenue = clients * ticketPrice;
    const competitorCost = Math.round(monthlyRevenue * (commissionRate / 100));

    // Missed Opportunity: calls * ticket * working days (approx 22) * 12 months
    // Assuming 1 call = 1 potential appointment
    const monthlyMissedRevenue = missedCalls * ticketPrice * 22;
    const yearlyMissedRevenue = monthlyMissedRevenue * 12;

    const monthlySavings = competitorCost - styleOSCost;
    const yearlySavings = monthlySavings * 12;

    // Total potential gain (Savings + Recovered Revenue)
    const totalPotentialGain = yearlySavings + yearlyMissedRevenue;

    return (
        <div className="w-full max-w-6xl mx-auto rounded-[3rem] border border-white/10 bg-[#0A0A0A] overflow-hidden shadow-2xl relative group hover:border-white/20 transition-all duration-500">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />

            <div className="p-8 md:p-12 border-b border-white/5 relative z-10">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-3 px-6 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
                        <Calculator className="w-4 h-4 text-primary" />
                        <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">Calculateur de Profit</span>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-12 md:px-6">
                    {/* Slider 1: Clients */}
                    <div>
                        <div className="flex justify-between items-end mb-6">
                            <label className="text-xs font-black uppercase tracking-[0.2em] text-gray-500 flex items-center gap-2">
                                <Users size={14} /> Clients / Mois
                            </label>
                            <div className="text-3xl font-black text-white tracking-tighter tabular-nums">{clients}</div>
                        </div>
                        <style>{`
                            input[type=range]::-webkit-slider-thumb {
                                -webkit-appearance: none;
                                height: 24px;
                                width: 24px;
                                border-radius: 50%;
                                background: #D4AF37;
                                cursor: pointer;
                                border: 4px solid #1a1a1a;
                                box-shadow: 0 0 10px rgba(212, 175, 55, 0.5);
                                transition: all 0.2s ease;
                            }
                            input[type=range]::-webkit-slider-thumb:hover {
                                transform: scale(1.2);
                                box-shadow: 0 0 20px rgba(212, 175, 55, 0.8);
                            }
                        `}</style>
                        <input
                            type="range"
                            min="50"
                            max="1000"
                            step="10"
                            value={clients}
                            onChange={(e) => setClients(Number(e.target.value))}
                            className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer focus:outline-none accent-primary"
                        />
                        <div className="flex justify-between mt-3 text-[10px] text-gray-600 font-bold uppercase tracking-widest">
                            <span>50</span>
                            <span>1000+</span>
                        </div>
                    </div>

                    {/* Slider 2: Ticket Price */}
                    <div>
                        <div className="flex justify-between items-end mb-6">
                            <label className="text-xs font-black uppercase tracking-[0.2em] text-gray-500 flex items-center gap-2">
                                <Scissors size={14} /> Prix Moyen
                            </label>
                            <div className="text-3xl font-black text-white tracking-tighter tabular-nums">{ticketPrice}€</div>
                        </div>
                        <input
                            type="range"
                            min="15"
                            max="150"
                            step="5"
                            value={ticketPrice}
                            onChange={(e) => setTicketPrice(Number(e.target.value))}
                            className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer focus:outline-none accent-primary"
                        />
                        <div className="flex justify-between mt-3 text-[10px] text-gray-600 font-bold uppercase tracking-widest">
                            <span>15€</span>
                            <span>150€+</span>
                        </div>
                    </div>

                    {/* Slider 3: Missed Calls */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-red-500/5 blur-xl -z-10 rounded-full opacity-50"></div>
                        <div className="flex justify-between items-end mb-6">
                            <label className="text-xs font-black uppercase tracking-[0.2em] text-red-400 flex items-center gap-2">
                                <PhoneMissed size={14} /> Appels Perdus / Jour
                            </label>
                            <div className="text-3xl font-black text-white tracking-tighter tabular-nums">{missedCalls}</div>
                        </div>
                        <input
                            type="range"
                            min="0"
                            max="20"
                            step="1"
                            value={missedCalls}
                            onChange={(e) => setMissedCalls(Number(e.target.value))}
                            className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer focus:outline-none accent-red-500"
                            style={{ accentColor: '#ef4444' }}
                        />
                        <div className="flex justify-between mt-3 text-[10px] text-gray-600 font-bold uppercase tracking-widest">
                            <span>0</span>
                            <span>20+</span>
                        </div>
                        <div className="mt-4 text-sm text-red-500 font-black text-center bg-red-500/20 py-3 px-4 rounded-xl border-2 border-red-500/40 shadow-[0_0_20px_rgba(239,68,68,0.2)] animate-pulse">
                            PERTE: -{monthlyMissedRevenue.toLocaleString()}€ / MOIS
                        </div>
                    </div>
                </div>
            </div>

            {/* 3 Info Boxes */}
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/5 bg-black/40">

                {/* Box 1: Missed Revenue Loss */}
                <div className="p-8 md:p-10 flex flex-col justify-between bg-red-900/10 border border-red-500/20 relative overflow-hidden group/loss hover:bg-red-900/20 transition-all">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-red-500/10 to-transparent opacity-50"></div>
                    {/* Pulse Effect */}
                    <div className="absolute top-4 right-4 w-3 h-3 bg-red-500 rounded-full animate-ping opacity-75"></div>
                    <div className="absolute top-4 right-4 w-3 h-3 bg-red-500 rounded-full"></div>

                    <div className="flex items-center gap-2 mb-4 relative z-10">
                        <PhoneMissed className="w-5 h-5 text-red-500" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-red-400">Pertes Appels / Mois</span>
                    </div>
                    <div className="relative z-10">
                        <div className="text-4xl font-black text-red-500 tracking-tighter mb-1 tabular-nums drop-shadow-[0_0_10px_rgba(239,68,68,0.5)]">
                            -{monthlyMissedRevenue.toLocaleString()}€
                        </div>
                        <div className="text-[9px] text-red-400/80 uppercase tracking-widest font-bold">
                            Ne laissez plus cet argent s'envoler
                        </div>
                    </div>
                </div>

                {/* Box 1.5 (Middle): Commission Cost */}
                <div className="p-8 md:p-10 flex flex-col justify-between hover:bg-white/[0.02] transition-colors group/box1 border-r border-white/5 md:border-r-0 md:border-b-0">
                    <div className="flex items-center gap-2 mb-4 opacity-70 group-hover/box1:opacity-100 transition-opacity">
                        <AlertCircle className="w-4 h-4 text-red-500" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Coût Commissions</span>
                    </div>
                    <div>
                        <div className="text-3xl font-black text-red-500/80 tracking-tighter mb-1 tabular-nums group-hover/box1:text-red-500 transition-colors">
                            {competitorCost}€
                        </div>
                        <div className="text-[9px] text-gray-600 uppercase tracking-widest font-bold">Frais Plateforme / mois</div>
                    </div>
                </div>

                {/* Box 2: StyleOS Cost */}
                <div className="p-8 md:p-10 flex flex-col justify-between hover:bg-white/[0.02] transition-colors relative overflow-hidden group/box2">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 blur-xl rounded-full"></div>
                    <div className="flex items-center gap-2 mb-4 group-hover/box2:scale-105 transition-transform origin-left">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">Coût StyleOS</span>
                    </div>
                    <div>
                        <div className="text-3xl font-black text-white tracking-tighter mb-1 tabular-nums">
                            {styleOSCost}€
                        </div>
                        <div className="text-[9px] text-gray-500 uppercase tracking-widest font-bold">Forfait Fixe "Pro" / mois</div>
                    </div>
                </div>

                {/* Box 3: Total Potential Gain */}
                <div className="p-8 md:p-10 flex flex-col justify-between bg-gradient-to-br from-primary/10 via-black to-black relative group/savings overflow-hidden">
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover/savings:opacity-100 transition-opacity pointer-events-none"></div>
                    <div className="flex items-center gap-2 mb-4 relative z-10">
                        <TrendingUp className="w-4 h-4 text-green-400 animate-pulse" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-green-400">Gain Potentiel Total</span>
                    </div>
                    <div className="relative z-10">
                        <div className="text-4xl font-black text-green-400 tracking-tighter mb-1 tabular-nums drop-shadow-[0_0_15px_rgba(74,222,128,0.2)]">
                            +{(totalPotentialGain > 0 ? totalPotentialGain : 0).toLocaleString()}€
                        </div>
                        <div className="text-[9px] text-primary/60 uppercase tracking-widest font-bold">
                            Économies + Revenus Récupérés / An
                        </div>
                    </div>
                </div>
            </div>

            {/* Total Revenue Indicator */}
            <div className="bg-[#111] p-4 text-center border-t border-white/5 flex items-center justify-center gap-3">
                <DollarSign size={14} className="text-gray-500" />
                <span className="text-[10px] text-gray-500 uppercase tracking-widest">Base de calcul: Chiffre d'Affaires Mensuel Estimé de <span className="text-white font-bold">{monthlyRevenue.toLocaleString()}€</span></span>
            </div>
        </div>
    );
};

export default RevenueSimulator;
