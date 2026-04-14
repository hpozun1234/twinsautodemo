import { motion } from 'framer-motion';
import { Clock, ArrowRight } from 'lucide-react';

export default function ServiceCard({ service, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
      className="group relative bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-500 min-w-[280px] sm:min-w-0 flex-shrink-0 sm:flex-shrink"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:grayscale"
        />
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/60 transition-all duration-500 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 text-center text-white px-4">
            {service.startingAt && (
              <p className="font-heading font-bold text-2xl mb-1">{service.startingAt}</p>
            )}
            {service.turnaround && (
              <div className="flex items-center justify-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                <span className="font-body text-sm">{service.turnaround}</span>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-heading font-semibold text-base tracking-wide uppercase text-foreground mb-2">
          {service.title}
        </h3>
        <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
          {service.description}
        </p>
        <a
          href="#quote"
          className="inline-flex items-center gap-1.5 font-body text-sm font-semibold text-primary hover:gap-2.5 transition-all"
        >
          Get Estimate <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </motion.div>
  );
}