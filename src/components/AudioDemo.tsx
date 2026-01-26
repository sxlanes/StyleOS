import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Phone, Volume2, Calendar, MessageSquare, ArrowRight, Check, Clock, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const AudioDemo = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    // French female voice sample URL (Hosted or external reliable source)
    const AUDIO_URL = "https://cdn.pixabay.com/download/audio/2022/03/24/audio_c8c8a7346b.mp3?filename=voice-demo.mp3";

    useEffect(() => {
        audioRef.current = new Audio(AUDIO_URL);
        audioRef.current.onended = () => setIsPlaying(false);
        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current = null;
            }
        };
    }, []);

    const handlePlay = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.currentTime = 0; // Restart for demo purposes
            audioRef.current.play().catch(e => console.error("Audio playback failed", e));
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                {/* LEFT SIDE: Text + 4 Boxes */}
                <div className="flex flex-col gap-8 order-2 lg:order-1">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-6">
                            L'IA qui <span className="text-primary">Décroche</span><br />
                            pour vous.
                        </h2>
                        <p className="text-gray-400 text-lg font-light leading-relaxed max-w-xl">
                            Sarah gère les appels, note les rendez-vous directement dans votre agenda (Planity, Booksy) et répond aux questions fréquentes. Ne manquez plus jamais un client.
                        </p>
                    </div>

                    {/* 4 Feature Boxes Grid */}
                    <div className="grid grid-cols-2 gap-4">
                        {/* Box 1: Green (Reliable) */}
                        <div className="bg-[#111] p-5 rounded-2xl border border-green-500/20 flex flex-col items-start gap-3 hover:bg-green-500/5 transition-colors group">
                            <div className="p-2 bg-green-500/10 rounded-lg text-green-400 group-hover:scale-110 transition-transform">
                                <ShieldCheck size={20} />
                            </div>
                            <div>
                                <div className="text-2xl font-black text-white">100%</div>
                                <div className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Fiabilité</div>
                            </div>
                        </div>

                        {/* Box 2: Blue (Fast) */}
                        <div className="bg-[#111] p-5 rounded-2xl border border-blue-500/20 flex flex-col items-start gap-3 hover:bg-blue-500/5 transition-colors group">
                            <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400 group-hover:scale-110 transition-transform">
                                <Clock size={20} />
                            </div>
                            <div>
                                <div className="text-2xl font-black text-white">0.4s</div>
                                <div className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Réponse</div>
                            </div>
                        </div>

                        {/* Box 3: Yellow (24/7) */}
                        <div className="bg-[#111] p-5 rounded-2xl border border-yellow-500/20 flex flex-col items-start gap-3 hover:bg-yellow-500/5 transition-colors group">
                            <div className="p-2 bg-yellow-500/10 rounded-lg text-yellow-400 group-hover:scale-110 transition-transform">
                                <Phone size={20} />
                            </div>
                            <div>
                                <div className="text-2xl font-black text-white">24/7</div>
                                <div className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Support</div>
                            </div>
                        </div>

                        {/* Box 4: Agenda Sync (Purple) */}
                        <div className="bg-[#111] p-5 rounded-2xl border border-purple-500/20 flex flex-col items-start gap-3 hover:bg-purple-500/5 transition-colors group">
                            <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400 group-hover:scale-110 transition-transform">
                                <Calendar size={20} />
                            </div>
                            <div>
                                <div className="text-lg font-black text-white leading-tight mb-1">Agenda Sync</div>
                                <div className="text-[9px] text-gray-400 uppercase tracking-widest font-bold">Planity • Booksy</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE: WhatsApp Mockup */}
                <div className="relative order-1 lg:order-2">

                    {/* "Pruebame" Arrow Pointer */}
                    <div className="absolute -top-12 -right-4 md:-right-12 z-50 flex flex-col items-center animate-bounce">
                        <span className="text-primary font-black uppercase tracking-widest text-sm bg-black/80 px-3 py-1 rounded-full border border-primary/30 mb-2">
                            Pruebame
                        </span>
                        <ArrowRight className="text-primary rotate-90" size={24} />
                    </div>

                    {/* Phone Mockup Frame */}
                    <div className="bg-[#0b141a] rounded-[2.5rem] border-8 border-[#1f2c34] overflow-hidden relative shadow-2xl h-[650px] max-w-sm mx-auto">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 bg-[url('https://camo.githubusercontent.com/854a93c27d64274c4f8c5a0b6ec34ce1bed9dd84/68747470733a2f2f7765622e77686174736170702e636f6d2f696d672f62672d636861742d74696c652d6461726b5f61346265353132653731393562366237333364393131303234303838396634342e706e67')] opacity-40 mix-blend-overlay"></div>

                        {/* WhatsApp Header */}
                        <div className="relative z-10 bg-[#202c33] px-4 py-3 flex items-center justify-between shadow-md">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center relative">
                                    <span className="text-black font-black text-lg">S</span>
                                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#202c33] rounded-full"></div>
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="text-white font-bold text-sm">Sarah IA</h3>
                                    <span className="text-xs text-gray-400">En ligne</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-5">
                                <a href="tel:+33144231299" className="text-primary hover:text-white transition-colors relative group">
                                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-md animate-pulse"></div>
                                    <Phone size={22} className="relative z-10" />
                                </a>
                                <Volume2 size={22} className="text-gray-400" />
                            </div>
                        </div>

                        {/* Chat Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 relative z-10">

                            {/* Time Badge */}
                            <div className="flex justify-center my-4">
                                <span className="bg-[#1f2c34] text-gray-400 text-[10px] px-2 py-1 rounded-lg uppercase font-bold shadow-sm">Aujourd'hui</span>
                            </div>

                            {/* User Message */}
                            <div className="flex justify-end">
                                <div className="bg-[#005c4b] text-white p-3 rounded-2xl rounded-tr-none shadow-sm max-w-[85%] text-sm">
                                    Bonjour, je voudrais prendre RDV pour samedi.
                                    <div className="flex justify-end items-end gap-1 mt-1 opacity-70">
                                        <span className="text-[10px]">10:42</span>
                                        <Check size={12} className="text-blue-300" />
                                    </div>
                                </div>
                            </div>

                            {/* Sarah Audio Message */}
                            <div className="flex justify-start w-full">
                                <div className="bg-[#202c33] p-3 rounded-2xl rounded-tl-none shadow-sm max-w-[90%] border border-white/5 w-full">
                                    <div className="flex items-center gap-3">
                                        <button
                                            onClick={handlePlay}
                                            className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0 hover:scale-105 transition-transform shadow-lg"
                                        >
                                            {isPlaying ? <Pause size={18} className="text-black fill-black" /> : <Play size={18} className="text-black fill-black ml-0.5" />}
                                        </button>
                                        <div className="flex-1">
                                            <div className="h-1 bg-white/10 rounded-full overflow-hidden mb-1">
                                                <motion.div
                                                    className="h-full bg-primary"
                                                    animate={{ width: isPlaying ? "100%" : "0%" }}
                                                    transition={{ duration: 15, ease: "linear" }}
                                                />
                                            </div>
                                            <div className="flex justify-between text-[10px] text-gray-400 font-mono">
                                                <span>{isPlaying ? "Ecoute..." : "0:15"}</span>
                                                <span>10:42</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-2 text-xs text-gray-400 italic pt-2 border-t border-white/5">
                                        "Bonjour ! Oui, avec plaisir. Quel créneau vous intéresse ?"
                                    </div>
                                </div>
                            </div>

                            {/* User Message 2 */}
                            <div className="flex justify-end">
                                <div className="bg-[#005c4b] text-white p-3 rounded-2xl rounded-tr-none shadow-sm max-w-[85%] text-sm">
                                    Disons 14h00.
                                    <div className="flex justify-end items-end gap-1 mt-1 opacity-70">
                                        <span className="text-[10px]">10:43</span>
                                        <Check size={12} className="text-blue-300" />
                                    </div>
                                </div>
                            </div>

                            {/* System Notification */}
                            <div className="flex justify-center">
                                <div className="bg-[#1f2c34] text-[#ffd279] text-[10px] px-3 py-1.5 rounded-lg border border-[#ffd279]/20 shadow-lg flex items-center gap-2">
                                    <Calendar size={10} />
                                    <span>RDV confirmé : Samedi 14h</span>
                                </div>
                            </div>
                        </div>

                        {/* Input Area */}
                        <div className="relative z-10 bg-[#202c33] p-3 flex items-center gap-3 border-t border-white/5">
                            <span className="text-gray-400 text-xl">+</span>
                            <div className="flex-1 bg-[#2a3942] h-9 rounded-full border border-white/5 px-4 flex items-center text-gray-400 text-sm">Message...</div>
                            <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center">
                                <MessageSquare size={16} className="text-black fill-black" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AudioDemo;
