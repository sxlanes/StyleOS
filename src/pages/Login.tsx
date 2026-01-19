
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-6 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-black to-black opacity-40 z-0"></div>

            <div className="glass-card w-full max-w-md p-8 rounded-3xl border border-white/10 relative z-10 bg-black/60 backdrop-blur-xl">
                <div className="mb-8 text-center">
                    <Link to="/" className="inline-flex items-center gap-2 text-text-muted hover:text-white transition-colors text-sm mb-8">
                        <ArrowLeft className="w-4 h-4" /> Retour à l'accueil
                    </Link>
                    <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">StyleOS<span className="text-[#B88746]">.</span></h1>
                    <p className="text-text-muted">Accédez à votre tableau de bord.</p>
                </div>

                <form className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-white/80 uppercase tracking-wider">Email</label>
                        <input
                            type="email"
                            placeholder="vous@exemple.com"
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-[#B88746] transition-colors"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-white/80 uppercase tracking-wider">Mot de passe</label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-[#B88746] transition-colors"
                        />
                    </div>

                    <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center gap-2 cursor-pointer group">
                            <div className="w-4 h-4 border border-white/20 rounded bg-transparent group-hover:border-white transition-colors"></div>
                            <span className="text-text-muted group-hover:text-white transition-colors">Se souvenir de moi</span>
                        </label>
                        <a href="#" className="text-[#B88746] hover:text-[#A07030] transition-colors">Mot de passe oublié ?</a>
                    </div>

                    <button type="button" className="w-full bg-[#B88746] text-black font-bold py-3 rounded-xl hover:bg-[#A07030] transition-all shadow-lg shadow-[#B88746]/20">
                        Connexion
                    </button>
                </form>

                <div className="mt-8 text-center text-sm text-text-muted">
                    Pas encore de compte ? <a href="#pricing" className="text-white hover:underline">Devenir client</a>
                </div>
            </div>
        </div>
    );
};

export default Login;
