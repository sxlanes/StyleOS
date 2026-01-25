import { useState } from 'react';
import { ArrowLeft, Megaphone, TrendingUp, Users, Target, MousePointer2, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const MarketingDashboardDemoPage = () => {
    return (
        <div className="min-h-screen bg-black text-white font-sans p-6">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center gap-4 mb-8">
                    <Link to="/" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                        <ArrowLeft size={20} />
                    </Link>
                    <h1 className="text-2xl font-bold uppercase tracking-widest">Marketing & Visibilité <span className="text-primary">Dashboard</span></h1>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                    {/* KPI 1 */}
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="p-6 rounded-2xl bg-[#0F0F0F] border border-white/10">
                        <div className="flex items-center gap-3 text-gray-400 mb-2">
                            <Megaphone size={16} />
                            <span className="text-xs font-bold uppercase tracking-widest">Portée Totale</span>
                        </div>
                        <div className="text-4xl font-black text-white mb-2">128.5k</div>
                        <div className="text-xs text-green-500 font-bold">+24% vs mois dernier</div>
                    </motion.div>

                    {/* KPI 2 */}
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="p-6 rounded-2xl bg-[#0F0F0F] border border-white/10">
                        <div className="flex items-center gap-3 text-gray-400 mb-2">
                            <MousePointer2 size={16} />
                            <span className="text-xs font-bold uppercase tracking-widest">Clics (CTR)</span>
                        </div>
                        <div className="text-4xl font-black text-white mb-2">3.2%</div>
                        <div className="text-xs text-green-500 font-bold">Top 5% Secteur Beauté</div>
                    </motion.div>

                    {/* KPI 3 */}
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="p-6 rounded-2xl bg-[#0F0F0F] border border-white/10">
                        <div className="flex items-center gap-3 text-gray-400 mb-2">
                            <Target size={16} />
                            <span className="text-xs font-bold uppercase tracking-widest">Coût conversion</span>
                        </div>
                        <div className="text-4xl font-black text-white mb-2">4.50€</div>
                        <div className="text-xs text-green-500 font-bold">-12% (Optimisation AI)</div>
                    </motion.div>
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left: Active Campaigns */}
                    <div className="lg:col-span-2 space-y-6">
                        <h2 className="text-lg font-bold uppercase tracking-widest mb-4 flex items-center gap-2"><TrendingUp size={18} className="text-primary" /> Campagnes Actives</h2>

                        {/* Campaign Card 1 */}
                        <div className="bg-[#111] p-6 rounded-2xl border border-white/10 flex items-center gap-6 group hover:border-primary/30 transition-colors">
                            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shrink-0">
                                <Megaphone className="text-white" size={24} />
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-start mb-1">
                                    <h3 className="text-lg font-bold text-white">Instagram "Summer Vibes"</h3>
                                    <span className="bg-green-500/20 text-green-500 text-[10px] font-black uppercase px-2 py-1 rounded">Active</span>
                                </div>
                                <p className="text-xs text-gray-400 mb-4">Ciblage: Femmes 25-40ans • Bordeaux Centre</p>
                                <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                                    <div className="bg-primary w-[70%] h-full"></div>
                                </div>
                                <div className="flex justify-between text-[10px] text-gray-500 mt-2 font-mono">
                                    <span>Budget: 350€ / 500€</span>
                                    <span>ROI Actuel: 4.2x</span>
                                </div>
                            </div>
                        </div>

                        {/* Campaign Card 2 */}
                        <div className="bg-[#111] p-6 rounded-2xl border border-white/10 flex items-center gap-6 group hover:border-primary/30 transition-colors">
                            <div className="w-16 h-16 rounded-xl bg-blue-600 flex items-center justify-center shrink-0">
                                <Target className="text-white" size={24} />
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-start mb-1">
                                    <h3 className="text-lg font-bold text-white">Google Ads "Coiffeur Bordeaux"</h3>
                                    <span className="bg-green-500/20 text-green-500 text-[10px] font-black uppercase px-2 py-1 rounded">Active</span>
                                </div>
                                <p className="text-xs text-gray-400 mb-4">Mots clés: Coiffeur, Barbershop, Coloriste</p>
                                <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                                    <div className="bg-blue-500 w-[45%] h-full"></div>
                                </div>
                                <div className="flex justify-between text-[10px] text-gray-500 mt-2 font-mono">
                                    <span>Budget: 150€ / 300€</span>
                                    <span>Pos. Moyenne: 1.2</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: AI Suggestions */}
                    <div className="bg-[#111] p-6 rounded-2xl border border-primary/20 relative overflow-hidden">
                        <div className="absolute inset-0 bg-primary/5 pointer-events-none"></div>
                        <h2 className="text-lg font-bold uppercase tracking-widest mb-6 flex items-center gap-2 relative z-10"><Users size={18} className="text-primary" /> Suggestions IA</h2>

                        <div className="space-y-4 relative z-10">
                            <div className="p-4 bg-black/40 rounded-xl border border-white/5">
                                <div className="text-[10px] text-primary font-bold uppercase mb-2">Opportunité détectée</div>
                                <p className="text-xs text-gray-300 leading-relaxed">
                                    Les jeudis après-midi sont calmes. Lancez une offre flash "-15% Étudiant" ciblée sur Instagram Stories ?
                                </p>
                                <button className="mt-4 w-full py-2 bg-primary text-black text-xs font-black uppercase rounded hover:bg-[#c5a065] transition-colors">Lancer la campagne</button>
                            </div>

                            <div className="p-4 bg-black/40 rounded-xl border border-white/5">
                                <div className="text-[10px] text-primary font-bold uppercase mb-2">Optimisation</div>
                                <p className="text-xs text-gray-300 leading-relaxed">
                                    Votre campagne Google Ads "Barbe" a un score de qualité faible (4/10). Nous avons généré de nouveaux mots-clés.
                                </p>
                                <button className="mt-4 w-full py-2 bg-white/10 text-white text-xs font-black uppercase rounded hover:bg-white/20 transition-colors">Voir les mots-clés</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MarketingDashboardDemoPage;
