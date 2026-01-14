import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

// Import local logos
import clientLogo1 from '../assets/clients/wetrek_new.png';
import clientLogo2 from '../assets/clients/glossix_new.png';
import clientLogo3 from '../assets/clients/nanofly_new.png';

const clients = [
  { logo: clientLogo1, name: "WE TREK TOURS TRAVELS" },
  { logo: clientLogo2, name: "GLOSSIXPRO" },
  { logo: clientLogo3, name: "NANOFLY INFOTECH" },
];

const duplicatedClients = [...clients, ...clients];

export function ClientCarousel() {
  return (
    <div className="bg-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-8">Our Clients and Partnership</h2>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          speed={1000}
          className="mySwiper"
        >
          {duplicatedClients.map((client, index) => (
            <SwiperSlide key={index} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div className="flex items-center space-x-4 w-full h-24 transition-opacity duration-300 hover:opacity-80">
                <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center">
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div className="flex-grow">
                  <span className="text-white font-extrabold text-xs md:text-sm tracking-[0.2em] uppercase line-clamp-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    {client.name}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
