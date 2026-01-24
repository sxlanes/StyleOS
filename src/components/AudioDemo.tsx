import { useRef, useState, useEffect } from 'react';
import { Play, Pause, Mic, Phone } from 'lucide-react';

const AudioDemo = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    // Audio file path
    const audioSrc = "https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3";

    // Fake visualizer bars
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
        <div className="w-full max-w-5xl mx-auto rounded-[3rem] bg-black border border-white/10 overflow-hidden shadow-2xl relative group grid md:grid-cols-2">

            {/* Left: Interactive Visualizer & Player */}
            <div className="p-8 md:p-12 relative flex flex-col justify-between bg-gradient-to-br from-gray-900 to-black border-r border-white/5 h-[400px]">
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
                            <div className="text-[10px] uppercase font-black tracking-widest text-gray-400">Écoutez Sarah</div>
                            <div className="text-base font-bold text-white">Interaction Réelle</div>
                        </div>
                    </div>
                </div>

                {/* Center Play Button */}
                <div className="flex flex-col items-center justify-center relative z-10">
                    <button
                        onClick={togglePlay}
                        className="w-20 h-20 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 hover:bg-primary hover:text-black transition-all duration-300 shadow-[0_0_50px_rgba(255,255,255,0.2)] z-20 group/btn"
                    >
                        {isPlaying ? <Pause className="w-8 h-8 fill-current" /> : <Play className="w-8 h-8 fill-current ml-2" />}
                    </button>
                    <div className="mt-4 text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold opacity-60">
                        {isPlaying ? 'Lecture en cours...' : 'Appuyez pour écouter'}
                    </div>
                </div>

                {/* Bottom Visualizer */}
                <div className="h-12 flex items-end justify-center gap-[3px] opacity-80 mt-auto">
                    {bars.map((height, i) => (
                        <div
                            key={i}
                            className={`w-1 rounded-t-sm transition-all duration-100 ${isPlaying ? 'bg-primary' : 'bg-white/10'}`}
                            style={{
                                height: isPlaying ? `${Math.random() * 100}%` : `${height / 2}%`,
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Right: CALL TO ACTION */}
            <div className="bg-[#050505] p-8 md:p-12 relative flex flex-col items-center justify-center text-center h-[400px]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 to-transparent pointer-events-none" />

                <div className="w-24 h-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-8 relative">
                    <div className="absolute inset-0 bg-primary/20 blur-[30px] rounded-full animate-pulse" />
                    <Phone className="w-10 h-10 text-white relative z-10" />
                </div>

                <h3 className="text-2xl font-black uppercase tracking-tighter text-white mb-4">
                    Testez Sarah <span className="text-primary">En Direct</span>
                </h3>

                <p className="text-sm text-gray-400 mb-8 max-w-xs leading-relaxed">
                    Appelez dès maintenant pour avoir une conversation réelle avec notre intelligence artificielle.
                </p>

                <div className="bg-white text-black px-8 py-4 rounded-xl font-black text-lg tracking-widest shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:scale-105 transition-transform cursor-pointer border-2 border-transparent hover:border-primary">
                    01 89 71 33 55
                </div>

                <div className="mt-4 text-[10px] text-green-500 uppercase font-bold tracking-widest flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    Ligne Active 24/7
                </div>
            </div>
        </div>
    );
};

export default AudioDemo;
