import { motion } from 'framer-motion';
import { Star, ExternalLink } from 'lucide-react';

const easing = [0.16, 1, 0.3, 1];

const reviews = [
  {
    name: 'JOHN EDWARD RYDER',
    text: 'The staff was super friendly and the receptionist at the desk was super awesome!',
    stars: 5,
    source: 'Google',
    ago: '5 months ago',
  },
  {
    name: 'BOBBIE SHERRILL',
    text: 'Highly recommend them to anyone needing reliable and quality auto work!',
    stars: 5,
    source: 'Google',
    ago: '6 months ago',
  },
  {
    name: 'GRANT STONEBRAKER',
    text: 'Great communication and friendly service.',
    stars: 5,
    source: 'Google',
    ago: '7 months ago',
  },
  {
    name: 'TERRY O.',
    text: 'I was very impressed by Jerry, one of the owners of Twins Auto. An unusual noise was coming from my car and I wanted to get it checked before a road trip. Our regular mechanic couldn\'t check it — Twins came through.',
    stars: 5,
    source: 'Yelp',
    ago: '3 months ago',
  },
  {
    name: 'KEYUO C.',
    text: 'I had an extreme family emergency and communication was not the greatest and they were so professional about my situation. They did not have to be but this company is definitely one of the best.',
    stars: 5,
    source: 'Yelp',
    ago: '4 months ago',
  },
  {
    name: '20 G.',
    text: 'Incredible crew with lengthy knowledge of diagnostic and custom skills. Extremely helpful and honest with repairs. If you\'re needing a shop to bring your car, don\'t hesitate to bring it here.',
    stars: 5,
    source: 'Yelp',
    ago: '3 years ago',
  },
  {
    name: 'CHIDI E.',
    text: 'These people are truly the nicest people! I had a broken/displaced latch in my trunk that caused my trunk to not close properly. They went above and beyond to help me out.',
    stars: 5,
    source: 'Yelp',
    ago: '3 years ago',
  },
];

export default function TrustVault() {
  return (
    <section id="reviews" className="py-20 md:py-32 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: easing }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            The Trust Vault
          </p>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-foreground mb-4">
            WALL OF RELIABILITY
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${i < 4 ? 'fill-primary text-primary' : 'fill-primary/40 text-primary/40'}`}
                />
              ))}
            </div>
            <span className="font-body text-muted-foreground font-medium">
              4.3 out of 5 · 389 Reviews
            </span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {reviews.map((review, idx) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: easing, delay: (idx % 3) * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 lg:p-8 hover:shadow-lg transition-shadow duration-500 flex flex-col"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-1">
                  {[...Array(review.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <span className={`font-body text-xs font-semibold px-2.5 py-1 rounded-full ${
                  review.source === 'Yelp'
                    ? 'bg-red-50 text-red-500 border border-red-100'
                    : 'bg-blue-50 text-blue-500 border border-blue-100'
                }`}>
                  {review.source}
                </span>
              </div>
              <blockquote className="font-body text-foreground text-base leading-relaxed mb-6 flex-1">
                "{review.text}"
              </blockquote>
              <div className="border-t border-border pt-4 flex items-center justify-between">
                <p className="font-heading font-bold text-xs tracking-[0.2em] text-foreground">
                  {review.name}
                </p>
                <p className="font-body text-xs text-muted-foreground">{review.ago}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <a
            href="https://www.google.com/maps/place/Twins+Auto+Repair/@41.2463,-95.9777,17z"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-body text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
              <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
            </svg>
            View all Google Reviews
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}