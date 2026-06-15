import { Facebook, Instagram, Youtube, Linkedin, MapPin, Phone, Mail, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { Page } from '../App';

interface FooterProps {
  navigate: (page: Page) => void;
}

export default function Footer({ navigate }: FooterProps) {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-gray-950 border-t border-gray-800/60">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <button onClick={() => navigate('home')} className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center font-black text-gray-950 text-xl">
                Rao
              </div>
              <div>
                <div className="text-white font-bold text-lg leading-tight">Rao Badminton World</div>
                <div className="text-yellow-400 text-xs tracking-widest uppercase">Pune</div>
              </div>
            </button>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Where passion meets precision. Building future champions through expert coaching and world-class facilities.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: 'https://www.facebook.com/people/Rao-Badminton-World/' },
                { icon: Instagram, href: 'https://www.instagram.com/Raobadmintonworld/' },
                { icon: Youtube, href: 'https://www.youtube.com/channel/UCAb9t5zi3YnQGzSjTZKz-_w' },
                { icon: Linkedin, href: 'https://www.linkedin.com/company/Raobadmintonworld/' },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="w-9 h-9 bg-gray-900 border border-gray-800 rounded-lg flex items-center justify-center hover:bg-yellow-400 hover:border-yellow-400 transition-colors group"
                >
                  <social.icon size={16} className="text-gray-500 group-hover:text-gray-950 transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', page: 'home' as Page },
                { label: 'About Us', page: 'about' as Page },
                { label: 'Our Programs', page: 'programs' as Page },
                { label: 'Contact', page: 'contact' as Page },
              ].map((link) => (
                <li key={link.page}>
                  <button
                    onClick={() => navigate(link.page)}
                    className="text-gray-500 hover:text-yellow-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <div className="w-1 h-1 rounded-full bg-yellow-400/50 group-hover:w-3 transition-all duration-300" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">Programs</h4>
            <ul className="space-y-3">
              {['Beginner Program', 'Basic Program', 'Higher Basic Program', 'Intermediate Program', 'Advanced Program', 'Corporate Program'].map((prog) => (
                <li key={prog}>
                  <button
                    onClick={() => navigate('programs')}
                    className="text-gray-500 hover:text-yellow-400 transition-colors text-sm flex items-center gap-2 group text-left"
                  >
                    <div className="w-1 h-1 rounded-full bg-yellow-400/50 group-hover:w-3 transition-all duration-300 flex-shrink-0" />
                    {prog}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-yellow-400 flex-shrink-0 mt-0.5" />
                <div className="text-gray-500 text-sm leading-snug">
                  Smash Zone, Tathawade, Pimpri-Chinchwad, Pune, Maharashtra 411057
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-yellow-400 flex-shrink-0" />
                <a href="tel:+917210099994" className="text-gray-500 hover:text-yellow-400 transition-colors text-sm">
                  +91 7210099994
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-yellow-400 flex-shrink-0" />
                <a href="mailto:contact@Raobadmintonworld.in" className="text-gray-500 hover:text-yellow-400 transition-colors text-sm">
                  contact@Raobadmintonworld.in
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} Rao Badminton World. All rights reserved.
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-gray-500 hover:text-yellow-400 transition-colors text-sm group"
          >
            Back to top <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
