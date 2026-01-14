
import { motion } from 'framer-motion';
import { WHAT_WE_DO_DATA } from '../../config/constants';

export function WhatWeDoSection() {
    return (
        <section className="relative bg-black/80 backdrop-blur-sm border-y border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-sm uppercase tracking-[0.3em] text-secondary-silver/70">What We Do</p>
                        <h2 className="mt-4 text-4xl md:text-5xl font-bold text-secondary-silver">We guide digital growth from discovery to acceleration</h2>
                        <p className="mt-6 text-lg text-gray-300 max-w-xl">
                            Our multidisciplinary teams uncover opportunities, craft immersive experiences, and build resilient platforms that empower organizations to lead in their industries.
                        </p>
                    </motion.div>
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        {WHAT_WE_DO_DATA.map((item) => (
                            <div
                                key={item.title}
                                className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 via-gray-900/70 to-black/80 p-6 border border-white/10 shadow-[0_24px_48px_-24px_rgba(0,0,0,0.85)]"
                            >
                                <div className="flex items-center justify-center h-12 w-12 rounded-2xl bg-secondary-silver/10 text-secondary-silver">
                                    <item.icon className="h-6 w-6" />
                                </div>
                                <h3 className="mt-6 text-2xl font-semibold text-white">{item.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-gray-300">{item.description}</p>
                                <div className="absolute inset-0 rounded-3xl border border-white/5 pointer-events-none" />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
