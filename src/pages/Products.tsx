import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { fadeUp, stagger } from '../utils/animations';
import { ArrowRight, CheckCircle } from 'lucide-react';

function AnimatedSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div ref={ref} variants={stagger} initial="hidden" animate={inView ? 'visible' : 'hidden'} className={className}>
      {children}
    </motion.div>
  );
}

const products = [
  {
    id: 'toughened-glass',
    title: 'Toughened Glass',
    category: 'Safety Glass',
    image: '/images/toughened-glass.jpg',
    desc: 'Heat-treated tempered glass offering 4–5× the strength of standard glass. The first choice for facades, doors, partitions, and safety-critical applications.',
    features: ['Heat treated to 650°C', 'Safe fragmentation on breakage', 'Available 4–19mm thickness', 'Custom sizes & shapes'],
    color: 'from-green-500/10 to-green-600/5',
    badge: 'Most Popular',
  },
  {
    id: 'laminated-glass',
    title: 'Laminated Glass',
    category: 'Safety Glass',
    image: '/images/laminated-glass.jpg',
    desc: 'Two or more glass plies bonded with a PVB or EVA interlayer. Provides exceptional safety, UV protection, and noise reduction for architectural applications.',
    features: ['PVB / EVA interlayer', 'Holds together on impact', 'UV protection up to 99%', 'Acoustic performance'],
    color: 'from-blue-500/10 to-blue-600/5',
    badge: null,
  },
  {
    id: 'insulated-glass',
    title: 'Insulated Glass',
    category: 'Energy Glass',
    image: '/images/insulated-glass.jpg',
    desc: 'Double or triple-glazed sealed units delivering superior thermal and acoustic insulation. Perfect for energy-efficient buildings and green architecture.',
    features: ['Double/triple glazed', 'Argon gas filled', 'Low-E coating available', 'SHGC & U-value certified'],
    color: 'from-purple-500/10 to-purple-600/5',
    badge: 'Energy Star',
  },
  {
    id: 'decorative-glass',
    title: 'Decorative Glass',
    category: 'Aesthetic Glass',
    image: '/images/decorative-glass.jpg',
    desc: 'A premium range of etched, frosted, lacquered, and patterned glass for interior applications. Adds elegance and visual identity to any space.',
    features: ['Acid etched & frosted', 'Digital printing available', 'Colored lacquered glass', 'Custom patterns & logos'],
    color: 'from-amber-500/10 to-amber-600/5',
    badge: 'New Range',
  },
];

export default function Products() {
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
        <div className="absolute -bottom-1 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <AnimatedSection>
            <motion.div variants={fadeUp} className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-semibold px-4 py-2 rounded-full mb-6 tracking-widest uppercase">
                Product Catalogue
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Our Glass
                <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent"> Collections</span>
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed">
                Precision-engineered glass for every application — from structural facades to decorative interiors.
              </p>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="space-y-16">
            {products.map((p, i) => (
              <AnimatedSection key={p.id}>
                <motion.div
                  variants={fadeUp}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? 'lg:grid-flow-col-dense' : ''}`}
                >
                  {/* Image */}
                  <div className={`relative ${i % 2 !== 0 ? 'lg:col-start-2' : ''}`}>
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                      <img src={p.image} alt={p.title} className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent" />
                      {p.badge && (
                        <div className="absolute top-4 left-4 bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                          {p.badge}
                        </div>
                      )}
                    </div>
                    {/* Decorative element */}
                    <div className={`absolute -z-10 inset-4 rounded-2xl bg-gradient-to-br ${p.color} border border-green-200/30 ${i % 2 === 0 ? 'translate-x-4 translate-y-4' : '-translate-x-4 translate-y-4'}`} />
                  </div>

                  {/* Content */}
                  <div className={i % 2 !== 0 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                    <div className="inline-flex items-center gap-2 bg-green-50 border border-green-100 text-green-600 text-xs font-semibold px-3 py-1.5 rounded-full mb-4 tracking-widest uppercase">
                      {p.category}
                    </div>
                    <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>{p.title}</h2>
                    <p className="text-gray-500 leading-relaxed mb-7 text-base">{p.desc}</p>
                    <div className="grid grid-cols-2 gap-3 mb-8">
                      {p.features.map((f) => (
                        <div key={f} className="flex items-start gap-2 text-gray-600 text-sm">
                          <CheckCircle size={15} className="text-green-500 shrink-0 mt-0.5" />
                          {f}
                        </div>
                      ))}
                    </div>
                    <Link
                      to={`/products/${p.id}`}
                      className="bg-green-500 hover:bg-green-600 text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-300 inline-flex items-center gap-2 text-sm shadow-lg shadow-green-500/20"
                    >
                      View Details <ArrowRight size={15} />
                    </Link>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AnimatedSection>
            <motion.div variants={fadeUp}>
              <h2 className="text-4xl font-bold text-white mb-5" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Need a Custom Glass Solution?
              </h2>
              <p className="text-gray-400 mb-8 text-lg">
                Tell us your requirements and our technical team will design the perfect glass product for your project.
              </p>
              <Link to="/contact" className="bg-green-500 hover:bg-green-600 text-white font-bold px-9 py-4 rounded-xl inline-flex items-center gap-2 transition-all duration-300 shadow-xl shadow-green-500/20 text-sm">
                Request Custom Quote <ArrowRight size={16} />
              </Link>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </motion.div>
  );
}
