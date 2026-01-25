import { useState } from 'react';
import { LayoutDashboard, Users, Calendar, Wallet, ArrowUpRight, TrendingUp, UserCheck, Clock, ArrowLeft, MoreHorizontal, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const DashboardDemoPage = () => {
    const [period, setPeriod] = useState('This Month');

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-primary selection:text-black">
            {/* Nav */}
            <nav className="border-b border-white/5 bg-black/50 backdrop-blur-xl fixed w-full z-50">
                <div className="max-w-[1600px] mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-6">
                        <Link to="/" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
                            <ArrowLeft size={14} /> Retour
                        </Link>
                        <div className="h-6 w-[1px] bg-white/10"></div>
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center font-bold text-black border border-white/20">S</div>
                            <span className="font-bold tracking-tight">StyleOS <span className="text-gray-500 font-normal">Dashboard</span></span>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-full border border-white/10 text-xs">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-gray-400">Live Data</span>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/10 relative">
                            <Bell size={14} />
                            <div className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border border-black"></div>
                        </div>
                    </div>
                </div>
            </nav>

            <main className="pt-24 pb-12 px-6 max-w-[1600px] mx-auto">
                <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <h1 className="text-3xl font-light text-gray-400 mb-2">Bonjour, <span className="text-white font-bold">L'Atelier Barber</span></h1>
                        <p className="text-sm text-gray-500">Voici vos performances en temps réel.</p>
                    </div>
                    <div className="flex bg-white/5 rounded-lg p-1 border border-white/10">
                        {['Day', 'Week', 'Month', 'Year'].map((p) => (
                            <button
                                key={p}
                                onClick={() => setPeriod(p)}
                                className={`px-4 py-2 rounded-md text-xs font-bold uppercase tracking-wider transition-all ${period === p ? 'bg-primary text-black shadow-lg' : 'text-gray-400 hover:text-white'}`}
                            >
                                {p}
                            </button>
                        ))}
                    </div>
                </header>

                {/* KPI Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {/* KPI 1 */}
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-6 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity"><ArrowUpRight className="text-white/20" /></div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-primary/10 rounded-lg text-primary border border-primary/20"><Wallet size={18} /></div>
                            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Revenu Total</span>
                        </div>
                        <div className="text-3xl font-black text-white mb-2 tracking-tight">12,450€</div>
                        <div className="flex items-center gap-2 text-xs">
                            <span className="text-green-500 font-bold bg-green-500/10 px-1.5 py-0.5 rounded border border-green-500/20 flex items-center gap-1"><TrendingUp size={10} /> +12%</span>
                            <span className="text-gray-600">vs période préc.</span>
                        </div>
                    </motion.div>

                    {/* KPI 2 */}
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-6 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity"><ArrowUpRight className="text-white/20" /></div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500 border border-blue-500/20"><Users size={18} /></div>
                            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Nouveaux Clients</span>
                        </div>
                        <div className="text-3xl font-black text-white mb-2 tracking-tight">48</div>
                        <div className="flex items-center gap-2 text-xs">
                            <span className="text-green-500 font-bold bg-green-500/10 px-1.5 py-0.5 rounded border border-green-500/20 flex items-center gap-1"><TrendingUp size={10} /> +8%</span>
                            <span className="text-gray-600">Organic Growth</span>
                        </div>
                    </motion.div>

                    {/* KPI 3 */}
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-6 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity"><ArrowUpRight className="text-white/20" /></div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-purple-500/10 rounded-lg text-purple-500 border border-purple-500/20"><Calendar size={18} /></div>
                            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">RDV Honorés</span>
                        </div>
                        <div className="text-3xl font-black text-white mb-2 tracking-tight">156</div>
                        <div className="flex items-center gap-2 text-xs">
                            <span className="text-purple-500 font-bold bg-purple-500/10 px-1.5 py-0.5 rounded border border-purple-500/20">98% Taux</span>
                            <span className="text-gray-600">Participation</span>
                        </div>
                    </motion.div>

                    {/* KPI 4 */}
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-6 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity"><ArrowUpRight className="text-white/20" /></div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-amber-500/10 rounded-lg text-amber-500 border border-amber-500/20"><UserCheck size={18} /></div>
                            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Ticket Moyen</span>
                        </div>
                        <div className="text-3xl font-black text-white mb-2 tracking-tight">72€</div>
                        <div className="flex items-center gap-2 text-xs">
                            <span className="text-green-500 font-bold bg-green-500/10 px-1.5 py-0.5 rounded border border-green-500/20 flex items-center gap-1"><TrendingUp size={10} /> +4€</span>
                            <span className="text-gray-600">vs M-1</span>
                        </div>
                    </motion.div>
                </div>

                {/* Main Content Area */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Chart Area */}
                    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 }} className="lg:col-span-2 bg-[#0A0A0A] border border-white/10 rounded-2xl p-8">
                        <div className="flex items-center justify-between mb-8">
                            <h3 className="text-lg font-bold text-white">Analyse des Revenus</h3>
                            <button className="text-gray-500 hover:text-white p-2 hover:bg-white/5 rounded-lg"><MoreHorizontal size={16} /></button>
                        </div>

                        <div className="h-64 flex items-end gap-2 md:gap-4 relative">
                            {/* Grid Lines */}
                            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
                                <div className="border-t border-dashed border-gray-600 w-full h-px"></div>
                                <div className="border-t border-dashed border-gray-600 w-full h-px"></div>
                                <div className="border-t border-dashed border-gray-600 w-full h-px"></div>
                                <div className="border-t border-dashed border-gray-600 w-full h-px"></div>
                            </div>

                            {/* Bars */}
                            {[35, 45, 30, 60, 75, 50, 65, 80, 70, 90, 85, 95, 60, 75].map((h, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ height: 0 }}
                                    animate={{ height: `${h}%` }}
                                    transition={{ duration: 1, delay: i * 0.05 }}
                                    className="flex-1 bg-white/5 rounded-t-sm hover:bg-primary transition-colors relative group"
                                >
                                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                        {h * 12}€
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                        <div className="flex justify-between mt-4 text-[10px] text-gray-500 uppercase tracking-widest font-mono">
                            <span>01 Jan</span>
                            <span>15 Jan</span>
                            <span>30 Jan</span>
                        </div>
                    </motion.div>

                    {/* Agent Status */}
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }} className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-8 flex flex-col">
                        <h3 className="text-lg font-bold text-white mb-6">Activité Sarah IA</h3>

                        <div className="flex-1 space-y-6">
                            <div className="flex items-start gap-4 pb-6 border-b border-white/5">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary border border-primary/20 shrink-0">
                                    <Clock size={16} />
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-white mb-1">RDV Confirmé @ 14:30</div>
                                    <div className="text-xs text-gray-500 mb-2">Client: Marc D. pour "Coupe Classique"</div>
                                    <span className="text-[10px] bg-green-500/10 text-green-500 px-2 py-0.5 rounded border border-green-500/20 font-bold uppercase">Automatique</span>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 pb-6 border-b border-white/5">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white border border-white/10 shrink-0">
                                    <Users size={16} />
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-white mb-1">Nouveau Prospect</div>
                                    <div className="text-xs text-gray-500 mb-2">Appel manqué re-contacté par Sarah</div>
                                    <span className="text-[10px] bg-blue-500/10 text-blue-500 px-2 py-0.5 rounded border border-blue-500/20 font-bold uppercase">+45€ Potentiel</span>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white border border-white/10 shrink-0">
                                    <Bell size={16} />
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-white mb-1">Rappel SMS Envoyé</div>
                                    <div className="text-xs text-gray-500 mb-2">Campagne de fidélisation (M-3)</div>
                                    <span className="text-[10px] bg-white/10 text-gray-300 px-2 py-0.5 rounded border border-white/10 font-bold uppercase">Succès</span>
                                </div>
                            </div>
                        </div>

                        <button className="w-full mt-8 py-3 rounded-xl bg-white text-black font-bold uppercase tracking-widest text-xs hover:bg-primary transition-colors">
                            Voir tout l'historique
                        </button>
                    </motion.div>
                </div>
            </main>
        </div>
    );
};

export default DashboardDemoPage;
