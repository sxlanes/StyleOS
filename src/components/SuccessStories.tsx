// Simplified imports as icons are no longer used in the new design

const stories = [
    {
        name: "L'Atelier de COB",
        location: "BORDEAUX • CHARTRONS",
        result: "+40%",
        metric: "Réservations Web",
        description: "Anciennement sur Planity, COB a repris le contrôle total de sa marque et de ses commissions.",
        image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2070&auto=format&fit=crop"
    },
    {
        name: "L'Appartement 253",
        location: "BORDEAUX • TRIANGLE D'OR",
        result: "100%",
        metric: "Appels gérés par IA",
        description: "Sarah IA gère désormais l'intégralité du flux entrant, permettant à l'équipe de se concentrer sur l'art.",
        image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop"
    },
    {
        name: "L'Alpha",
        location: "BORDEAUX • RIVE DROITE",
        result: "0€",
        metric: "Commissions manquées",
        description: "Un écosystème autonome qui transforme chaque recherche Google en un rendez-vous ferme.",
        image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=1976&auto=format&fit=crop"
    }
];

const SuccessStories = () => {
    return (
        <section id="success" className="py-24 bg-black relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.4em]">
                        RÉSULTATS PROUVÉS
                    </div>
                    <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white mb-6 leading-none">
                        L'EFFET <span className="text-primary italic">STYLEOS.</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {stories.map((story, index) => (
                        <div key={index} className="group relative rounded-[2.5rem] bg-surface/20 border border-white/5 overflow-hidden transition-all duration-700 hover:border-primary/20">
                            {/* Card Header with Image Background */}
                            <div className="h-64 relative overflow-hidden">
                                <img
                                    src={story.image}
                                    alt={story.name}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 opacity-40 group-hover:opacity-60"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                                <div className="absolute bottom-6 left-6">
                                    <div className="text-[9px] font-black text-primary uppercase tracking-[0.4em] mb-2">{story.location}</div>
                                    <h3 className="text-2xl font-black text-white uppercase tracking-tighter">{story.name}</h3>
                                </div>
                            </div>

                            {/* Card Body */}
                            <div className="p-8">
                                <div className="flex items-end gap-3 mb-6">
                                    <div className="text-5xl font-black text-white tracking-tighter">{story.result}</div>
                                    <div className="text-[9px] text-gray-500 uppercase font-black tracking-[0.3em] pb-2">{story.metric}</div>
                                </div>
                                <p className="text-gray-400 text-sm font-medium leading-relaxed mb-6">
                                    {story.description}
                                </p>
                                <div className="h-px bg-white/5 group-hover:bg-primary/20 transition-colors"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SuccessStories;
