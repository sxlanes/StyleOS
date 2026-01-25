import { ShieldCheck, TrendingUp, Lock } from 'lucide-react';

const GuaranteeSection = () => {
    return (
        <div className="grid md:grid-cols-3 gap-8">
            {/* Box 1: Satisfied or Refunded */}
            <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-8 relative group hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(212,175,55,0.15)] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                    <div className="mb-8 w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary/20 transition-colors shadow-[0_0_20px_rgba(212,175,55,0.1)]">
                        <ShieldCheck className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-4">Satisfait ou Remboursé</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                        Nous prenons le risque pour vous. Déployez StyleOS dans votre salon pendant 30 jours complets.
                    </p>
                    <p className="text-gray-500 text-xs leading-relaxed border-t border-white/5 pt-4">
                        Si vous ne constatez pas une augmentation de vos réservations ou un gain de temps significatif, nous vous remboursons intégralement, sans poser de questions. C'est écrit dans le contrat.
                    </p>
                </div>
            </div>

            {/* Box 2: Auto-Financing */}
            <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-8 relative group hover:border-green-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(74,222,128,0.15)] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                    <div className="mb-8 w-16 h-16 rounded-2xl bg-green-500/10 flex items-center justify-center border border-green-500/20 group-hover:bg-green-500/20 transition-colors shadow-[0_0_20px_rgba(74,222,128,0.1)]">
                        <TrendingUp className="w-8 h-8 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-4">Rentabilité Garantie</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                        StyleOS n'est pas une dépense, c'est un investissement à rendement immédiat.
                    </p>
                    <p className="text-gray-500 text-xs leading-relaxed border-t border-white/5 pt-4">
                        Il suffit de 3 rendez-vous supplémentaires par mois ou d'une seule heure de gestion gagnée pour couvrir 100% du coût de l'abonnement. Tout le reste, c'est du profit net pour votre structure.
                    </p>
                </div>
            </div>

            {/* Box 3: No Commitment */}
            <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-8 relative group hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                    <div className="mb-8 w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors shadow-[0_0_20px_rgba(59,130,246,0.1)]">
                        <Lock className="w-8 h-8 text-blue-500" />
                    </div>
                    <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-4">Liberté Totale</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                        Vos données vous appartiennent. Votre fichier client est exportable à tout moment en un clic.
                    </p>
                    <p className="text-gray-500 text-xs leading-relaxed border-t border-white/5 pt-4">
                        Aucun engagement long terme. Vous restez chez StyleOS parce que votre entreprise performe mieux avec nous, pas parce que vous êtes bloqué juridiquement. Résiliation simple et immédiate.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default GuaranteeSection;
