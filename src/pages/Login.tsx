import { useState } from 'react';
import { ArrowLeft, Lock, Mail, Loader2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (error) throw error;

            if (data.user) {
                // Successful login
                console.log('Logged in:', data.user);
                // Redirect to dashboard
                navigate('/dashboard');
            }
        } catch (err: any) {
            console.error('Login error:', err);
            setError(err.message || 'Une erreur est survenue lors de la connexion.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-black text-white selection:bg-[#D4AF37] selection:text-black font-sans flex flex-col relative overflow-hidden">

            {/* Background Texture */}
            <div className="absolute inset-0 z-0 opacity-20">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4AF37]/20 blur-[120px] rounded-full pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/20 blur-[120px] rounded-full pointer-events-none"></div>
            </div>

            {/* Navigation */}
            <nav className="relative z-50 p-6">
                <Link to="/" className="inline-flex items-center gap-2 text-white/50 hover:text-[#D4AF37] transition-colors text-sm font-medium">
                    <ArrowLeft className="w-4 h-4" /> Retour à l'accueil
                </Link>
            </nav>

            {/* Main Content */}
            <div className="flex-1 flex items-center justify-center relative z-10 px-6">
                <div className="w-full max-w-md">

                    <div className="text-center mb-10">
                        <h1 className="text-4xl font-serif font-bold text-white mb-2">StyleOS<span className="text-[#D4AF37]">.</span></h1>
                        <p className="text-gray-400">Accédez à votre tableau de bord Barber</p>
                    </div>

                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>

                        {error && (
                            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-200 text-sm text-center">
                                {error}
                            </div>
                        )}

                        <form onSubmit={handleLogin} className="space-y-6">
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest text-[#D4AF37] mb-2">Email Professionnel</label>
                                <div className="relative">
                                    <Mail className="absolute left-4 top-3.5 w-5 h-5 text-gray-500" />
                                    <input
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full bg-black/40 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all placeholder:text-gray-600"
                                        placeholder="contact@barberclub.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest text-[#D4AF37] mb-2">Mot de Passe</label>
                                <div className="relative">
                                    <Lock className="absolute left-4 top-3.5 w-5 h-5 text-gray-500" />
                                    <input
                                        type="password"
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full bg-black/40 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all placeholder:text-gray-600"
                                        placeholder="••••••••"
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-[#D4AF37] text-black font-bold py-4 rounded-xl uppercase tracking-widest hover:bg-[#b0902c] transition-all shadow-lg flex items-center justify-center gap-2 group-disabled:opacity-70"
                            >
                                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Connexion"}
                            </button>
                        </form>

                        <div className="mt-8 text-center">
                            <a href="#" className="text-xs text-gray-500 hover:text-white transition-colors border-b border-transparent hover:border-white pb-0.5">Mot de passe oublié ?</a>
                        </div>
                    </div>

                    <div className="mt-8 text-center text-xs text-gray-600">
                        Protégé par StyleOS Security • Chiffrement 256-bit
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;
