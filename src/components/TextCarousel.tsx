
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';

const messages = [
  "Ready to start your project? Contact us today!",
  "Get in touch for a free consultation.",
  "Let's build something amazing together.",
  "Have a question? We're here to help.",
];

const duplicatedMessages = [...messages, ...messages];

export function TextCarousel() {
  return (
    <div className="py-4 border-y border-gray-800">
      <Swiper
        modules={[Autoplay, FreeMode]}
        spaceBetween={50}
        slidesPerView={'auto'}
        loop={true}
        freeMode={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={5000}
        className="mySwiper"
      >
        {duplicatedMessages.map((message, index) => (
          <SwiperSlide key={index} style={{ width: 'auto' }}>
            <p className="text-secondary-silver text-4xl font-bold">{message}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
