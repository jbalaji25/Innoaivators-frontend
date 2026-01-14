
import { motion } from 'framer-motion';

interface TechStackCarouselProps {
    technologies: string[];
}

export function TechStackCarousel({ technologies }: TechStackCarouselProps) {
    // Duplicate the array to ensure seamless looping
    const duplicatedTechnologies = [...technologies, ...technologies];

    return (
        <div className="relative flex overflow-hidden py-8 group">
            {/* Gradient Masks for Fade Effect */}
            <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-[#101018] to-transparent" />
            <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-[#101018] to-transparent" />

            <motion.div
                className="flex gap-8 whitespace-nowrap"
                animate={{
                    x: ['0%', '-50%'],
                }}
                transition={{
                    duration: 20,
                    ease: 'linear',
                    repeat: Infinity,
                }}
            >
                {duplicatedTechnologies.map((tech, index) => (
                    <div
                        key={`${tech}-${index}`}
                        className="px-8 py-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm text-gray-300 font-medium text-lg hover:text-white hover:bg-white/10 hover:border-white/20 transition-colors cursor-default"
                    >
                        {tech}
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
