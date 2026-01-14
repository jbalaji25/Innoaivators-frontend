import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { STATS_DATA } from '../../config/constants';

const CountUp: React.FC<{
    target: number;
    suffix?: string;
    duration?: number;
    className?: string;
}> = ({ target, suffix = '', duration = 2, className }) => {
    const ref = useRef<HTMLSpanElement | null>(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        if (!inView) return;
        const controls = animate(0, target, {
            duration,
            ease: [0.16, 1, 0.3, 1],
            onUpdate: latest => setCurrent(Math.round(latest)),
            onComplete: () => setCurrent(target)
        });
        return () => controls.stop();
    }, [inView, target, duration]);

    return (
        <span ref={ref} className={className}>
            {`${current.toLocaleString('en-US')}${suffix}`}
        </span>
    );
};

export function StatsSection() {
    return (
        <section className="py-16 bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {STATS_DATA.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <CountUp
                                target={stat.value}
                                suffix={stat.suffix}
                                duration={stat.duration}
                                className="text-4xl font-bold text-secondary-silver"
                            />
                            <p className="text-gray-400">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
