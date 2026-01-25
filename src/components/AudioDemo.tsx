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
            {/* Main Grid - 2 rows x 2 cols */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">

                {/* Row 1, Col 1: Audio Player */}
                <div className="bg-gradient-to-br from-[#0a0a0a] to-black rounded-3xl border border-white/10 p-10 relative overflow-hidden group hover:border-primary/30 transition-all">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors"></div>

                    <div className="relative z-10 flex flex-col items-center text-center">
                        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 mb-6">
                            <Volume2 size={28} className="text-primary" />
                        </div>

                        <div className="text-sm font-bold text-white mb-2">Écouter Sarah</div>
                        <div className="text-xs text-gray-500 mb-8">Démonstration vocale</div>

                        {/* Play Button */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handlePlay}
                            className={`w-24 h-24 rounded-full flex items-center justify-center transition-all mb-6 ${isPlaying ? 'bg-primary shadow-[0_0_30px_rgba(212,175,55,0.4)]' : 'bg-white/10 hover:bg-white/20'} border-2 ${isPlaying ? 'border-primary' : 'border-white/20'}`}
                        >
                            {isPlaying ? <Pause size={40} className="text-black" /> : <Play size={40} className="text-white ml-1" />}
                        </motion.button>

                        {/* Progress Bar */}
                        <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-primary rounded-full"
                                initial={{ width: 0 }}
                                animate={{ width: `${progress}%` }}
                                transition={{ ease: "linear" }}
                            />
                        </div>
                    </div>
                </div>

                {/* Row 1, Col 2: Phone Number */}
                <div className="bg-gradient-to-br from-[#0a0a0a] to-black rounded-3xl border border-white/10 p-10 relative overflow-hidden group hover:border-green-500/30 transition-all">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 rounded-full blur-3xl group-hover:bg-green-500/10 transition-colors"></div>

                    <div className="relative z-10 flex flex-col items-center text-center h-full justify-between">
                        <div>
                            <div className="w-14 h-14 rounded-2xl bg-green-500/10 flex items-center justify-center border border-green-500/20 mb-6 mx-auto">
                                <Phone size={28} className="text-green-400" />
                            </div>

                            <div className="text-sm font-bold text-white mb-2">Appeler Sarah</div>
                            <div className="text-xs text-gray-500 mb-6">Numéro de démonstration</div>

                            <a
                                href="tel:+33144231299"
                                className="block text-center text-3xl font-mono font-black text-white bg-white/5 px-6 py-5 rounded-2xl border border-white/10 hover:border-green-500/40 hover:bg-white/10 transition-all"
                            >
                                +33 1 44 23 12 99
                            </a>
                        </div>

                        <div className="text-xs text-gray-500 text-center mt-4">
                            Testez Sarah en direct 24/7
                        </div>
                    </div>
                </div>
            </div>

            {/* Row 2 - Full Width Items */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* WhatsApp */}
                <div className="bg-gradient-to-br from-[#0a0a0a] to-black rounded-3xl border border-white/10 p-10 relative overflow-hidden group hover:border-blue-500/30 transition-all">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-blue-500/10 transition-colors"></div>

                    <div className="relative z-10 flex flex-col items-center text-center h-full justify-between">
                        <div>
                            <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20 mb-6 mx-auto">
                                <MessageSquare size={28} className="text-blue-400" />
                            </div>

                            <div className="text-sm font-bold text-white mb-2">Conversation</div>
                            <div className="text-xs text-gray-500 mb-6">Exemple WhatsApp</div>
                        </div>

                        <button
                            onClick={() => setShowWhatsApp(!showWhatsApp)}
                            className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold py-4 px-6 rounded-2xl hover:from-blue-500 hover:to-blue-400 transition-all flex items-center justify-center gap-2 shadow-lg"
                        >
                            Voir la conversation <ArrowRight size={18} />
                        </button>
                    </div>
                </div>

                {/* Calendar Control Explanation */}
                <div className="bg-gradient-to-br from-[#0a0a0a] to-black rounded-3xl border border-white/10 p-10 relative overflow-hidden group hover:border-primary/30 transition-all">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>

                    <div className="relative z-10 flex items-start gap-6">
                        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 shrink-0">
                            <Calendar size={28} className="text-primary" />
                        </div>

                        <div className="flex-1">
                            <h3 className="text-base font-black text-white uppercase mb-3">Contrôle Total du Calendrier</h3>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                Sarah IA est directement connectée à votre agenda Planity. Elle vérifie en temps réel les disponibilités,
                                réserve automatiquement les créneaux et envoie les confirmations par SMS. <span className="text-white font-bold">100% automatisé, 100% fiable.</span>
                            </p>
                        </div>
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
