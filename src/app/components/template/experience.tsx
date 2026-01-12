import { motion } from "framer-motion";
import { ImageWithFallback } from "../molecules/fallback";

const experiences = [
  {
    title: "Curated Excellence",
    description: "Setiap piece dipilih dengan teliti untuk memastikan kualitas dan keunikan yang tak tertandingi.",
  },
  {
    title: "Timeless Design",
    description: "Desain yang melampaui tren, menciptakan wardrobe yang akan Anda hargai selamanya.",
  },
  {
    title: "Conscious Luxury",
    description: "Komitmen pada keberlanjutan tanpa mengorbankan kemewahan atau gaya.",
  },
];

export function ExperienceSection() {
  return (
    <section className="py-32 lg:py-48 bg-neutral-50">
      <div className="max-w-450 mx-auto px-8 lg:px-0">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-[80vh] lg:h-[90vh]"
          >
            <div className="relative h-full overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1554671557-0def73b2e67e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwYXJjaGl0ZWN0dXJlJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY4MTIxNjIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Minimal Architecture"
                className="w-full h-full object-cover"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute bottom-12 right-0 lg:-right-12 bg-white p-8 lg:p-12 max-w-xs"
            >
              <div className="text-[56px] tracking-[-0.03em] text-black mb-2">
                98%
              </div>
              <p className="text-[15px] leading-[1.6] text-black/50">
                Customer satisfaction melalui pengalaman berbelanja yang personal dan eksklusif
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="block text-[13px] tracking-[0.2em] text-black/40 uppercase mb-8">
              Philosophy
            </span>
            
            <h2 className="text-[48px] lg:text-[64px] leading-[1.1] tracking-[-0.03em] text-black mb-12">
              Crafting<br />Experiences,<br />Not Just Products
            </h2>

            <div className="space-y-12 mb-16">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 * index, duration: 0.6 }}
                  className="border-l border-black/20 pl-8"
                >
                  <h3 className="text-[24px] tracking-[-0.01em] text-black mb-3">
                    {exp.title}
                  </h3>
                  <p className="text-[16px] leading-[1.7] text-black/50">
                    {exp.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="px-12 py-5 bg-black text-white text-[15px] tracking-[-0.01em] hover:bg-black/90 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Discover Our Story
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
