import { motion } from 'framer-motion';
import { Phone, Clock, MapPin, ArrowRight, Car } from 'lucide-react';
import { Button } from '@/components/ui/button';

const easing = [0.16, 1, 0.3, 1];

const hours = [
  { day: 'Monday', time: '9:30 AM – 6:00 PM' },
  { day: 'Tuesday', time: '9:30 AM – 6:00 PM' },
  { day: 'Wednesday', time: '9:30 AM – 6:00 PM' },
  { day: 'Thursday', time: '9:30 AM – 6:00 PM' },
  { day: 'Friday', time: '9:30 AM – 6:00 PM' },
  { day: 'Saturday', time: 'Closed' },
  { day: 'Sunday', time: 'Closed' },
];

export default function FooterSection() {
  return (
    <footer id="contact" className="bg-foreground text-background">
      {/* CTA Banner */}
      <div className="border-b border-background/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: easing }}
          >
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-4">
              YOUR CAR DESERVES
              <br />
              <span className="text-primary">TWINS PRECISION.</span>
            </h2>
            <p className="font-body text-background/60 text-lg max-w-md mx-auto mb-8">
              Visit us at 914 S 48th St, Omaha. Schedule your appointment today and experience expert auto care you can trust.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#quote">
                <Button
                  size="lg"
                  className="font-heading font-semibold tracking-wide gap-2 h-14 px-8 text-base"
                >
                  BOOK NOW <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
              <a href="tel:4029332557">
                <Button
                  variant="outline"
                  size="lg"
                  className="font-heading font-semibold tracking-wide gap-2 h-14 px-8 text-base border-background/20 text-background hover:bg-background/10 hover:text-background"
                >
                  <Phone className="w-4 h-4" />
                  CALL (402) 933-2557
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Map + Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">
          {/* Map */}
          <div className="md:col-span-2 lg:col-span-1 rounded-xl overflow-hidden h-64 lg:h-auto border border-background/10">
            <iframe
              title="Twins Auto Repair Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.5!2d-95.9777!3d41.2463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDE0JzQ3LjciTiA5NcKwNTgnMzkuNyJX!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(1) contrast(1.1)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-bold text-sm tracking-[0.2em] uppercase text-background mb-6">
              Contact
            </h3>
            <div className="space-y-4">
              <a
                href="tel:4029332557"
                className="flex items-start gap-3 group"
              >
                <Phone className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-body text-sm font-semibold text-background group-hover:text-primary transition-colors">
                    (402) 933-2557
                  </p>
                  <p className="font-body text-xs text-background/50">Give us a call</p>
                </div>
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-body text-sm font-semibold text-background">
                    914 S 48th Street
                  </p>
                  <p className="font-body text-xs text-background/50">
                    Omaha, NE 68106
                  </p>
                </div>
              </div>
              <a href="mailto:twinsautollc@gmail.com" className="flex items-start gap-3 group">
                <svg className="w-4 h-4 text-primary mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <p className="font-body text-sm font-semibold text-background group-hover:text-primary transition-colors">
                    twinsautollc@gmail.com
                  </p>
                  <p className="font-body text-xs text-background/50">Send us a message</p>
                </div>
              </a>
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-body text-sm font-semibold text-background">
                    Mon–Fri 9:30 AM – 6:00 PM
                  </p>
                  <p className="font-body text-xs text-background/50">
                    Sat &amp; Sun Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Hours Table */}
          <div>
            <h3 className="font-heading font-bold text-sm tracking-[0.2em] uppercase text-background mb-6">
              Hours of Service
            </h3>
            <div className="space-y-2">
              {hours.map((h) => (
                <div
                  key={h.day}
                  className="flex items-center justify-between py-1.5 border-b border-background/5 last:border-0"
                >
                  <span className="font-body text-sm text-background/70">{h.day}</span>
                  <span
                    className={`font-body text-sm font-medium ${
                      h.time === 'Closed' ? 'text-background/40' : 'text-background'
                    }`}
                  >
                    {h.time}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-background/40">
            © {new Date().getFullYear()} Twins Auto Repair. All rights reserved.
          </p>
          <div className="flex items-center gap-1">
            <span className="font-heading font-bold text-sm tracking-tight text-background/60">
              TWINS<span className="text-primary">AUTO</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}