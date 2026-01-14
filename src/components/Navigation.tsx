import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import { NAV_LINKS, SERVICE_LINKS } from '../config/constants';
import logo from '../assets/logo.jpg';

interface NavLink {
  name: string;
  path: string;
}

interface ServiceLink {
  name: string;
  path: string;
  color: string;
}

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services: ServiceLink[] = SERVICE_LINKS;
  const navLinks: NavLink[] = NAV_LINKS;

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Floating Pill Navigation for Desktop */}
      <nav
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out hidden md:block rounded-full border ${isScrolled
          ? 'w-[90vw] max-w-6xl bg-[#050510]/80 backdrop-blur-xl border-white/10 shadow-2xl shadow-black/50 py-3 px-6'
          : 'w-full max-w-7xl bg-transparent border-transparent py-6 px-8'
          }`}
      >
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative w-10 h-10 flex items-center justify-center rounded-lg overflow-hidden group-hover:scale-110 transition-transform bg-white">
              <img src={logo} alt="Innoaivators Logo" className="w-full h-full object-contain" />
            </div>
            <span className="text-xl font-bold text-white tracking-tight">Innoaivators</span>
          </Link>

          {/* Desktop Links */}
          <div className="flex items-center space-x-1">
            {navLinks.map((link: NavLink) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${isActive(link.path) ? 'text-white' : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <motion.div
                    layoutId="active-nav"
                    className="absolute inset-0 bg-white/10 rounded-full border border-white/5"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            ))}

            {/* Services Dropdown */}
            <div
              className="relative px-2"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className={`flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${services.some((s: ServiceLink) => isActive(s.path)) ? 'text-white bg-white/10' : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
              >
                <span>Services</span>
                <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 10 }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-72 bg-[#0A0A15]/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden"
                  >
                    <div className="p-2 space-y-1">
                      {services.map((service: ServiceLink) => (
                        <Link
                          key={service.path}
                          to={service.path}
                          className={`group flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${isActive(service.path)
                            ? 'bg-white/10 text-white'
                            : 'text-gray-400 hover:bg-white/5 hover:text-white'
                            }`}
                        >
                          <span className={`w-2 h-2 rounded-full ${service.color} shadow-[0_0_10px_currentColor]`} />
                          <span className="text-sm font-medium">{service.name}</span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="w-px h-6 bg-white/10 mx-2" />

            <Link
              to="/contact"
              className="group relative px-6 py-2.5 rounded-full overflow-hidden ml-2"
            >
              <div className="absolute inset-0 bg-white group-hover:bg-gray-200 transition-colors" />
              <span className="relative text-black text-sm font-bold tracking-wide group-hover:scale-105 inline-block transition-transform">
                Let's Talk
              </span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 md:hidden transition-all duration-300 ${isScrolled ? 'bg-[#050510]/90 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
          }`}
      >
        <div className="flex justify-between items-center px-6 h-20">
          <Link to="/" className="text-xl font-bold text-white tracking-tight">
            Innoaivators
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-white hover:bg-white/10 rounded-full transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: '100vh', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
              className="absolute top-0 left-0 w-full bg-[#050510] border-b border-white/10 overflow-auto"
            >
              <div className="flex flex-col p-6 min-h-screen pt-24 pb-12">
                {/* Mobile Logo */}
                <div className="absolute top-6 left-6 text-xl font-bold text-white">Innoaivators</div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-6 right-6 p-2 text-white bg-white/10 rounded-full"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="flex flex-col gap-8 mt-8">
                  {navLinks.map((link: NavLink) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className="text-4xl font-bold text-white/50 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}

                  <div className="space-y-4">
                    <div className="text-sm font-bold text-white/30 uppercase tracking-widest">Services</div>
                    {services.map((service: ServiceLink) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-4 text-2xl font-semibold text-white/70 hover:text-white transition-colors"
                      >
                        <span className={`w-2 h-2 rounded-full ${service.color}`} />
                        {service.name}
                      </Link>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className="mt-8 py-4 bg-white text-black text-center text-xl font-bold rounded-2xl active:scale-95 transition-transform"
                  >
                    Start Project
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
