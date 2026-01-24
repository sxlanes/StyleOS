import { useState } from 'react';
import { ShieldCheck, RefreshCw, Heart } from 'lucide-react';

const GuaranteeSection = () => {
    return (
        <div className="max-w-7xl mx-auto px-6 py-24">
            {/* Header */}
            <div className="text-center mb-16">
                <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] text-primary font-bold uppercase tracking-widest mb-4">
                    Sécurité Totale
                </div>
                <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter text-white mb-4">
                    La Garantie <span className="text-primary italic">Elite.</span>
                </h2>
                <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
                    Nous sommes tellement convaincus de l'impact de StyleOS sur votre salon que nous supprimons tout risque pour vous.
                </p>
            </div>

            {/* Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-16">
                {/* Card 1 */}
                <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-colors group">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                        <ShieldCheck className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-black uppercase text-white mb-4 tracking-tight">100% Satisfait</h3>
                    <p className="text-gray-400 text-xs leading-relaxed">
                        Si vous n'êtes pas absolument bluffé par l'IA Sarah ou l'élégance de votre nouvel écosystème sous 30 jours, nous arrêtons tout.
                    </p>
                </div>

                {/* Card 2 */}
                <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-colors group relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-[40px] pointer-events-none" />
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-primary mb-6 group-hover:rotate-180 transition-transform duration-700">
                        <RefreshCw className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-black uppercase text-white mb-4 tracking-tight">Remboursement Intégral</h3>
                    <p className="text-gray-400 text-xs leading-relaxed">
                        Aucun résultat ? On vous rembourse. C'est aussi simple que ça. Notre succès est indexé sur le vôtre. Pas de frais cachés.
                    </p>
                </div>

                {/* Card 3 */}
                <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-colors group">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                        <Heart className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-black uppercase text-white mb-4 tracking-tight">Engagement StyleOS</h3>
                    <p className="text-gray-400 text-xs leading-relaxed">
                        Nous ne sommes pas un simple logiciel, nous sommes vos partenaires. Votre croissance est notre priorité absolue.
                    </p>
                </div>
            </div>

            {/* Quote Box */}
            <div className="bg-gradient-to-r from-white/5 via-white/10 to-white/5 rounded-2xl p-8 text-center border border-white/5 relative">
                <div className="text-[10px] text-primary uppercase tracking-[0.2em] font-bold mb-4">Notre Parole de Spécialiste</div>
                <p className="text-xl md:text-2xl font-serif italic text-white max-w-4xl mx-auto">
                    "Si StyleOS ne devient pas l'atout numéro 1 de votre salon en 3 mois, nous vous remboursons chaque centime investi."
                </p>
            </div>
        </div>
    );
};

export default GuaranteeSection;
