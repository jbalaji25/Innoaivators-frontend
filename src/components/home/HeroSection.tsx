
import { motion } from 'framer-motion';
import Galaxy from '../Galaxy';
import useMediaQuery from '../../hooks/useMediaQuery';

export function HeroSection() {
    const isLg = useMediaQuery('(min-width: 1024px)');

    return (
        <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
            {isLg && <Galaxy className="absolute inset-0 z-0" />}
            <div className="absolute inset-0 -z-10 bg-black/40"></div>
            <div className="relative z-10 max-w-4xl mx-auto px-4">
                <div>
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-bold text-secondary-silver mb-4"
                    >
                        Innovate, Create, Elevate
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl md:text-2xl text-gray-200 mb-8"
                    >
                        Your Partner in Digital Transformation and Intelligent Automation
                    </motion.p>
                    <motion.a
                        href="/contact"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="bg-primary-black text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all pointer-events-auto inline-block"
                    >
                        Start Your Project
                    </motion.a>
                </div>
            </div>
        </section>
    );
}
