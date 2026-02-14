
import React, { Suspense } from 'react';
import { ClientCarousel } from '../components/ClientCarousel';

// Components
import { HeroSection } from '../components/home/HeroSection';
import { SEO } from '../components/SEO';

// Lazy load below-the-fold sections
const WhatWeDoSection = React.lazy(() => import('../components/home/WhatWeDoSection').then(m => ({ default: m.WhatWeDoSection })));
const StatsSection = React.lazy(() => import('../components/home/StatsSection').then(m => ({ default: m.StatsSection })));
const ServicesSection = React.lazy(() => import('../components/home/ServicesSection').then(m => ({ default: m.ServicesSection })));
const WhyChooseUsSection = React.lazy(() => import('../components/home/WhyChooseUsSection').then(m => ({ default: m.WhyChooseUsSection })));
const TestimonialsSection = React.lazy(() => import('../components/home/TestimonialsSection').then(m => ({ default: m.TestimonialsSection })));

export function Home() {
  return (
    <div className="bg-primary-black text-white">
      <SEO
        title="Home"
        description="Innoaivators: Your Partner in Digital Transformation, AI Automation, and Web/App Development."
        canonical="https://innoaivators.com/"
      />

      <HeroSection />

      <Suspense fallback={<div className="h-20" />}>
        <WhatWeDoSection />
        <StatsSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <ClientCarousel />
        <TestimonialsSection />
      </Suspense>
    </div>
  );
}