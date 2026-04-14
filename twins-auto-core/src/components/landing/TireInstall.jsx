import { motion } from 'framer-motion';
import { CheckCircle2, Shield, Truck, Phone, ArrowRight, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';

const easing = [0.16, 1, 0.3, 1];

const included = [
  'Mounting & balancing',
  'Rubber valve stems',
  'Tire disposal',
  'Tires shipped to installer',
  'TPMS reset (no new kit/sensor)',
  '12-month, 24/7 roadside assistance',
];

export default function TireInstall() {
  return (
    <section className="py-20 md:py-28 bg-foreground text-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: easing }}
          >
            <p className="font-body text-sm font-semibold text-primary uppercase tracking-widest mb-3">
              Shop Services
            </p>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-4">
              TIRE
              <br />
              INSTALLATION
            </h2>
            <p className="font-body text-background/60 text-lg leading-relaxed max-w-md mb-8">
              Everything you need, done right — from mounting to roadside protection. 
              Minimum 4 tires. Rims 13″–22″.
            </p>

            {/* Included list */}
            <ul className="space-y-3 mb-10">
              {included.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="font-body text-sm text-background/80">{item}</span>
                </li>
              ))}
            </ul>

            {/* Pledge badge */}
            <div className="flex items-start gap-3 bg-background/5 border border-background/10 rounded-xl p-4 mb-8 max-w-sm">
              <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-heading font-semibold text-sm tracking-wide text-background">
                  Installation Satisfaction Pledge
                </p>
                <p className="font-body text-xs text-background/50 mt-1">
                  Not happy? We'll make it right — guaranteed.
                </p>
              </div>
            </div>

            <a href="#quote">
              <Button
                size="lg"
                className="font-heading font-semibold tracking-wide gap-2 h-12 px-7"
              >
                BOOK INSTALLATION <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
          </motion.div>

          {/* Right — price card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: easing, delay: 0.15 }}
          >
            <div className="bg-background/5 border border-background/10 rounded-2xl p-8 lg:p-10">
              {/* Price */}
              <div className="flex items-end gap-2 mb-2">
                <span className="font-heading font-bold text-6xl lg:text-7xl text-background tracking-tight">
                  $39
                </span>
                <div className="mb-3">
                  <span className="font-heading font-semibold text-2xl text-primary">.99</span>
                  <p className="font-body text-xs text-background/50 leading-tight">per tire</p>
                </div>
              </div>
              <div className="inline-flex items-center gap-1.5 bg-primary/20 border border-primary/30 rounded-full px-3 py-1 mb-8">
                <Truck className="w-3 h-3 text-primary" />
                <span className="font-body text-xs font-semibold text-primary">Min. 4 tires · In-Shop Service</span>
              </div>

              {/* Specs */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                <div className="bg-background/5 rounded-xl p-4 text-center border border-background/10">
                  <p className="font-heading font-bold text-xl text-background">13″</p>
                  <p className="font-body text-xs text-background/50 mt-1">Min Rim Size</p>
                </div>
                <div className="bg-background/5 rounded-xl p-4 text-center border border-background/10">
                  <p className="font-heading font-bold text-xl text-background">22″</p>
                  <p className="font-body text-xs text-background/50 mt-1">Max Rim Size</p>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="flex items-start gap-2 border-t border-background/10 pt-6">
                <Info className="w-3.5 h-3.5 text-background/30 flex-shrink-0 mt-0.5" />
                <p className="font-body text-xs text-background/40 leading-relaxed">
                  Standard installation only. Additional fees may apply for replacement TPMS sensors or oversized vehicles.
                </p>
              </div>
            </div>

            {/* Phone CTA */}
            <a
              href="tel:4029332557"
              className="mt-4 flex items-center justify-center gap-2 font-body text-sm font-semibold text-background/60 hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              Questions? Call (402) 933-2557
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}