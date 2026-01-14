
import './About.css';
import { TargetIcon, UsersIcon, TrophyIcon, RocketIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { TeamCarousel } from '../components/TeamCarousel';
import { BorderBeam } from '../components/BorderBeam';
import { SEO } from '../components/SEO';
import video from '../backgroundeffects/3129977-uhd_3840_2160_30fps.mp4';
import abdur from '../team/abdur.jpg';
import afsal from '../team/afsal.jpg';
import allen from '../team/allen.jpg';

import mafaz from '../team/mafaz.jpg';
import safiq from '../team/safiq.jpg';
import useMediaQuery from '../hooks/useMediaQuery';

import Timeline from './Timeline';
import './Timeline.css';

export function About() {
  const isLg = useMediaQuery('(min-width: 1024px)');
  const values = [
    {
      icon: TargetIcon,
      title: 'Mission-Driven',
      description: "We're committed to delivering innovative solutions that drive real business impact.",
    },
    {
      icon: UsersIcon,
      title: 'Client-Focused',
      description: 'Your success is our success. We partner closely with you every step of the way.',
    },
    {
      icon: TrophyIcon,
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from code to customer service.',
    },
    {
      icon: RocketIcon,
      title: 'Innovation',
      description: 'We stay ahead of the curve, constantly exploring new technologies and methodologies.',
    },
  ];

  const members = [
    {
      id: '1',
      name: 'Abdur',
      role: 'Founder, Gen AI Specialist, IoT Developer',
      image: abdur,
    },
    {
      id: '2',
      name: 'Afsal',
      role: 'Co-founder, CEO',
      image: afsal,
    },
    {
      id: '3',
      name: 'Allen',
      role: 'Co-founder, MD',
      image: allen,
    },

    {
      id: '5',
      name: 'Mafaz',
      role: 'Co-founder, AI Specialist & Prompt Engineer',
      image: mafaz,
    },
    {
      id: '6',
      name: 'Safiq',
      role: 'Co-founder, Creative Designer & Developer',
      image: safiq,
    },
  ];

  return (
    <div className="w-full min-h-screen bg-transparent text-white about-container">
      <SEO
        title="About Us"
        description="Learn about Innoaivators, our mission, values, and the team behind our innovative digital solutions."
        canonical="https://innoaivators.com/about"
      />
      {isLg && (
        <video autoPlay loop muted id="background-video">
          <source src={video} type="video/mp4" />
        </video>
      )}
      <div className="content-container">
        <section className="pt-40 pb-20 px-4 sm:px-6 lg:px-8 about-content">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-secondary-silver">
                  About Innoaivators
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We&apos;re a team of passionate innovators dedicated to transforming
                businesses through cutting-edge technology and creative solutions.
              </p>
            </motion.div>


            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <h2 className="text-4xl font-bold text-center text-white mb-12">
                Our Values
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative overflow-hidden bg-gradient-to-br from-primary-black via-primary-black to-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-secondary-silver hover:border-opacity-100 border-opacity-50 group hover:scale-105"
                  >
                    <BorderBeam />
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-secondary-silver to-gray-400 flex items-center justify-center mb-6 group-hover:shadow-lg transition-all duration-300">
                      <value.icon className="w-7 h-7 text-primary-black" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-secondary-silver transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">{value.description}</p>
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary-silver via-transparent to-transparent opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl pointer-events-none" />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <h2 className="text-4xl font-bold text-center text-white mb-12">
                Our Journey
              </h2>
              <Timeline />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <h2 className="text-4xl font-bold text-center text-white mb-2">
                Our Team
              </h2>
              <TeamCarousel members={members} infoPosition="bottom" infoBackground="rgba(0, 0, 0, 0.5)" autoPlay={3000} infoTextColor="white" visibleCards={2} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative overflow-hidden bg-gradient-to-r from-secondary-silver via-gray-200 to-secondary-silver rounded-3xl p-12 text-center text-primary-black shadow-2xl"
            >
              <div className="absolute inset-0 opacity-10 bg-pattern pointer-events-none" />
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Join Our Journey
                </h2>
                <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
                  We&apos;re always looking for talented individuals who share our
                  passion for innovation and excellence.
                </p>
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-block bg-primary-black text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
                >
                  <span className="relative z-10">Get in Touch</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 translate-x-full group-hover:translate-x-0 transition-all duration-500" />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>

      </div>
    </div>
  );
}
