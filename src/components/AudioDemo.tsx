import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Phone, Volume2, Calendar, MessageSquare, ArrowRight, Check, Clock, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AudioDemo = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [showCallTooltip, setShowCallTooltip] = useState(false);

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
        <div className="w-full max-w-7xl mx-auto">
            {/* Main Grid - Asymmetric 3 columns */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-6">

                {/* 1. WhatsApp Conversation - Primary (Span 2) */}
                <div className="lg:col-span-2 bg-[#0b141a] rounded-[2.5rem] border border-white/10 overflow-hidden relative shadow-2xl group flex flex-col h-[600px]">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 bg-[url('https://camo.githubusercontent.com/854a93c27d64274c4f8c5a0b6ec34ce1bed9dd84/68747470733a2f2f7765622e77686174736170702e636f6d2f696d672f62672d636861742d74696c652d6461726b5f61346265353132653731393562366237333364393131303234303838396634342e706e67')] opacity-40 mix-blend-overlay"></div>

                    {/* Header */}
                    <div className="relative z-10 bg-[#202c33] px-6 py-4 flex items-center justify-between border-b border-white/5">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center relative">
                                <span className="text-black font-black text-xl">S</span>
                                <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-[#202c33] rounded-full"></div>
                            </div>
                            <div>
                                <h3 className="text-white font-bold text-lg">Sarah IA</h3>
                                <div className="text-green-400 text-xs font-medium flex items-center gap-1">
                                    En ligne <span className="w-1 h-1 rounded-full bg-green-400"></span> 24/7
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-4 text-gray-400">
                            <Phone size={20} className="hover:text-white cursor-pointer transition-colors" />
                            <Volume2 size={24} className="text-primary animate-pulse" />
                        </div>
                    </div>

                    {/* Chat Area */}
                    <div className="flex-1 overflow-y-auto p-6 space-y-6 relative z-10 flex flex-col">

                        {/* Message 1 (User) */}
                        <div className="self-end max-w-[80%] md:max-w-[60%]">
                            <div className="bg-[#005c4b] text-white p-4 rounded-2xl rounded-tr-none shadow-md text-sm md:text-base">
                                Bonjour, est-ce que vous avez de la place ce samedi pour une coupe ?
                                <div className="flex justify-end items-end gap-1 mt-1 opacity-70">
                                    <span className="text-[10px]">10:42</span>
                                    <Check size={12} className="text-blue-300" />
                                </div>
                            </div>
                        </div>

                        {/* Message 2 (Sarah - Audio) */}
                        <div className="self-start max-w-[85%] md:max-w-[70%] w-full">
                            <div className="bg-[#202c33] p-4 rounded-2xl rounded-tl-none border border-white/5 shadow-md">
                                <div className="flex items-center gap-4">
                                    <button
                                        onClick={handlePlay}
                                        className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0 hover:scale-105 transition-transform shadow-lg"
                                    >
                                        {isPlaying ? <Pause size={20} className="text-black fill-black" /> : <Play size={20} className="text-black fill-black ml-1" />}
                                    </button>
                                    <div className="flex-1 space-y-2">
                                        <div className="flex items-center gap-2">
                                            <div className="h-1 flex-1 bg-white/10 rounded-full overflow-hidden">
                                                <motion.div
                                                    className="h-full bg-primary"
                                                    animate={{ width: isPlaying ? "100%" : "0%" }}
                                                    transition={{ duration: 15, ease: "linear" }}
                                                />
                                            </div>
                                            <span className="text-xs text-gray-400 font-mono">0:15</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex gap-0.5 items-end h-4 opacity-50">
                                                {[...Array(30)].map((_, i) => (
                                                    <div key={i} className="w-1 bg-white/50 rounded-full" style={{ height: Math.max(4, Math.random() * 16) + 'px' }}></div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-3 text-xs text-gray-400 italic border-t border-white/5 pt-2">
                                    "Bonjour ! Oui, Absolument. J'ai un créneau à 14h00 avec Thomas ou 16h30 avec Julie. Lequel préférez-vous ?"
                                </div>
                            </div>
                        </div>

                        {/* Message 3 (User) */}
                        <div className="self-end max-w-[80%] md:max-w-[60%]">
                            <div className="bg-[#005c4b] text-white p-4 rounded-2xl rounded-tr-none shadow-md text-sm md:text-base">
                                14h00 avec Thomas c'est parfait.
                                <div className="flex justify-end items-end gap-1 mt-1 opacity-70">
                                    <span className="text-[10px]">10:43</span>
                                    <Check size={12} className="text-blue-300" />
                                </div>
                            </div>
                        </div>

                        {/* System Message */}
                        <div className="self-center my-4">
                            <div className="bg-[#1f2c34] text-[#ffd279] text-xs px-4 py-2 rounded-full border border-[#ffd279]/20 shadow-lg flex items-center gap-2">
                                <Calendar size={12} />
                                RDV confirmé : Samedi 14h00 • Ajouté à Planity
                            </div>
                        </div>

                    </div>

                    {/* Input Bar (Visual) */}
                    <div className="relative z-10 bg-[#202c33] p-4 flex items-center gap-4 border-t border-white/5">
                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400">+</div>
                        <div className="flex-1 bg-[#2a3942] h-10 rounded-full border border-white/5"></div>
                        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-black">
                            <MessageSquare size={20} className="fill-black" />
                        </div>
                    </div>
                </div>

                {/* 2. Stats & CTA Sidebar (Span 1) */}
                <div className="flex flex-col gap-6 h-full">

                    {/* CTA Card */}
                    <div className="bg-gradient-to-br from-primary/20 to-black rounded-[2rem] p-8 border border-primary/30 relative overflow-hidden group hover:scale-[1.02] transition-transform duration-500 shadow-[0_10px_40px_-10px_rgba(212,175,55,0.2)]">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[50px] rounded-full group-hover:bg-primary/30 transition-colors"></div>
                        <div className="relative z-10 text-center">
                            <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg rotate-3 group-hover:rotate-6 transition-transform">
                                <Phone size={32} className="text-black fill-black" />
                            </div>
                            <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-2">Testez Sarah</h3>
                            <p className="text-sm text-gray-300 mb-8">Appelez notre numéro de démo, elle répondra en temps réel.</p>

                            <a
                                href="tel:+33144231299"
                                className="block w-full bg-primary text-black font-black uppercase tracking-widest py-4 rounded-full hover:bg-white transition-colors shadow-lg shadow-primary/20 animate-pulse text-sm"
                            >
                                Pruebame 24/7
                            </a>
                            <div className="mt-4 text-[10px] text-gray-500 uppercase tracking-widest font-bold">Numéro non surtaxé</div>
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-4 flex-1">
                        <div className="bg-[#111] rounded-3xl p-5 border border-white/10 flex flex-col justify-center items-center text-center group hover:border-white/20 transition-all">
                            <Clock size={24} className="text-blue-400 mb-3 group-hover:scale-110 transition-transform" />
                            <div className="text-2xl font-black text-white mb-1">0.4s</div>
                            <div className="text-[10px] text-gray-400 uppercase tracking-wide font-bold">Latence</div>
                        </div>
                        <div className="bg-[#111] rounded-3xl p-5 border border-white/10 flex flex-col justify-center items-center text-center group hover:border-white/20 transition-all">
                            <ShieldCheck size={24} className="text-green-400 mb-3 group-hover:scale-110 transition-transform" />
                            <div className="text-2xl font-black text-white mb-1">100%</div>
                            <div className="text-[10px] text-gray-400 uppercase tracking-wide font-bold">Fiable</div>
                        </div>
                    </div>

                    {/* Agenda Explanation */}
                    <div className="bg-[#111] rounded-[2rem] p-6 border border-white/10 relative overflow-hidden group hover:border-primary/20 transition-all">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-purple-500/10 rounded-xl text-purple-400 border border-purple-500/20">
                                <Calendar size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold text-white text-sm">Agenda Sync</h4>
                                <p className="text-[10px] text-gray-500 uppercase tracking-wider">Planity • Booksy • Google</p>
                            </div>
                        </div>
                        <p className="text-xs text-gray-400 leading-relaxed">
                            Sarah vérifie vos disponibilités en temps réel. Elle ne propose jamais un créneau déjà pris. C'est comme avoir votre meilleure réceptionniste, mais disponible à 3h du matin.
                        </p>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default AudioDemo;
