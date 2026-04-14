import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, CheckCircle2 } from 'lucide-react';
import { base44 } from '@/api/base44Client';
import { toast } from 'sonner';

const easing = [0.16, 1, 0.3, 1];

export default function HeroSection() {
  const [vehicleInfo, setVehicleInfo] = useState('');
  const [phone, setPhone] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!vehicleInfo || !phone) return;
    setSubmitting(true);
    await base44.entities.LeadRequest.create({
      vehicle_info: vehicleInfo,
      phone: phone,
      service_needed: 'General Diagnostic',
      status: 'new',
    });
    setSubmitting(false);
    setSubmitted(true);
    setVehicleInfo('');
    setPhone('');
    toast.success('Request received! We\'ll call you shortly.');
  };

  return (
    <section id="quote" className="relative min-h-screen flex items-center pt-28 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[calc(100vh-5rem)]">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: easing }}
            className="order-2 lg:order-1 pb-8 lg:pb-0"
          >
            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl tracking-tight text-foreground leading-[1.05] mb-6">
              PRECISION
              <br />
              <span className="text-primary">AUTO CARE</span>
              <br />
              YOU CAN TRUST
            </h1>

            <p className="font-body text-lg text-muted-foreground max-w-md mb-8 leading-relaxed">
            Omaha's trusted auto repair shop. Honest diagnostics, expert repairs, and transparent pricing on every job.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              {['Transparent Pricing', 'All Makes & Models'].map(
                (item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="font-body text-sm font-medium text-foreground">
                      {item}
                    </span>
                  </div>
                )
              )}
            </div>

            {/* Lead Form */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-lg max-w-md">
              <div className="flex items-center gap-2 mb-4">
                <Shield className="w-5 h-5 text-primary" />
                <span className="font-heading font-semibold text-sm tracking-wide uppercase text-foreground">
                  Free Diagnostic Quote
                </span>
              </div>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-6"
                >
                  <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-3" />
                  <p className="font-heading font-semibold text-lg text-foreground">
                    We've Got Your Request!
                  </p>
                  <p className="font-body text-sm text-muted-foreground mt-1">
                    A team member will call you shortly.
                  </p>
                  <Button
                    variant="ghost"
                    className="mt-4 text-primary"
                    onClick={() => setSubmitted(false)}
                  >
                    Submit another request
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <Input
                    placeholder="Vehicle Year, Make & Model"
                    value={vehicleInfo}
                    onChange={(e) => setVehicleInfo(e.target.value)}
                    className="font-body h-12 bg-secondary/50 border-border"
                    required
                  />
                  <Input
                    placeholder="Phone Number"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="font-body h-12 bg-secondary/50 border-border"
                    required
                  />
                  <Button
                    type="submit"
                    className="w-full h-12 font-heading font-semibold tracking-wide text-sm gap-2"
                    disabled={submitting}
                  >
                    {submitting ? 'SUBMITTING...' : 'SECURE YOUR DIAGNOSTIC'}
                    {!submitting && <ArrowRight className="w-4 h-4" />}
                  </Button>
                  <p className="text-xs text-center text-muted-foreground font-body">
                    No obligation. We'll call to confirm your appointment.
                  </p>
                </form>
              )}
            </div>
          </motion.div>

          {/* Right - Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: easing, delay: 0.15 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative flex items-center justify-center aspect-[3/4] max-h-[70vh] lg:max-h-none">
              <img
                src="https://media.base44.com/images/public/69de997cf2dfa97e177af51f/b2885974e_image.png"
                alt="Twins Auto Repair Logo"
                className="w-full h-full object-contain"
                style={{
                  maskImage: 'radial-gradient(ellipse 80% 70% at 50% 60%, black 35%, transparent 75%)',
                  WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 50% 60%, black 35%, transparent 75%)',
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}