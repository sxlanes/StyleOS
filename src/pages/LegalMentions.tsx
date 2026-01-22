import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';

const LegalMentions = () => {
    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-primary selection:text-black relative overflow-hidden">
            {/* Navigation */}
            <nav className="fixed w-full top-0 z-50 bg-black/50 backdrop-blur-lg border-b border-white/5">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <Link to="/" className="text-2xl font-bold tracking-tighter hover:opacity-80 transition-opacity">StyleOS<span className="text-primary">.</span></Link>
                    <Link to="/" className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500 hover:text-white transition-all duration-300">Quitter</Link>
                </div>
            </nav>

            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full opacity-30"></div>
            </div>

            <div className="max-w-4xl mx-auto px-6 pt-40 pb-32 relative z-10">
                <div className="mb-16">
                    <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                        <Shield className="w-3 h-3" />
                        Cadre Juridique
                    </div>
                    <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-12">
                        Mentions<br /><span className="text-primary italic">Légales.</span>
                    </h1>
                </div>

                <div className="space-y-20 border-t border-white/5 pt-20">
                    <section className="grid md:grid-cols-3 gap-8">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-500 mt-2">Éditeur du Site</h2>
                        <div className="md:col-span-2 space-y-4 text-gray-400 font-medium leading-relaxed">
                            <p className="text-white font-bold text-xl mb-6 tracking-tight">StyleOS SAS</p>
                            <p>Société par Actions Simplifiée au capital de 10 000€</p>
                            <p>Siège Social : 10 Rue de la Paix, 33000 Bordeaux, France</p>
                            <p>RCS Bordeaux B 000 000 000</p>
                            <p>TVA Intracommunautaire : FR 00 000 000 000</p>
                            <p>Directeur de la publication : Équipe de Direction StyleOS</p>
                        </div>
                    </section>

                    <section className="grid md:grid-cols-3 gap-8">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-500 mt-2">Hébergement</h2>
                        <div className="md:col-span-2 space-y-4 text-gray-400 font-medium leading-relaxed">
                            <p className="text-white font-bold text-xl mb-6 tracking-tight">Platform Hosting</p>
                            <p>Vercel Inc.</p>
                            <p>440 N Barranca Ave #4133 Covina, CA 91723</p>
                            <p>États-Unis</p>
                            <a href="https://vercel.com" className="text-primary hover:underline transition-all">https://vercel.com</a>
                        </div>
                    </section>

                    <section className="grid md:grid-cols-3 gap-8">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-500 mt-2">Propriété Intellectuelle</h2>
                        <div className="md:col-span-2 space-y-4 text-gray-400 font-medium leading-relaxed">
                            <p>
                                L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                            </p>
                            <p>
                                La reproduction de tout ou partie de este site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
                            </p>
                        </div>
                    </section>

                    <section className="grid md:grid-cols-3 gap-8">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-500 mt-2">Contact</h2>
                        <div className="md:col-span-2 space-y-4 text-gray-400 font-medium leading-relaxed">
                            <p>Pour toute question ou information, vous pouvez nous contacter :</p>
                            <p className="text-white font-bold">Email : legal@styleos.fr</p>
                            <p className="text-white font-bold">Téléphone : +33 7 00 00 00 00</p>
                        </div>
                    </section>
                </div>

                <div className="mt-40 pt-10 border-t border-white/5 flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-gray-600">
                    <div>StyleOS © {new Date().getFullYear()}</div>
                    <Link to="/" className="hover:text-white transition-colors">Retour à l'accueil</Link>
                </div>
            </div>
        </div>
    );
};

export default LegalMentions;
