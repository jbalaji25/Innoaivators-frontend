import React, { useState } from 'react';

import {
  MailIcon, PhoneIcon, MapPinIcon, SendIcon, Check
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import { BorderBeam } from '../components/BorderBeam';
import { SEO } from '../components/SEO';

import backgroundVideo from '../assets/videos/Sin_Side_Studios.mp4';

export function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    countryCode: '+91',
    phone: '',
    subject: 'General Inquiry',
    areaOfInterest: '',
    companyName: '',
    role: '',
    yearStarted: '',
    interestedArea: '',
    yearsOfExperience: '',
    previousCompany: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setStatus('success');
        setFormState({
          name: '',
          email: '',
          countryCode: '+91',
          phone: '',
          subject: 'General Inquiry',
          areaOfInterest: '',
          companyName: '',
          role: '',
          yearStarted: '',
          interestedArea: '',
          yearsOfExperience: '',
          previousCompany: '',
          message: ''
        });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        const errorData = await response.json();
        console.error('Backend error:', errorData);
        console.error('Status:', response.status);
        setStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      console.error('Error details:', error instanceof Error ? error.message : 'Unknown error');
      setStatus('error');
    }
  };

  const contactInfo = [
    {
      icon: MailIcon,
      title: 'Email Us',
      value: 'innoaivation@gmail.com',
      link: 'mailto:innoaivation@gmail.com',
      color: 'text-blue-400',
      bg: 'bg-blue-500/10'
    },
    {
      icon: PhoneIcon,
      title: 'Call Us',
      value: '+91 90877 86231 / +91 95664 65970',
      link: 'tel:+919087786231',
      color: 'text-purple-400',
      bg: 'bg-purple-500/10'
    },
    {
      icon: MapPinIcon,
      title: 'Visit Us',
      value: 'Near Thanku Bakery, Tirupparankunram Rd, pallivasal complex, Madurai, Tamil Nadu 625011',
      link: '#',
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/10'
    }
  ];

  return (
    <div className="relative w-full min-h-screen bg-[#050510] text-gray-200 font-sans selection:bg-purple-500/30 overflow-x-hidden">
      <SEO
        title="Contact Us"
        description="Get in touch with Innoaivators for your next digital project. We're here to help you build the impossible."
        canonical="https://innoaivators.com/contact"
      />
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover z-0 opacity-30 pointer-events-none"
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-40">
        <div className="absolute inset-0 z-0">
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-purple-300 text-xs font-bold tracking-widest uppercase backdrop-blur-md mb-8">
              <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse shadow-[0_0_10px_#a855f7]" />
              24/7 Global Support
            </div>

            <h1 className="text-6xl md:text-8xl font-bold leading-tight text-white mb-6">
              Let's Build the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-glow">Impossible.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* --- FORM SECTION --- */}
      <section className="pb-32 px-6 relative z-10">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <h2 className="text-3xl font-bold text-white">Get in touch</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Whether you have a groundbreaking idea or need to modernize your legacy infrastructure, our engineers are ready to deploy.
              </p>

              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <motion.a
                    key={item.title}
                    href={item.link}
                    whileHover={{ scale: 1.02 }}
                    className={`flex items-center gap-6 p-6 rounded-2xl border border-white/5 glass-panel hover:bg-white/5 transition-all group`}
                  >
                    <div className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center`}>
                      <item.icon className={`w-6 h-6 ${item.color}`} />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 uppercase font-bold tracking-wider mb-1">{item.title}</div>
                      <div className="text-xl text-white font-bold group-hover:text-purple-300 transition-colors">{item.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative p-8 md:p-10 rounded-[2rem] bg-[#0A0A12] border border-white/10 shadow-2xl">
                <BorderBeam duration={10} size={100} colorFrom="#3b82f6" colorTo="#a855f7" />

                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-widest pl-1">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all font-medium"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-widest pl-1">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all font-medium"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest pl-1">Subject</label>
                    <select
                      name="subject"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all font-medium appearance-none [&>option]:bg-gray-900 [&>option]:text-white"
                      required
                    >
                      <option className="bg-gray-900 text-white" value="General Inquiry">General Inquiry</option>
                      <option className="bg-gray-900 text-white" value="Start a Project">Start a Project</option>
                      <option className="bg-gray-900 text-white" value="Partnership">Partnership</option>
                      <option className="bg-gray-900 text-white" value="Careers">Careers</option>
                    </select>
                  </div>

                  {formState.subject === 'Start a Project' && (
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-widest pl-1">Area of Interest</label>
                      <select
                        name="areaOfInterest"
                        value={formState.areaOfInterest}
                        onChange={(e) => setFormState({ ...formState, areaOfInterest: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all font-medium appearance-none [&>option]:bg-gray-900 [&>option]:text-white"
                        required
                      >
                        <option className="bg-gray-900 text-white" value="">Select a service...</option>
                        <option className="bg-gray-900 text-white" value="Web Development">Web Development</option>
                        <option className="bg-gray-900 text-white" value="App Development">App Development</option>
                        <option className="bg-gray-900 text-white" value="IoT Development">IoT Development</option>
                        <option className="bg-gray-900 text-white" value="AI Automations">AI Automations</option>
                        <option className="bg-gray-900 text-white" value="Digital Marketing">Digital Marketing</option>
                      </select>
                    </div>
                  )}

                  {formState.subject === 'Partnership' && (
                    <>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-widest pl-1">Company Name</label>
                        <input
                          type="text"
                          name="companyName"
                          value={formState.companyName}
                          onChange={(e) => setFormState({ ...formState, companyName: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all font-medium"
                          placeholder="Your Company Name"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-widest pl-1">Your Role in Company</label>
                        <input
                          type="text"
                          name="role"
                          value={formState.role}
                          onChange={(e) => setFormState({ ...formState, role: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all font-medium"
                          placeholder="e.g., CEO, Founder, Business Development Manager"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-widest pl-1">Year Company Started</label>
                        <input
                          type="number"
                          name="yearStarted"
                          value={formState.yearStarted}
                          onChange={(e) => setFormState({ ...formState, yearStarted: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all font-medium"
                          placeholder="e.g., 2020"
                          min="1900"
                          max={new Date().getFullYear()}
                          required
                        />
                      </div>
                    </>
                  )}

                  {formState.subject === 'Careers' && (
                    <>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-widest pl-1">Area of Work Looking For</label>
                        <select
                          name="interestedArea"
                          value={formState.interestedArea}
                          onChange={(e) => setFormState({ ...formState, interestedArea: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all font-medium appearance-none [&>option]:bg-gray-900 [&>option]:text-white"
                          required
                        >
                          <option className="bg-gray-900 text-white" value="">Select area of work...</option>
                          <option className="bg-gray-900 text-white" value="Web Development">Web Development</option>
                          <option className="bg-gray-900 text-white" value="App Development">App Development</option>
                          <option className="bg-gray-900 text-white" value="IoT Development">IoT Development</option>
                          <option className="bg-gray-900 text-white" value="AI/ML Engineering">AI/ML Engineering</option>
                          <option className="bg-gray-900 text-white" value="Digital Marketing">Digital Marketing</option>
                          <option className="bg-gray-900 text-white" value="UI/UX Design">UI/UX Design</option>
                          <option className="bg-gray-900 text-white" value="Project Management">Project Management</option>
                          <option className="bg-gray-900 text-white" value="Business Development">Business Development</option>
                          <option className="bg-gray-900 text-white" value="Other">Other</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-widest pl-1">Years of Experience</label>
                        <select
                          name="yearsOfExperience"
                          value={formState.yearsOfExperience}
                          onChange={(e) => setFormState({ ...formState, yearsOfExperience: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all font-medium appearance-none [&>option]:bg-gray-900 [&>option]:text-white"
                          required
                        >
                          <option className="bg-gray-900 text-white" value="">Select experience...</option>
                          <option className="bg-gray-900 text-white" value="6 months">6 months</option>
                          <option className="bg-gray-900 text-white" value="0-1 year">0-1 year</option>
                          <option className="bg-gray-900 text-white" value="1-2 years">1-2 years</option>
                          <option className="bg-gray-900 text-white" value="2-3 years">2-3 years</option>
                          <option className="bg-gray-900 text-white" value="Above 3 years">Above 3 years</option>
                        </select>
                      </div>

                      {(formState.yearsOfExperience === '1-2 years' ||
                        formState.yearsOfExperience === '2-3 years' ||
                        formState.yearsOfExperience === 'Above 3 years') && (
                          <div className="space-y-2">
                            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest pl-1">Your Previous Worked Company</label>
                            <input
                              type="text"
                              name="previousCompany"
                              value={formState.previousCompany}
                              onChange={(e) => setFormState({ ...formState, previousCompany: e.target.value })}
                              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all font-medium"
                              placeholder="Your most recent company"
                              required
                            />
                          </div>
                        )}
                    </>
                  )}

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest pl-1">Phone Number</label>
                    <div className="flex gap-2">
                      <select
                        name="countryCode"
                        value={formState.countryCode}
                        onChange={(e) => setFormState({ ...formState, countryCode: e.target.value })}
                        className="w-32 bg-white/5 border border-white/10 rounded-xl px-3 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all font-medium [&>option]:bg-gray-900 [&>option]:text-white"
                      >
                        <option className="bg-gray-900 text-white" value="+91">🇮🇳 +91</option>
                        <option className="bg-gray-900 text-white" value="+1">🇺🇸 +1</option>
                        <option className="bg-gray-900 text-white" value="+44">🇬🇧 +44</option>
                        <option className="bg-gray-900 text-white" value="+61">🇦🇺 +61</option>
                        <option className="bg-gray-900 text-white" value="+81">🇯🇵 +81</option>
                        <option className="bg-gray-900 text-white" value="+86">🇨🇳 +86</option>
                        <option className="bg-gray-900 text-white" value="+33">🇫🇷 +33</option>
                        <option className="bg-gray-900 text-white" value="+49">🇩🇪 +49</option>
                        <option className="bg-gray-900 text-white" value="+7">🇷🇺 +7</option>
                        <option className="bg-gray-900 text-white" value="+55">🇧🇷 +55</option>
                        <option className="bg-gray-900 text-white" value="+27">🇿🇦 +27</option>
                        <option className="bg-gray-900 text-white" value="+82">🇰🇷 +82</option>
                        <option className="bg-gray-900 text-white" value="+65">🇸🇬 +65</option>
                        <option className="bg-gray-900 text-white" value="+971">🇦🇪 +971</option>
                        <option className="bg-gray-900 text-white" value="+966">🇸🇦 +966</option>
                        <option className="bg-gray-900 text-white" value="+60">🇲🇾 +60</option>
                        <option className="bg-gray-900 text-white" value="+62">🇮🇩 +62</option>
                        <option className="bg-gray-900 text-white" value="+63">🇵🇭 +63</option>
                        <option className="bg-gray-900 text-white" value="+66">🇹🇭 +66</option>
                        <option className="bg-gray-900 text-white" value="+84">🇻🇳 +84</option>
                        <option className="bg-gray-900 text-white" value="+92">🇵🇰 +92</option>
                        <option className="bg-gray-900 text-white" value="+880">🇧🇩 +880</option>
                        <option className="bg-gray-900 text-white" value="+94">🇱🇰 +94</option>
                        <option className="bg-gray-900 text-white" value="+977">🇳🇵 +977</option>
                      </select>
                      <input
                        type="tel"
                        name="phone"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all font-medium"
                        placeholder="98765 43210"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest pl-1">Message</label>
                    <textarea
                      rows={4}
                      name="message"
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all font-medium resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className={`w-full py-4 rounded-xl text-white font-bold text-lg shadow-lg transition-all flex items-center justify-center gap-2 ${status === 'success'
                      ? 'bg-green-600 hover:bg-green-700'
                      : status === 'error'
                        ? 'bg-red-600 hover:bg-red-700'
                        : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-purple-500/25 transform hover:scale-[1.02] active:scale-[0.98]'
                      }`}
                  >
                    {status === 'loading' ? (
                      <span className="animate-pulse">Sending...</span>
                    ) : status === 'success' ? (
                      <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="flex items-center gap-2"
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                          className="bg-white text-green-600 rounded-full p-1"
                        >
                          <Check className="w-4 h-4" strokeWidth={3} />
                        </motion.div>
                        <span>Message Sent!</span>
                      </motion.div>
                    ) : status === 'error' ? (
                      <span>Failed to Send. Try Again.</span>
                    ) : (
                      <>
                        <SendIcon className="w-5 h-5" />
                        Send
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>

          </div>
        </div>
      </section>


      <AnimatePresence>
        {status === 'loading' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl"
          >
            <div className="text-center">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="relative w-24 h-24 mx-auto mb-8"
              >
                {/* Orbital Rings */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border-2 border-purple-500/30 border-t-purple-500"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-2 rounded-full border-2 border-blue-500/30 border-b-blue-500"
                />

                {/* Center Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 5, 0]
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <SendIcon className="w-8 h-8 text-white" />
                  </motion.div>
                </div>
              </motion.div>

              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-2xl font-bold text-white mb-2"
              >
                Transmitting Data...
              </motion.h3>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-gray-400"
              >
                Establishing secure connection
              </motion.p>
            </div>
          </motion.div>
        )}

        {status === 'success' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="bg-[#0A0A12] border border-white/10 p-8 md:p-12 rounded-[2rem] shadow-2xl max-w-lg w-full text-center relative overflow-hidden"
            >
              {/* Background Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-purple-500/20 rounded-full blur-[50px]" />

              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="w-24 h-24 bg-gradient-to-tr from-green-400 to-emerald-600 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg shadow-green-500/30 relative z-10"
              >
                <Check className="w-12 h-12 text-white" strokeWidth={3} />
              </motion.div>

              <motion.h3
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-3xl font-bold text-white mb-4 relative z-10"
              >
                Message Sent!
              </motion.h3>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-gray-400 mb-8 relative z-10"
              >
                Thank you for reaching out. We have received your transmission and will get back to you shortly.
              </motion.p>

              <motion.button
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                onClick={() => setStatus('idle')}
                className="px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/10 rounded-full text-white font-semibold transition-all relative z-10"
              >
                Close
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
