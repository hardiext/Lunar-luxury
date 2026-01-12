import { motion } from "framer-motion";
import { ImageWithFallback } from "../molecules/fallback";
const services = [
  {
    number: "01",
    title: "Personal Styling",
    description: "Konsultasi one-on-one dengan style expert kami untuk menciptakan wardrobe yang sempurna untuk Anda.",
  },
  {
    number: "02",
    title: "Private Appointment",
    description: "Booking private session di studio kami untuk pengalaman shopping yang eksklusif dan personal.",
  },
  {
    number: "03",
    title: "Bespoke Service",
    description: "Custom order dan alterasi untuk memastikan setiap piece fit perfectly sesuai kebutuhan Anda.",
  },
  {
    number: "04",
    title: "White Glove Delivery",
    description: "Pengiriman premium dengan packaging mewah dan handling yang sangat berhati-hati.",
  },
];

export function ServicesSection() {
  return (
    <section className="py-32 lg:py-48 bg-black text-white">
      <div className="lg:max-w-450 mx-auto px-8 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
      
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-[70vh] lg:h-full"
          >
            <div className="sticky top-32 h-[70vh] overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1753029226995-74b05a344bb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBmYXNoaW9uJTIwc3RvcmV8ZW58MXx8fHwxNzY4MTI4MzI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Modern Fashion Store"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="block text-[13px] tracking-[0.2em] text-white/40 uppercase mb-8">
              Concierge Services
            </span>
            
            <h2 className="text-[56px] lg:text-[72px] leading-[0.95] tracking-[-0.04em] text-white mb-16">
              Personalized Excellence
            </h2>

            <div className="space-y-16">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, duration: 0.6 }}
                  className="border-t border-white/10 pt-8"
                >
                  <span className="text-[11px] tracking-[0.2em] text-white/30 uppercase block mb-6">
                    {service.number}
                  </span>
                  <h3 className="text-[32px] tracking-[-0.02em] text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-[16px] leading-[1.7] text-white/60 max-w-md">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-16 pt-16 border-t border-white/10"
            >
              <motion.button
                className="px-12 py-5 bg-white text-black text-[15px] tracking-[-0.01em] hover:bg-white/90 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Book an Appointment
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
