import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { fadeUp, stagger } from '../utils/animations';
import { X, ZoomIn } from 'lucide-react';

function AnimatedSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div ref={ref} variants={stagger} initial="hidden" animate={inView ? 'visible' : 'hidden'} className={className}>
      {children}
    </motion.div>
  );
}

const galleryItems = [
  { src: '/images/gallery-1.jpg', title: 'Commercial Glass Facade', category: 'Commercial', desc: 'Full-height structural glass curtain wall for a 15-floor commercial tower.' },
  { src: '/images/gallery-2.jpg', title: 'Corporate Office Partitions', category: 'Interior', desc: 'Frameless glass partition system for a leading IT company headquarters.' },
  { src: '/images/gallery-3.jpg', title: 'Structural Glass Staircase', category: 'Residential', desc: 'Cantilevered glass staircase with toughened treads and frameless balustrades.' },
  { src: '/images/toughened-glass.jpg', title: 'Toughened Glass Panel', category: 'Product', desc: 'Premium toughened glass — 12mm, polished edges, custom dimensions.' },
  { src: '/images/laminated-glass.jpg', title: 'Laminated Safety Glass', category: 'Product', desc: '8.38mm laminated glass with clear PVB interlayer for overhead glazing.' },
  { src: '/images/decorative-glass.jpg', title: 'Decorative Frosted Glass', category: 'Interior', desc: 'Acid-etched frosted glass with geometric pattern for a luxury hotel lobby.' },
  { src: '/images/insulated-glass.jpg', title: 'Insulated Glass Unit', category: 'Commercial', desc: 'Double-glazed IGU with argon fill and Low-E coating for energy efficiency.' },
  { src: '/images/about-bg.jpg', title: 'Manufacturing Facility', category: 'Factory', desc: 'Our state-of-the-art 50,000 sq. ft. glass processing facility in Anand.' },
];

const categories = ['All', 'Commercial', 'Interior', 'Residential', 'Product', 'Factory'];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightbox, setLightbox] = useState<typeof galleryItems[0] | null>(null);

  const filtered = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter((g) => g.category === activeCategory);

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
            backgroundImage: 'linear-gradient(rgba(47,168,79,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(47,168,79,0.4) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <AnimatedSection>
            <motion.div variants={fadeUp} className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-semibold px-4 py-2 rounded-full mb-6 tracking-widest uppercase">
                Project Gallery
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-5 leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Our Portfolio
                <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent"> of Work</span>
              </h1>
              <p className="text-gray-400 text-lg">
                A showcase of precision glass installations across commercial, residential, and industrial projects.
              </p>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          {/* Filter tabs */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-green-500 text-white shadow-lg shadow-green-500/25'
                    : 'bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            <AnimatePresence>
              {filtered.map((item) => (
                <motion.div
                  key={item.src}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setLightbox(item)}
                  className="group relative rounded-2xl overflow-hidden cursor-pointer"
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-60 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                  <div className="absolute inset-0 flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition-all duration-400 translate-y-2 group-hover:translate-y-0">
                    <div className="text-green-400 text-xs font-semibold tracking-widest uppercase mb-1">{item.category}</div>
                    <h3 className="text-white font-semibold text-sm mb-2">{item.title}</h3>
                  </div>
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ZoomIn size={14} className="text-white" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl w-full bg-gray-900 rounded-2xl overflow-hidden border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/80 transition-colors"
              >
                <X size={18} />
              </button>
              <img src={lightbox.src} alt={lightbox.title} className="w-full max-h-[65vh] object-cover" />
              <div className="p-6">
                <div className="text-green-400 text-xs font-semibold tracking-widest uppercase mb-2">{lightbox.category}</div>
                <h3 className="text-white font-bold text-xl mb-2">{lightbox.title}</h3>
                <p className="text-gray-400 text-sm">{lightbox.desc}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
