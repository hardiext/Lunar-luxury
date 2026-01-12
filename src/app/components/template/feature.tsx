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

export function FeaturedProducts() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section ref={containerRef} className="py-32 lg:py-48 bg-white">
      <div className="max-w-450 mx-auto px-8 lg:px-0">
        {/* Header */}
        <div className="mb-24 lg:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex items-end justify-between"
          >
            <div>
              <span className="block text-[13px] tracking-[0.2em] text-black/40 uppercase mb-6">
                Curated Selection
              </span>
              <h2 className="text-[64px] lg:text-[80px] leading-[0.95] tracking-[-0.04em] text-black">
                The Edit
              </h2>
            </div>
            <motion.button
              className="hidden lg:flex items-center gap-2 text-[15px] tracking-[-0.01em] text-black/60 hover:text-black transition-colors group"
              whileHover={{ x: 4 }}
            >
              View All
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" strokeWidth={1.5} />
            </motion.button>
          </motion.div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Large Featured Item */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 group cursor-pointer"
          >
            <div className="relative h-[70vh] lg:h-[80vh] overflow-hidden bg-neutral-100">
              <ImageWithFallback
                src={products[0].image}
                alt={products[0].name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
              
              <motion.div
                className="absolute bottom-0 left-0 right-0 p-8 lg:p-12 bg-linear-to-t from-black/80 to-transparent"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <span className="text-[11px] tracking-[0.2em] text-white/60 uppercase block mb-3">
                  {products[0].category}
                </span>
                <h3 className="text-[36px] lg:text-[48px] tracking-[-0.02em] text-white mb-4">
                  {products[0].name}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-[20px] tracking-[-0.01em] text-white">
                    {products[0].price}
                  </span>
                  <ArrowUpRight className="w-6 h-6 text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" strokeWidth={1.5} />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Smaller Items Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-6 lg:gap-8">
            {products.slice(1).map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative h-[40vh] lg:h-[25vh] overflow-hidden bg-neutral-100">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                </div>
                <div className="pt-6">
                  <span className="text-[11px] tracking-[0.2em] text-black/40 uppercase block mb-2">
                    {product.category}
                  </span>
                  <div className="flex items-start justify-between">
                    <h3 className="text-[20px] tracking-[-0.01em] text-black">
                      {product.name}
                    </h3>
                    <span className="text-[16px] tracking-[-0.01em] text-black/60">
                      {product.price}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile View All Button */}
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
            