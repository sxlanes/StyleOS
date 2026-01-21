import { Monitor, Cpu, TrendingUp, Calculator } from 'lucide-react';

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

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Card 1: Web / Identity */}
                    <div className="glass-card p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300 group flex flex-col h-full border border-white/5 bg-black/40">
                        <div className="w-14 h-14 rounded-full bg-surface border border-glass-border flex items-center justify-center mb-6 text-primary group-hover:text-black group-hover:bg-primary transition-colors shadow-lg shadow-primary/10">
                            <Monitor className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-white">1. Vitrine & Identité</h3>
                        <p className="text-text-muted leading-relaxed mb-6 text-sm">
                            La plupart des barbiers n'ont qu'une page Planity. Vous aurez un <strong>Site Web digne d'une marque de luxe</strong>.
                            Distinguez-vous instantanément.
                        </p>
                        <ul className="mt-auto space-y-3 text-white/80 text-sm">
                            <li className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary/80"></span>
                                Design "Dark Luxury" Unique
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary/80"></span>
                                SEO Local (Top Google)
                            </li>
                        </ul>
                    </div>

                    {/* Card 2: Accounting / Pilotage - NEW */}
                    <div className="glass-card p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300 group flex flex-col h-full border border-blue-500/20 bg-blue-900/5 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-20">
                            <div className="w-32 h-32 bg-blue-500/20 blur-[50px] rounded-full"></div>
                        </div>
                        <div className="w-14 h-14 rounded-full bg-blue-900/20 border border-blue-500/30 flex items-center justify-center mb-6 text-blue-400 group-hover:text-white group-hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/10">
                            <Calculator className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-white">2. Pilotage Financier</h3>
                        <p className="text-text-muted leading-relaxed mb-6 text-sm">
                            Planity vous dit combien vous encaissez. <strong>StyleOS vous dit combien vous gagnez vraiment.</strong>
                            Digitalisez vos tickets de caisse en une photo.
                        </p>
                        <ul className="mt-auto space-y-3 text-white/80 text-sm relative z-10">
                            <li className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500/80"></span>
                                Calcul Bénéfice Net (Poche)
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500/80"></span>
                                Scan Dépenses & Factures (IA)
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500/80"></span>
                                Export Expert-Comptable
                            </li>
                        </ul>
                    </div>

                    {/* Card 3: AI / Operations */}
                    <div className="glass-card p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300 group flex flex-col h-full border border-primary/20 bg-gradient-to-b from-black/60 to-black/40 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-30">
                            <div className="w-40 h-40 bg-primary/20 blur-[60px] rounded-full"></div>
                        </div>
                        <div className="w-14 h-14 rounded-full bg-surface border border-glass-border flex items-center justify-center mb-6 text-primary group-hover:text-black group-hover:bg-primary transition-colors relative z-10 shadow-lg shadow-primary/10">
                            <Cpu className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-white">3. Sarah IA</h3>
                        <p className="text-text-muted leading-relaxed mb-6 text-sm">
                            Une réceptionniste qui ne dort jamais. Sarah répond au téléphone 24/7, filtre les appels et gère votre agenda intelligemment.
                            Fini les interruptions.
                        </p>
                        <ul className="mt-auto space-y-3 text-white/80 text-sm relative z-10">
                            <li className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary/80"></span>
                                Réponse &lt; 2 secondes
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary/80"></span>
                                Voix Humaine Naturelle
                            </li>
                        </ul>
                    </div>

                    {/* Card 4: Reputation / Growth */}
                    <div className="glass-card p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300 group flex flex-col h-full border border-white/5 bg-black/40">
                        <div className="w-14 h-14 rounded-full bg-surface border border-glass-border flex items-center justify-center mb-6 text-primary group-hover:text-black group-hover:bg-primary transition-colors shadow-lg shadow-primary/10">
                            <TrendingUp className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-white">4. Croissance & Réseaux</h3>
                        <p className="text-text-muted leading-relaxed mb-6 text-sm">
                            Nous ne faisons pas que poster des photos. Nous créons une stratégie de contenu pour attirer plus de clients.
                            Croissance organique et ciblée.
                        </p>
                        <ul className="mt-auto space-y-3 text-white/80 text-sm">
                            <li className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary/80"></span>
                                Contenu Mensuel Stratégique
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary/80"></span>
                                Croissance d'Audience
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SolutionStack
