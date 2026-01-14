
import { ClientCarousel } from '../components/ClientCarousel';

// Components
import { HeroSection } from '../components/home/HeroSection';
import { WhatWeDoSection } from '../components/home/WhatWeDoSection';
import { StatsSection } from '../components/home/StatsSection';
import { ServicesSection } from '../components/home/ServicesSection';
import { WhyChooseUsSection } from '../components/home/WhyChooseUsSection';
import { TestimonialsSection } from '../components/home/TestimonialsSection';
import { SEO } from '../components/SEO';

export function Home() {
  return (
    <div className="bg-primary-black text-white">
      <SEO
        title="Home"
        description="Innoaivators: Your Partner in Digital Transformation, AI Automation, and Web/App Development."
        canonical="https://innoaivators.com/"
      />

      <HeroSection />
      <WhatWeDoSection />
      <StatsSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <ClientCarousel />
      <TestimonialsSection />
    </div>
  );
}