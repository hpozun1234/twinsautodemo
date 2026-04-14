import { motion } from 'framer-motion';
import { Wrench, Users, Calendar, MapPin } from 'lucide-react';

const easing = [0.16, 1, 0.3, 1];

const stats = [
  { icon: Calendar, label: 'Years in Business', value: '15+' },
  { icon: Users, label: 'Happy Customers', value: '10K+' },
  { icon: Wrench, label: 'Repairs Completed', value: '50K+' },
  { icon: MapPin, label: 'Location', value: 'Omaha, NE' },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: easing }}
          >
            <p className="font-body text-sm font-semibold text-primary uppercase tracking-widest mb-3">
              About Twins Auto Repair
            </p>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-foreground mb-6">
              LOCALLY OWNED.
              <br />
              PRECISION DRIVEN.
            </h2>
            <div className="space-y-4 font-body text-muted-foreground text-base leading-relaxed">
              <p>
                For over 15 years, Twins Auto Repair has helped keep your essential vehicle on the road. 
                Family owned and operated right here in Omaha — we've built our reputation entirely on 
                word-of-mouth and repeat customers.
              </p>
              <p>
                We believe in honest diagnostics, transparent pricing, and treating every vehicle like 
                it's our own. From routine oil changes to complete engine rebuilds, we bring the same 
                level of care and precision to every job.
              </p>
              <p>
                When you bring your car to Twins, you're not just another work order. You're family.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: easing, delay: 0.15 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: easing, delay: 0.2 + idx * 0.1 }}
                className="bg-secondary/60 border border-border rounded-xl p-6 text-center"
              >
                <stat.icon className="w-6 h-6 text-primary mx-auto mb-3" />
                <p className="font-heading font-bold text-2xl text-foreground mb-1">
                  {stat.value}
                </p>
                <p className="font-body text-xs text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}