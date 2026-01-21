import { useState } from 'react';
import { ArrowLeft, Lock, Mail, Loader2, Building2, User } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';

const SignUp = () => {
    const [businessName, setBusinessName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleSignUp = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const { data, error } = await supabase.auth.signUp({
                email,
                password,
                options: {
                    data: {
                        business_name: businessName,
                    },
                },
            });

            if (error) throw error;

            if (data.user) {
                // Successful sign up
                // If email confirmation is disabled, we can log them in directly or redirect
                // Usually Supabase requires email confirmation by default, but for demo we might want to check
                // For now, let's assume success and redirect with a message or to dashboard if auto-confirmed
                console.log('Signed up:', data.user);

                if (data.session) {
                    navigate('/dashboard');
                } else {
                    // Email confirmation required case
                    setError("Compte créé ! Veuillez vérifier votre email pour confirmer votre inscription.");
                    setLoading(false); // Stop loading so they can see the message
                    return;
                }
            }
        } catch (err: any) {
            console.error('Sign up error:', err);
            setError(err.message || "Une erreur est survenue lors de l'inscription.");
        } finally {
            if (!error) setLoading(false);
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
            <div className="flex-1 flex items-center justify-center relative z-10 px-6 py-10">
                <div className="w-full max-w-md">

                    <div className="text-center mb-10">
                        <h1 className="text-4xl font-serif font-bold text-white mb-2">Rejoindre StyleOS<span className="text-[#D4AF37]">.</span></h1>
                        <p className="text-gray-400">Commencez votre domination aujourd'hui.</p>
                    </div>

                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>

                        {error && (
                            <div className={`mb-6 p-4 rounded-xl text-sm text-center ${error.includes('vérifier') ? 'bg-green-500/10 border border-green-500/20 text-green-200' : 'bg-red-500/10 border border-red-500/20 text-red-200'}`}>
                                {error}
                            </div>
                        )}

                        <form onSubmit={handleSignUp} className="space-y-6">
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest text-[#D4AF37] mb-2">Nom du Salon / Business</label>
                                <div className="relative">
                                    <Building2 className="absolute left-4 top-3.5 w-5 h-5 text-gray-500" />
                                    <input
                                        type="text"
                                        required
                                        value={businessName}
                                        onChange={(e) => setBusinessName(e.target.value)}
                                        className="w-full bg-black/40 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all placeholder:text-gray-600"
                                        placeholder="Ex: Barber King Bordeaux"
                                    />
                                </div>
                            </div>

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
                                        placeholder="contact@votre-salon.com"
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
                                        minLength={6}
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-[#D4AF37] text-black font-bold py-4 rounded-xl uppercase tracking-widest hover:bg-[#b0902c] transition-all shadow-lg flex items-center justify-center gap-2 group-disabled:opacity-70"
                            >
                                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Créer mon Compte"}
                            </button>
                        </form>

                        <div className="mt-8 text-center text-sm text-gray-400">
                            Déjà membre ? <Link to="/login" className="text-white hover:text-[#D4AF37] font-medium transition-colors">Se connecter</Link>
                        </div>
                    </div>

                    <div className="mt-8 text-center text-xs text-gray-600">
                        En créant un compte, vous acceptez nos CGV.
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SignUp;
