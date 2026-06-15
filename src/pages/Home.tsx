import { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Award, Users, Target, Zap, Shield, CheckCircle, ArrowRight, Play, Quote, Instagram } from 'lucide-react';
import { Page } from '../App';
import AnimatedSection from '../components/AnimatedSection';

interface HomeProps {
  navigate: (page: Page) => void;
}

const heroSlides = [
  {
    bg: 'https://images.pexels.com/photos/2202685/pexels-photo-2202685.jpeg?auto=compress&cs=tinysrgb&w=1920',
    title: 'Unleash Your',
    highlight: 'Passion for Badminton',
    subtitle: 'Join Rao Badminton World to enhance your skills with expert coaching and unmatched facilities.',
  },
  {
    bg: 'https://images.pexels.com/photos/8007094/pexels-photo-8007094.jpeg?auto=compress&cs=tinysrgb&w=1920',
    title: 'Train With',
    highlight: 'Champions',
    subtitle: 'Olympic Gold Quest certified coaches dedicated to building your game from the ground up.',
  },
  {
    bg: 'https://images.pexels.com/photos/14605729/pexels-photo-14605729.jpeg?auto=compress&cs=tinysrgb&w=1920',
    title: 'Where Passion',
    highlight: 'Meets Precision',
    subtitle: 'State-of-the-art facilities and personalized training programs for every level.',
  },
];

const programs = [
  { title: 'Beginner', desc: 'Build a strong foundation with fundamental skills and basic techniques.', days: 'Mon – Fri + Sat & Sun', color: 'from-blue-500 to-cyan-400' },
  { title: 'Basic', desc: 'Refine your skills and improve consistency with structured practice.', days: 'Mon – Fri + Sat & Sun', color: 'from-green-500 to-emerald-400' },
  { title: 'Higher Basic', desc: 'Advance beyond basics with improved strokes and matchplay skills.', days: 'Mon – Fri + Sat & Sun', color: 'from-yellow-500 to-orange-400' },
  { title: 'Intermediate', desc: 'Focus on strategic play, footwork, and advanced game tactics.', days: 'Mon – Sat', color: 'from-orange-500 to-red-400' },
  { title: 'Advanced', desc: 'High-level training for competitive players focused on tournament prep.', days: 'Mon – Sat', color: 'from-red-500 to-pink-400' },
  { title: 'Corporate', desc: 'Team-building, fitness, and recreational play through badminton.', days: 'Mon – Fri + Sat & Sun', color: 'from-teal-500 to-cyan-400' },
];

const testimonials = [
  {
    name: 'Rajesh Kumar',
    text: 'Rao Badminton World has been an incredible experience. The coaching is top-notch and Coach Kranti\'s attention to detail helped me improve my game tremendously. From basic techniques to advanced strategies, I feel more confident on the court than ever before.',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    text: 'Joining Rao Badminton World has been one of the best decisions I\'ve made. The academy\'s training programs are perfect for all levels and the personalized coaching has helped me progress so much faster. I\'ve already seen a huge improvement in my skills!',
    rating: 5,
  },
  {
    name: 'Arjun Patel',
    text: 'Training at Rao Badminton World has taken my game to the next level. Coach Kranti\'s expertise and the academy\'s world-class facilities helped me focus on every aspect of my game. It\'s like a second home to me!',
    rating: 5,
  },
  {
    name: 'Neha Reddy',
    text: 'Rao Badminton World has exceeded all my expectations. The coaching staff is very skilled and the approach to both technique and sportsmanship is inspiring. I\'ve gained not only new skills but also a deeper love for the sport.',
    rating: 5,
  },
];

const stats = [
  { label: 'Students Trained', value: '500+', icon: Users },
  { label: 'Expert Coaches', value: '8+', icon: Award },
  { label: 'Training Batches', value: '20+', icon: Target },
  { label: 'Years Experience', value: '5+', icon: Zap },
];

const instaPosts = [
  { img: 'https://images.pexels.com/photos/8007587/pexels-photo-8007587.jpeg?auto=compress&cs=tinysrgb&w=400', caption: 'Three generations. Same passion. Same power. Legacy in motion.' },
  { img: 'https://images.pexels.com/photos/7438726/pexels-photo-7438726.jpeg?auto=compress&cs=tinysrgb&w=400', caption: 'Building foundations, creating champions at Rao Badminton World.' },
  { img: 'https://images.pexels.com/photos/2202685/pexels-photo-2202685.jpeg?auto=compress&cs=tinysrgb&w=400', caption: 'Every serve starts a journey. Every rally builds belief.' },
  { img: 'https://images.pexels.com/photos/8007094/pexels-photo-8007094.jpeg?auto=compress&cs=tinysrgb&w=400', caption: 'Discipline is the foundation. Train right. Train with purpose.' },
  { img: 'https://images.pexels.com/photos/14605729/pexels-photo-14605729.jpeg?auto=compress&cs=tinysrgb&w=400', caption: 'Young athletes. Bright futures. Rao Badminton World Pune.' },
  { img: 'https://images.pexels.com/photos/8007587/pexels-photo-8007587.jpeg?auto=compress&cs=tinysrgb&w=400', caption: 'Where passion meets precision – come be part of our story.' },
  { img: 'https://images.pexels.com/photos/9654720/pexels-photo-9654720.jpeg?auto=compress&cs=tinysrgb&w=400', caption: 'Rao in one word: FOUNDATION. Building character, confidence.' },
  { img: 'https://images.pexels.com/photos/8007578/pexels-photo-8007578.jpeg?auto=compress&cs=tinysrgb&w=400', caption: 'Not measured in medals but in consistency and commitment.' },
];

export default function Home({ navigate }: HomeProps) {
  const [heroIdx, setHeroIdx] = useState(0);
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const [isPlaying] = useState(false);

  useEffect(() => {
    const t = setInterval(() => setHeroIdx((p) => (p + 1) % heroSlides.length), 5000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setTestimonialIdx((p) => (p + 1) % testimonials.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <div>
      {/* ── HERO ── */}
      <section className="relative h-screen min-h-[600px] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={heroIdx}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0"
          >
            <img
              src={heroSlides[heroIdx].bg}
              alt="Hero"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-gray-950/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent" />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={heroIdx}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8 }}
                className="max-w-2xl"
              >
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full px-4 py-1.5 mb-6"
                >
                  <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
                  <span className="text-yellow-400 text-sm font-medium tracking-wide">Rao Badminton World, Pune</span>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-yellow-400 text-xl font-medium mb-2"
                >
                  {heroSlides[heroIdx].title}
                </motion.p>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6"
                >
                  {heroSlides[heroIdx].highlight}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-gray-300 text-lg mb-10 leading-relaxed"
                >
                  {heroSlides[heroIdx].subtitle}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-wrap gap-4"
                >
                  <button
                    onClick={() => navigate('contact')}
                    className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-950 font-bold px-8 py-4 rounded-full hover:scale-105 hover:shadow-xl hover:shadow-yellow-500/30 transition-all duration-300 flex items-center gap-2"
                  >
                    Join Now <ArrowRight size={18} />
                  </button>
                  <button
                    onClick={() => navigate('about')}
                    className="border border-white/30 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 hover:border-white/60 transition-all duration-300"
                  >
                    Learn More
                  </button>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setHeroIdx(i)}
              className={`transition-all duration-300 rounded-full ${i === heroIdx ? 'w-8 h-2 bg-yellow-400' : 'w-2 h-2 bg-white/40'}`}
            />
          ))}
        </div>

        {/* Prev/Next */}
        <button
          onClick={() => setHeroIdx((p) => (p - 1 + heroSlides.length) % heroSlides.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-all"
        >
          <ChevronLeft size={20} className="text-white" />
        </button>
        <button
          onClick={() => setHeroIdx((p) => (p + 1) % heroSlides.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-all"
        >
          <ChevronRight size={20} className="text-white" />
        </button>
      </section>

      {/* ── STATS BAND ── */}
      <section className="bg-gradient-to-r from-yellow-400 to-orange-500 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <AnimatedSection key={i} delay={i * 0.1} direction="up">
                <div className="text-center">
                  <stat.icon className="mx-auto mb-2 text-gray-950" size={28} />
                  <div className="text-4xl font-black text-gray-950">{stat.value}</div>
                  <div className="text-gray-800 font-medium text-sm mt-1">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT TEASER ── */}
      <section className="py-24 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-yellow-400 blur-3xl" />
          <div className="absolute bottom-20 left-20 w-64 h-64 rounded-full bg-orange-400 blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/8007094/pexels-photo-8007094.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Badminton Academy"
                  className="rounded-2xl w-full object-cover h-[480px] shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl p-6 shadow-xl">
                  <div className="text-gray-950 font-black text-3xl">5+</div>
                  <div className="text-gray-800 text-sm font-semibold">Years of Excellence</div>
                </div>
                <div className="absolute -top-6 -left-6 bg-gray-900 border border-yellow-400/30 rounded-2xl p-4 shadow-xl">
                  <div className="flex items-center gap-2">
                    <Award className="text-yellow-400" size={24} />
                    <div>
                      <div className="text-white font-bold text-sm">OGQ Certified</div>
                      <div className="text-gray-400 text-xs">Level 1 & 2 Coach</div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div>
                <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full px-4 py-1.5 mb-4">
                  <span className="text-yellow-400 text-sm font-medium">Rao Badminton World</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
                  Where Passion <span className="text-yellow-400">Meets</span> Precision
                </h2>
                <p className="text-gray-400 leading-relaxed mb-6 text-lg">
                  Rao Badminton World is a newly established badminton academy fueled by passion and precision. Founded by Krantivir, an experienced athlete and coach, the academy is dedicated to developing future champions.
                </p>
                <p className="text-gray-400 leading-relaxed mb-8">
                  With a focus on dedication, skill development, and sportsmanship, Rao Badminton World provides quality training in a disciplined and motivating environment, empowering athletes to reach their full potential.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {['Expert Certified Coaches', 'Holistic Development', 'Modern Facilities', 'All Skill Levels'].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle size={18} className="text-yellow-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => navigate('about')}
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-950 font-bold px-8 py-3.5 rounded-full hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/30 transition-all duration-300 flex items-center gap-2 w-fit"
                >
                  Read More <ArrowRight size={18} />
                </button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── PROGRAMS SECTION ── */}
      <section className="py-24 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/7438726/pexels-photo-7438726.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full px-4 py-1.5 mb-4">
              <span className="text-yellow-400 text-sm font-medium">Our Programs</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Training for <span className="text-yellow-400">Every Level</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              We offer a range of training programs suitable for all levels — from absolute beginners to competitive advanced players.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((prog, i) => (
              <AnimatedSection key={i} delay={i * 0.1} direction="up">
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-gray-950/80 border border-gray-800 rounded-2xl p-6 group cursor-pointer hover:border-yellow-400/40 transition-all duration-300 h-full"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${prog.color} mb-4 flex items-center justify-center`}>
                    <Target size={22} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">{prog.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{prog.desc}</p>
                  <div className="flex items-center gap-2 text-xs text-gray-500 border-t border-gray-800 pt-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                    <span>{prog.days}</span>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-12">
            <button
              onClick={() => navigate('programs')}
              className="border-2 border-yellow-400 text-yellow-400 font-bold px-10 py-4 rounded-full hover:bg-yellow-400 hover:text-gray-950 transition-all duration-300 flex items-center gap-2 mx-auto"
            >
              View All Programs <ArrowRight size={18} />
            </button>
          </AnimatedSection>
        </div>
      </section>

      {/* ── CHIEF COACH ── */}
      <section className="py-24 bg-gray-950 relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-10">
          <img
            src="https://images.pexels.com/photos/8007094/pexels-photo-8007094.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <div>
                <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full px-4 py-1.5 mb-4">
                  <span className="text-yellow-400 text-sm font-medium">Meet Our Chief Coach</span>
                </div>
                <h2 className="text-5xl font-black text-white mb-6">Kranti Vir</h2>
                <div className="space-y-3 mb-8">
                  {[
                    'Olympic Gold Quest (OGQ) Certified – Level 1 & 2 Coach',
                    'Certified Level 1 Coach by Badminton World Federation (BWF)',
                    'PDMBA Level 1 Certified',
                    'International Player with India and World Rankings',
                    '5+ Years Experience Under an OLYMPIAN',
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + 0.2 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle size={18} className="text-yellow-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{item}</span>
                    </motion.div>
                  ))}
                </div>
                <button
                  onClick={() => navigate('about')}
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-950 font-bold px-8 py-3.5 rounded-full hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/30 transition-all duration-300 flex items-center gap-2 w-fit"
                >
                  Learn More <ArrowRight size={18} />
                </button>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-3xl blur-2xl" />
                <img
                  src="https://images.pexels.com/photos/9654720/pexels-photo-9654720.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Chief Coach Kranti Vir"
                  className="relative rounded-3xl w-full object-cover h-[500px] shadow-2xl"
                />
                <div className="absolute bottom-6 left-6 right-6 bg-gray-950/90 backdrop-blur-sm rounded-xl p-4 border border-yellow-400/20">
                  <div className="text-white font-bold">Haryana Samman Award 2016</div>
                  <div className="text-yellow-400 text-sm">Recognized for exceptional contributions to badminton</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── VISION ── */}
      <section
        className="py-24 relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
        }}
      >
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/13552498/pexels-photo-13552498.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt=""
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950/80 via-gray-900/60 to-gray-950/80" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full px-4 py-1.5 mb-4">
              <span className="text-yellow-400 text-sm font-medium">Our Vision</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              "Igniting Passion, <span className="text-yellow-400">Building Champions</span>"
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
              At Rao Badminton World, our vision is to establish a thriving community where aspiring players of all levels come together to ignite their passion for badminton.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              { step: '01', title: 'Assess', icon: Target, desc: 'We evaluate your current skills to create a personalized training plan tailored to your goals.' },
              { step: '02', title: 'Train', icon: Zap, desc: 'Engage in tailored sessions focusing on technique, strategy, fitness, and mental toughness.' },
              { step: '03', title: 'Compete', icon: Award, desc: 'Participate in tournaments to apply your skills and gain real competitive experience.' },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.15} direction="up">
                <motion.div
                  whileHover={{ y: -6 }}
                  className="bg-gray-950/60 border border-gray-700/60 rounded-2xl p-8 text-center group hover:border-yellow-400/40 transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute top-4 right-4 text-6xl font-black text-white/5 group-hover:text-yellow-400/10 transition-colors">
                    {item.step}
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
                    <item.icon size={28} className="text-gray-950" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── UNIQUE VALUE PROPOSITIONS ── */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full px-4 py-1.5 mb-4">
              <span className="text-yellow-400 text-sm font-medium">What Sets Us Apart</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white">
              Unique Value Propositions at <span className="text-yellow-400">Rao Badminton World</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: 'Expert Coaching',
                desc: 'Our coaches bring years of experience, ensuring you receive quality instruction tailored to your individual needs.',
                img: 'https://images.pexels.com/photos/8007094/pexels-photo-8007094.jpeg?auto=compress&cs=tinysrgb&w=600',
              },
              {
                icon: Shield,
                title: 'Holistic Development',
                desc: 'We focus on both physical skills and mental resilience, creating well-rounded athletes who excel beyond the court.',
                img: 'https://images.pexels.com/photos/2202685/pexels-photo-2202685.jpeg?auto=compress&cs=tinysrgb&w=600',
              },
              {
                icon: Zap,
                title: 'Modern Facilities',
                desc: 'Rao Badminton World features state-of-the-art equipment and court facilities designed for optimal training.',
                img: 'https://images.pexels.com/photos/14605729/pexels-photo-14605729.jpeg?auto=compress&cs=tinysrgb&w=600',
              },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.15} direction="up">
                <motion.div
                  whileHover={{ y: -8 }}
                  className="group rounded-2xl overflow-hidden border border-gray-800 hover:border-yellow-400/40 transition-all duration-300 bg-gray-900"
                >
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                      <item.icon size={22} className="text-gray-950" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">{item.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/8007578/pexels-photo-8007578.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full px-4 py-1.5 mb-4">
              <span className="text-yellow-400 text-sm font-medium">Testimonials</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white">Our Happy <span className="text-yellow-400">Clients!</span></h2>
          </AnimatedSection>

          <div className="relative max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonialIdx}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-950 border border-gray-800 rounded-3xl p-10 md:p-14 text-center"
              >
                <Quote className="text-yellow-400/40 mx-auto mb-6" size={48} />
                <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8 italic">
                  "{testimonials[testimonialIdx].text}"
                </p>
                <div className="flex justify-center gap-1 mb-4">
                  {Array.from({ length: testimonials[testimonialIdx].rating }).map((_, i) => (
                    <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center mx-auto mb-3">
                  <span className="text-gray-950 font-bold text-lg">
                    {testimonials[testimonialIdx].name[0]}
                  </span>
                </div>
                <div className="text-white font-bold text-lg">{testimonials[testimonialIdx].name}</div>
                <div className="text-gray-500 text-sm">Rao Student</div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center gap-3 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setTestimonialIdx(i)}
                  className={`transition-all duration-300 rounded-full ${i === testimonialIdx ? 'w-8 h-2.5 bg-yellow-400' : 'w-2.5 h-2.5 bg-gray-600'}`}
                />
              ))}
            </div>

            <button
              onClick={() => setTestimonialIdx((p) => (p - 1 + testimonials.length) % testimonials.length)}
              className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center hover:bg-yellow-400 hover:text-gray-950 hover:border-yellow-400 transition-all"
            >
              <ChevronLeft size={18} className="text-white group-hover:text-gray-950" />
            </button>
            <button
              onClick={() => setTestimonialIdx((p) => (p + 1) % testimonials.length)}
              className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center hover:bg-yellow-400 hover:border-yellow-400 transition-all"
            >
              <ChevronRight size={18} className="text-white" />
            </button>
          </div>
        </div>
      </section>

      {/* ── INSTAGRAM FEED ── */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full px-4 py-1.5 mb-4">
              <Instagram size={16} className="text-yellow-400" />
              <span className="text-yellow-400 text-sm font-medium">@Raobadmintonworld</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white">Follow Our <span className="text-yellow-400">Journey</span></h2>
          </AnimatedSection>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {instaPosts.map((post, i) => (
              <AnimatedSection key={i} delay={i * 0.07} direction="up">
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  className="relative aspect-square overflow-hidden rounded-xl group cursor-pointer"
                >
                  <img
                    src={post.img}
                    alt={post.caption}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                    <p className="text-white text-xs leading-snug">{post.caption}</p>
                  </div>
                  <div className="absolute top-2 right-2 w-7 h-7 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Instagram size={14} className="text-white" />
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-10">
            <a
              href="https://www.instagram.com/Raobadmintonworld/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-yellow-400/50 text-yellow-400 font-semibold px-8 py-3 rounded-full hover:bg-yellow-400 hover:text-gray-950 transition-all duration-300"
            >
              <Instagram size={18} /> Follow on Instagram
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/2202685/pexels-photo-2202685.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950/95 via-gray-950/80 to-gray-950/95" />
          <div className="absolute inset-0 bg-yellow-400/5" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              Ready to <span className="text-yellow-400">Elevate</span> Your Game?
            </h2>
            <p className="text-gray-300 text-xl mb-10 leading-relaxed">
              Reach out to us today to learn more about our programs or to schedule your first training session!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={() => navigate('contact')}
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-950 font-bold px-10 py-4 rounded-full hover:scale-105 hover:shadow-xl hover:shadow-yellow-500/30 transition-all duration-300 text-lg"
              >
                Contact Us Today
              </button>
              <button
                onClick={() => navigate('programs')}
                className="border-2 border-white/40 text-white font-semibold px-10 py-4 rounded-full hover:bg-white/10 hover:border-white transition-all duration-300 text-lg"
              >
                View Programs
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
