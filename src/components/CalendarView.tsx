import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

// Mock Component for Calendar to avoid heavy dependencies for now
// In a real app, use 'react-big-calendar' or similar
const CalendarView = ({ appointments }: { appointments: any[] }) => {
    const today = new Date();
    const [currentDate, setCurrentDate] = useState(today);

    const handlePrevDay = () => {
        const prev = new Date(currentDate);
        prev.setDate(prev.getDate() - 1);
        setCurrentDate(prev);
    };

    const handleNextDay = () => {
        const next = new Date(currentDate);
        next.setDate(next.getDate() + 1);
        setCurrentDate(next);
    };

    const handleToday = () => {
        setCurrentDate(new Date());
    };

    // Mock hours 9am - 19pm
    const hours = Array.from({ length: 11 }, (_, i) => i + 9);

    // Format date in French
    const formatDate = (date: Date) => {
        return new Intl.DateTimeFormat('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' }).format(date);
    };

    const getAppointmentsForHour = (hour: number) => {
        return appointments.filter(apt => {
            const aptDate = new Date(apt.date);
            return (
                aptDate.getHours() === hour &&
                aptDate.getDate() === currentDate.getDate() &&
                aptDate.getMonth() === currentDate.getMonth() &&
                aptDate.getFullYear() === currentDate.getFullYear()
            );
        });
    };

    return (
        <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden flex flex-col h-[600px]">
            {/* Header */}
            <div className="p-6 border-b border-white/10 flex items-center justify-between">
                <div>
                    <h2 className="text-xl font-bold text-white capitalize">{formatDate(currentDate)}</h2>
                    <p className="text-sm text-gray-500">3 Rendez-vous aujourd'hui</p>
                </div>
                <div className="flex gap-2">
                    <button onClick={handlePrevDay} className="p-2 hover:bg-white/10 rounded-lg transition-colors"><ChevronLeft className="w-5 h-5" /></button>
                    <button onClick={handleToday} className="px-3 py-1 bg-[#D4AF37] text-black font-bold rounded-lg text-sm">Aujourd'hui</button>
                    <button onClick={handleNextDay} className="p-2 hover:bg-white/10 rounded-lg transition-colors"><ChevronRight className="w-5 h-5" /></button>
                </div>
            </div>

            {/* Calendar Grid */}
            <div className="flex-1 overflow-y-auto custom-scrollbar p-4 space-y-2">
                {hours.map(hour => {
                    const appts = getAppointmentsForHour(hour);
                    return (
                        <div key={hour} className="flex group min-h-[60px]">
                            <div className="w-16 text-right pr-4 text-xs font-medium text-gray-500 pt-2 border-r border-white/5 group-hover:border-white/10 transition-colors">
                                {hour}:00
                            </div>
                            <div className="flex-1 pl-4 py-1 relative">
                                <div className="absolute inset-x-4 top-0 border-t border-white/5 group-hover:border-white/10"></div>

                                {appts.length > 0 ? (
                                    appts.map((apt, i) => (
                                        <div key={i} className="absolute top-1 left-4 right-4 bottom-1 bg-[#D4AF37]/20 border border-[#D4AF37]/40 rounded-lg px-3 py-1.5 flex justify-between items-center hover:bg-[#D4AF37]/30 cursor-pointer transition-colors">
                                            <div>
                                                <span className="text-xs font-bold text-[#D4AF37] block">{apt.client_name}</span>
                                                <span className="text-[10px] text-[#D4AF37]/80">Coupe + Barbe</span>
                                            </div>
                                            <div className="text-xs font-mono text-[#D4AF37]">{apt.amount}€</div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="h-full hover:bg-white/[0.02] rounded-lg transition-colors cursor-pointer flex items-center px-4 opacity-0 hover:opacity-100 group-hover:opacity-100">
                                        <span className="text-[10px] text-gray-600 uppercase tracking-widest font-bold">+ Ajouter</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default CalendarView;
