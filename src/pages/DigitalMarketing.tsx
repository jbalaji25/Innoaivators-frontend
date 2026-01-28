
import {
  MegaphoneIcon, LineChartIcon, TargetIcon, MousePointerClickIcon, SearchIcon,
  UsersIcon, MailIcon, PenToolIcon, Share2Icon, ArrowRightIcon, BarChart3Icon
} from 'lucide-react';
import { motion } from 'framer-motion';

import { BorderBeam } from '../components/BorderBeam';
import { SEO } from '../components/SEO';
import { LazyLottie } from '../components/LazyLottie';

export function DigitalMarketing() {

  const heroMetrics = [
    { value: '300%', label: 'Avg. Traffic Growth' },
    { value: '4x', label: 'ROAS Improvement' },
    { value: '#1', label: 'Search Rankings' },
  ];

  const features = [
    {
      icon: SearchIcon,
      title: 'SEO Domination',
      description: 'We don’t just rank keywords; we own the SERPs. Technical, on-page, and authority building that outlasts infrastructure updates.',
      accent: 'bg-orange-500',
    },
    {
      icon: MousePointerClickIcon,
      title: 'Performance PPC',
      description: 'Sniper-targeted ad campaigns on Google, Meta, and LinkedIn. We optimize for CPA and LTV, not just vanity clicks.',
      accent: 'bg-red-500',
    },
    {
      icon: PenToolIcon,
      title: 'Content Strategy',
      description: 'Stories that sell. Thought leadership, whitepapers, and viral video assets that position you as the industry authority.',
      accent: 'bg-amber-500',
    },
    {
      icon: UsersIcon,
      title: 'Social & Community',
      description: 'Building tribes, not just followers. Engagement strategies that turn passive scrollers into brand evangelists.',
      accent: 'bg-yellow-500',
    },
    {
      icon: MailIcon,
      title: 'Retention Loops',
      description: 'Email and SMS flows that print money on autopilot. We maximize customer lifetime value through hyper-personalization.',
      accent: 'bg-pink-500',
    },
    {
      icon: LineChartIcon,
      title: 'Data Attribution',
      description: 'The truth about your spend. Advanced tracking pixels and server-side tagging to know exactly where every dollar goes.',
      accent: 'bg-indigo-500',
    },
  ];

  const strategySteps = [
    {
      icon: TargetIcon,
      title: '1. Market Penetration',
      description: 'Identifying the blue oceans in your niche where competition is low and demand is untpped.',
      color: 'text-orange-400',
      borderColor: 'border-orange-500/30',
    },
    {
      icon: MegaphoneIcon,
      title: '2. Amplification',
      description: 'Deploying omnichannel campaigns to flood your funnel with high-intent qualified leads.',
      color: 'text-red-400',
      borderColor: 'border-red-500/30',
    },
    {
      icon: MousePointerClickIcon,
      title: '3. Conversion Optimization',
      description: 'A/B testing landing pages and offers to squeeze maximum revenue from every visitor.',
      color: 'text-amber-400',
      borderColor: 'border-amber-500/30',
    },
    {
      icon: Share2Icon,
      title: '4. Viral Expansion',
      description: 'Creating referral loops and brand equity that generates organic growth compounding over time.',
      color: 'text-yellow-400',
      borderColor: 'border-yellow-500/30',
    },
  ];

  return (
    <div className="relative w-full min-h-screen bg-[#050202] text-gray-200 font-sans selection:bg-orange-500/30 overflow-x-hidden">
      <SEO
        title="Digital Marketing"
        description="Result-driven digital marketing strategies to flood your funnel with high-intent leads and scale revenue."
        canonical="https://innoaivators.com/digital-marketing"
      />

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">

        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#050202] via-[#050202]/50 to-transparent z-0" />

        <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-start pt-40">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-orange-300 text-xs font-bold tracking-widest uppercase backdrop-blur-md shadow-[0_0_15px_rgba(249,115,22,0.3)]">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse shadow-[0_0_10px_#f97316]" />
              Revenue Acceleration
            </div>

            <h1 className="text-6xl md:text-8xl font-bold leading-[1.05] tracking-tight text-white">
              Result-Driven <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-amber-400 text-glow">Digital Marketing</span>
            </h1>

            <p className="text-xl text-gray-300 max-w-xl leading-relaxed">
              Driving brand growth through data-driven digital marketing strategies.
              Delivering measurable results across every online channel.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact"
                className="group relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden shadow-[0_0_20px_rgba(255,165,0,0.4)]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 opacity-0 group-hover:opacity-20 transition-opacity" />
                <span className="relative flex items-center gap-2">
                  Scale Revenue <ArrowRightIcon className="w-4 h-4" />
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

          {/* Hero Visual - Analytics Dashboard Art */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, type: "spring", bounce: 0.4 }}
            className="relative lg:h-[700px] flex items-center justify-center perspective-1000"
          >
            <div className="relative w-full max-w-lg aspect-[4/3] glass-panel rounded-2xl border border-white/10 p-6 shadow-2xl transform rotate-y-12 hover:rotate-y-0 transition-transform duration-700">
              <BorderBeam duration={8} size={300} colorFrom="#f97316" colorTo="#ef4444" />

              {/* Mock Chart */}
              <div className="w-full h-full flex flex-col justify-end space-y-4 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center opacity-10">
                  <BarChart3Icon className="w-64 h-64 text-orange-500" />
                </div>

                <div className="flex items-end justify-between h-48 px-4 gap-2">
                  {[0.4, 0.6, 0.3, 0.8, 0.5, 0.9, 0.7, 1.0].map((h, i) => (
                    <motion.div
                      key={i}
                      className="w-full bg-gradient-to-t from-orange-600 to-amber-400 rounded-t-sm relative group"
                      initial={{ height: 0 }}
                      animate={{ height: `${h * 100}%` }}
                      transition={{ duration: 1.5, delay: i * 0.1, ease: "easeOut" }}
                    >
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white text-black text-xs font-bold px-2 py-1 rounded">
                        +{Math.round(h * 100)}%
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="h-px bg-white/20 w-full" />
                <div className="flex justify-between text-xs text-gray-500 font-mono">
                  <span>JAN</span><span>FEB</span><span>MAR</span><span>APR</span><span>MAY</span><span>JUN</span><span>JUL</span><span>AUG</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- WHY DIGITAL MARKETING SECTION --- */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto relative p-10 rounded-[2rem] bg-gradient-to-br from-orange-950/40 to-red-950/40 backdrop-blur-xl border-2 border-orange-500/30 shadow-[0_0_50px_rgba(249,115,22,0.2)] overflow-hidden"
          >
            <BorderBeam duration={10} size={300} colorFrom="#f97316" colorTo="#ef4444" />

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 relative z-10">
              Why I need <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">digital marketing?</span>
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed relative z-10">
              In a crowded digital landscape, visibility is currency. Digital marketing isn't just about ads; it's about building a data-driven engine that consistently attracts, engages, and converts your ideal customers. It amplifies your brand's voice, targets the right audience with laser precision, and delivers measurable ROI that fuels sustainable business growth.
            </p>
          </motion.div>
        </div>
      </section >

      {/* --- CAPABILITIES SECTION --- */}
      < section className="py-32 relative" >
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-sm font-bold tracking-[0.3em] text-orange-400 uppercase mb-4 text-glow-mild">Tactics</h2>
            <h3 className="text-5xl md:text-6xl font-bold text-white mb-6">Growth Hacking</h3>
            <p className="text-gray-400 text-lg">Comprehensive strategies to capture market share.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative p-8 rounded-[2rem] glass-panel hover:bg-orange-900/10 transition-all duration-300"
              >
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-2xl ${feature.accent} bg-opacity-20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(255,165,0,0.3)]`}>
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>

                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-orange-300 transition-colors">{feature.title}</h4>
                  <p className="text-gray-400 leading-relaxed text-sm">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section >

      {/* --- JOURNEY SECTION --- */}
      < section id="process" className="py-32 bg-black relative" >
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-900 to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-bold tracking-[0.2em] text-red-400 uppercase mb-4 text-glow-mild">Methodology</h2>
              <h3 className="text-5xl md:text-6xl font-bold text-white mb-12">Total Market <br />Domination</h3>

              <div className="space-y-12">
                {strategySteps.map((step, index) => (
                  <div key={step.title} className="flex gap-8 group">
                    <div className="flex-col items-center hidden md:flex">
                      <div className={`w-12 h-12 rounded-lg border ${step.borderColor} bg-white/5 flex items-center justify-center z-10 group-hover:rotate-45 transition-transform duration-300`}>
                        <step.icon className={`w-5 h-5 ${step.color}`} />
                      </div>
                      {index !== strategySteps.length - 1 && (
                        <div className="w-px h-full bg-white/10 my-2" />
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
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-[2rem] overflow-hidden border border-orange-500/20 shadow-[0_0_60px_rgba(249,115,22,0.15)] group h-[500px]">
                <BorderBeam duration={12} size={300} colorFrom="#f97316" colorTo="#fb923c" />
                <LazyLottie
                  animationPath="proksy_digital.json"
                  loop={true}
                  className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-1000"
                  style={{ filter: 'hue-rotate(200deg) saturate(1.8)' }}
                />
                <div className="absolute inset-0 bg-orange-950/40 mix-blend-multiply" />

                {/* Trending overlay removed */}
              </div>
            </motion.div>
          </div>
        </div>
      </section >

      {/* --- CTA SECTION --- */}
      < section className="py-40 relative overflow-hidden" >
        <div className="absolute inset-0 bg-[#050202]">

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
              Ready to reach <br /><span className="italic font-serif text-orange-400">the right audience?</span>
            </h2>
            <p className="text-2xl text-orange-200 mb-16 max-w-2xl mx-auto">
              We help your business grow online through targeted digital marketing.
              Attract customers, increase visibility, and boost conversions.
            </p>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/contact"
              className="inline-flex items-center gap-4 px-12 py-6 bg-white text-orange-950 font-bold text-xl rounded-full shadow-[0_0_40px_rgba(249,115,22,0.4)] hover:shadow-[0_0_60px_rgba(249,115,22,0.6)] transition-all"
            >
              Start Campaign
              <ArrowRightIcon className="w-6 h-6" />
            </motion.a>
          </motion.div>
        </div>
      </section >


    </div >
  );
}
