import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Phone, Volume2, Calendar, MessageSquare, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AudioDemo = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [showWhatsApp, setShowWhatsApp] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const AUDIO_URL = "https://cdn.pixabay.com/audio/2022/03/24/audio_c8c8a7346b.mp3";

    useEffect(() => {
        if (isPlaying) {
            const interval = setInterval(() => {
                if (audioRef.current) {
                    setProgress((audioRef.current.currentTime / audioRef.current.duration) * 100);
                }
            }, 100);
            return () => clearInterval(interval);
        }
    }, [isPlaying]);

    const handlePlay = () => {
        if (!audioRef.current) {
            audioRef.current = new Audio(AUDIO_URL);
            audioRef.current.onended = () => {
                setIsPlaying(false);
                setProgress(0);
            };
        }

        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play().catch(e => console.error("Audio playback failed", e));
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="w-full max-w-7xl mx-auto">
            {/* Main Grid - Asymmetric 3 columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">

                {/* 1. Audio Player - Primary (Span 2) */}
                <div className="md:col-span-2 bg-gradient-to-br from-[#0a0a0a] via-[#111] to-black rounded-[2rem] border border-white/10 p-8 md:p-12 relative overflow-hidden group hover:border-primary/40 transition-all shadow-2xl">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] group-hover:bg-primary/10 transition-colors pointer-events-none"></div>

                    <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12 h-full">
                        <div className="flex-1 text-center md:text-left">
                            <div className="inline-flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                                    <Volume2 size={24} className="text-primary" />
                                </div>
                                <span className="text-primary font-bold tracking-widest uppercase text-xs">Démonstration Audio</span>
                            </div>
                            <h3 className="text-3xl font-black text-white mb-4 tracking-tight">Écoutez Sarah en Action</h3>
                            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                                Découvrez comment notre IA gère les appels avec un naturel déconcertant. Aucune attente, réponse immédiate.
                            </p>
                        </div>

                        <div className="flex flex-col items-center gap-6 w-full md:w-auto">
                            {/* Play Button */}
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={handlePlay}
                                className={`w-24 h-24 rounded-full flex items-center justify-center transition-all ${isPlaying ? 'bg-primary shadow-[0_0_40px_rgba(212,175,55,0.5)] scale-110' : 'bg-white/5 hover:bg-white/10 border border-white/10'} backdrop-blur-md relative z-10`}
                            >
                                {isPlaying ? <Pause size={32} className="text-black fill-black" /> : <Play size={32} className="text-white ml-2 fill-white" />}
                                {isPlaying && (
                                    <span className="absolute inset-0 rounded-full animate-ping bg-primary/50 -z-10"></span>
                                )}
                            </motion.button>

                            {/* Waveform Visualization (Fake) */}
                            <div className="flex items-center gap-1 h-8">
                                {[...Array(20)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className="w-1 bg-primary/50 rounded-full"
                                        animate={{ height: isPlaying ? [10, 30, 10] : 4 }}
                                        transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.05, ease: "easeInOut" }}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* Progress Bar Bottom */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-white/5">
                        <motion.div
                            className="h-full bg-gradient-to-r from-primary to-yellow-200"
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                            transition={{ ease: "linear" }}
                        />
                    </div>
                </div>

                {/* 2. Phone Number - Secondary (Span 1) */}
                <div className="md:col-span-1 bg-[#0a0a0a] rounded-[2rem] border border-white/5 p-8 relative overflow-hidden group hover:border-green-500/30 transition-all flex flex-col items-center justify-center text-center">
                    <div className="absolute inset-0 bg-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center border border-green-500/20 mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Phone size={32} className="text-green-500" />
                    </div>
                    <h4 className="text-white font-bold text-lg mb-2">Appeler Sarah</h4>
                    <p className="text-gray-500 text-xs mb-6">Testez par vous-même 24/7</p>
                    <a href="tel:+33144231299" className="text-xl font-mono font-black text-white/90 border-b border-white/20 pb-1 hover:text-green-400 hover:border-green-500 transition-all">
                        01 44 23 12 99
                    </a>
                </div>

                {/* 3. WhatsApp - Primary (Span 2) */}
                <div className="md:col-span-2 bg-gradient-to-r from-[#0a0a0a] to-[#0f1214] rounded-[2rem] border border-white/10 p-8 md:p-12 relative overflow-hidden group hover:border-blue-500/30 transition-all shadow-2xl order-last md:order-none">
                    <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-blue-500/5 rounded-full blur-[80px] group-hover:bg-blue-500/10 transition-colors pointer-events-none"></div>

                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="flex-1">
                            <div className="inline-flex items-center gap-3 mb-4">
                                <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20">
                                    <MessageSquare size={18} className="text-blue-400" />
                                </div>
                                <span className="text-blue-400 font-bold tracking-widest uppercase text-xs">WhatsApp Business</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Conversation Naturelle</h3>
                            <button
                                onClick={() => setShowWhatsApp(!showWhatsApp)}
                                className="group/btn flex items-center gap-3 bg-white text-black px-6 py-3 rounded-full font-bold text-sm hover:bg-blue-50 transition-colors"
                            >
                                Voir la Conversation
                                <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                            </button>
                        </div>

                        {/* Mock Preview */}
                        <div className="w-full md:w-64 bg-[#0b141a] rounded-xl border border-white/10 p-4 relative transform rotate-3 group-hover:rotate-0 transition-transform duration-500 shadow-xl opacity-80 group-hover:opacity-100">
                            <div className="flex flex-col gap-3 text-[10px]">
                                <div className="self-end bg-[#005c4b] text-white p-2 rounded-lg rounded-tr-none">Dispo ce weekend ?</div>
                                <div className="self-start bg-[#202c33] text-white p-2 rounded-lg rounded-tl-none">Oui, j'ai 2 créneaux samedi matin ! ✂️</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 4. Calendar - Secondary (Span 1) */}
                <div className="md:col-span-1 bg-[#0a0a0a] rounded-[2rem] border border-white/5 p-8 relative overflow-hidden group hover:border-purple-500/30 transition-all flex flex-col justify-between">
                    <div className="absolute inset-0 bg-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative z-10">
                        <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center border border-purple-500/20 mb-6">
                            <Calendar size={24} className="text-purple-400" />
                        </div>
                        <h4 className="text-white font-bold text-lg mb-2">Agenda</h4>
                        <p className="text-gray-400 text-xs leading-relaxed">
                            Synchro temps réel avec Planity & Booksy.
                        </p>
                    </div>

                    <div className="mt-8 flex gap-1 justify-center opacity-50">
                        {[...Array(3)].map((_, i) => (
                            <div key={i} className="w-1 h-1 rounded-full bg-white"></div>
                        ))}
                    </div>
                </div>

            </div>

            {/* WhatsApp Modal */}
            <AnimatePresence>
                {showWhatsApp && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-xl flex items-center justify-center p-6"
                        onClick={() => setShowWhatsApp(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.9 }}
                            className="w-full max-w-md bg-[#0b141a] rounded-3xl overflow-hidden shadow-2xl relative border border-white/10"
                            onClick={e => e.stopPropagation()}
                        >
                            {/* WhatsApp Header */}
                            <div className="h-16 bg-[#202c33] flex items-center px-6 gap-4 border-b border-white/5">
                                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-black font-bold">S</div>
                                <div className="flex-1">
                                    <div className="text-sm font-bold text-white">Sarah IA</div>
                                    <div className="text-xs text-green-400">En ligne • StyleOS</div>
                                </div>
                                <button onClick={() => setShowWhatsApp(false)} className="text-white/70 hover:text-white">✕</button>
                            </div>

                            {/* Messages */}
                            <div className="p-6 h-[500px] overflow-y-auto bg-[url('https://camo.githubusercontent.com/854a93c27d64274c4f8c5a0b6ec34ce1bed9dd84/68747470733a2f2f7765622e77686174736170702e636f6d2f696d672f62672d636861742d74696c652d6461726b5f61346265353132653731393562366237333364393131303234303838396634342e706e67')] bg-repeat space-y-3">
                                <div className="flex justify-start"><div className="bg-[#202c33] text-white p-3 rounded-lg rounded-tl-none max-w-[80%] text-sm">Bonjour, vous avez de la place samedi ?</div></div>
                                <div className="flex justify-end"><div className="bg-[#005c4b] text-white p-3 rounded-lg rounded-tr-none max-w-[80%] text-sm">Bonjour ! Oui, j'ai plusieurs créneaux disponibles samedi. Vous préférez le matin ou l'après-midi ?</div></div>
                                <div className="flex justify-start"><div className="bg-[#202c33] text-white p-3 rounded-lg rounded-tl-none max-w-[80%] text-sm">Plutôt fin d'après-midi si possible</div></div>
                                <div className="flex justify-end"><div className="bg-[#005c4b] text-white p-3 rounded-lg rounded-tr-none max-w-[80%] text-sm">Parfait ! J'ai 17h00 ou 18h30 de disponible. Lequel vous convient ?</div></div>
                                <div className="flex justify-start"><div className="bg-[#202c33] text-white p-3 rounded-lg rounded-tl-none max-w-[80%] text-sm">18h30 c'est bon. Avec Mathieu si possible</div></div>
                                <div className="flex justify-end"><div className="bg-[#005c4b] text-white p-3 rounded-lg rounded-tr-none max-w-[80%] text-sm">Excellent ! Je vous confirme : Samedi 18h30 avec Mathieu pour une coupe. Vous recevrez un SMS de rappel 24h avant 📅</div></div>
                                <div className="flex justify-center">
                                    <div className="text-xs text-gray-400 bg-black/40 py-2 px-4 rounded-full border border-white/5">
                                        ✓ RDV ajouté automatiquement au calendrier Planity
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default AudioDemo;
