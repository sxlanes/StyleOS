import { motion, useMotionValue, useTransform, useInView, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface NumberCounterProps {
    value: number;
    duration?: number;
    label: string;
    className?: string;
    suffix?: string;
    triggerAtScroll?: number; // Optional specific scroll threshold if needed, otherwise uses InView
    trigger?: boolean; // Manual trigger
}

export const NumberCounter = ({
    value,
    duration = 2,
    label,
    className = "",
    suffix = "",
    trigger = true // Default to true if not controlled
}: NumberCounterProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));

    // Track if we have already animated to avoid re-triggering constantly if trigger flaps (though typically it won't)
    const hasAnimated = useRef(false);

    useEffect(() => {
        // Animate if (InView AND trigger is true)
        // If controlled by parent (trigger passed explicitly), we rely on that + being in DOM
        if (isInView && trigger && !hasAnimated.current) {
            hasAnimated.current = true;

            // Animate from 0 to value
            const controls = animate(count, value, {
                duration: duration,
                ease: "easeOut",
            });

            return controls.stop;
        }
    }, [isInView, value, duration, count, trigger]);

    return (
        <div ref={ref} className={`flex flex-col items-center ${className}`}>
            <div className="flex items-baseline" style={{ willChange: "transform" }}>
                <motion.span className="text-4xl md:text-6xl font-black tracking-tighter text-white">
                    {rounded}
                </motion.span>
                {suffix && (
                    <span className="text-2xl md:text-4xl font-bold text-primary ml-1">{suffix}</span>
                )}
            </div>
            <span className="text-sm uppercase tracking-[0.2em] text-gray-400 mt-2 font-medium">{label}</span>
        </div>
    );
};
