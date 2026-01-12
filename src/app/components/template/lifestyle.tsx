import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import { ImageWithFallback } from "../molecules/fallback";


const products = [
  {
    id: 1,
    name: "Architectural Coat",
    category: "Outerwear",
    price: "Rp 8.900.000",
    image: "https://images.unsplash.com/photo-1610888968213-4f6d2c068108?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwcHJvZHVjdCUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc2ODEyODAyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 2,
    name: "Minimal Essence",
    category: "Fragrance",
    price: "Rp 3.200.000",
    image: "https://images.unsplash.com/photo-1634274641137-7af0571ad668?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwbWluaW1hbGlzdCUyMGRlc2lnbnxlbnwxfHx8fDE3NjgwNDk5OTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 3,
    name: "Luxe Minimalism",
    category: "Lifestyle",
    price: "Rp 5.400.000",
    image: "https://images.unsplash.com/photo-1638885930125-85350348d266?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsdXh1cnklMjBsaWZlc3R5bGV8ZW58MXx8fHwxNzY4MTI4MDIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 4,
    name: "Timeless Portrait",
    category: "Editorial",
    price: "Rp 12.500.000",
    image: "https://images.unsplash.com/photo-1650338242844-9b1985fae98c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWdoJTIwZmFzaGlvbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2ODEyODAyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

export function LifestyleSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section ref={containerRef} className="py-32 lg:py-48 bg-white">
      <div className="max-w-450 mx-auto px-8 lg:px-0">
       
        <div className="mb-24 lg:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex items-end justify-between"
          >
            <div className="max-w-3xl">
              <span className="block text-[13px] tracking-[0.2em] text-black/40 uppercase mb-6">
                Lifestyle
              </span>
              <h2 className="text-[64px] lg:text-[80px] leading-[0.95] tracking-[-0.04em] text-black">
               Where Luxury Meets Daily Life
              </h2>
            </div>
           
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Large Image Left */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="relative h-[80vh] overflow-hidden bg-neutral-100 group">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBpbnRlcmlvciUyMGxpZmVzdHlsZXxlbnwxfHx8fDE3NjgxMjgzMjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Luxury Interior"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>

          {/* Right Side - Stacked */}
          <div className="lg:col-span-5 flex flex-col gap-8 lg:gap-12">
            {/* Top Image */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="group"
            >
              <div className="relative h-[40vh] overflow-hidden bg-neutral-100 mb-6">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1657757996603-acec063f1d9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwd29ya3NwYWNlJTIwYWVzdGhldGljfGVufDF8fHx8MTc2ODEyODMyM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Minimal Workspace"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div>
                <h3 className="text-[28px] tracking-[-0.02em] text-black mb-3">
                  Workspace Essentials
                </h3>
                <p className="text-[15px] leading-[1.7] text-black/50">
                  Elevate your daily routine dengan accessories yang menggabungkan fungsi dan estetika sempurna.
                </p>
              </div>
            </motion.div>

            {/* Content Block */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-neutral-50 p-8 lg:p-12"
            >
              <span className="text-[13px] tracking-[0.2em] text-black/40 uppercase block mb-6">
                Philosophy
              </span>
              <p className="text-[20px] leading-[1.6] tracking-[-0.01em] text-black mb-6">
                "Luxury bukan tentang harga, tapi tentang kualitas, perhatian terhadap detail, dan pengalaman yang Anda ciptakan."
              </p>
              <div className="text-[14px] text-black/60">
                — Creative Director, NOIRE
              </div>
            </motion.div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="lg:hidden mt-12 text-center"
        >
          <button className="text-[15px] tracking-[-0.01em] text-black/60 hover:text-black transition-colors inline-flex items-center gap-2">
            View All
            <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
            