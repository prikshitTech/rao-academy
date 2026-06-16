import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, Linkedin, Send, CheckCircle } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import ResponsiveImage from '../components/ResponsiveImage';

const locations = [
  {
    name: 'Rao Badminton Academy, Una',
    address: 'Rao Badminton Academy, Old Hoshiarpur Road, opp. Shiv Shankar Cold Store, Lal Singhi, Una Himachal Pradesh, 174303',
  },
  {
    name: 'Rao Badminton Academy, Una',
    address: 'Rao Badminton Academy, Old Hoshiarpur Road, opp. Shiv Shankar Cold Store, Lal Singhi, Una Himachal Pradesh, 174303',
  },
  {
    name: 'Rao Badminton Academy, Una',
    address: 'Rao Badminton Academy, Old Hoshiarpur Road, opp. Shiv Shankar Cold Store, Lal Singhi, Una Himachal Pradesh, 174303',
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', program: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [activeLocation, setActiveLocation] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: '', email: '', phone: '', program: '', message: '' });
  };

  return (
    <div>
      {/* ── PAGE HERO ── */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <ResponsiveImage
            src="https://images.pexels.com/photos/2202685/pexels-photo-2202685.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Contact"
            className="w-full h-full object-cover object-center"
            loading="eager"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950/90 via-gray-950/80 to-gray-950" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full px-4 py-1.5 mb-6">
              <span className="text-yellow-400 text-sm font-medium">Get In Touch</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
              Contact <span className="text-yellow-400">Us</span>
            </h1>
            <p className="text-gray-300 text-xl max-w-2xl mx-auto">
              We're Ready, Let's Talk.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── CONTACT INFO + FORM ── */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">

            {/* Left – Info */}
            <AnimatedSection direction="left">
              <div>
                <h2 className="text-3xl font-black text-white mb-8">Contact Information</h2>

                <div className="space-y-6 mb-10">
                  <div className="flex items-start gap-4 p-5 bg-gray-900 border border-gray-800 rounded-2xl hover:border-yellow-400/30 transition-colors">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail size={20} className="text-gray-950" />
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm mb-1">Email Us</div>
                      <a href="mailto:contact@Raobadmintonworld.in" className="text-white font-semibold hover:text-yellow-400 transition-colors">
                        contact@Raobadmintonworld.in
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-5 bg-gray-900 border border-gray-800 rounded-2xl hover:border-yellow-400/30 transition-colors">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone size={20} className="text-gray-950" />
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm mb-1">Call Us</div>
                      <a href="tel:+919817780001" className="text-white font-semibold hover:text-yellow-400 transition-colors">
                        +91 9817780001
                      </a>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mb-10">
                  <h3 className="text-white font-bold mb-4">Follow Us</h3>
                  <div className="flex gap-3">
                    {[
                      { icon: Facebook, href: 'https://www.facebook.com/people/Rao-Badminton-World/', label: 'Facebook' },
                      { icon: Instagram, href: 'https://www.instagram.com/raobadmintonacademy?igsh=MTA0eGxseDBoOHZkZQ==', label: 'Instagram' },
                      { icon: Youtube, href: 'https://www.youtube.com/channel/UCAb9t5zi3YnQGzSjTZKz-_w', label: 'YouTube' },
                      { icon: Linkedin, href: 'https://www.linkedin.com/company/Raobadmintonworld/', label: 'LinkedIn' },
                    ].map((social, i) => (
                      <motion.a
                        key={i}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="w-12 h-12 bg-gray-900 border border-gray-700 rounded-xl flex items-center justify-center hover:bg-yellow-400 hover:border-yellow-400 transition-colors group"
                        aria-label={social.label}
                      >
                        <social.icon size={18} className="text-gray-400 group-hover:text-gray-950 transition-colors" />
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Locations */}
                <div>
                  <h3 className="text-white font-bold mb-4">Our Locations</h3>
                  <div className="space-y-3">
                    {locations.map((loc, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveLocation(i)}
                        className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-start gap-3 ${
                          activeLocation === i
                            ? 'border-yellow-400/50 bg-yellow-400/5'
                            : 'border-gray-800 bg-gray-900 hover:border-gray-700'
                        }`}
                      >
                        <MapPin size={18} className={`flex-shrink-0 mt-0.5 ${activeLocation === i ? 'text-yellow-400' : 'text-gray-500'}`} />
                        <div>
                          <div className={`font-semibold text-sm ${activeLocation === i ? 'text-yellow-400' : 'text-white'}`}>
                            {loc.name}
                          </div>
                          <div className="text-gray-500 text-xs mt-1 leading-snug">{loc.address}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Right – Form */}
            <AnimatedSection direction="right">
              <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 md:p-10">
                <h2 className="text-3xl font-black text-white mb-2">Send Us a Message</h2>
                <p className="text-gray-400 mb-8">Fill out the form below and we'll get back to you shortly.</p>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-16"
                  >
                    <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle size={36} className="text-gray-950" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-gray-400">We'll get back to you within a few minutes.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-gray-400 text-sm mb-2 block">Full Name *</label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full bg-gray-950 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-yellow-400 transition-colors"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="text-gray-400 text-sm mb-2 block">Phone Number</label>
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className="w-full bg-gray-950 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-yellow-400 transition-colors"
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-gray-400 text-sm mb-2 block">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full bg-gray-950 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-yellow-400 transition-colors"
                        placeholder="you@example.com"
                      />
                    </div>

                    <div>
                      <label className="text-gray-400 text-sm mb-2 block">Program of Interest</label>
                      <select
                        value={form.program}
                        onChange={(e) => setForm({ ...form, program: e.target.value })}
                        className="w-full bg-gray-950 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-400 transition-colors"
                      >
                        <option value="">Select a program...</option>
                        <option value="beginner">Beginner Program</option>
                        <option value="basic">Basic Program</option>
                        <option value="higher-basic">Higher Basic Program</option>
                        <option value="intermediate">Intermediate Program</option>
                        <option value="advanced">Advanced Program</option>
                        <option value="corporate">Corporate Program</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-gray-400 text-sm mb-2 block">Message</label>
                      <textarea
                        rows={4}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full bg-gray-950 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-yellow-400 transition-colors resize-none"
                        placeholder="Tell us about your goals or any questions..."
                      />
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-950 font-bold py-4 rounded-xl hover:shadow-lg hover:shadow-yellow-500/30 transition-all duration-300 flex items-center justify-center gap-2 text-lg"
                    >
                      Send Message <Send size={20} />
                    </motion.button>
                  </form>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── MAP ── */}
      <section className="pb-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="rounded-3xl overflow-hidden border border-gray-800 shadow-2xl">
              <div className="bg-gray-900 border-b border-gray-800 p-4 flex items-center gap-3">
                <MapPin size={18} className="text-yellow-400" />
                <span className="text-white font-semibold">{locations[activeLocation].name}</span>
              </div>
              <div className="h-96 bg-gray-800 flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={48} className="text-yellow-400 mx-auto mb-4" />
                  <div className="text-white font-bold text-lg mb-2">{locations[activeLocation].name}</div>
                  <div className="text-gray-400 text-sm max-w-sm mx-auto">{locations[activeLocation].address}</div>
                  <a
                    href="https://maps.app.goo.gl/suMhYy9WymB9jRxGA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 bg-yellow-400 text-gray-950 font-bold px-6 py-2.5 rounded-full hover:bg-orange-400 transition-colors text-sm"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
