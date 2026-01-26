import { Star, MessageCircle, ThumbsUp, TrendingUp, ArrowLeft, Send, Bot, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ReviewsDemo = () => {

    const reviews = [
        {
            id: 1,
            author: "Thomas R.",
            rating: 5,
            date: "Il y a 2 heures",
            content: "Super expérience ! J'ai pris RDV pour une coupe + barbe à la dernière minute. Le salon est magnifique et l'équipe au top. Je recommande à 100%.",
            platform: "Google",
            status: "answered",
            response: "Merci beaucoup Thomas ! Ravi que le combo Coupe + Barbe vous ait plu. On fait le maximum pour vous trouver des créneaux qui arrangent tout le monde. À très vite au salon ! 💈",
            autoResponse: true
        }
    ];

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-primary selection:text-black">
            {/* Header */}
            <div className="border-b border-white/10 bg-black/50 backdrop-blur-md sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Link to="/" className="p-2 hover:bg-white/10 rounded-full transition-colors">
                            <ArrowLeft size={20} />
                        </Link>
                        <h1 className="text-lg font-bold">Gestion des Avis & Réputation</h1>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="bg-green-500/10 text-green-500 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-2 border border-green-500/20">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                            IA Active
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-8">
                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <div className="bg-[#111] border border-white/10 p-6 rounded-2xl relative overflow-hidden group hover:border-primary/30 transition-colors">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                        <div className="flex items-center gap-3 mb-4 text-gray-400">
                            <Star size={18} />
                            <span className="text-xs font-bold uppercase tracking-wider">Note Moyenne</span>
                        </div>
                        <div className="text-4xl font-black text-white mb-2">4.9<span className="text-lg text-gray-500">/5</span></div>
                        <div className="text-xs text-green-500 flex items-center gap-1 font-bold">
                            <TrendingUp size={12} /> +0.2 vs mois dernier
                        </div>
                    </div>

                    <div className="bg-[#111] border border-white/10 p-6 rounded-2xl relative overflow-hidden group hover:border-primary/30 transition-colors">
                        <div className="flex items-center gap-3 mb-4 text-gray-400">
                            <MessageCircle size={18} />
                            <span className="text-xs font-bold uppercase tracking-wider">Total Avis</span>
                        </div>
                        <div className="text-4xl font-black text-white mb-2">1,248</div>
                        <div className="text-xs text-gray-500">Depuis le début</div>
                    </div>

                    <div className="bg-[#111] border border-white/10 p-6 rounded-2xl relative overflow-hidden group hover:border-primary/30 transition-colors">
                        <div className="flex items-center gap-3 mb-4 text-gray-400">
                            <Bot size={18} className="text-primary" />
                            <span className="text-xs font-bold uppercase tracking-wider text-primary">Réponses Auto</span>
                        </div>
                        <div className="text-4xl font-black text-white mb-2">98%</div>
                        <div className="text-xs text-gray-500">Taux de couverture</div>
                    </div>

                    <div className="bg-gradient-to-br from-primary/20 to-[#111] border border-primary/20 p-6 rounded-2xl relative overflow-hidden group hover:border-primary/40 transition-colors">
                        <div className="flex items-center gap-3 mb-4 text-primary">
                            <ThumbsUp size={18} />
                            <span className="text-xs font-bold uppercase tracking-wider">Impact SEO</span>
                        </div>
                        <div className="text-4xl font-black text-white mb-2">Top 1</div>
                        <div className="text-xs text-primary/80">Sur "Coiffeur [Ville]"</div>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Reviews List */}
                    <div className="lg:col-span-2 space-y-4">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-xl font-bold">Derniers Avis</h2>
                            <div className="flex gap-2">
                                <button className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-bold hover:bg-white/10 transition-colors">Filtrer</button>
                                <button className="px-4 py-2 bg-primary text-black border border-primary rounded-full text-xs font-bold hover:bg-primary/90 transition-colors">Tout Voir</button>
                            </div>
                        </div>

                        {reviews.map((review) => (
                            <motion.div
                                key={review.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="bg-[#111] border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center font-bold text-white border border-white/10">
                                            {review.author.charAt(0)}
                                        </div>
                                        <div>
                                            <div className="font-bold text-sm text-white">{review.author}</div>
                                            <div className="flex items-center gap-2 text-xs text-gray-500">
                                                <span>{review.platform}</span>
                                                <span>•</span>
                                                <span>{review.date}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} size={14} fill={i < review.rating ? "#D4AF37" : "none"} className={i < review.rating ? "text-primary" : "text-gray-700"} />
                                        ))}
                                    </div>
                                </div>

                                <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                                    "{review.content}"
                                </p>

                                {review.autoResponse && (
                                    <div className="bg-white/5 rounded-xl p-4 border border-white/5 relative">
                                        <div className="absolute -left-3 top-4 w-6 h-6 bg-[#222] border border-white/10 rounded-full flex items-center justify-center">
                                            <Bot size={12} className="text-primary" />
                                        </div>
                                        <div className="ml-4">
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="text-[10px] font-bold text-primary uppercase tracking-wider">Réponse Automatique StyleOS</span>
                                                <CheckCircle2 size={12} className="text-green-500" />
                                            </div>
                                            <p className="text-xs text-gray-400 italic">
                                                "{review.response}"
                                            </p>
                                        </div>
                                    </div>
                                )}

                                {!review.autoResponse && (
                                    <div className="flex gap-3">
                                        <input type="text" placeholder="Rédiger une réponse..." className="flex-1 bg-black border border-white/10 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-primary/50 transition-colors" />
                                        <button className="p-2 bg-primary text-black rounded-full hover:bg-primary/90 transition-colors">
                                            <Send size={16} />
                                        </button>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>

                    {/* Sidebar / Configuration */}
                    <div className="space-y-6">
                        <div className="bg-[#111] border border-white/10 rounded-2xl p-6">
                            <h3 className="font-bold text-lg mb-6">Configuration IA</h3>

                            <div className="space-y-6">
                                <div>
                                    <label className="flex items-center justify-between text-sm font-medium mb-2">
                                        <span>Réponse Automatique</span>
                                        <div className="w-10 h-6 bg-primary rounded-full relative cursor-pointer">
                                            <div className="absolute right-1 top-1 w-4 h-4 bg-black rounded-full shadow-sm"></div>
                                        </div>
                                    </label>
                                    <p className="text-xs text-gray-500">L'IA répondra automatiquement aux avis 4 et 5 étoiles.</p>
                                </div>

                                <div>
                                    <label className="text-sm font-medium mb-3 block">Ton de voix</label>
                                    <div className="grid grid-cols-2 gap-2">
                                        <button className="px-3 py-2 bg-primary/20 border border-primary/50 text-white rounded-lg text-xs font-bold">Professionnel</button>
                                        <button className="px-3 py-2 bg-white/5 border border-white/10 text-gray-400 rounded-lg text-xs hover:bg-white/10">Amical</button>
                                    </div>
                                </div>

                                <div>
                                    <label className="text-sm font-medium mb-3 block">Délai de réponse</label>
                                    <div className="w-full bg-black h-2 rounded-full overflow-hidden border border-white/10">
                                        <div className="w-1/3 h-full bg-primary"></div>
                                    </div>
                                    <div className="flex justify-between text-[10px] text-gray-500 mt-2">
                                        <span>Immédiat</span>
                                        <span className="text-white font-bold">~ 5 min</span>
                                        <span>1 heure</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-b from-[#111] to-black border border-white/10 rounded-2xl p-6 text-center">
                            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4 border border-white/10">
                                <TrendingUp size={20} className="text-green-500" />
                            </div>
                            <h3 className="font-bold text-white mb-2">Boostez votre visibilité</h3>
                            <p className="text-xs text-gray-400 mb-6">
                                Les salons avec +100 avis positifs remontent automatiquement en 1ère position Google Maps.
                            </p>
                            <button className="w-full py-3 bg-white/5 border border-white/10 rounded-xl text-xs font-bold hover:bg-white/10 hover:border-white/20 transition-all text-white">
                                Voir mon classement Google
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewsDemo;
