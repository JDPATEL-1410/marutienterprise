import { useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { fadeUp, stagger } from '../utils/animations';
import { ArrowRight, CheckCircle, ArrowLeft, Package, Ruler, Zap, Shield } from 'lucide-react';

function AnimatedSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div ref={ref} variants={stagger} initial="hidden" animate={inView ? 'visible' : 'hidden'} className={className}>
      {children}
    </motion.div>
  );
}

const productData: Record<string, {
  title: string;
  category: string;
  image: string;
  heroDesc: string;
  fullDesc: string;
  specs: { label: string; value: string }[];
  applications: string[];
  benefits: { icon: typeof Package; title: string; desc: string }[];
  color: string;
}> = {
  'toughened-glass': {
    title: 'Toughened Glass',
    category: 'Safety Glass',
    image: '/images/toughened-glass.jpg',
    heroDesc: '4–5× stronger than annealed glass. The industry standard for safety-critical applications.',
    fullDesc: 'Toughened glass (also called tempered glass) is manufactured by heating annealed glass to approximately 650°C and then rapidly cooling it. This process creates a state of high surface compression and central tension, resulting in glass that is four to five times stronger than ordinary glass of the same thickness. When broken, it crumbles into small, blunt fragments rather than sharp shards — significantly reducing injury risk.',
    specs: [
      { label: 'Thickness Range', value: '4mm – 19mm' },
      { label: 'Max Size', value: '2440 × 3660 mm' },
      { label: 'Strength', value: '4–5× standard glass' },
      { label: 'Heat Resistance', value: 'Up to 300°C' },
      { label: 'Edge Finish', value: 'Polished / Arrised / CNC' },
      { label: 'Standard', value: 'IS 2553 / EN 12150' },
    ],
    applications: [
      'Structural facades & curtain walls',
      'Shower enclosures & bath screens',
      'Glass doors & partitions',
      'Balustrades & railings',
      'Furniture & tabletops',
      'Skylights & roof glazing',
    ],
    benefits: [
      { icon: Shield, title: 'Safety First', desc: 'Breaks into small harmless pieces, drastically reducing injury risk.' },
      { icon: Zap, title: 'Superior Strength', desc: 'Withstands thermal stress, mechanical loads, and impact far better than standard glass.' },
      { icon: Ruler, title: 'Custom Dimensions', desc: 'Available in any shape or size — holes, notches, cutouts pre-processed.' },
      { icon: Package, title: 'Versatile Applications', desc: 'Suitable for interior and exterior applications across all sectors.' },
    ],
    color: 'from-green-500/10 to-emerald-600/5',
  },
  'laminated-glass': {
    title: 'Laminated Glass',
    category: 'Safety Glass',
    image: '/images/laminated-glass.jpg',
    heroDesc: 'Enhanced security and UV protection with bonded interlayer technology.',
    fullDesc: 'Laminated glass consists of two or more glass panes permanently bonded together with one or more interlayers of PVB (Polyvinyl Butyral) or EVA (Ethylene Vinyl Acetate). When broken, the interlayer holds the glass fragments in place, preventing shattering and maintaining structural integrity. This makes it ideal for security, overhead glazing, and acoustic applications.',
    specs: [
      { label: 'Glass Plies', value: '2 + interlayer (standard)' },
      { label: 'Interlayer', value: 'PVB / EVA / SGP' },
      { label: 'Thickness', value: '6.38mm – 30mm+' },
      { label: 'UV Protection', value: 'Up to 99%' },
      { label: 'Sound Reduction', value: 'Up to 45 dB' },
      { label: 'Standard', value: 'IS 2835 / EN 14449' },
    ],
    applications: [
      'Overhead & roof glazing',
      'Structural glass floors',
      'Acoustic barriers',
      'Bullet-resistant glazing',
      'Skylights & atriums',
      'Shop fronts & showcases',
    ],
    benefits: [
      { icon: Shield, title: 'Safety on Breakage', desc: 'Interlayer prevents glass from shattering into dangerous shards.' },
      { icon: Zap, title: 'UV Filtration', desc: 'Blocks up to 99% of UV radiation, protecting interiors and occupants.' },
      { icon: Ruler, title: 'Acoustic Control', desc: 'PVB interlayer significantly reduces sound transmission.' },
      { icon: Package, title: 'Security Grade', desc: 'Available in security and bullet-resistant variants.' },
    ],
    color: 'from-blue-500/10 to-blue-600/5',
  },
  'insulated-glass': {
    title: 'Insulated Glass',
    category: 'Energy Glass',
    image: '/images/insulated-glass.jpg',
    heroDesc: 'Maximum thermal and acoustic performance for energy-efficient buildings.',
    fullDesc: 'Insulated Glass Units (IGUs) consist of two or more glass panes separated by a spacer bar and sealed hermetically. The space between panes is filled with dry air or inert gas (argon or krypton), creating an effective thermal barrier. Combined with Low-E coatings, IGUs dramatically reduce heat transfer, contributing to significant energy savings and enhanced occupant comfort.',
    specs: [
      { label: 'Configuration', value: 'Double / Triple Glazed' },
      { label: 'Gas Fill', value: 'Argon / Krypton / Air' },
      { label: 'Spacer', value: 'Aluminum / Warm Edge' },
      { label: 'U-Value', value: 'From 0.8 W/m²K' },
      { label: 'Low-E Coating', value: 'Available' },
      { label: 'Standard', value: 'EN 1279 / IGMA' },
    ],
    applications: [
      'Commercial building facades',
      'Energy-efficient windows',
      'Cold storage & cleanrooms',
      'Sound-sensitive environments',
      'Green-rated buildings',
      'Curtain wall systems',
    ],
    benefits: [
      { icon: Shield, title: 'Thermal Insulation', desc: 'Reduces heat transfer by up to 70% compared to single glazing.' },
      { icon: Zap, title: 'Energy Savings', desc: 'Lowers HVAC load and reduces energy consumption significantly.' },
      { icon: Ruler, title: 'Condensation Control', desc: 'Hermetic sealing prevents moisture ingress and condensation.' },
      { icon: Package, title: 'Green Building', desc: 'Contributes to LEED, IGBC, and other green building certifications.' },
    ],
    color: 'from-purple-500/10 to-purple-600/5',
  },
  'decorative-glass': {
    title: 'Decorative Glass',
    category: 'Aesthetic Glass',
    image: '/images/decorative-glass.jpg',
    heroDesc: 'Elegant glass solutions that combine artistry with architectural functionality.',
    fullDesc: 'Our decorative glass range combines advanced processing techniques with artistic vision to create glass that is both beautiful and functional. From acid-etched frosted glass to digitally printed custom designs, our decorative glass collection enables architects and interior designers to realize their most creative visions. Each piece is custom-crafted to specification.',
    specs: [
      { label: 'Types', value: 'Frosted / Etched / Lacquered' },
      { label: 'Printing', value: 'Digital ceramic printing' },
      { label: 'Base Glass', value: 'Clear / Tinted / Toughened' },
      { label: 'Colors', value: '100+ lacquer shades' },
      { label: 'Pattern Library', value: '500+ designs' },
      { label: 'Custom', value: 'Logos & artwork accepted' },
    ],
    applications: [
      'Office partitions & walls',
      'Decorative backsplashes',
      'Retail store displays',
      'Feature walls & art installations',
      'Signage & branding',
      'Hotel & hospitality interiors',
    ],
    benefits: [
      { icon: Shield, title: 'Privacy Control', desc: 'Frosted and etched variants provide privacy while transmitting light.' },
      { icon: Zap, title: 'Brand Expression', desc: 'Custom printing enables brand logos and unique artwork on glass.' },
      { icon: Ruler, title: 'Design Flexibility', desc: 'Available in hundreds of patterns, colors, and textures.' },
      { icon: Package, title: 'Durable Finish', desc: 'Ceramic prints are kiln-fired — permanent, scratch-resistant finish.' },
    ],
    color: 'from-amber-500/10 to-amber-600/5',
  },
};

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = id ? productData[id] : null;

  if (!product) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen bg-white flex items-center justify-center pt-20"
      >
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h2>
          <Link to="/products" className="text-green-500 hover:text-green-600 flex items-center gap-2 justify-center">
            <ArrowLeft size={16} /> Back to Products
          </Link>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white"
    >
      {/* Hero */}
      <section className="relative pt-32 pb-0 bg-gray-950 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(47,168,79,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(47,168,79,0.4) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <Link to="/products" className="inline-flex items-center gap-2 text-gray-400 hover:text-green-400 text-sm mb-8 transition-colors">
            <ArrowLeft size={15} /> Back to Products
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end pb-16">
            <AnimatedSection>
              <motion.div variants={fadeUp}>
                <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 tracking-widest uppercase">
                  {product.category}
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-5 leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {product.title}
                </h1>
                <p className="text-gray-300 text-xl mb-8">{product.heroDesc}</p>
                <Link to="/contact" className="bg-green-500 hover:bg-green-600 text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-300 inline-flex items-center gap-2 text-sm shadow-lg shadow-green-500/20">
                  Request Quote <ArrowRight size={15} />
                </Link>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection>
              <motion.div variants={fadeUp}>
                <div className="relative rounded-t-2xl overflow-hidden">
                  <img src={product.image} alt={product.title} className="w-full h-72 object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-transparent" />
                </div>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Description + Specs */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Description */}
            <div className="lg:col-span-2">
              <AnimatedSection>
                <motion.div variants={fadeUp}>
                  <h2 className="text-3xl font-bold text-gray-900 mb-5" style={{ fontFamily: 'Poppins, sans-serif' }}>Product Overview</h2>
                  <p className="text-gray-600 leading-relaxed text-base mb-8">{product.fullDesc}</p>

                  <h3 className="text-xl font-bold text-gray-900 mb-5">Applications</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {product.applications.map((app) => (
                      <div key={app} className="flex items-center gap-2 text-gray-600 text-sm">
                        <CheckCircle size={15} className="text-green-500 shrink-0" />
                        {app}
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatedSection>
            </div>

            {/* Specs */}
            <div>
              <AnimatedSection>
                <motion.div variants={fadeUp}>
                  <div className="rounded-2xl border border-gray-100 overflow-hidden shadow-lg">
                    <div className="bg-gray-950 p-5">
                      <h3 className="text-white font-bold text-lg">Technical Specifications</h3>
                    </div>
                    <div className="divide-y divide-gray-50">
                      {product.specs.map((spec) => (
                        <div key={spec.label} className="flex justify-between items-start p-4 hover:bg-gray-50 transition-colors">
                          <span className="text-gray-500 text-sm">{spec.label}</span>
                          <span className="text-gray-900 text-sm font-medium text-right ml-4">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                    <div className="p-5 bg-green-50 border-t border-green-100">
                      <Link to="/contact" className="block w-full text-center bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-xl transition-all duration-300 text-sm">
                        Get Custom Quote
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <AnimatedSection className="text-center mb-12">
            <motion.div variants={fadeUp}>
              <h2 className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>Key Benefits</h2>
            </motion.div>
          </AnimatedSection>
          <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {product.benefits.map((b) => (
              <motion.div key={b.title} variants={fadeUp}>
                <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-green-200 hover:shadow-xl transition-all duration-500 h-full">
                  <div className="w-11 h-11 rounded-xl bg-green-50 border border-green-100 flex items-center justify-center mb-4">
                    <b.icon size={20} className="text-green-500" />
                  </div>
                  <h3 className="text-gray-900 font-bold mb-2">{b.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
                </div>
              </motion.div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-10" style={{ fontFamily: 'Poppins, sans-serif' }}>Explore More Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(productData)
              .filter(([key]) => key !== id)
              .slice(0, 3)
              .map(([key, p]) => (
                <Link key={key} to={`/products/${key}`} className="group block rounded-2xl overflow-hidden border border-gray-100 hover:border-green-200 hover:shadow-xl transition-all duration-500">
                  <div className="relative overflow-hidden">
                    <img src={p.image} alt={p.title} className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-5">
                    <div className="text-green-500 text-xs font-semibold tracking-widest uppercase mb-2">{p.category}</div>
                    <h3 className="text-gray-900 font-bold text-lg mb-2">{p.title}</h3>
                    <div className="flex items-center gap-1 text-green-500 text-sm font-medium group-hover:gap-2 transition-all">
                      View Details <ArrowRight size={13} />
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
