import { useRef, useState, useEffect } from 'react';
import { Play, Pause, Mic, Phone, CalendarCheck, CheckCheck } from 'lucide-react';

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
        <div className="space-y-8">
            {/* Main Demo Block */}
            <div className="w-full max-w-5xl mx-auto rounded-[3rem] bg-black border border-white/10 overflow-hidden shadow-2xl relative group grid md:grid-cols-2">

                {/* Left: Player */}
                <div className="p-8 md:p-12 relative flex flex-col justify-between bg-gradient-to-br from-gray-900 to-black border-r border-white/5 h-[450px]">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[80px] rounded-full pointer-events-none group-hover:bg-primary/10 transition-colors duration-700" />
                    <audio ref={audioRef} src={audioSrc} onEnded={() => setIsPlaying(false)} />
                    <div className="flex justify-between items-start mb-12 relative z-10">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-primary animate-pulse"><Mic className="w-6 h-6" /></div>
                            <div>
                                <div className="text-[10px] uppercase font-black tracking-widest text-gray-400">Écoutez Sarah</div>
                                <div className="text-base font-bold text-white">Interaction Réelle</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center relative z-10">
                        <button onClick={togglePlay} className="w-20 h-20 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 hover:bg-primary hover:text-black transition-all duration-300 shadow-[0_0_50px_rgba(255,255,255,0.2)] z-20 group/btn">
                            {isPlaying ? <Pause className="w-8 h-8 fill-current" /> : <Play className="w-8 h-8 fill-current ml-2" />}
                        </button>
                        <div className="mt-4 text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold opacity-60">
                            {isPlaying ? 'Lecture en cours...' : 'Appuyez pour écouter'}
                        </div>
                    </div>
                    <div className="h-12 flex items-end justify-center gap-[3px] opacity-80 mt-auto">
                        {bars.map((height, i) => <div key={i} className={`w-1 rounded-t-sm transition-all duration-100 ${isPlaying ? 'bg-primary' : 'bg-white/10'}`} style={{ height: isPlaying ? `${Math.random() * 100}%` : `${height / 2}%` }} />)}
                    </div>
                </div>

                {/* Right: CTA & Calendar Feature */}
                <div className="bg-[#050505] p-8 md:p-12 relative flex flex-col items-center justify-center text-center h-[450px]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 to-transparent pointer-events-none" />

                    <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 relative">
                        <div className="absolute inset-0 bg-primary/20 blur-[30px] rounded-full animate-pulse" />
                        <Phone className="w-8 h-8 text-white relative z-10" />
                    </div>

                    <h3 className="text-2xl font-black uppercase tracking-tighter text-white mb-2">
                        Testez Sarah <span className="text-primary">En Direct</span>
                    </h3>
                    <p className="text-sm text-gray-400 mb-6 max-w-xs leading-relaxed">
                        Appelez pour une conversation réelle.
                    </p>
                    <div className="bg-white text-black px-8 py-3 rounded-xl font-black text-lg tracking-widest shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:scale-105 transition-transform cursor-pointer border-2 border-transparent hover:border-primary mb-8">
                        01 89 71 33 55
                    </div>

                    {/* CALENDAR CAPABILITY BADGE */}
                    <div className="bg-white/5 border border-white/10 rounded-xl p-4 w-full max-w-xs flex items-center gap-4 text-left">
                        <div className="w-10 h-10 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center shrink-0">
                            <CalendarCheck size={20} />
                        </div>
                        <div>
                            <div className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Fonction Clé</div>
                            <div className="text-xs font-bold text-white">Gestion d'Agenda Autonome</div>
                            <div className="text-[9px] text-gray-500 leading-tight mt-1">Sarah ajoute, déplace et annule les RDV directement dans votre logiciel.</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Conversation WhatsApp Style */}
            <div className="w-full max-w-3xl mx-auto">
                <div className="bg-[#0b141a] border border-white/10 rounded-2xl p-6 relative overflow-hidden bg-[url('https://camo.githubusercontent.com/854a93c27d64274c4f8c5a0b6ec34ce1bed9dd84/68747470733a2f2f7765622e77686174736170702e636f6d2f696d672f62672d636861742d74696c652d6461726b5f61346265353132653731393562366237333364393131303234303838396634342e706e67')] bg-repeat">
                    <h4 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-6 flex items-center gap-2 bg-[#202c33] w-fit px-3 py-1 rounded-full mx-auto shadow-lg">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> Transcription Live
                    </h4>

                    <div className="space-y-4 font-sans text-sm">
                        {/* Received (Client) */}
                        <div className="flex justify-start">
                            <div className="bg-[#202c33] text-white p-3 rounded-lg rounded-tl-none max-w-[80%] shadow-md relative">
                                <div>Bonjour, je voudrais prendre RDV pour une coupe.</div>
                                <div className="text-[10px] text-gray-400 text-right mt-1">10:42</div>
                            </div>
                        </div>

                        {/* Sent (Sarah) */}
                        <div className="flex justify-end">
                            <div className="bg-[#005c4b] text-white p-3 rounded-lg rounded-tr-none max-w-[80%] shadow-md relative">
                                <div>Bonjour ! C'est Sarah du Barber Club. Enchantée. Quel jour vous conviendrait le mieux ?</div>
                                <div className="text-[10px] text-white/60 text-right mt-1 flex items-center justify-end gap-1">
                                    10:42 <CheckCheck size={12} className="text-blue-400" />
                                </div>
                            </div>
                        </div>

                        {/* Received */}
                        <div className="flex justify-start">
                            <div className="bg-[#202c33] text-white p-3 rounded-lg rounded-tl-none max-w-[80%] shadow-md relative">
                                <div>Jeudi matin si possible.</div>
                                <div className="text-[10px] text-gray-400 text-right mt-1">10:43</div>
                            </div>
                        </div>

                        {/* Sent */}
                        <div className="flex justify-end">
                            <div className="bg-[#005c4b] text-white p-3 rounded-lg rounded-tr-none max-w-[80%] shadow-md relative">
                                <div>J'ai un créneau disponible à 10h15 avec Marc. Je vous le bloque ?</div>
                                <div className="text-[10px] text-white/60 text-right mt-1 flex items-center justify-end gap-1">
                                    10:43 <CheckCheck size={12} className="text-blue-400" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AudioDemo;
