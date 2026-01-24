import { useScroll, useTransform, useSpring, MotionValue } from 'framer-motion';
import { useRef } from 'react';

export const useStyleosScroll = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Smooth out the scroll progress
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Sections opacities based on scroll ranges
    // About: 20-40%
    const aboutOpacity = useTransform(smoothProgress, [0.15, 0.2, 0.4, 0.45], [0, 1, 1, 0]);
    const aboutY = useTransform(smoothProgress, [0.15, 0.2, 0.4, 0.45], [40, 0, 0, -40]);

    // Services: 45-65%
    const servicesOpacity = useTransform(smoothProgress, [0.4, 0.45, 0.65, 0.7], [0, 1, 1, 0]);
    const servicesY = useTransform(smoothProgress, [0.4, 0.45, 0.65, 0.7], [40, 0, 0, -40]);

    // Portfolio: 70-85%
    const portfolioOpacity = useTransform(smoothProgress, [0.65, 0.7, 0.85, 0.9], [0, 1, 1, 0]);
    const portfolioY = useTransform(smoothProgress, [0.65, 0.7, 0.85, 0.9], [40, 0, 0, -40]);

    // Pricing Reveal: Starts at 90%
    // At 90%, the sticky container should unstick or fade out
    const pricingReveal = useTransform(smoothProgress, [0.85, 0.9], [0, 1]);
    const stickyContainerOpacity = useTransform(smoothProgress, [0.85, 0.9], [1, 0]);

    // Scale transformation for the background/canvas
    // Morphing through phases
    const backgroundScale = useTransform(
        smoothProgress,
        [0, 0.3, 0.6, 0.9],
        [1, 1.2, 0.9, 1.5]
    );

    const backgroundRotate = useTransform(
        smoothProgress,
        [0, 0.5, 1],
        [0, 180, 360]
    );

    return {
        containerRef,
        scrollYProgress: smoothProgress,
        sections: {
            about: { opacity: aboutOpacity, y: aboutY },
            services: { opacity: servicesOpacity, y: servicesY },
            portfolio: { opacity: portfolioOpacity, y: portfolioY },
            pricing: { opacity: pricingReveal }
        },
        background: {
            scale: backgroundScale,
            rotate: backgroundRotate,
            opacity: stickyContainerOpacity
        }
    };
};
