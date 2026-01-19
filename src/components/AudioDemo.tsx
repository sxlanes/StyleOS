import { useState, useRef, useEffect } from 'react';
import { PlayCircle, PauseCircle, Mic } from 'lucide-react';

const AudioDemo = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const togglePlay = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <section id="demo" className="py-24 bg-surface border-y border-glass-border">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <div className="inline-flex items-center gap-2 text-primary text-sm font-bold tracking-widest uppercase mb-4">
                    <Mic className="w-4 h-4 animate-pulse" /> Analyse en Direct
                </div>
                <h2 className="text-4xl font-bold mb-8">N'IMAGINEZ PAS. ÉCOUTEZ.</h2>
                <p className="text-text-muted mb-12">
                    Lancez l'audio ci-dessous pour entendre 'Antoine' gérer une demande de changement de rendez-vous complexe.
                </p>

                {/* Audio Player UI Wrapper */}
                <div className="w-full max-w-2xl mx-auto bg-black p-6 rounded-3xl border border-glass-border shadow-2xl relative overflow-hidden">

                    {/* Hidden Audio Element - REPLACE src with actual file */}
                    <audio
                        ref={audioRef}
                        src="demo-antoine.mp3"
                        onEnded={() => setIsPlaying(false)}
                    />

                    {/* Background Waveform Effect */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-10 gap-1 pointer-events-none">
                        {[...Array(50)].map((_, i) => (
                            <div key={i} className={`w-1 bg-primary h-full transition-all duration-300 ${isPlaying ? 'animate-pulse' : ''}`} style={{ height: `${Math.random() * 100}%` }}></div>
                        ))}
                    </div>

                    <div className="relative z-10 flex items-center gap-6">
                        <button
                            onClick={togglePlay}
                            className="w-16 h-16 bg-primary text-black rounded-full flex items-center justify-center hover:scale-105 transition-transform"
                        >
                            {isPlaying ? (
                                <PauseCircle className="w-8 h-8 fill-black" />
                            ) : (
                                <PlayCircle className="w-8 h-8 fill-black" />
                            )}
                        </button>

                        <div className="flex-1 text-left">
                            <div className="text-xs text-text-muted uppercase tracking-wider mb-1">Lecture Démo</div>
                            <div className="text-white font-medium text-lg">Présentation Antoine IA</div>
                            {/* Fake Progress Bar - Could serve real progress later */}
                            <div className="w-full h-1 bg-gray-800 rounded-full mt-3 overflow-hidden">
                                <div className={`h-full bg-white transition-all duration-[2000ms] ease-linear ${isPlaying ? 'w-full' : 'w-1/3'}`}></div>
                            </div>
                        </div>

                        <div className="text-sm text-text-muted font-mono">
                            {isPlaying ? 'En cours...' : '0:00 / 1:30'}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AudioDemo;
