import { Monitor, Cpu, TrendingUp } from 'lucide-react';

const SolutionStack = () => {
    return (
        <section id="features" className="py-24 bg-background px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">L'ÉCOSYSTÈME <span className="text-primary">STYLEOS</span></h2>
                    <p className="text-xl text-text-muted max-w-3xl mx-auto">
                        Trois armes pour dominer votre marché local.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-10">
                    {/* Card 1: Web / Identity */}
                    <div className="glass-card p-10 rounded-3xl hover:-translate-y-2 transition-transform duration-300 group flex flex-col h-full border border-white/5 bg-black/40">
                        <div className="w-16 h-16 rounded-full bg-surface border border-glass-border flex items-center justify-center mb-8 text-primary group-hover:text-black group-hover:bg-primary transition-colors shadow-lg shadow-primary/10">
                            <Monitor className="w-8 h-8" />
                        </div>
                        <h3 className="text-3xl font-bold mb-6 text-white">1. Web Design Premium</h3>
                        <p className="text-text-muted leading-relaxed mb-8 text-lg">
                            La plupart des barbiers n'ont qu'une page Planity. Vous aurez un <strong>Site Web digne d'une marque de luxe</strong>.
                            Distinguez-vous instantanément de la concurrence locale avec une identité visuelle "Dark Luxury" frappante.
                        </p>
                        <ul className="mt-auto space-y-4 text-white/80">
                            <li className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary/80"></span>
                                Identité Visuelle Unique
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary/80"></span>
                                SEO Local (Apparaissez avant les autres)
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
                        <h3 className="text-3xl font-bold mb-6 text-white">2. Sarah IA</h3>
                        <p className="text-text-muted leading-relaxed mb-8 text-lg">
                            Une réceptionniste IA qui ne dort jamais. Sarah répond au téléphone 24/7, prend les rendez-vous, et gère votre agenda Planity.
                            Fini les appels manqués pendant que vous coupez.
                        </p>
                        <ul className="mt-auto space-y-4 text-white/80 relative z-10">
                            <li className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary/80"></span>
                                Réponse en &lt; 2 secondes
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary/80"></span>
                                Voix Féminine Naturelle
                            </li>
                        </ul>
                    </div>

                    {/* Card 3: Reputation / Growth */}
                    <div className="glass-card p-10 rounded-3xl hover:-translate-y-2 transition-transform duration-300 group flex flex-col h-full border border-white/5 bg-black/40">
                        <div className="w-16 h-16 rounded-full bg-surface border border-glass-border flex items-center justify-center mb-8 text-primary group-hover:text-black group-hover:bg-primary transition-colors shadow-lg shadow-primary/10">
                            <TrendingUp className="w-8 h-8" />
                        </div>
                        <h3 className="text-3xl font-bold mb-6 text-white">3. Gestion Réseaux Sociaux</h3>
                        <p className="text-text-muted leading-relaxed mb-8 text-lg">
                            Nous ne faisons pas que poster des photos. Nous créons une stratégie de contenu pour attirer plus de clients.
                            Laissez-nous gérer votre Instagram pendant que vous gérez votre salon.
                        </p>
                        <ul className="mt-auto space-y-4 text-white/80">
                            <li className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary/80"></span>
                                Création de Contenu Mensuelle
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary/80"></span>
                                Croissance d'Audience Ciblée
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SolutionStack
