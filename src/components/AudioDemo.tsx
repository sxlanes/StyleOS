import { useState, useRef, useEffect } from 'react';
import { Play, Pause, MessageSquare, Phone, Volume2, ArrowRight, Check, Calendar } from 'lucide-react';
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
        <div className="w-full max-w-7xl mx-auto">
            {/* WhatsApp Conversation - Full Width of Parent Container */}
            <div className="bg-[#0b141a] rounded-[2.5rem] border border-white/10 overflow-hidden relative shadow-2xl group flex flex-col h-[600px] w-full max-w-lg mx-auto lg:max-w-none">
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
                    <div className="flex gap-6 text-gray-400 items-center">
                        <div className="relative group">
                            <a href="tel:+33144231299" className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/10 transition-colors relative">
                                <Phone size={24} className="text-primary fill-primary animate-pulse" />
                                {/* Tooltip */}
                                <div className="absolute -bottom-10 right-0 bg-primary text-black text-[10px] font-bold px-2 py-1 rounded w-max opacity-0 group-hover:opacity-100 transition-opacity">
                                    Pruebame
                                    <div className="absolute -top-1 right-3 w-2 h-2 bg-primary rotate-45"></div>
                                </div>
                            </a>
                            {/* Arrow pointing to call button - Initial visible hint */}
                            <div className="absolute -left-24 top-2 flex items-center gap-2 animate-bounce pointer-events-none opacity-80">
                                <span className="text-[10px] font-bold text-primary uppercase bg-black/50 px-2 py-1 rounded">Appelle-moi</span>
                                <ArrowRight size={14} className="text-primary" />
                            </div>
                        </div>
                        <Volume2 size={24} className="text-gray-400" />
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
        </div>
    );
};

export default AudioDemo;
