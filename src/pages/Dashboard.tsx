import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { useNavigate } from 'react-router-dom';
import { LogOut, LayoutDashboard, Phone, Calendar, TrendingUp, Users, FileText, Wallet, Camera, CreditCard } from 'lucide-react';

const Dashboard = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkUser = async () => {
            const { data: { user } } = await supabase.auth.getUser();
            if (!user) {
                navigate('/login');
            } else {
                setUser(user);
            }
            setLoading(false);
        };

        checkUser();
    }, [navigate]);

    const handleLogout = async () => {
        await supabase.auth.signOut();
        navigate('/login');
    };

    if (loading) return <div className="min-h-screen bg-black text-white flex items-center justify-center">Chargement...</div>;

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white flex">
            {/* Sidebar */}
            <aside className="w-64 bg-black border-r border-white/10 hidden md:flex flex-col p-6">
                <div className="mb-10 flex items-center gap-2">
                    <div className="w-8 h-8 bg-[#D4AF37] rounded-lg"></div>
                    <span className="font-bold text-xl tracking-tight">StyleOS</span>
                </div>

                <nav className="flex-1 space-y-2">
                    <div className="bg-white/5 text-[#D4AF37] p-3 rounded-xl flex items-center gap-3 font-medium cursor-pointer">
                        <LayoutDashboard className="w-5 h-5" /> Dashboard
                    </div>
                    <div className="text-gray-400 hover:bg-white/5 hover:text-white p-3 rounded-xl flex items-center gap-3 font-medium cursor-pointer transition-colors">
                        <Phone className="w-5 h-5" /> Journal d'Appels
                    </div>
                    <div className="text-gray-400 hover:bg-white/5 hover:text-white p-3 rounded-xl flex items-center gap-3 font-medium cursor-pointer transition-colors">
                        <Calendar className="w-5 h-5" /> Rendez-vous
                    </div>
                    <div className="text-blue-400/80 bg-blue-500/10 hover:bg-blue-500/20 p-3 rounded-xl flex items-center gap-3 font-medium cursor-pointer transition-colors">
                        <FileText className="w-5 h-5" /> Comptabilité (IA)
                    </div>
                    <div className="text-gray-400 hover:bg-white/5 hover:text-white p-3 rounded-xl flex items-center gap-3 font-medium cursor-pointer transition-colors">
                        <Users className="w-5 h-5" /> Clients
                    </div>
                </nav>

                <div className="pt-6 border-t border-white/10">
                    <div className="flex items-center gap-3 mb-4 px-2">
                        <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-xs font-bold">
                            {user?.email?.[0].toUpperCase()}
                        </div>
                        <div className="flex-1 overflow-hidden">
                            <p className="text-sm font-medium truncate">{user?.email}</p>
                            <p className="text-xs text-green-500">En ligne</p>
                        </div>
                    </div>
                    <button onClick={handleLogout} className="w-full flex items-center justify-center gap-2 text-red-400 hover:bg-red-500/10 p-2 rounded-lg transition-colors text-sm">
                        <LogOut className="w-4 h-4" /> Déconnexion
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8 overflow-y-auto">
                <header className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-2xl font-bold mb-1">Bonjour, Barber! 👋</h1>
                        <p className="text-text-muted">Voici ce qu'il s'est passé aujourd'hui.</p>
                    </div>
                    <div className="flex gap-4">
                        <button className="bg-[#D4AF37] text-black px-4 py-2 rounded-lg font-bold text-sm hover:bg-white transition-colors">
                            Nouvelle Campagne SMS
                        </button>
                    </div>
                </header>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-3 bg-blue-500/20 text-blue-400 rounded-xl">
                                <Phone className="w-6 h-6" />
                            </div>
                        </div>
                        <div className="text-3xl font-bold mb-1">24</div>
                        <div className="text-sm text-text-muted">Appels gérés</div>
                    </div>

                    <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-3 bg-[#D4AF37]/20 text-[#D4AF37] rounded-xl">
                                <TrendingUp className="w-6 h-6" />
                            </div>
                        </div>
                        <div className="text-3xl font-bold mb-1">1,240 €</div>
                        <div className="text-sm text-text-muted">Chiffre d'Affaires (Brut)</div>
                    </div>

                    <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-3 bg-red-500/20 text-red-500 rounded-xl">
                                <CreditCard className="w-6 h-6" />
                            </div>
                        </div>
                        <div className="text-3xl font-bold mb-1">- 450 €</div>
                        <div className="text-sm text-text-muted">Dépenses (Loyer, Matos)</div>
                    </div>

                    <div className="bg-gradient-to-br from-green-900/40 to-black border border-green-500/30 p-6 rounded-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-20 h-20 bg-green-500/20 blur-[40px] rounded-full"></div>
                        <div className="flex justify-between items-start mb-4 relative z-10">
                            <div className="p-3 bg-green-500/20 text-green-400 rounded-xl">
                                <Wallet className="w-6 h-6" />
                            </div>
                            <span className="text-xs font-bold bg-green-500/20 text-green-400 px-2 py-1 rounded">NET</span>
                        </div>
                        <div className="text-3xl font-bold mb-1 text-white relative z-10">790 €</div>
                        <div className="text-sm text-green-400/80 relative z-10">Bénéfice Réel (Poche)</div>
                    </div>
                </div>

                {/* Accounting Actions */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-blue-900/10 border border-blue-500/20 p-6 rounded-2xl flex items-center justify-between">
                        <div>
                            <h3 className="font-bold text-lg text-blue-100 flex items-center gap-2">
                                <FileText className="w-5 h-5" /> Export Comptable
                            </h3>
                            <p className="text-sm text-blue-300/60 mt-1">Envoyez le rapport mensuel à votre expert.</p>
                        </div>
                        <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg font-bold text-sm transition-colors shadow-lg shadow-blue-500/20">
                            Générer PDF
                        </button>
                    </div>

                    <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex items-center justify-between group hover:border-[#D4AF37]/50 transition-colors">
                        <div>
                            <h3 className="font-bold text-lg text-white flex items-center gap-2">
                                <Camera className="w-5 h-5 text-[#D4AF37]" /> Scan Facture IA
                            </h3>
                            <p className="text-sm text-text-muted mt-1">Prenez une photo, l'IA catégorise la dépense.</p>
                        </div>
                        <button className="bg-[#D4AF37] text-black px-4 py-2 rounded-lg font-bold text-sm hover:bg-white transition-colors">
                            Scanner
                        </button>
                    </div>
                </div>

                {/* Recent Activity Table */}
                <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
                    <div className="p-6 border-b border-white/10 flex justify-between items-center">
                        <h3 className="font-bold">Activité Récente</h3>
                        <button className="text-xs text-[#D4AF37] hover:underline">Tout voir</button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-white/5 text-text-muted uppercase text-xs">
                                <tr>
                                    <th className="px-6 py-4">Client</th>
                                    <th className="px-6 py-4">Type</th>
                                    <th className="px-6 py-4">Status</th>
                                    <th className="px-6 py-4">Heure</th>
                                    <th className="px-6 py-4">Montant</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5 text-gray-300">
                                {[
                                    { name: 'Thomas Dubos', type: 'Appel Entrant', status: 'Converti', time: '14:30', amount: '25€' },
                                    { name: 'Lucas Martin', type: 'Appel Entrant', status: 'Converti', time: '11:15', amount: '25€' },
                                    { name: 'Inconnu (06...)', type: 'Appel Manqué', status: 'Rappelé', time: '10:05', amount: '-' },
                                    { name: 'Sofiane B.', type: 'Réservation Web', status: 'Confirmé', time: '09:45', amount: '45€' },
                                ].map((row, i) => (
                                    <tr key={i} className="hover:bg-white/5 transition-colors">
                                        <td className="px-6 py-4 font-medium text-white">{row.name}</td>
                                        <td className="px-6 py-4">{row.type}</td>
                                        <td className="px-6 py-4">
                                            <span className={`px-2 py-1 rounded text-xs font-bold ${row.status === 'Converti' || row.status === 'Confirmé' ? 'bg-green-500/20 text-green-400' :
                                                'bg-yellow-500/20 text-yellow-400'
                                                }`}>
                                                {row.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-gray-500">{row.time}</td>
                                        <td className="px-6 py-4 text-white font-medium">{row.amount}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
