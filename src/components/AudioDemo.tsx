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
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                            <Mic size={18} className="text-primary" />
                        </div>
                        <div>
                            <div className="text-sm font-bold text-white uppercase tracking-widest">Sarah IA</div>
                            <div className="text-[10px] text-green-500 font-mono flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                                Online • 24/7
                            </div>
                        </div>
                    </div>
                    <div className="text-xs font-bold text-white/30 tracking-widest bg-white/5 px-3 py-1 rounded-full">v2.4.0</div>
                </div>

                {/* Main Visualizer Area */}
                <div className="flex-1 flex flex-col items-center justify-center p-8 relative z-10">
                    {/* Circle Visualizer */}
                    <div className="relative w-48 h-48 mb-8 cursor-pointer" onClick={handlePlay}>
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
                        <div className={`w-full h-full rounded-full bg-black border-2 flex items-center justify-center transition-all duration-300 shadow-[0_0_30px_rgba(0,0,0,0.5)] ${isPlaying ? 'border-primary shadow-[0_0_50px_rgba(212,175,55,0.2)]' : 'border-white/10 hover:border-white/30'}`}>
                            {isPlaying ? <Pause size={48} className="text-primary" /> : <Play size={48} className="text-white ml-2" />}
                        </div>
                    </div>

                    {/* Fake Number Display */}
                    <div className="mb-6 flex flex-col items-center">
                        <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-2 font-bold">Numéro Dédié</div>
                        <div className="text-2xl font-mono text-white tracking-widest bg-white/5 px-6 py-2 rounded-lg border border-white/5 select-all">
                            01 44 23 12 99
                        </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full max-w-xs bg-white/10 h-1 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-primary"
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
                        className={`w-full py-4 rounded-xl font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-3 transition-all ${isCalling ? 'bg-green-600 text-white' : 'bg-white text-black hover:bg-primary'}`}
                    >
                        {isCalling ? (
                            <><Loader2 className="animate-spin" size={16} /> Connexion en cours...</>
                        ) : (
                            <><Phone size={16} /> Simuler un appel entrant</>
                        )}
                    </button>
                </div>
            </div>

            {/* Right: Context / Chat Log */}
            <div className="w-full md:w-1/2 flex flex-col gap-4">
                {/* Status Card */}
                <div className="bg-[#111] border border-white/10 rounded-2xl p-6 flex flex-col justify-between h-1/3 group hover:border-white/20 transition-colors">
                    <div className="flex justify-between items-start">
                        <div>
                            <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-1">Contexte</div>
                            <div className="text-lg font-bold text-white">Prise de RDV Complexe</div>
                        </div>
                        <div className="p-2 bg-white/5 rounded-lg text-gray-400"><Volume2 size={16} /></div>
                    </div>
                    <p className="text-xs text-gray-400 leading-relaxed">
                        Le client demande un créneau spécifique (Samedi fin d'aprem) et pose une question sur la "Taille barbe à l'ancienne". Sarah vérifie l'agenda en temps réel.
                    </p>
                </div>

                {/* Action Log */}
                <div className="bg-[#111] border border-white/10 rounded-2xl p-6 flex-1 overflow-hidden relative">
                    <div className="absolute top-0 right-0 p-4">
                        <div className="flex items-center gap-2 text-[9px] uppercase font-bold text-primary bg-primary/10 px-2 py-1 rounded border border-primary/20">
                            <Loader2 size={10} className="animate-spin" /> Analyse en cours
                        </div>
                    </div>
                    <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-4">Journal d'actions</div>

                    <div className="space-y-4 relative z-10 h-full overflow-y-auto">
                        <div className="flex gap-3 items-start opacity-50">
                            <div className="w-1 h-full bg-gray-800 absolute left-[11px] top-2 -z-10"></div>
                            <div className="w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center shrink-0 border border-white/10 text-[10px] text-white">01</div>
                            <div>
                                <div className="text-xs text-gray-300 font-bold">Appel Entrant</div>
                                <div className="text-[10px] text-gray-600 font-mono mt-0.5">+33 6 12 34 ** **</div>
                            </div>
                        </div>
                        <div className="flex gap-3 items-start">
                            <div className="w-1 h-full bg-primary/20 absolute left-[11px] top-2 -z-10"></div>
                            <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center shrink-0 text-[10px] text-black font-bold">02</div>
                            <div>
                                <div className="text-xs text-white font-bold">Détection d'intention</div>
                                <div className="text-[10px] text-primary mt-1 bg-primary/10 px-2 py-1 rounded border border-primary/10 w-fit">Intent: BOOK_APPOINTMENT</div>
                            </div>
                        </div>
                        <div className="flex gap-3 items-start">
                            <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/10 text-[10px] text-white">03</div>
                            <div className="flex-1">
                                <div className="text-xs text-gray-300 font-bold mb-1">Vérification Planity</div>
                                <div className="w-full h-8 bg-black rounded border border-white/10 relative overflow-hidden">
                                    <div className="absolute top-1/2 left-2 -translate-y-1/2 w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                    <div className="absolute top-1/2 left-6 -translate-y-1/2 text-[9px] text-gray-500 font-mono">Checking slots... Found: 16:30</div>
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
