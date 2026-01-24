import { ShieldCheck, TrendingUp, Lock } from 'lucide-react';

const GuaranteeSection = () => {
    return (
        <div className="grid md:grid-cols-3 gap-8">
            {/* Box 1: Satisfied or Refunded */}
            <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-8 relative group hover:border-primary/30 transition-all duration-300">
                <div className="mb-6 w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary/20 transition-colors">
                    <ShieldCheck className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-black text-white uppercase tracking-tighter mb-4">Satisfait ou Remboursé</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                    Testez StyleOS sans risque pendant 30 jours. Si vous n'êtes pas convaincu par les résultats, nous vous remboursons intégralement votre abonnement.
                </p>
            </div>

            {/* Box 2: Auto-Financing */}
            <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-8 relative group hover:border-green-500/30 transition-all duration-300">
                <div className="mb-6 w-14 h-14 rounded-full bg-green-500/10 flex items-center justify-center border border-green-500/20 group-hover:bg-green-500/20 transition-colors">
                    <TrendingUp className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-xl font-black text-white uppercase tracking-tighter mb-4">Rentabilité Garantie</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                    StyleOS se paie tout seul. Il suffit de 3 rendez-vous supplémentaires ou d'une heure gagnée pour couvrir le coût mensuel.
                </p>
            </div>

            {/* Box 3: No Commitment */}
            <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-8 relative group hover:border-blue-500/30 transition-all duration-300">
                <div className="mb-6 w-14 h-14 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors">
                    <Lock className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-black text-white uppercase tracking-tighter mb-4">Liberté Totale</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                    Aucun engagement de durée. Vous restez chez nous parce que vous gagnez de l'argent, pas parce que vous êtes bloqué par un contrat.
                </p>
            </div>
        </div>
    );
};

export default GuaranteeSection;
