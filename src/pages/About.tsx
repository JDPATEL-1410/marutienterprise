import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { fadeUp, stagger } from '../utils/animations';
import { ArrowRight, Target, Eye, Cpu, Layers, Users, Globe } from 'lucide-react';

function AnimatedSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div ref={ref} variants={stagger} initial="hidden" animate={inView ? 'visible' : 'hidden'} className={className}>
      {children}
    </motion.div>
  );
}

const capabilities = [
  { icon: Cpu, title: 'CNC Glass Cutting', desc: 'Precision CNC-controlled cutting systems for complex shapes and tight tolerances.' },
  { icon: Layers, title: 'Heat Treatment', desc: 'Advanced tempering furnaces capable of processing glass up to 12mm thickness.' },
  { icon: Users, title: 'Expert Workforce', desc: '150+ skilled professionals with deep domain expertise in glass processing.' },
  { icon: Globe, title: 'Pan-India Supply', desc: 'Robust logistics network ensuring timely delivery across all major Indian cities.' },
];

const timeline = [
  { year: '2009', event: 'Marutii Enterprise founded in Anand with a vision to redefine glass manufacturing.' },
  { year: '2012', event: 'Expanded facility to 30,000 sq. ft. and introduced toughened glass processing line.' },
  { year: '2015', event: 'Achieved ISO 9001:2015 certification. Launched laminated and decorative glass range.' },
  { year: '2018', event: 'Installed state-of-the-art German CNC cutting machinery and automated edge processing.' },
  { year: '2021', event: 'Crossed 2000 projects milestone. Expanded to serve clients across 15+ Indian states.' },
  { year: '2024', event: 'Launched insulated glass units (IGU) line. Facility expanded to 50,000 sq. ft.' },
];

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white"
    >
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gray-950 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(47, 168, 79, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(47, 168, 79, 0.4) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }} />
        </div>
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-green-500/5 blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <AnimatedSection>
            <motion.div variants={fadeUp} className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-semibold px-4 py-2 rounded-full mb-6 tracking-widest uppercase">
                About Us
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Building Trust Through<br />
                <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
                  Transparent Excellence
                </span>
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed">
                Marutii Enterprise has been at the forefront of glass manufacturing innovation since 2009, delivering precision-engineered glass solutions that shape India's built environment.
              </p>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <motion.div variants={fadeUp}>
                <div className="inline-flex items-center gap-2 bg-green-50 border border-green-100 text-green-600 text-xs font-semibold px-4 py-2 rounded-full mb-6 tracking-widest uppercase">
                  Our Story
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  From a Small Workshop to
                  <span className="text-green-500"> a Glass Empire</span>
                </h2>
                <p className="text-gray-600 leading-relaxed mb-5">
                  Founded in 2009 by a team of visionary engineers and business professionals, Marutii Enterprise started as a small glass processing unit with a singular focus: delivering uncompromising quality.
                </p>
                <p className="text-gray-500 leading-relaxed mb-5 text-sm">
                  Over the years, we have grown into one of Gujarat's most trusted glass manufacturers, serving 2,500+ projects across residential, commercial, and industrial sectors. Our journey has been defined by relentless innovation, strategic investments in technology, and an unwavering commitment to client satisfaction.
                </p>
                <p className="text-gray-500 leading-relaxed text-sm">
                  Today, our 50,000 sq. ft. facility in Anand operates three specialized production lines, staffed by 150+ skilled professionals who share our passion for perfection in glass.
                </p>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection>
              <motion.div variants={fadeUp} className="relative rounded-2xl overflow-hidden">
                <img src="/images/about-bg.jpg" alt="Our Facility" className="w-full h-96 object-cover rounded-2xl shadow-2xl" />
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-transparent rounded-2xl" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-gray-950/80 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-green-400 text-2xl font-bold">50K</div>
                        <div className="text-gray-400 text-xs">Sq. Ft. Facility</div>
                      </div>
                      <div>
                        <div className="text-green-400 text-2xl font-bold">150+</div>
                        <div className="text-gray-400 text-xs">Professionals</div>
                      </div>
                      <div>
                        <div className="text-green-400 text-2xl font-bold">3</div>
                        <div className="text-gray-400 text-xs">Product Lines</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div variants={fadeUp} className="group rounded-2xl p-10 bg-gray-950 border border-white/5 hover:border-green-500/20 transition-all duration-500">
              <div className="w-14 h-14 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-7">
                <Eye size={26} className="text-green-400" />
              </div>
              <h3 className="text-white text-2xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Our Vision</h3>
              <p className="text-gray-400 leading-relaxed">
                To be India's most trusted and innovative glass manufacturing company — setting industry benchmarks for quality, sustainability, and technological advancement in architectural glass solutions.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="group rounded-2xl p-10 bg-green-500 border border-green-400/20 transition-all duration-500">
              <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-7">
                <Target size={26} className="text-white" />
              </div>
              <h3 className="text-white text-2xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Our Mission</h3>
              <p className="text-green-50 leading-relaxed">
                To deliver precision-engineered glass products that transform architectural visions into reality — through cutting-edge technology, skilled craftsmanship, and client-centric service that exceeds expectations.
              </p>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <AnimatedSection className="text-center mb-16">
            <motion.div variants={fadeUp}>
              <div className="inline-flex items-center gap-2 bg-green-50 border border-green-100 text-green-600 text-xs font-semibold px-4 py-2 rounded-full mb-5 tracking-widest uppercase">
                Our Journey
              </div>
              <h2 className="text-4xl font-bold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Milestones That Define Us
              </h2>
            </motion.div>
          </AnimatedSection>

          <AnimatedSection className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-green-500 via-green-400 to-green-500/20 -translate-x-1/2" />
            <div className="space-y-10">
              {timeline.map((item, i) => (
                <motion.div key={item.year} variants={fadeUp} className={`flex items-start gap-8 ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`flex-1 ${i % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className="inline-block bg-gray-50 rounded-xl p-5 border border-gray-100 hover:border-green-200 transition-colors duration-300 max-w-xs">
                      <p className="text-gray-600 text-sm leading-relaxed">{item.event}</p>
                    </div>
                  </div>
                  <div className="relative flex-none flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center z-10 shadow-lg shadow-green-500/30">
                      <span className="text-white text-xs font-bold">{item.year.slice(2)}</span>
                    </div>
                    <div className="text-green-500 font-bold text-sm mt-1">{item.year}</div>
                  </div>
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <AnimatedSection className="text-center mb-16">
            <motion.div variants={fadeUp}>
              <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-semibold px-4 py-2 rounded-full mb-5 tracking-widest uppercase">
                Infrastructure
              </div>
              <h2 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Manufacturing Capabilities
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                World-class infrastructure designed to handle projects of any scale.
              </p>
            </motion.div>
          </AnimatedSection>

          <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap) => (
              <motion.div key={cap.title} variants={fadeUp}>
                <div className="rounded-2xl p-7 bg-white/3 border border-white/5 hover:border-green-500/20 hover:bg-green-500/5 transition-all duration-500 h-full">
                  <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-5">
                    <cap.icon size={22} className="text-green-400" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-3">{cap.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{cap.desc}</p>
                </div>
              </motion.div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-green-500">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-5" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Partner with Marutii Enterprise
          </h2>
          <p className="text-green-100 mb-8 text-lg">Ready to start your next glass project with us?</p>
          <Link to="/contact" className="bg-white text-green-600 font-bold px-9 py-4 rounded-xl inline-flex items-center gap-2 hover:bg-green-50 transition-all duration-300 shadow-xl text-sm">
            Get in Touch <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </motion.div>
  );
}
