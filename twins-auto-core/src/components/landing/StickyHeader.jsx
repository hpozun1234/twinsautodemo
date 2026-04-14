import { useState, useEffect } from 'react';
import { Phone, Clock, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

export default function StickyHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-150 ${
        scrolled
          ? 'bg-white shadow-sm border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <span className="font-heading font-bold text-lg md:text-xl tracking-tight text-foreground">
              TWINS<span className="text-primary">AUTO</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-body text-sm font-medium text-muted-foreground hover:text-foreground transition-colors tracking-wide uppercase"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3 md:gap-4">
            <div className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="w-3.5 h-3.5 text-primary" />
              <span className="font-body font-medium">Mon–Fri · 9:30–6 PM</span>
            </div>
            <a href="tel:4029332557" className="hidden sm:block">
              <Button
                variant="outline"
                size="sm"
                className="font-body font-semibold gap-2 border-foreground/20 hover:bg-foreground hover:text-background transition-all"
              >
                <Phone className="w-3.5 h-3.5" />
                (402) 933-2557
              </Button>
            </a>
            <a href="#quote" className="hidden md:block">
              <Button size="sm" className="font-heading font-semibold tracking-wide">
                GET QUOTE
              </Button>
            </a>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 -mr-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-border overflow-hidden"
          >
            <nav className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-3 px-3 font-body text-sm font-medium text-foreground hover:bg-secondary rounded-lg transition-colors uppercase tracking-wide"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 space-y-2">
                <a href="tel:4029332557" className="block">
                  <Button variant="outline" className="w-full font-body font-semibold gap-2">
                    <Phone className="w-4 h-4" />
                    (402) 933-2557
                  </Button>
                </a>
                <a href="#quote" onClick={() => setMenuOpen(false)} className="block">
                  <Button className="w-full font-heading font-semibold tracking-wide">
                    GET YOUR QUOTE
                  </Button>
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}