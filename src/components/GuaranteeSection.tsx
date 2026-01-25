import { ShieldCheck, TrendingUp, Lock } from 'lucide-react';

const GuaranteeSection = () => {
    return (
        <div className="grid md:grid-cols-3 gap-8 p-12">
            {/* CARD 1: ROI */}
            <div className="group relative bg-[#0a0a0a] rounded-3xl p-8 border border-white/10 overflow-hidden hover:-translate-y-2 transition-transform duration-500 hover:shadow-[0_0_40px_rgba(212,175,55,0.15)]">
                {/* Shiny Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[length:200%_200%] animate-shimmer pointer-events-none"></div>

                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-500 relative z-10 border border-primary/20 shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                    <TrendingUp size={28} />
                </div>
                <h3 className="text-xl font-black text-white uppercase tracking-tight mb-4 group-hover:text-primary transition-colors relative z-10">
                    ROI Positif ou Remboursé
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed relative z-10">
                    Si StyleOS ne génère pas plus de valeur qu'il ne coûte après 90 jours, nous vous remboursons l'intégralité de vos mensualités. Zéro risque, 100% Performance.
                </p>
            </div>

            {/* CARD 2: LIBERTÉ */}
            <div className="group relative bg-[#0a0a0a] rounded-3xl p-8 border border-white/10 overflow-hidden hover:-translate-y-2 transition-transform duration-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]">
                {/* Shiny Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[length:200%_200%] animate-shimmer pointer-events-none"></div>

                <div className="w-14 h-14 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 transition-transform duration-500 relative z-10 border border-blue-500/20 shadow-[0_0_20px_rgba(59,130,246,0.2)]">
                    <Lock size={28} />
                </div>
                <h3 className="text-xl font-black text-white uppercase tracking-tight mb-4 group-hover:text-blue-500 transition-colors relative z-10">
                    Liberté Totale & Données
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed relative z-10">
                    Vos données vous appartiennent. Votre fichier client est exportable à tout moment. Pas d'engagement long terme : vous restez parce que vous gagnez, pas parce que vous êtes bloqué.
                </p>
            </div>

            {/* CARD 3: AUDIT */}
            <div className="group relative bg-[#0a0a0a] rounded-3xl p-8 border border-white/10 overflow-hidden hover:-translate-y-2 transition-transform duration-500 hover:shadow-[0_0_40px_rgba(74,222,128,0.15)]">
                {/* Shiny Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[length:200%_200%] animate-shimmer pointer-events-none"></div>

                <div className="w-14 h-14 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 mb-6 group-hover:scale-110 transition-transform duration-500 relative z-10 border border-green-500/20 shadow-[0_0_20px_rgba(74,222,128,0.2)]">
                    <ShieldCheck size={28} />
                </div>
                <h3 className="text-xl font-black text-white uppercase tracking-tight mb-4 group-hover:text-green-500 transition-colors relative z-10">
                    Audit de Transition
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed relative z-10">
                    Nous auditons votre situation actuelle gratuitement. Si nous ne trouvons pas au moins 20% de revenus cachés à récupérer, nous ne vous proposons pas nos services.
                </p>
            </div>
        </div>
    );
};

export default GuaranteeSection;
