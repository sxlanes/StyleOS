import { useState, useRef } from 'react';
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
        <section id="demo" className="py-32 bg-surface border-y border-white/5 relative overflow-hidden">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
                <div className="inline-flex items-center gap-3 text-primary text-xs font-black tracking-[0.4em] uppercase mb-8">
                    <Mic className="w-4 h-4 animate-pulse" /> Système Sarah IA Actif
                </div>

                <h2 className="text-5xl md:text-7xl font-black mb-10 tracking-tighter uppercase text-white">
                    N'IMAGINEZ PAS.<br />
                    <span className="text-primary italic text-4xl md:text-6xl">ÉCOUTEZ VOTRE FUTUR.</span>
                </h2>

                <p className="text-gray-400 text-xl font-medium mb-16 max-w-2xl mx-auto">
                    Sarah IA ne se contente de répondre. Elle comprend, conseille et vend votre expertise 24h/24.
                </p>

                {/* Audio Player UI Wrapper */}
                <div className="w-full max-w-3xl mx-auto bg-black/60 p-10 rounded-[3rem] border border-white/10 shadow-2xl backdrop-blur-xl relative overflow-hidden mb-16 group hover:border-primary/20 transition-all duration-700">

                    <audio
                        ref={audioRef}
                        src="https://static1.squarespace.com/static/5e32b61044a8b143b36ce382/t/5e46c7b50a3a7b51d13cf890/1652905383717/French-Female-Voiceover-Sylvie.mp3"
                        onEnded={() => setIsPlaying(false)}
                    />

                    <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
                        <button
                            onClick={togglePlay}
                            className="w-24 h-24 bg-primary text-black rounded-full flex items-center justify-center hover:scale-110 transition-all duration-500 shadow-[0_0_40px_rgba(212,175,55,0.3)] group-hover:shadow-[0_0_60px_rgba(212,175,55,0.5)]"
                        >
                            {isPlaying ? (
                                <PauseCircle className="w-10 h-10 fill-black" />
                            ) : (
                                <PlayCircle className="w-10 h-10 fill-black" />
                            )}
                        </button>

                        <div className="flex-1 text-left w-full">
                            <div className="text-[10px] text-primary uppercase font-black tracking-widest mb-2">Démo Interaction Vocale</div>
                            <div className="text-white font-black text-2xl uppercase tracking-tight mb-4">Sarah gère un rendez-vous complexe</div>

                            <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                                <div className={`h-full bg-primary shadow-[0_0_15px_rgba(212,175,55,0.8)] transition-all duration-[4000ms] ease-linear ${isPlaying ? 'w-full' : 'w-0'}`}></div>
                            </div>
                            <div className="flex justify-between mt-3 text-[10px] font-black text-gray-600 uppercase tracking-widest">
                                <span>{isPlaying ? 'Interaction en cours' : 'Prêt pour lecture'}</span>
                                <span>02:45</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-4">
                    <p className="text-gray-600 text-[10px] font-black uppercase tracking-widest">
                        Exemple réel d'interaction Sarah IA (Audio)
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AudioDemo;
