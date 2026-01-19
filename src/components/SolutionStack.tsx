import { Monitor, Cpu, Star } from 'lucide-react';

const SolutionStack = () => {
    return (
        <section id="features" className="py-24 bg-background px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">L'ÉCOSYSTÈME <span className="text-primary">STYLEOS</span></h2>
                    <p className="text-xl text-text-muted max-w-3xl mx-auto">
                        Une suite technologique complète conçue pour remplacer l'aléatoire par l'excellence.
                        Trois piliers pour sécuriser votre trône.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-10">
                    {/* Card 1: Web / Identity */}
                    <div className="glass-card p-10 rounded-3xl hover:-translate-y-2 transition-transform duration-300 group flex flex-col h-full border border-white/5 bg-black/40">
                        <div className="w-16 h-16 rounded-full bg-surface border border-glass-border flex items-center justify-center mb-8 text-primary group-hover:text-black group-hover:bg-primary transition-colors shadow-lg shadow-primary/10">
                            <Monitor className="w-8 h-8" />
                        </div>
                        <h3 className="text-3xl font-bold mb-6 text-white">Le Flagship Digital</h3>
                        <p className="text-text-muted leading-relaxed mb-8 text-lg">
                            Sur les plateformes de réservation, vous êtes une commodité. Avec StyleOS, vous devenez une destination.
                            Nous forgeons une identité numérique "Dark Luxury" qui capture l'essence brute de votre savoir-faire.
                        </p>
                        <ul className="mt-auto space-y-4 text-white/80">
                            <li className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary/80"></span>
                                Design Cinématographique Sur-Mesure
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary/80"></span>
                                Expérience Mobile & Vidéo Immersive
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary/80"></span>
                                SEO Local pour Dominer Bordeaux
                            </li>
                        </ul>
                    </div>

                    {/* Card 2: AI / Operations */}
                    <div className="glass-card p-10 rounded-3xl hover:-translate-y-2 transition-transform duration-300 group flex flex-col h-full border border-primary/20 bg-gradient-to-b from-black/60 to-black/40 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-30">
                            <div className="w-40 h-40 bg-primary/20 blur-[60px] rounded-full"></div>
                        </div>
                        <div className="w-16 h-16 rounded-full bg-surface border border-glass-border flex items-center justify-center mb-8 text-primary group-hover:text-black group-hover:bg-primary transition-colors relative z-10 shadow-lg shadow-primary/10">
                            <Cpu className="w-8 h-8" />
                        </div>
                        <h3 className="text-3xl font-bold mb-6 text-white">Antoine IA</h3>
                        <p className="text-text-muted leading-relaxed mb-8 text-lg">
                            Votre concierge de luxe, disponible 24/7. Il ne se fatigue jamais.
                            Capable de gérer des conversations complexes, il synchronise les rendez-vous directement dans votre agenda tout en filtrant les curieux.
                        </p>
                        <ul className="mt-auto space-y-4 text-white/80 relative z-10">
                            <li className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary/80"></span>
                                Décroche en moinds de 2 secondes
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary/80"></span>
                                Voix Humaine Indiscernable
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary/80"></span>
                                Synchronisation Totale (Planity, etc.)
                            </li>
                        </ul>
                    </div>

                    {/* Card 3: Reputation / Growth */}
                    <div className="glass-card p-10 rounded-3xl hover:-translate-y-2 transition-transform duration-300 group flex flex-col h-full border border-white/5 bg-black/40">
                        <div className="w-16 h-16 rounded-full bg-surface border border-glass-border flex items-center justify-center mb-8 text-primary group-hover:text-black group-hover:bg-primary transition-colors shadow-lg shadow-primary/10">
                            <Star className="w-8 h-8" />
                        </div>
                        <h3 className="text-3xl font-bold mb-6 text-white">Réputation & Social</h3>
                        <p className="text-text-muted leading-relaxed mb-8 text-lg">
                            Dominez Google et Instagram. Notre système gère vos avis et crée du contenu pour vos réseaux sociaux.
                            Devenez l'autorité incontestée de votre ville.
                        </p>
                        <ul className="mt-auto space-y-4 text-white/80">
                            <li className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary/80"></span>
                                Gestion Réseaux Sociaux Incluse
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary/80"></span>
                                Collecte d'Avis Automatisée
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary/80"></span>
                                Classement Top 3 Google Garanti
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SolutionStack
