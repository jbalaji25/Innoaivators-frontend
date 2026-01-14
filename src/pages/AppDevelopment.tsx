
import {
  ShieldIcon, ArrowRightIcon, CodeIcon, CpuIcon, SmartphoneIcon, LayersIcon, RocketIcon, SparklesIcon, PaletteIcon
} from 'lucide-react';
import { motion } from 'framer-motion';

import { BorderBeam } from '../components/BorderBeam';
import { TechStackCarousel } from '../components/TechStackCarousel';
import { SEO } from '../components/SEO';
import Lottie from 'lottie-react';
import mobileAppDev from '../assets/animations/mobile_app_development.json';

export function AppDevelopment() {

  const heroMetrics = [
    { value: '4.9★', label: 'Avg. App Store Rating' },
    { value: '1M+', label: 'Active Users Supported' },
    { value: '99.9%', label: 'Crash-Free Sessions' },
  ];

  const capabilities = [
    {
      icon: SmartphoneIcon,
      title: 'Native Excellence',
      description: 'Hand-crafted Swift and Kotlin experiences that leverage every ounce of platform power for unmatched performance.',
      accent: 'bg-cyan-500',
    },
    {
      icon: LayersIcon,
      title: 'Cross-Platform Unity',
      description: 'Build once, conquer everywhere. React Native and Flutter solutions that feel indistinguishable from native apps.',
      accent: 'bg-fuchsia-500',
    },
    {
      icon: RocketIcon,
      title: 'Rapid Engineering',
      description: 'Automated CI/CD pipelines and feature-flag deployments ensure you ship faster and break things less.',
      accent: 'bg-blue-500',
    },
    {
      icon: CpuIcon,
      title: 'Edge Optimization',
      description: 'Battery-conscious, memory-efficient, and offline-first architectures for seamless usage in any environment.',
      accent: 'bg-violet-500',
    },
    {
      icon: ShieldIcon,
      title: 'Bank-Grade Security',
      description: 'Biometric authentication, end-to-end encryption, and compliant data handling standard in every build.',
      accent: 'bg-emerald-500',
    },
    {
      icon: SparklesIcon,
      title: 'Experience First',
      description: 'Micro-interactions and gestures that delight users and turn daily tasks into satisfying moments.',
      accent: 'bg-amber-500',
    },
  ];

  const productJourney = [
    {
      icon: PaletteIcon,
      title: 'Product Strategy & Vision',
      description: 'We align your business goals with user needs to define a Minimum Lovable Product (MLP) roadmap.',
      color: 'text-cyan-400',
      borderColor: 'border-cyan-500/30',
    },
    {
      icon: SmartphoneIcon,
      title: 'UX/UI Engineering',
      description: 'From wireframes to pixel-perfect high-fidelity screens, we design for thumb-reach and eye-delight.',
      color: 'text-fuchsia-400',
      borderColor: 'border-fuchsia-500/30',
    },
    {
      icon: CodeIcon,
      title: 'Core Development',
      description: 'Agile sprints with bi-weekly deliverables. You see the progress on your device, not just in reports.',
      color: 'text-blue-400',
      borderColor: 'border-blue-500/30',
    },
    {
      icon: RocketIcon,
      title: 'Launch & Scale',
      description: 'ASO optimization, store submission management, and post-launch analytics to drive retention.',
      color: 'text-violet-400',
      borderColor: 'border-violet-500/30',
    },
  ];

  const technologies = [
    'React Native', 'SwiftUI', 'Kotlin', 'Flutter', 'TypeScript', 'GraphQL',
    'Firebase', 'AWS Amplify', 'Supabase', 'App Center', 'Detox', 'Storybook',
  ];

  return (
    <div className="relative w-full min-h-screen bg-[#050510] text-gray-200 font-sans selection:bg-cyan-500/30 overflow-x-hidden">
      <SEO
        title="App Development"
        description="Custom Android and iOS app development solutions. We build high-performance, user-centric mobile applications."
        canonical="https://innoaivators.com/app-development"
      />

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">

        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#050510] via-[#050510]/50 to-transparent z-0" />

        <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-start pt-40">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-cyan-300 text-xs font-bold tracking-widest uppercase backdrop-blur-md shadow-[0_0_15px_rgba(34,211,238,0.3)]">
              <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse shadow-[0_0_10px_#22d3ee]" />
              Next-Gen Mobile Solutions
            </div>

            <h1 className="text-6xl md:text-8xl font-bold leading-[1.05] tracking-tight text-white">
              Complete <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-fuchsia-400 text-glow">Android & iOS App Development</span>
            </h1>

            <p className="text-xl text-gray-300 max-w-xl leading-relaxed">
              Transforming ideas into powerful mobile applications.
              Crafted for innovation, growth, and user engagement.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact"
                className="group relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.3)]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity" />
                <span className="relative flex items-center gap-2">
                  Launch App <ArrowRightIcon className="w-4 h-4" />
                </span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#process"
                className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-full hover:bg-white/10 transition-all backdrop-blur-sm"
              >
                Our Process
              </motion.a>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
              {heroMetrics.map((metric, i) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                >
                  <div className="text-3xl font-bold text-white font-mono">{metric.value}</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider mt-1">{metric.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Hero Visual - Floating Phone Concept */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, type: "spring" }}
            className="relative lg:h-[700px] flex items-center justify-center"
          >
            <div className="relative w-[300px] h-[600px] rounded-[3rem] border-4 border-gray-800 bg-black shadow-2xl overflow-hidden transform rotate-[-5deg] hover:rotate-0 transition-transform duration-700">
              <BorderBeam duration={6} size={400} colorFrom="#22d3ee" colorTo="#d946ef" />
              {/* Screen Content */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black flex flex-col">
                <div className="h-8 bg-black w-full relative z-20 flex justify-center items-end pb-1">
                  <div className="w-24 h-4 bg-black rounded-b-xl" />
                </div>

                <div className="p-6 space-y-6 relative z-10">
                  <div className="flex justify-between items-center">
                    <div className="w-8 h-8 rounded-full bg-white/10" />
                    <div className="w-8 h-8 rounded-full bg-white/10" />
                  </div>

                  <div className="space-y-3">
                    <div className="h-8 w-3/4 bg-white/10 rounded-lg animate-pulse" />
                    <div className="h-4 w-1/2 bg-white/5 rounded-lg" />
                  </div>

                  <div className="h-32 w-full bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 rounded-2xl border border-white/10 backdrop-blur-md p-4">
                    <div className="flex justify-between items-end h-full">
                      <div className="w-8 h-12 bg-cyan-500/50 rounded-t-sm" />
                      <div className="w-8 h-20 bg-fuchsia-500/50 rounded-t-sm" />
                      <div className="w-8 h-16 bg-blue-500/50 rounded-t-sm" />
                      <div className="w-8 h-24 bg-purple-500/50 rounded-t-sm" />
                    </div>
                  </div>

                  <div className="space-y-3 pt-4">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="h-16 w-full bg-white/5 rounded-2xl border border-white/5 flex items-center px-4 gap-4">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-800" />
                        <div className="space-y-2 flex-1">
                          <div className="h-3 w-2/3 bg-white/10 rounded" />
                          <div className="h-2 w-1/3 bg-white/5 rounded" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-20 right-10 w-20 h-20 bg-cyan-500/20 rounded-full blur-xl animate-pulse" />
            <div className="absolute bottom-20 left-10 w-32 h-32 bg-fuchsia-500/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
          </motion.div>
        </div>
      </section>

      {/* --- TECH STACK CAROUSEL --- */}
      <TechStackCarousel technologies={technologies} />

      {/* --- WHY APP DEVELOPMENT SECTION --- */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto relative p-10 rounded-[2rem] bg-gradient-to-br from-cyan-950/40 to-blue-950/40 backdrop-blur-xl border-2 border-cyan-500/30 shadow-[0_0_50px_rgba(34,211,238,0.2)] overflow-hidden"
          >
            <BorderBeam duration={10} size={300} colorFrom="#22d3ee" colorTo="#d946ef" />

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 relative z-10">
              Why I need <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">app development?</span>
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed relative z-10">
              Mobile apps offer a direct channel to your customers, fostering higher engagement and brand loyalty. With push notifications, personalized experiences, and offline accessibility, an app keeps your business at your customers' fingertips. It's not just software; it's a strategic asset that drives retention and opens new revenue streams in a mobile-first world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- CAPABILITIES SECTION --- */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-sm font-bold tracking-[0.3em] text-cyan-400 uppercase mb-4 text-glow-mild">Capabilities</h2>
            <h3 className="text-5xl md:text-6xl font-bold text-white mb-6">Mobile First. Future Ready.</h3>
            <p className="text-gray-400 text-lg">We engineer apps that don't just work—they perform.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative p-8 rounded-[2rem] glass-panel hover:bg-white/5 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`absolute top-0 right-0 w-full h-full bg-gradient-to-br from-transparent to-${feature.accent}/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem]`} />

                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl ${feature.accent} bg-opacity-20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(0,0,0,0.3)]`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>

                  <h4 className="text-2xl font-bold text-white mb-4">{feature.title}</h4>
                  <p className="text-gray-400 leading-relaxed text-sm group-hover:text-white transition-colors">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- JOURNEY SECTION --- */}
      <section id="process" className="py-32 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-bold tracking-[0.2em] text-fuchsia-400 uppercase mb-4 text-glow-mild">The Blueprint</h2>
              <h3 className="text-5xl md:text-6xl font-bold text-white mb-12">From Sketch to <br />App Store</h3>

              <div className="space-y-12">
                {productJourney.map((step, index) => (
                  <div key={step.title} className="flex gap-8 group">
                    <div className="flex-col items-center hidden md:flex">
                      <div className={`w-12 h-12 rounded-xl border ${step.borderColor} bg-white/5 flex items-center justify-center z-10 group-hover:rotate-12 transition-transform duration-300 backdrop-blur-md`}>
                        <step.icon className={`w-6 h-6 ${step.color}`} />
                      </div>
                      {index !== productJourney.length - 1 && (
                        <div className="w-px h-full bg-white/10 my-4" />
                      )}
                    </div>
                    <div>
                      <h4 className={`text-2xl font-bold text-white mb-2 group-hover:${step.color} transition-colors text-glow-mild`}>{step.title}</h4>
                      <p className="text-gray-400 text-lg">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(217,70,239,0.2)]">
                <BorderBeam duration={12} size={300} colorFrom="#d946ef" colorTo="#f0abfc" />
                <Lottie
                  animationData={mobileAppDev}
                  loop={true}
                  className="w-full h-full object-cover filter grayscale contrast-125 brightness-75 hover:grayscale-0 transition-all duration-700"
                  style={{ filter: 'hue-rotate(300deg) saturate(1.5)' }}
                />
                <div className="absolute inset-0 bg-fuchsia-900/30 mix-blend-overlay" />


              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-cyan-950">

          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-6xl md:text-8xl font-bold text-white mb-10 tracking-tight text-glow">
              Ready to launch your <br /><span className="italic font-serif text-cyan-400">mobile app?</span>
            </h2>
            <p className="text-2xl text-cyan-200 mb-16 max-w-2xl mx-auto">
              We turn your ideas into high-quality Android and iOS applications.
              Built for performance, usability, and real business growth.
            </p>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/contact"
              className="inline-flex items-center gap-4 px-12 py-6 bg-white text-cyan-950 font-bold text-xl rounded-full shadow-[0_0_40px_rgba(34,211,238,0.4)] hover:shadow-[0_0_60px_rgba(34,211,238,0.6)] transition-all"
            >
              Start Building
              <ArrowRightIcon className="w-6 h-6" />
            </motion.a>
          </motion.div>
        </div>
      </section>


    </div>
  );
}
