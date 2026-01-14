import { useMemo } from 'react';
import ThreeDScrollTriggerRow, { ThreeDScrollTriggerContainer } from '../ThreeDScrollTrigger';
import { TESTIMONIALS_DATA } from '../../config/constants';

export function TestimonialsSection() {

    const testimonialRows = useMemo(
        () => {
            const rows: typeof TESTIMONIALS_DATA[] = [[], [], []];
            TESTIMONIALS_DATA.forEach((item, index) => {
                rows[index % 3].push(item);
            });
            return rows;
        },
        []
    );

    return (
        <section className="bg-black py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h3 className="text-3xl md:text-4xl font-bold text-secondary-silver">Testimonials</h3>
                    <p className="mt-4 text-gray-400">What our partners say about collaborating with Innoaivators</p>
                </div>
                <ThreeDScrollTriggerContainer className="space-y-8">
                    {testimonialRows.map((row, rowIndex) => (
                        <ThreeDScrollTriggerRow
                            key={rowIndex}
                            baseVelocity={rowIndex % 2 === 0 ? 22 : 16}
                            direction={rowIndex % 2 === 0 ? 1 : -1}
                            className="py-4"
                        >
                            {row.map((testimonial, index) => (
                                <div
                                    key={`${testimonial.name}-${index}`}
                                    className="mx-4 w-80 max-w-sm rounded-3xl border border-white/10 bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-black/80 p-6 backdrop-blur-lg shadow-[0_24px_48px_-24px_rgba(0,0,0,0.85)] flex flex-col justify-between overflow-hidden"
                                >
                                    <p className="mb-6 text-sm leading-relaxed text-gray-200 text-pretty">{testimonial.quote}</p>
                                    <div className="space-y-1">
                                        <p className="text-lg font-semibold text-secondary-silver">{testimonial.name}</p>
                                        <p className="text-sm text-gray-400">{testimonial.role}</p>
                                        <p className="text-xs uppercase tracking-[0.3em] text-gray-500">{testimonial.company}</p>
                                    </div>
                                </div>
                            ))}
                        </ThreeDScrollTriggerRow>
                    ))}
                </ThreeDScrollTriggerContainer>
            </div>
        </section>
    );
}
