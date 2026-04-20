import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  {
    label: 'Products', path: '/products',
    children: [
      { label: 'Toughened Glass', path: '/products/toughened-glass' },
      { label: 'Laminated Glass', path: '/products/laminated-glass' },
      { label: 'Insulated Glass', path: '/products/insulated-glass' },
      { label: 'Decorative Glass', path: '/products/decorative-glass' },
    ]
  },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [location.pathname]);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-gray-950/95 backdrop-blur-xl border-b border-white/5 shadow-2xl shadow-black/40'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="1" width="20" height="20" stroke="#2FA84F" strokeWidth="2" fill="none"/>
                <rect x="23" y="1" width="20" height="20" stroke="#2FA84F" strokeWidth="2" fill="none"/>
                <rect x="1" y="23" width="20" height="20" stroke="#2FA84F" strokeWidth="2" fill="none"/>
                <rect x="23" y="23" width="20" height="20" stroke="#2FA84F" strokeWidth="2" fill="none"/>
                <path d="M3 3 L11 19 L22 3" stroke="#2FA84F" strokeWidth="2.5" fill="none" strokeLinejoin="round" strokeLinecap="round"/>
              </svg>
            </div>
            <div>
              <div className="text-white font-bold text-lg leading-none tracking-wide font-poppins">
                MARUTII
              </div>
              <div className="text-gray-400 text-[10px] tracking-[0.2em] font-medium">
                ENTERPRISE
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              link.children ? (
                <div key={link.label} className="relative group">
                  <button
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                    className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      location.pathname.startsWith('/products')
                        ? 'text-green-400'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {link.label}
                    <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
                  </button>
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        onMouseEnter={() => setDropdownOpen(true)}
                        onMouseLeave={() => setDropdownOpen(false)}
                        className="absolute top-full left-0 mt-1 w-52 bg-gray-900/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden"
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            className="flex items-center px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-green-500/10 transition-all duration-200 border-b border-white/5 last:border-0"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-3 opacity-60" />
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    location.pathname === link.path
                      ? 'text-green-400'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              )
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/contact"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-2.5 rounded-lg transition-all duration-300 text-sm shadow-lg shadow-green-500/20"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-gray-950/98 backdrop-blur-xl border-t border-white/5 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <Link
                    to={link.path}
                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                      location.pathname === link.path
                        ? 'text-green-400 bg-green-500/10'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="pl-4 space-y-1 mt-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className="block px-4 py-2.5 rounded-lg text-xs font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-200"
                        >
                          → {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-3 border-t border-white/5">
                <Link
                  to="/contact"
                  className="block w-full text-center bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-3 rounded-lg transition-all duration-300 text-sm"
                >
                  Get Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
