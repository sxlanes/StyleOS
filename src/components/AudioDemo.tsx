import { useRef, useState, useEffect } from 'react';
import { Play, Pause, Mic, Activity, Globe, Phone, Clock, User, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AudioDemo = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [transcriptIndex, setTranscriptIndex] = useState(0);

    // Audio file path
    const audioSrc = "https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3";

    // Fake Conversation Data
    const conversation = [
        { role: 'Sarah', text: "Bonjour ! Salon StyleOS, Sarah à l'appareil.", time: 0 },
        { role: 'Client', text: "Oui bonjour, j'aimerais prendre RDV demain.", time: 2 },
        { role: 'Sarah', text: "Enchantée. Pour une coupe homme ou barbe ?", time: 4 },
        { role: 'Client', text: "Coupe homme simple s'il vous plaît.", time: 6 },
        { role: 'Sarah', text: "Très bien. J'ai un créneau à 14h30 avec Julie ?", time: 8 },
        { role: 'Client', text: "Parfait, je prends.", time: 10 },
        { role: 'Sarah', text: "C'est noté ! À demain 14h30.", time: 12 },
    ];

    useEffect(() => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.play().catch(e => console.error("Audio play failed", e));
            } else {
                audioRef.current.pause();
            }
        }
    }, [isPlaying]);

    // Simulate Transcript Progress
    useEffect(() => {
        let interval: any;
        if (isPlaying) {
            interval = setInterval(() => {
                setTranscriptIndex(prev => (prev + 1) % conversation.length);
            }, 2500); // Change line every 2.5s roughly
        } else {
            setTranscriptIndex(0);
        }
        return () => clearInterval(interval);
    }, [isPlaying]);

    const togglePlay = () => {
        setIsPlaying(!isPlaying);
    };

    // Fake visualizer bars (more of them)
    const bars = Array.from({ length: 40 }, () => Math.floor(Math.random() * 60) + 20);

    return (
        <div className="w-full max-w-5xl mx-auto rounded-[3rem] bg-black border border-white/10 overflow-hidden shadow-2xl relative group grid md:grid-cols-2">

            {/* Left: Interactive Visualizer */}
            <div className="p-8 md:p-12 relative flex flex-col justify-between bg-gradient-to-br from-gray-900 to-black border-r border-white/5">
                {/* Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[80px] rounded-full pointer-events-none group-hover:bg-primary/10 transition-colors duration-700" />

                <audio ref={audioRef} src={audioSrc} onEnded={() => setIsPlaying(false)} />

                {/* Header Info */}
                <div className="flex justify-between items-start mb-12 relative z-10">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-primary animate-pulse">
                            <Mic className="w-6 h-6" />
                        </div>
                        <div>
                            <div className="text-[10px] uppercase font-black tracking-widest text-gray-400">Appel Entrant</div>
                            <div className="text-base font-bold text-white flex items-center gap-2">
                                +33 6 12 34 ** ** <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                            </div>
                        </div>
                    </div>
                    <div className="text-right">
                        <div className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Durée</div>
                        <div className="text-sm font-mono text-primary">00:45</div>
                    </div>
                </div>

                {/* Center Play Button */}
                <div className="flex items-center justify-center mb-12 relative z-10">
                    <button
                        onClick={togglePlay}
                        className="w-24 h-24 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 hover:bg-primary hover:text-black transition-all duration-300 shadow-[0_0_50px_rgba(255,255,255,0.2)] z-20"
                    >
                        {isPlaying ? <Pause className="w-10 h-10 fill-current" /> : <Play className="w-10 h-10 fill-current ml-2" />}
                    </button>
                    {/* Ripple Effect */}
                    {isPlaying && (
                        <div className="absolute w-24 h-24 border border-white/30 rounded-full animate-[ping_2s_infinite]"></div>
                    )}
                </div>

                {/* Bottom Visualizer */}
                <div className="h-16 flex items-end justify-center gap-[2px] opacity-80">
                    {bars.map((height, i) => (
                        <div
                            key={i}
                            className={`w-1.5 rounded-t-sm transition-all duration-100 ${isPlaying ? 'bg-primary' : 'bg-white/10'}`}
                            style={{
                                height: isPlaying ? `${Math.random() * 100}%` : `${height}%`,
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Right: AI Analysis Dashboard */}
            <div className="bg-[#050505] p-8 md:p-12 relative flex flex-col">
                <div className="absolute top-4 right-4 flex gap-2">
                    <div className="px-2 py-1 bg-white/5 rounded border border-white/5 text-[9px] text-gray-400 font-mono uppercase">v2.4.0 Stable</div>
                    <div className="px-2 py-1 bg-green-500/10 rounded border border-green-500/20 text-[9px] text-green-500 font-bold uppercase flex items-center gap-1"><Activity size={10} /> Live</div>
                </div>

                <div className="mb-8">
                    <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-500 mb-6 flex items-center gap-2">
                        <MessageSquare size={14} /> Analyse Conversationnelle
                    </h3>

                    {/* Live Transcript Box */}
                    <div className="bg-white/5 border border-white/5 rounded-2xl p-6 h-64 overflow-hidden relative">
                        <div className="space-y-4">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={transcriptIndex}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="leading-relaxed"
                                >
                                    <div className="text-[10px] uppercase font-bold text-gray-500 mb-1">{conversation[transcriptIndex].role}</div>
                                    <div className={`text-lg font-medium ${conversation[transcriptIndex].role === 'Sarah' ? 'text-primary' : 'text-white'}`}>
                                        "{conversation[transcriptIndex].text}"
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                        {/* Scan Line */}
                        <div className="absolute top-0 left-0 w-full h-[2px] bg-primary/20 shadow-[0_0_20px_rgba(212,175,55,1)] animate-[scan_2s_linear_infinite]" />
                    </div>
                </div>

                {/* Detected Intent Tags */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                        <div className="flex items-center gap-2 mb-2 text-gray-400 text-[10px] uppercase font-bold">
                            <User size={12} /> Identité
                        </div>
                        <div className="text-sm font-bold text-white">Client Existant</div>
                    </div>
                    <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                        <div className="flex items-center gap-2 mb-2 text-gray-400 text-[10px] uppercase font-bold">
                            <Clock size={12} /> Intention
                        </div>
                        <div className="text-sm font-bold text-white">Prise de RDV</div>
                    </div>
                </div>

                {/* Validated Button */}
                <div className="mt-auto pt-8">
                    <div className="w-full py-4 bg-green-500/10 border border-green-500/30 rounded-xl flex items-center justify-center gap-3 text-green-500 font-bold uppercase tracking-widest text-xs animate-pulse">
                        <CheckCircle2 size={16} /> Rendez-vous Confirmé
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AudioDemo;
