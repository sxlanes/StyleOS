import { motion } from 'framer-motion';

const LandingBackground = () => {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-black">
            {/* Base Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-[#050505] to-[#0A0A0A]" />

            {/* Aurora / Nebula Effect */}
            <motion.div
                animate={{
                    opacity: [0.3, 0.5, 0.3],
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0]
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] bg-primary/10 blur-[150px] rounded-full mix-blend-screen"
            />

            <motion.div
                animate={{
                    opacity: [0.2, 0.4, 0.2],
                    scale: [1.2, 1, 1.2],
                    x: ["-10%", "10%", "-10%"]
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                }}
                className="absolute top-[20%] -right-[20%] w-[60vw] h-[60vw] bg-blue-900/20 blur-[180px] rounded-full mix-blend-screen"
            />

            {/* Floating Particles/Stars */}
            <div className="absolute inset-0">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full opacity-0"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            opacity: [0, 0.8, 0],
                            scale: [0, 1.5, 0],
                            y: [0, -50]
                        }}
                        transition={{
                            duration: Math.random() * 5 + 3,
                            repeat: Infinity,
                            delay: Math.random() * 5,
                            ease: "easeInOut"
                        }}
                    />
                ))}
            </div>

            {/* Gold Dust Grid */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 animate-pulse"></div>

            {/* Subtle Grid Lines */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]"></div>
        </div>
    );
};

export default LandingBackground;
