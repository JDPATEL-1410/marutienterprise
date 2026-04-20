import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { fadeUp, stagger } from '../utils/animations';
import {
  ArrowRight, CheckCircle, Award, Zap, Shield, Settings,
  Building2, Home as HomeIcon, Store, ChevronRight, Star, Quote
} from 'lucide-react';

function AnimatedSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      variants={stagger}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const products = [
  {
    id: 'toughened-glass',
    title: 'Toughened Glass',
    desc: 'Heat-treated for superior strength — 4–5× stronger than standard glass. Ideal for facades, doors, and partitions.',
    icon: '🛡️',
    color: 'from-green-500/10 to-emerald-600/5',
  },
  {
    id: 'laminated-glass',
    title: 'Laminated Glass',
    desc: 'Multi-layer safety glass with PVB interlayer. Stays intact on impact, offering enhanced security and UV protection.',
    icon: '🔒',
    color: 'from-blue-500/10 to-blue-600/5',
  },
  {
    id: 'insulated-glass',
    title: 'Insulated Glass',
    desc: 'Double or triple-glazed units for exceptional thermal and acoustic insulation in modern constructions.',
    icon: '🌡️',
    color: 'from-purple-500/10 to-purple-600/5',
  },
  {
    id: 'decorative-glass',
    title: 'Decorative Glass',
    desc: 'Etched, frosted, and designer glass solutions that add elegance and character to any interior space.',
    icon: '✨',
    color: 'from-amber-500/10 to-amber-600/5',
  },
];

const whyUs = [
  { icon: Award, title: 'Premium Quality', desc: 'ISO-certified manufacturing processes with rigorous quality control at every stage.' },
  { icon: Shield, title: 'Durability Assured', desc: 'Products engineered to withstand extreme conditions and maintain integrity over decades.' },
  { icon: Zap, title: 'Advanced Technology', desc: 'State-of-the-art CNC cutting, heat treatment, and edge processing machinery.' },
  { icon: Settings, title: 'Custom Solutions', desc: 'Bespoke glass solutions tailored to your exact architectural and design specifications.' },
];

const industries = [
  { icon: Building2, title: 'Commercial Construction', desc: 'High-rise office towers, curtain walls, storefronts' },
  { icon: HomeIcon, title: 'Residential Interiors', desc: 'Luxury homes, partitions, balustrades, showers' },
  { icon: Store, title: 'Retail & Hospitality', desc: 'Showrooms, hotels, restaurants, retail facades' },
];

const stats = [
  { value: '15+', label: 'Years of Excellence' },
  { value: '2500+', label: 'Projects Delivered' },
  { value: '50+', label: 'Product Variants' },
  { value: '98%', label: 'Client Satisfaction' },
];

const testimonials = [
  {
    name: 'Rajesh Patel',
    role: 'Principal Architect, RP Studio',
    text: 'Marutii Enterprise consistently delivers glass products that exceed our specifications. The quality and precision are unmatched in the market.',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    role: 'Interior Designer, Luxe Interiors',
    text: 'Their decorative glass collection is stunning. Every project we collaborate on with Marutii becomes a landmark in its own right.',
    rating: 5,
  },
  {
    name: 'Vikram Desai',
    role: 'Project Manager, Skyline Builders',
    text: 'Reliable supply chain, on-time delivery, and exceptional after-sales support. Marutii is our go-to glass supplier for all major projects.',
    rating: 5,
  },
];

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white"
    >
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/hero-bg.jpg" alt="Glass Architecture" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950/95 via-gray-950/75 to-gray-950/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent" />
        </div>
        <div className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-gradient-to-b from-transparent via-green-500 to-transparent" />
        <div className="absolute top-20 right-10 w-64 h-64 rounded-2xl border border-white/5 rotate-12 hidden lg:block" />
        <div className="absolute bottom-20 right-40 w-32 h-32 rounded-xl border border-green-500/20 bg-green-500/5 -rotate-6 hidden lg:block" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-16 pt-28 pb-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-semibold px-4 py-2 rounded-full mb-6 tracking-widest uppercase"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Premium Glass Manufacturing
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="flex items-center gap-1 bg-white/5 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-lg shadow-xl shadow-black/20">
                <div className="flex items-center gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={14} className="fill-green-400 text-green-400" />
                  ))}
                </div>
                <span className="text-white font-bold text-sm ml-1">5.0</span>
                <span className="text-gray-400 text-[10px] ml-2 border-l border-white/10 pl-2">5 Google Reviews</span>
              </div>
              <div className="h-4 w-px bg-white/10 hidden sm:block" />
              <div className="hidden sm:flex items-center gap-2 text-gray-300 text-xs">
                <Shield size={14} className="text-green-500" />
                ISO 9001:2015 Certified
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Precision Glass
              <br />
              <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
                Solutions
              </span>
              <br />
              for Modern
              <br />
              Infrastructure
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-gray-300 text-lg md:text-xl leading-relaxed mb-10 max-w-xl"
            >
              Engineered for clarity, durability, and design. Transforming architectural visions into transparent realities since 2009.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/contact" className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 inline-flex items-center gap-2 shadow-xl shadow-green-500/25 text-sm">
                Get a Quote <ArrowRight size={16} />
              </Link>
              <Link to="/products" className="border-2 border-white/25 text-white hover:border-white/60 hover:bg-white/5 font-semibold px-8 py-4 rounded-xl transition-all duration-300 inline-flex items-center gap-2 text-sm">
                Our Products <ChevronRight size={16} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-wrap gap-8 mt-14 pt-10 border-t border-white/10"
            >
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-green-400 text-2xl font-bold">{s.value}</div>
                  <div className="text-gray-400 text-xs mt-1">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-gray-500 text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-px h-10 bg-gradient-to-b from-green-500 to-transparent"
          />
        </motion.div>
      </section>

      {/* ABOUT SNIPPET */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <motion.div variants={fadeUp}>
                <div className="inline-flex items-center gap-2 bg-green-50 border border-green-100 text-green-600 text-xs font-semibold px-4 py-2 rounded-full mb-5 tracking-widest uppercase">
                  About Marutii Enterprise
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Crafting Transparency<br />
                  <span className="text-green-500">Since 2009</span>
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 text-base">
                  Marutii Enterprise is a leading glass manufacturer based in Anand, Gujarat. With over 15 years of industry expertise, we deliver precision-engineered glass solutions to architects, builders, and interior designers across India.
                </p>
                <p className="text-gray-500 leading-relaxed mb-8 text-sm">
                  Our state-of-the-art facility spans 50,000 sq. ft. with advanced CNC glass cutting, heat treatment furnaces, and automated edge processing lines — enabling us to produce glass to the most demanding specifications.
                </p>
                <Link to="/about" className="bg-green-500 hover:bg-green-600 text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-300 inline-flex items-center gap-2 text-sm shadow-lg shadow-green-500/20">
                  Learn More <ArrowRight size={15} />
                </Link>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection>
              <motion.div variants={fadeUp} className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img src="/images/about-bg.jpg" alt="Factory" className="w-full h-80 object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 border border-gray-100">
                  <div className="text-green-500 text-3xl font-bold">15+</div>
                  <div className="text-gray-500 text-xs mt-1">Years Experience</div>
                </div>
                <div className="absolute -top-6 -right-6 bg-green-500 rounded-2xl shadow-xl p-5">
                  <div className="text-white text-3xl font-bold">2500+</div>
                  <div className="text-green-100 text-xs mt-1">Projects Done</div>
                </div>
                <div className="mt-10 grid grid-cols-2 gap-3">
                  {['ISO Certified', 'Pan-India Delivery', 'Custom Fabrication', 'Expert Support'].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-gray-600 text-sm">
                      <CheckCircle size={15} className="text-green-500 shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <AnimatedSection className="text-center mb-16">
            <motion.div variants={fadeUp}>
              <div className="inline-flex items-center gap-2 bg-green-50 border border-green-100 text-green-600 text-xs font-semibold px-4 py-2 rounded-full mb-5 tracking-widest uppercase">
                Our Product Range
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Engineered Glass Solutions
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto text-base">
                From structural safety to aesthetic elegance — our comprehensive range covers every glass requirement for modern construction.
              </p>
            </motion.div>
          </AnimatedSection>

          <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((p) => (
              <motion.div key={p.id} variants={fadeUp}>
                <Link to={`/products/${p.id}`} className="group block h-full">
                  <div className={`relative rounded-2xl p-7 bg-gradient-to-br ${p.color} border border-gray-100 hover:border-green-200 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-500/10 h-full`}>
                    <div className="text-4xl mb-5">{p.icon}</div>
                    <h3 className="text-gray-900 font-bold text-lg mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>{p.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-5">{p.desc}</p>
                    <div className="flex items-center gap-1 text-green-500 text-sm font-semibold group-hover:gap-2 transition-all duration-200">
                      View Details <ArrowRight size={14} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatedSection>

          <div className="text-center mt-10">
            <Link to="/products" className="border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-300 inline-flex items-center gap-2 text-sm">
              View All Products <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(47, 168, 79, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(47, 168, 79, 0.3) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <AnimatedSection className="text-center mb-16">
            <motion.div variants={fadeUp}>
              <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-semibold px-4 py-2 rounded-full mb-5 tracking-widest uppercase">
                Why Choose Us
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                The Marutii Advantage
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-base">
                Our commitment to excellence is reflected in every glass panel we produce.
              </p>
            </motion.div>
          </AnimatedSection>

          <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item) => (
              <motion.div key={item.title} variants={fadeUp}>
                <div className="group relative rounded-2xl p-7 bg-white/3 border border-white/5 hover:border-green-500/25 hover:bg-green-500/5 transition-all duration-500 hover:-translate-y-1 h-full">
                  <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-5 group-hover:bg-green-500/20 transition-colors duration-300">
                    <item.icon size={22} className="text-green-400" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <AnimatedSection className="text-center mb-16">
            <motion.div variants={fadeUp}>
              <div className="inline-flex items-center gap-2 bg-green-50 border border-green-100 text-green-600 text-xs font-semibold px-4 py-2 rounded-full mb-5 tracking-widest uppercase">
                Industries We Serve
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Glass Solutions Across Every Sector
              </h2>
            </motion.div>
          </AnimatedSection>

          <AnimatedSection className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {industries.map((ind) => (
              <motion.div key={ind.title} variants={fadeUp}>
                <div className="group rounded-2xl overflow-hidden bg-white border border-gray-100 hover:border-green-200 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-500/10">
                  <div className="p-8">
                    <div className="w-14 h-14 rounded-2xl bg-green-50 border border-green-100 flex items-center justify-center mb-6 group-hover:bg-green-500 group-hover:border-green-500 transition-all duration-300">
                      <ind.icon size={26} className="text-green-500 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-gray-900 font-bold text-xl mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>{ind.title}</h3>
                    <p className="text-gray-400 text-sm">{ind.desc}</p>
                  </div>
                  <div className="h-1 bg-gradient-to-r from-green-500 to-emerald-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              </motion.div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <AnimatedSection className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <motion.div variants={fadeUp}>
              <div className="inline-flex items-center gap-2 bg-green-50 border border-green-100 text-green-600 text-xs font-semibold px-4 py-2 rounded-full mb-5 tracking-widest uppercase">
                Featured Projects
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Our Work<br /><span className="text-green-500">Speaks for Itself</span>
              </h2>
            </motion.div>
            <motion.div variants={fadeUp}>
              <Link to="/gallery" className="border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white font-semibold px-7 py-3 rounded-xl transition-all duration-300 inline-flex items-center gap-2 text-sm">
                View Full Gallery <ArrowRight size={15} />
              </Link>
            </motion.div>
          </AnimatedSection>

          <AnimatedSection className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { src: '/images/gallery-1.jpg', label: 'Commercial Facade' },
              { src: '/images/gallery-2.jpg', label: 'Office Partitions' },
              { src: '/images/gallery-3.jpg', label: 'Glass Staircase' },
            ].map((img) => (
              <motion.div key={img.src} variants={fadeUp}>
                <Link to="/gallery" className="group block relative rounded-2xl overflow-hidden">
                  <img src={img.src} alt={img.label} className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-white font-semibold text-sm">{img.label}</span>
                    <div className="flex items-center gap-1 text-green-400 text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      View Project <ArrowRight size={12} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(47,168,79,0.5) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <AnimatedSection className="text-center mb-16">
            <motion.div variants={fadeUp}>
              <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-semibold px-4 py-2 rounded-full mb-5 tracking-widest uppercase">
                Client Testimonials
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Trusted by Industry Leaders
              </h2>
            </motion.div>
          </AnimatedSection>

          <AnimatedSection className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div key={i} variants={fadeUp}>
                <div className="rounded-2xl p-7 bg-white/3 border border-white/8 hover:border-green-500/20 transition-all duration-500 h-full">
                  <Quote size={28} className="text-green-500/50 mb-4" />
                  <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} size={13} className="fill-green-400 text-green-400" />
                    ))}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{t.name}</div>
                    <div className="text-gray-500 text-xs mt-0.5">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-24 bg-gradient-to-br from-green-600 via-green-500 to-emerald-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />
        </div>
        <div className="absolute top-0 left-0 right-0 h-px bg-white/30" />
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-white/5 blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <AnimatedSection>
            <motion.div variants={fadeUp}>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Ready to Build Something<br />
                <span className="text-green-100">Extraordinary?</span>
              </h2>
              <p className="text-green-100 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                Contact our team today for customized glass solutions. We'll work with you from design to delivery.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact" className="bg-white text-green-600 font-bold px-9 py-4 rounded-xl transition-all duration-300 hover:bg-green-50 shadow-xl inline-flex items-center gap-2 text-sm">
                  Get a Free Quote <ArrowRight size={16} />
                </Link>
                <Link to="/products" className="border-2 border-white/60 text-white hover:bg-white/10 font-semibold px-9 py-4 rounded-xl transition-all duration-300 inline-flex items-center gap-2 text-sm">
                  Browse Products
                </Link>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </motion.div>
  );
}
