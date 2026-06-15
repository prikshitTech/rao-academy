import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight, Target, Users, Award, Zap, Clock } from 'lucide-react';
import { Page } from '../App';
import AnimatedSection from '../components/AnimatedSection';
import ResponsiveImage from '../components/ResponsiveImage';

interface ProgramsProps {
  navigate: (page: Page) => void;
}

const programs = [
  {
    id: 'beginner',
    title: 'Beginner Program',
    subtitle: 'Perfect for first-timers',
    desc: 'Ideal for those new to badminton, focusing on fundamental skills and basic techniques to build a strong foundation.',
    batches: [
      { type: 'Regular Batches', days: 'Monday to Friday' },
      { type: 'Weekend Batches', days: 'Saturday & Sunday' },
    ],
    img: 'https://images.pexels.com/photos/7438726/pexels-photo-7438726.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-blue-500 to-cyan-400',
    features: ['Basic grip & stance', 'Simple serve techniques', 'Footwork fundamentals', 'Court awareness', 'Basic rally skills'],
    level: 'Beginner',
  },
  {
    id: 'basic',
    title: 'Basic Program',
    subtitle: 'Develop consistency',
    desc: 'Designed for players with a basic understanding of the game, this program focuses on refining skills and improving consistency.',
    batches: [
      { type: 'Regular Batches', days: 'Monday to Friday' },
      { type: 'Weekend Batches', days: 'Saturday & Sunday' },
    ],
    img: 'https://images.pexels.com/photos/2202685/pexels-photo-2202685.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-green-500 to-emerald-400',
    features: ['Shot consistency', 'Service variety', 'Net play basics', 'Basic game strategy', 'Physical conditioning'],
    level: 'Basic',
  },
  {
    id: 'higher-basic',
    title: 'Higher Basic Program',
    subtitle: 'Bridge to intermediate',
    desc: 'For players transitioning beyond the basics, focusing on improving consistency, advanced strokes, and matchplay skills.',
    batches: [
      { type: 'Regular Batches', days: 'Monday to Friday' },
      { type: 'Weekend Batches', days: 'Saturday & Sunday' },
    ],
    img: 'https://images.pexels.com/photos/8007578/pexels-photo-8007578.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-yellow-500 to-orange-400',
    features: ['Advanced stroke play', 'Smash development', 'Drop shot techniques', 'Court positioning', 'Match simulation'],
    level: 'Higher Basic',
  },
  {
    id: 'intermediate',
    title: 'Intermediate Program',
    subtitle: 'Tactical elevation',
    desc: 'For players looking to advance their skills, focusing on strategic play, footwork, and game tactics.',
    batches: [
      { type: 'Regular Batches', days: 'Monday to Saturday' },
    ],
    img: 'https://images.pexels.com/photos/8007094/pexels-photo-8007094.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-orange-500 to-red-400',
    features: ['Advanced footwork patterns', 'Tactical game play', 'Deception skills', 'Multi-shuttle training', 'Tournament readiness'],
    level: 'Intermediate',
  },
  {
    id: 'advanced',
    title: 'Advanced Program',
    subtitle: 'Elite performance',
    desc: 'A high-level program for competitive players, focusing on technique, match preparation, and mental toughness to excel in tournaments.',
    batches: [
      { type: 'Regular Batches', days: 'Monday to Saturday' },
    ],
    img: 'https://images.pexels.com/photos/14605729/pexels-photo-14605729.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-red-500 to-rose-400',
    features: ['Elite stroke mechanics', 'Mental toughness training', 'Match analysis', 'Tournament strategy', 'Strength & conditioning'],
    level: 'Advanced',
  },
  {
    id: 'corporate',
    title: 'Corporate Program',
    subtitle: 'Team building through sport',
    desc: 'Tailored to corporate groups, this program promotes team-building, fitness, and recreational play through badminton.',
    batches: [
      { type: 'Regular Batches', days: 'Monday to Friday' },
      { type: 'Weekend Batches', days: 'Saturday & Sunday' },
    ],
    img: 'https://images.pexels.com/photos/8007587/pexels-photo-8007587.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-teal-500 to-cyan-400',
    features: ['Team-building activities', 'Fitness & wellness', 'Recreational gameplay', 'Group tournaments', 'Flexible scheduling'],
    level: 'All Levels',
  },
];

const faqs = [
  {
    q: 'What age group do you accept at Rao Badminton World?',
    a: 'We accept players of all ages, starting from young beginners to adults looking to improve their skills. Our programs are designed to cater to various skill levels, from beginner to advanced.',
  },
  {
    q: 'How do I know which program is right for me?',
    a: 'We offer a free initial consultation where our coaches assess your current skill level and discuss your goals. Based on this, we recommend the most suitable program to help you progress effectively.',
  },
  {
    q: 'Can I join a program if I have no prior badminton experience?',
    a: 'Absolutely! Our Beginner Program is specifically designed for players with no prior experience. We focus on building a strong foundation and teach you all the basics of the game.',
  },
  {
    q: 'What is the duration of each training session?',
    a: 'Training sessions typically last 1 to 1.5 hours, depending on the program and level. We also offer flexible timings to suit the schedules of our athletes.',
  },
  {
    q: 'Are the training programs available year-round?',
    a: 'Yes, our programs run throughout the year with regular intake. You can join anytime, and we offer both short-term and long-term training packages based on your needs.',
  },
  {
    q: 'What are the fees for the programs?',
    a: 'Fees vary depending on the program and level of training. For specific details regarding our fee structure, please reach out to us directly through the contact information provided.',
  },
];

const whyUs = [
  { icon: Award, title: 'Professional Coaching by Certified Coaches', desc: 'Our coaching team holds internationally recognized certifications from OGQ and BWF.' },
  { icon: Users, title: 'Beginner to Advanced Training Programs', desc: 'Structured programs for every skill level ensure steady and measurable progress.' },
  { icon: Zap, title: 'State-of-the-Art Training Facilities', desc: 'Modern courts equipped with professional-grade equipment for the best training environment.' },
  { icon: Target, title: 'Personalized Skill Development', desc: 'Every athlete gets individual attention and a tailored training plan to maximize potential.' },
];

export default function Programs({ navigate }: ProgramsProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div>
      {/* ── PAGE HERO ── */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <ResponsiveImage
            src="https://images.pexels.com/photos/7438726/pexels-photo-7438726.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Programs"
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
              <span className="text-yellow-400 text-sm font-medium">Training Programs</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
              Our <span className="text-yellow-400">Programs</span>
            </h1>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
              We offer a range of training programs designed to cater to athletes of all levels, from beginners to advanced players.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── PROGRAMS GRID ── */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((prog, i) => (
              <AnimatedSection key={prog.id} delay={i * 0.1} direction="up">
                <motion.div
                  whileHover={{ y: -10 }}
                  className="bg-gray-900 border border-gray-800 rounded-3xl overflow-hidden group hover:border-yellow-400/30 transition-all duration-300 flex flex-col h-full"
                >
                  <div className="relative h-52 overflow-hidden">
                    <ResponsiveImage
                      src={prog.img}
                      alt={prog.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/30 to-transparent" />
                    <div className={`absolute top-4 left-4 bg-gradient-to-r ${prog.color} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                      {prog.level}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-black text-white mb-1 group-hover:text-yellow-400 transition-colors">{prog.title}</h3>
                    <p className="text-yellow-400/80 text-sm font-medium mb-3">{prog.subtitle}</p>
                    <p className="text-gray-400 text-sm leading-relaxed mb-5">{prog.desc}</p>

                    <div className="space-y-2 mb-5">
                      {prog.features.map((feature, j) => (
                        <div key={j} className="flex items-center gap-2">
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${prog.color} flex-shrink-0`} />
                          <span className="text-gray-400 text-xs">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-auto border-t border-gray-800 pt-4">
                      {prog.batches.map((batch, j) => (
                        <div key={j} className="flex items-center gap-2 text-xs text-gray-500 mb-1">
                          <Clock size={12} className="text-yellow-400" />
                          <span className="font-medium text-gray-400">{batch.type}:</span>
                          <span>{batch.days}</span>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={() => navigate('contact')}
                      className={`mt-5 w-full bg-gradient-to-r ${prog.color} text-white font-bold py-3 rounded-xl hover:opacity-90 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 text-sm`}
                    >
                      Enroll Now <ArrowRight size={16} />
                    </button>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-24 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <ResponsiveImage src="https://images.pexels.com/photos/2202685/pexels-photo-2202685.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="" className="w-full h-full object-cover" sizes="100vw" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full px-4 py-1.5 mb-4">
              <span className="text-yellow-400 text-sm font-medium">Why Rao?</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Why <span className="text-yellow-400">Choose Us?</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
              At Rao Badminton World, we believe in the importance of personalized coaching and an environment that fosters both skill development and sportsmanship.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1} direction="up">
                <motion.div
                  whileHover={{ y: -8 }}
                  className="bg-gray-950 border border-gray-800 rounded-2xl p-6 text-center group hover:border-yellow-400/30 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg group-hover:scale-110 transition-transform">
                    <item.icon size={26} className="text-gray-950" />
                  </div>
                  <h3 className="text-white font-bold mb-3 group-hover:text-yellow-400 transition-colors leading-snug">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full px-4 py-1.5 mb-4">
              <span className="text-yellow-400 text-sm font-medium">FAQ</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Frequently Asked <span className="text-yellow-400">Questions</span>
            </h2>
          </AnimatedSection>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.07}>
                <motion.div
                  className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-yellow-400/20 transition-colors"
                >
                  <button
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span className="text-white font-semibold">{faq.q}</span>
                    <motion.div
                      animate={{ rotate: openFaq === i ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown size={20} className="text-yellow-400" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-5 text-gray-400 leading-relaxed border-t border-gray-800 pt-4">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0">
          <ResponsiveImage
            src="https://images.pexels.com/photos/8007094/pexels-photo-8007094.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt=""
            className="w-full h-full object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gray-950/85" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Start Your <span className="text-yellow-400">Badminton Journey</span> Today
            </h2>
            <p className="text-gray-300 text-xl mb-10">
              Join our growing community of passionate badminton players and start training with certified coaches.
            </p>
            <button
              onClick={() => navigate('contact')}
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-950 font-bold px-12 py-5 rounded-full hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/30 transition-all duration-300 text-lg"
            >
              Join Now — It's Free to Start
            </button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
