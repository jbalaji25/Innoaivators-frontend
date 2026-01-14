
import {
  CpuIcon, WifiIcon, DatabaseIcon, GaugeIcon, ShieldCheckIcon, NetworkIcon,
  RadarIcon, WavesIcon, SatelliteIcon, ArrowRightIcon, ServerIcon, SignalIcon
} from 'lucide-react';
import { motion } from 'framer-motion';

import { BorderBeam } from '../components/BorderBeam';
import { TechStackCarousel } from '../components/TechStackCarousel';
import { SEO } from '../components/SEO';
import Lottie from 'lottie-react';
import smartCity from '../assets/animations/smart_city.json';

export function IoTDevelopment() {

  const heroMetrics = [
    { value: '99.99%', label: 'Device Uptime' },
    { value: '<50ms', label: 'Latency Achieved' },
    { value: '10M+', label: 'Events / Second' },
  ];

  const capabilities = [
    {
      icon: CpuIcon,
      title: 'Edge Intelligence',
      description: 'Run complex ML models directly on-device. We optimize firmware to process data where it’s created, reducing latency and cloud costs.',
      accent: 'bg-emerald-500',
    },
    {
      icon: WifiIcon,
      title: 'Universal Connectivity',
      description: 'Seamless mesh networking across protocols. BLE, LoRaWAN, NB-IoT, or 5G—we ensure your devices stay connected in any environment.',
      accent: 'bg-teal-500',
    },
    {
      icon: DatabaseIcon,
      title: 'Real-Time Data Pipelines',
      description: 'Ingest millions of data points per second. Our scalable architectures turn raw telemetry into actionable business insights instantly.',
      accent: 'bg-cyan-500',
    },
    {
      icon: GaugeIcon,
      title: 'Predictive Maintenance',
      description: 'Stop failures before they happen. Advanced anomaly detection algorithms alert you to hardware degradation days in advance.',
      accent: 'bg-lime-500',
    },
    {
      icon: ShieldCheckIcon,
      title: 'Zero-Trust Security',
      description: 'Hardware-backed attestation and end-to-end encryption. We treat every device as a fortress, securing your network from the edge in.',
      accent: 'bg-green-500',
    },
    {
      icon: NetworkIcon,
      title: 'Fleet Orchestration',
      description: 'Manage 10 or 10,000 devices with ease. OTA updates, remote diagnostics, and mass provisioning tools built for scale.',
      accent: 'bg-sky-500',
    },
  ];

  const deploymentJourney = [
    {
      icon: RadarIcon,
      title: 'Discovery & Blueprint',
      description: 'We audit your physical environment and business goals to architect a hardware-agnostic solution.',
      color: 'text-emerald-400',
      borderColor: 'border-emerald-500/30',
    },
    {
      icon: CpuIcon,
      title: 'Prototyping & Firmware',
      description: 'Rapid hardware iteration and firmware development to validate sensor accuracy and connectivity.',
      color: 'text-teal-400',
      borderColor: 'border-teal-500/30',
    },
    {
      icon: WavesIcon,
      title: 'Cloud Integration',
      description: 'Building the secure bridge between physical devices and your digital infrastructure/dashboard.',
      color: 'text-cyan-400',
      borderColor: 'border-cyan-500/30',
    },
    {
      icon: SatelliteIcon,
      title: 'Global Deployment',
      description: 'Staged rollout strategies, field calibration, and handover to your operations team.',
      color: 'text-lime-400',
      borderColor: 'border-lime-500/30',
    },
  ];

  const technologies = [
    'AWS IoT Core', 'Azure IoT Hub', 'MQTT', 'OPC UA', 'CoAP',
    'Rust', 'C++', 'Python', 'InfluxDB', 'Grafana', 'TensorFlow Lite', 'Kubernetes'
  ];

  return (
    <div className="relative w-full min-h-screen bg-[#020502] text-gray-200 font-sans selection:bg-emerald-500/30 overflow-x-hidden">
      <SEO
        title="IoT Development"
        description="Intelligent IoT solutions for connected ecosystems. We design secure, scalable smart systems for industrial and consumer use."
        canonical="https://innoaivators.com/iot-development"
      />

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">

        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#020502] via-[#020502]/50 to-transparent z-0" />

        <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-start pt-40">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-emerald-300 text-xs font-bold tracking-widest uppercase backdrop-blur-md shadow-[0_0_15px_rgba(16,185,129,0.3)]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_#10b981]" />
              Connected Intelligence
            </div>

            <h1 className="text-6xl md:text-8xl font-bold leading-[1.05] tracking-tight text-white">
              Custom <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 text-glow">IoT Solutions</span>
            </h1>

            <p className="text-xl text-gray-300 max-w-xl leading-relaxed">
              Designing intelligent IoT solutions for connected ecosystems.
              Enhancing efficiency through secure, scalable smart systems.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact"
                className="group relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden shadow-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-500 opacity-0 group-hover:opacity-20 transition-opacity" />
                <span className="relative flex items-center gap-2">
                  Connect Now <ArrowRightIcon className="w-4 h-4" />
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

          {/* Hero Visual - Network Node */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative lg:h-[700px] flex items-center justify-center perspective-1000"
          >
            <div className="relative w-full max-w-lg aspect-square glass-panel rounded-full p-10 flex items-center justify-center animate-[spin_60s_linear_infinite]">
              {/* Inner rings */}
              <div className="absolute inset-10 border border-emerald-500/20 rounded-full border-dashed animate-[spin_40s_linear_infinite_reverse]" />
              <div className="absolute inset-20 border border-teal-500/30 rounded-full border-dotted animate-[spin_20s_linear_infinite]" />

              {/* Core */}
              <div className="relative w-32 h-32 bg-emerald-900/40 rounded-full flex items-center justify-center backdrop-blur-xl border border-emerald-500/50 shadow-[0_0_50px_rgba(16,185,129,0.4)] z-20">
                <ServerIcon className="w-12 h-12 text-emerald-300" />
              </div>

              {/* Satellite Nodes */}
              {[0, 60, 120, 180, 240, 300].map((deg, i) => (
                <motion.div
                  key={i}
                  className="absolute w-12 h-12 bg-[#051005] border border-white/10 rounded-xl flex items-center justify-center shadow-lg"
                  style={{
                    top: '50%', left: '50%',
                    transform: `rotate(${deg}deg) translate(140px) rotate(-${deg}deg)`
                  }}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                >
                  <SignalIcon className="w-5 h-5 text-teal-400" />
                </motion.div>
              ))}

              <BorderBeam duration={10} size={500} colorFrom="#10b981" colorTo="#34d399" glowIntensity={2} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- TECH STACK CAROUSEL --- */}
      <TechStackCarousel technologies={technologies} />

      {/* --- WHY IOT DEVELOPMENT SECTION --- */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto relative p-10 rounded-[2rem] bg-gradient-to-br from-emerald-950/40 to-teal-950/40 backdrop-blur-xl border-2 border-emerald-500/30 shadow-[0_0_50px_rgba(16,185,129,0.2)] overflow-hidden"
          >
            <BorderBeam duration={10} size={300} colorFrom="#10b981" colorTo="#34d399" />

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 relative z-10">
              Why I need <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">IoT development?</span>
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed relative z-10">
              IoT transforms physical operations into digital intelligence. By connecting your assets, you gain real-time visibility, predictive maintenance capabilities, and data-driven insights that drive efficiency. Whether it's optimizing supply chains or creating smart products, IoT development bridges the gap between the physical and digital worlds, unlocking new value and competitive advantages.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- CAPABILITIES SECTION --- */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-sm font-bold tracking-[0.3em] text-emerald-400 uppercase mb-4 text-glow-mild">Capabilities</h2>
            <h3 className="text-5xl md:text-6xl font-bold text-white mb-6">Industrial Grade</h3>
            <p className="text-gray-400 text-lg">Robust solutions for mission-critical environments.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative p-8 rounded-[2rem] glass-panel hover:bg-emerald-900/10 transition-all duration-300"
              >
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-2xl ${feature.accent} bg-opacity-20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>

                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">{feature.title}</h4>
                  <p className="text-gray-400 leading-relaxed text-sm">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- JOURNEY SECTION --- */}
      <section id="process" className="py-32 bg-black relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-emerald-900/10 to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-bold tracking-[0.2em] text-teal-400 uppercase mb-4 text-glow-mild">Deployment</h2>
              <h3 className="text-5xl md:text-6xl font-bold text-white mb-12">Hardware to <br />Hyper-Scale</h3>

              <div className="space-y-12">
                {deploymentJourney.map((step, index) => (
                  <div key={step.title} className="flex gap-8 group">
                    <div className="flex-col items-center hidden md:flex">
                      <div className={`w-12 h-12 rounded-full border ${step.borderColor} bg-white/5 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(0,0,0,0.5)]`}>
                        <step.icon className={`w-5 h-5 ${step.color}`} />
                      </div>
                      {index !== deploymentJourney.length - 1 && (
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
              <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-3xl group transform transition-transform hover:scale-[1.01] duration-700">
                <BorderBeam duration={12} size={300} colorFrom="#10b981" colorTo="#34d399" />
                <Lottie
                  animationData={smartCity}
                  loop={true}
                  className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-1000"
                  style={{ filter: 'hue-rotate(200deg) saturate(1.8)' }}
                />
                <div className="absolute inset-0 bg-emerald-950/40 mix-blend-multiply" />

                {/* Data overlay */}
                {/* Node status overlay removed */}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#051005]">

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
              Ready to connect <br /><span className="italic font-serif text-emerald-400">your devices?</span>
            </h2>
            <p className="text-2xl text-emerald-200 mb-16 max-w-2xl mx-auto">
              We build smart IoT solutions that link devices, systems, and data.
              Helping businesses monitor, automate, and grow efficiently.
            </p>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/contact"
              className="inline-flex items-center gap-4 px-12 py-6 bg-white text-emerald-950 font-bold text-xl rounded-full shadow-[0_0_40px_rgba(16,185,129,0.4)] hover:shadow-[0_0_60px_rgba(16,185,129,0.6)] transition-all"
            >
              Initialize Network
              <ArrowRightIcon className="w-6 h-6" />
            </motion.a>
          </motion.div>
        </div>
      </section>


    </div>
  );
}
