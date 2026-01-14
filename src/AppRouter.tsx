import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Layout } from './components/Layout';
import { ScrollToTop } from './components/ScrollToTop';

// Lazy load pages for performance optimization
const Home = React.lazy(() => import('./pages/Home').then(module => ({ default: module.Home })));
const About = React.lazy(() => import('./pages/About').then(module => ({ default: module.About })));
const WebDevelopment = React.lazy(() => import('./pages/WebDevelopment').then(module => ({ default: module.WebDevelopment })));
const AppDevelopment = React.lazy(() => import('./pages/AppDevelopment').then(module => ({ default: module.AppDevelopment })));
const IoTDevelopment = React.lazy(() => import('./pages/IoTDevelopment').then(module => ({ default: module.IoTDevelopment })));
const AIAutomations = React.lazy(() => import('./pages/AIAutomations').then(module => ({ default: module.AIAutomations })));
const DigitalMarketing = React.lazy(() => import('./pages/DigitalMarketing').then(module => ({ default: module.DigitalMarketing })));
const Contact = React.lazy(() => import('./pages/Contact').then(module => ({ default: module.Contact })));

// Loading component
const PageLoader = () => (
  <div className="min-h-screen bg-[#050205] flex items-center justify-center">
    <div className="w-16 h-16 border-4 border-violet-500/30 border-t-violet-500 rounded-full animate-spin"></div>
  </div>
);

export function AppRouter() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Layout><Home /></Layout>} />
            <Route path="/about" element={<Layout><About /></Layout>} />
            <Route path="/web-development" element={<Layout><WebDevelopment /></Layout>} />
            <Route path="/app-development" element={<Layout><AppDevelopment /></Layout>} />
            <Route path="/iot-development" element={<Layout><IoTDevelopment /></Layout>} />
            <Route path="/ai-automations" element={<Layout><AIAutomations /></Layout>} />
            <Route path="/digital-marketing" element={<Layout><DigitalMarketing /></Layout>} />
            <Route path="/contact" element={<Layout><Contact /></Layout>} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  );
}