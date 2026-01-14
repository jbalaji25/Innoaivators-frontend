import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CheckCircleIcon, ArrowRightIcon } from 'lucide-react';

export function WhyChooseUsSection() {
    const whyChooseUsRef = useRef(null);
    const { scrollYProgress: whyChooseUsScrollYProgress } = useScroll({
        target: whyChooseUsRef,
        offset: ['start end', 'end start'],
    });
    const whyChooseUsScale = useTransform(whyChooseUsScrollYProgress, [0, 1], [0.8, 1]);
    const whyChooseUsOpacity = useTransform(whyChooseUsScrollYProgress, [0, 1], [0.5, 1]);

    return (
        <div ref={whyChooseUsRef} className="relative z-0">
            <motion.section
                style={{
                    scale: whyChooseUsScale,
                    opacity: whyChooseUsOpacity,
                }}
                className="bg-black py-20 px-4 sm:px-6 lg:px-8"
            >
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold text-secondary-silver mb-6">
                                Why Choose Innoaivators?
                            </h2>
                            <p className="text-xl text-gray-200 mb-8">
                                We combine technical expertise with creative innovation to
                                deliver exceptional results that exceed expectations.
                            </p>
                            <motion.div
                                className="space-y-4"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{ staggerChildren: 0.1 }}
                            >
                                {[
                                    'Expert team with 10+ years of experience',
                                    'Cutting-edge technology stack',
                                    'Agile development methodology',
                                    '24/7 support and maintenance',
                                    'Transparent communication',
                                    'On-time, on-budget delivery',
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex items-center space-x-3"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <CheckCircleIcon className="w-6 h-6 text-secondary-silver flex-shrink-0" />
                                        <span className="text-white">{item}</span>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="rounded-3xl p-8 text-primary-black bg-gray-800">
                                <h3 className="text-2xl font-bold mb-4 text-white">Ready to innovate?</h3>
                                <p className="mb-6 text-gray-300">
                                    Let's discuss how we can help transform your business with
                                    technology.
                                </p>
                                <a href="/contact" className="inline-flex items-center bg-primary-black text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all group">
                                    <span>Get in Touch</span>
                                    <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>
        </div>
    );
}
