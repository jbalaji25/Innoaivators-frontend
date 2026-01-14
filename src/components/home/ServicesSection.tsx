
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay, Navigation as SwiperNavigation, EffectFade } from 'swiper/modules';
import { ServiceCard } from '../ServiceCard';
import { SERVICES_DATA } from '../../config/constants';
import useMediaQuery from '../../hooks/useMediaQuery';
import aiAutomationImage from '../../services/ai automation.jpg';
import iotImage from '../../services/digital marketting.jpg';
import webDevImage from '../../services/web_development_premium.png';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

export function ServicesSection() {
    const isLg = useMediaQuery('(min-width: 1024px)');

    return (
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-black bg-opacity-50">
            <div className="absolute inset-0 -z-10">
                <Swiper
                    modules={[Autoplay, EffectFade]}
                    effect="fade"
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    className="h-full w-full"
                >
                    <SwiperSlide>
                        <img src={webDevImage} alt="Web Development" className="h-full w-full object-cover" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={aiAutomationImage} alt="AI Automation" className="h-full w-full object-cover" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={iotImage} alt="IoT" className="h-full w-full object-cover" />
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-80 backdrop-blur-sm"></div>
            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-secondary-silver mb-4">
                        Our Services
                    </h2>
                    <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                        Comprehensive digital solutions tailored to your unique business
                        needs
                    </p>
                </motion.div>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={isLg ? 3 : 1}
                    loop={true}
                    coverflowEffect={{
                        rotate: 30,
                        stretch: 0,
                        depth: 200,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={{ clickable: true }}
                    navigation={true}
                    modules={[EffectCoverflow, Pagination, SwiperNavigation, Autoplay]}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    className="mySwiper"
                >
                    {SERVICES_DATA.map((service, index) => (
                        <SwiperSlide key={index}>
                            <ServiceCard {...service} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
