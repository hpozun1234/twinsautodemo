import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const easing = [0.16, 1, 0.3, 1];

const photos = [
  {
    url: 'https://media.base44.com/images/public/69de997cf2dfa97e177af51f/0b7060bee_image.png',
    label: 'Custom Engine Work',
  },
  {
    url: 'https://media.base44.com/images/public/69de997cf2dfa97e177af51f/28efa8f64_image.png',
    label: 'Expert Technicians',
  },
  {
    url: 'https://media.base44.com/images/public/69de997cf2dfa97e177af51f/5447dfeca_image.png',
    label: 'Lift & Suspension',
  },
  {
    url: 'https://media.base44.com/images/public/69de997cf2dfa97e177af51f/7e3d1d532_image.png',
    label: 'Performance Builds',
  },
  {
    url: 'https://media.base44.com/images/public/69de997cf2dfa97e177af51f/bbe47ba19_image.png',
    label: 'Engine Diagnostics',
  },
  {
    url: 'https://media.base44.com/images/public/69de997cf2dfa97e177af51f/414f2cf21_image.png',
    label: 'Brake & Wheel Service',
  },
];

export default function PhotoGallery() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: easing }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10"
        >
          <div>
            <p className="font-body text-sm font-semibold text-primary uppercase tracking-widest mb-3">
              Our Work
            </p>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-foreground">
              FROM THE SHOP
            </h2>
          </div>
          <a
            href="https://www.instagram.com/twinsautorepair"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-body text-sm font-semibold text-primary hover:gap-3 transition-all flex-shrink-0"
          >
            Follow us on Instagram <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {photos.map((photo, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: easing, delay: (idx % 4) * 0.08 }}
              className="relative group overflow-hidden rounded-xl aspect-square bg-secondary"
            >
              <img
                src={photo.url}
                alt={photo.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/50 transition-all duration-300 flex items-end p-4">
                <span className="font-heading font-semibold text-xs tracking-widest text-white uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                  {photo.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}