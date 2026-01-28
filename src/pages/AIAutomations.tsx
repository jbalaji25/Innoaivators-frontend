
import {
  BrainCircuitIcon, BotIcon, WorkflowIcon, BarChart3Icon, ZapIcon,
  ShieldIcon, ArrowRightIcon, CpuIcon, NetworkIcon
} from 'lucide-react';
import { motion } from 'framer-motion';

import { BorderBeam } from '../components/BorderBeam';
import { TechStackCarousel } from '../components/TechStackCarousel';
import { SEO } from '../components/SEO';
import { LazyLottie } from '../components/LazyLottie';


export function AIAutomations() {

  const heroMetrics = [
    { value: '10x', label: 'ROI First Year' },
    { value: '24/7', label: 'Autonomous Ops' },
    { value: '0%', label: 'Human Error' },
  ];

  const features = [
    {
      icon: BrainCircuitIcon,
      title: 'Cognitive Workflows',
      description: 'Agents that reason, plan, and execute complex tasks. We replace rigid scripts with adaptive neural networks.',
      accent: 'bg-violet-500',
    },
    {
      icon: BotIcon,
      title: 'Intelligent Chatbots',
      description: 'Customer service that actually feels human. NLP engines that understand context, sentiment, and nuance.',
      accent: 'bg-rose-500',
    },
    {
      icon: WorkflowIcon,
      title: 'End-to-End Orchestration',
      description: 'Seamlessly connect your CRM, ERP, and legacy systems into a unified, self-driving ecosystem.',
      accent: 'bg-fuchsia-500',
    },
    {
      icon: BarChart3Icon,
      title: 'Predictive Analytics',
      description: 'Don’t just react to data—anticipate it. Forecast trends, churn, and revenue with military-grade precision.',
      accent: 'bg-indigo-500',
    },
    {
      icon: ShieldIcon,
      title: 'Ethical AI Guardrails',
      description: 'Innovation with integrity. Robust safety layers ensure your AI aligns with your brand values and compliance.',
      accent: 'bg-purple-500',
    },
    {
      icon: ZapIcon,
      title: 'Instant Scalability',
      description: 'Spin up thousands of virtual agents in seconds. Handle Black Friday spikes without hiring a single temp.',
      accent: 'bg-pink-500',
    },
  ];

  const technologies = [
    'OpenAI GPT-4', 'Anthropic Claude', 'Llama 2', 'LangChain', 'Pinecone',
    'Hugging Face', 'TensorFlow', 'PyTorch', 'AutoGPT', 'Stable Diffusion',
    'Midjourney', 'Zapier'
  ];

  const processSteps = [
    {
      icon: () => <CpuIcon className="w-6 h-6 text-violet-400" />,
      title: '1. Audit & Opportunity',
      description: 'We analyze your workflows to identify high-friction bottlenecks ripe for intelligent automation.',
      color: 'text-violet-400',
      borderColor: 'border-violet-500/30',
    },
    {
      icon: () => <NetworkIcon className="w-6 h-6 text-rose-400" />,
      title: '2. Model Selection',
      description: 'Choosing the right brain for the job. GPT-4, Claude, or custom fine-tuned LLaMA models hosted privately.',
      color: 'text-rose-400',
      borderColor: 'border-rose-500/30',
    },
    {
      icon: () => <BotIcon className="w-6 h-6 text-fuchsia-400" />,
      title: '3. Integration & Training',
      description: 'Connecting the AI to your data silos and training it on your company\'s unique knowledge base.',
      color: 'text-fuchsia-400',
      borderColor: 'border-fuchsia-500/30',
    },
    {
      icon: () => <ZapIcon className="w-6 h-6 text-indigo-400" />,
      title: '4. Autonomous Deployment',
      description: 'Live testing, monitoring, and continuous reinforcement learning to improve performance over time.',
      color: 'text-indigo-400',
      borderColor: 'border-indigo-500/30',
    },
  ];

  return (
    <div className="relative w-full min-h-screen bg-[#050205] text-gray-200 font-sans selection:bg-rose-500/30 overflow-x-hidden">
      <SEO
        title="AI Automations"
        description="Automate your business processes with intelligent AI solutions. We build cognitive workflows and autonomous agents."
        canonical="https://innoaivators.com/ai-automations"
      />

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">

        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#050205] via-[#050205]/50 to-transparent z-0" />

        <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-start pt-40">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-rose-300 text-xs font-bold tracking-widest uppercase backdrop-blur-md shadow-[0_0_15px_rgba(244,63,94,0.3)]">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse shadow-[0_0_10px_#f43f5e]" />
              Artificial Superintelligence
            </div>

            <h1 className="text-6xl md:text-8xl font-bold leading-[1.05] tracking-tight text-white">
              The Age of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-rose-400 text-glow">Automation.</span>
            </h1>

            <p className="text-xl text-gray-400 max-w-xl leading-relaxed">
              Automating business processes with intelligent AI solutions.
              Improving efficiency, accuracy, and scalable growth.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact"
                className="group relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden shadow-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-rose-500 opacity-0 group-hover:opacity-20 transition-opacity" />
                <span className="relative flex items-center gap-2">
                  Automate Now <ArrowRightIcon className="w-4 h-4" />
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

          {/* Hero Visual - Holographic Brain */}
          <motion.div
            initial={{ opacity: 0, filter: "blur(20px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.5 }}
            className="relative lg:h-[700px] flex items-center justify-center perspective-1000"
          >
            <div className="relative w-full max-w-lg aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-rose-600/20 rounded-full blur-[80px] animate-pulse" />

              <div className="relative w-full h-full glass-panel rounded-3xl overflow-hidden border border-white/10 flex items-center justify-center group">
                <BorderBeam duration={10} size={600} colorFrom="#8b5cf6" colorTo="#f43f5e" />

                {/* Abstract AI Visualization */}
                <div className="grid grid-cols-6 gap-2 w-3/4 h-3/4 opacity-50 group-hover:opacity-80 transition-opacity duration-1000">
                  {Array.from({ length: 36 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="bg-white/10 rounded-sm"
                      animate={{
                        backgroundColor: [
                          'rgba(255,255,255,0.1)',
                          Math.random() > 0.5 ? 'rgba(139, 92, 246, 0.6)' : 'rgba(244, 63, 94, 0.6)',
                          'rgba(255,255,255,0.1)'
                        ],
                        scale: [1, 1.2, 1]
                      }}
                      transition={{
                        duration: 2 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2
                      }}
                    />
                  ))}
                </div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <BrainCircuitIcon className="w-32 h-32 text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.5)] animate-float" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- TECH STACK CAROUSEL --- */}
      <TechStackCarousel technologies={technologies} />

      {/* --- CAPABILITIES SECTION --- */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-sm font-bold tracking-[0.3em] text-violet-400 uppercase mb-4 text-glow-mild">Singularity</h2>
            <h3 className="text-5xl md:text-6xl font-bold text-white mb-6">Beyond Human Limits</h3>
            <p className="text-gray-400 text-lg">Scalable intelligence for the modern enterprise.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative p-8 rounded-[2rem] glass-panel hover:bg-violet-900/10 transition-all duration-300"
              >
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-2xl ${feature.accent} bg-opacity-20 flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300`}>
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>

                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-violet-300 transition-colors">{feature.title}</h4>
                  <p className="text-gray-400 leading-relaxed text-sm">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PROCESS SECTION --- */}
      <section id="process" className="py-32 bg-black relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-bold tracking-[0.2em] text-rose-400 uppercase mb-4 text-glow-mild">Deployment</h2>
              <h3 className="text-5xl md:text-6xl font-bold text-white mb-12">Intelligence <br />Integrated</h3>

              <div className="space-y-12">
                {processSteps.map((step, index) => (
                  <div key={step.title} className="flex gap-8 group">
                    <div className="flex-col items-center hidden md:flex">
                      <div className={`w-12 h-12 rounded-full border ${step.borderColor} bg-white/5 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(0,0,0,0.5)]`}>
                        {step.icon()}
                      </div>
                      {index !== processSteps.length - 1 && (
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
              <div className="relative rounded-[2rem] overflow-hidden border border-violet-500/20 shadow-[0_0_60px_rgba(139,92,246,0.15)] group h-[500px]">
                <BorderBeam duration={12} size={300} colorFrom="#a78bfa" colorTo="#8b5cf6" />
                <LazyLottie
                  animationPath="man_robot_workplace.json"
                  loop={true}
                  className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-1000"
                  style={{ filter: 'hue-rotate(280deg) saturate(2.2)' }}
                />
                <div className="absolute inset-0 bg-violet-950/40 mix-blend-multiply" />

                {/* Chat UI Overlay removed */}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#050205]">

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
              Ready to automate <br /><span className="italic font-serif text-rose-400">your business processes?</span>
            </h2>
            <p className="text-2xl text-rose-200 mb-16 max-w-2xl mx-auto">
              We use AI to automate tasks, reduce manual work, and improve efficiency.
              Helping your business save time, reduce costs, and scale faster.
            </p>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/contact"
              className="inline-flex items-center gap-4 px-12 py-6 bg-white text-rose-950 font-bold text-xl rounded-full shadow-[0_0_40px_rgba(244,63,94,0.4)] hover:shadow-[0_0_60px_rgba(244,63,94,0.6)] transition-all"
            >
              Deploy AI Agent
              <ArrowRightIcon className="w-6 h-6" />
            </motion.a>
          </motion.div>
        </div>
      </section>


    </div>
  );
}
