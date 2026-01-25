import { useRef, useState, useEffect } from 'react';
import { Play, Pause, Mic, Phone, CalendarCheck, Check, MessageSquare } from 'lucide-react';

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
        <div className="w-full max-w-6xl mx-auto rounded-[2.5rem] bg-[#0b141a] border border-white/10 overflow-hidden relative shadow-2xl flex flex-col md:flex-row">

            {/* Left: Player & Visualizer */}
            <div className="relative w-full md:w-1/2 p-12 flex flex-col justify-center border-b md:border-b-0 md:border-r border-white/5 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-gray-900 via-[#0b141a] to-[#0b141a]">
                <div className="absolute top-0 right-0 p-12 opacity-20 pointer-events-none">
                    <Mic size={200} className="text-white transform rotate-12 translate-x-1/2 -translate-y-1/2" />
                </div>

                <div className="relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest mb-6">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" /> Live Démo
                    </div>
                    <h3 className="text-3xl font-black text-white mb-2">Écoutez Sarah</h3>
                    <p className="text-gray-400 text-sm mb-12 max-w-sm">Découvrez comment Sarah gère une prise de rendez-vous complexe avec naturel et efficacité, en moins de 45 secondes.</p>

                    <div className="flex items-center gap-8">
                        <button onClick={togglePlay} className="w-20 h-20 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 hover:bg-primary hover:text-black transition-all shadow-[0_0_40px_rgba(255,255,255,0.3)] shrink-0">
                            {isPlaying ? <Pause className="w-8 h-8 fill-current" /> : <Play className="w-8 h-8 fill-current ml-1" />}
                        </button>
                        <div className="flex-1 h-12 flex items-end gap-[3px]">
                            {bars.slice(0, 30).map((height, i) => (
                                <div key={i} className={`flex-1 rounded-t-sm transition-all duration-100 ${isPlaying ? 'bg-primary' : 'bg-white/10'}`} style={{ height: isPlaying ? `${Math.random() * 100}%` : '20%' }} />
                            ))}
                        </div>
                    </div>
                    <audio ref={audioRef} src={audioSrc} onEnded={() => setIsPlaying(false)} />
                </div>
            </div>

            {/* Right: Info Panels Grid */}
            <div className="w-full md:w-1/2 grid grid-rows-2">

                {/* Top: Chat Preview */}
                <div className="p-8 border-b border-white/5 bg-[#0e171d] relative overflow-hidden flex items-center">
                    <div className="w-full">
                        <div className="flex items-center gap-3 mb-4 text-white font-bold">
                            <div className="p-2 rounded-lg bg-white/5"><MessageSquare size={16} className="text-green-400" /></div>
                            <span>Conversation Naturelle</span>
                        </div>
                        <div className="space-y-3 pl-4 border-l-2 border-white/5">
                            <div className="text-xs text-gray-400">"Bonjour, je voudrais prendre RDV pour une coupe."</div>
                            <div className="text-sm text-white font-medium">"Bonjour ! Avec plaisir. J'ai un créneau disponible ce jeudi à 14h15 avec Marc. Cela vous convient ?"</div>
                        </div>
                    </div>
                </div>

                {/* Bottom: Agenda Handling */}
                <div className="p-8 bg-[#0b141a] flex items-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="w-full relative z-10">
                        <div className="flex items-center gap-3 mb-4 text-white font-bold">
                            <div className="p-2 rounded-lg bg-white/5"><CalendarCheck size={16} className="text-primary" /></div>
                            <span>Action Directe</span>
                        </div>
                        <div className="flex items-center justify-between bg-black/40 rounded-xl p-4 border border-white/5">
                            <div className="flex items-center gap-3">
                                <div className="text-2xl font-bold text-white">14:15</div>
                                <div className="text-xs text-gray-400 uppercase tracking-widest font-bold">Jeudi 24 Oct</div>
                            </div>
                            <div className="px-3 py-1 rounded bg-green-500/20 text-green-500 text-[10px] uppercase font-black tracking-widest border border-green-500/20">Confirmé</div>
                        </div>
                        <p className="mt-4 text-[10px] text-gray-500 uppercase tracking-widest font-bold text-center">Synchronisé avec votre logiciel (Planity, etc.)</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AudioDemo;
