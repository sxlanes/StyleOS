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
                        <div className="text-xs text-gray-400 uppercase tracking-[0.2em] mb-3 font-bold">Numéro Dédié</div>
                        <div className="text-3xl font-mono text-white tracking-widest bg-white/5 px-8 py-3 rounded-xl border border-white/10 select-all shadow-inner font-bold">
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

                {/* Action Log */}
                <div className="bg-[#111] border border-white/10 rounded-3xl p-8 flex-1 overflow-hidden relative">
                    <div className="absolute top-6 right-6">
                        <div className="flex items-center gap-2 text-[10px] uppercase font-black text-primary bg-primary/10 px-3 py-1.5 rounded border border-primary/20 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                            <Loader2 size={12} className="animate-spin" /> Live Brain
                        </div>
                    </div>
                    <div className="text-xs text-gray-500 uppercase tracking-widest font-black mb-6">Journal d'actions</div>

                    <div className="space-y-6 relative z-10 h-full overflow-y-auto pr-2">
                        <div className="flex gap-4 items-start opacity-60">
                            <div className="w-0.5 h-full bg-gray-800 absolute left-[15px] top-3 -z-10"></div>
                            <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center shrink-0 border border-white/10 text-xs text-white font-bold">01</div>
                            <div>
                                <div className="text-sm text-gray-300 font-bold">Appel Entrant</div>
                                <div className="text-xs text-gray-500 font-mono mt-1">+33 6 12 34 ** **</div>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start">
                            <div className="w-0.5 h-full bg-primary/20 absolute left-[15px] top-3 -z-10"></div>
                            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0 text-xs text-black font-black shadow-[0_0_15px_rgba(212,175,55,0.4)]">02</div>
                            <div>
                                <div className="text-sm text-white font-bold">Détection d'intention</div>
                                <div className="text-[10px] text-primary mt-2 bg-primary/10 px-3 py-1.5 rounded border border-primary/20 w-fit font-mono font-bold tracking-wide">Intent: BOOK_APPOINTMENT</div>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start">
                            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10 text-xs text-white font-bold opacity-50">03</div>
                            <div className="flex-1 opacity-80">
                                <div className="text-sm text-gray-300 font-bold mb-2">Vérification Planity</div>
                                <div className="w-full h-10 bg-black rounded-lg border border-white/10 relative overflow-hidden flex items-center px-3 gap-3">
                                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse box-shadow-[0_0_8px_limegreen]"></div>
                                    <div className="text-[10px] text-gray-400 font-mono">Checking slots... Found: 16:30</div>
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
