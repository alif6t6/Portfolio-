import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { personalInfo } from '../data';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen ? 'py-4 bg-[#0b0f19]/80 backdrop-blur-2xl border-b border-white/10 shadow-lg' : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between relative z-50">
        <a href="#" aria-label="Home" className="text-2xl font-black tracking-tight text-white flex items-center gap-2 group interactive-ripple p-1 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE]">
          <img src={personalInfo.profileImage} alt="Hridoy Shikder Profile" className="w-8 h-8 rounded-lg object-cover border border-white/10" referrerPolicy="no-referrer" fetchPriority="high" loading="eager" decoding="sync" />
          <span className="group-hover:text-[#22D3EE] transition-colors uppercase tracking-wider text-xl">HRIDOY SHIKDER</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative group py-2 interactive-ripple rounded-md px-2 outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE]"
            >
              {link.name}
              <span className="absolute bottom-1 left-2 w-0 h-[2px] bg-[#22D3EE] transition-all duration-300 group-hover:w-[calc(100%-16px)] rounded-full"></span>
            </a>
          ))}
          <a
            href="#contact"
            className="ml-4 px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-semibold transition-all hover:border-[#22D3EE]/50 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] interactive-ripple premium-hover outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE]"
          >
            Hire Me
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white p-2 interactive-ripple rounded-full outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Full-screen backdrop blur overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-[#0b0f19]/70 backdrop-blur-xl z-40 md:hidden"
            />
            {/* Mobile Menu Content */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 p-6 flex flex-col gap-4 md:hidden shadow-2xl z-50 bg-[#0b0f19]/80 backdrop-blur-3xl border-b border-white/10"
              role="navigation"
              aria-label="Mobile Navigation"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xl font-bold text-white hover:text-[#22D3EE] py-4 border-b border-white/10 transition-colors text-center font-['Urbanist',sans-serif] tracking-wide interactive-ripple rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE]"
                >
                  {link.name}
                </a>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
