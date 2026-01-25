import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Phone, Loader2, Volume2, Mic } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AudioDemo = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [isCalling, setIsCalling] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    // Using a reliable sample URL for a professional female voice
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

    const handleCall = () => {
        setIsCalling(true);
        // Simulate call hook
        setTimeout(() => {
            if (!isPlaying) handlePlay();
            setIsCalling(false);
        }, 1500);
    };

    return (
        <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-stretch h-[600px] md:h-[500px]">
            {/* Left: Interactive Player / Phone */}
            <div className="w-full md:w-1/2 bg-[#111] rounded-3xl border border-white/10 relative overflow-hidden flex flex-col shadow-2xl group">
                {/* Background Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-[80px] group-hover:bg-primary/10 transition-colors duration-1000"></div>

                {/* Header */}
                <div className="p-6 border-b border-white/5 flex justify-between items-center relative z-10 glass-effect">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                            <Mic size={20} className="text-primary" />
                        </div>
                        <div>
                            <div className="text-base font-black text-white uppercase tracking-widest">Sarah IA</div>
                            <div className="text-xs text-green-400 font-mono flex items-center gap-2 font-bold">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                Online • 24/7
                            </div>
                        </div>
                    </div>
                    <div className="text-[10px] font-black text-white/50 tracking-widest bg-white/5 px-4 py-1.5 rounded-full border border-white/5">v2.4.0</div>
                </div>

                {/* Main Visualizer Area */}
                <div className="flex-1 flex flex-col items-center justify-center p-8 relative z-10">
                    {/* Circle Visualizer */}
                    <div className="relative w-48 h-48 mb-8 cursor-pointer group/play" onClick={handlePlay}>
                        {/* Ripples */}
                        <AnimatePresence>
                            {isPlaying && (
                                <>
                                    <motion.div initial={{ scale: 1, opacity: 0.5 }} animate={{ scale: 1.5, opacity: 0 }} transition={{ repeat: Infinity, duration: 2, ease: "easeOut" }} className="absolute inset-0 rounded-full border border-primary/30" />
                                    <motion.div initial={{ scale: 1, opacity: 0.3 }} animate={{ scale: 1.8, opacity: 0 }} transition={{ repeat: Infinity, duration: 2, ease: "easeOut", delay: 0.5 }} className="absolute inset-0 rounded-full border border-primary/20" />
                                </>
                            )}
                        </AnimatePresence>

                        {/* Main Button */}
                        <div className={`w-full h-full rounded-full bg-black border-2 flex items-center justify-center transition-all duration-300 shadow-[0_0_30px_rgba(0,0,0,0.5)] ${isPlaying ? 'border-primary shadow-[0_0_50px_rgba(212,175,55,0.2)]' : 'border-white/10 group-hover/play:border-primary/50 group-hover/play:scale-105'}`}>
                            {isPlaying ? <Pause size={48} className="text-primary" /> : <Play size={48} className="text-white ml-2 group-hover/play:text-primary transition-colors" />}
                        </div>
                    </div>

                    {/* Fake Number Display */}
                    <div className="mb-8 flex flex-col items-center">
                        <div className="text-sm text-gray-300 uppercase tracking-[0.2em] mb-4 font-black">Numéro Dédié</div>
                        <div className="text-4xl md:text-5xl font-mono text-white tracking-wider bg-gradient-to-br from-white/10 to-white/5 px-10 py-5 rounded-2xl border-2 border-white/20 select-all shadow-2xl font-black backdrop-blur-sm hover:border-primary/40 transition-colors">
                            01 44 23 12 99
                        </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full max-w-sm bg-white/5 h-1.5 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-primary box-shadow-[0_0_10px_#D4AF37]"
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                            transition={{ ease: "linear" }}
                        />
                    </div>
                </div>

                {/* Footer Actions */}
                <div className="p-6 border-t border-white/5 bg-black/50 glass-effect relative z-10">
                    <button
                        onClick={handleCall}
                        disabled={isCalling}
                        className={`w-full py-5 rounded-xl font-black uppercase tracking-[0.2em] text-sm flex items-center justify-center gap-3 transition-all transform active:scale-95 ${isCalling ? 'bg-green-600 text-white shadow-[0_0_30px_rgba(22,163,74,0.3)]' : 'bg-white text-black hover:bg-primary hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]'}`}
                    >
                        {isCalling ? (
                            <><Loader2 className="animate-spin" size={18} /> Connexion...</>
                        ) : (
                            <><Phone size={18} /> Simuler un appel entrant</>
                        )}
                    </button>
                </div>
            </div>

            {/* Right: Context / Chat Log */}
            <div className="w-full md:w-1/2 flex flex-col gap-4">
                {/* Status Card */}
                <div className="bg-[#111] border border-white/10 rounded-3xl p-8 flex flex-col justify-center h-1/3 group hover:border-primary/30 transition-colors relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-6 opacity-20"><Volume2 size={40} /></div>

                    <div className="relative z-10">
                        <div className="text-xs text-primary uppercase tracking-widest font-black mb-2">Contexte de la démo</div>
                        <div className="text-2xl font-bold text-white mb-3">Prise de RDV Complexe</div>
                        <p className="text-sm text-gray-400 leading-relaxed font-medium">
                            Sarah gère un client qui demande un créneau "Samedi fin d'aprem" et pose des questions techniques sur la "Taille barbe".
                        </p>
                    </div>
                </div>

                {/* Action Log - IMPROVED READABILITY */}
                <div className="bg-[#111] border border-white/10 rounded-3xl p-8 flex-1 overflow-hidden relative">
                    <div className="absolute top-6 right-6">
                        <div className="flex items-center gap-2 text-[10px] uppercase font-black text-primary bg-primary/10 px-3 py-1.5 rounded border border-primary/20 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                            <Loader2 size={12} className="animate-spin" /> Live Brain
                        </div>
                    </div>
                    <div className="text-sm text-gray-400 uppercase tracking-widest font-black mb-6">Journal d'actions</div>

                    <div className="space-y-8 relative z-10 h-full overflow-y-auto pr-2">
                        <div className="flex gap-5 items-start opacity-70 hover:opacity-100 transition-opacity">
                            <div className="w-0.5 h-full bg-gray-700 absolute left-[19px] top-3 -z-10"></div>
                            <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center shrink-0 border-2 border-white/20 text-sm text-white font-black shadow-lg">01</div>
                            <div>
                                <div className="text-base text-white font-black mb-1">Appel Entrant</div>
                                <div className="text-sm text-gray-400 font-mono mt-1">+33 6 12 34 ** **</div>
                            </div>
                        </div>
                        <div className="flex gap-5 items-start hover:scale-[1.02] transition-transform">
                            <div className="w-0.5 h-full bg-primary/30 absolute left-[19px] top-3 -z-10"></div>
                            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0 text-sm text-black font-black shadow-[0_0_20px_rgba(212,175,55,0.5)] border-2 border-primary">02</div>
                            <div>
                                <div className="text-base text-white font-black mb-2">Détection d'intention</div>
                                <div className="text-xs text-primary mt-2 bg-primary/10 px-4 py-2 rounded-lg border border-primary/20 w-fit font-mono font-bold tracking-wide shadow-inner">Intent: BOOK_APPOINTMENT</div>
                            </div>
                        </div>
                        <div className="flex gap-5 items-start opacity-80 hover:opacity-100 transition-opacity">
                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 border-2 border-white/20 text-sm text-white font-black shadow-md">03</div>
                            <div className="flex-1">
                                <div className="text-base text-white font-black mb-3">Vérification Planity</div>
                                <div className="w-full h-12 bg-black/80 rounded-xl border-2 border-white/20 relative overflow-hidden flex items-center px-4 gap-3 shadow-inner">
                                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_limegreen]"></div>
                                    <div className="text-xs text-gray-300 font-mono font-bold">Checking slots... Found: 16:30</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AudioDemo;
