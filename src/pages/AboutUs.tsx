import { motion } from 'framer-motion';
import { Award, BookOpen, Users, Star, CheckCircle, Linkedin } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const boardMembers = [
  { name: 'Mr. Satish', role: 'Board Member', img: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300' },
  { name: 'Dr. Saroj Sethi', role: 'Board Member', img: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=300' },
  { name: 'Mr. Gurvinder Singh', role: 'Board Member', img: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300' },
  { name: 'Mrs. Charanjeet Kaur', role: 'Board Member', img: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=300' },
];

const advisoryBoard = [
  { name: 'Mr. Ganguly Prasad', role: 'Dronacharya Awardee & Former Chief Coach, Sports Authority of India', img: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=300' },
  { name: 'Dr. Arvind Malik', role: 'Sr. Professor, Dept. of Physical Education, Kurukshetra University', img: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300' },
  { name: 'Mr. Ashish Nijhawan', role: 'Vice President, LeadSquared – Technology & Digital Transformation', img: 'https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=300' },
  { name: 'Dr. K. Govindasamy', role: 'Assistant Director (Sports), Symbiosis International University', img: 'https://images.pexels.com/photos/2897883/pexels-photo-2897883.jpeg?auto=compress&cs=tinysrgb&w=300' },
  { name: 'Mr. Ashish Kapoor', role: 'Founder – Neev Foundation, Kota – Community Development & Social Impact', img: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=300' },
  { name: 'Mr. Rajkiran Pund', role: 'Advisor – CSR & Corporate Partnerships', img: 'https://images.pexels.com/photos/2312369/pexels-photo-2312369.jpeg?auto=compress&cs=tinysrgb&w=300' },
  { name: 'Mr. Avinash Deshmukh', role: 'Strength & Conditioning Specialist – Athlete Performance', img: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=300' },
];

const teamMembers = [
  { name: 'Kranti Vir', role: 'Chief Coach', img: 'https://images.pexels.com/photos/9654720/pexels-photo-9654720.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { name: 'Saumya Singhal', role: 'Senior Coach', img: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { name: 'Kumar Chavan', role: 'Senior Coach', img: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { name: 'Deepak Verma', role: 'Senior Coach', img: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { name: 'Dishant Thalor', role: 'Senior Coach', img: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { name: 'Nihal Sharma', role: 'Assistant Coach', img: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { name: 'Parth Sharma', role: 'Junior Coach', img: 'https://images.pexels.com/photos/2897883/pexels-photo-2897883.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { name: 'Piyush Anand', role: 'Visual Storyteller', img: 'https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { name: 'Dr. Ravleen Kaur', role: 'Medical Officer', img: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { name: 'Navneet Kaur', role: 'Clinical Psychologist', img: 'https://images.pexels.com/photos/3760607/pexels-photo-3760607.jpeg?auto=compress&cs=tinysrgb&w=400' },
];

export default function AboutUs() {
  return (
    <div>
      {/* ── PAGE HERO ── */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/8007094/pexels-photo-8007094.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="About Us"
            className="w-full h-full object-cover"
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
              <span className="text-yellow-400 text-sm font-medium">About Rao Badminton World</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
              Rao Badminton World <span className="text-yellow-400">FOR YOU</span>
            </h1>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
              A newly established badminton academy driven by passion and precision, dedicated to nurturing talent and developing future champions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── ABOUT CONTENT ── */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/2202685/pexels-photo-2202685.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Academy"
                  className="rounded-2xl w-full h-[480px] object-cover shadow-2xl"
                />
                <div className="absolute -bottom-8 -right-8 bg-gray-900 border border-yellow-400/30 rounded-2xl p-6 shadow-xl max-w-[240px]">
                  <div className="text-yellow-400 font-black text-3xl mb-1">2024</div>
                  <div className="text-white font-bold text-sm mb-1">Founded with Purpose</div>
                  <div className="text-gray-400 text-xs">By Krantivir – Certified Olympic Coach</div>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div>
                <h2 className="text-4xl font-black text-white mb-6 leading-tight">
                  Built on <span className="text-yellow-400">Dedication</span>, Strategy & Sportsmanship
                </h2>
                <p className="text-gray-400 leading-relaxed mb-5 text-lg">
                  Rao Badminton World is a newly established badminton academy driven by passion and precision, dedicated to nurturing talent and developing future champions. Founded by Krantivir, an accomplished professional athlete with extensive experience coaching under an Olympian.
                </p>
                <p className="text-gray-400 leading-relaxed mb-8">
                  The academy embodies his vision of creating a space where dedication, strategic skill development, and sportsmanship thrive. Committed to providing quality training, Rao Badminton World fosters growth and promotes a disciplined yet motivating environment that empowers athletes to reach their fullest potential.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {['Certified Coaching Staff', 'All Skill Levels Welcome', 'State-of-Art Courts', 'Year-Round Programs', 'Mental & Physical Training', 'Tournament Preparation'].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-yellow-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── VISION ── */}
      <section className="py-24 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.pexels.com/photos/13552498/pexels-photo-13552498.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gray-900/80" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <div>
                <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full px-4 py-1.5 mb-4">
                  <span className="text-yellow-400 text-sm font-medium">Our Vision</span>
                </div>
                <h2 className="text-4xl font-black text-white mb-6 leading-tight">
                  Establishing a <span className="text-yellow-400">Thriving</span> Badminton Community
                </h2>
                <p className="text-gray-400 leading-relaxed mb-5 text-lg">
                  At Rao Badminton World, our vision is to establish a thriving community where aspiring players of all levels come together to ignite their passion for badminton.
                </p>
                <p className="text-gray-400 leading-relaxed mb-6">
                  We strive to be a beacon of excellence by providing high-quality training, fostering sportsmanship, and inspiring a love for the game. Our goal is to empower individuals through personalized coaching and innovative training programs, nurturing both skill and character to produce confident and well-rounded athletes.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/8007587/pexels-photo-8007587.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Vision"
                  className="rounded-2xl w-full h-[420px] object-cover shadow-2xl"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-yellow-400/20 to-transparent" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── FOUNDERS ── */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full px-4 py-1.5 mb-4">
              <span className="text-yellow-400 text-sm font-medium">Leadership</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white">Meet Our <span className="text-yellow-400">Founders</span></h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Kranti Vir */}
            <AnimatedSection direction="left" delay={0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                className="bg-gray-900 border border-gray-800 rounded-3xl overflow-hidden hover:border-yellow-400/30 transition-all duration-300"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/9654720/pexels-photo-9654720.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Kranti Vir"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 bg-gradient-to-br from-yellow-400 to-orange-500 text-gray-950 rounded-full px-3 py-1 text-xs font-bold">
                    Founder Director & Chief Coach
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-3xl font-black text-white mb-2">Kranti Vir</h3>
                  <p className="text-yellow-400 font-medium mb-4">Chief Coach & Founder Director</p>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    Certified Level 1 &amp; 2 Coach by Olympic Gold Quest (OGQ) and Level 1 Coach by the Badminton World Federation (BWF). With over five years of professional coaching experience under the mentorship of an Olympian, he has guided numerous athletes to district, state, and national-level medals.
                  </p>
                  <div className="space-y-2">
                    {[
                      'OGQ Certified Level 1 & 2 Coach',
                      'BWF Certified Level 1 Coach',
                      'India Rank Holder U-17 & U-19 Men\'s Singles',
                      'Haryana Samman Award 2016',
                      'International Player – Infosys International Challenges',
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle size={14} className="text-yellow-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-400 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>

            {/* Dr. Dilpreet Kaur */}
            <AnimatedSection direction="right" delay={0.2}>
              <motion.div
                whileHover={{ y: -6 }}
                className="bg-gray-900 border border-gray-800 rounded-3xl overflow-hidden hover:border-yellow-400/30 transition-all duration-300"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/3760607/pexels-photo-3760607.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Dr. Dilpreet Kaur"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 bg-gradient-to-br from-yellow-400 to-orange-500 text-gray-950 rounded-full px-3 py-1 text-xs font-bold">
                    Founder Director
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-3xl font-black text-white mb-2">Dr. Dilpreet Kaur</h3>
                  <p className="text-yellow-400 font-medium mb-4">Founder Director</p>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    National Award-winning scholar for Innovative Research in Physical Education and Sports Science by the Physical Education Foundation of India. With 6 years of teaching experience, she has authored 2 books, published 16 research papers, and holds 17 patents.
                  </p>
                  <div className="space-y-2">
                    {[
                      'National Award – Innovative Research in Physical Education',
                      'Ph.D. in Physical Education',
                      '6 Years Teaching Experience',
                      '2 Authored Books',
                      '16 Published Research Papers & 17 Patents',
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle size={14} className="text-yellow-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-400 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── BOARD MEMBERS ── */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full px-4 py-1.5 mb-4">
              <span className="text-yellow-400 text-sm font-medium">Governance</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white">Our <span className="text-yellow-400">Board Members</span></h2>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {boardMembers.map((member, i) => (
              <AnimatedSection key={i} delay={i * 0.1} direction="up">
                <motion.div
                  whileHover={{ y: -6 }}
                  className="bg-gray-950 border border-gray-800 rounded-2xl overflow-hidden text-center hover:border-yellow-400/30 transition-all duration-300"
                >
                  <div className="relative h-44 overflow-hidden">
                    <img src={member.img} alt={member.name} className="w-full h-full object-cover object-top" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-transparent" />
                  </div>
                  <div className="p-4">
                    <div className="font-bold text-white text-sm">{member.name}</div>
                    <div className="text-yellow-400 text-xs mt-1">{member.role}</div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── ADVISORY BOARD ── */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full px-4 py-1.5 mb-4">
              <span className="text-yellow-400 text-sm font-medium">Expert Guidance</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white">Our <span className="text-yellow-400">Advisory Board</span></h2>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {advisoryBoard.map((member, i) => (
              <AnimatedSection key={i} delay={i * 0.08} direction="up">
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-yellow-400/30 transition-all duration-300 group"
                >
                  <div className="relative h-40 overflow-hidden">
                    <img src={member.img} alt={member.name} className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
                  </div>
                  <div className="p-4">
                    <div className="font-bold text-white text-sm mb-1">{member.name}</div>
                    <div className="text-gray-400 text-xs leading-snug">{member.role}</div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Rao TEAM ── */}
      <section className="py-24 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full px-4 py-1.5 mb-4">
              <Users size={14} className="text-yellow-400" />
              <span className="text-yellow-400 text-sm font-medium">Our Team</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white">Get to Know Our <span className="text-yellow-400">Rao Team</span></h2>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {teamMembers.map((member, i) => (
              <AnimatedSection key={i} delay={i * 0.07} direction="up">
                <motion.div
                  whileHover={{ y: -8 }}
                  className="bg-gray-950 border border-gray-800 rounded-2xl overflow-hidden text-center group hover:border-yellow-400/40 transition-all duration-300 cursor-pointer"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent" />
                    <div className="absolute inset-0 bg-yellow-400/0 group-hover:bg-yellow-400/10 transition-colors duration-300" />
                  </div>
                  <div className="p-4">
                    <div className="font-bold text-white text-sm group-hover:text-yellow-400 transition-colors">{member.name}</div>
                    <div className="text-gray-500 text-xs mt-1">{member.role}</div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
