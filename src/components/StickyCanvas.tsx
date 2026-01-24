import { motion, MotionValue } from 'framer-motion';

interface StickyCanvasProps {
    scale: MotionValue<number>;
    rotate: MotionValue<number>;
    opacity: MotionValue<number>;
}

export const StickyCanvas = ({ scale, rotate, opacity }: StickyCanvasProps) => {
    return (
        <motion.div
            className="absolute inset-0 z-0 overflow-hidden bg-black flex items-center justify-center"
            style={{ opacity }}
        >
            {/* Cinematic Gradients */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10"></div>

            {/* Morphing Element */}
            <motion.div
                className="w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] rounded-full opacity-30 blur-[100px]"
                style={{
                    scale,
                    rotate,
                    background: "conic-gradient(from 180deg at 50% 50%, #D4AF37 0deg, #000000 120deg, #F3E5AB 240deg, #D4AF37 360deg)"
                }}
            />

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
                    backgroundSize: '50px 50px'
                }}
            ></div>

            {/* Floating particles or accents could go here */}
        </motion.div>
    );
};
