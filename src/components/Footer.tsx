import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-white/5">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-5">
              <svg width="40" height="40" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="1" width="20" height="20" stroke="#2FA84F" strokeWidth="2" fill="none"/>
                <rect x="23" y="1" width="20" height="20" stroke="#2FA84F" strokeWidth="2" fill="none"/>
                <rect x="1" y="23" width="20" height="20" stroke="#2FA84F" strokeWidth="2" fill="none"/>
                <rect x="23" y="23" width="20" height="20" stroke="#2FA84F" strokeWidth="2" fill="none"/>
                <path d="M3 3 L11 19 L22 3" stroke="#2FA84F" strokeWidth="2.5" fill="none" strokeLinejoin="round" strokeLinecap="round"/>
              </svg>
              <div>
                <div className="text-white font-bold text-base leading-none tracking-wide">MARUTII</div>
                <div className="text-gray-500 text-[9px] tracking-[0.2em]">ENTERPRISE</div>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Premium glass manufacturing and processing solutions. Engineered for clarity, durability, and modern design.
            </p>
            <p className="text-green-400 text-xs font-medium tracking-widest uppercase mb-5">
              Clear Solutions Lasting Impression
            </p>
            {/* Social */}
            <div className="flex items-center gap-3">
              {['f', 'in', 'li', 't'].map((label, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-green-500/20 border border-white/5 hover:border-green-500/30 flex items-center justify-center text-gray-400 hover:text-green-400 transition-all duration-300 text-xs font-bold"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', path: '/' },
                { label: 'About Us', path: '/about' },
                { label: 'Products', path: '/products' },
                { label: 'Gallery', path: '/gallery' },
                { label: 'Contact', path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-green-400 text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <ArrowRight size={12} className="text-green-500 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-6">Products</h4>
            <ul className="space-y-3">
              {[
                { label: 'Toughened Glass', path: '/products/toughened-glass' },
                { label: 'Laminated Glass', path: '/products/laminated-glass' },
                { label: 'Insulated Glass', path: '/products/insulated-glass' },
                { label: 'Decorative Glass', path: '/products/decorative-glass' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-green-400 text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <ArrowRight size={12} className="text-green-500 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-green-500 mt-0.5 shrink-0" />
                <span className="text-gray-400 text-sm leading-relaxed">
                  Mogri - Gana Rd, Gana,<br />
                  Gujarat 388345, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="text-green-500 shrink-0" />
                <a href="tel:+919725724705" className="text-gray-400 hover:text-green-400 text-sm transition-colors">
                  +91 97257 24705
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="text-green-500 shrink-0" />
                <a href="mailto:info@marutiienterprise.com" className="text-gray-400 hover:text-green-400 text-sm transition-colors">
                  info@marutiienterprise.com
                </a>
              </li>
            </ul>

            <div className="mt-6 p-4 rounded-xl bg-green-500/5 border border-green-500/15">
              <p className="text-gray-400 text-xs mb-2">Business Hours</p>
              <p className="text-white text-sm font-medium">Mon–Sat: 9:00 AM – 8:00 PM</p>
              <p className="text-gray-500 text-xs mt-1">Sunday: 9:00 AM – 8:00 PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Marutii Enterprise. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-500 hover:text-gray-400 text-xs transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-gray-400 text-xs transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-gray-400 text-xs transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
