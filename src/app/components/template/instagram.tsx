import { motion } from "framer-motion";
import { Instagram, InstagramIcon } from "lucide-react";

const instagramImages = [
  "https://images.unsplash.com/photo-1719518411339-5158cea86caf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
  "https://images.unsplash.com/photo-1610888968213-4f6d2c068108?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
  "https://images.unsplash.com/photo-1634274641137-7af0571ad668?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
  "https://images.unsplash.com/photo-1638885930125-85350348d266?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
  "https://images.unsplash.com/photo-1650338242844-9b1985fae98c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
  "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
];

export function InstagramSection() {
  return (
    <section className="py-32 lg:py-48 bg-neutral-50">
      <div className="lg:max-w-450 mx-auto px-8 lg:px-0">
 
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 lg:mb-24 text-center"
        >
          <span className="block text-[13px] tracking-[0.2em] text-black/40 uppercase mb-6">
            Follow Us
          </span>
          <h2 className="text-[56px] lg:text-[72px] leading-[0.95] tracking-[-0.04em] text-black mb-8">
            @lunar
          </h2>
          <p className="text-[18px] text-black/50 max-w-xl mx-auto mb-8">
            Join our community dan dapatkan daily inspiration dari latest collections dan behind-the-scenes moments.
          </p>
          <motion.a
            href="#"
            className="inline-flex items-center gap-3 text-[15px] tracking-[-0.01em] text-black hover:text-black/60 transition-colors"
            whileHover={{ y: -2 }}
          >
            <InstagramIcon className="w-5 h-5" strokeWidth={1.5} />
            <span>Follow on Instagram</span>
          </motion.a>
        </motion.div>

      
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
          {instagramImages.map((image, index) => (
            <motion.a
              key={index}
              href="#"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="group relative aspect-square overflow-hidden bg-neutral-100"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={image}
                alt={`Instagram post ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <Instagram className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" strokeWidth={1.5} />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
