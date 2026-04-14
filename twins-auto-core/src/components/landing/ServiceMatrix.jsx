import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard';

const easing = [0.16, 1, 0.3, 1];

export default function ServiceMatrix({ images }) {
  const services = [
    {
      title: 'Oil Change',
      description: 'Full synthetic and conventional oil changes with multi-point inspection included.',
      image: images.oil,
      startingAt: 'From $39',
      turnaround: '30-Min Service',
    },
    {
      title: 'Brake Repair',
      description: 'Pads, rotors, calipers — complete brake system diagnosis and repair.',
      image: images.brakes,
      startingAt: 'From $149',
      turnaround: '1–2 Hour Service',
    },
    {
      title: 'Engine Rebuild',
      description: 'From minor fixes to full rebuilds. We bring engines back to peak performance.',
      image: images.engine,
      startingAt: 'Custom Quote',
      turnaround: 'Varies by Scope',
    },
    {
      title: 'Diagnostics',
      description: 'Advanced computer diagnostics to pinpoint the problem — no guesswork.',
      image: images.diagnostics,
      startingAt: 'From $49',
      turnaround: '45-Min Assessment',
    },
    {
      title: 'Tires & Alignment',
      description: 'Tire replacement, rotation, balancing, and precision wheel alignment.',
      image: images.tires,
      startingAt: 'From $79',
      turnaround: '1-Hour Service',
    },
    {
      title: 'Transmission',
      description: 'Fluid service, repair, and rebuild for automatic and manual transmissions.',
      image: images.transmission,
      startingAt: 'Custom Quote',
      turnaround: 'Varies by Scope',
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: easing }}
          className="mb-14"
        >
          <p className="font-body text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            Our Capabilities
          </p>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-foreground mb-4">
            THE SERVICE MATRIX
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-xl leading-relaxed">
            From routine maintenance to complex rebuilds — every service 
            delivered with the precision your vehicle deserves.
          </p>
        </motion.div>

        {/* Mobile horizontal scroll */}
        <div className="flex sm:hidden gap-4 overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory scrollbar-hide">
          {services.map((service, idx) => (
            <div key={service.title} className="snap-start">
              <ServiceCard service={service} index={idx} />
            </div>
          ))}
        </div>

        {/* Desktop grid */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <ServiceCard key={service.title} service={service} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}