import { useEffect, useState, useRef } from 'react';
import { supabase } from '../lib/supabaseClient';
import { useNavigate } from 'react-router-dom';
import { LogOut, LayoutDashboard, Phone, Calendar, TrendingUp, Users, FileText, Wallet, Camera, CreditCard, Plus, Loader2 } from 'lucide-react';
import CalendarView from '../components/CalendarView';

interface Appointment {
    id: number;
    client_name: string;
    type: string;
    status: string;
    date: string;
    amount: number;
}

const Dashboard = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [appointments, setAppointments] = useState<Appointment[]>([]);

    // Stats State
    const [stats, setStats] = useState({
        calls: 24,
        revenue: 0,
        expenses: 450, // Fixed for demo
        net: 0
    });

    const [view, setView] = useState<'dashboard' | 'calendar' | 'calls' | 'accounting' | 'clients' | 'campaigns'>('dashboard');
    const isAdmin = user?.email?.toLowerCase() === 'nicolaslopezsolanes@gmail.com';
    const [callsLog, setCallsLog] = useState([
        { id: 1, caller: "06 12 34 56 78", time: "10:30", duration: "1m 20s", status: "Pris de RDV", sentiment: "positive" },
        { id: 2, caller: "07 98 76 54 32", time: "09:15", duration: "0m 45s", status: "Annulation", sentiment: "negative" },
        { id: 3, caller: "06 00 11 22 33", time: "Hier", duration: "2m 10s", status: "Question Tarif", sentiment: "neutral" },
    ]);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [isScanning, setIsScanning] = useState(false);

    const handleScanClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;

        setIsScanning(true);
        // Simulate n8n processing time
        setTimeout(() => {
            setIsScanning(false);
            setStats(prev => ({
                ...prev,
                expenses: prev.expenses + 120, // Simul ajout dépense
                net: prev.revenue - (prev.expenses + 120)
            }));
            alert("Facture analysée avec succès ! Dépense ajoutée.");
        }, 2000);
    };

    useEffect(() => {
        const checkUser = async () => {
            const { data: { user } } = await supabase.auth.getUser();
            if (!user) {
                navigate('/login');
            } else {
                setUser(user);
                fetchDashboardData(user.id);
            }
        };

        checkUser();
    }, [navigate]);

    const fetchDashboardData = async (userId: string) => {
        try {
            // Fetch Appointments
            const { data, error } = await supabase
                .from('appointments')
                .select('*')
                .eq('user_id', userId)
                .order('date', { ascending: false })
                .limit(50);

            if (data) {
                // Map DB data to UI format if needed, or use directly
                // Assuming DB has columns: client_name, status, amount, date (type is missing in DB, we'll mock it)
                const mappedData = data.map((item: any) => ({
                    ...item,
                    type: 'Réservation Web', // Default for now
                    time: new Date(item.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                }));
                setAppointments(mappedData);

                // Calculate Revenue
                const totalRevenue = data.reduce((acc: number, curr: any) => acc + (Number(curr.amount) || 0), 0);

                setStats(prev => ({
                    ...prev,
                    revenue: totalRevenue,
                    net: totalRevenue - prev.expenses
                }));
            }
        } catch (error) {
            console.error('Error fetching dashboard data:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = async () => {
        await supabase.auth.signOut();
        navigate('/login');
    };

    const addMockAppointment = async () => {
        if (!user) return;

        const newAppt = {
            user_id: user.id,
            client_name: "Nouveau Client",
            date: new Date().toISOString(),
            amount: 35,
            status: "Confirmé"
        };

        const { data, error } = await supabase
            .from('appointments')
            .insert([newAppt])
            .select();

        if (!error && data) {
            fetchDashboardData(user.id); // Refresh
        } else {
            console.error(error);
        }
    };

    if (loading) return <div className="min-h-screen bg-black text-white flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#D4AF37]"></div></div>;

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white flex font-sans">
            {/* Sidebar */}
            <aside className="w-64 bg-black border-r border-white/10 hidden md:flex flex-col p-6 sticky top-0 h-screen">
                <div className="mb-10 flex items-center gap-2">
                    <div className="w-8 h-8 bg-[#D4AF37] rounded-lg shadow-[0_0_15px_rgba(212,175,55,0.3)]"></div>
                    <span className="font-bold text-xl tracking-tight font-serif">StyleOS</span>
                </div>

                <nav className="flex-1 space-y-2">
                    <div
                        onClick={() => setView('dashboard')}
                        className={`p-3 rounded-xl flex items-center gap-3 font-medium cursor-pointer transition-colors ${view === 'dashboard' ? 'bg-white/5 text-[#D4AF37] shadow-inner shadow-white/5 border border-white/5' : 'text-gray-400 hover:bg-white/5 hover:text-white'}`}
                    >
                        <LayoutDashboard className="w-5 h-5" /> Dashboard
                    </div>
                    <div
                        onClick={() => setView('calls')}
                        className={`p-3 rounded-xl flex items-center gap-3 font-medium cursor-pointer transition-colors ${view === 'calls' ? 'bg-white/5 text-[#D4AF37] border border-white/5' : 'text-gray-400 hover:bg-white/5 hover:text-white'}`}
                    >
                        <Phone className="w-5 h-5" /> Journal d'Appels
                    </div>
                    <div
                        onClick={() => setView('calendar')}
                        className={`p-3 rounded-xl flex items-center gap-3 font-medium cursor-pointer transition-colors ${view === 'calendar' ? 'bg-white/5 text-[#D4AF37] border border-white/5' : 'text-gray-400 hover:bg-white/5 hover:text-white'}`}
                    >
                        <Calendar className="w-5 h-5" /> Rendez-vous
                    </div>
                    {isAdmin && (
                        <>
                            <div
                                onClick={() => setView('accounting')}
                                className={`p-3 rounded-xl flex items-center gap-3 font-medium cursor-pointer transition-colors ${view === 'accounting' ? 'bg-white/5 text-[#D4AF37] border border-white/5' : 'text-blue-400/80 hover:bg-white/5 hover:text-white'}`}
                            >
                                <FileText className="w-5 h-5" /> Comptabilité (IA)
                            </div>
                            <div
                                onClick={() => setView('clients')}
                                className={`p-3 rounded-xl flex items-center gap-3 font-medium cursor-pointer transition-colors ${view === 'clients' ? 'bg-white/5 text-[#D4AF37] border border-white/5' : 'text-gray-400 hover:bg-white/5 hover:text-white'}`}
                            >
                                <Users className="w-5 h-5" /> Clients
                            </div>
                        </>
                    )}
                </nav>

                <div className="pt-6 border-t border-white/10">
                    <div className="flex items-center gap-3 mb-4 px-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 border border-white/20 flex items-center justify-center text-xs font-bold shadow-lg">
                            {user?.email?.[0].toUpperCase()}
                        </div>
                        <div className="flex-1 overflow-hidden">
                            <p className="text-sm font-medium truncate text-gray-200">
                                {user?.user_metadata?.business_name || "Mon Salon"}
                                {isAdmin && <span className="ml-2 bg-[#D4AF37] text-black text-[9px] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider">Admin</span>}
                            </p>
                            <p className="text-xs text-green-500 flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span> En ligne</p>
                        </div>
                    </div>
                    <button onClick={handleLogout} className="w-full flex items-center justify-center gap-2 text-red-400 hover:bg-red-500/10 hover:text-red-300 p-2 rounded-lg transition-colors text-sm font-medium">
                        <LogOut className="w-4 h-4" /> Déconnexion
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8 overflow-y-auto">
                <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
                    <div>
                        <h1 className="text-3xl font-bold mb-1 text-white tracking-tight">Vue d'ensemble</h1>
                        <p className="text-gray-500 font-medium">Bienvenue, {user?.user_metadata?.business_name}.</p>
                    </div>
                    <div className="flex gap-4">
                        <button onClick={addMockAppointment} className="bg-white/5 border border-white/10 text-white px-4 py-2 rounded-xl font-bold text-sm hover:bg-white/10 transition-colors flex items-center gap-2">
                            <Plus className="w-4 h-4" /> Simuler RDV
                        </button>
                        {isAdmin && (
                            <button onClick={() => setView('campaigns')} className="bg-[#D4AF37] text-black px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-[#c5a02e] transition-all shadow-lg shadow-[#D4AF37]/20">
                                Nouvelle Campagne
                            </button>
                        )}
                    </div>
                </header>

                {/* Stats Grid */}

                {view === 'dashboard' && (
                    <>
                        {/* Stats Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                            {/* Calls Card */}
                            <div className="bg-gradient-to-b from-white/10 to-transparent border border-white/10 p-6 rounded-3xl backdrop-blur-sm">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-3 bg-blue-500/20 text-blue-400 rounded-2xl">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <span className="text-xs font-bold bg-green-500/20 text-green-400 px-2.5 py-1 rounded-full border border-green-500/20">+12%</span>
                                </div>
                                <div className="text-4xl font-bold mb-1 text-white tracking-tighter">{stats.calls}</div>
                                <div className="text-sm text-gray-400 font-medium">Appels gérés (IA)</div>
                            </div>

                            {/* Revenue Card */}
                            <div className="bg-gradient-to-b from-white/10 to-transparent border border-white/10 p-6 rounded-3xl backdrop-blur-sm">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-3 bg-[#D4AF37]/20 text-[#D4AF37] rounded-2xl">
                                        <TrendingUp className="w-6 h-6" />
                                    </div>
                                </div>
                                <div className="text-4xl font-bold mb-1 text-white tracking-tighter">{stats.revenue} €</div>
                                <div className="text-sm text-gray-400 font-medium">Chiffre d'Affaires</div>
                            </div>

                            {/* Expenses Card */}
                            <div className="bg-gradient-to-b from-white/10 to-transparent border border-white/10 p-6 rounded-3xl backdrop-blur-sm">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-3 bg-red-500/20 text-red-500 rounded-2xl">
                                        <CreditCard className="w-6 h-6" />
                                    </div>
                                </div>
                                <div className="text-4xl font-bold mb-1 text-white tracking-tighter">- {stats.expenses} €</div>
                                <div className="text-sm text-gray-400 font-medium whitespace-nowrap">Dépenses (Loyer, Matos)</div>
                            </div>

                            {/* Net Profit Card - Highlighted */}
                            <div className="bg-gradient-to-br from-green-900/60 to-black border border-green-500/30 p-6 rounded-3xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/20 blur-[60px] rounded-full group-hover:bg-green-500/30 transition-all duration-500"></div>
                                <div className="flex justify-between items-start mb-6 relative z-10">
                                    <div className="p-3 bg-green-500/20 text-green-400 rounded-2xl border border-green-500/20">
                                        <Wallet className="w-6 h-6" />
                                    </div>
                                    <span className="text-[10px] font-bold bg-green-500 text-black px-2 py-1 rounded-full uppercase tracking-wider shadow-lg shadow-green-500/20">Net Pocket</span>
                                </div>
                                <div className="text-4xl font-bold mb-1 text-white relative z-10 tracking-tighter shadow-black drop-shadow-lg">{stats.net} €</div>
                                <div className="text-sm text-green-400/90 relative z-10 font-bold">Bénéfice Réel</div>
                            </div>
                        </div>

                        {/* Accounting Actions */}
                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            {/* Hidden File Input for n8n Scan */}
                            <input
                                type="file"
                                ref={fileInputRef}
                                onChange={handleFileUpload}
                                hidden
                                accept="image/*,application/pdf"
                            />

                            <div className="bg-blue-900/10 border border-blue-500/20 p-8 rounded-3xl flex items-center justify-between relative overflow-hidden group hover:border-blue-500/40 transition-all">
                                <div className="absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors"></div>
                                <div className="relative z-10">
                                    <h3 className="font-bold text-xl text-blue-100 flex items-center gap-3 mb-2">
                                        <FileText className="w-6 h-6" /> Export Comptable
                                    </h3>
                                    <p className="text-sm text-blue-300/70 max-w-xs">Générez le rapport complet PDF/Excel pour votre expert-comptable.</p>
                                </div>
                                <button onClick={() => alert("PDF Généré et envoyé par email !")} className="relative z-10 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-bold text-sm transition-all shadow-lg shadow-blue-500/20 hover:scale-105 active:scale-95">
                                    Générer PDF
                                </button>
                            </div>

                            <div onClick={handleScanClick} className="bg-white/5 border border-white/10 p-8 rounded-3xl flex items-center justify-between group hover:border-[#D4AF37]/50 transition-all relative overflow-hidden cursor-pointer">
                                <div className="absolute inset-0 bg-[#D4AF37]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="relative z-10">
                                    <h3 className="font-bold text-xl text-white flex items-center gap-3 mb-2">
                                        {isScanning ? <Loader2 className="w-6 h-6 animate-spin text-[#D4AF37]" /> : <Camera className="w-6 h-6 text-[#D4AF37]" />}
                                        {isScanning ? "Analyse IA en cours..." : "Scan Facture IA"}
                                    </h3>
                                    <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors max-w-xs">
                                        {isScanning ? "Envoi à n8n pour extraction des données..." : "Prenez une photo d'une facture. L'IA la catégorise instantanément."}
                                    </p>
                                </div>
                                <button disabled={isScanning} className="relative z-10 bg-[#D4AF37] text-black px-6 py-3 rounded-xl font-bold text-sm hover:bg-white transition-all shadow-lg shadow-[#D4AF37]/10 hover:shadow-[#D4AF37]/20 hover:scale-105 active:scale-95 disabled:opacity-50">
                                    Scanner
                                </button>
                            </div>
                        </div>

                        {/* Recent Activity Table */}
                        <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-md">
                            <div className="p-8 border-b border-white/5 flex justify-between items-center bg-white/[0.02]">
                                <h3 className="font-bold text-lg text-white">Activité Récente</h3>
                                <button className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] hover:text-white transition-colors">Tout voir</button>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm text-left">
                                    <thead className="bg-black/40 text-gray-500 uppercase text-xs font-bold tracking-wider">
                                        <tr>
                                            <th className="px-8 py-5">Client</th>
                                            <th className="px-8 py-5">Type Service</th>
                                            <th className="px-8 py-5">Status</th>
                                            <th className="px-8 py-5">Heure</th>
                                            <th className="px-8 py-5 text-right">Montant</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/5 text-gray-300">
                                        {appointments.length > 0 ? appointments.map((appt, i) => (
                                            <tr key={i} className="hover:bg-white/5 transition-colors group">
                                                <td className="px-8 py-5 font-bold text-white group-hover:text-[#D4AF37] transition-colors">{appt.client_name}</td>
                                                <td className="px-8 py-5 text-gray-400">{(appt as any).type || (i % 2 === 0 ? "Coupe + Barbe" : "Taille Barbe")}</td>
                                                <td className="px-8 py-5">
                                                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide border ${appt.status === 'Confirmé' ? 'bg-green-500/10 text-green-400 border-green-500/20' :
                                                        'bg-yellow-500/10 text-yellow-400 border-yellow-500/20'
                                                        }`}>
                                                        {appt.status}
                                                    </span>
                                                </td>
                                                <td className="px-8 py-5 text-gray-500 font-mono">{(appt as any).time}</td>
                                                <td className="px-8 py-5 text-white font-bold font-mono text-right text-lg">{appt.amount} €</td>
                                            </tr>
                                        )) : (
                                            <tr>
                                                <td colSpan={5} className="px-8 py-12 text-center text-gray-500">
                                                    Aucune activité récente. <br />
                                                    <span className="text-xs">Cliquez sur "Simuler RDV" pour tester.</span>
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </>
                )}

                {view === 'calendar' && (
                    <CalendarView appointments={appointments} />
                )}

                {view === 'calls' && (
                    <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
                        <div className="p-6 border-b border-white/10 flex justify-between items-center">
                            <h2 className="text-xl font-bold flex items-center gap-2">
                                <Phone className="w-5 h-5 text-[#D4AF37]" /> Journal d'Appels IA
                            </h2>
                            <span className="text-xs font-mono text-gray-500">Sarah AI v2.1</span>
                        </div>
                        <div className="divide-y divide-white/5">
                            {callsLog.map(call => (
                                <div key={call.id} className="p-4 flex items-center justify-between hover:bg-white/5 transition-colors group cursor-pointer">
                                    <div className="flex items-center gap-4">
                                        <div className={`p-2 rounded-full ${call.sentiment === 'positive' ? 'bg-green-500/10 text-green-500' : call.sentiment === 'negative' ? 'bg-red-500/10 text-red-500' : 'bg-blue-500/10 text-blue-500'}`}>
                                            <Phone className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <div className="font-bold text-white">{call.caller}</div>
                                            <div className="text-xs text-gray-500">{call.time} • Durée: {call.duration}</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <span className={`px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider border ${call.status === 'Pris de RDV' ? 'border-green-500/20 text-green-400 bg-green-500/5' :
                                            call.status === 'Annulation' ? 'border-red-500/20 text-red-400 bg-red-500/5' :
                                                'border-blue-500/20 text-blue-400 bg-blue-500/5'
                                            }`}>
                                            {call.status}
                                        </span>
                                        <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                            <div className="w-0 h-0 border-l-[6px] border-l-white border-y-[4px] border-y-transparent ml-0.5"></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="p-4 bg-black/20 text-center text-xs text-gray-500 uppercase tracking-widest font-bold hover:text-white cursor-pointer transition-colors">
                            Voir tout l'historique
                        </div>
                    </div>
                )}

                {view === 'accounting' && (
                    <div className="space-y-6">
                        <div className="bg-gradient-to-r from-blue-900/20 to-black border border-blue-500/20 p-8 rounded-3xl relative overflow-hidden">
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3"><FileText className="w-6 h-6 text-blue-400" /> Comptabilité Automatisée</h2>
                            <p className="text-gray-400 max-w-2xl mb-6">
                                Votre assistant IA a catégorisé toutes vos dépenses. Exportez votre bilan pour votre comptable en un clic.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                <div className="bg-black/30 p-6 rounded-2xl border border-white/10">
                                    <div className="text-xs uppercase text-gray-500 font-bold mb-2">Chiffre d'Affaires (Mois)</div>
                                    <div className="text-3xl font-bold text-white">{stats.revenue} €</div>
                                </div>
                                <div className="bg-black/30 p-6 rounded-2xl border border-white/10">
                                    <div className="text-xs uppercase text-gray-500 font-bold mb-2">Dépenses Déductibles</div>
                                    <div className="text-3xl font-bold text-red-400">- {stats.expenses} €</div>
                                </div>
                                <div className="bg-black/30 p-6 rounded-2xl border border-white/10">
                                    <div className="text-xs uppercase text-gray-500 font-bold mb-2">TVA Collectée (Est.)</div>
                                    <div className="text-3xl font-bold text-blue-400">{Math.round(stats.revenue * 0.2)} €</div>
                                </div>
                            </div>
                            <button onClick={() => alert("Bilan Comptable Généré !")} className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-blue-500/20 transition-all">
                                Télécharger le Bilan Complet (PDF)
                            </button>
                        </div>
                    </div>
                )}

                {view === 'clients' && (
                    <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden">
                        <div className="p-8 border-b border-white/10 flex justify-between items-center">
                            <h2 className="text-xl font-bold flex items-center gap-2">
                                <Users className="w-5 h-5 text-[#D4AF37]" /> Base Clients
                            </h2>
                            <button className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg text-sm font-bold transition-colors">Exporter CSV</button>
                        </div>
                        <table className="w-full text-sm text-left">
                            <thead className="bg-black/40 text-gray-500 uppercase text-xs font-bold tracking-wider">
                                <tr>
                                    <th className="px-8 py-5">Nom</th>
                                    <th className="px-8 py-5">Dernier RDV</th>
                                    <th className="px-8 py-5">Total Dépensé</th>
                                    <th className="px-8 py-5">Fidélité</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5 text-gray-300">
                                <tr className="hover:bg-white/5">
                                    <td className="px-8 py-5 font-bold text-white">Sophie Martin</td>
                                    <td className="px-8 py-5">Il y a 2 jours</td>
                                    <td className="px-8 py-5">340 €</td>
                                    <td className="px-8 py-5"><span className="px-2 py-1 bg-[#D4AF37]/20 text-[#D4AF37] rounded text-xs font-bold">Gold</span></td>
                                </tr>
                                <tr className="hover:bg-white/5">
                                    <td className="px-8 py-5 font-bold text-white">Thomas Bernard</td>
                                    <td className="px-8 py-5">Il y a 1 semaine</td>
                                    <td className="px-8 py-5">85 €</td>
                                    <td className="px-8 py-5"><span className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs font-bold">Silver</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )}

                {view === 'campaigns' && (
                    <div className="max-w-3xl mx-auto">
                        <div className="bg-gradient-to-b from-[#D4AF37]/10 to-black border border-[#D4AF37]/30 rounded-3xl p-8 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <TrendingUp size={100} />
                            </div>
                            <h2 className="text-2xl font-bold text-white mb-6 relative z-10">Créer une Campagne SMS</h2>

                            <div className="space-y-6 relative z-10">
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Nom de la campagne</label>
                                    <input type="text" placeholder="Promo Été 2024" className="w-full bg-black/50 border border-white/10 rounded-xl p-4 text-white focus:border-[#D4AF37] focus:outline-none transition-colors" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                    <textarea rows={4} placeholder="Bonjour {prenom}, profitez de -20% ..." className="w-full bg-black/50 border border-white/10 rounded-xl p-4 text-white focus:border-[#D4AF37] focus:outline-none transition-colors"></textarea>
                                </div>
                                <div className="p-4 bg-[#D4AF37]/10 rounded-xl border border-[#D4AF37]/20">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-[#D4AF37] font-bold text-sm">Audience Estimée</span>
                                        <span className="text-white font-bold">142 Clients</span>
                                    </div>
                                    <div className="w-full bg-black/50 h-2 rounded-full overflow-hidden">
                                        <div className="bg-[#D4AF37] h-full w-[65%]"></div>
                                    </div>
                                </div>
                                <button onClick={() => alert("Campagne lancée ! Envoi en cours...")} className="w-full bg-[#D4AF37] hover:bg-[#c5a02e] text-black font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-[#D4AF37]/20">
                                    Lancer la Campagne
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </main>
        </div >
    );
};

export default Dashboard;
