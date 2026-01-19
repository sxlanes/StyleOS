import { PlayCircle, Mic } from 'lucide-react';

const AudioDemo = () => {
    return (
        <section className="py-24 bg-surface border-y border-glass-border">
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

                    {/* Background Waveform Effect */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-10 gap-1 pointer-events-none">
                        {[...Array(50)].map((_, i) => (
                            <div key={i} className="w-1 bg-primary h-full" style={{ height: `${Math.random() * 100}%` }}></div>
                        ))}
                    </div>

                    <div className="relative z-10 flex items-center gap-6">
                        <button className="w-16 h-16 bg-primary text-black rounded-full flex items-center justify-center hover:scale-105 transition-transform">
                            <PlayCircle className="w-8 h-8 fill-black" />
                        </button>

                        <div className="flex-1 text-left">
                            <div className="text-xs text-text-muted uppercase tracking-wider mb-1">Lecture Démo</div>
                            <div className="text-white font-medium text-lg">Présentation Antoine IA</div>
                            {/* Fake Progress Bar */}
                            <div className="w-full h-1 bg-gray-800 rounded-full mt-3 overflow-hidden">
                                <div className="h-full w-1/3 bg-white"></div>
                            </div>
                        </div>

                        <div className="text-sm text-text-muted font-mono">0:24 / 1:30</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AudioDemo;
