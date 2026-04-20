import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { fadeUp, stagger } from '../utils/animations';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

function AnimatedSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div ref={ref} variants={stagger} initial="hidden" animate={inView ? 'visible' : 'hidden'} className={className}>
      {children}
    </motion.div>
  );
}

const contactInfo = [
  {
    icon: MapPin,
    title: 'Visit Our Facility',
    lines: ['Mogri - Gana Rd, Gana,', 'near Anand,', 'Gujarat 388345, India'],
  },
  {
    icon: Phone,
    title: 'Call Us',
    lines: ['+91 97257 24705'],
  },
  {
    icon: Mail,
    title: 'Email Us',
    lines: ['info@marutiienterprise.com', 'sales@marutiienterprise.com'],
  },
  {
    icon: Clock,
    title: 'Business Hours',
    lines: ['Monday – Saturday: 9:00 AM – 6:00 PM', 'Sunday: Closed'],
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '', company: '', email: '', phone: '', product: '', message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-green-500/5 blur-3xl" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <AnimatedSection>
            <motion.div variants={fadeUp} className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-semibold px-4 py-2 rounded-full mb-6 tracking-widest uppercase">
                Contact Us
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-5 leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Let's Start Your
                <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent"> Glass Project</span>
              </h1>
              <p className="text-gray-400 text-lg">
                Reach out to our team for product inquiries, custom quotes, or technical consultations.
              </p>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <AnimatedSection className="space-y-5">
                {contactInfo.map((info) => (
                  <motion.div key={info.title} variants={fadeUp}>
                    <div className="rounded-2xl p-6 bg-gray-50 border border-gray-100 hover:border-green-200 transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className="w-11 h-11 rounded-xl bg-green-50 border border-green-100 flex items-center justify-center shrink-0">
                          <info.icon size={20} className="text-green-500" />
                        </div>
                        <div>
                          <div className="text-gray-900 font-semibold text-sm mb-2">{info.title}</div>
                          {info.lines.map((line, i) => (
                            <div key={i} className="text-gray-500 text-sm leading-relaxed">{line}</div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatedSection>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <AnimatedSection>
                <motion.div variants={fadeUp}>
                  <div className="rounded-2xl border border-gray-100 shadow-xl overflow-hidden">
                    <div className="bg-gray-950 px-8 py-6">
                      <h2 className="text-white font-bold text-2xl" style={{ fontFamily: 'Poppins, sans-serif' }}>Send Us an Inquiry</h2>
                      <p className="text-gray-400 text-sm mt-1">We'll respond within 1 business day</p>
                    </div>

                    {submitted ? (
                      <div className="p-12 text-center">
                        <div className="w-16 h-16 rounded-full bg-green-50 border-2 border-green-200 flex items-center justify-center mx-auto mb-5">
                          <CheckCircle size={32} className="text-green-500" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Thank You!</h3>
                        <p className="text-gray-500 max-w-md mx-auto">
                          Your inquiry has been received. Our team will get back to you within 1 business day.
                        </p>
                        <button
                          onClick={() => { setSubmitted(false); setForm({ name: '', company: '', email: '', phone: '', product: '', message: '' }); }}
                          className="mt-6 text-green-500 hover:text-green-600 text-sm font-medium transition-colors"
                        >
                          Send Another Inquiry
                        </button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="p-8 space-y-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <div>
                            <label className="block text-gray-700 text-sm font-medium mb-2">Full Name *</label>
                            <input
                              type="text" name="name" value={form.name} onChange={handleChange} required
                              placeholder="Your name"
                              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-400 focus:ring-2 focus:ring-green-400/10 outline-none text-sm text-gray-800 placeholder-gray-400 transition-all bg-gray-50"
                            />
                          </div>
                          <div>
                            <label className="block text-gray-700 text-sm font-medium mb-2">Company Name</label>
                            <input
                              type="text" name="company" value={form.company} onChange={handleChange}
                              placeholder="Your company"
                              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-400 focus:ring-2 focus:ring-green-400/10 outline-none text-sm text-gray-800 placeholder-gray-400 transition-all bg-gray-50"
                            />
                          </div>
                          <div>
                            <label className="block text-gray-700 text-sm font-medium mb-2">Email Address *</label>
                            <input
                              type="email" name="email" value={form.email} onChange={handleChange} required
                              placeholder="your@email.com"
                              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-400 focus:ring-2 focus:ring-green-400/10 outline-none text-sm text-gray-800 placeholder-gray-400 transition-all bg-gray-50"
                            />
                          </div>
                          <div>
                            <label className="block text-gray-700 text-sm font-medium mb-2">Phone Number</label>
                            <input
                              type="tel" name="phone" value={form.phone} onChange={handleChange}
                              placeholder="+91 XXXXX XXXXX"
                              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-400 focus:ring-2 focus:ring-green-400/10 outline-none text-sm text-gray-800 placeholder-gray-400 transition-all bg-gray-50"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-gray-700 text-sm font-medium mb-2">Product Interest</label>
                          <select
                            name="product" value={form.product} onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-400 focus:ring-2 focus:ring-green-400/10 outline-none text-sm text-gray-800 transition-all bg-gray-50"
                          >
                            <option value="">Select a product category</option>
                            <option>Toughened Glass</option>
                            <option>Laminated Glass</option>
                            <option>Insulated Glass</option>
                            <option>Decorative Glass</option>
                            <option>Custom / Multiple Products</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-gray-700 text-sm font-medium mb-2">Message / Requirements *</label>
                          <textarea
                            name="message" value={form.message} onChange={handleChange} required rows={5}
                            placeholder="Describe your project requirements, dimensions, quantity, timeline..."
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-400 focus:ring-2 focus:ring-green-400/10 outline-none text-sm text-gray-800 placeholder-gray-400 transition-all resize-none bg-gray-50"
                          />
                        </div>

                        <button
                          type="submit"
                          className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-green-500/20 text-sm"
                        >
                          <Send size={16} />
                          Send Inquiry
                        </button>
                      </form>
                    )}
                  </div>
                </motion.div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <AnimatedSection>
            <motion.div variants={fadeUp}>
              <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-xl">
                <div className="bg-gray-950 px-8 py-5">
                  <h3 className="text-white font-bold text-lg">Find Us</h3>
                  <p className="text-gray-400 text-sm">Mogri - Gana Rd, Gana, Gujarat</p>
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.7121531693697!2d72.92689299999999!3d22.514980499999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e4d00139efcef%3A0x9ce2d11bd5ceb708!2sMaruti%20enterprise%20glass%20shop!5e0!3m2!1sen!2sin!4v1776688470808!5m2!1sen!2sin"
                  width="100%"
                  height="420"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Marutii Enterprise Location"
                />
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </motion.div>
  );
}
