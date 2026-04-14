import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const easing = [0.16, 1, 0.3, 1];

const brands = [
  'Pirelli', 'Yokohama', 'Toyo', 'Falken', 'Kenda', 'Firestone',
  'General', 'Hankook', 'Nokian', 'Carlisle', 'Crosswind', 'Primewell',
  'Nitto', 'Kumho', 'Continental', 'Venom Power', 'Bridgestone', 'Fuzion',
  'Mickey Thompson', 'GT Radial', 'Nexen', 'Lexani', 'Laufenn',
];

// Split into two rows for the marquee
const row1 = brands.slice(0, 12);
const row2 = brands.slice(12);

function MarqueeRow({ items, reverse = false }) {
  return (
    <div className="relative flex overflow-hidden">
      <motion.div
        animate={{ x: reverse ? ['0%', '50%'] : ['0%', '-50%'] }}
        transition={{ duration: 30, ease: 'linear', repeat: Infinity }}
        className="flex gap-3 flex-shrink-0"
      >
        {[...items, ...items].map((brand, i) => (
          <div
            key={`${brand}-${i}`}
            className="flex-shrink-0 flex items-center justify-center px-6 py-3 bg-card border border-border rounded-lg hover:border-primary/40 hover:bg-secondary transition-all duration-300 cursor-default group"
          >
            <span className="font-heading font-semibold text-sm tracking-wide text-muted-foreground group-hover:text-foreground transition-colors whitespace-nowrap">
              {brand.toUpperCase()}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function TireBrands() {
  return (
    <section className="py-20 md:py-28 bg-secondary/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: easing }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6"
        >
          <div>
            <p className="font-body text-sm font-semibold text-primary uppercase tracking-widest mb-3">
              Tires
            </p>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-foreground">
              TOP BRANDS.
              <br />
              LATEST INVENTORY.
            </h2>
            <p className="font-body text-lg text-muted-foreground mt-4 max-w-lg leading-relaxed">
              We carry 23+ premium tire brands — from everyday commuter tires to 
              high-performance rubber. All the good stuff, installed at your door.
            </p>
          </div>
          <a
            href="#quote"
            className="inline-flex items-center gap-2 font-body text-sm font-semibold text-primary hover:gap-3 transition-all flex-shrink-0"
          >
            Get a tire quote <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>

      {/* Marquee rows */}
      <div className="space-y-3">
        <MarqueeRow items={row1} reverse={false} />
        <MarqueeRow items={row2} reverse={true} />
      </div>

      {/* All brands grid (visible on larger screens, collapsed behind toggle on mobile) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <details className="group">
          <summary className="list-none flex items-center gap-2 cursor-pointer font-body text-sm font-semibold text-primary w-fit">
            <ArrowRight className="w-4 h-4 transition-transform group-open:rotate-90" />
            See all {brands.length} brands
          </summary>
          <motion.div
            className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2"
          >
            {brands.map((brand) => (
              <div
                key={brand}
                className="flex items-center justify-center px-4 py-3 bg-card border border-border rounded-lg text-center"
              >
                <span className="font-heading font-semibold text-xs tracking-wider text-muted-foreground uppercase">
                  {brand}
                </span>
              </div>
            ))}
          </motion.div>
        </details>
      </div>
    </section>
  );
}