
import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import logo from '../assets/logo.jpg';

export function Footer() {
  const services = [
    { name: 'Web Development', path: '/web-development' },
    { name: 'App Development', path: '/app-development' },
    { name: 'IoT Development', path: '/iot-development' },
    { name: 'AI Automations', path: '/ai-automations' },
    { name: 'Digital Marketing', path: '/digital-marketing' },
  ];

  const company = [
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Careers', path: '#' },
    { name: 'Blog', path: '#' },
  ];

  const socialLinks = [
    { icon: <Facebook size={20} />, href: 'https://www.facebook.com/share/1Buxv7SZ6c/' },
    {
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
          <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
        </svg>
      ),
      href: '#'
    },
    { icon: <Linkedin size={20} />, href: '#' },
    { icon: <Instagram size={20} />, href: 'https://www.instagram.com/inno_aivators?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' },
  ];

  return (
    <footer className="relative z-10 bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg p-1 flex items-center justify-center">
                <img src={logo} alt="Innoaivators Logo" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-3xl font-bold">Innoaivators</h3>
            </div>
            <p className="text-gray-400 mb-6">
              Transforming ideas into innovative digital solutions through
              cutting-edge technology and creative excellence.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service.name}>
                    <Link
                      to={service.path}
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                {company.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start">
                  <MapPin size={20} className="mr-3 mt-1 flex-shrink-0" />
                  <span>Near Thanku Bakery, Tirupparankunram Rd, pallivasal complex, Madurai, Tamil Nadu 625011</span>
                </li>
                <li className="flex items-center">
                  <Phone size={20} className="mr-3 flex-shrink-0" />
                  <span>+91 90877 86231</span>
                </li>
                <li className="flex items-center">
                  <Phone size={20} className="mr-3 flex-shrink-0" />
                  <span>+91 95664 65970</span>
                </li>
                <li className="flex items-center">
                  <Mail size={20} className="mr-3 flex-shrink-0" />
                  <a
                    href="mailto:innoaivation@gmail.com"
                    className="hover:text-white transition-colors duration-300"
                  >
                    innoaivation@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Innoaivators. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}