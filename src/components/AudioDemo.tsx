import { useRef, useState, useEffect } from 'react';
import { Play, Pause, Mic, Phone, CalendarCheck, Check } from 'lucide-react';

const AudioDemo = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const audioSrc = "https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3";
    const bars = Array.from({ length: 40 }, () => Math.floor(Math.random() * 60) + 20);

    useEffect(() => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.play().catch(e => console.error("Audio play failed", e));
            } else {
                audioRef.current.pause();
            }
        }
    }, [isPlaying]);

    const togglePlay = () => {
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="grid lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">

            {/* 1. Audio Player (Compact) */}
            <div className="bg-[#0b141a] border border-white/10 rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden group h-[300px]">
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <audio ref={audioRef} src={audioSrc} onEnded={() => setIsPlaying(false)} />

                <div className="flex items-center gap-3 mb-6 relative z-10">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary animate-pulse border border-primary/30">
                        <Mic size={18} />
                    </div>
                    <div>
                        <div className="text-[10px] uppercase font-black tracking-widest text-gray-400">Écoutez Sarah</div>
                        <div className="text-sm font-bold text-white">Démo Audio</div>
                    </div>
                </div>

                <div className="flex-1 flex flex-col items-center justify-center relative z-10">
                    <button onClick={togglePlay} className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 hover:bg-primary hover:text-black transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                        {isPlaying ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current ml-1" />}
                    </button>
                    <div className="h-8 flex items-end justify-center gap-[2px] mt-6 w-full px-8">
                        {bars.slice(0, 20).map((height, i) => (
                            <div key={i} className={`flex-1 rounded-t-sm transition-all duration-100 ${isPlaying ? 'bg-primary' : 'bg-white/10'}`} style={{ height: isPlaying ? `${Math.random() * 100}%` : '20%' }} />
                        ))}
                    </div>
                </div>
            </div>

            {/* 2. Chat Visual (Compact) */}
            <div className="bg-[#0b141a] border border-white/10 rounded-2xl p-0 relative overflow-hidden h-[300px] flex flex-col">
                <div className="bg-[#202c33] p-3 flex items-center gap-3 border-b border-white/5">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-black font-bold text-xs">S</div>
                    <div className="text-xs font-bold text-white">Sarah IA <span className="text-green-500 font-normal ml-1">• En ligne</span></div>
                </div>
                <div className="flex-1 p-4 bg-[url('https://camo.githubusercontent.com/854a93c27d64274c4f8c5a0b6ec34ce1bed9dd84/68747470733a2f2f7765622e77686174736170702e636f6d2f696d672f62672d636861742d74696c652d6461726b5f61346265353132653731393562366237333364393131303234303838396634342e706e67')] bg-repeat space-y-3 overflow-y-auto custom-scrollbar">
                    <div className="flex justify-start">
                        <div className="bg-[#202c33] text-white p-2 rounded-lg rounded-tl-none max-w-[85%] text-[11px] shadow">
                            Bonjour, dispo jeudi ?
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <div className="bg-[#005c4b] text-white p-2 rounded-lg rounded-tr-none max-w-[85%] text-[11px] shadow">
                            Bonjour ! Jeudi, il reste 14h15 avec Marc. Je réserve ?
                        </div>
                    </div>
                    <div className="flex justify-start">
                        <div className="bg-[#202c33] text-white p-2 rounded-lg rounded-tl-none max-w-[85%] text-[11px] shadow">
                            Parfait, merci.
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <div className="bg-[#005c4b] text-white p-2 rounded-lg rounded-tr-none max-w-[85%] text-[11px] shadow">
                            C'est noté ! Un SMS de rappel vous sera envoyé la veille.
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. Call to Action & Agenda Feature */}
            <div className="bg-[#0b141a] border border-white/10 rounded-2xl p-6 flex flex-col justify-between h-[300px] relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div>
                    <div className="flex items-center gap-2 mb-4">
                        <CalendarCheck className="text-primary" size={20} />
                        <span className="text-[10px] font-black uppercase tracking-widest text-primary">Fonction Clé</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">Gestion d'Agenda Autonome</h3>
                    <p className="text-xs text-gray-400 leading-relaxed">
                        Sarah ne fait pas que discuter. Elle se connecte à votre logiciel (Planity, etc.) et gère votre agenda en temps réel : ajouts, déplacements, annulations.
                    </p>
                </div>

                <div className="mt-8 text-center bg-white/5 rounded-xl p-4 border border-white/5 hover:border-primary/30 transition-colors">
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Testez par téléphone</div>
                    <a href="tel:0189713355" className="text-xl font-black text-white hover:text-primary transition-colors block mb-1">
                        01 89 71 33 55
                    </a>
                    <div className="text-[9px] text-green-500 font-mono">Appel non surtaxé • Démo Live</div>
                </div>
            </div>

        </div>
    );
};

export default AudioDemo;
