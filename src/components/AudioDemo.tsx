import { useState, useRef } from 'react';
import { PlayCircle, PauseCircle, Mic, Phone } from 'lucide-react';

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
                <div className="grid lg:grid-cols-2 gap-8 items-stretch mb-16">
                    {/* Audio Player UI Wrapper */}
                    <div className="bg-black/60 p-10 rounded-[3rem] border border-white/10 shadow-2xl backdrop-blur-xl relative overflow-hidden group hover:border-primary/20 transition-all duration-700">
                        <audio
                            ref={audioRef}
                            src="https://static1.squarespace.com/static/5e32b61044a8b143b36ce382/t/5e46c7b50a3a7b51d13cf890/1652905383717/French-Female-Voiceover-Sylvie.mp3"
                            onEnded={() => setIsPlaying(false)}
                        />

                        <div className="relative z-10 flex flex-col items-start gap-8">
                            <div className="flex items-center gap-6 w-full">
                                <button
                                    onClick={togglePlay}
                                    className="w-20 h-20 bg-primary text-black rounded-full flex items-center justify-center hover:scale-110 transition-all duration-500 shadow-[0_0_40px_rgba(212,175,55,0.3)] group-hover:shadow-[0_0_60px_rgba(212,175,55,0.5)]"
                                >
                                    {isPlaying ? (
                                        <PauseCircle className="w-8 h-8 fill-black" />
                                    ) : (
                                        <PlayCircle className="w-8 h-8 fill-black" />
                                    )}
                                </button>
                                <div className="text-left">
                                    <div className="text-[10px] text-primary uppercase font-black tracking-widest mb-1">Preview Audio</div>
                                    <div className="text-white font-black text-xl uppercase tracking-tight">Interaction Sarah IA</div>
                                </div>
                            </div>

                            <div className="w-full">
                                <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                                    <div className={`h-full bg-primary shadow-[0_0_15px_rgba(212,175,55,0.8)] transition-all duration-[4000ms] ease-linear ${isPlaying ? 'w-full' : 'w-0'}`}></div>
                                </div>
                                <div className="flex justify-between mt-3 text-[10px] font-black text-gray-600 uppercase tracking-widest">
                                    <span>{isPlaying ? 'Simulation en cours' : 'Prête pour lecture'}</span>
                                    <span>01:45</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* LIVE CALL BUTTON WRAPPER */}
                    <div className="bg-primary p-10 rounded-[3rem] shadow-[0_0_60px_rgba(212,175,55,0.2)] flex flex-col justify-center items-center group/call relative overflow-hidden">
                        {/* Animated Background Pulse */}
                        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover/call:opacity-100 transition-opacity duration-700"></div>
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent animate-pulse"></div>

                        <div className="relative z-10 text-center">
                            <div className="mb-6 inline-flex items-center gap-2 bg-black/10 px-4 py-1.5 rounded-full text-[10px] font-black uppercase text-black tracking-[0.2em]">
                                <span className="w-2 h-2 bg-black rounded-full animate-ping"></span> Expérience Temps-Réel
                            </div>

                            <h3 className="text-3xl md:text-4xl font-black text-black uppercase tracking-tighter mb-8 leading-none">
                                APPELEZ SARAH <br /> <span className="italic opacity-80 underline underline-offset-8">DIRECTEMENT.</span>
                            </h3>

                            <a
                                href="tel:+33781741525"
                                className="inline-flex items-center gap-4 bg-black text-white px-10 py-6 rounded-full font-black uppercase tracking-[0.3em] text-[11px] hover:bg-white hover:text-black hover:scale-105 active:scale-95 transition-all duration-500 shadow-2xl"
                            >
                                <Phone className="w-5 h-5 animate-bounce" />
                                +33 7 81 74 15 25
                            </a>

                            <p className="mt-8 text-black/60 text-[10px] font-black uppercase tracking-widest">
                                Testez sa voix, sa réactivité et son intelligence.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-4 mt-8">
                    <p className="text-gray-500 text-[9px] font-black uppercase tracking-[0.3em] opacity-50">
                        Sarah IA est disponible 24/7 pour vos clients.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AudioDemo;
