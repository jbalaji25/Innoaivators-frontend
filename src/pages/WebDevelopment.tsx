
import {
  CodeIcon, LayoutIcon, ZapIcon, ShieldIcon, SearchIcon, SmartphoneIcon,
  PaletteIcon, LayersIcon, SparklesIcon, ArrowRightIcon, CheckCircleIcon
} from 'lucide-react';
import { motion } from 'framer-motion';

import { BorderBeam } from '../components/BorderBeam';
import { TechStackCarousel } from '../components/TechStackCarousel';
import { SEO } from '../components/SEO';
import { LazyLottie } from '../components/LazyLottie';

export function WebDevelopment() {

  const features = [
    {
      icon: LayoutIcon,
      title: 'Immersive UX/UI',
      description: 'We don’t just design pages; we craft journeys. Interfaces that feel intuitive, fluid, and unmistakably premium across all devices.',
      accent: 'bg-blue-500',
    },
    {
      icon: ZapIcon,
      title: 'Blazing Fast Performance',
      description: 'Speed is a feature. We optimize every byte with edge caching, code splitting, and next-gen build tools for instant load times.',
      accent: 'bg-amber-500',
    },
    {
      icon: ShieldIcon,
      title: 'Enterprise-Grade Security',
      description: 'Sleep soundly knowing your digital assets are fortified with industry-leading security protocols and compliance standards.',
      accent: 'bg-emerald-500',
    },
    {
      icon: SmartphoneIcon,
      title: 'Mobile-First Architecture',
      description: 'Flawless execution on every screen. We build for the mobile majority without compromising the desktop experience.',
      accent: 'bg-purple-500',
    },
    {
      icon: LayersIcon,
      title: 'Scalable Systems',
      description: 'Future-proof foundations. Our modular architecture grows with your business, handling traffic spikes with grace.',
      accent: 'bg-cyan-500',
    },
    {
      icon: SparklesIcon,
      title: 'Conversion Driven',
      description: 'Beauty with purpose. Every element is strategically placed to guide users towards your key business objectives.',
      accent: 'bg-pink-500',
    },
  ];

  const processSteps = [
    {
      icon: SearchIcon,
      title: '1. Discovery & Strategy',
      description: 'We dive deep into your brand, goals, and audience to build a roadmap that aligns technology with business value.',
      color: 'text-blue-400',
      borderColor: 'border-blue-500/30',
    },
    {
      icon: PaletteIcon,
      title: '2. Design & Prototyping',
      description: 'Visualizing the vision. We create interactive high-fidelity prototypes to ensure every interaction feels right before we code.',
      color: 'text-purple-400',
      borderColor: 'border-purple-500/30',
    },
    {
      icon: CodeIcon,
      title: '3. Agile Development',
      description: 'Iterative, transparent coding sprints. We build robust, clean code with regular check-ins and demos.',
      color: 'text-emerald-400',
      borderColor: 'border-emerald-500/30',
    },
    {
      icon: SparklesIcon,
      title: '4. Launch & Growth',
      description: 'Seamless deployment is just the beginning. We monitor, optimize, and iterate to keep you ahead of the curve.',
      color: 'text-amber-400',
      borderColor: 'border-amber-500/30',
    },
  ];

  const heroMetrics = [
    { value: '3s', label: 'Max Load Time' },
    { value: '99.9%', label: 'Uptime Guarantee' },
    { value: 'SEO', label: 'Optimized Core' },
  ];

  const technologies = [
    'React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL',
    'Tailwind CSS', 'GraphQL', 'AWS', 'Docker', 'WebAssembly'
  ];

  return (
    <div className="relative w-full min-h-screen bg-[#020205] text-gray-200 font-sans selection:bg-indigo-500/30 overflow-x-hidden">
      <SEO
        title="Web Development"
        description="Modern web development solutions tailored to your business needs. We build immersive, fast, and secure websites."
        canonical="https://innoaivators.com/web-development"
      />

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#020205] via-transparent to-transparent z-0" />

        <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-start pt-40">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-indigo-300 text-xs font-bold tracking-widest uppercase backdrop-blur-md shadow-[0_0_20px_rgba(99,102,241,0.3)]"
            >
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse shadow-[0_0_10px_#6366f1]" />
              Web Development Redefined
            </motion.div>

            <h1 className="text-6xl md:text-8xl font-bold leading-[1.05] tracking-tight text-white">
              Modern Web <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-glow">Development Solutions</span>
            </h1>

            <p className="text-xl text-gray-400 max-w-xl leading-relaxed">
              Building powerful websites that represent your brand.
              Driving growth through modern, user-focused web solutions.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact"
                className="group relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 transition-opacity" />
                <span className="relative flex items-center gap-2">
                  Go online <ArrowRightIcon className="w-4 h-4" />
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
                  <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">{metric.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Hero Visual - 3D Card Effect */}
          < motion.div
            initial={{ opacity: 0, rotateY: 30, x: 100 }
            }
            animate={{ opacity: 1, rotateY: 0, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative lg:h-[700px] flex items-center justify-center perspective-1000"
          >
            <div className="relative w-full max-w-lg aspect-[4/5] glass-panel rounded-[2rem] p-6 shadow-2xl overflow-hidden transform transition-transform hover:scale-[1.02] duration-500">
              <BorderBeam duration={8} size={200} colorFrom="#6366f1" colorTo="#ec4899" />

              {/* Internal UI Mockup */}
              <div className="w-full h-full bg-[#0A0A10] rounded-2xl border border-white/5 overflow-hidden flex flex-col relative z-10">
                <div className="h-10 border-b border-white/5 bg-white/5 flex items-center px-4 gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  </div>
                  <div className="flex-1 text-center text-[10px] text-gray-500 font-mono">index.tsx</div>
                </div>

                <div className="p-6 space-y-4 font-mono text-sm opacity-80">
                  <div className="flex gap-2 text-gray-500">
                    <span>1</span> <span className="text-pink-400">import</span> <span className="text-white">React</span>
                  </div>
                  <div className="flex gap-2 text-gray-500">
                    <span>2</span> <span className="text-purple-400">export function</span> <span className="text-yellow-400">App</span>() {'{'}
                  </div>
                  <div className="flex gap-2 text-gray-500 pl-4">
                    <span>3</span> <span className="text-purple-400">return</span> (
                  </div>
                  <div className="flex gap-2 text-gray-500 pl-8">
                    <span>4</span> &lt;<span className="text-green-400">HeroSection</span>
                  </div>
                  <div className="flex gap-2 text-gray-500 pl-12">
                    <span>5</span> <span className="text-blue-300">title</span>=<span className="text-orange-300">"Future"</span>
                  </div>
                  <div className="flex gap-2 text-gray-500 pl-8">
                    <span>6</span> /&gt;
                  </div>
                  <div className="flex gap-2 text-gray-500 pl-4">
                    <span>7</span> )
                  </div>
                  <div className="flex gap-2 text-gray-500">
                    <span>8</span> {'}'}
                  </div>

                  {/* Animated Elements inside Mockup */}
                  <div className="absolute bottom-6 right-6 p-4 bg-[#151520] rounded-xl border border-white/10 shadow-xl animate-bounce">
                    <CheckCircleIcon className="w-8 h-8 text-green-500" />
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/20 to-transparent pointer-events-none" />
              </div>
            </div>
          </motion.div >
        </div >
      </section >

      {/* --- TECH STACK CAROUSEL --- */}
      < TechStackCarousel technologies={technologies} />

      {/* --- WHY WEB DEVELOPMENT SECTION --- */}
      < section className="py-20 relative" >
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto relative p-10 rounded-[2rem] bg-gradient-to-br from-indigo-950/40 to-purple-950/40 backdrop-blur-xl border-2 border-indigo-500/30 shadow-[0_0_50px_rgba(99,102,241,0.2)] overflow-hidden"
          >
            <BorderBeam duration={10} size={300} colorFrom="#6366f1" colorTo="#ec4899" />

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 relative z-10">
              Why I need <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">web development?</span>
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed relative z-10">
              In today's digital-first world, your website is your 24/7 storefront, brand ambassador, and primary sales channel. A professional web presence establishes credibility, expands your reach beyond geographical boundaries, and provides a platform to engage with your audience on their terms. It's not just about having a website; it's about having a powerful tool that drives business growth.
            </p>
          </motion.div>
        </div>
      </section >

      {/* --- CAPABILITIES SECTION --- */}
      < section className="py-32 relative" >
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h2 className="text-sm font-bold tracking-[0.3em] text-indigo-400 uppercase mb-4 text-glow-mild">Capabilities</h2>
            <h3 className="text-5xl md:text-6xl font-bold text-white mb-6">Mastery of the Craft</h3>
            <p className="text-gray-400 text-lg">We create distinct digital identities that leave lasting impressions.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative p-8 rounded-[2rem] glass-panel hover:bg-indigo-900/10 transition-all duration-300"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 ${feature.accent} opacity-10 blur-[50px] group-hover:opacity-30 transition-opacity duration-500 rounded-full`} />

                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl ${feature.accent} bg-opacity-10 backdrop-blur-md flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 border border-white/10`}>
                    <feature.icon className={`w-8 h-8 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]`} />
                  </div>

                  <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-indigo-300 transition-colors">{feature.title}</h4>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section >

      {/* --- PROCESS SECTION --- */}
      < section id="process" className="py-32 bg-black relative" >
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-900 to-transparent" />

        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-sm font-bold tracking-[0.2em] text-purple-400 uppercase mb-4 text-glow-mild">Our Process</h2>
              <h3 className="text-5xl md:text-6xl font-bold text-white mb-12">Precision <br />Engineering</h3>

              <div className="space-y-12">
                {processSteps.map((step, index) => (
                  <div key={step.title} className="flex gap-8 group">
                    <div className="flex-col items-center hidden md:flex">
                      <div className={`w-14 h-14 rounded-full border ${step.borderColor} bg-white/5 flex items-center justify-center z-10 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(0,0,0,0.5)]`}>
                        <step.icon className={`w-6 h-6 ${step.color}`} />
                      </div>
                      {index !== processSteps.length - 1 && (
                        <div className="w-px h-full bg-gradient-to-b from-white/10 to-transparent my-4" />
                      )}
                    </div>
                    <div>
                      <h4 className={`text-2xl font-bold text-white mb-3 group-hover:${step.color} transition-colors text-glow-mild`}>{step.title}</h4>
                      <p className="text-gray-400 leading-relaxed text-lg">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-3xl group transform transition-transform hover:scale-[1.01] duration-700">
                <BorderBeam duration={12} size={300} colorFrom="#c084fc" colorTo="#6366f1" />
                <LazyLottie
                  animationPath="responsive_xperience.json"
                  loop={true}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/50 to-indigo-900/50 mix-blend-overlay" />


              </div>
            </motion.div>
          </div>
        </div>
      </section >

      {/* --- CALL TO ACTION --- */}
      < section className="py-40 relative overflow-hidden" >
        <div className="absolute inset-0 bg-indigo-950">

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
              Ready to take your <br /><span className="italic font-serif text-indigo-400">business online?</span>
            </h2>
            <p className="text-2xl text-indigo-200 mb-16 max-w-2xl mx-auto">
              We create modern, user-friendly websites tailored to your goals.
              Build trust, attract customers, and grow with a strong web presence.
            </p>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/contact"
              className="inline-flex items-center gap-4 px-12 py-6 bg-white text-indigo-950 font-bold text-xl rounded-full shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] transition-all"
            >
              Initiate Launch
              <ArrowRightIcon className="w-6 h-6" />
            </motion.a>
          </motion.div>
        </div>
      </section >


    </div >
  );
}
